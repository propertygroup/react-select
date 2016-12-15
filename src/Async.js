import React from 'react';
import * as _ from "lodash";
import Select from './Select';
import stripDiacritics from './utils/stripDiacritics';

let requestId = 0;

function initCache (cache) {
	if (cache && typeof cache !== 'object') {
		cache = {};
	}
	return cache ? cache : null;
}

function updateCache (cache, input, data) {
	if (!cache) return;
	cache[input] = data;
}

function getFromCache (cache, input) {
	if (!cache) return;
	for (let i = input.length; i >= 0; --i) {
		let cacheKey = input.slice(0, i);
		if (cache[cacheKey] && (input === cacheKey || cache[cacheKey].complete)) {
			return cache[cacheKey];
		}
	}
}

function thenPromise (promise, callback) {
	if (!promise || typeof promise.then !== 'function') return;
	return promise.then((data) => {
		callback(null, data);
	}, (err) => {
		callback(err);
	});
}

const stringOrNode = React.PropTypes.oneOfType([
	React.PropTypes.string,
	React.PropTypes.node
]);

const Async = React.createClass({
	propTypes: {
		cache: React.PropTypes.any,                     // object to use to cache results, can be null to disable cache
		ignoreAccents: React.PropTypes.bool,            // whether to strip diacritics when filtering (shared with Select)
		ignoreCase: React.PropTypes.bool,               // whether to perform case-insensitive filtering (shared with Select)
		isLoading: React.PropTypes.bool,                // overrides the isLoading state when set to true
		loadOptions: React.PropTypes.func.isRequired,   // function to call to load options asynchronously
		loadingPlaceholder: React.PropTypes.string,     // replaces the placeholder while options are loading
		minimumInput: React.PropTypes.number,           // the minimum number of characters that trigger loadOptions
		noResultsText: React.PropTypes.string,          // placeholder displayed when there are no matching search results (shared with Select)
		placeholder: stringOrNode,                      // field placeholder, displayed when there's no value (shared with Select)
		searchPromptText: React.PropTypes.string,       // label to prompt for search input
		searchingText: React.PropTypes.string,          // message to display while options are loading
	},
	getDefaultProps () {
		return {
			cache: true,
			ignoreAccents: true,
			ignoreCase: true,
			loadingPlaceholder: 'Ładowanie...',
			minimumInput: 0,
			limit: 20,
			searchingText: 'Szukanie...',
			searchPromptText: 'Wpisz zby wyszukać',
		};
	},
	getInitialState () {
		return {
			cache: initCache(this.props.cache),
			isLoading: false,
			options: [],
		};
	},
	componentWillMount () {
		this._lastInput = '';
	},
	componentDidMount () {
		this.shouldLoadOnOpen = true;
		this.queryInput = "";
		// if (this.props.showAllValues) {
		// 	this.loadOptionsWithDebounce('');
		// }
	},
	componentWillReceiveProps (nextProps, nextState) {
		if (nextProps.cache !== this.props.cache) {
			this.setState({
				cache: initCache(nextProps.cache),
			});
		}

		if (!this.state.isOpen && nextState.isOpen && this.shouldLoadOnOpen) {
			this.loadOptionsWithDebounce(this.queryInput);
		}
	},
	focus () {
		this.refs.select.focus();
	},
	resetState () {
		this._currentRequestId = -1;
		this.setState({
			isLoading: false,
			options: [],
		});
	},
	removeValue(value, focus) {
		this.refs.select.removeValue(value, focus);
	},
	removeValues(values, focus) {
		this.refs.select.removeValues(values, focus);
	},
	filterSelected(options) {
		return options;
		if (this.props.multi) {
			return _.filter(options, option => {
				return _.every(this.props.value, selected => {
					return selected.value.toString() != option.value.toString();
				});
			});
		}
		return options;
	},
	getResponseHandler (input) {
		let _requestId = this._currentRequestId = requestId++;
		return (err, data) => {
			if (err) throw err;
			if (!this.isMounted()) return;
			updateCache(this.state.cache, input, data);
			if (_requestId !== this._currentRequestId) return;
			this.setState({
				isLoading: false,
				options: data && this.filterSelected(data.options) || []
			});
		};
	},
	onInputChange: function(input) {
		if (!this.refs["select"].isOpen()) {
			this.shouldLoadOnOpen = true;
			this.queryInput = input;
		} else {
			this.loadOptionsWithDebounce(input);
		}
	},
	onOpen: function() {
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
	loadOptionsWithDebounce: function (input) {
		this.shouldLoadOnOpen = false;
		if (!this.state.loadWaiting) {
			this.setState({loadWaiting: true});
			this.loadTimeout = setTimeout(function () {
				this.setState({loadWaiting: false});
				this.loadOptions(input, this.props.limit);
			}.bind(this), 300);
		} else {
			clearTimeout(this.loadTimeout);
			this.loadTimeout = setTimeout(function () {
				this.setState({loadWaiting: false});
				this.loadOptions(input, this.props.limit);
			}.bind(this), 300)
		}
	},
	loadOptions (input, limit) {
		if (this.props.ignoreAccents) input = stripDiacritics(input);
		if (this.props.ignoreCase) input = input.toLowerCase();
		this._lastInput = input;
		if (input.length < this.props.minimumInput) {
			return this.resetState();
		}
		let cacheResult = getFromCache(this.state.cache, input);
		if (cacheResult) {
			return this.setState({
				options: this.filterSelected(cacheResult.options)
			});
		}
		this.setState({
			isLoading: true
		});
		let responseHandler = this.getResponseHandler(input);
		return thenPromise(this.props.loadOptions(input, limit), responseHandler);
	},
	render () {
		let { noResultsText } = this.props;
		let { isLoading, options } = this.state;
		if (this.props.isLoading) isLoading = true;
		let placeholder = isLoading ? this.props.loadingPlaceholder : this.props.placeholder;
		if (!options.length) {
			if (this._lastInput.length < this.props.minimumInput) noResultsText = this.props.searchPromptText;
			if (isLoading) noResultsText = this.props.searchingText;
		}
		return (
			<Select
				{...this.props}
				ref="select"
				isLoading={this.state.loadWaiting || isLoading}
				loadWaiting={this.state.loadWaiting}
				filterOptions={false}
				noResultsText={noResultsText}
				onInputChange={this.onInputChange}
				onOpen={this.onOpen}
				options={options}
				placeholder={placeholder}
				/>
		);
	}
});

module.exports = Async;
