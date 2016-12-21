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

// <editor-fold desc="React methods">
	displayName: 'Select',

	// propTypes: {
	// 	addLabelText: React.PropTypes.string,       // placeholder displayed when you want to add a label on a multi-value input
	// 	allowCreate: React.PropTypes.bool,          // whether to allow creation of new entries
	// 	autoBlur: React.PropTypes.bool,
	// 	autofocus: React.PropTypes.bool,            // autofocus the component on mount
	// 	backspaceRemoves: React.PropTypes.bool,     // whether backspace removes an item if there is no text input
	// 	className: React.PropTypes.string,          // className for the outer element
	// 	clearAllText: stringOrNode,                 // title for the "clear" control when multi: true
	// 	clearValueText: stringOrNode,               // title for the "clear" control
	// 	clearable: React.PropTypes.bool,            // should it be possible to reset value
	// 	debug: React.PropTypes.bool, 	            // should it be possible to reset value
	// 	delimiter: React.PropTypes.string,          // delimiter to use to join multiple values for the hidden field value
	// 	disabled: React.PropTypes.bool,             // whether the Select is disabled or not
	// 	escapeClearsValue: React.PropTypes.bool,    // whether escape clears the value when the menu is closed
	// 	filterOption: React.PropTypes.func,         // method to filter a single option (option, filterString)
	// 	filterOptions: React.PropTypes.any,         // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	// 	ignoreAccents: React.PropTypes.bool,        // whether to strip diacritics when filtering
	// 	ignoreCase: React.PropTypes.bool,           // whether to perform case-insensitive filtering
	// 	inputProps: React.PropTypes.object,         // custom attributes for the Input
	// 	isLoading: React.PropTypes.bool,            // whether the Select is loading externally or not (such as options being loaded)
	// 	labelKey: React.PropTypes.string,           // path of the label value in option objects
	// 	loadWaiting: React.PropTypes.boolean,
	// 	matchPos: React.PropTypes.string,           // (any|start) match the start or entire string when filtering
	// 	matchProp: React.PropTypes.string,          // (any|label|value) which option property to filter on
	// 	menuBuffer: React.PropTypes.number,         // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	// 	menuContainerStyle: React.PropTypes.object, // optional style to apply to the menu container
	// 	menuStyle: React.PropTypes.object,          // optional style to apply to the menu
	// 	multi: React.PropTypes.bool,                // multi-value input
	// 	name: React.PropTypes.string,               // generates a hidden <input /> tag with this field name for html forms
	// 	newOptionCreator: React.PropTypes.func,     // factory to create new options when allowCreate set
	// 	noResultsText: stringOrNode,                // placeholder displayed when there are no matching search results
	// 	onBlur: React.PropTypes.func,               // onBlur handler: function (event) {}
	// 	onBlurResetsInput: React.PropTypes.bool,    // whether input is cleared on blur
	// 	onChange: React.PropTypes.func,             // onChange handler: function (newValue) {}
	// 	onClose: React.PropTypes.func,              // fires when the menu is closed
	// 	onFocus: React.PropTypes.func,              // onFocus handler: function (event) {}
	// 	onInputChange: React.PropTypes.func,        // onInputChange handler: function (inputValue) {}
	// 	onInputBlur: React.PropTypes.func,
	// 	onMenuScrollToBottom: React.PropTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	// 	onOpen: React.PropTypes.func,               // fires when the menu is opened
	// 	onValueClick: React.PropTypes.func,         // onClick handler for value labels: function (value, event) {}
	// 	optionComponent: React.PropTypes.func,      // option component to render in dropdown
	// 	optionRenderer: React.PropTypes.func,       // optionRenderer: function (option) {}
	// 	options: React.PropTypes.array,             // array of options
	// 	placeholder: stringOrNode,                  // field placeholder, displayed when there's no value
	// 	required: React.PropTypes.bool,             // applies HTML5 required attribute when needed
	// 	scrollMenuIntoView: React.PropTypes.bool,   // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	// 	searchable: React.PropTypes.bool,           // whether to enable searching feature or not
	// 	simpleValue: React.PropTypes.bool,          // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	// 	style: React.PropTypes.object,              // optional style to apply to the control
	// 	tabIndex: React.PropTypes.string,           // optional tab index of the control
	// 	value: React.PropTypes.any,                 // initial field value
	// 	valueComponent: React.PropTypes.func,       // value component to render
	// 	valueKey: React.PropTypes.string,           // path of the label value in option objects
	// 	valueRenderer: React.PropTypes.func,        // valueRenderer: function (option) {}
	// 	wrapperStyle: React.PropTypes.object,       // optional style to apply to the component wrapper
	// },

	/**
	 * React stuff
	 */

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
			forceOpen: false,
			groups: [],
			ignoreAccents: true,
			ignoreCase: true,
			inputProps: {},
			isLoading: false,
			labelKey: 'label',
			loadWaiting: false,
			matchPos: 'any',
			matchProp: 'any',
			menuBuffer: 0,
			menuUp: false,
			multi: false,
			noResultsText: 'Brak wyników',
			onBlurResetsInput: true,
			optionComponent: Option,
			optgroups: false,
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
			focusedOption: null,
			value: null,
			inputValue: "",
			isFocused: false,
			isLoading: false,
			isOpen: false,
			isPseudoFocused: false,
			required: this.props.required// && this.handleRequired(this.props.value, this.props.multi)
		};
	},

	componentDidMount () {
		if (this.props.autofocus) {
			this.focus();
		}

		if (this.props.value) {
			this.setInputValue(this.props.value[this.props.labelKey]);
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
		if (this.isMultiselectAutocomplete() && this.props.value && this.props.value.length && (!nextProps.value || !nextProps.value.length)) {
			this.setValue(null);
		}

		if (nextProps.value) {
			if(!this.isMultiselectAutocomplete() && !_.isEqual(this.props.value, nextProps.value)) {
				this.setInputValue(nextProps.value[this.props.labelKey]);
			}
		} else if (this.isInputEmpty() || (!nextProps.value && this.props.value)) {
			if (this.props.value != null) {
				this.setValue(null);
			}
			if (this.state.inputValue != "") {
				this.clearInput();
			}
		}

		if(!nextProps.options || !nextProps.options.length) {
			this.setState({
				value: null
			});
		}

		if (this.isMultiselectAutocomplete() && nextProps.value && nextProps.value.length) {
			this.setState({
				value: nextProps.value
			});
		}

	},

	componentDidUpdate (prevProps, prevState) {

		// focus to the selected option
		if (this.refs.menu && this.refs.focused && this.isOpen() && !this.hasScrolledToOption) {
			let focusedOptionNode = ReactDOM.findDOMNode(this.refs.focused);
			let menuNode = ReactDOM.findDOMNode(this.refs.menu);
			// menuNode.scrollTop = focusedOptionNode.offsetTop;
			this.hasScrolledToOption = true;
		} else if (!this.isOpen()) {
			this.hasScrolledToOption = false;
		}

		let prevInput = prevState.inputValue;
		let input = this.getInputValue();

		if (input != null && prevInput !== input && this.props.onInputChange) {
			this.props.onInputChange(this.getInputValue());
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
// </editor-fold>

// <editor-fold desc="Helpers">

	// <editor-fold desc="State/props helpers">

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
		return !this.getInputValue();
	},

	isDiabled() {
		return this.props.disabled;
	},

	isFocused() {
		return this.state.isFocused;
	},

	isOpen() {
		return this.props.forceOpen || this.state.isOpen;
	},

	setInputValue(value) {
		this.setState({inputValue: value || ""});
	},

	getInputValue() {
		return this.state.inputValue;
	},

	focusOption (option) {
		this.setState({
			focusedOption: option,
			focusedGroup: null
		});
	},

	focusGroup (group) {
		this._focusedOption = false;
		this.setState({
			focusedOption: null,
			focusedGroup: group
		});
	},

	// </editor-fold>

	clearInput() {
		this.setInputValue("");
		this.focusOption(null);
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

		if (valueArray.length === 0) {
			label = this.props.placeholder;
		} else if (valueArray.length === 1) {
			label = valueArray[0][this.props.labelKey];
		} else {
			label = valueArray[0][this.props.labelKey] + " i " + (valueArray.length - 1) + " więcej";
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

	closeMenu () {
		this.togglePseudoFocus(this.isFocused() && !this.isMultiselect());
		this.toggleMenu(false);
		this.hasScrolledToOption = false;
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

	clear() {
		this.setValue(null);
		this.toggleMenu(false);
		this.clearInput();
	},

	setValue (value) {
		// na sytuacje gdy przychodzi []
		if (_.isEmpty(value)) value = null;

		this.setState({
			value
		});

		if (!this.isMultiselectStandard()) { // dla zwyklego multiselecta skacze focus
			this.focusOption(null);
		}

		if (this.props.autoBlur) {
			this.blurInput();
		}
		if (!this.props.onChange) return;
		if (this.props.required) {
			const required = this.handleRequired(value, this.props.multi);
			this.setState({required});
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
			this.setInputValue(value[this.props.labelKey]);
		}
	},

	isValueSelected(value) {
		var valueArray = this.getValueArray();
		var option = _.find(valueArray, (elem) => {
			return elem[this.props.labelKey] == value[this.props.labelKey] && elem.value == value.value;
		});
		return option != null;
	},

	addValue (value) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.concat([value]));
	},

	addValues(values) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.concat(_.filter(values, value => _.find(valueArray, {value: value.value}) == null)))
	},

	toggleValue (value) {
		var valueArray = this.getValueArray();
		var option = _.find(valueArray, (elem) => {
			return elem[this.props.labelKey] == value[this.props.labelKey] && elem.value == value.value;
		});
		option == null ? this.addValue(value) : this.removeValue(value, true);
	},

	popValue () {
		var valueArray = this.getValueArray();
		if (!valueArray.length) return;
		if (valueArray[valueArray.length - 1].clearableValue === false) return;
		this.setValue(valueArray.slice(0, valueArray.length - 1));
	},

	removeValue (value, focus) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.filter(i => i.value.toString() !== value.value.toString()));
		focus && this.focus();
	},

	removeValues(values, focus) {
		var valueArray = this.getValueArray();

		var newValue = _.filter(valueArray, (selectedOption) => _.every(values, (value) => value.value.toString() !== selectedOption.value.toString()));

		this.setValue(newValue);
		focus && this.focus();
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
		//	isOpen: false,//}, this.focus);
	},

	focusNextOption () {
		this.focusAdjacentOption('next');
	},

	focusPreviousOption () {
		this.focusAdjacentOption('previous');
	},

	focusAdjacentOption (dir) {

		/**
		 * jesli kiedys ktos to bedzie czytal i sie zastanawial czemu tu jest taki pierdolnik - wyszla potrzeba zeby optgroupy tez
		 * mozna bylo focusowac klawiszami, etc. wydawało się bezpieczniej napisac taki mechanizm dla specjalnych przypadkow
		 * niz przerabiac wszystko tak, ze grupa to tez jest jakby option bo tutaj duzo rzeczy na indexach polega a nie chcialem zeby
		 * cos sie niepodziewanie spier.. popsulo
		 */

		var rawOptions = this._visibleOptions.filter(i => !i.disabled);
		var options = this.isMultiselectAutocomplete() ? this.excludeOptions(rawOptions, this.state.value) : rawOptions;
		this._scrollToFocusedOptionOnUpdate = true;

		if (!this.isOpen()) {
			this.toggleMenu(true);

			if (false && this.props.groups && this.props.groups.length) { // todo tymczasowo wylaczone, do skonczenia
				if (dir === 'next') {
					let grouplessOptions = _.filter(options, option => !option.groupId);
					if (grouplessOptions.length) {
						this.focusOption(grouplessOptions[0]);
					} else {
						this.focusGroup(this.getFirstGroupWithOptions());
					}
				} else {
					let lastGroupWithOptions = this.getLastGroupWithOptions();
					if (lastGroupWithOptions) {
						let groupOptions = this.getGroupOptions(options, lastGroupWithOptions);
						this.focusOption(groupOptions[groupOptions.length - 1]);
					}
				}
			} else {
				this.focusOption(this._focusedOption || options[dir === 'next' ? 0 : options.length - 1]);
			}
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

		if (false && this.props.groups && this.props.groups.length) { // todo tymczasowo wylaczone, do skonczenia
			if (this.state.focusedGroup) {
				if (dir === 'next') { // jesli next to wez peirwszy elem tej grupy
					let options = this.getGroupOptions(options, this.state.focusedGroup);
					this.focusOption(options[0]);
				} else {
					// jesli prev to znajdz poprzednia grupe i wez ostatni element, jesli to byla pierwsza grupa to zobacz czy sa
					// bez grupy jakies i zaznacz ostatni, jesli nie ma to wez ostatnia grupe i zaznacz ostatni element (jak wyzej przy otwarciu menu)

					let groupIndex = _.findIndex(this.props.groups, (group) => group.id === this.state.focusedGroup.id);
					if (groupIndex === 0) {
						let grouplessOptions = _.filter(options, option => !option.groupId);
						if (grouplessOptions.length) {
							this.focusOption(grouplessOptions[grouplessOptions.length - 1]);
						} else {
							let options = this.getLastGroupWithOptions();
							this.focusOption(options[options.length - 1]);
						}
					} else {
						let options = this.getGroupOptions(options, this.state.groups[groupIndex - 1]);
						this.focusOption(options[options.length - 1]);
					}
				}
			} else if(focusedIndex > -1) {
				if (dir === 'next') {
					if (options[focusedIndex].groupId) { // jesli element jest w grupie

					} else { // groupless element
						let grouplessOptions = _.filter(options, option => !option.groupId);
						if (grouplessOptions.indexOf(options[focusedIndex]) === grouplessOptions.length - 1) { // jesli to ostatni element groupless
							let options = this.getGroupOptions(this.getFirstGroupWithOptions(options, this.props.groups));
							this.focusOption(options[0]);
						} else {

						}
					}
				} else {

				}
				// jesli next i ostatni element grupy to zaznacz nastepna grupe, chyba ze to ostatni element ostatniej grupy
				// wtedy zaznacz pierwszy element bez grupy lub pierwsza grupe, jesli nie ostatni element to zaznacz nastepny element

				// jesli prev i pierwszy element to zaznacz grupe, inaczej zaznacz poprzedni element
			}
		} else {
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
			this.focusOption(focusedOption);
		}
	},

	getFocusableOption (selectedOption) {
		var options = this.isMultiselectAutocomplete() ? this.excludeOptions(this._visibleOptions, this.state.value) : this._visibleOptions;
		if (!options || !options.length || this.state.mouseOverGroup) return;
		let focusedOption = this.state.focusedOption || selectedOption;
		// z jakiegos powodu nie znajduje poprzez indexOf chociaz to jest taki sam obiekt (gdzies wczesniej klonowany albo tworzony na nowo?)
		// zamiast tego porownujemy label i value
		if (focusedOption) {
			let index = _.findIndex(options, (elem) => {
				return elem.value === focusedOption.value && elem[this.props.labelKey] === focusedOption[this.props.labelKey]
			});
			if (index > -1) return options[index];
		}

		if (this.props.alwaysFocus) {
			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return options[i];
			}
		}
	},

	selectFocusedOption () {
		// if (this.props.allowCreate && !this.state.focusedOption) {
		// 	return this.selectValue(this.state.inputValue);
		// }
		if (this._focusedOption) {
			return this.selectValue(this._focusedOption);
		}
	},

	getLastGroupWithOptions (options, groups) {
		return _.findLast(groups, (optgroup) => _.some(options, {groupId: optgroup.id}));
	},

	getFirstGroupWithOptions (options, groups) {
		return _.find(groups, (optgroup) => _.some(options, {groupId: optgroup.id}));
	},

	getGroupOptions (options, group) {
		return _.filter(options, {groupId: group.id});
	},

	filterOptions (excludeOptions) {
		var filterValue = this.getInputValue();
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

			let name = option[this.props.labelKey].toLowerCase().trim();
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

	excludeOptions(options, excludedOptions) {
		return _.filter(options, option => !_.some(excludedOptions, (excluded) => excluded.value == option.value))
	},

	areOptionsEqual(option1, option2) {
		let value1 = !_.isUndefined(option1.value) ? option1.value.toString() : "";
		let value2 = !_.isUndefined(option2.value) ? option2.value.toString() : "";
		return value1 === value2;
	},

// </editor-fold>

// <editor-fold desc="Event handlers">
	/**
	 * Event handlers
	 */

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
			if (!this.getValueArray()[0] || this.getValueArray()[0][this.props.labelKey] != this.getInputValue()) {
				if(!this.props.allowCreate) {
					if (!this.isInputEmpty() && (this.props.selectFocusedOnBlur || this.props.async) && this._focusedOption) {
						this.selectFocusedOption();
					} else if (!this.state.value) {
						this.setValue(this.props.required && this.props.options[0] || null);
						this.clearInput();
					}
				} else {
					let option = {value: this.getInputValue(), label: this.getInputValue()};
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

		// todo zakomentowane zeby nie wysylal sie change jak sie skasuje wszystko z inputa, jak by cos sie wywalalo to odkomentowac
		if(inputValue === "" && !this.isMultiselectAutocomplete()) {
			// this.setValue(null);
			this.setState({
				value: null
			})
		}

		//this.toggleMenu(true);
		this.togglePseudoFocus(false);
		this.setInputValue(inputValue);
	},

	handleKeyDown (event) {
		if (this.isDiabled()) return;
		if (this.isFocused() && !this.isOpen()) {
			this.toggleMenu(true);
		}
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
				// if (!this.isOpen()) {
				// 	this.toggleMenu(true);
				// 	return;
				// }
				// event.stopPropagation();
				// if (!this.isAutocomplete() || (this.isAutocomplete() && (!this.isInputEmpty() || !this.props.async))) {
				if (!this.isAutocomplete() || (this.isAutocomplete() && (!this.isInputEmpty() || this.state.focusedOption))) {
					event.preventDefault();
					this.selectFocusedOption();
				} else if (!this.isMultiselectAutocomplete()) {
					this.clear();
				}
			break;
			case 27: // escape
				if (this.isOpen()) {
					this.closeMenu();
				} else if (this.props.clearable && this.props.escapeClearsValue) {
					this.clearValue(event);
				}
				event.preventDefault();
			break;
			case 38: // up
				this.focusPreviousOption();
				event.preventDefault();
			break;
			case 40: // down
				this.focusNextOption();
				event.preventDefault();
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

	onOptgroupClick(optgroup, groupOptions) {
		if (!this.props.multi) {
			return;
		}

		if (_.every(groupOptions, this.isValueSelected)) {
			this.removeValues(groupOptions);
		} else {
			this.addValues(groupOptions);
		}
	},


// </editor-fold>

// <editor-fold desc="Renders">


	renderLoading () {
		if (!this.props.isLoading) return;
		return (
		<span className="Select-loading-zone" aria-hidden="true">
				<span className="Select-loading"/>
			</span>
		);
	},

	renderValue (valueArray, isOpen, options) {
		let renderLabel = this.props.valueRenderer || this.getOptionLabel;
		let ValueComponent = this.props.valueComponent;

		if (!valueArray.length) {
			return (this.isInputEmpty() && !this.isAutocomplete()) ?
			<div className="Select-placeholder">{this.props.placeholder}</div> : null;
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

		if (!this.isAutocomplete()) {
			return (
			<div
			{...this.props.inputProps}
			className={className}
			tabIndex={this.props.tabIndex || 0}
			onBlur={onBlur}
			onFocus={this.handleNormalSelectFocus}
			ref="input"
			style={{border: 0, width: 1, display: 'inline-block'}}
			>
			</div>
			);
		} else {
			let props = _.assign({}, this.props.inputProps, {
				className,
				disabled: this.isDiabled(),
				tabIndex: this.props.tabIndex,
				onBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: "input",
				required: this.state.required,
				value: this.getInputValue(),
				autoComplete: "off",
				placeholder: this.props.showInputPlaceholder && this.props.placeholder
			});

			if (this.isMultiselectAutocomplete()) {
				props.placeholder = this.generateMultiselectLabel(options, valueArray);
			}

			return <input {...props} />;
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
				<span className="Select-clear" dangerouslySetInnerHTML={{__html: '&times;'}}/>
			</span>
		);
	},

	renderArrow () {
		if (this.isAutocomplete())
			return;

		return (
		<span className="Select-arrow-zone" onMouseDown={this.handleMouseDownOnArrow}>
				<span className="Select-arrow" onMouseDown={this.handleMouseDownOnArrow}/>
			</span>
		);
	},

	renderOptgroups (options, valueArray, focusedOption, groups) {
		let elems = [];

		elems = elems.concat(_.map(_.filter(options, option => !option.groupId), (option) => this.renderOption(option, 0, valueArray, focusedOption)));

		groups.forEach((optgroup, i) => {
			let groupOptions = this.getGroupOptions(options, optgroup);

			let allSelected = false;
			if (_.every(groupOptions, this.isValueSelected)) {
				allSelected = true;
			}

			if (groupOptions.length) {
				let holderClass = classNames("Select-group-holder", {
					"is-selected": allSelected,
					"is-focused": true || (this.state.focusedGroup ? this.state.focusedGroup.id === optgroup.id : false)
				});
				elems = elems.concat(
				<div className={holderClass} key={`optgroup-${i}`}>
					<div className="Select-header"
						 onClick={() => this.onOptgroupClick(optgroup, groupOptions)}
						 onMouseEnter={() => this.setState({mouseOverGroup: true})}
						 onMouseLeave={() => this.setState({mouseOverGroup: false})}
						 onFocus={() => this.focusGroup(optgroup)}
					>
						{optgroup.name}
					</div>
					{_.map(groupOptions, (option) => this.renderOption(option, i, valueArray, focusedOption))}
				</div>);
			}
		});

		return elems;
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

	renderMenuHeader (options, valueArray, focusedOption) {
		if (!this.isAutocomplete() || this.props.allowCreate) {
			return null; // header ma sens tylko przy autocomplete (?)
		}

		if (this.props.isLoading || this.props.loadWaiting) {
			return null;
		}

		if (this.isMultiselectAutocomplete()) {
			if (!this.excludeOptions(options, this.state.value).length) {
				return <div>Nie znaleziono wyników</div>
			} else if (this.isInputEmpty()) {
				let word = this.props.showAllValues ? "zawęzić" : "zobaczyć";
				return <div>{`Zacznij pisać aby ${word} wyniki`}</div>
			} else if (options && options.length) {
				return <div>Znaleziono następujące wyniki</div>
			} else {
				return <div>Nie znaleziono wyników</div>
			}
		} else if (this.isAutocomplete()) {
			if (this.isInputEmpty() && !this.props.showAllValues) {
				return <div>Zacznij pisać aby zobaczyć wyniki</div>
			} else if (!options || !options.length) {
				return <div>Nie znaleziono wyników</div>
			}
		}
	},

	renderMenuOptions (options, valueArray, focusedOption, groups) {

		if (!options || !options.length) {
			return null;
		}

		if (this.props.isLoading || this.props.loadWaiting) {
			return null;
		}

		// if (this.isMultiselectAutocomplete() && this.isInputEmpty() && valueArray.length) { // MULTISELECT AUTOCOMPLETE SELECTED OPTIONS
		// 	return this.renderAutocompleteSelectedOptions(valueArray);
		// } else
		if (options && options.length && (!this.isAutocomplete() || !this.isInputEmpty() || (this.isInputEmpty() && this.props.showAllValues))) {
			if (!groups.length) {
				let optionsToRender = this.isMultiselectAutocomplete() ? this.excludeOptions(options, this.state.value) : options;
				return optionsToRender.map((option, i) => this.renderOption(option, i, valueArray, focusedOption));
			} else {
				return this.renderOptgroups(options, valueArray, focusedOption, groups);
			}
		}

		this._focusedOption = null;
		return null;
	},

	renderHiddenField (valueArray) {
		if (!this.props.name) return;
		let value = _.map(valueArray, i => {
			let x = valueArray.length;
			stringifyValue(i[this.props.valueKey]);
		}).join(this.props.delimiter);
		return <input type="hidden" ref="value" name={this.props.name} value={value} disabled={this.isDiabled()}/>;
	},

	renderDebug () {
		return (
		<pre>{JSON.stringify(this.state, null, 2)}</pre>
		);
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
			'is-searchable-multiselect': this.isMultiselect(),
			'has-value': valueArray.length,
		});

		let menuClassName = classNames("Select-menu-outer", {
			"select-up": this.props.menuUp,
			[this.props.menuClassName]: this.props.menuClassName
		});



		let style = _.assign({}, this.props.menuContainerStyle, {
			width: this.state.width
		});

		return (
		<div ref="wrapper" className={className} style={this.props.wrapperStyle}>
			{/*<pre>{JSON.stringify({"this.state.focusedOption": this.state && this.state.focusedOption, "this._focusedOption": this._focusedOption}, null, 2)}</pre>*/}
			{this.renderHiddenField(valueArray)}
			{this.props.debug && this.renderDebug()}
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
			<div ref="menuContainer" className={menuClassName} style={style}>
				<div className="Select-menu-header">
					{this.renderMenuHeader(options, valueArray, focusedOption)}
				</div>
				<div ref="menu" className="Select-menu"
					 style={this.props.menuStyle}
					 onScroll={this.handleMenuScroll}
					 onMouseDown={this.handleMouseDownOnMenu}>
					{this.renderMenuOptions(options, valueArray, focusedOption, this.props.groups)}
				</div>
			</div>
			) : null}
			{/*</TetherComponent>*/}
		</div>
		);
	}


// </editor-fold>

});

export default Select;
