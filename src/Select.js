import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-input-autosize';
import classNames from 'classnames';
import * as _ from "lodash";
import TetherComponent from 'react-tether';

import stripDiacritics from './utils/stripDiacritics';

import Async from './Async';
import Option from './Option';
import Value from './Value';

function stringifyValue (value) {
	if (typeof value === 'object') {
		return JSON.stringify(value);
	} else {
		return value;
	}
}

const stringOrNode = React.PropTypes.oneOfType([
	React.PropTypes.string,
	React.PropTypes.node
]);

const Select = React.createClass({

	displayName: 'Select',

	propTypes: {
		addLabelText: React.PropTypes.string,       // placeholder displayed when you want to add a label on a multi-value input
		allowCreate: React.PropTypes.bool,          // whether to allow creation of new entries
		autoBlur: React.PropTypes.bool,
		autofocus: React.PropTypes.bool,            // autofocus the component on mount
		backspaceRemoves: React.PropTypes.bool,     // whether backspace removes an item if there is no text input
		className: React.PropTypes.string,          // className for the outer element
		clearAllText: stringOrNode,                 // title for the "clear" control when multi: true
		clearValueText: stringOrNode,               // title for the "clear" control
		clearable: React.PropTypes.bool,            // should it be possible to reset value
		delimiter: React.PropTypes.string,          // delimiter to use to join multiple values for the hidden field value
		disabled: React.PropTypes.bool,             // whether the Select is disabled or not
		escapeClearsValue: React.PropTypes.bool,    // whether escape clears the value when the menu is closed
		filterOption: React.PropTypes.func,         // method to filter a single option (option, filterString)
		filterOptions: React.PropTypes.any,         // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
		ignoreAccents: React.PropTypes.bool,        // whether to strip diacritics when filtering
		ignoreCase: React.PropTypes.bool,           // whether to perform case-insensitive filtering
		inputProps: React.PropTypes.object,         // custom attributes for the Input
		isLoading: React.PropTypes.bool,            // whether the Select is loading externally or not (such as options being loaded)
		labelKey: React.PropTypes.string,           // path of the label value in option objects
		matchPos: React.PropTypes.string,           // (any|start) match the start or entire string when filtering
		matchProp: React.PropTypes.string,          // (any|label|value) which option property to filter on
		menuBuffer: React.PropTypes.number,         // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
		menuContainerStyle: React.PropTypes.object, // optional style to apply to the menu container
		menuStyle: React.PropTypes.object,          // optional style to apply to the menu
		multi: React.PropTypes.bool,                // multi-value input
		name: React.PropTypes.string,               // generates a hidden <input /> tag with this field name for html forms
		newOptionCreator: React.PropTypes.func,     // factory to create new options when allowCreate set
		noResultsText: stringOrNode,                // placeholder displayed when there are no matching search results
		onBlur: React.PropTypes.func,               // onBlur handler: function (event) {}
		onBlurResetsInput: React.PropTypes.bool,    // whether input is cleared on blur
		onChange: React.PropTypes.func,             // onChange handler: function (newValue) {}
		onClose: React.PropTypes.func,              // fires when the menu is closed
		onFocus: React.PropTypes.func,              // onFocus handler: function (event) {}
		onInputChange: React.PropTypes.func,        // onInputChange handler: function (inputValue) {}
		onInputBlur: React.PropTypes.func,
		onMenuScrollToBottom: React.PropTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
		onOpen: React.PropTypes.func,               // fires when the menu is opened
		onValueClick: React.PropTypes.func,         // onClick handler for value labels: function (value, event) {}
		optionComponent: React.PropTypes.func,      // option component to render in dropdown
		optionRenderer: React.PropTypes.func,       // optionRenderer: function (option) {}
		options: React.PropTypes.array,             // array of options
		placeholder: stringOrNode,                  // field placeholder, displayed when there's no value
		required: React.PropTypes.bool,             // applies HTML5 required attribute when needed
		scrollMenuIntoView: React.PropTypes.bool,   // boolean to enable the viewport to shift so that the full menu fully visible when engaged
		searchable: React.PropTypes.bool,           // whether to enable searching feature or not
		simpleValue: React.PropTypes.bool,          // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
		style: React.PropTypes.object,              // optional style to apply to the control
		tabIndex: React.PropTypes.string,           // optional tab index of the control
		value: React.PropTypes.any,                 // initial field value
		valueComponent: React.PropTypes.func,       // value component to render
		valueKey: React.PropTypes.string,           // path of the label value in option objects
		valueRenderer: React.PropTypes.func,        // valueRenderer: function (option) {}
		wrapperStyle: React.PropTypes.object,       // optional style to apply to the component wrapper
	},

	statics: { Async },

	getDefaultProps () {
		return {
			addLabelText: 'Add "{label}"?',
			allowCreate: false,
			backspaceRemoves: true,
			clearable: true,
			clearAllText: 'Wyczyść wszystko',
			clearValueText: 'Wyczyść wartość',
			delimiter: ',',
			disabled: false,
			escapeClearsValue: true,
			filterOptions: true,
			ignoreAccents: true,
			ignoreCase: true,
			inputProps: {},
			isLoading: false,
			labelKey: 'label',
			matchPos: 'any',
			matchProp: 'any',
			menuBuffer: 0,
			multi: false,
			noResultsText: 'Brak wyników',
			onBlurResetsInput: true,
			optionComponent: Option,
			placeholder: 'Wybierz',
			required: false,
			scrollMenuIntoView: true,
			searchable: true,
			simpleValue: false,
			valueComponent: Value,
			valueKey: 'value',
		};
	},

	getInitialState () {
		return {
			inputValue: '',
			isFocused: false,
			isLoading: false,
			isOpen: false,
			isPseudoFocused: false,
			required: this.props.required && this.handleRequired(this.props.value, this.props.multi)
		};
	},

	componentDidMount () {
		if (this.props.autofocus) {
			this.focus();
		}

		if (this.props.value) {
			this.setState({
				inputValue: this.props.value.label
			});
		}

		this.setState({
			width: 0
		});
	},

	componentWillUpdate (nextProps, nextState) {
		if (nextState.isOpen !== this.isOpen()) {
			const handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
			handler && handler();
		}
	},

	componentWillReceiveProps (nextProps) {
		// todo fixme
		if (nextProps.value) {
			if(!_.isEqual(this.props.value, nextProps.value)) {
				this.setState({
					inputValue: nextProps.value.label
				});
			}
		} else if (this.isInputEmpty() || (!nextProps.value && this.props.value)) {
			this.setValue(null);
			this.clearInput();
		}
	},

	componentDidUpdate (prevProps, prevState) {
		// focus to the selected option
		if (this.refs.menu && this.refs.focused && this.isOpen() && !this.hasScrolledToOption) {
			let focusedOptionNode = ReactDOM.findDOMNode(this.refs.focused);
			let menuNode = ReactDOM.findDOMNode(this.refs.menu);
			menuNode.scrollTop = focusedOptionNode.offsetTop;
			this.hasScrolledToOption = true;
		} else if (!this.isOpen()) {
			this.hasScrolledToOption = false;
		}

		let prevInput = prevState.inputValue;
		let input = this.state.inputValue;

		if (input != null && prevInput !== input && this.props.onInputChange) {
			this.props.onInputChange(this.state.inputValue);
		}
		if (this._scrollToFocusedOptionOnUpdate && this.refs.focused && this.refs.menu) {
			this._scrollToFocusedOptionOnUpdate = false;
			var focusedDOM = ReactDOM.findDOMNode(this.refs.focused);
			var menuDOM = ReactDOM.findDOMNode(this.refs.menu);
			var focusedRect = focusedDOM.getBoundingClientRect();
			var menuRect = menuDOM.getBoundingClientRect();
			if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
				menuDOM.scrollTop = (focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight);
			}
		}
		if (this.props.scrollMenuIntoView && this.refs.menuContainer) {
			var menuContainerRect = this.refs.menuContainer.getBoundingClientRect();
			if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
				window.scrollTo(0, window.scrollY + menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
			}
		}
		if (prevProps.disabled !== this.isDiabled()) {
			this.toggleFocus(false);
		}

		let width = ReactDOM.findDOMNode(this.refs["control"]).offsetWidth;
		if (width != this.state.width) {
			this.setState({width});
		}
	},


	/**
	 * HELPERS
     */

	isMultiselectStandard() {
		return this.props.multi && !this.props.searchable;
	},

	isMultiselect() {
		return this.props.multi;
	},

	isMultiselectAutocomplete() {
		return this.props.multi && this.props.searchable;
	},

	isSingleAutocomplete() {
		return !this.props.multi && this.props.searchable;
	},

	isAutocomplete() {
		return this.props.searchable;
	},

	isInputEmpty() {
		return !this.state.inputValue;
	},

	isDiabled() {
		return this.props.disabled;
	},

	isFocused() {
		return this.state.isFocused;
	},

	isOpen() {
		return this.state.isOpen;
	},

	clearInput() {
		this.setState({
			inputValue: ""
		})
	},

	toggleMenu(shouldOpen) {
		this.setState({
			isOpen: shouldOpen
		});
	},

	toggleFocus(shouldFocus) {
		this.setState({
			isFocused: shouldFocus
		})
	},

	togglePseudoFocus(shouldFocus) {
		this.setState({
			isPseudoFocused: shouldFocus
		})
	},

	generateMultiselectLabel(options, valueArray) {
		let label;
		// if (valueArray.length === 0) {
		// 	label = this.props.placeholder;
		// } else if (valueArray.length === 1 && this.isMultiselectStandard()) {
		// 	label = valueArray[0].label;
		// } else if (valueArray.length === options.length) {
		// 	label = "Wybrano wszystkie (" + options.length + ")";
		// } else {
		// 	label = valueArray.length + " wybrane";
		// }

		if (valueArray.length === 0) {
			label = this.props.placeholder;
		} else if (valueArray.length === 1) {
			label = valueArray[0].label;
		} else {
			label = valueArray[0].label + " + " + (valueArray.length - 1);
		}

		return label;
	},





	focus (shouldOpen) {
		if (!this.refs.input) return;
		this.refs.input.focus();
		if(shouldOpen) {
			this.toggleMenu(true);
		}
	},

	blurInput() {
		if (!this.refs.input) return;
		this.refs.input.blur();
	},

	handleTouchMove (event) {
		// Set a flag that the view is being dragged
		this.dragging = true;
	},

	handleTouchStart (event) {
		// Set a flag that the view is not being dragged
		this.dragging = false;
	},

	handleTouchEnd (event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if(this.dragging) return;

		// Fire the mouse events
		this.handleMouseDown(event);
	},

	handleTouchEndClearValue (event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if(this.dragging) return;

		// Clear the value
		this.clearValue(event);
	},

	handleMouseDown (event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.isDiabled() || (event.type === 'mousedown' && event.button !== 0)) {
			return;
		}

		if (!this.isAutocomplete()) {
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
		}

		// for the non-searchable select, toggle the menu
		if (!this.isAutocomplete()) {
			this.focus();
			this.toggleMenu(!this.isOpen());
		} else if (this.isFocused()) {
			// if the input is focused, ensure the menu is open
			this.togglePseudoFocus(false);
			this.toggleMenu(true);
		} else {
			// otherwise, focus the input and open the menu
			this._openAfterFocus = true;
			this.focus();
		}
	},

	handleMouseDownOnArrow (event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.isDiabled() || (event.type === 'mousedown' && event.button !== 0)) {
			return;
		}
		// If the menu isn't open, let the event bubble to the main handleMouseDown
		if (!this.isOpen()) {
			return;
		}
		// prevent default event handlers
		event.stopPropagation();
		event.preventDefault();
		// close the menu
		this.closeMenu();
	},

	handleMouseDownOnMenu (event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
 	  if (this.isDiabled() || (event.type === 'mousedown' && event.button !== 0)) {
		  return;
		}
		event.stopPropagation();
		event.preventDefault();

		this._openAfterFocus = true;
		this.focus();
	},

	closeMenu () {
		this.togglePseudoFocus(this.isFocused() && !this.isMultiselect());
		this.toggleMenu(false);
		this.hasScrolledToOption = false;
	},

	handleNormalSelectFocus (event) {
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
		this.toggleFocus(true);
	},

	handleInputFocus (event) {
		var isOpen = this.isOpen() || this._openAfterFocus || this.isMultiselectAutocomplete();
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
		this.toggleFocus(true);
		this.toggleMenu(isOpen);
		this._openAfterFocus = false;
	},

	handleInputBlur (event) {
		if(!this.isMultiselect()) {
			if (!this.getValueArray()[0] || this.getValueArray()[0].label != this.state.inputValue) {
				if(!this.props.allowCreate) {
					if (!this.isInputEmpty() && this.props.selectFocusedOnBlur && this._focusedOption) {
						this.selectFocusedOption();
					} else {
						this.setValue(this.props.required && this.props.options[0] || null);
						this.clearInput();
					}
				} else {
					let option = {value: this.state.inputValue, label: this.state.inputValue};
					this.setValue(option);
				}
			}
		}

 		if (this.refs.menu && document.activeElement.isEqualNode(this.refs.menu)) {
 			return;
 		}

		if (this.props.onBlur) {
			this.props.onBlur(event);
		}

		this.togglePseudoFocus(false);
		this.toggleFocus(false);
		this.toggleMenu(false);
	},

	handleInputChange (event) {
		let inputValue = event.target.value;
		if(inputValue === "" && !this.isMultiselectAutocomplete()) {
			this.setValue(null);
		}
		//this.toggleMenu(true);
		this.togglePseudoFocus(false);
		this.setState({
			inputValue: inputValue
		});
	},

	handleKeyDown (event) {
		if (this.isDiabled()) return;
		switch (event.keyCode) {
			case 8: // backspace
				//if (!this.state.inputValue && this.props.backspaceRemoves) {
				//	event.preventDefault();
				//	this.popValue();
				//}
			return;
			case 9: // tab
				if (event.shiftKey || !this.isOpen()) {
					return;
				}
				if (!this.isInputEmpty()) {
					this.selectFocusedOption();
				}
			return;
			case 13: // enter
				if (!this.isOpen()) {
					this.toggleMenu(true);
					return;
				}
				event.stopPropagation();
				// if (!this.isAutocomplete() || (this.isAutocomplete() && (!this.isInputEmpty() || !this.props.async))) {
					this.selectFocusedOption();
				// }
			break;
			case 27: // escape
				if (this.isOpen()) {
					this.closeMenu();
				} else if (this.props.clearable && this.props.escapeClearsValue) {
					this.clearValue(event);
				}
			break;
			case 38: // up
				this.focusPreviousOption();
			break;
			case 40: // down
				this.focusNextOption();
			break;
			// case 188: // ,
			// 	if (this.props.allowCreate && this.props.multi) {
			// 		event.preventDefault();
			// 		event.stopPropagation();
			// 		this.selectFocusedOption();
			// 	} else {
			// 		return;
			// 	}
			// break;
			default: return;
		}
		event.preventDefault();
	},

	handleValueClick (option, event) {
		if (!this.props.onValueClick) return;
		this.props.onValueClick(option, event);
	},

	handleMenuScroll (event) {
		if (!this.props.onMenuScrollToBottom) return;
		let { target } = event;
		if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
			this.props.onMenuScrollToBottom();
		}
	},

	handleRequired (value, multi) {
		if (!value) return true;
		return (multi ? value.length === 0 : Object.keys(value).length === 0);
	},

	getOptionLabel (op) {
		return op[this.props.labelKey];
	},

	getValueArray() {
		let value = this.props.value;
		if (value == null) {
			return []
		} else if (!_.isArray(value)) {
			return [value];
		}
		return value;
	},

	//getValueArray () {
	//	let value = this.props.value;
	//	if (this.isAutocomplete()) {
	//		if (typeof value === 'string') value = value.split(this.props.delimiter);
	//		if (!Array.isArray(value)) {
	//			if (value === null || value === undefined) return [];
	//			value = [value];
	//		}
	//		return value.map(this.expandValue).filter(i => i);
	//	}
	//	var expandedValue = this.expandValue(value);
	//	return expandedValue ? [expandedValue] : [];
	//},

	//expandValue (value) {
	//	if (typeof value !== 'string' && typeof value !== 'number') return value;
	//	let { options, valueKey } = this.props;
	//	if (!options) return;
	//	for (var i = 0; i < options.length; i++) {
	//		if (options[i][valueKey] === value) return options[i];
	//	}
	//},

	clear() {
		this.setValue(null);
		this.toggleMenu(false);
		this.clearInput();
	},

	setValue (value) {
		// na sytuacje gdy przychodzi []
		if (_.isEmpty(value)) value = null;

		if (this.props.autoBlur){
			this.blurInput();
		}
		if (!this.props.onChange) return;
		if (this.props.required) {
			const required = this.handleRequired(value, this.props.multi);
			this.setState({ required });
		}
		if (this.props.simpleValue && value) {
			value = this.props.multi ? value.map(i => i[this.props.valueKey]).join(this.props.delimiter) : value[this.props.valueKey];
		}
		this.props.onChange(value);
	},

	selectValue (value) {
		//this.hasScrolledToOption = false;
		if (this.isMultiselect()) {
			this.toggleValue(value);
			//this.setState({
			//	inputValue: value.label,
			//});
		} else {
			this.setValue(value);
			this.toggleMenu(false);
			this.togglePseudoFocus(this.isFocused());
			this.setState({
				inputValue: value.label,
			});
		}
	},

	addValue (value) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.concat([value]));
	},

	toggleValue (value) {
		var valueArray = this.getValueArray();
		var option = _.find(valueArray, (elem) => {
			return elem.label == value.label && elem.value == value.value;
		});
		option == null ? this.addValue(value) : this.removeValue(value);
	},

	popValue () {
		var valueArray = this.getValueArray();
		if (!valueArray.length) return;
		if (valueArray[valueArray.length-1].clearableValue === false) return;
		this.setValue(valueArray.slice(0, valueArray.length - 1));
	},

	removeValue (value) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.filter(i => i.value.toString() !== value.value.toString()));
		this.focus();
	},

	clearValue (event) {
		// if the event was triggered by a mousedown and not the primary
		// button, ignore it.
		if (event && event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		event.stopPropagation();
		event.preventDefault();
		this.setValue(null);
		this.clearInput();
		this.toggleMenu(false);
		//this.setState({
		//	isOpen: false,
		//}, this.focus);
	},

	focusOption (option) {
		this.setState({
			focusedOption: option
		});
	},

	focusNextOption () {
		this.focusAdjacentOption('next');
	},

	focusPreviousOption () {
		this.focusAdjacentOption('previous');
	},

	focusAdjacentOption (dir) {
		var options = this._visibleOptions.filter(i => !i.disabled);
		this._scrollToFocusedOptionOnUpdate = true;
		if (!this.isOpen()) {
			this.toggleMenu(true);
			this.setState({
				focusedOption: this._focusedOption || options[dir === 'next' ? 0 : options.length - 1]
			});
			return;
		}
		if (!options.length) return;
		var focusedIndex = -1;
		for (var i = 0; i < options.length; i++) {
			if (this._focusedOption === options[i]) {
				focusedIndex = i;
				break;
			}
		}
		var focusedOption = options[0];
		if (dir === 'next' && focusedIndex > -1 && focusedIndex < options.length - 1) {
			focusedOption = options[focusedIndex + 1];
		} else if (dir === 'previous') {
			if (focusedIndex > 0) {
				focusedOption = options[focusedIndex - 1];
			} else {
				focusedOption = options[options.length - 1];
			}
		}
		this.setState({
			focusedOption: focusedOption
		});
	},

	selectFocusedOption () {
		// if (this.props.allowCreate && !this.state.focusedOption) {
		// 	return this.selectValue(this.state.inputValue);
		// }
		if (this._focusedOption) {
			return this.selectValue(this._focusedOption);
		}
	},

	renderLoading () {
		if (!this.props.isLoading) return;
		return (
			<span className="Select-loading-zone" aria-hidden="true">
				<span className="Select-loading" />
			</span>
		);
	},

	renderValue (valueArray, isOpen, options) {
		let renderLabel = this.props.valueRenderer || this.getOptionLabel;
		let ValueComponent = this.props.valueComponent;

		if (!valueArray.length) {
			return (this.isInputEmpty() && !this.isAutocomplete()) ? <div className="Select-placeholder">{this.props.placeholder}</div> : null;
		}

		let onClick = this.props.onValueClick ? this.handleValueClick : null;
		if (this.isMultiselectStandard()) {
			if (isOpen) onClick = null;
			let label = this.generateMultiselectLabel(options, valueArray);
			return (
				<ValueComponent
					disabled={this.isDiabled()}
					onClick={onClick}
					value={{}}
				>
					{label}
				</ValueComponent>
			);

		} else if (!this.isAutocomplete() || (this.isInputEmpty() && this.props.required)) {
			if (isOpen) onClick = null;
			return (
				<ValueComponent disabled={this.isDiabled()} onClick={onClick} value={valueArray[0]}>
					{renderLabel(valueArray[0])}
				</ValueComponent>
			);
		}
	},

	renderInput (valueArray, isOpen, options) {
		var className = classNames('Select-input', this.props.inputProps.className);

		let onBlur = (event) => {
			this.props.onInputBlur && this.props.onInputBlur(event);
			this.handleInputBlur(event)
		};

		if (this.isDiabled() || !this.isAutocomplete()) {
			return (
				<div
					{...this.props.inputProps}
					className={className}
					tabIndex={this.props.tabIndex || 0}
					onBlur={onBlur}
					onFocus={this.handleNormalSelectFocus}
					ref="input"
					style={{ border: 0, width: 1, display:'inline-block' }}
				>
				</div>
			);
		} else {
			let props = _.assign({}, this.props.inputProps, {
				className,
				tabIndex: this.props.tabIndex,
				onBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				minWidth: "5",
				ref: "input",
				required: this.state.required,
				value: this.state.inputValue,
				placeholder: this.props.showInputPlaceholder && this.props.placeholder
			});

			if (this.isMultiselectAutocomplete()) {
				props.placeholder = this.generateMultiselectLabel(options, valueArray);
			}

			return (
				<input
					{...props}
				/>
			);
		}
	},

	renderClear () {
		if (!this.props.clearable || !this.props.value || (this.isMultiselect() && !this.props.value.length) || this.isDiabled() || this.props.isLoading) return;
		return (
			<span className="Select-clear-zone" title={this.isMultiselect() ? this.props.clearAllText : this.props.clearValueText}
						aria-label={this.props.multi ? this.props.clearAllText : this.props.clearValueText}
						onMouseDown={this.clearValue}
						onTouchStart={this.handleTouchStart}
						onTouchMove={this.handleTouchMove}
						onTouchEnd={this.handleTouchEndClearValue}>
				<span className="Select-clear" dangerouslySetInnerHTML={{ __html: '&times;' }} />
			</span>
		);
	},

	renderArrow () {
		if (this.isAutocomplete())
			return;

		return (
			<span className="Select-arrow-zone" onMouseDown={this.handleMouseDownOnArrow}>
				<span className="Select-arrow" onMouseDown={this.handleMouseDownOnArrow} />
			</span>
		);
	},

	filterOptions (excludeOptions) {
		var filterValue = this.state.inputValue;
		var options = this.props.options || [];

		if (this.props.filterOptions === false) {
			return options;
		}

		if (!this.props.noResultLimit && (!this.isAutocomplete() || filterValue === "")) {
			return options.slice(0, this.props.resultLimit || 30);
		}

		let query = filterValue && filterValue.toLowerCase().trim() || "";

		let queryTokens = query.split(" ");
		let matchResults = {};
		let result = [];
		for (let i = 0; i < options.length; i++) {
			let option = options[i];

			let name = option.label.toLowerCase().trim();
			let isValid = true;

			if (name.indexOf(query) !== 0) {
				let tokens = name.split(/[,-]/);
				tokens.push(name);

				for (let j = 0; j < queryTokens.length; j++) {
					// "ma", "wa"
					let tokenValid = false;
					for (let k = 0; k < tokens.length; k++) {
						// "mazowieckie", "warszawa"
						let normalizedToken = tokens[k].trim().toLowerCase();
						let normalizedQueryToken = queryTokens[j].trim();
						let pos = normalizedToken.indexOf(normalizedQueryToken);
						if (this.props.searchInside && pos != -1 || !this.props.searchInside && pos === 0) {
							tokenValid = true;
							break;
						}
					}
					if (!tokenValid) {
						isValid = false;
						break;
					}
				}
			}

			if (isValid) {
				if (!matchResults[name.length]) {
					matchResults[name.length] = [];
				}

				if (!_.some(excludeOptions, (excluded) => this.areOptionsEqual(excluded, option))) {
					if (this.props.noLengthSorting) {
						result.push(option);
					} else {
						matchResults[name.length].push(option);
					}
				}
			}
		}

		if (!this.props.noLengthSorting) {
			let keys = _.keys(matchResults).sort((a, b) => a - b);
			_.each(keys, (key) => {
				_.each(matchResults[key], (res) => {
					result.push(res);
				});
			});
		}

		if (!this.props.noResultLimit) {
			return result.slice(0, this.props.resultLimit || 30);
		}

		return result;
 	},

	renderAutocompleteSelectedOpions(selectedOptions) {
		let renderedOptions = _.map(selectedOptions, (option, index) => {
			return (
				<li key={index} className="multiselect-selected-item">
					<span className="multiselect-selected-value">{option.label}</span>
					<span className="multiselect-selected-remove unselectable" onClick={() => this.removeValue(option)}></span>
				</li>
			)
		});

		return (
			<ul className="multiselect-selected-list">
				{renderedOptions}
			</ul>
		)
	},

	areOptionsEqual(option1, option2) {
		let value1 = !_.isUndefined(option1.value) ? option1.value.toString() : "";
		let value2 = !_.isUndefined(option2.value) ? option2.value.toString() : "";
		return value1 === value2;
	},

	renderOption (option, index, valueArray, focusedOption) {
		let Option = this.props.optionComponent;
		let renderLabel = this.props.optionRenderer || this.getOptionLabel;

		let isSelected = valueArray && _.find(valueArray, value => this.areOptionsEqual(value, option)) != null;
		let isFocused = option === focusedOption;
		let optionRef = isFocused ? 'focused' : null;
		let optionClass = classNames({
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled,
		});

		return (
		<Option
			className={optionClass}
			isDisabled={option.disabled}
			isFocused={isFocused}
			key={`option-${index}-${option[this.props.valueKey]}`}
			onSelect={this.selectValue}
			onFocus={this.focusOption}
			option={option}
			isSelected={isSelected}
			ref={optionRef}
		>
			{renderLabel(option)}
		</Option>
		);
	},

	renderMenu (options, valueArray, focusedOption) {
		if (this.isAutocomplete() && !this.props.allowCreate && this.isInputEmpty() && !this.props.showAllValues) {
			if (!this.isMultiselect()) {
				this._focusedOption = null;
				return (
					<div className="Select-noresults">
						Zacznij pisać aby zobaczyć wyniki
					</div>
				);
			} else {
				if (valueArray.length) {
					return this.renderAutocompleteSelectedOpions(valueArray);
				} else {
					this._focusedOption = null;
					return (
						<div className="Select-noresults">
							Brak wybranych elementów
						</div>
					);
				}
			}
		} else if (options && options.length) {
			return options.map((option, i) => this.renderOption(option, i, valueArray, focusedOption));
		} else if (this.props.noResultsText && !this.props.allowCreate) {
			this._focusedOption = null;
			return (
				<div className="Select-noresults">
					{this.props.noResultsText}
				</div>
			);
		} else {
			return null;
		}
	},

	renderHiddenField (valueArray) {
		if (!this.props.name) return;
		let value = _.map(valueArray, i => {
			let x = valueArray.length;
			stringifyValue(i[this.props.valueKey]);
		}).join(this.props.delimiter);
		return <input type="hidden" ref="value" name={this.props.name} value={value} disabled={this.isDiabled()} />;
	},

	getFocusableOption (selectedOption) {
		var options = this._visibleOptions;
		if (!options || !options.length) return;
		let focusedOption = this.state.focusedOption || selectedOption;
		// z jakiegos powodu nie znajduje poprzez indexOf chociaz to jest taki sam obiekt (gdzies wczesniej klonowany albo tworzony na nowo?)
		// zamiast tego porownujemy label i value
		if(focusedOption) {
			let index = _.findIndex(options, function (elem) {
				return elem.value === focusedOption.value && elem.label === focusedOption.label
			});
			if (index > -1) return options[index];
		}

		for (var i = 0; i < options.length; i++) {
			if (!options[i].disabled) return options[i];
		}
	},

	render () {
		let valueArray = this.getValueArray();
		let options = this._visibleOptions = this.filterOptions(this.isMultiselectAutocomplete() ? valueArray : null);
		let isOpen = this.isOpen();
		//if (this.isMultiselect() && !options.length && valueArray.length && this.isInputEmpty()) isOpen = false;
		let focusedOption = this._focusedOption = this.getFocusableOption(valueArray[0]);
		let className = classNames('Select', this.props.className, {
			//'Select--multi': this.props.multi,
			'multiselect': this.isMultiselectStandard(),
			'is-disabled': this.isDiabled(),
			'is-focused': this.isFocused(),
			'is-loading': this.props.isLoading,
			'is-open': isOpen,
			//'is-pseudo-focused': this.state.isPseudoFocused,
			'is-searchable': this.props.searchable,
			'has-value': valueArray.length,
		});

		let style = _.assign({}, this.props.menuContainerStyle, {
			width: this.state.width
		});

		return (
			<div ref="wrapper" className={className} style={this.props.wrapperStyle}>
				{this.renderHiddenField(valueArray)}
				{/*<TetherComponent
					attachment="top left"
					targetAttachment="bottom left"
					constraints={[
						{
							to: "scrollParent",
							attachment: "together"
						}
					]}
				>*/}
					<div ref="control"
							 className="Select-control"
							 style={this.props.style}
							 onKeyDown={this.handleKeyDown}
							 onMouseDown={this.handleMouseDown}
							 onTouchEnd={this.handleTouchEnd}
							 onTouchStart={this.handleTouchStart}
							 onTouchMove={this.handleTouchMove}>
						{this.renderValue(valueArray, isOpen, options)}
						{this.renderInput(valueArray, isOpen, options)}
						{this.renderLoading()}
						{this.renderClear()}
						{this.renderArrow()}
					</div>
					{isOpen ? (
						<div ref="menuContainer" className="Select-menu-outer" style={style}>
							<div ref="menu" className="Select-menu"
									 style={this.props.menuStyle}
									 onScroll={this.handleMenuScroll}
									 onMouseDown={this.handleMouseDownOnMenu}>
								{this.renderMenu(options, valueArray, focusedOption)}
							</div>
						</div>
					) : null}
				{/*</TetherComponent>*/}
			</div>
		);
	}

});

export default Select;
