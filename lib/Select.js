'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactInputAutosize = require('react-input-autosize');

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

var _reactTether = require('react-tether');

var _reactTether2 = _interopRequireDefault(_reactTether);

var _utilsStripDiacritics = require('./utils/stripDiacritics');

var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);

var _Async = require('./Async');

var _Async2 = _interopRequireDefault(_Async);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

var _Value = require('./Value');

var _Value2 = _interopRequireDefault(_Value);

function stringifyValue(value) {
	if (typeof value === 'object') {
		return JSON.stringify(value);
	} else {
		return value;
	}
}

var stringOrNode = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]);

var Select = _react2['default'].createClass({

	displayName: 'Select',

	propTypes: {
		addLabelText: _react2['default'].PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
		allowCreate: _react2['default'].PropTypes.bool, // whether to allow creation of new entries
		autoBlur: _react2['default'].PropTypes.bool,
		autofocus: _react2['default'].PropTypes.bool, // autofocus the component on mount
		backspaceRemoves: _react2['default'].PropTypes.bool, // whether backspace removes an item if there is no text input
		className: _react2['default'].PropTypes.string, // className for the outer element
		clearAllText: stringOrNode, // title for the "clear" control when multi: true
		clearValueText: stringOrNode, // title for the "clear" control
		clearable: _react2['default'].PropTypes.bool, // should it be possible to reset value
		delimiter: _react2['default'].PropTypes.string, // delimiter to use to join multiple values for the hidden field value
		disabled: _react2['default'].PropTypes.bool, // whether the Select is disabled or not
		escapeClearsValue: _react2['default'].PropTypes.bool, // whether escape clears the value when the menu is closed
		filterOption: _react2['default'].PropTypes.func, // method to filter a single option (option, filterString)
		filterOptions: _react2['default'].PropTypes.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
		ignoreAccents: _react2['default'].PropTypes.bool, // whether to strip diacritics when filtering
		ignoreCase: _react2['default'].PropTypes.bool, // whether to perform case-insensitive filtering
		inputProps: _react2['default'].PropTypes.object, // custom attributes for the Input
		isLoading: _react2['default'].PropTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
		labelKey: _react2['default'].PropTypes.string, // path of the label value in option objects
		matchPos: _react2['default'].PropTypes.string, // (any|start) match the start or entire string when filtering
		matchProp: _react2['default'].PropTypes.string, // (any|label|value) which option property to filter on
		menuBuffer: _react2['default'].PropTypes.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
		menuContainerStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu container
		menuStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu
		multi: _react2['default'].PropTypes.bool, // multi-value input
		name: _react2['default'].PropTypes.string, // generates a hidden <input /> tag with this field name for html forms
		newOptionCreator: _react2['default'].PropTypes.func, // factory to create new options when allowCreate set
		noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
		onBlur: _react2['default'].PropTypes.func, // onBlur handler: function (event) {}
		onBlurResetsInput: _react2['default'].PropTypes.bool, // whether input is cleared on blur
		onChange: _react2['default'].PropTypes.func, // onChange handler: function (newValue) {}
		onClose: _react2['default'].PropTypes.func, // fires when the menu is closed
		onFocus: _react2['default'].PropTypes.func, // onFocus handler: function (event) {}
		onInputChange: _react2['default'].PropTypes.func, // onInputChange handler: function (inputValue) {}
		onInputBlur: _react2['default'].PropTypes.func,
		onMenuScrollToBottom: _react2['default'].PropTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
		onOpen: _react2['default'].PropTypes.func, // fires when the menu is opened
		onValueClick: _react2['default'].PropTypes.func, // onClick handler for value labels: function (value, event) {}
		optionComponent: _react2['default'].PropTypes.func, // option component to render in dropdown
		optionRenderer: _react2['default'].PropTypes.func, // optionRenderer: function (option) {}
		options: _react2['default'].PropTypes.array, // array of options
		placeholder: stringOrNode, // field placeholder, displayed when there's no value
		required: _react2['default'].PropTypes.bool, // applies HTML5 required attribute when needed
		scrollMenuIntoView: _react2['default'].PropTypes.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
		searchable: _react2['default'].PropTypes.bool, // whether to enable searching feature or not
		simpleValue: _react2['default'].PropTypes.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
		style: _react2['default'].PropTypes.object, // optional style to apply to the control
		tabIndex: _react2['default'].PropTypes.string, // optional tab index of the control
		value: _react2['default'].PropTypes.any, // initial field value
		valueComponent: _react2['default'].PropTypes.func, // value component to render
		valueKey: _react2['default'].PropTypes.string, // path of the label value in option objects
		valueRenderer: _react2['default'].PropTypes.func, // valueRenderer: function (option) {}
		wrapperStyle: _react2['default'].PropTypes.object },

	// optional style to apply to the component wrapper
	statics: { Async: _Async2['default'] },

	getDefaultProps: function getDefaultProps() {
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
			optionComponent: _Option2['default'],
			placeholder: 'Wybierz',
			required: false,
			scrollMenuIntoView: true,
			searchable: true,
			simpleValue: false,
			valueComponent: _Value2['default'],
			valueKey: 'value'
		};
	},

	getInitialState: function getInitialState() {
		return {
			inputValue: '',
			isFocused: false,
			isLoading: false,
			isOpen: false,
			isPseudoFocused: false,
			required: this.props.required && this.handleRequired(this.props.value, this.props.multi)
		};
	},

	componentDidMount: function componentDidMount() {
		if (this.props.autofocus) {
			this.focus();
		}

		if (this.props.value) {
			this.setState({
				inputValue: this.props.value.label || ""
			});
		}

		this.setState({
			width: 0
		});
	},

	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (nextState.isOpen !== this.isOpen()) {
			var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
			handler && handler();
		}
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		// todo fixme
		if (nextProps.value) {
			if (!_.isEqual(this.props.value, nextProps.value)) {
				this.setState({
					inputValue: nextProps.value.label
				});
			}
		} else if (this.isInputEmpty() || !nextProps.value && this.props.value) {
			this.setValue(null);
			this.clearInput();
		}
	},

	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		// focus to the selected option
		if (this.refs.menu && this.refs.focused && this.isOpen() && !this.hasScrolledToOption) {
			var focusedOptionNode = _reactDom2['default'].findDOMNode(this.refs.focused);
			var menuNode = _reactDom2['default'].findDOMNode(this.refs.menu);
			menuNode.scrollTop = focusedOptionNode.offsetTop;
			this.hasScrolledToOption = true;
		} else if (!this.isOpen()) {
			this.hasScrolledToOption = false;
		}

		var prevInput = prevState.inputValue;
		var input = this.state.inputValue;

		if (input != null && prevInput !== input && this.props.onInputChange) {
			this.props.onInputChange(this.state.inputValue);
		}
		if (this._scrollToFocusedOptionOnUpdate && this.refs.focused && this.refs.menu) {
			this._scrollToFocusedOptionOnUpdate = false;
			var focusedDOM = _reactDom2['default'].findDOMNode(this.refs.focused);
			var menuDOM = _reactDom2['default'].findDOMNode(this.refs.menu);
			var focusedRect = focusedDOM.getBoundingClientRect();
			var menuRect = menuDOM.getBoundingClientRect();
			if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
				menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
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

		var width = _reactDom2['default'].findDOMNode(this.refs["control"]).offsetWidth;
		if (width != this.state.width) {
			this.setState({ width: width });
		}
	},

	/**
  * HELPERS
     */

	isMultiselectStandard: function isMultiselectStandard() {
		return this.props.multi && !this.props.searchable;
	},

	isMultiselect: function isMultiselect() {
		return this.props.multi;
	},

	isMultiselectAutocomplete: function isMultiselectAutocomplete() {
		return this.props.multi && this.props.searchable;
	},

	isSingleAutocomplete: function isSingleAutocomplete() {
		return !this.props.multi && this.props.searchable;
	},

	isAutocomplete: function isAutocomplete() {
		return this.props.searchable;
	},

	isInputEmpty: function isInputEmpty() {
		return !this.state.inputValue;
	},

	isDiabled: function isDiabled() {
		return this.props.disabled;
	},

	isFocused: function isFocused() {
		return this.state.isFocused;
	},

	isOpen: function isOpen() {
		return this.state.isOpen;
	},

	clearInput: function clearInput() {
		this.setState({
			inputValue: ""
		});
	},

	toggleMenu: function toggleMenu(shouldOpen) {
		this.setState({
			isOpen: shouldOpen
		});
	},

	toggleFocus: function toggleFocus(shouldFocus) {
		this.setState({
			isFocused: shouldFocus
		});
	},

	togglePseudoFocus: function togglePseudoFocus(shouldFocus) {
		this.setState({
			isPseudoFocused: shouldFocus
		});
	},

	generateMultiselectLabel: function generateMultiselectLabel(options, valueArray) {
		var label = undefined;
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
			label = valueArray[0].label + " i " + (valueArray.length - 1) + " więcej";
		}

		return label;
	},

	focus: function focus(shouldOpen) {
		if (!this.refs.input) return;
		this.refs.input.focus();
		if (shouldOpen) {
			this.toggleMenu(true);
		}
	},

	blurInput: function blurInput() {
		if (!this.refs.input) return;
		this.refs.input.blur();
	},

	handleTouchMove: function handleTouchMove(event) {
		// Set a flag that the view is being dragged
		this.dragging = true;
	},

	handleTouchStart: function handleTouchStart(event) {
		// Set a flag that the view is not being dragged
		this.dragging = false;
	},

	handleTouchEnd: function handleTouchEnd(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		// Fire the mouse events
		this.handleMouseDown(event);
	},

	handleTouchEndClearValue: function handleTouchEndClearValue(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		// Clear the value
		this.clearValue(event);
	},

	handleMouseDown: function handleMouseDown(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.isDiabled() || event.type === 'mousedown' && event.button !== 0) {
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

	handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.isDiabled() || event.type === 'mousedown' && event.button !== 0) {
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

	handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.isDiabled() || event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		event.stopPropagation();
		event.preventDefault();

		this._openAfterFocus = true;
		this.focus();
	},

	closeMenu: function closeMenu() {
		this.togglePseudoFocus(this.isFocused() && !this.isMultiselect());
		this.toggleMenu(false);
		this.hasScrolledToOption = false;
	},

	handleNormalSelectFocus: function handleNormalSelectFocus(event) {
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
		this.toggleFocus(true);
	},

	handleInputFocus: function handleInputFocus(event) {
		var isOpen = this.isOpen() || this._openAfterFocus || this.isMultiselectAutocomplete();
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
		this.toggleFocus(true);
		this.toggleMenu(isOpen);
		this._openAfterFocus = false;
	},

	handleInputBlur: function handleInputBlur(event) {
		if (!this.isMultiselect()) {
			if (!this.getValueArray()[0] || this.getValueArray()[0].label != this.state.inputValue) {
				if (!this.props.allowCreate) {
					if (!this.isInputEmpty() && this.props.selectFocusedOnBlur && this._focusedOption) {
						this.selectFocusedOption();
					} else {
						this.setValue(this.props.required && this.props.options[0] || null);
						this.clearInput();
					}
				} else {
					var option = { value: this.state.inputValue, label: this.state.inputValue };
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

	handleInputChange: function handleInputChange(event) {
		var inputValue = event.target.value;
		if (inputValue === "" && !this.isMultiselectAutocomplete()) {
			this.setValue(null);
		}
		//this.toggleMenu(true);
		this.togglePseudoFocus(false);
		this.setState({
			inputValue: inputValue
		});
	},

	handleKeyDown: function handleKeyDown(event) {
		if (this.isDiabled()) return;
		if (this.isFocused() && !this.isOpen()) {
			this.toggleMenu(true);
		}
		switch (event.keyCode) {
			case 8:
				// backspace
				//if (!this.state.inputValue && this.props.backspaceRemoves) {
				//	event.preventDefault();
				//	this.popValue();
				//}
				return;
			case 9:
				// tab
				if (event.shiftKey || !this.isOpen()) {
					return;
				}
				if (!this.isInputEmpty()) {
					this.selectFocusedOption();
				}
				return;
			case 13:
				// enter
				if (!this.isOpen()) {
					this.toggleMenu(true);
					return;
				}
				event.stopPropagation();
				// if (!this.isAutocomplete() || (this.isAutocomplete() && (!this.isInputEmpty() || !this.props.async))) {
				this.selectFocusedOption();
				// }
				break;
			case 27:
				// escape
				if (this.isOpen()) {
					this.closeMenu();
				} else if (this.props.clearable && this.props.escapeClearsValue) {
					this.clearValue(event);
				}
				break;
			case 38:
				// up
				this.focusPreviousOption();
				break;
			case 40:
				// down
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
			default:
				return;
		}
		event.preventDefault();
	},

	handleValueClick: function handleValueClick(option, event) {
		if (!this.props.onValueClick) return;
		this.props.onValueClick(option, event);
	},

	handleMenuScroll: function handleMenuScroll(event) {
		if (!this.props.onMenuScrollToBottom) return;
		var target = event.target;

		if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
			this.props.onMenuScrollToBottom();
		}
	},

	handleRequired: function handleRequired(value, multi) {
		if (!value) return true;
		return multi ? value.length === 0 : Object.keys(value).length === 0;
	},

	getOptionLabel: function getOptionLabel(op) {
		return op[this.props.labelKey];
	},

	getValueArray: function getValueArray() {
		var value = this.props.value;
		if (value == null) {
			return [];
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

	clear: function clear() {
		this.setValue(null);
		this.toggleMenu(false);
		this.clearInput();
	},

	setValue: function setValue(value) {
		var _this = this;

		// na sytuacje gdy przychodzi []
		if (_.isEmpty(value)) value = null;

		if (this.props.autoBlur) {
			this.blurInput();
		}
		if (!this.props.onChange) return;
		if (this.props.required) {
			var required = this.handleRequired(value, this.props.multi);
			this.setState({ required: required });
		}
		if (this.props.simpleValue && value) {
			value = this.props.multi ? value.map(function (i) {
				return i[_this.props.valueKey];
			}).join(this.props.delimiter) : value[this.props.valueKey];
		}
		this.props.onChange(value);
	},

	selectValue: function selectValue(value) {
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
					inputValue: value.label
				});
			}
	},

	addValue: function addValue(value) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.concat([value]));
	},

	toggleValue: function toggleValue(value) {
		var valueArray = this.getValueArray();
		var option = _.find(valueArray, function (elem) {
			return elem.label == value.label && elem.value == value.value;
		});
		option == null ? this.addValue(value) : this.removeValue(value);
	},

	popValue: function popValue() {
		var valueArray = this.getValueArray();
		if (!valueArray.length) return;
		if (valueArray[valueArray.length - 1].clearableValue === false) return;
		this.setValue(valueArray.slice(0, valueArray.length - 1));
	},

	removeValue: function removeValue(value) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.filter(function (i) {
			return i.value.toString() !== value.value.toString();
		}));
		this.focus();
	},

	clearValue: function clearValue(event) {
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

	focusOption: function focusOption(option) {
		this.setState({
			focusedOption: option
		});
	},

	focusNextOption: function focusNextOption() {
		this.focusAdjacentOption('next');
	},

	focusPreviousOption: function focusPreviousOption() {
		this.focusAdjacentOption('previous');
	},

	focusAdjacentOption: function focusAdjacentOption(dir) {
		var options = this._visibleOptions.filter(function (i) {
			return !i.disabled;
		});
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

	selectFocusedOption: function selectFocusedOption() {
		// if (this.props.allowCreate && !this.state.focusedOption) {
		// 	return this.selectValue(this.state.inputValue);
		// }
		if (this._focusedOption) {
			return this.selectValue(this._focusedOption);
		}
	},

	renderLoading: function renderLoading() {
		if (!this.props.isLoading) return;
		return _react2['default'].createElement(
			'span',
			{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
			_react2['default'].createElement('span', { className: 'Select-loading' })
		);
	},

	renderValue: function renderValue(valueArray, isOpen, options) {
		var renderLabel = this.props.valueRenderer || this.getOptionLabel;
		var ValueComponent = this.props.valueComponent;

		if (!valueArray.length) {
			return this.isInputEmpty() && !this.isAutocomplete() ? _react2['default'].createElement(
				'div',
				{ className: 'Select-placeholder' },
				this.props.placeholder
			) : null;
		}

		var onClick = this.props.onValueClick ? this.handleValueClick : null;
		if (this.isMultiselectStandard()) {
			if (isOpen) onClick = null;
			var label = this.generateMultiselectLabel(options, valueArray);
			return _react2['default'].createElement(
				ValueComponent,
				{
					disabled: this.isDiabled(),
					onClick: onClick,
					value: {}
				},
				label
			);
		} else if (!this.isAutocomplete() || this.isInputEmpty() && this.props.required) {
			if (isOpen) onClick = null;
			return _react2['default'].createElement(
				ValueComponent,
				{ disabled: this.isDiabled(), onClick: onClick, value: valueArray[0] },
				renderLabel(valueArray[0])
			);
		}
	},

	renderInput: function renderInput(valueArray, isOpen, options) {
		var _this2 = this;

		var className = (0, _classnames2['default'])('Select-input', this.props.inputProps.className);

		var onBlur = function onBlur(event) {
			_this2.props.onInputBlur && _this2.props.onInputBlur(event);
			_this2.handleInputBlur(event);
		};

		if (!this.isAutocomplete()) {
			return _react2['default'].createElement('div', _extends({}, this.props.inputProps, {
				className: className,
				tabIndex: this.props.tabIndex || 0,
				onBlur: onBlur,
				onFocus: this.handleNormalSelectFocus,
				ref: 'input',
				style: { border: 0, width: 1, display: 'inline-block' }
			}));
		} else {
			var props = _.assign({}, this.props.inputProps, {
				className: className,
				disabled: this.isDiabled(),
				tabIndex: this.props.tabIndex,
				onBlur: onBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				minWidth: "5",
				ref: "input",
				required: this.state.required,
				value: this.state.inputValue,
				autoComplete: "off",
				placeholder: this.props.showInputPlaceholder && this.props.placeholder
			});

			if (this.isMultiselectAutocomplete()) {
				props.placeholder = this.generateMultiselectLabel(options, valueArray);
			}

			return _react2['default'].createElement('input', props);
		}
	},

	renderClear: function renderClear() {
		if (!this.props.clearable || !this.props.value || this.isMultiselect() && !this.props.value.length || this.isDiabled() || this.props.isLoading) return;
		return _react2['default'].createElement(
			'span',
			{ className: 'Select-clear-zone', title: this.isMultiselect() ? this.props.clearAllText : this.props.clearValueText,
				'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
				onMouseDown: this.clearValue,
				onTouchStart: this.handleTouchStart,
				onTouchMove: this.handleTouchMove,
				onTouchEnd: this.handleTouchEndClearValue },
			_react2['default'].createElement('span', { className: 'Select-clear', dangerouslySetInnerHTML: { __html: '&times;' } })
		);
	},

	renderArrow: function renderArrow() {
		if (this.isAutocomplete()) return;

		return _react2['default'].createElement(
			'span',
			{ className: 'Select-arrow-zone', onMouseDown: this.handleMouseDownOnArrow },
			_react2['default'].createElement('span', { className: 'Select-arrow', onMouseDown: this.handleMouseDownOnArrow })
		);
	},

	filterOptions: function filterOptions(excludeOptions) {
		var _this3 = this;

		var filterValue = this.state.inputValue;
		var options = this.props.options || [];

		if (this.props.filterOptions === false) {
			return options;
		}

		if (!this.props.noResultLimit && (!this.isAutocomplete() || filterValue === "")) {
			return options.slice(0, this.props.resultLimit || 30);
		}

		var query = filterValue && filterValue.toLowerCase().trim() || "";

		var queryTokens = query.split(" ");
		var matchResults = {};
		var result = [];

		var _loop = function (i) {
			var option = options[i];

			var name = option.label.toLowerCase().trim();
			var isValid = true;

			if (name.indexOf(query) !== 0) {
				var tokens = name.split(/[,-]/);
				tokens.push(name);

				for (var j = 0; j < queryTokens.length; j++) {
					// "ma", "wa"
					var tokenValid = false;
					for (var k = 0; k < tokens.length; k++) {
						// "mazowieckie", "warszawa"
						var normalizedToken = tokens[k].trim().toLowerCase();
						var normalizedQueryToken = queryTokens[j].trim();
						var pos = normalizedToken.indexOf(normalizedQueryToken);
						if (_this3.props.searchInside && pos != -1 || !_this3.props.searchInside && pos === 0) {
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

				if (!_.some(excludeOptions, function (excluded) {
					return _this3.areOptionsEqual(excluded, option);
				})) {
					if (_this3.props.noLengthSorting) {
						result.push(option);
					} else {
						matchResults[name.length].push(option);
					}
				}
			}
		};

		for (var i = 0; i < options.length; i++) {
			_loop(i);
		}

		if (!this.props.noLengthSorting) {
			var keys = _.keys(matchResults).sort(function (a, b) {
				return a - b;
			});
			_.each(keys, function (key) {
				_.each(matchResults[key], function (res) {
					result.push(res);
				});
			});
		}

		if (!this.props.noResultLimit) {
			return result.slice(0, this.props.resultLimit || 30);
		}

		return result;
	},

	renderAutocompleteSelectedOpions: function renderAutocompleteSelectedOpions(selectedOptions) {
		var _this4 = this;

		var renderedOptions = _.map(selectedOptions, function (option, index) {
			return _react2['default'].createElement(
				'li',
				{ key: index, className: 'multiselect-selected-item' },
				_react2['default'].createElement(
					'span',
					{ className: 'multiselect-selected-value' },
					option.label
				),
				_react2['default'].createElement('span', { className: 'multiselect-selected-remove unselectable', onClick: function () {
						return _this4.removeValue(option);
					} })
			);
		});

		return _react2['default'].createElement(
			'ul',
			{ className: 'multiselect-selected-list' },
			renderedOptions
		);
	},

	areOptionsEqual: function areOptionsEqual(option1, option2) {
		var value1 = !_.isUndefined(option1.value) ? option1.value.toString() : "";
		var value2 = !_.isUndefined(option2.value) ? option2.value.toString() : "";
		return value1 === value2;
	},

	renderOption: function renderOption(option, index, valueArray, focusedOption) {
		var _this5 = this;

		var Option = this.props.optionComponent;
		var renderLabel = this.props.optionRenderer || this.getOptionLabel;

		var isSelected = valueArray && _.find(valueArray, function (value) {
			return _this5.areOptionsEqual(value, option);
		}) != null;
		var isFocused = option === focusedOption;
		var optionRef = isFocused ? 'focused' : null;
		var optionClass = (0, _classnames2['default'])({
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return _react2['default'].createElement(
			Option,
			{
				className: optionClass,
				isDisabled: option.disabled,
				isFocused: isFocused,
				key: 'option-' + index + '-' + option[this.props.valueKey],
				onSelect: this.selectValue,
				onFocus: this.focusOption,
				option: option,
				isSelected: isSelected,
				ref: optionRef
			},
			renderLabel(option)
		);
	},

	renderMenu: function renderMenu(options, valueArray, focusedOption) {
		var _this6 = this;

		if (this.isAutocomplete() && !this.props.allowCreate && this.isInputEmpty() && !this.props.showAllValues) {
			if (!this.isMultiselect()) {
				this._focusedOption = null;
				return _react2['default'].createElement(
					'div',
					{ className: 'Select-noresults' },
					'Zacznij pisać aby zobaczyć wyniki'
				);
			} else {
				if (valueArray.length) {
					return this.renderAutocompleteSelectedOpions(valueArray);
				} else {
					this._focusedOption = null;
					return _react2['default'].createElement(
						'div',
						{ className: 'Select-noresults' },
						'Brak wybranych elementów'
					);
				}
			}
		} else if (options && options.length) {
			return options.map(function (option, i) {
				return _this6.renderOption(option, i, valueArray, focusedOption);
			});
		} else if (this.props.noResultsText && !this.props.allowCreate) {
			this._focusedOption = null;
			return _react2['default'].createElement(
				'div',
				{ className: 'Select-noresults' },
				this.props.noResultsText
			);
		} else {
			return null;
		}
	},

	renderHiddenField: function renderHiddenField(valueArray) {
		var _this7 = this;

		if (!this.props.name) return;
		var value = _.map(valueArray, function (i) {
			var x = valueArray.length;
			stringifyValue(i[_this7.props.valueKey]);
		}).join(this.props.delimiter);
		return _react2['default'].createElement('input', { type: 'hidden', ref: 'value', name: this.props.name, value: value, disabled: this.isDiabled() });
	},

	getFocusableOption: function getFocusableOption(selectedOption) {
		var options = this._visibleOptions;
		if (!options || !options.length) return;
		var focusedOption = this.state.focusedOption || selectedOption;
		// z jakiegos powodu nie znajduje poprzez indexOf chociaz to jest taki sam obiekt (gdzies wczesniej klonowany albo tworzony na nowo?)
		// zamiast tego porownujemy label i value
		if (focusedOption) {
			var index = _.findIndex(options, function (elem) {
				return elem.value === focusedOption.value && elem.label === focusedOption.label;
			});
			if (index > -1) return options[index];
		}

		for (var i = 0; i < options.length; i++) {
			if (!options[i].disabled) return options[i];
		}
	},

	render: function render() {
		var valueArray = this.getValueArray();
		var options = this._visibleOptions = this.filterOptions(this.isMultiselectAutocomplete() ? valueArray : null);
		var isOpen = this.isOpen();
		//if (this.isMultiselect() && !options.length && valueArray.length && this.isInputEmpty()) isOpen = false;
		var focusedOption = this._focusedOption = this.getFocusableOption(valueArray[0]);
		var className = (0, _classnames2['default'])('Select', this.props.className, {
			//'Select--multi': this.props.multi,
			'multiselect': this.isMultiselectStandard(),
			'is-disabled': this.isDiabled(),
			'is-focused': this.isFocused(),
			'is-loading': this.props.isLoading,
			'is-open': isOpen,
			//'is-pseudo-focused': this.state.isPseudoFocused,
			'is-searchable': this.props.searchable,
			'has-value': valueArray.length
		});

		var style = _.assign({}, this.props.menuContainerStyle, {
			width: this.state.width
		});

		return _react2['default'].createElement(
			'div',
			{ ref: 'wrapper', className: className, style: this.props.wrapperStyle },
			this.renderHiddenField(valueArray),
			_react2['default'].createElement(
				'div',
				{ ref: 'control',
					className: 'Select-control',
					style: this.props.style,
					onKeyDown: this.handleKeyDown,
					onMouseDown: this.handleMouseDown,
					onTouchEnd: this.handleTouchEnd,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				this.renderValue(valueArray, isOpen, options),
				this.renderInput(valueArray, isOpen, options),
				this.renderLoading(),
				this.renderClear(),
				this.renderArrow()
			),
			isOpen ? _react2['default'].createElement(
				'div',
				{ ref: 'menuContainer', className: 'Select-menu-outer', style: style },
				_react2['default'].createElement(
					'div',
					{ ref: 'menu', className: 'Select-menu',
						style: this.props.menuStyle,
						onScroll: this.handleMenuScroll,
						onMouseDown: this.handleMouseDownOnMenu },
					this.renderMenu(options, valueArray, focusedOption)
				)
			) : null
		);
	}

});

exports['default'] = Select;
module.exports = exports['default'];
/*<TetherComponent
attachment="top left"
targetAttachment="bottom left"
constraints={[
	{
		to: "scrollParent",
		attachment: "together"
	}
]}
>*/ /*</TetherComponent>*/