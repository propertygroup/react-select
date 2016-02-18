/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import Contributors from './components/Contributors';
import CustomComponents from './components/CustomComponents';
import CustomRender from './components/CustomRender';
import Multiselect from './components/Multiselect';
import NumericSelect from './components/NumericSelect';
import States from './components/States';


var options = [
	{ label: 'One', value: 1 },
	{ label: 'Two', value: 2 },
	{ label: 'Three', value: 3 },
];
var Container = React.createClass({
	getInitialState () {
		return { value: '' };
	},
	updateValue (value) {
		this.setState({ value: value });
	},
	render () {
		return React.createElement(Select, {
			options: options,
			onChange: this.updateValue,
			value: this.state.value,
		});
	}
});


ReactDOM.render(
	<Container></Container>,
	document.getElementById('example')
);
