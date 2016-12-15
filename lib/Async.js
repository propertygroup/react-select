'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _utilsStripDiacritics = require('./utils/stripDiacritics');

var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);

var requestId = 0;

function initCache(cache) {
	if (cache && typeof cache !== 'object') {
		cache = {};
	}
	return cache ? cache : null;
}

function updateCache(cache, input, data) {
	if (!cache) return;
	cache[input] = data;
}

function getFromCache(cache, input) {
	if (!cache) return;
	for (var i = input.length; i >= 0; --i) {
		var cacheKey = input.slice(0, i);
		if (cache[cacheKey] && (input === cacheKey || cache[cacheKey].complete)) {
			return cache[cacheKey];
		}
	}
}

function thenPromise(promise, callback) {
	if (!promise || typeof promise.then !== 'function') return;
	return promise.then(function (data) {
		callback(null, data);
	}, function (err) {
		callback(err);
	});
}

var stringOrNode = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]);

var Async = _react2['default'].createClass({
	displayName: 'Async',

	propTypes: {
		cache: _react2['default'].PropTypes.any, // object to use to cache results, can be null to disable cache
		ignoreAccents: _react2['default'].PropTypes.bool, // whether to strip diacritics when filtering (shared with Select)
		ignoreCase: _react2['default'].PropTypes.bool, // whether to perform case-insensitive filtering (shared with Select)
		isLoading: _react2['default'].PropTypes.bool, // overrides the isLoading state when set to true
		loadOptions: _react2['default'].PropTypes.func.isRequired, // function to call to load options asynchronously
		loadingPlaceholder: _react2['default'].PropTypes.string, // replaces the placeholder while options are loading
		minimumInput: _react2['default'].PropTypes.number, // the minimum number of characters that trigger loadOptions
		noResultsText: _react2['default'].PropTypes.string, // placeholder displayed when there are no matching search results (shared with Select)
		placeholder: stringOrNode, // field placeholder, displayed when there's no value (shared with Select)
		searchPromptText: _react2['default'].PropTypes.string, // label to prompt for search input
		searchingText: _react2['default'].PropTypes.string },
	// message to display while options are loading
	getDefaultProps: function getDefaultProps() {
		return {
			cache: true,
			ignoreAccents: true,
			ignoreCase: true,
			loadingPlaceholder: 'Ładowanie...',
			minimumInput: 0,
			limit: 20,
			searchingText: 'Szukanie...',
			searchPromptText: 'Wpisz zby wyszukać'
		};
	},
	getInitialState: function getInitialState() {
		return {
			cache: initCache(this.props.cache),
			isLoading: false,
			options: []
		};
	},
	componentWillMount: function componentWillMount() {
		this._lastInput = '';
	},
	componentDidMount: function componentDidMount() {
		this.shouldLoadOnOpen = true;
		this.queryInput = "";
		// if (this.props.showAllValues) {
		// 	this.loadOptionsWithDebounce('');
		// }
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextState) {
		if (nextProps.cache !== this.props.cache) {
			this.setState({
				cache: initCache(nextProps.cache)
			});
		}

		if (!this.state.isOpen && nextState.isOpen && this.shouldLoadOnOpen) {
			this.loadOptionsWithDebounce(this.queryInput);
		}
	},
	focus: function focus() {
		this.refs.select.focus();
	},
	resetState: function resetState() {
		this._currentRequestId = -1;
		this.setState({
			isLoading: false,
			options: []
		});
	},
	removeValue: function removeValue(value, focus) {
		this.refs.select.removeValue(value, focus);
	},
	removeValues: function removeValues(values, focus) {
		this.refs.select.removeValues(values, focus);
	},
	filterSelected: function filterSelected(options) {
		var _this = this;

		return options;
		if (this.props.multi) {
			return _.filter(options, function (option) {
				return _.every(_this.props.value, function (selected) {
					return selected.value.toString() != option.value.toString();
				});
			});
		}
		return options;
	},
	getResponseHandler: function getResponseHandler(input) {
		var _this2 = this;

		var _requestId = this._currentRequestId = requestId++;
		return function (err, data) {
			if (err) throw err;
			if (!_this2.isMounted()) return;
			updateCache(_this2.state.cache, input, data);
			if (_requestId !== _this2._currentRequestId) return;
			_this2.setState({
				isLoading: false,
				options: data && _this2.filterSelected(data.options) || []
			});
		};
	},
	onInputChange: function onInputChange(input) {
		if (!this.refs["select"].isOpen()) {
			this.shouldLoadOnOpen = true;
			this.queryInput = input;
		} else {
			this.loadOptionsWithDebounce(input);
		}
	},
	onOpen: function onOpen() {
		if (this.shouldLoadOnOpen) {
			this.loadOptionsWithDebounce(this.queryInput);
		}
	},
	// onChange: function(value) {
	// 	this.props.onChange && this.props.onChange(value);
	//
	//
	// },
	shouldLoadOnOpen: false,
	queryInput: "",
	loadTimeout: null,
	// loadWaiting: false,
	loadOptionsWithDebounce: function loadOptionsWithDebounce(input) {
		this.shouldLoadOnOpen = false;
		if (!this.state.loadWaiting) {
			this.setState({ loadWaiting: true });
			this.loadTimeout = setTimeout((function () {
				this.setState({ loadWaiting: false });
				this.loadOptions(input, this.props.limit);
			}).bind(this), 300);
		} else {
			clearTimeout(this.loadTimeout);
			this.loadTimeout = setTimeout((function () {
				this.setState({ loadWaiting: false });
				this.loadOptions(input, this.props.limit);
			}).bind(this), 300);
		}
	},
	loadOptions: function loadOptions(input, limit) {
		if (this.props.ignoreAccents) input = (0, _utilsStripDiacritics2['default'])(input);
		if (this.props.ignoreCase) input = input.toLowerCase();
		this._lastInput = input;
		if (input.length < this.props.minimumInput) {
			return this.resetState();
		}
		var cacheResult = getFromCache(this.state.cache, input);
		if (cacheResult) {
			return this.setState({
				options: this.filterSelected(cacheResult.options)
			});
		}
		this.setState({
			isLoading: true
		});
		var responseHandler = this.getResponseHandler(input);
		return thenPromise(this.props.loadOptions(input, limit), responseHandler);
	},
	render: function render() {
		var noResultsText = this.props.noResultsText;
		var _state = this.state;
		var isLoading = _state.isLoading;
		var options = _state.options;

		if (this.props.isLoading) isLoading = true;
		var placeholder = isLoading ? this.props.loadingPlaceholder : this.props.placeholder;
		if (!options.length) {
			if (this._lastInput.length < this.props.minimumInput) noResultsText = this.props.searchPromptText;
			if (isLoading) noResultsText = this.props.searchingText;
		}
		return _react2['default'].createElement(_Select2['default'], _extends({}, this.props, {
			ref: 'select',
			isLoading: this.state.loadWaiting || isLoading,
			loadWaiting: this.state.loadWaiting,
			filterOptions: false,
			noResultsText: noResultsText,
			onInputChange: this.onInputChange,
			onOpen: this.onOpen,
			options: options,
			placeholder: placeholder
		}));
	}
});

module.exports = Async;