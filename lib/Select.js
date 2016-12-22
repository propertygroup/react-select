'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _reactBootstrap = require("react-bootstrap");

var _reactOverlays = require("react-overlays");

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

	statics: { Async: _Async2['default'] },

	selectedContainerRef: null,

	selectedBtnRef: null,

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
			optionComponent: _Option2['default'],
			optgroups: false,
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
			focusedOption: null,
			value: null,
			inputValue: "",
			isFocused: false,
			isLoading: false,
			isOpen: false,
			isPseudoFocused: false,
			required: this.props.required, // && this.handleRequired(this.props.value, this.props.multi)
			showSelected: false,
			showSelectedTooltip: false
		};
	},

	componentDidMount: function componentDidMount() {
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

	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (nextState.isOpen !== this.isOpen()) {
			var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
			handler && handler();
		}
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.isMultiselectAutocomplete() && this.props.value && this.props.value.length && (!nextProps.value || !nextProps.value.length)) {
			this.setValue(null);
		}

		if (nextProps.value) {
			if (!this.isMultiselectAutocomplete() && !_.isEqual(this.props.value, nextProps.value)) {
				this.setInputValue(nextProps.value[this.props.labelKey]);
			}
		} else if (this.isInputEmpty() || !nextProps.value && this.props.value) {
			if (this.props.value != null) {
				this.setValue(null);
			}
			if (this.state.inputValue != "") {
				this.clearInput();
			}
		}

		if (!nextProps.options || !nextProps.options.length) {
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

	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {

		// focus to the selected option
		if (this.refs.menu && this.refs.focused && this.isOpen() && !this.hasScrolledToOption) {
			var focusedOptionNode = _reactDom2['default'].findDOMNode(this.refs.focused);
			var menuNode = _reactDom2['default'].findDOMNode(this.refs.menu);
			// menuNode.scrollTop = focusedOptionNode.offsetTop;
			this.hasScrolledToOption = true;
		} else if (!this.isOpen()) {
			this.hasScrolledToOption = false;
		}

		var prevInput = prevState.inputValue;
		var input = this.getInputValue();

		if (input != null && prevInput !== input && this.props.onInputChange) {
			this.props.onInputChange(this.getInputValue());
		}
		if (this._scrollToFocusedOptionOnUpdate && (this._focusedOption || this._focusedGroup) && this.refs.menu) {
			this._scrollToFocusedOptionOnUpdate = false;
			var ref = this._focusedOption ? "option-" + this._focusedOption.value : "group-" + this._focusedGroup.id;
			var focusedDOM = _reactDom2['default'].findDOMNode(this.refs[ref]);
			var menuDOM = _reactDom2['default'].findDOMNode(this.refs.menu);
			var focusedRect = focusedDOM.getBoundingClientRect();
			var menuRect = menuDOM.getBoundingClientRect();
			if (focusedRect.bottom > menuRect.bottom) {
				menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
			} else if (focusedRect.top < menuRect.top) {
				menuDOM.scrollTop = focusedDOM.offsetTop;
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
	// </editor-fold>

	// <editor-fold desc="Helpers">

	// <editor-fold desc="State/props helpers">

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
		return !this.getInputValue();
	},

	isDiabled: function isDiabled() {
		return this.props.disabled;
	},

	isFocused: function isFocused() {
		return this.state.isFocused;
	},

	isOpen: function isOpen() {
		return this.props.forceOpen || this.state.isOpen;
	},

	setInputValue: function setInputValue(value) {
		this.setState({ inputValue: value || "" });
	},

	getInputValue: function getInputValue() {
		return this.state.inputValue;
	},

	focusOption: function focusOption(option) {
		// console.log("focusing option", option)
		this.setState({
			focusedOption: option,
			focusedGroup: null
		});
		this._focusedOption = option;
		this._focusedGroup = null;
	},

	focusGroup: function focusGroup(group) {
		// console.log("focusing group", group)
		this.setState({
			focusedOption: null,
			focusedGroup: group
		});
		this._focusedOption = false;
		this._focusedGroup = group;
	},

	// </editor-fold>

	clearInput: function clearInput() {
		this.setInputValue("");
		this.focusOption(null);
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

		if (valueArray.length === 0) {
			label = this.props.placeholder;
		} else if (valueArray.length === 1) {
			label = valueArray[0][this.props.labelKey];
		} else {
			label = valueArray[0][this.props.labelKey] + " i " + (valueArray.length - 1) + " więcej";
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

	closeMenu: function closeMenu() {
		this._focusedOption = null;
		this._focusedGroup = null;
		this.togglePseudoFocus(this.isFocused() && !this.isMultiselect());
		this.toggleMenu(false);
		this.hasScrolledToOption = false;
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

	clear: function clear() {
		this.setValue(null);
		this.toggleMenu(false);
		this.clearInput();
	},

	setValue: function setValue(value) {
		var _this = this;

		// na sytuacje gdy przychodzi []
		if (_.isEmpty(value)) value = null;

		this.setState({
			value: value
		});

		if (!this.isMultiselectStandard()) {
			// dla zwyklego multiselecta skacze focus
			this.focusOption(null);
		}

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
				this.setInputValue(value[this.props.labelKey]);
			}
	},

	isValueSelected: function isValueSelected(value) {
		var _this2 = this;

		var valueArray = this.getValueArray();
		var option = _.find(valueArray, function (elem) {
			return elem[_this2.props.labelKey] == value[_this2.props.labelKey] && elem.value == value.value;
		});
		return option != null;
	},

	addValue: function addValue(value) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.concat([value]));
	},

	addValues: function addValues(values) {
		var valueArray = this.getValueArray();
		this.setValue(valueArray.concat(_.filter(values, function (value) {
			return _.find(valueArray, { value: value.value }) == null;
		})));
	},

	toggleValue: function toggleValue(value) {
		var _this3 = this;

		var valueArray = this.getValueArray();
		var option = _.find(valueArray, function (elem) {
			return elem[_this3.props.labelKey] == value[_this3.props.labelKey] && elem.value == value.value;
		});
		option == null ? this.addValue(value) : this.removeValue(value, true);
	},

	popValue: function popValue() {
		var valueArray = this.getValueArray();
		if (!valueArray.length) return;
		if (valueArray[valueArray.length - 1].clearableValue === false) return;
		this.setValue(valueArray.slice(0, valueArray.length - 1));
	},

	removeValue: function removeValue(value, focus) {
		var valueArray = this.getValueArray();
		var filteredResult = valueArray.filter(function (i) {
			return i.value.toString() !== value.value.toString();
		});
		this.setValue(filteredResult);
		focus && this.focus();
	},

	removeValues: function removeValues(values, focus) {
		var valueArray = this.getValueArray();

		var newValue = _.filter(valueArray, function (selectedOption) {
			return _.every(values, function (value) {
				return value.value.toString() !== selectedOption.value.toString();
			});
		});

		this.setValue(newValue);
		focus && this.focus();
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

	focusNextOption: function focusNextOption() {
		this.focusAdjacentOption('next');
	},

	focusPreviousOption: function focusPreviousOption() {
		this.focusAdjacentOption('previous');
	},

	focusAdjacentOption: function focusAdjacentOption(dir) {
		var _this4 = this;

		/**
   * jesli kiedys ktos to bedzie czytal i sie zastanawial czemu tu jest taki pierdolnik - wyszla potrzeba zeby optgroupy tez
   * mozna bylo focusowac klawiszami, etc. wydawało się bezpieczniej napisac taki mechanizm dla specjalnych przypadkow
   * niz przerabiac wszystko tak, ze grupa to tez jest jakby option bo tutaj duzo rzeczy na indexach polega a nie chcialem zeby
   * cos sie niepodziewanie spier.. popsulo
   */

		var rawOptions = this._visibleOptions.filter(function (i) {
			return !i.disabled;
		});
		var options = this.isMultiselectAutocomplete() ? this.excludeOptions(rawOptions, this.state.value) : rawOptions;
		this._scrollToFocusedOptionOnUpdate = true;

		if (!this.isOpen() || !this._focusedOption && !this._focusedGroup) {
			// to ejst sytuacja gdy jest focus na selekcie i menu jest zamkniete a nacisniemy strzalke
			if (!this.isOpen()) {
				this.toggleMenu(true);
			}

			if (this.props.groups && this.props.groups.length) {
				// todo tymczasowo wylaczone, do skonczenia
				if (dir === 'next') {
					var grouplessOptions = _.filter(options, function (option) {
						return !option.groupId;
					});
					if (grouplessOptions.length) {
						this.focusOption(grouplessOptions[0]);
					} else {
						this.focusGroup(this.getFirstGroupWithOptions(options, this.props.groups));
					}
				} else {
					var lastGroupWithOptions = this.getLastGroupWithOptions(options, this.props.groups);
					if (lastGroupWithOptions) {
						var groupOptions = this.getGroupOptions(options, lastGroupWithOptions.id);
						this.focusOption(groupOptions[groupOptions.length - 1]);
					}
				}
			} else {
				this.focusOption(options[dir === 'next' ? 0 : options.length - 1]);
			}
			return;
		}

		if (!options.length) return;

		// console.log("dir", dir);

		var focusedIndex = -1;
		for (var i = 0; i < options.length; i++) {
			if (this._focusedOption === options[i]) {
				focusedIndex = i;
				break;
			}
		}

		if (this.props.groups && this.props.groups.length) {
			// todo tymczasowo wylaczone, do skonczenia
			if (this._focusedGroup) {
				// console.log("focused group", this._focusedGroup)
				if (dir === 'next') {
					// jesli next to wez peirwszy elem tej grupy
					var groupOptions = this.getGroupOptions(options, this._focusedGroup.id);
					// console.log("selecting first element in focused group", groupOptions[0])
					this.focusOption(groupOptions[0]);
				} else {
					// jesli prev to znajdz poprzednia grupe i wez ostatni element, jesli to byla pierwsza grupa to zobacz czy sa
					// bez grupy jakies i zaznacz ostatni, jesli nie ma to wez ostatnia grupe i zaznacz ostatni element (jak wyzej przy otwarciu menu)

					var groupIndex = _.findIndex(this.props.groups, function (group) {
						return group.id === _this4._focusedGroup.id;
					});
					if (groupIndex === 0) {
						// console.log("first group")
						var grouplessOptions = _.filter(options, function (option) {
							return !option.groupId;
						});
						if (grouplessOptions.length) {
							// console.log("there are groupless options, select first", grouplessOptions[grouplessOptions.length - 1])
							this.focusOption(grouplessOptions[grouplessOptions.length - 1]);
						} else {
							var groupOptions = this.getGroupOptions(options, this.getLastGroupWithOptions(options, this.props.groups).id);
							// console.log("there are no groupless options, selecting last element of last group", options[options.length - 1])
							this.focusOption(groupOptions[groupOptions.length - 1]);
						}
					} else {
						var groupOptions = this.getGroupOptions(options, this.props.groups[groupIndex - 1].id);
						this.focusOption(groupOptions[groupOptions.length - 1]);
					}
				}
			} else if (focusedIndex > -1) {
				// console.log("focused option", options[focusedIndex])
				if (dir === 'next') {
					if (options[focusedIndex].groupId != null) {
						// jesli element jest w grupie
						var groupOptions = this.getGroupOptions(options, options[focusedIndex].groupId);
						// console.log("option is in group", options[focusedIndex].groupId)
						var selectedOptionsIndexIngroup = groupOptions.indexOf(options[focusedIndex]);
						var lastOptionInGroup = selectedOptionsIndexIngroup === groupOptions.length - 1;
						if (lastOptionInGroup) {
							// jesli ostatni element z grupy
							// console.log("option is last element of group")
							var groupIndex = _.findIndex(this.props.groups, { id: options[focusedIndex].groupId });
							var lastGroup = groupIndex === this.props.groups.length - 1;
							if (lastGroup) {
								// jesli ostatnia grupa
								// console.log("and it is last group")
								var grouplessOptions = _.filter(options, function (option) {
									return !option.groupId;
								});
								if (grouplessOptions.length) {
									// jesli istnieja elementy bez grupy
									// console.log("there are groupless options, selecting first", grouplessOptions[0])
									this.focusOption(grouplessOptions[0]);
								} else {
									// console.log("no groupless options, selecting first group", this.getFirstGroupWithOptions(options, this.props.groups))
									this.focusGroup(this.getFirstGroupWithOptions(options, this.props.groups));
								}
							} else {
								// bierzemy nastepna grupe
								// console.log("it is not last group, focusing next group", this.props.groups[groupIndex + 1])
								this.focusGroup(this.props.groups[groupIndex + 1]);
							}
						} else {
							// to nie ostatni element, zaznaczamy next one
							// console.log("there are more elements in this gruop, selecting next one", groupOptions[selectedOptionsIndexIngroup + 1]);
							this.focusOption(groupOptions[selectedOptionsIndexIngroup + 1]);
						}
					} else {
						// groupless element
						// console.log("options is not in the group")
						var grouplessOptions = _.filter(options, function (option) {
							return !option.groupId;
						});
						var selectedOptionIndex = grouplessOptions.indexOf(options[focusedIndex]);
						if (selectedOptionIndex === grouplessOptions.length - 1) {
							// jesli to ostatni element groupless
							// console.log("it is the last groupless option, selecting first group", this.getFirstGroupWithOptions(options, this.props.groups));
							this.focusGroup(this.getFirstGroupWithOptions(options, this.props.groups));
						} else {
							// console.log("it is not the last element of groupless, selecting next", grouplessOptions[selectedOptionIndex + 1])
							this.focusOption(grouplessOptions[selectedOptionIndex + 1]);
						}
					}
				} else {
					if (options[focusedIndex].groupId != null) {
						// jesli element jest w grupie
						var groupOptions = this.getGroupOptions(options, options[focusedIndex].groupId);
						// console.log("option is in group", options[focusedIndex].groupId)
						var selectedOptionsIndexIngroup = groupOptions.indexOf(options[focusedIndex]);
						var firstOptionInGroup = selectedOptionsIndexIngroup === 0;
						if (firstOptionInGroup) {
							// jesli pierwszy element z grupy
							this.focusGroup(_.find(this.props.groups, { id: options[focusedIndex].groupId }));
						} else {
							// sa jeszcze elementy wyzej
							this.focusOption(groupOptions[selectedOptionsIndexIngroup - 1]);
						}
					} else {
						// groupless element
						var grouplessOptions = _.filter(options, function (option) {
							return !option.groupId;
						});
						var selectedOptionIndex = grouplessOptions.indexOf(options[focusedIndex]);
						if (selectedOptionIndex === 0) {
							var groupOptions = this.getGroupOptions(options, this.getLastGroupWithOptions(options, this.props.groups).id);
							this.focusOption(groupOptions[groupOptions.length - 1]);
						} else {
							this.focusOption(grouplessOptions[selectedOptionIndex - 1]);
						}
					}
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

	getFocusableOption: function getFocusableOption(selectedOption) {
		var _this5 = this;

		var options = this.isMultiselectAutocomplete() ? this.excludeOptions(this._visibleOptions, this.state.value) : this._visibleOptions;
		if (!options || !options.length || this.state.mouseOverGroup) return;
		var focusedOption = this._focusedOption || selectedOption;
		// z jakiegos powodu nie znajduje poprzez indexOf chociaz to jest taki sam obiekt (gdzies wczesniej klonowany albo tworzony na nowo?)
		// zamiast tego porownujemy label i value
		if (focusedOption) {
			var index = _.findIndex(options, function (elem) {
				return elem.value === focusedOption.value && elem[_this5.props.labelKey] === focusedOption[_this5.props.labelKey];
			});
			if (index > -1) return options[index];
		}

		if (this.props.alwaysFocus) {
			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return options[i];
			}
		}
	},

	selectFocusedOption: function selectFocusedOption() {
		// if (this.props.allowCreate && !this._focusedOption) {
		// 	return this.selectValue(this.state.inputValue);
		// }
		if (this._focusedOption) {
			return this.selectValue(this._focusedOption);
		}
	},

	getLastGroupWithOptions: function getLastGroupWithOptions(options, groups) {
		return _.findLast(groups, function (optgroup) {
			return _.some(options, { groupId: optgroup.id });
		});
	},

	getFirstGroupWithOptions: function getFirstGroupWithOptions(options, groups) {
		return _.find(groups, function (optgroup) {
			return _.some(options, { groupId: optgroup.id });
		});
	},

	getGroupOptions: function getGroupOptions(options, groupId) {
		return _.filter(options, { groupId: groupId });
	},

	filterOptions: function filterOptions(excludeOptions) {
		var _this6 = this;

		var filterValue = this.getInputValue();
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

			var name = option[_this6.props.labelKey].toLowerCase().trim();
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
						if (_this6.props.searchInside && pos != -1 || !_this6.props.searchInside && pos === 0) {
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
					return _this6.areOptionsEqual(excluded, option);
				})) {
					if (_this6.props.noLengthSorting) {
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

	excludeOptions: function excludeOptions(options, excludedOptions) {
		return _.filter(options, function (option) {
			return !_.some(excludedOptions, function (excluded) {
				return excluded.value == option.value;
			});
		});
	},

	areOptionsEqual: function areOptionsEqual(option1, option2) {
		var value1 = !_.isUndefined(option1.value) ? option1.value.toString() : "";
		var value2 = !_.isUndefined(option2.value) ? option2.value.toString() : "";
		return value1 === value2;
	},

	// </editor-fold>

	// <editor-fold desc="Event handlers">
	/**
  * Event handlers
  */

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
			if (!this.getValueArray()[0] || this.getValueArray()[0][this.props.labelKey] != this.getInputValue()) {
				if (!this.props.allowCreate) {
					if (!this.isInputEmpty() && (this.props.selectFocusedOnBlur || this.props.async) && this._focusedOption) {
						this.selectFocusedOption();
					} else if (!this.state.value) {
						this.setValue(this.props.required && this.props.options[0] || null);
						this.clearInput();
					}
				} else {
					var option = { value: this.getInputValue(), label: this.getInputValue() };
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

		// todo zakomentowane zeby nie wysylal sie change jak sie skasuje wszystko z inputa, jak by cos sie wywalalo to odkomentowac
		if (inputValue === "" && !this.isMultiselectAutocomplete()) {
			// this.setValue(null);
			this.setState({
				value: null
			});
		}

		//this.toggleMenu(true);
		this.togglePseudoFocus(false);
		this.setInputValue(inputValue);
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
				// if (!this.isOpen()) {
				// 	this.toggleMenu(true);
				// 	return;
				// }
				// event.stopPropagation();
				// if (!this.isAutocomplete() || (this.isAutocomplete() && (!this.isInputEmpty() || !this.props.async))) {
				if (this.isMultiselect() && this.props.groups && this.props.groups.length && this._focusedGroup) {
					var groupOptions = this.getGroupOptions(this.props.options, this._focusedGroup.id);
					this.onOptgroupClick(this._focusedGroup, groupOptions);
				} else if (!this.isAutocomplete() || this.isAutocomplete() && (!this.isInputEmpty() || this._focusedOption)) {
					event.preventDefault();
					this.selectFocusedOption();
				} else if (!this.isMultiselectAutocomplete()) {
					this.clear();
				}
				break;
			case 27:
				// escape
				if (this.isOpen()) {
					this.closeMenu();
				} else if (this.props.clearable && this.props.escapeClearsValue) {
					this.clearValue(event);
				}
				event.preventDefault();
				break;
			case 38:
				// up
				this.focusPreviousOption();
				event.preventDefault();
				break;
			case 40:
				// down
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
			default:
				return;
		}
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

	onOptgroupClick: function onOptgroupClick(optgroup, groupOptions) {
		if (!this.props.multi) {
			return;
		}

		if (_.every(groupOptions, this.isValueSelected)) {
			this.removeValues(groupOptions);
		} else {
			this.addValues(groupOptions);
		}
	},

	// <editor-fold desc="Event handlers for selected">
	onBodyKeydown: function onBodyKeydown(e) {
		if (e.keyCode === 9) {
			this.onSelectedPopoverHide();
		}
	},

	onSelectedPopoverHide: function onSelectedPopoverHide() {
		this.setState({ showSelected: false });
		document.removeEventListener("keydown", this.onBodyKeydown, false);
	},

	onSelectedBtnClick: function onSelectedBtnClick() {
		this.state.showSelected ? document.removeEventListener("keydown", this.onBodyKeydown, false) : document.addEventListener("keydown", this.onBodyKeydown, false);
		this.setState({ showSelected: !this.state.showSelected });
	},

	onSelectedBtnMouseEnter: function onSelectedBtnMouseEnter() {
		this.setState({ showSelectedTooltip: true });
	},

	onSelectedBtnMouseLeave: function onSelectedBtnMouseLeave() {
		this.setState({ showSelectedTooltip: false });
	},

	onRemoveAllSelectedCLick: function onRemoveAllSelectedCLick() {
		this.setState({ showSelected: false });
		this.removeValues(this.state.value, false);
	},

	onRemoveSelectedClick: function onRemoveSelectedClick(option) {
		if (this.state.value.length === 1) {
			this.setState({ showSelected: false });
		}
		this.removeValue(option, false);
	},

	// </editor-fold>

	// </editor-fold>

	// <editor-fold desc="Renders">

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
		var _this7 = this;

		var className = (0, _classnames2['default'])('Select-input', this.props.inputProps.className);

		var onBlur = function onBlur(event) {
			_this7.props.onInputBlur && _this7.props.onInputBlur(event);
			_this7.handleInputBlur(event);
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
				ref: "input",
				required: this.state.required,
				value: this.getInputValue(),
				autoComplete: "off",
				placeholder: this.props.showInputPlaceholder && this.props.placeholder
			});

			if (this.isMultiselectAutocomplete()) {
				props.placeholder = this.generateMultiselectLabel(options, valueArray);
			}

			return _react2['default'].createElement(
				'div',
				{ className: 'psr' },
				_react2['default'].createElement('input', props),
				this.renderLoading()
			);
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

	renderOptgroups: function renderOptgroups(options, valueArray, groups) {
		var _this8 = this;

		var elems = [];

		elems = elems.concat(_.map(_.filter(options, function (option) {
			return !option.groupId;
		}), function (option) {
			return _this8.renderOption(option, 0, valueArray);
		}));

		groups.forEach(function (optgroup, i) {
			var groupOptions = _this8.getGroupOptions(options, optgroup.id);

			var allSelected = false;
			if (_.every(groupOptions, _this8.isValueSelected)) {
				allSelected = true;
			}

			if (groupOptions.length) {
				var isFocused = _this8._focusedGroup ? _this8._focusedGroup.id === optgroup.id : false;
				var holderClass = (0, _classnames2['default'])("Select-group-holder", {
					"is-selected": allSelected,
					"is-focused": isFocused
				});
				var ref = "group-" + optgroup.id;
				elems = elems.concat(_react2['default'].createElement(
					'div',
					{ className: holderClass, key: 'optgroup-' + i },
					_react2['default'].createElement(
						'div',
						{ className: 'Select-header',
							ref: ref,
							onClick: function () {
								return _this8.onOptgroupClick(optgroup, groupOptions);
							},
							onMouseEnter: function () {
								_this8.focusGroup(optgroup);_this8.setState({ mouseOverGroup: true });
							},
							onMouseLeave: function () {
								return _this8.setState({ mouseOverGroup: false });
							},
							onFocus: function () {
								return _this8.focusGroup(optgroup);
							}
						},
						optgroup.name
					),
					_.map(groupOptions, function (option) {
						return _this8.renderOption(option, i, valueArray);
					})
				));
			}
		});

		return elems;
	},

	renderOption: function renderOption(option, index, valueArray) {
		var _this9 = this;

		var Option = this.props.optionComponent;
		var renderLabel = this.props.optionRenderer || this.getOptionLabel;

		var isSelected = valueArray && _.find(valueArray, function (value) {
			return _this9.areOptionsEqual(value, option);
		}) != null;
		var isFocused = option === this._focusedOption;
		if (isFocused) {
			// console.log("focused option", option, this._focusedOption);
		}
		var optionRef = "option-" + option.value;
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

	renderMenuHeader: function renderMenuHeader(options, valueArray) {
		if (!this.isAutocomplete() || this.props.allowCreate) {
			return null; // header ma sens tylko przy autocomplete (?)
		}

		if (this.props.isLoading || this.props.loadWaiting) {
			return null;
		}

		if (this.isMultiselectAutocomplete()) {
			if (!this.excludeOptions(options, this.state.value).length) {
				return _react2['default'].createElement(
					'div',
					null,
					'Nie znaleziono wyników'
				);
			} else if (this.isInputEmpty()) {
				var word = this.props.showAllValues ? "zawęzić" : "zobaczyć";
				return _react2['default'].createElement(
					'div',
					null,
					'Zacznij pisać aby ' + word + ' wyniki'
				);
			} else if (options && options.length) {
				return _react2['default'].createElement(
					'div',
					null,
					'Znaleziono następujące wyniki'
				);
			} else {
				return _react2['default'].createElement(
					'div',
					null,
					'Nie znaleziono wyników'
				);
			}
		} else if (this.isAutocomplete()) {
			if (this.isInputEmpty() && !this.props.showAllValues) {
				return _react2['default'].createElement(
					'div',
					null,
					'Zacznij pisać aby zobaczyć wyniki'
				);
			} else if (!options || !options.length) {
				return _react2['default'].createElement(
					'div',
					null,
					'Nie znaleziono wyników'
				);
			}
		}
	},

	renderMenuOptions: function renderMenuOptions(options, valueArray, groups) {
		var _this10 = this;

		if (!options || !options.length) {
			return null;
		}

		if (this.props.isLoading || this.props.loadWaiting) {
			return null;
		}

		// if (this.isMultiselectAutocomplete() && this.isInputEmpty() && valueArray.length) { // MULTISELECT AUTOCOMPLETE SELECTED OPTIONS
		// 	return this.renderAutocompleteSelectedOptions(valueArray);
		// } else
		if (options && options.length && (!this.isAutocomplete() || !this.isInputEmpty() || this.isInputEmpty() && this.props.showAllValues)) {
			if (!groups.length) {
				var optionsToRender = this.isMultiselectAutocomplete() ? this.excludeOptions(options, this.state.value) : options;
				return optionsToRender.map(function (option, i) {
					return _this10.renderOption(option, i, valueArray);
				});
			} else {
				return this.renderOptgroups(options, valueArray, groups);
			}
		}

		// this.focusOption(null);
		return null;
	},

	renderHiddenField: function renderHiddenField(valueArray) {
		var _this11 = this;

		if (!this.props.name) return;
		var value = _.map(valueArray, function (i) {
			var x = valueArray.length;
			stringifyValue(i[_this11.props.valueKey]);
		}).join(this.props.delimiter);
		return _react2['default'].createElement('input', { type: 'hidden', ref: 'value', name: this.props.name, value: value, disabled: this.isDiabled() });
	},

	renderDebug: function renderDebug() {
		return _react2['default'].createElement(
			'pre',
			null,
			JSON.stringify(this.state, null, 2)
		);
	},

	renderSelectedOptions: function renderSelectedOptions() {
		var _this12 = this;

		if (!this.isAutocomplete() || !this.state.value || !this.state.value.length) {
			return null;
		}

		return _react2['default'].createElement(
			'div',
			{
				ref: function (ref) {
					_this12.selectedContainerRef = ref;
				},
				className: 'multiselect-selected-value-holder psr',
				onMouseEnter: this.onSelectedBtnMouseEnter,
				onMouseLeave: this.onSelectedBtnMouseLeave },
			_react2['default'].createElement(
				'div',
				{
					className: 'btn btn-primary bdrs-0 multiselect-selected-value',
					ref: function (ref) {
						_this12.selectedBtnRef = ref;
					},
					onClick: this.onSelectedBtnClick },
				this.props.selectedText,
				this.state.value.length
			)
		);
	},

	renderSelectedItems: function renderSelectedItems() {
		var _this13 = this;

		// Option list
		var renderedOptions = _.map(this.state.value, function (option, index) {

			// Option item
			var optionRenderer = undefined;
			if (_this13.props.optionRenderer) {
				optionRenderer = _react2['default'].createElement(
					'div',
					{ className: 'multiselect-selected-item-holder dtc w100' },
					_this13.props.optionRenderer(option)
				);
			} else {
				optionRenderer = _react2['default'].createElement(
					'span',
					{ className: 'multiselect-selected-item-value' },
					option.label
				);
			}

			return _react2['default'].createElement(
				'li',
				{ key: index, className: 'multiselect-selected-item' },
				optionRenderer,
				_react2['default'].createElement('span', {
					className: 'multiselect-selected-remove unselectable',
					onClick: function () {
						return _this13.onRemoveSelectedClick(option);
					} })
			);
		});

		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(
				'div',
				{ className: 'popover-title dt w100' },
				_react2['default'].createElement(
					'h3',
					{ className: 'dtc w100 vab fs16' },
					'Wybrane elementy'
				),
				_react2['default'].createElement(
					'div',
					{ className: 'dtc vab fs14 nowrap' },
					_react2['default'].createElement(
						'a',
						{ className: 'small curp', onClick: this.onRemoveAllSelectedCLick },
						'Wyczyść wszystkie'
					)
				)
			),
			_react2['default'].createElement(
				'ul',
				{ className: 'multiselect-selected-list' },
				renderedOptions
			)
		);
	},

	render: function render() {
		var _this14 = this;

		var valueArray = this.getValueArray();
		var options = this._visibleOptions = this.filterOptions(this.isMultiselectAutocomplete() ? valueArray : null);
		var isOpen = this.isOpen();
		//if (this.isMultiselect() && !options.length && valueArray.length && this.isInputEmpty()) isOpen = false;
		var className = (0, _classnames2['default'])('Select', this.props.className, {
			//'Select--multi': this.props.multi,
			'multiselect': this.isMultiselectStandard(),
			'is-disabled': this.isDiabled(),
			'is-focused': this.isFocused(),
			'is-loading': this.props.isLoading,
			'is-open': isOpen,
			//'is-pseudo-focused': this.state.isPseudoFocused,
			'is-searchable': this.props.searchable,
			'is-searchable-multiselect': this.isMultiselect(),
			'has-value': valueArray.length
		});

		var menuClassName = (0, _classnames2['default'])("Select-menu-outer", _defineProperty({
			"select-up": this.props.menuUp,
			"Select-menu-outer-multiselect": this.isMultiselectStandard() ? true : false
		}, this.props.menuClassName, this.props.menuClassName));

		var style = _.assign({
			width: this.state.width
		}, this.props.menuContainerStyle);

		return _react2['default'].createElement(
			'div',
			{ ref: 'wrapper', className: className, style: this.props.wrapperStyle },
			this.renderHiddenField(valueArray),
			this.props.debug && this.renderDebug(),
			_react2['default'].createElement(
				_reactTether2['default'],
				{
					attachment: 'top left',
					targetAttachment: 'bottom left',
					constraints: [{
						to: "scrollParent",
						attachment: "together"
					}]
				},
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
					this.renderSelectedOptions(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? _react2['default'].createElement(
					'div',
					{ ref: 'menuContainer', className: menuClassName, style: style },
					_react2['default'].createElement(
						'div',
						{ className: 'Select-menu-header' },
						this.renderMenuHeader(options, valueArray)
					),
					_react2['default'].createElement(
						'div',
						{ ref: 'menu', className: 'Select-menu',
							style: this.props.menuStyle,
							onScroll: this.handleMenuScroll,
							onMouseDown: this.handleMouseDownOnMenu },
						this.renderMenuOptions(options, valueArray, this.props.groups)
					)
				) : null
			),
			_react2['default'].createElement(
				_reactOverlays.Overlay,
				{
					rootClose: true,
					show: this.state.showSelected,
					target: function () {
						return _this14.selectedBtnRef;
					},
					onHide: this.onSelectedPopoverHide,
					placement: this.props.popoverPlacement || "left",
					container: this.props.popoverContainer || this.selectedContainerRef },
				_react2['default'].createElement(
					_reactBootstrap.Popover,
					{ id: 'selectedOptionsPopover' },
					this.renderSelectedItems()
				)
			),
			_react2['default'].createElement(
				_reactOverlays.Overlay,
				{
					show: this.state.showSelectedTooltip,
					target: function () {
						return _this14.selectedContainerRef;
					},
					placement: 'top' },
				_react2['default'].createElement(
					_reactBootstrap.Tooltip,
					{ style: { "opacity": 1 }, id: 'tooltip-' + this.props.name },
					'Zobacz wybrane elementy'
				)
			)
		);
	}

	// </editor-fold>

});

exports['default'] = Select;
module.exports = exports['default'];
/*<pre>{JSON.stringify(this.state, null, 2)}</pre>*/