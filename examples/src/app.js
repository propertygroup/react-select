/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import * as _ from "lodash";

import Contributors from './components/Contributors';
import CustomComponents from './components/CustomComponents';
import CustomRender from './components/CustomRender';
import Multiselect from './components/Multiselect';
import NumericSelect from './components/NumericSelect';
import States from './components/States';


var options = [
	{
		"test": "abc", "value": 1,
		"label": "Dolno\u015bl\u0105skie"
	},
	{
		"test": "abc", "value": 31,
		"label": "Kujawsko-pomorskie"
	},
	{
		"test": "abc", "value": 95,
		"label": "\u0141\u00f3dzkie"
	},
	{
		"test": "abc", "value": 55,
		"label": "Lubelskie"
	},
	{
		"test": "abc", "value": 80,
		"label": "Lubuskie"
	},
	{
		"test": "abc", "value": 120,
		"label": "Ma\u0142opolskie"
	},
	{
		"test": "abc", "value": 143,
		"label": "Mazowieckie"
	},
	{
		"test": "abc", "value": 186,
		"label": "Opolskie"
	},
	{
		"test": "abc", "value": 199,
		"label": "Podkarpackie"
	},
	{
		"test": "abc", "value": 225,
		"label": "Podlaskie"
	},
	{
		"test": "abc", "value": 243,
		"label": "Pomorskie"
	},
	{
		"test": "abc", "value": 264,
		"label": "\u015al\u0105skie"
	},
	{
		"test": "abc", "value": 301,
		"label": "\u015awi\u0119tokrzyskie"
	},
	{
		"test": "abc", "value": 316,
		"label": "Warmi\u0144sko-mazurskie"
	},
	{
		"test": "abc", "value": 338,
		"label": "Wielkopolskie"
	},
	{
		"test": "abc", "value": 374,
		"label": "Zachodniopomorskie"
	},
	{
		"test": "abc", "value": 52362,
		"label": "Kujawsko-Pomorskie, Bydgoszcz i okolice"
	},
	{
		"test": "abc", "value": 52261,
		"label": "\u015al\u0105skie, Katowice i okolice"
	},
	{
		"test": "abc", "value": 52258,
		"label": "Ma\u0142opolskie, Krak\u00f3w i okolice"
	},
	{
		"test": "abc", "value": 52259,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a i okolice"
	},
	{
		"test": "abc", "value": 52366,
		"label": "Lubelskie, Lublin i okolice"
	},
	{
		"test": "abc", "value": 52363,
		"label": "Kujawsko-Pomorskie, okolice Bydgoszczy"
	},
	{
		"test": "abc", "value": 52269,
		"label": "\u015al\u0105skie, okolice Katowic"
	},
	{
		"test": "abc", "value": 52265,
		"label": "Ma\u0142opolskie, okolice Krakowa"
	},
	{
		"test": "abc", "value": 52267,
		"label": "\u0141\u00f3dzkie, okolice \u0141odzi"
	},
	{
		"test": "abc", "value": 52367,
		"label": "Lubelskie, okolice Lublina"
	},
	{
		"test": "abc", "value": 52365,
		"label": "Warmi\u0144sko-Mazurskie, okolice Olsztyna"
	},
	{
		"test": "abc", "value": 52263,
		"label": "Wielkopolskie, okolice Poznania"
	},
	{
		"test": "abc", "value": 52268,
		"label": "Zachodniopomorskie, okolice Szczecina"
	},
	{
		"test": "abc", "value": 52264,
		"label": "Pomorskie, okolice Tr\u00f3jmiasta"
	},
	{
		"test": "abc", "value": 52262,
		"label": "Mazowieckie, okolice Warszawy"
	},
	{
		"test": "abc", "value": 52266,
		"label": "Dolno\u015bl\u0105skie, okolice Wroc\u0142awia"
	},
	{
		"test": "abc", "value": 52364,
		"label": "Warmi\u0144sko-Mazurskie, Olsztyn i okolice"
	},
	{
		"test": "abc", "value": 52254,
		"label": "Wielkopolskie, Pozna\u0144 i okolice"
	},
	{
		"test": "abc", "value": 52260,
		"label": "Zachodniopomorskie, Szczecin i okolice"
	},
	{
		"test": "abc", "value": 52255,
		"label": "Pomorskie, Tr\u00f3jmiasto"
	},
	{
		"test": "abc", "value": 52256,
		"label": "Pomorskie, Tr\u00f3jmiasto i okolice"
	},
	{
		"test": "abc", "value": 52253,
		"label": "Mazowieckie, Warszawa i okolice"
	},
	{
		"test": "abc", "value": 52257,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw i okolice"
	},
	{
		"test": "abc", "value": 52380,
		"label": "Kujawsko-Pomorskie, Aleksandrowski"
	},
	{
		"test": "abc", "value": 52412,
		"label": "Podlaskie, Augustowski"
	},
	{
		"test": "abc", "value": 265,
		"label": "\u015al\u0105skie, B\u0119dzi\u0144ski"
	},
	{
		"test": "abc", "value": 96,
		"label": "\u0141\u00f3dzkie, Be\u0142chatowski"
	},
	{
		"test": "abc", "value": 144,
		"label": "Mazowieckie, Bia\u0142obrzeski"
	},
	{
		"test": "abc", "value": 227,
		"label": "Podlaskie, Bia\u0142ostocki"
	},
	{
		"test": "abc", "value": 266,
		"label": "\u015al\u0105skie, Bielski"
	},
	{
		"test": "abc", "value": 228,
		"label": "Podlaskie, Bielski"
	},
	{
		"test": "abc", "value": 57,
		"label": "Lubelskie, Bi\u0142gorajski"
	},
	{
		"test": "abc", "value": 121,
		"label": "Ma\u0142opolskie, Boche\u0144ski"
	},
	{
		"test": "abc", "value": 52423,
		"label": "Dolno\u015bl\u0105skie, Boles\u0142awiecki"
	},
	{
		"test": "abc", "value": 33,
		"label": "Kujawsko-Pomorskie, Brodnicki"
	},
	{
		"test": "abc", "value": 187,
		"label": "Opolskie, Brzeski"
	},
	{
		"test": "abc", "value": 122,
		"label": "Ma\u0142opolskie, Brzeski"
	},
	{
		"test": "abc", "value": 116,
		"label": "\u0141\u00f3dzkie, Brzezi\u0144ski"
	},
	{
		"test": "abc", "value": 52589,
		"label": "\u015awi\u0119tokrzyskie, Buski"
	},
	{
		"test": "abc", "value": 34,
		"label": "Kujawsko-Pomorskie, Bydgoski"
	},
	{
		"test": "abc", "value": 244,
		"label": "Pomorskie, Bytowski"
	},
	{
		"test": "abc", "value": 52332,
		"label": "Kujawsko-Pomorskie, Che\u0142mi\u0144ski"
	},
	{
		"test": "abc", "value": 52292,
		"label": "Lubelskie, Che\u0142mski"
	},
	{
		"test": "abc", "value": 245,
		"label": "Pomorskie, Chojnicki"
	},
	{
		"test": "abc", "value": 123,
		"label": "Ma\u0142opolskie, Chrzanowski"
	},
	{
		"test": "abc", "value": 145,
		"label": "Mazowieckie, Ciechanowski"
	},
	{
		"test": "abc", "value": 267,
		"label": "\u015al\u0105skie, Cieszy\u0144ski"
	},
	{
		"test": "abc", "value": 340,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki"
	},
	{
		"test": "abc", "value": 52535,
		"label": "\u015al\u0105skie, Cz\u0119stochowski"
	},
	{
		"test": "abc", "value": 319,
		"label": "Warmi\u0144sko-Mazurskie, Dzia\u0142dowski"
	},
	{
		"test": "abc", "value": 52278,
		"label": "Dolno\u015bl\u0105skie, Dzier\u017coniowski"
	},
	{
		"test": "abc", "value": 321,
		"label": "Warmi\u0144sko-Mazurskie, E\u0142cki"
	},
	{
		"test": "abc", "value": 146,
		"label": "Mazowieckie, Garwoli\u0144ski"
	},
	{
		"test": "abc", "value": 247,
		"label": "Pomorskie, Gda\u0144ski"
	},
	{
		"test": "abc", "value": 322,
		"label": "Warmi\u0144sko-Mazurskie, Gi\u017cycki"
	},
	{
		"test": "abc", "value": 269,
		"label": "\u015al\u0105skie, Gliwicki"
	},
	{
		"test": "abc", "value": 4,
		"label": "Dolno\u015bl\u0105skie, G\u0142ogowski"
	},
	{
		"test": "abc", "value": 341,
		"label": "Wielkopolskie, Gnie\u017anie\u0144ski"
	},
	{
		"test": "abc", "value": 334,
		"label": "Warmi\u0144sko-Mazurskie, Go\u0142dapski"
	},
	{
		"test": "abc", "value": 378,
		"label": "Zachodniopomorskie, Goleniowski"
	},
	{
		"test": "abc", "value": 36,
		"label": "Kujawsko-Pomorskie, Golubsko-Dobrzy\u0144ski"
	},
	{
		"test": "abc", "value": 52471,
		"label": "Lubuskie, Gorzowski"
	},
	{
		"test": "abc", "value": 52386,
		"label": "Mazowieckie, Gostyni\u0144ski"
	},
	{
		"test": "abc", "value": 342,
		"label": "Wielkopolskie, Gosty\u0144ski"
	},
	{
		"test": "abc", "value": 148,
		"label": "Mazowieckie, Grodziski"
	},
	{
		"test": "abc", "value": 343,
		"label": "Wielkopolskie, Grodziski"
	},
	{
		"test": "abc", "value": 149,
		"label": "Mazowieckie, Gr\u00f3jecki"
	},
	{
		"test": "abc", "value": 379,
		"label": "Zachodniopomorskie, Gryficki"
	},
	{
		"test": "abc", "value": 380,
		"label": "Zachodniopomorskie, Gryfi\u0144ski"
	},
	{
		"test": "abc", "value": 230,
		"label": "Podlaskie, Hajnowski"
	},
	{
		"test": "abc", "value": 323,
		"label": "Warmi\u0144sko-Mazurskie, I\u0142awski"
	},
	{
		"test": "abc", "value": 38,
		"label": "Kujawsko-Pomorskie, Inowroc\u0142awski"
	},
	{
		"test": "abc", "value": 52403,
		"label": "Lubelskie, Janowski"
	},
	{
		"test": "abc", "value": 344,
		"label": "Wielkopolskie, Jaroci\u0144ski"
	},
	{
		"test": "abc", "value": 203,
		"label": "Podkarpackie, Jaros\u0142awski"
	},
	{
		"test": "abc", "value": 52283,
		"label": "Podkarpackie, Jasielski"
	},
	{
		"test": "abc", "value": 6,
		"label": "Dolno\u015bl\u0105skie, Jaworski"
	},
	{
		"test": "abc", "value": 7,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski"
	},
	{
		"test": "abc", "value": 345,
		"label": "Wielkopolskie, Kaliski"
	},
	{
		"test": "abc", "value": 381,
		"label": "Zachodniopomorskie, Kamie\u0144ski"
	},
	{
		"test": "abc", "value": 248,
		"label": "Pomorskie, Kartuski"
	},
	{
		"test": "abc", "value": 52519,
		"label": "Warmi\u0144sko-Mazurskie, K\u0119trzy\u0144ski"
	},
	{
		"test": "abc", "value": 305,
		"label": "\u015awi\u0119tokrzyskie, Kielecki"
	},
	{
		"test": "abc", "value": 52541,
		"label": "\u015al\u0105skie, K\u0142obucki"
	},
	{
		"test": "abc", "value": 9,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki"
	},
	{
		"test": "abc", "value": 382,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski"
	},
	{
		"test": "abc", "value": 349,
		"label": "Wielkopolskie, Ko\u015bcia\u0144ski"
	},
	{
		"test": "abc", "value": 249,
		"label": "Pomorskie, Ko\u015bcierski"
	},
	{
		"test": "abc", "value": 383,
		"label": "Zachodniopomorskie, Koszali\u0144ski"
	},
	{
		"test": "abc", "value": 150,
		"label": "Mazowieckie, Kozienicki"
	},
	{
		"test": "abc", "value": 126,
		"label": "Ma\u0142opolskie, Krakowski"
	},
	{
		"test": "abc", "value": 191,
		"label": "Opolskie, Krapkowicki"
	},
	{
		"test": "abc", "value": 52333,
		"label": "Lubelskie, Kra\u015bnicki"
	},
	{
		"test": "abc", "value": 52473,
		"label": "Wielkopolskie, Krotoszy\u0144ski"
	},
	{
		"test": "abc", "value": 97,
		"label": "\u0141\u00f3dzkie, Kutnowski"
	},
	{
		"test": "abc", "value": 98,
		"label": "\u0141\u00f3dzkie, \u0141aski"
	},
	{
		"test": "abc", "value": 251,
		"label": "Pomorskie, L\u0119borski"
	},
	{
		"test": "abc", "value": 52458,
		"label": "Lubelskie, \u0141\u0119czy\u0144ski"
	},
	{
		"test": "abc", "value": 151,
		"label": "Mazowieckie, Legionowski"
	},
	{
		"test": "abc", "value": 52276,
		"label": "Dolno\u015bl\u0105skie, Legnicki"
	},
	{
		"test": "abc", "value": 220,
		"label": "Podkarpackie, Leski"
	},
	{
		"test": "abc", "value": 351,
		"label": "Wielkopolskie, Leszczy\u0144ski"
	},
	{
		"test": "abc", "value": 52309,
		"label": "Warmi\u0144sko-Mazurskie, Lidzbarski"
	},
	{
		"test": "abc", "value": 392,
		"label": "Zachodniopomorskie, \u0141obeski"
	},
	{
		"test": "abc", "value": 101,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni"
	},
	{
		"test": "abc", "value": 11,
		"label": "Dolno\u015bl\u0105skie, Luba\u0144ski"
	},
	{
		"test": "abc", "value": 52469,
		"label": "Lubelskie, Lubartowski"
	},
	{
		"test": "abc", "value": 64,
		"label": "Lubelskie, Lubelski"
	},
	{
		"test": "abc", "value": 12,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski"
	},
	{
		"test": "abc", "value": 66,
		"label": "Lubelskie, \u0141ukowski"
	},
	{
		"test": "abc", "value": 13,
		"label": "Dolno\u015bl\u0105skie, Lw\u00f3wecki"
	},
	{
		"test": "abc", "value": 52539,
		"label": "Mazowieckie, Makowski"
	},
	{
		"test": "abc", "value": 252,
		"label": "Pomorskie, Malborski"
	},
	{
		"test": "abc", "value": 128,
		"label": "Ma\u0142opolskie, Miechowski"
	},
	{
		"test": "abc", "value": 352,
		"label": "Wielkopolskie, Mi\u0119dzychodzki"
	},
	{
		"test": "abc", "value": 210,
		"label": "Podkarpackie, Mielecki"
	},
	{
		"test": "abc", "value": 272,
		"label": "\u015al\u0105skie, Miko\u0142owski"
	},
	{
		"test": "abc", "value": 155,
		"label": "Mazowieckie, Mi\u0144ski"
	},
	{
		"test": "abc", "value": 156,
		"label": "Mazowieckie, M\u0142awski"
	},
	{
		"test": "abc", "value": 326,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski"
	},
	{
		"test": "abc", "value": 129,
		"label": "Ma\u0142opolskie, My\u015blenicki"
	},
	{
		"test": "abc", "value": 384,
		"label": "Zachodniopomorskie, My\u015bliborski"
	},
	{
		"test": "abc", "value": 52550,
		"label": "\u015al\u0105skie, Myszkowski"
	},
	{
		"test": "abc", "value": 41,
		"label": "Kujawsko-Pomorskie, Nakielski"
	},
	{
		"test": "abc", "value": 192,
		"label": "Opolskie, Namys\u0142owski"
	},
	{
		"test": "abc", "value": 52406,
		"label": "Warmi\u0144sko-Mazurskie, Nidzicki"
	},
	{
		"test": "abc", "value": 157,
		"label": "Mazowieckie, Nowodworski"
	},
	{
		"test": "abc", "value": 253,
		"label": "Pomorskie, Nowodworski"
	},
	{
		"test": "abc", "value": 130,
		"label": "Ma\u0142opolskie, Nowos\u0105decki"
	},
	{
		"test": "abc", "value": 84,
		"label": "Lubuskie, Nowosolski"
	},
	{
		"test": "abc", "value": 131,
		"label": "Ma\u0142opolskie, Nowotarski"
	},
	{
		"test": "abc", "value": 353,
		"label": "Wielkopolskie, Nowotomyski"
	},
	{
		"test": "abc", "value": 52454,
		"label": "Opolskie, Nyski"
	},
	{
		"test": "abc", "value": 354,
		"label": "Wielkopolskie, Obornicki"
	},
	{
		"test": "abc", "value": 16,
		"label": "Dolno\u015bl\u0105skie, O\u0142awski"
	},
	{
		"test": "abc", "value": 329,
		"label": "Warmi\u0144sko-Mazurskie, Olecki"
	},
	{
		"test": "abc", "value": 15,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki"
	},
	{
		"test": "abc", "value": 132,
		"label": "Ma\u0142opolskie, Olkuski"
	},
	{
		"test": "abc", "value": 330,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski"
	},
	{
		"test": "abc", "value": 307,
		"label": "\u015awi\u0119tokrzyskie, Opatowski"
	},
	{
		"test": "abc", "value": 67,
		"label": "Lubelskie, Opolski"
	},
	{
		"test": "abc", "value": 195,
		"label": "Opolskie, Opolski"
	},
	{
		"test": "abc", "value": 331,
		"label": "Warmi\u0144sko-Mazurskie, Ostr\u00f3dzki"
	},
	{
		"test": "abc", "value": 52529,
		"label": "Mazowieckie, Ostro\u0142\u0119cki"
	},
	{
		"test": "abc", "value": 308,
		"label": "\u015awi\u0119tokrzyskie, Ostrowiecki"
	},
	{
		"test": "abc", "value": 355,
		"label": "Wielkopolskie, Ostrowski"
	},
	{
		"test": "abc", "value": 52306,
		"label": "Wielkopolskie, Ostrzeszowski"
	},
	{
		"test": "abc", "value": 133,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski"
	},
	{
		"test": "abc", "value": 160,
		"label": "Mazowieckie, Otwocki"
	},
	{
		"test": "abc", "value": 103,
		"label": "\u0141\u00f3dzkie, Pabianicki"
	},
	{
		"test": "abc", "value": 161,
		"label": "Mazowieckie, Piaseczy\u0144ski"
	},
	{
		"test": "abc", "value": 357,
		"label": "Wielkopolskie, Pilski"
	},
	{
		"test": "abc", "value": 332,
		"label": "Warmi\u0144sko-Mazurskie, Piski"
	},
	{
		"test": "abc", "value": 358,
		"label": "Wielkopolskie, Pleszewski"
	},
	{
		"test": "abc", "value": 162,
		"label": "Mazowieckie, P\u0142ocki"
	},
	{
		"test": "abc", "value": 163,
		"label": "Mazowieckie, P\u0142o\u0144ski"
	},
	{
		"test": "abc", "value": 385,
		"label": "Zachodniopomorskie, Policki"
	},
	{
		"test": "abc", "value": 17,
		"label": "Dolno\u015bl\u0105skie, Polkowicki"
	},
	{
		"test": "abc", "value": 359,
		"label": "Wielkopolskie, Pozna\u0144ski"
	},
	{
		"test": "abc", "value": 134,
		"label": "Ma\u0142opolskie, Proszowicki"
	},
	{
		"test": "abc", "value": 164,
		"label": "Mazowieckie, Pruszkowski"
	},
	{
		"test": "abc", "value": 165,
		"label": "Mazowieckie, Przasnyski"
	},
	{
		"test": "abc", "value": 213,
		"label": "Podkarpackie, Przeworski"
	},
	{
		"test": "abc", "value": 274,
		"label": "\u015al\u0105skie, Pszczy\u0144ski"
	},
	{
		"test": "abc", "value": 254,
		"label": "Pomorskie, Pucki"
	},
	{
		"test": "abc", "value": 69,
		"label": "Lubelskie, Pu\u0142awski"
	},
	{
		"test": "abc", "value": 167,
		"label": "Mazowieckie, Pu\u0142tuski"
	},
	{
		"test": "abc", "value": 386,
		"label": "Zachodniopomorskie, Pyrzycki"
	},
	{
		"test": "abc", "value": 275,
		"label": "\u015al\u0105skie, Raciborski"
	},
	{
		"test": "abc", "value": 168,
		"label": "Mazowieckie, Radomski"
	},
	{
		"test": "abc", "value": 107,
		"label": "\u0141\u00f3dzkie, Radomszcza\u0144ski"
	},
	{
		"test": "abc", "value": 52515,
		"label": "Lubelskie, Radzy\u0144ski"
	},
	{
		"test": "abc", "value": 360,
		"label": "Wielkopolskie, Rawicki"
	},
	{
		"test": "abc", "value": 108,
		"label": "\u0141\u00f3dzkie, Rawski"
	},
	{
		"test": "abc", "value": 215,
		"label": "Podkarpackie, Rzeszowski"
	},
	{
		"test": "abc", "value": 216,
		"label": "Podkarpackie, Sanocki"
	},
	{
		"test": "abc", "value": 44,
		"label": "Kujawsko-Pomorskie, S\u0119pole\u0144ski"
	},
	{
		"test": "abc", "value": 52248,
		"label": "Mazowieckie, Siedlecki"
	},
	{
		"test": "abc", "value": 52521,
		"label": "\u0141\u00f3dzkie, Sieradzki"
	},
	{
		"test": "abc", "value": 311,
		"label": "\u015awi\u0119tokrzyskie, Skar\u017cyski"
	},
	{
		"test": "abc", "value": 110,
		"label": "\u0141\u00f3dzkie, Skierniewicki"
	},
	{
		"test": "abc", "value": 387,
		"label": "Zachodniopomorskie, S\u0142awie\u0144ski"
	},
	{
		"test": "abc", "value": 52215,
		"label": "Lubuskie, S\u0142ubicki"
	},
	{
		"test": "abc", "value": 361,
		"label": "Wielkopolskie, S\u0142upecki"
	},
	{
		"test": "abc", "value": 255,
		"label": "Pomorskie, S\u0142upski"
	},
	{
		"test": "abc", "value": 171,
		"label": "Mazowieckie, Sochaczewski"
	},
	{
		"test": "abc", "value": 52527,
		"label": "Mazowieckie, Soko\u0142owski"
	},
	{
		"test": "abc", "value": 363,
		"label": "Wielkopolskie, \u015aredzki"
	},
	{
		"test": "abc", "value": 19,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki"
	},
	{
		"test": "abc", "value": 364,
		"label": "Wielkopolskie, \u015aremski"
	},
	{
		"test": "abc", "value": 217,
		"label": "Podkarpackie, Stalowowolski"
	},
	{
		"test": "abc", "value": 312,
		"label": "\u015awi\u0119tokrzyskie, Starachowicki"
	},
	{
		"test": "abc", "value": 388,
		"label": "Zachodniopomorskie, Stargardzki"
	},
	{
		"test": "abc", "value": 256,
		"label": "Pomorskie, Starogardzki"
	},
	{
		"test": "abc", "value": 197,
		"label": "Opolskie, Strzelecki"
	},
	{
		"test": "abc", "value": 52523,
		"label": "Lubuskie, Strzelecko-Drezdenecki"
	},
	{
		"test": "abc", "value": 18,
		"label": "Dolno\u015bl\u0105skie, Strzeli\u0144ski"
	},
	{
		"test": "abc", "value": 218,
		"label": "Podkarpackie, Strzy\u017cowski"
	},
	{
		"test": "abc", "value": 52446,
		"label": "Lubuskie, Sul\u0119ci\u0144ski"
	},
	{
		"test": "abc", "value": 135,
		"label": "Ma\u0142opolskie, Suski"
	},
	{
		"test": "abc", "value": 72,
		"label": "Lubelskie, \u015awidnicki"
	},
	{
		"test": "abc", "value": 20,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki"
	},
	{
		"test": "abc", "value": 52285,
		"label": "Zachodniopomorskie, \u015awidwi\u0144ski"
	},
	{
		"test": "abc", "value": 362,
		"label": "Wielkopolskie, Szamotulski"
	},
	{
		"test": "abc", "value": 389,
		"label": "Zachodniopomorskie, Szczecinecki"
	},
	{
		"test": "abc", "value": 333,
		"label": "Warmi\u0144sko-Mazurskie, Szczycie\u0144ski"
	},
	{
		"test": "abc", "value": 52505,
		"label": "Mazowieckie, Szyd\u0142owiecki"
	},
	{
		"test": "abc", "value": 277,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski"
	},
	{
		"test": "abc", "value": 136,
		"label": "Ma\u0142opolskie, Tarnowski"
	},
	{
		"test": "abc", "value": 137,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski"
	},
	{
		"test": "abc", "value": 257,
		"label": "Pomorskie, Tczewski"
	},
	{
		"test": "abc", "value": 111,
		"label": "\u0141\u00f3dzkie, Tomaszowski"
	},
	{
		"test": "abc", "value": 73,
		"label": "Lubelskie, Tomaszowski"
	},
	{
		"test": "abc", "value": 46,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski"
	},
	{
		"test": "abc", "value": 21,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki"
	},
	{
		"test": "abc", "value": 52343,
		"label": "Ma\u0142opolskie, Wadowicki"
	},
	{
		"test": "abc", "value": 52370,
		"label": "Wielkopolskie, W\u0105growiecki"
	},
	{
		"test": "abc", "value": 22,
		"label": "Dolno\u015bl\u0105skie, Wa\u0142brzyski"
	},
	{
		"test": "abc", "value": 174,
		"label": "Mazowieckie, Warszawski Zachodni"
	},
	{
		"test": "abc", "value": 335,
		"label": "Warmi\u0144sko-Mazurskie, W\u0119gorzewski"
	},
	{
		"test": "abc", "value": 175,
		"label": "Mazowieckie, W\u0119growski"
	},
	{
		"test": "abc", "value": 258,
		"label": "Pomorskie, Wejherowski"
	},
	{
		"test": "abc", "value": 139,
		"label": "Ma\u0142opolskie, Wielicki"
	},
	{
		"test": "abc", "value": 52320,
		"label": "\u0141\u00f3dzkie, Wieruszowski"
	},
	{
		"test": "abc", "value": 49,
		"label": "Kujawsko-Pomorskie, W\u0142oc\u0142awski"
	},
	{
		"test": "abc", "value": 74,
		"label": "Lubelskie, W\u0142odawski"
	},
	{
		"test": "abc", "value": 176,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski"
	},
	{
		"test": "abc", "value": 23,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski"
	},
	{
		"test": "abc", "value": 367,
		"label": "Wielkopolskie, Wolszty\u0144ski"
	},
	{
		"test": "abc", "value": 24,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski"
	},
	{
		"test": "abc", "value": 368,
		"label": "Wielkopolskie, Wrzesi\u0144ski"
	},
	{
		"test": "abc", "value": 52436,
		"label": "Lubuskie, Wschowski"
	},
	{
		"test": "abc", "value": 177,
		"label": "Mazowieckie, Wyszkowski"
	},
	{
		"test": "abc", "value": 52450,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki"
	},
	{
		"test": "abc", "value": 52334,
		"label": "Lubuskie, \u017baga\u0144ski"
	},
	{
		"test": "abc", "value": 75,
		"label": "Lubelskie, Zamojski"
	},
	{
		"test": "abc", "value": 91,
		"label": "Lubuskie, \u017barski"
	},
	{
		"test": "abc", "value": 280,
		"label": "\u015al\u0105skie, Zawiercia\u0144ski"
	},
	{
		"test": "abc", "value": 115,
		"label": "\u0141\u00f3dzkie, Zgierski"
	},
	{
		"test": "abc", "value": 26,
		"label": "Dolno\u015bl\u0105skie, Zgorzelecki"
	},
	{
		"test": "abc", "value": 89,
		"label": "Lubuskie, Zielonog\u00f3rski"
	},
	{
		"test": "abc", "value": 369,
		"label": "Wielkopolskie, Z\u0142otowski"
	},
	{
		"test": "abc", "value": 178,
		"label": "Mazowieckie, Zwole\u0144ski"
	},
	{
		"test": "abc", "value": 180,
		"label": "Mazowieckie, \u017byrardowski"
	},
	{
		"test": "abc", "value": 52511,
		"label": "Kujawsko-Pomorskie, Aleksandrowski, Aleksandr\u00f3w Kujawski"
	},
	{
		"test": "abc", "value": 14762,
		"label": "\u0141\u00f3dzkie, Zgierski, Aleksandr\u00f3w \u0141\u00f3dzki"
	},
	{
		"test": "abc", "value": 52461,
		"label": "Ma\u0142opolskie, Chrzanowski, Alwernia"
	},
	{
		"test": "abc", "value": 52344,
		"label": "Ma\u0142opolskie, Wadowicki, Andrych\u00f3w"
	},
	{
		"test": "abc", "value": 52413,
		"label": "Podlaskie, Augustowski, August\u00f3w"
	},
	{
		"test": "abc", "value": 52756,
		"label": "Kujawsko-pomorskie, Barcin"
	},
	{
		"test": "abc", "value": 52272,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Barczewo"
	},
	{
		"test": "abc", "value": 13435,
		"label": "Zachodniopomorskie, My\u015bliborski, Barlinek"
	},
	{
		"test": "abc", "value": 15056,
		"label": "\u015al\u0105skie, B\u0119dzi\u0144ski, B\u0119dzin"
	},
	{
		"test": "abc", "value": 8510,
		"label": "\u0141\u00f3dzkie, Be\u0142chatowski, Be\u0142chat\u00f3w"
	},
	{
		"test": "abc", "value": 24220,
		"label": "Lubelskie, Bia\u0142a Podlaska"
	},
	{
		"test": "abc", "value": 26641,
		"label": "Mazowieckie, Bia\u0142obrzeski, Bia\u0142obrzegi"
	},
	{
		"test": "abc", "value": 9692,
		"label": "Podlaskie, Bia\u0142ystok"
	},
	{
		"test": "abc", "value": 52279,
		"label": "Dolno\u015bl\u0105skie, Dzier\u017coniowski, Bielawa"
	},
	{
		"test": "abc", "value": 13414,
		"label": "\u015al\u0105skie, Bielsko-Bia\u0142a"
	},
	{
		"test": "abc", "value": 3739,
		"label": "Podlaskie, Bielski, Bielsk Podlaski"
	},
	{
		"test": "abc", "value": 33494,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Bierut\u00f3w"
	},
	{
		"test": "abc", "value": 52545,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Biskupiec"
	},
	{
		"test": "abc", "value": 2396,
		"label": "Mazowieckie, Warszawski Zachodni, B\u0142onie"
	},
	{
		"test": "abc", "value": 36034,
		"label": "Ma\u0142opolskie, Boche\u0144ski, Bochnia"
	},
	{
		"test": "abc", "value": 52424,
		"label": "Dolno\u015bl\u0105skie, Boles\u0142awiecki, Boles\u0142awiec"
	},
	{
		"test": "abc", "value": 22811,
		"label": "Dolno\u015bl\u0105skie, Jaworski, Bolk\u00f3w"
	},
	{
		"test": "abc", "value": 34065,
		"label": "Zachodniopomorskie, Szczecinecki, Borne Sulinowo"
	},
	{
		"test": "abc", "value": 21231,
		"label": "Kujawsko-Pomorskie, Brodnicki, Brodnica"
	},
	{
		"test": "abc", "value": 37359,
		"label": "Mazowieckie, Pruszkowski, Brwin\u00f3w"
	},
	{
		"test": "abc", "value": 10425,
		"label": "Opolskie, Brzeski, Brzeg"
	},
	{
		"test": "abc", "value": 35561,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski, Brzeg Dolny"
	},
	{
		"test": "abc", "value": 39392,
		"label": "Ma\u0142opolskie, Brzeski, Brzesko"
	},
	{
		"test": "abc", "value": 32853,
		"label": "\u0141\u00f3dzkie, Brzezi\u0144ski, Brzeziny"
	},
	{
		"test": "abc", "value": 52590,
		"label": "\u015awi\u0119tokrzyskie, Buski, Busko-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 22550,
		"label": "Kujawsko-Pomorskie, Bydgoszcz"
	},
	{
		"test": "abc", "value": 34871,
		"label": "\u015al\u0105skie, Bytom"
	},
	{
		"test": "abc", "value": 12539,
		"label": "Pomorskie, Bytowski, Byt\u00f3w"
	},
	{
		"test": "abc", "value": 52293,
		"label": "Lubelskie, Che\u0142mski, Che\u0142m"
	},
	{
		"test": "abc", "value": 52219,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski, Che\u0142mek"
	},
	{
		"test": "abc", "value": 52238,
		"label": "Kujawsko-Pomorskie, Che\u0142mi\u0144ski, Che\u0142mno"
	},
	{
		"test": "abc", "value": 46761,
		"label": "Pomorskie, Chojnicki, Chojnice"
	},
	{
		"test": "abc", "value": 19219,
		"label": "\u015al\u0105skie, Chorz\u00f3w"
	},
	{
		"test": "abc", "value": 52251,
		"label": "Ma\u0142opolskie, Chrzanowski, Chrzan\u00f3w"
	},
	{
		"test": "abc", "value": 6296,
		"label": "Mazowieckie, Ciechanowski, Ciechan\u00f3w"
	},
	{
		"test": "abc", "value": 52381,
		"label": "Kujawsko-Pomorskie, Aleksandrowski, Ciechocinek"
	},
	{
		"test": "abc", "value": 16000,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Cieszyn"
	},
	{
		"test": "abc", "value": 52441,
		"label": "Podlaskie, Bia\u0142ostocki, Czarna Bia\u0142ostocka"
	},
	{
		"test": "abc", "value": 52410,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki, Czarnk\u00f3w"
	},
	{
		"test": "abc", "value": 52513,
		"label": "\u015al\u0105skie, Bielski, Czechowice-Dziedzice"
	},
	{
		"test": "abc", "value": 30668,
		"label": "\u015al\u0105skie, Cz\u0119stochowa"
	},
	{
		"test": "abc", "value": 16293,
		"label": "\u015al\u0105skie, D\u0105browa G\u00f3rnicza"
	},
	{
		"test": "abc", "value": 35342,
		"label": "Zachodniopomorskie, S\u0142awie\u0144ski, Dar\u0142owo"
	},
	{
		"test": "abc", "value": 52524,
		"label": "Lubuskie, Strzelecko-Drezdenecki, Drezdenko"
	},
	{
		"test": "abc", "value": 24294,
		"label": "Warmi\u0144sko-Mazurskie, Dzia\u0142dowski, Dzia\u0142dowo"
	},
	{
		"test": "abc", "value": 22546,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Dziwn\u00f3w"
	},
	{
		"test": "abc", "value": 25289,
		"label": "Warmi\u0144sko-mazurskie, Elbl\u0105g"
	},
	{
		"test": "abc", "value": 51050,
		"label": "Warmi\u0144sko-mazurskie, E\u0142cki, E\u0142k"
	},
	{
		"test": "abc", "value": 50491,
		"label": "Mazowieckie, Garwoli\u0144ski, Garwolin"
	},
	{
		"test": "abc", "value": 46083,
		"label": "Pomorskie, Gda\u0144sk"
	},
	{
		"test": "abc", "value": 6196,
		"label": "Pomorskie, Gdynia"
	},
	{
		"test": "abc", "value": 11016,
		"label": "Warmi\u0144sko-mazurskie, Gi\u017cycki, Gi\u017cycko"
	},
	{
		"test": "abc", "value": 31825,
		"label": "\u015al\u0105skie, Gliwice"
	},
	{
		"test": "abc", "value": 11592,
		"label": "Dolno\u015bl\u0105skie, G\u0142ogowski, G\u0142og\u00f3w"
	},
	{
		"test": "abc", "value": 20423,
		"label": "Podkarpackie, Rzeszowski, G\u0142og\u00f3w Ma\u0142opolski"
	},
	{
		"test": "abc", "value": 28203,
		"label": "Wielkopolskie, Gnie\u017anie\u0144ski, Gniezno"
	},
	{
		"test": "abc", "value": 4455,
		"label": "Opolskie, Krapkowicki, Gogolin"
	},
	{
		"test": "abc", "value": 31788,
		"label": "Warmi\u0144sko-Mazurskie, Go\u0142dapski, Go\u0142dap"
	},
	{
		"test": "abc", "value": 28905,
		"label": "Zachodniopomorskie, Goleniowski, Goleni\u00f3w"
	},
	{
		"test": "abc", "value": 21549,
		"label": "Mazowieckie, Piaseczy\u0144ski, G\u00f3ra Kalwaria"
	},
	{
		"test": "abc", "value": 37058,
		"label": "Lubuskie, Gorz\u00f3w Wielkopolski"
	},
	{
		"test": "abc", "value": 52822,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Go\u015bcino"
	},
	{
		"test": "abc", "value": 52287,
		"label": "Wielkopolskie, Gosty\u0144ski, Gosty\u0144"
	},
	{
		"test": "abc", "value": 52387,
		"label": "Mazowieckie, Gostyni\u0144ski, Gostynin"
	},
	{
		"test": "abc", "value": 36132,
		"label": "Mazowieckie, Grodziski, Grodzisk Mazowiecki"
	},
	{
		"test": "abc", "value": 45812,
		"label": "Wielkopolskie, Grodziski, Grodzisk Wielkopolski"
	},
	{
		"test": "abc", "value": 1642,
		"label": "Mazowieckie, Gr\u00f3jecki, Gr\u00f3jec"
	},
	{
		"test": "abc", "value": 13077,
		"label": "Kujawsko-Pomorskie, Grudzi\u0105dz"
	},
	{
		"test": "abc", "value": 52322,
		"label": "Zachodniopomorskie, Gryficki, Gryfice"
	},
	{
		"test": "abc", "value": 47110,
		"label": "Zachodniopomorskie, Gryfi\u0144ski, Gryfino"
	},
	{
		"test": "abc", "value": 20511,
		"label": "Podlaskie, Hajnowski, Hajn\u00f3wka"
	},
	{
		"test": "abc", "value": 52499,
		"label": "Mazowieckie, Mi\u0144ski, Halin\u00f3w"
	},
	{
		"test": "abc", "value": 45344,
		"label": "Pomorskie, Pucki, Hel"
	},
	{
		"test": "abc", "value": 9385,
		"label": "Warmi\u0144sko-Mazurskie, I\u0142awski, I\u0142awa"
	},
	{
		"test": "abc", "value": 35739,
		"label": "Kujawsko-Pomorskie, Inowroc\u0142awski, Inowroc\u0142aw"
	},
	{
		"test": "abc", "value": 52445,
		"label": "Zachodniopomorskie, Stargardzki, I\u0144sko"
	},
	{
		"test": "abc", "value": 52404,
		"label": "Lubelskie, Janowski, Jan\u00f3w Lubelski"
	},
	{
		"test": "abc", "value": 47119,
		"label": "Wielkopolskie, Jaroci\u0144ski, Jarocin"
	},
	{
		"test": "abc", "value": 52284,
		"label": "Podkarpackie, Jasielski, Jas\u0142o"
	},
	{
		"test": "abc", "value": 13032,
		"label": "Pomorskie, Pucki, Jastarnia"
	},
	{
		"test": "abc", "value": 52433,
		"label": "Wielkopolskie, Z\u0142otowski, Jastrowie"
	},
	{
		"test": "abc", "value": 23134,
		"label": "\u015al\u0105skie, Jastrz\u0119bie-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 52457,
		"label": "\u015al\u0105skie, Jaworzno"
	},
	{
		"test": "abc", "value": 52314,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, Jaworzyna \u015al\u0105ska"
	},
	{
		"test": "abc", "value": 4661,
		"label": "Dolno\u015bl\u0105skie, O\u0142awski, Jelcz-Laskowice"
	},
	{
		"test": "abc", "value": 51619,
		"label": "Dolno\u015bl\u0105skie, Jelenia G\u00f3ra"
	},
	{
		"test": "abc", "value": 7727,
		"label": "Mazowieckie, Otwocki, J\u00f3zef\u00f3w"
	},
	{
		"test": "abc", "value": 18767,
		"label": "Wielkopolskie, Kalisz"
	},
	{
		"test": "abc", "value": 52546,
		"label": "Mazowieckie, Mi\u0144ski, Ka\u0142uszyn"
	},
	{
		"test": "abc", "value": 37976,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Karpacz"
	},
	{
		"test": "abc", "value": 1737,
		"label": "Pomorskie, Kartuski, Kartuzy"
	},
	{
		"test": "abc", "value": 31600,
		"label": "\u015al\u0105skie, Katowice"
	},
	{
		"test": "abc", "value": 39252,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, K\u0105ty Wroc\u0142awskie"
	},
	{
		"test": "abc", "value": 52520,
		"label": "Warmi\u0144sko-Mazurskie, K\u0119trzy\u0144ski, K\u0119trzyn"
	},
	{
		"test": "abc", "value": 36190,
		"label": "\u015awi\u0119tokrzyskie, Kielce"
	},
	{
		"test": "abc", "value": 52542,
		"label": "\u015al\u0105skie, K\u0142obucki, K\u0142obuck"
	},
	{
		"test": "abc", "value": 18264,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, K\u0142odzko"
	},
	{
		"test": "abc", "value": 27502,
		"label": "\u015al\u0105skie, Gliwicki, Knur\u00f3w"
	},
	{
		"test": "abc", "value": 9913,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Koby\u0142ka"
	},
	{
		"test": "abc", "value": 14102,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Ko\u0142obrzeg"
	},
	{
		"test": "abc", "value": 39772,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Koluszki"
	},
	{
		"test": "abc", "value": 2067,
		"label": "Wielkopolskie, Konin"
	},
	{
		"test": "abc", "value": 8437,
		"label": "Mazowieckie, Piaseczy\u0144ski, Konstancin-Jeziorna"
	},
	{
		"test": "abc", "value": 12010,
		"label": "\u0141\u00f3dzkie, Pabianicki, Konstantyn\u00f3w \u0141\u00f3dzki"
	},
	{
		"test": "abc", "value": 2436,
		"label": "Wielkopolskie, Pozna\u0144ski, K\u00f3rnik"
	},
	{
		"test": "abc", "value": 871,
		"label": "Wielkopolskie, Ko\u015bcia\u0144ski, Ko\u015bcian"
	},
	{
		"test": "abc", "value": 4395,
		"label": "Pomorskie, Ko\u015bcierski, Ko\u015bcierzyna"
	},
	{
		"test": "abc", "value": 38447,
		"label": "Wielkopolskie, Pozna\u0144ski, Kostrzyn"
	},
	{
		"test": "abc", "value": 52472,
		"label": "Lubuskie, Gorzowski, Kostrzyn nad Odr\u0105"
	},
	{
		"test": "abc", "value": 48606,
		"label": "Zachodniopomorskie, Koszalin"
	},
	{
		"test": "abc", "value": 44124,
		"label": "Kujawsko-Pomorskie, Golubsko-Dobrzy\u0144ski, Kowalewo Pomorskie"
	},
	{
		"test": "abc", "value": 41196,
		"label": "Mazowieckie, Kozienicki, Kozienice"
	},
	{
		"test": "abc", "value": 11158,
		"label": "Ma\u0142opolskie, Krak\u00f3w"
	},
	{
		"test": "abc", "value": 22482,
		"label": "Opolskie, Krapkowicki, Krapkowice"
	},
	{
		"test": "abc", "value": 52237,
		"label": "Lubelskie, Kra\u015bnicki, Kra\u015bnik"
	},
	{
		"test": "abc", "value": 36014,
		"label": "Podkarpackie, Krosno"
	},
	{
		"test": "abc", "value": 52474,
		"label": "Wielkopolskie, Krotoszy\u0144ski, Krotoszyn"
	},
	{
		"test": "abc", "value": 35022,
		"label": "Pomorskie, Nowodworski, Krynica Morska"
	},
	{
		"test": "abc", "value": 11328,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Krynica-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 30868,
		"label": "Ma\u0142opolskie, Krakowski, Krzeszowice"
	},
	{
		"test": "abc", "value": 52534,
		"label": "Wielkopolskie, Ko\u015bcia\u0144ski, Krzywi\u0144"
	},
	{
		"test": "abc", "value": 52525,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki, Krzy\u017c Wielkopolski"
	},
	{
		"test": "abc", "value": 49787,
		"label": "\u0141\u00f3dzkie, Kutnowski, Kutno"
	},
	{
		"test": "abc", "value": 52388,
		"label": "Podkarpackie, \u0141a\u0144cut"
	},
	{
		"test": "abc", "value": 52382,
		"label": "Podlaskie, Bia\u0142ostocki, \u0141apy"
	},
	{
		"test": "abc", "value": 8769,
		"label": "\u015al\u0105skie, Miko\u0142owski, \u0141aziska G\u00f3rne"
	},
	{
		"test": "abc", "value": 41675,
		"label": "Pomorskie, L\u0119borski, \u0141eba"
	},
	{
		"test": "abc", "value": 52805,
		"label": "Pomorskie, L\u0119bork"
	},
	{
		"test": "abc", "value": 52459,
		"label": "Lubelskie, \u0142\u0119czy\u0144ski, \u0141\u0119czna"
	},
	{
		"test": "abc", "value": 52418,
		"label": "\u015al\u0105skie, L\u0119dziny"
	},
	{
		"test": "abc", "value": 47675,
		"label": "Mazowieckie, Legionowski, Legionowo"
	},
	{
		"test": "abc", "value": 40444,
		"label": "Dolno\u015bl\u0105skie, Legnica"
	},
	{
		"test": "abc", "value": 32749,
		"label": "Opolskie, Strzelecki, Le\u015bnica"
	},
	{
		"test": "abc", "value": 12259,
		"label": "Wielkopolskie, Leszno"
	},
	{
		"test": "abc", "value": 11303,
		"label": "Ma\u0142opolskie, Chrzanowski, Libi\u0105\u017c"
	},
	{
		"test": "abc", "value": 16187,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a"
	},
	{
		"test": "abc", "value": 51541,
		"label": "Mazowieckie, Warszawski Zachodni, \u0141omianki"
	},
	{
		"test": "abc", "value": 23038,
		"label": "Podlaskie, \u0141om\u017ca"
	},
	{
		"test": "abc", "value": 30988,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski, Lubin"
	},
	{
		"test": "abc", "value": 13220,
		"label": "Lubelskie, Lublin"
	},
	{
		"test": "abc", "value": 20203,
		"label": "Wielkopolskie, Pozna\u0144ski, Lubo\u0144"
	},
	{
		"test": "abc", "value": 19526,
		"label": "Lubelskie, \u0141ukowski, \u0141uk\u00f3w"
	},
	{
		"test": "abc", "value": 52540,
		"label": "Mazowieckie, Makowski, Mak\u00f3w Mazowiecki"
	},
	{
		"test": "abc", "value": 44923,
		"label": "Pomorskie, Malborski, Malbork"
	},
	{
		"test": "abc", "value": 41324,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Marki"
	},
	{
		"test": "abc", "value": 28812,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, Mi\u0119dzylesie"
	},
	{
		"test": "abc", "value": 52760,
		"label": "Lubuskie, Mi\u0119dzyrzecz"
	},
	{
		"test": "abc", "value": 33992,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Mi\u0119dzyzdroje"
	},
	{
		"test": "abc", "value": 32591,
		"label": "Podkarpackie, Mielecki, Mielec"
	},
	{
		"test": "abc", "value": 16048,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski, Miko\u0142ajki"
	},
	{
		"test": "abc", "value": 13580,
		"label": "\u015al\u0105skie, Miko\u0142owski, Miko\u0142\u00f3w"
	},
	{
		"test": "abc", "value": 44298,
		"label": "Mazowieckie, Grodziski, Milan\u00f3wek"
	},
	{
		"test": "abc", "value": 52420,
		"label": "Dolno\u015bl\u0105skie, Milicz"
	},
	{
		"test": "abc", "value": 43897,
		"label": "Mazowieckie, Mi\u0144ski, Mi\u0144sk Mazowiecki"
	},
	{
		"test": "abc", "value": 37733,
		"label": "Mazowieckie, M\u0142awski, M\u0142awa"
	},
	{
		"test": "abc", "value": 49117,
		"label": "Wielkopolskie, Pozna\u0144ski, Mosina"
	},
	{
		"test": "abc", "value": 48654,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski, Mr\u0105gowo"
	},
	{
		"test": "abc", "value": 52323,
		"label": "Mazowieckie, \u017byrardowski, Mszczon\u00f3w"
	},
	{
		"test": "abc", "value": 29754,
		"label": "Wielkopolskie, Pozna\u0144ski, Murowana Go\u015blina"
	},
	{
		"test": "abc", "value": 47901,
		"label": "Ma\u0142opolskie, My\u015blenicki, My\u015blenice"
	},
	{
		"test": "abc", "value": 8955,
		"label": "\u015al\u0105skie, Mys\u0142owice"
	},
	{
		"test": "abc", "value": 25809,
		"label": "Lubelskie, Pu\u0142awski, Na\u0142\u0119cz\u00f3w"
	},
	{
		"test": "abc", "value": 29372,
		"label": "Opolskie, Namys\u0142owski, Namys\u0142\u00f3w"
	},
	{
		"test": "abc", "value": 14321,
		"label": "Mazowieckie, Nowodworski, Nasielsk"
	},
	{
		"test": "abc", "value": 36712,
		"label": "Wielkopolskie, Wrzesi\u0144ski, Nekla"
	},
	{
		"test": "abc", "value": 52548,
		"label": "Warmi\u0144sko-Mazurskie, Nidzicki, Nidzica"
	},
	{
		"test": "abc", "value": 36397,
		"label": "Ma\u0142opolskie, Wielicki, Niepo\u0142omice"
	},
	{
		"test": "abc", "value": 10117,
		"label": "Lubuskie, Nowosolski, Nowa S\u00f3l"
	},
	{
		"test": "abc", "value": 52543,
		"label": "Zachodniopomorskie, Goleniowski, Nowogard"
	},
	{
		"test": "abc", "value": 7572,
		"label": "Mazowieckie, Nowodworski, Nowy Dw\u00f3r Mazowiecki"
	},
	{
		"test": "abc", "value": 52247,
		"label": "Ma\u0142opolskie, Nowy S\u0105cz"
	},
	{
		"test": "abc", "value": 1899,
		"label": "Ma\u0142opolskie, Nowotarski, Nowy Targ"
	},
	{
		"test": "abc", "value": 52533,
		"label": "Wielkopolskie, Nowotomyski, Nowy Tomy\u015bl"
	},
	{
		"test": "abc", "value": 52455,
		"label": "Opolskie, Nyski, Nysa"
	},
	{
		"test": "abc", "value": 21343,
		"label": "Wielkopolskie, Obornicki, Oborniki"
	},
	{
		"test": "abc", "value": 32620,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Oborniki \u015al\u0105skie"
	},
	{
		"test": "abc", "value": 14663,
		"label": "Dolno\u015bl\u0105skie, O\u0142awski, O\u0142awa"
	},
	{
		"test": "abc", "value": 51671,
		"label": "Warmi\u0144sko-Mazurskie, Olecki, Olecko"
	},
	{
		"test": "abc", "value": 34312,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Ole\u015bnica"
	},
	{
		"test": "abc", "value": 31391,
		"label": "Ma\u0142opolskie, Olkuski, Olkusz"
	},
	{
		"test": "abc", "value": 26804,
		"label": "Warmi\u0144sko-Mazurskie, Olsztyn"
	},
	{
		"test": "abc", "value": 20064,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Olsztynek"
	},
	{
		"test": "abc", "value": 52233,
		"label": "Wielkopolskie, Nowotomyski, Opalenica"
	},
	{
		"test": "abc", "value": 12168,
		"label": "Opolskie, Opole"
	},
	{
		"test": "abc", "value": 19975,
		"label": "Lubelskie, Opolski, Opole Lubelskie"
	},
	{
		"test": "abc", "value": 52494,
		"label": "Warmi\u0144sko-Mazurskie, Piski, Orzysz"
	},
	{
		"test": "abc", "value": 30635,
		"label": "Warmi\u0144sko-Mazurskie, Ostr\u00f3dzki, Ostr\u00f3da"
	},
	{
		"test": "abc", "value": 19025,
		"label": "Mazowieckie, Ostro\u0142\u0119ka"
	},
	{
		"test": "abc", "value": 28917,
		"label": "\u015awi\u0119tokrzyskie, Ostrowiecki, Ostrowiec \u015awi\u0119tokrzyski"
	},
	{
		"test": "abc", "value": 34136,
		"label": "Wielkopolskie, Ostrowski, Ostr\u00f3w Wielkopolski"
	},
	{
		"test": "abc", "value": 52307,
		"label": "Wielkopolskie, Ostrzeszowski, Ostrzesz\u00f3w"
	},
	{
		"test": "abc", "value": 52252,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski, O\u015bwi\u0119cim"
	},
	{
		"test": "abc", "value": 12955,
		"label": "Mazowieckie, Otwocki, Otwock"
	},
	{
		"test": "abc", "value": 24508,
		"label": "\u015awi\u0119tokrzyskie, Opatowski, O\u017car\u00f3w"
	},
	{
		"test": "abc", "value": 37871,
		"label": "Mazowieckie, Warszawski Zachodni, O\u017car\u00f3w Mazowiecki"
	},
	{
		"test": "abc", "value": 19008,
		"label": "\u0141\u00f3dzkie, Zgierski, Ozork\u00f3w"
	},
	{
		"test": "abc", "value": 9195,
		"label": "\u0141\u00f3dzkie, Pabianicki, Pabianice"
	},
	{
		"test": "abc", "value": 28307,
		"label": "Mazowieckie, Piaseczy\u0144ski, Piaseczno"
	},
	{
		"test": "abc", "value": 5414,
		"label": "Mazowieckie, Pruszkowski, Piast\u00f3w"
	},
	{
		"test": "abc", "value": 9467,
		"label": "\u015al\u0105skie, Piekary \u015al\u0105skie"
	},
	{
		"test": "abc", "value": 36816,
		"label": "Wielkopolskie, Pilski, Pi\u0142a"
	},
	{
		"test": "abc", "value": 52326,
		"label": "\u0141\u00f3dzkie, Piotrk\u00f3w Trybunalski"
	},
	{
		"test": "abc", "value": 50016,
		"label": "Warmi\u0144sko-Mazurskie, Piski, Pisz"
	},
	{
		"test": "abc", "value": 52532,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Piwniczna-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 30792,
		"label": "Mazowieckie, P\u0142ocki, P\u0142ock"
	},
	{
		"test": "abc", "value": 42177,
		"label": "Mazowieckie, P\u0142o\u0144ski, P\u0142o\u0144sk"
	},
	{
		"test": "abc", "value": 52396,
		"label": "Wielkopolskie, Szamotulski, Pniewy"
	},
	{
		"test": "abc", "value": 52510,
		"label": "Wielkopolskie, Pozna\u0144ski, Pobiedziska"
	},
	{
		"test": "abc", "value": 2375,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, Polanica-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 52286,
		"label": "Zachodniopomorskie, \u015awidwi\u0144ski, Po\u0142czyn-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 28779,
		"label": "Zachodniopomorskie, Policki, Police"
	},
	{
		"test": "abc", "value": 16956,
		"label": "Dolno\u015bl\u0105skie, Polkowicki, Polkowice"
	},
	{
		"test": "abc", "value": 9905,
		"label": "Lubelskie, Opolski, Poniatowa"
	},
	{
		"test": "abc", "value": 30892,
		"label": "Wielkopolskie, Pozna\u0144"
	},
	{
		"test": "abc", "value": 49550,
		"label": "Pomorskie, Gda\u0144ski, Pruszcz Gda\u0144ski"
	},
	{
		"test": "abc", "value": 10399,
		"label": "Mazowieckie, Pruszkowski, Pruszk\u00f3w"
	},
	{
		"test": "abc", "value": 1236,
		"label": "Mazowieckie, Przasnyski, Przasnysz"
	},
	{
		"test": "abc", "value": 52374,
		"label": "Podkarpackie, Przemy\u015bl"
	},
	{
		"test": "abc", "value": 39791,
		"label": "Podkarpackie, Przeworski, Przeworsk"
	},
	{
		"test": "abc", "value": 49952,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Pszczyna"
	},
	{
		"test": "abc", "value": 36584,
		"label": "Pomorskie, Pucki, Puck"
	},
	{
		"test": "abc", "value": 51827,
		"label": "Lubelskie, Pu\u0142awski, Pu\u0142awy"
	},
	{
		"test": "abc", "value": 25679,
		"label": "Mazowieckie, Pu\u0142tuski, Pu\u0142tusk"
	},
	{
		"test": "abc", "value": 51217,
		"label": "Wielkopolskie, Pozna\u0144ski, Puszczykowo"
	},
	{
		"test": "abc", "value": 52414,
		"label": "\u015al\u0105skie, Gliwicki, Pyskowice"
	},
	{
		"test": "abc", "value": 52392,
		"label": "Ma\u0142opolskie, Nowotarski, Rabka-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 14537,
		"label": "\u015al\u0105skie, Raciborski, Racib\u00f3rz"
	},
	{
		"test": "abc", "value": 21988,
		"label": "Ma\u0142opolskie, Tarnowski, Rad\u0142\u00f3w"
	},
	{
		"test": "abc", "value": 33423,
		"label": "Mazowieckie, Radom"
	},
	{
		"test": "abc", "value": 35114,
		"label": "\u0141\u00f3dzkie, Radomszcza\u0144ski, Radomsko"
	},
	{
		"test": "abc", "value": 2829,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Radzymin"
	},
	{
		"test": "abc", "value": 52516,
		"label": "Lubelskie, Radzy\u0144ski, Radzy\u0144 Podlaski"
	},
	{
		"test": "abc", "value": 15600,
		"label": "\u0141\u00f3dzkie, Rawski, Rawa Mazowiecka"
	},
	{
		"test": "abc", "value": 25977,
		"label": "Wielkopolskie, Rawicki, Rawicz"
	},
	{
		"test": "abc", "value": 23029,
		"label": "Pomorskie, Wejherowski, Reda"
	},
	{
		"test": "abc", "value": 52712,
		"label": "Podkarpackie, Ropczyce"
	},
	{
		"test": "abc", "value": 8857,
		"label": "\u015al\u0105skie, Ruda \u015al\u0105ska"
	},
	{
		"test": "abc", "value": 18709,
		"label": "Pomorskie, Wejherowski, Rumia"
	},
	{
		"test": "abc", "value": 19648,
		"label": "\u015al\u0105skie, Rybnik"
	},
	{
		"test": "abc", "value": 33659,
		"label": "Podkarpackie, Rzesz\u00f3w"
	},
	{
		"test": "abc", "value": 51977,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Rzg\u00f3w"
	},
	{
		"test": "abc", "value": 25168,
		"label": "Podkarpackie, Sanocki, Sanok"
	},
	{
		"test": "abc", "value": 21267,
		"label": "Kujawsko-Pomorskie, S\u0119pole\u0144ski, S\u0119p\u00f3lno Kraje\u0144skie"
	},
	{
		"test": "abc", "value": 52241,
		"label": "Mazowieckie, Legionowski, Serock"
	},
	{
		"test": "abc", "value": 3910,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Siechnice"
	},
	{
		"test": "abc", "value": 49690,
		"label": "Mazowieckie, Siedlce"
	},
	{
		"test": "abc", "value": 49528,
		"label": "\u015al\u0105skie, Siemianowice \u015al\u0105skie"
	},
	{
		"test": "abc", "value": 52341,
		"label": "Podlaskie, Siemiatycze"
	},
	{
		"test": "abc", "value": 52522,
		"label": "\u0141\u00f3dzkie, Sieradzki, Sieradz"
	},
	{
		"test": "abc", "value": 52339,
		"label": "\u015al\u0105skie, B\u0119dzi\u0144ski, Siewierz"
	},
	{
		"test": "abc", "value": 29950,
		"label": "\u015awi\u0119tokrzyskie, Skar\u017cyski, Skar\u017cysko-Kamienna"
	},
	{
		"test": "abc", "value": 42472,
		"label": "\u0141\u00f3dzkie, Skierniewice"
	},
	{
		"test": "abc", "value": 29464,
		"label": "Zachodniopomorskie, S\u0142awie\u0144ski, S\u0142awno"
	},
	{
		"test": "abc", "value": 52217,
		"label": "Lubuskie, S\u0142ubicki, S\u0142ubice"
	},
	{
		"test": "abc", "value": 2435,
		"label": "Wielkopolskie, S\u0142upecki, S\u0142upca"
	},
	{
		"test": "abc", "value": 15753,
		"label": "Pomorskie, S\u0142upsk"
	},
	{
		"test": "abc", "value": 15168,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Sob\u00f3tka"
	},
	{
		"test": "abc", "value": 42582,
		"label": "Mazowieckie, Sochaczewski, Sochaczew"
	},
	{
		"test": "abc", "value": 52528,
		"label": "Mazowieckie, Soko\u0142owski, Soko\u0142\u00f3w Podlaski"
	},
	{
		"test": "abc", "value": 52352,
		"label": "Kujawsko-Pomorskie, Bydgoski, Solec Kujawski"
	},
	{
		"test": "abc", "value": 10847,
		"label": "Pomorskie, Sopot"
	},
	{
		"test": "abc", "value": 43947,
		"label": "\u015al\u0105skie, Sosnowiec"
	},
	{
		"test": "abc", "value": 23503,
		"label": "Wielkopolskie, \u015aremski, \u015arem"
	},
	{
		"test": "abc", "value": 17556,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, \u015aroda \u015al\u0105ska"
	},
	{
		"test": "abc", "value": 10183,
		"label": "Wielkopolskie, \u015aredzki, \u015aroda Wielkopolska"
	},
	{
		"test": "abc", "value": 46169,
		"label": "\u015awi\u0119tokrzyskie, Starachowicki, Starachowice"
	},
	{
		"test": "abc", "value": 38840,
		"label": "Zachodniopomorskie, Stargardzki, Stargard Szczeci\u0144ski"
	},
	{
		"test": "abc", "value": 32224,
		"label": "Pomorskie, Starogardzki, Starogard Gda\u0144ski"
	},
	{
		"test": "abc", "value": 17501,
		"label": "Wielkopolskie, Pozna\u0144ski, St\u0119szew"
	},
	{
		"test": "abc", "value": 33825,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Strumie\u0144"
	},
	{
		"test": "abc", "value": 12292,
		"label": "\u0141\u00f3dzkie, Zgierski, Stryk\u00f3w"
	},
	{
		"test": "abc", "value": 18777,
		"label": "Dolno\u015bl\u0105skie, Strzeli\u0144ski, Strzelin"
	},
	{
		"test": "abc", "value": 29050,
		"label": "Podkarpackie, Strzy\u017cowski, Strzy\u017c\u00f3w"
	},
	{
		"test": "abc", "value": 51813,
		"label": "Ma\u0142opolskie, Suski, Sucha Beskidzka"
	},
	{
		"test": "abc", "value": 52447,
		"label": "Lubuskie, Sul\u0119ci\u0144ski, Sul\u0119cin"
	},
	{
		"test": "abc", "value": 26213,
		"label": "Mazowieckie, Mi\u0144ski, Sulej\u00f3wek"
	},
	{
		"test": "abc", "value": 42309,
		"label": "Podlaskie, Suwa\u0142ki"
	},
	{
		"test": "abc", "value": 46908,
		"label": "Wielkopolskie, Pozna\u0144ski, Swarz\u0119dz"
	},
	{
		"test": "abc", "value": 47866,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, \u015awidnica"
	},
	{
		"test": "abc", "value": 19804,
		"label": "Lubelskie, \u015awidnicki, \u015awidnik"
	},
	{
		"test": "abc", "value": 22934,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, \u015awiebodzice"
	},
	{
		"test": "abc", "value": 52759,
		"label": "Kujawsko-pomorskie, \u015awiecie"
	},
	{
		"test": "abc", "value": 52232,
		"label": "Dolno\u015bl\u0105skie, Luba\u0144ski, \u015awierad\u00f3w Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 5229,
		"label": "\u015al\u0105skie, \u015awi\u0119toch\u0142owice"
	},
	{
		"test": "abc", "value": 28754,
		"label": "Zachodniopomorskie, \u015awinouj\u015bcie"
	},
	{
		"test": "abc", "value": 52758,
		"label": "Dolno\u015bl\u0105skie, Syc\u00f3w"
	},
	{
		"test": "abc", "value": 625,
		"label": "Wielkopolskie, Szamotulski, Szamotu\u0142y"
	},
	{
		"test": "abc", "value": 2151,
		"label": "Dolno\u015bl\u0105skie, Wa\u0142brzyski, Szczawno-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 32657,
		"label": "Zachodniopomorskie, Szczecin"
	},
	{
		"test": "abc", "value": 4435,
		"label": "Zachodniopomorskie, Szczecinecki, Szczecinek"
	},
	{
		"test": "abc", "value": 52555,
		"label": "\u015al\u0105skie, Bielski, Szczyrk"
	},
	{
		"test": "abc", "value": 36606,
		"label": "Warmi\u0144sko-Mazurskie, Szczycie\u0144ski, Szczytno"
	},
	{
		"test": "abc", "value": 49967,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Szklarska Por\u0119ba"
	},
	{
		"test": "abc", "value": 20836,
		"label": "Kujawsko-Pomorskie, Nakielski, Szubin"
	},
	{
		"test": "abc", "value": 52506,
		"label": "Mazowieckie, Szyd\u0142owiecki, Szyd\u0142owiec"
	},
	{
		"test": "abc", "value": 52228,
		"label": "Ma\u0142opolskie, Tarn\u00f3w"
	},
	{
		"test": "abc", "value": 41348,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski, Tarnowskie G\u00f3ry"
	},
	{
		"test": "abc", "value": 52273,
		"label": "\u015al\u0105skie, Tarnowskie G\u00f3ry"
	},
	{
		"test": "abc", "value": 29078,
		"label": "Pomorskie, Tczewski, Tczew"
	},
	{
		"test": "abc", "value": 52647,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, T\u0142uszcz"
	},
	{
		"test": "abc", "value": 52517,
		"label": "Lubelskie, Tomaszowski, Tomasz\u00f3w Lubelski"
	},
	{
		"test": "abc", "value": 42140,
		"label": "\u0141\u00f3dzkie, Tomaszowski, Tomasz\u00f3w Mazowiecki"
	},
	{
		"test": "abc", "value": 19894,
		"label": "Kujawsko-Pomorskie, Toru\u0144"
	},
	{
		"test": "abc", "value": 8588,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki, Trzcianka"
	},
	{
		"test": "abc", "value": 32972,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Trzebnica"
	},
	{
		"test": "abc", "value": 12932,
		"label": "Wielkopolskie, Gnie\u017anie\u0144ski, Trzemeszno"
	},
	{
		"test": "abc", "value": 52707,
		"label": "Wielkopolskie, Turek"
	},
	{
		"test": "abc", "value": 39949,
		"label": "\u015al\u0105skie, Tychy"
	},
	{
		"test": "abc", "value": 17318,
		"label": "Wielkopolskie, Pilski, Uj\u015bcie"
	},
	{
		"test": "abc", "value": 20905,
		"label": "Pomorskie, S\u0142upski, Ustka"
	},
	{
		"test": "abc", "value": 42904,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Ustro\u0144"
	},
	{
		"test": "abc", "value": 52304,
		"label": "Ma\u0142opolskie, Wadowice"
	},
	{
		"test": "abc", "value": 52236,
		"label": "Dolno\u015bl\u0105skie, Wa\u0142brzych"
	},
	{
		"test": "abc", "value": 52214,
		"label": "Mazowieckie, Gr\u00f3jecki, Warka"
	},
	{
		"test": "abc", "value": 8647,
		"label": "Mazowieckie, Warszawa"
	},
	{
		"test": "abc", "value": 1786,
		"label": "Podlaskie, Bia\u0142ostocki, Wasilk\u00f3w"
	},
	{
		"test": "abc", "value": 35729,
		"label": "Warmi\u0144sko-mazurskie, W\u0119gorzewski, W\u0119gorzewo"
	},
	{
		"test": "abc", "value": 19240,
		"label": "Pomorskie, Wejherowski, Wejherowo"
	},
	{
		"test": "abc", "value": 49238,
		"label": "Ma\u0142opolskie, Wielicki, Wieliczka"
	},
	{
		"test": "abc", "value": 52321,
		"label": "\u0141\u00f3dzkie, Wieruszowski, Wierusz\u00f3w"
	},
	{
		"test": "abc", "value": 52294,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Wis\u0142a"
	},
	{
		"test": "abc", "value": 49596,
		"label": "Pomorskie, Pucki, W\u0142adys\u0142awowo"
	},
	{
		"test": "abc", "value": 44391,
		"label": "Kujawsko-Pomorskie, W\u0142oc\u0142awek"
	},
	{
		"test": "abc", "value": 29786,
		"label": "Lubelskie, W\u0142odawski, W\u0142odawa"
	},
	{
		"test": "abc", "value": 16576,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Wolin"
	},
	{
		"test": "abc", "value": 34586,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Wo\u0142omin"
	},
	{
		"test": "abc", "value": 4237,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski, Wo\u0142\u00f3w"
	},
	{
		"test": "abc", "value": 50574,
		"label": "Wielkopolskie, Wolszty\u0144ski, Wolsztyn"
	},
	{
		"test": "abc", "value": 26955,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw"
	},
	{
		"test": "abc", "value": 49639,
		"label": "Wielkopolskie, Wrzesi\u0144ski, Wrze\u015bnia"
	},
	{
		"test": "abc", "value": 52437,
		"label": "Lubuskie, Wschowski, Wschowa"
	},
	{
		"test": "abc", "value": 33411,
		"label": "Wielkopolskie, Pilski, Wyrzysk"
	},
	{
		"test": "abc", "value": 37260,
		"label": "Mazowieckie, Wyszkowski, Wyszk\u00f3w"
	},
	{
		"test": "abc", "value": 23007,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Z\u0105bki"
	},
	{
		"test": "abc", "value": 52711,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki, Z\u0105bkowice \u015al\u0105skie"
	},
	{
		"test": "abc", "value": 1945,
		"label": "\u015al\u0105skie, Zabrze"
	},
	{
		"test": "abc", "value": 52246,
		"label": "Lubuskie, \u017baga\u0144ski, \u017baga\u0144"
	},
	{
		"test": "abc", "value": 24848,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Zakopane"
	},
	{
		"test": "abc", "value": 52401,
		"label": "Lubelskie, Zamo\u015b\u0107"
	},
	{
		"test": "abc", "value": 52468,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, \u017bar\u00f3w"
	},
	{
		"test": "abc", "value": 8848,
		"label": "Lubuskie, \u017barski, \u017bary"
	},
	{
		"test": "abc", "value": 40517,
		"label": "\u015al\u0105skie, Zawiercia\u0144ski, Zawiercie"
	},
	{
		"test": "abc", "value": 1136,
		"label": "\u0141\u00f3dzkie, Zgierski, Zgierz"
	},
	{
		"test": "abc", "value": 49163,
		"label": "Dolno\u015bl\u0105skie, Zgorzelecki, Zgorzelec"
	},
	{
		"test": "abc", "value": 52451,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki, Zi\u0119bice"
	},
	{
		"test": "abc", "value": 48806,
		"label": "Lubuskie, Zielona G\u00f3ra"
	},
	{
		"test": "abc", "value": 43707,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Zielonka"
	},
	{
		"test": "abc", "value": 24706,
		"label": "Wielkopolskie, Z\u0142otowski, Z\u0142ot\u00f3w"
	},
	{
		"test": "abc", "value": 52462,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, \u017bmigr\u00f3d"
	},
	{
		"test": "abc", "value": 52297,
		"label": "\u015al\u0105skie, \u017bory"
	},
	{
		"test": "abc", "value": 39454,
		"label": "Pomorskie, Kartuski, \u017bukowo"
	},
	{
		"test": "abc", "value": 11917,
		"label": "Lubelskie, Zamojski, Zwierzyniec"
	},
	{
		"test": "abc", "value": 19760,
		"label": "Mazowieckie, \u017byrardowski, \u017byrard\u00f3w"
	},
	{
		"test": "abc", "value": 47604,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski, Aleksandrowice"
	},
	{
		"test": "abc", "value": 27903,
		"label": "Ma\u0142opolskie, Chrzanowski, Babice"
	},
	{
		"test": "abc", "value": 22914,
		"label": "Pomorskie, Kartuski, Banino"
	},
	{
		"test": "abc", "value": 6771,
		"label": "Wielkopolskie, Pozna\u0144ski, Baranowo"
	},
	{
		"test": "abc", "value": 52407,
		"label": "Warmi\u0144sko-Mazurskie, Nidzicki, Bartoszki"
	},
	{
		"test": "abc", "value": 6766,
		"label": "Mazowieckie, Piaseczy\u0144ski, Baszk\u00f3wka"
	},
	{
		"test": "abc", "value": 2598,
		"label": "Zachodniopomorskie, Policki, Bezrzecze"
	},
	{
		"test": "abc", "value": 52378,
		"label": "\u0141\u00f3dzkie, Zgierski, Bia\u0142a"
	},
	{
		"test": "abc", "value": 52349,
		"label": "Mazowieckie, Legionowski, Bia\u0142obrzegi"
	},
	{
		"test": "abc", "value": 8419,
		"label": "Dolno\u015bl\u0105skie, G\u0142ogowski, Bia\u0142o\u0142\u0119ka"
	},
	{
		"test": "abc", "value": 27497,
		"label": "Ma\u0142opolskie, Krakowski, Bibice"
	},
	{
		"test": "abc", "value": 38313,
		"label": "Wielkopolskie, Pozna\u0144ski, Biedrusko"
	},
	{
		"test": "abc", "value": 17812,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Bielany Wroc\u0142awskie"
	},
	{
		"test": "abc", "value": 23356,
		"label": "Mazowieckie, Warszawski Zachodni, Bieniewice"
	},
	{
		"test": "abc", "value": 52372,
		"label": "Lubelskie, Bi\u0142gorajski, Bi\u0142goraj"
	},
	{
		"test": "abc", "value": 31477,
		"label": "Mazowieckie, Nowodworski, B\u0142\u0119dowo"
	},
	{
		"test": "abc", "value": 52470,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Blizanowice"
	},
	{
		"test": "abc", "value": 52500,
		"label": "Mazowieckie, Warszawski Zachodni, Blizne Jasi\u0144skiego"
	},
	{
		"test": "abc", "value": 52203,
		"label": "Wielkopolskie, Pozna\u0144ski, Bnin"
	},
	{
		"test": "abc", "value": 48318,
		"label": "Mazowieckie, Piaseczy\u0144ski, Bobrowiec"
	},
	{
		"test": "abc", "value": 52329,
		"label": "\u015awi\u0119tokrzyskie, Ostrowiecki, Bodzech\u00f3w"
	},
	{
		"test": "abc", "value": 8304,
		"label": "Wielkopolskie, Obornicki, Bogdanowo"
	},
	{
		"test": "abc", "value": 52311,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Boguszyce"
	},
	{
		"test": "abc", "value": 27562,
		"label": "Pomorskie, Wejherowski, Bojano"
	},
	{
		"test": "abc", "value": 39699,
		"label": "Ma\u0142opolskie, Krakowski, Bolechowice"
	},
	{
		"test": "abc", "value": 52289,
		"label": "Mazowieckie, Otwocki, Boles\u0142aw\u00f3w"
	},
	{
		"test": "abc", "value": 17403,
		"label": "\u0141\u00f3dzkie, Skierniewicki, Bolim\u00f3w"
	},
	{
		"test": "abc", "value": 9336,
		"label": "Pomorskie, Wejherowski, Bolszewo"
	},
	{
		"test": "abc", "value": 26167,
		"label": "Pomorskie, Kartuski, Borcz"
	},
	{
		"test": "abc", "value": 2230,
		"label": "Pomorskie, Gda\u0144ski, Borkowo"
	},
	{
		"test": "abc", "value": 27495,
		"label": "Wielkopolskie, Pozna\u0144ski, Bor\u00f3wiec"
	},
	{
		"test": "abc", "value": 52302,
		"label": "\u0141\u00f3dzkie, Zgierski, Bratoszewice"
	},
	{
		"test": "abc", "value": 3578,
		"label": "Wielkopolskie, \u015aredzki, Brodowo"
	},
	{
		"test": "abc", "value": 52526,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Brzezia \u0141\u0105ka"
	},
	{
		"test": "abc", "value": 38115,
		"label": "Opolskie, Opolski, Brzezie"
	},
	{
		"test": "abc", "value": 6684,
		"label": "Ma\u0142opolskie, Krakowski, Brzezie"
	},
	{
		"test": "abc", "value": 25972,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, Brzezina"
	},
	{
		"test": "abc", "value": 52710,
		"label": "Ma\u0142opolskie, Krakowski, Brzoz\u00f3wka"
	},
	{
		"test": "abc", "value": 48736,
		"label": "Wielkopolskie, Pozna\u0144ski, Bugaj"
	},
	{
		"test": "abc", "value": 7431,
		"label": "\u0141\u00f3dzkie, Pabianicki, Bychlew"
	},
	{
		"test": "abc", "value": 52301,
		"label": "Pomorskie, S\u0142upski, Bydlino"
	},
	{
		"test": "abc", "value": 52229,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Byszewo"
	},
	{
		"test": "abc", "value": 27525,
		"label": "Mazowieckie, Legionowski, Chotom\u00f3w"
	},
	{
		"test": "abc", "value": 17941,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Chrz\u0105stawa Wielka"
	},
	{
		"test": "abc", "value": 49279,
		"label": "Pomorskie, Kartuski, Chwaszczyno"
	},
	{
		"test": "abc", "value": 6338,
		"label": "Mazowieckie, Piaseczy\u0144ski, Chylice"
	},
	{
		"test": "abc", "value": 31995,
		"label": "Mazowieckie, Piaseczy\u0144ski, Chyliczki"
	},
	{
		"test": "abc", "value": 52299,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Cierpice"
	},
	{
		"test": "abc", "value": 52757,
		"label": "Mazowieckie, Nowodworski, Cybulice Ma\u0142e"
	},
	{
		"test": "abc", "value": 32830,
		"label": "Pomorskie, Kartuski, Czaple"
	},
	{
		"test": "abc", "value": 16583,
		"label": "Wielkopolskie, Pozna\u0144ski, Czapury"
	},
	{
		"test": "abc", "value": 31177,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Czarna G\u00f3ra"
	},
	{
		"test": "abc", "value": 34679,
		"label": "Ma\u0142opolskie, Wielicki, Czarnochowice"
	},
	{
		"test": "abc", "value": 52312,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Czernikowo"
	},
	{
		"test": "abc", "value": 19840,
		"label": "Wielkopolskie, Pozna\u0144ski, Czmo\u0144"
	},
	{
		"test": "abc", "value": 52400,
		"label": "Wielkopolskie, Pozna\u0144ski, D\u0105browa"
	},
	{
		"test": "abc", "value": 52708,
		"label": "\u015awi\u0119tokrzyskie, Kielecki, D\u0105browa"
	},
	{
		"test": "abc", "value": 52508,
		"label": "Mazowieckie, Legionowski, D\u0105browa Chotomowska"
	},
	{
		"test": "abc", "value": 39467,
		"label": "Wielkopolskie, Nowotomyski, D\u0105browa Nowa"
	},
	{
		"test": "abc", "value": 38130,
		"label": "Wielkopolskie, Pozna\u0144ski, D\u0105br\u00f3wka"
	},
	{
		"test": "abc", "value": 52467,
		"label": "Podlaskie, Bia\u0142ostocki, D\u0105br\u00f3wki"
	},
	{
		"test": "abc", "value": 52226,
		"label": "Wielkopolskie, Pozna\u0144ski, Dachowa"
	},
	{
		"test": "abc", "value": 30437,
		"label": "Wielkopolskie, Pozna\u0144ski, Daszewice"
	},
	{
		"test": "abc", "value": 11799,
		"label": "Mazowieckie, Pruszkowski, Dawidy Bankowe"
	},
	{
		"test": "abc", "value": 52355,
		"label": "Mazowieckie, Mi\u0144ski, D\u0142uga Ko\u015bcielna"
	},
	{
		"test": "abc", "value": 30054,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, D\u0142ugo\u0142\u0119ka"
	},
	{
		"test": "abc", "value": 14376,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Dobrzykowice"
	},
	{
		"test": "abc", "value": 33284,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Domas\u0142aw"
	},
	{
		"test": "abc", "value": 52348,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Domaszczyn"
	},
	{
		"test": "abc", "value": 24393,
		"label": "Wielkopolskie, Pozna\u0144ski, Dopiewiec"
	},
	{
		"test": "abc", "value": 52296,
		"label": "Mazowieckie, Legionowski, Dosin"
	},
	{
		"test": "abc", "value": 40774,
		"label": "Wielkopolskie, Leszczy\u0144ski, Drobnin"
	},
	{
		"test": "abc", "value": 29280,
		"label": "Mazowieckie, Warszawski Zachodni, Duchnice"
	},
	{
		"test": "abc", "value": 36176,
		"label": "Mazowieckie, Otwocki, Duchn\u00f3w"
	},
	{
		"test": "abc", "value": 50552,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Dywity"
	},
	{
		"test": "abc", "value": 42908,
		"label": "Mazowieckie, Warszawski Zachodni, Dziekan\u00f3w Le\u015bny"
	},
	{
		"test": "abc", "value": 52346,
		"label": "Mazowieckie, Warszawski Zachodni, Dziekan\u00f3w Polski"
	},
	{
		"test": "abc", "value": 25530,
		"label": "Pomorskie, Kartuski, Dzier\u017c\u0105\u017cno"
	},
	{
		"test": "abc", "value": 13379,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Dziwn\u00f3wek"
	},
	{
		"test": "abc", "value": 52245,
		"label": "Pomorskie, Kartuski, Egiertowo"
	},
	{
		"test": "abc", "value": 32944,
		"label": "Mazowieckie, Pruszkowski, Falenty Du\u017ce"
	},
	{
		"test": "abc", "value": 32142,
		"label": "Mazowieckie, Pruszkowski, Falenty Nowe"
	},
	{
		"test": "abc", "value": 51660,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Florynka"
	},
	{
		"test": "abc", "value": 9080,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, G\u0105d\u00f3w"
	},
	{
		"test": "abc", "value": 52460,
		"label": "Ma\u0142opolskie, Krakowski, Gaj"
	},
	{
		"test": "abc", "value": 9971,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Ga\u0142k\u00f3w Du\u017cy"
	},
	{
		"test": "abc", "value": 28489,
		"label": "Mazowieckie, Radomski, G\u0119barz\u00f3w"
	},
	{
		"test": "abc", "value": 52223,
		"label": "Ma\u0142opolskie, Krakowski, Giebu\u0142t\u00f3w"
	},
	{
		"test": "abc", "value": 22752,
		"label": "\u015al\u0105skie, Gliwicki, Giera\u0142towice"
	},
	{
		"test": "abc", "value": 52244,
		"label": "Pomorskie, Kartuski, Glincz"
	},
	{
		"test": "abc", "value": 49033,
		"label": "Ma\u0142opolskie, My\u015blenicki, G\u0142ogocz\u00f3w"
	},
	{
		"test": "abc", "value": 31390,
		"label": "Wielkopolskie, Pozna\u0144ski, G\u0142uchowo"
	},
	{
		"test": "abc", "value": 46998,
		"label": "Pomorskie, Wejherowski, Gniewino"
	},
	{
		"test": "abc", "value": 52240,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Gocza\u0142kowice-Zdr\u00f3j"
	},
	{
		"test": "abc", "value": 52224,
		"label": "Wielkopolskie, Pozna\u0144ski, Go\u0142uski"
	},
	{
		"test": "abc", "value": 52313,
		"label": "Mazowieckie, Otwocki, G\u00f3raszka"
	},
	{
		"test": "abc", "value": 12944,
		"label": "Pomorskie, Wejherowski, Go\u015bcicino"
	},
	{
		"test": "abc", "value": 52335,
		"label": "\u015al\u0105skie, Miko\u0142owski, Gosty\u0144"
	},
	{
		"test": "abc", "value": 6220,
		"label": "Wielkopolskie, Pozna\u0144ski, Gowarzewo"
	},
	{
		"test": "abc", "value": 52549,
		"label": "Mazowieckie, Garwoli\u0144ski, Go\u017adzik"
	},
	{
		"test": "abc", "value": 52409,
		"label": "Podlaskie, Bia\u0142ostocki, Grab\u00f3wka"
	},
	{
		"test": "abc", "value": 31418,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Groblice"
	},
	{
		"test": "abc", "value": 843,
		"label": "Mazowieckie, Nowodworski, Grochale"
	},
	{
		"test": "abc", "value": 32038,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Gr\u00f3dek Nad Dunajcem"
	},
	{
		"test": "abc", "value": 8498,
		"label": "\u015al\u0105skie, Bielski, Grodziec"
	},
	{
		"test": "abc", "value": 52342,
		"label": "\u0141\u00f3dzkie, Zgierski, Grotniki"
	},
	{
		"test": "abc", "value": 9565,
		"label": "Mazowieckie, Ciechanowski, Grudusk"
	},
	{
		"test": "abc", "value": 15024,
		"label": "Wielkopolskie, Pozna\u0144ski, Gruszczyn"
	},
	{
		"test": "abc", "value": 52337,
		"label": "Mazowieckie, Mi\u0144ski, Grzebowilk"
	},
	{
		"test": "abc", "value": 52308,
		"label": "Zachodniopomorskie, Policki, Grzepnica"
	},
	{
		"test": "abc", "value": 29781,
		"label": "Pomorskie, Ko\u015bcierski, Grzybowo"
	},
	{
		"test": "abc", "value": 40396,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Grzybowo"
	},
	{
		"test": "abc", "value": 4332,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Gutkowo"
	},
	{
		"test": "abc", "value": 7218,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Helen\u00f3w"
	},
	{
		"test": "abc", "value": 19320,
		"label": "Ma\u0142opolskie, Nowotarski, Huba"
	},
	{
		"test": "abc", "value": 29941,
		"label": "Podlaskie, Bia\u0142ostocki, Ignatki-Osiedle"
	},
	{
		"test": "abc", "value": 52379,
		"label": "Ma\u0142opolskie, Krakowski, Iwanowice"
	},
	{
		"test": "abc", "value": 42100,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Iwiny"
	},
	{
		"test": "abc", "value": 38339,
		"label": "Mazowieckie, Nowodworski, Izabelin-Dziekan\u00f3wek"
	},
	{
		"test": "abc", "value": 28697,
		"label": "Mazowieckie, Legionowski, Jab\u0142onna"
	},
	{
		"test": "abc", "value": 38176,
		"label": "Mazowieckie, Legionowski, Jadwisin"
	},
	{
		"test": "abc", "value": 52497,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Jakson\u00f3w"
	},
	{
		"test": "abc", "value": 43812,
		"label": "Mazowieckie, Grodziski, Jaktor\u00f3w-Kolonia"
	},
	{
		"test": "abc", "value": 52509,
		"label": "Lubuskie, Gorzowski, Janczewo"
	},
	{
		"test": "abc", "value": 52538,
		"label": "Mazowieckie, Pruszkowski, Janki"
	},
	{
		"test": "abc", "value": 39660,
		"label": "Pomorskie, Gda\u0144ski, Jankowo Gda\u0144skie"
	},
	{
		"test": "abc", "value": 52495,
		"label": "Pomorskie, Nowodworski, Jantar"
	},
	{
		"test": "abc", "value": 52443,
		"label": "Podkarpackie, Rzeszowski, Jasionka"
	},
	{
		"test": "abc", "value": 52415,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski, Ja\u015bkowice"
	},
	{
		"test": "abc", "value": 33634,
		"label": "Mazowieckie, Grodziski, Jastrz\u0119bnik"
	},
	{
		"test": "abc", "value": 52191,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Jaszkotle"
	},
	{
		"test": "abc", "value": 36249,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski, Jawiszowice"
	},
	{
		"test": "abc", "value": 10222,
		"label": "Wielkopolskie, Pozna\u0144ski, Jelonek"
	},
	{
		"test": "abc", "value": 10760,
		"label": "Ma\u0142opolskie, Krakowski, Jerzmanowice"
	},
	{
		"test": "abc", "value": 52425,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Jeszkowice"
	},
	{
		"test": "abc", "value": 52397,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski, Jora Wielka"
	},
	{
		"test": "abc", "value": 32821,
		"label": "Mazowieckie, Piaseczy\u0144ski, J\u00f3zefos\u0142aw"
	},
	{
		"test": "abc", "value": 18983,
		"label": "Mazowieckie, \u017byrardowski, J\u00f3zef\u00f3w"
	},
	{
		"test": "abc", "value": 38694,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Justyn\u00f3w"
	},
	{
		"test": "abc", "value": 52288,
		"label": "Pomorskie, Gda\u0144ski, Juszkowo"
	},
	{
		"test": "abc", "value": 50415,
		"label": "Podlaskie, Bia\u0142ostocki, Juszkowy Gr\u00f3d"
	},
	{
		"test": "abc", "value": 52556,
		"label": "Mazowieckie, Pruszkowski, Kajetany"
	},
	{
		"test": "abc", "value": 35457,
		"label": "Wielkopolskie, Leszczy\u0144ski, K\u0105kolewo"
	},
	{
		"test": "abc", "value": 52222,
		"label": "Lubelskie, Lubelski, Kalin\u00f3wka"
	},
	{
		"test": "abc", "value": 52464,
		"label": "Wielkopolskie, Pozna\u0144ski, Kalwy"
	},
	{
		"test": "abc", "value": 41366,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kamie\u0144"
	},
	{
		"test": "abc", "value": 52235,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kamieniec Wroc\u0142awski"
	},
	{
		"test": "abc", "value": 52368,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki, Kamieniec Z\u0105bkowicki"
	},
	{
		"test": "abc", "value": 52820,
		"label": "Warmi\u0144sko-mazurskie, Szczycie\u0144ski, Kamionek"
	},
	{
		"test": "abc", "value": 22002,
		"label": "Mazowieckie, \u017byrardowski, Kamionka"
	},
	{
		"test": "abc", "value": 2934,
		"label": "Wielkopolskie, Pozna\u0144ski, Kamionki"
	},
	{
		"test": "abc", "value": 52428,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Kamionki Ma\u0142e"
	},
	{
		"test": "abc", "value": 52416,
		"label": "\u015al\u0105skie, Bielski, Kani\u00f3w"
	},
	{
		"test": "abc", "value": 7633,
		"label": "Pomorskie, Wejherowski, K\u0105pino"
	},
	{
		"test": "abc", "value": 39771,
		"label": "Mazowieckie, Warszawski Zachodni, Kaputy"
	},
	{
		"test": "abc", "value": 52317,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Karwiany"
	},
	{
		"test": "abc", "value": 8542,
		"label": "Pomorskie, Nowodworski, K\u0105ty Rybackie"
	},
	{
		"test": "abc", "value": 37644,
		"label": "Mazowieckie, Legionowski, K\u0105ty W\u0119gierskie"
	},
	{
		"test": "abc", "value": 10619,
		"label": "Wielkopolskie, Szamotulski, Ka\u017amierz"
	},
	{
		"test": "abc", "value": 52310,
		"label": "Pomorskie, Wejherowski, K\u0119b\u0142owo"
	},
	{
		"test": "abc", "value": 43000,
		"label": "Mazowieckie, Piaseczy\u0144ski, K\u0119dzier\u00f3wka"
	},
	{
		"test": "abc", "value": 42497,
		"label": "Wielkopolskie, Pozna\u0144ski, Kiekrz"
	},
	{
		"test": "abc", "value": 50896,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kie\u0142cz\u00f3w"
	},
	{
		"test": "abc", "value": 52354,
		"label": "Mazowieckie, Warszawski Zachodni, Kie\u0142pin"
	},
	{
		"test": "abc", "value": 37907,
		"label": "Pomorskie, Kartuski, Kie\u0142pino"
	},
	{
		"test": "abc", "value": 26602,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Kie\u017aliny"
	},
	{
		"test": "abc", "value": 52452,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Klebark Wielki"
	},
	{
		"test": "abc", "value": 52498,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Klemb\u00f3w"
	},
	{
		"test": "abc", "value": 52417,
		"label": "Pomorskie, Gda\u0144ski, Kleszczewko"
	},
	{
		"test": "abc", "value": 22651,
		"label": "Wielkopolskie, Pozna\u0144ski, Kliny"
	},
	{
		"test": "abc", "value": 40294,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kobierzyce"
	},
	{
		"test": "abc", "value": 36581,
		"label": "Wielkopolskie, Pozna\u0144ski, Kobylnica"
	},
	{
		"test": "abc", "value": 3964,
		"label": "Wielkopolskie, Pozna\u0144ski, Kobylniki"
	},
	{
		"test": "abc", "value": 12360,
		"label": "Mazowieckie, Warszawski Zachodni, Koczargi Stare"
	},
	{
		"test": "abc", "value": 37334,
		"label": "Pomorskie, Gda\u0144ski, Kolbudy"
	},
	{
		"test": "abc", "value": 52829,
		"label": "Lubelskie, Lubelski, Kolonia Pliszczyn"
	},
	{
		"test": "abc", "value": 52503,
		"label": "Wielkopolskie, Kaliski, Kolonia Skarszewek"
	},
	{
		"test": "abc", "value": 9076,
		"label": "Wielkopolskie, Pozna\u0144ski, Komorniki"
	},
	{
		"test": "abc", "value": 26898,
		"label": "Warmi\u0144sko-Mazurskie, Dzia\u0142dowski, Komorniki"
	},
	{
		"test": "abc", "value": 39514,
		"label": "Mazowieckie, Pruszkowski, Komor\u00f3w"
	},
	{
		"test": "abc", "value": 52316,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, Komor\u00f3w"
	},
	{
		"test": "abc", "value": 35695,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Komorowice"
	},
	{
		"test": "abc", "value": 52453,
		"label": "Wielkopolskie, Pozna\u0144ski, Konarskie"
	},
	{
		"test": "abc", "value": 46080,
		"label": "Wielkopolskie, Pozna\u0144ski, Koninko"
	},
	{
		"test": "abc", "value": 9532,
		"label": "Mazowieckie, W\u0119growski, Korytnica"
	},
	{
		"test": "abc", "value": 22513,
		"label": "Mazowieckie, Piaseczy\u0144ski, Korzeni\u00f3wka"
	},
	{
		"test": "abc", "value": 52242,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Korzenna"
	},
	{
		"test": "abc", "value": 39282,
		"label": "Pomorskie, Pucki, Kosakowo"
	},
	{
		"test": "abc", "value": 7421,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Ko\u015bcielisko"
	},
	{
		"test": "abc", "value": 52227,
		"label": "Ma\u0142opolskie, Tarnowski, Koszyce Wielkie"
	},
	{
		"test": "abc", "value": 52502,
		"label": "Opolskie, Opolski, Kot\u00f3rz Wielki"
	},
	{
		"test": "abc", "value": 52501,
		"label": "Pomorskie, Gda\u0144ski, Kowale"
	},
	{
		"test": "abc", "value": 12905,
		"label": "Wielkopolskie, Pozna\u0144ski, Kozieg\u0142owy"
	},
	{
		"test": "abc", "value": 11058,
		"label": "Wielkopolskie, Pozna\u0144ski, Kr\u0105plewo"
	},
	{
		"test": "abc", "value": 40626,
		"label": "Podkarpackie, Rzeszowski, Krasne"
	},
	{
		"test": "abc", "value": 9494,
		"label": "Mazowieckie, Warszawski Zachodni, Kr\u0119czki"
	},
	{
		"test": "abc", "value": 52828,
		"label": "Kujawsko-pomorskie, Toru\u0144ski, Krobia"
	},
	{
		"test": "abc", "value": 44106,
		"label": "Ma\u0142opolskie, Krakowski, Kryspin\u00f3w"
	},
	{
		"test": "abc", "value": 44037,
		"label": "Mazowieckie, \u017byrardowski, Krze Du\u017ce"
	},
	{
		"test": "abc", "value": 48950,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Krzept\u00f3w"
	},
	{
		"test": "abc", "value": 36620,
		"label": "Wielkopolskie, Leszczy\u0144ski, Krzycko Wielkie"
	},
	{
		"test": "abc", "value": 51455,
		"label": "\u0141\u00f3dzkie, Zgierski, Krzywiec"
	},
	{
		"test": "abc", "value": 4996,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Krzy\u017canowice"
	},
	{
		"test": "abc", "value": 31125,
		"label": "\u0141\u00f3dzkie, Pabianicki, Ksawer\u00f3w"
	},
	{
		"test": "abc", "value": 35086,
		"label": "Mazowieckie, Grodziski, Ksi\u0105\u017cenice"
	},
	{
		"test": "abc", "value": 52389,
		"label": "Dolno\u015bl\u0105skie, Legnicki, Kunice"
	},
	{
		"test": "abc", "value": 52422,
		"label": "Ma\u0142opolskie, Wielicki, Kunice"
	},
	{
		"test": "abc", "value": 37952,
		"label": "Wielkopolskie, Mi\u0119dzychodzki, Kwilcz"
	},
	{
		"test": "abc", "value": 48860,
		"label": "Mazowieckie, Warszawski Zachodni, Kwiryn\u00f3w"
	},
	{
		"test": "abc", "value": 52275,
		"label": "Mazowieckie, Legionowski, \u0141ajski"
	},
	{
		"test": "abc", "value": 52432,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, \u0141\u0105ka"
	},
	{
		"test": "abc", "value": 34146,
		"label": "Mazowieckie, Piaseczy\u0144ski, \u0141azy"
	},
	{
		"test": "abc", "value": 37135,
		"label": "Pomorskie, Pucki, \u0141ebcz"
	},
	{
		"test": "abc", "value": 718,
		"label": "Ma\u0142opolskie, Wielicki, Lednica G\u00f3rna"
	},
	{
		"test": "abc", "value": 52277,
		"label": "Dolno\u015bl\u0105skie, Legnicki, Legnickie Pole"
	},
	{
		"test": "abc", "value": 3947,
		"label": "Mazowieckie, Piaseczy\u0144ski, Lesznowola"
	},
	{
		"test": "abc", "value": 36767,
		"label": "Mazowieckie, Gr\u00f3jecki, Lesznowola"
	},
	{
		"test": "abc", "value": 22066,
		"label": "Pomorskie, Kartuski, Le\u017ano"
	},
	{
		"test": "abc", "value": 34647,
		"label": "Ma\u0142opolskie, Krakowski, Libert\u00f3w"
	},
	{
		"test": "abc", "value": 44885,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Ligota Pi\u0119kna"
	},
	{
		"test": "abc", "value": 52821,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Lipinki"
	},
	{
		"test": "abc", "value": 12693,
		"label": "Mazowieckie, Warszawski Zachodni, Lipk\u00f3w"
	},
	{
		"test": "abc", "value": 6704,
		"label": "Mazowieckie, Otwocki, Lipowo"
	},
	{
		"test": "abc", "value": 52399,
		"label": "Ma\u0142opolskie, Krakowski, Liszki"
	},
	{
		"test": "abc", "value": 52353,
		"label": "Mazowieckie, W\u0119growski, \u0141och\u00f3w"
	},
	{
		"test": "abc", "value": 52430,
		"label": "Kujawsko-Pomorskie, Bydgoski, \u0141ochowo"
	},
	{
		"test": "abc", "value": 6883,
		"label": "Mazowieckie, Warszawski Zachodni, \u0141omianki Dolne"
	},
	{
		"test": "abc", "value": 8055,
		"label": "Wielkopolskie, Pozna\u0144ski, \u0141opuchowo"
	},
	{
		"test": "abc", "value": 52250,
		"label": "Ma\u0142opolskie, Tarnowski, \u0141owcz\u00f3wek"
	},
	{
		"test": "abc", "value": 52806,
		"label": "Wielkopolskie, Pozna\u0144ski, \u0141ow\u0119cin"
	},
	{
		"test": "abc", "value": 38755,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u0141ozina"
	},
	{
		"test": "abc", "value": 52375,
		"label": "Lubelskie, Lubartowski, Lubart\u00f3w"
	},
	{
		"test": "abc", "value": 52514,
		"label": "Lubuskie, Nowosolski, Lubi\u0119cin"
	},
	{
		"test": "abc", "value": 52421,
		"label": "Pomorskie, Tczewski, Lubiszewo Tczewskie"
	},
	{
		"test": "abc", "value": 48993,
		"label": "Zachodniopomorskie, Kamie\u0144ski, \u0141uk\u0119cin"
	},
	{
		"test": "abc", "value": 8482,
		"label": "Wielkopolskie, Pozna\u0144ski, Lus\u00f3wko"
	},
	{
		"test": "abc", "value": 42643,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, Lutynia"
	},
	{
		"test": "abc", "value": 5710,
		"label": "Pomorskie, Wejherowski, Luzino"
	},
	{
		"test": "abc", "value": 4025,
		"label": "Mazowieckie, Piaseczy\u0144ski, Magdalenka"
	},
	{
		"test": "abc", "value": 28635,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Majdan"
	},
	{
		"test": "abc", "value": 52395,
		"label": "Kujawsko-Pomorskie, Bydgoski, Maksymilianowo"
	},
	{
		"test": "abc", "value": 6439,
		"label": "Mazowieckie, Otwocki, Malcan\u00f3w"
	},
	{
		"test": "abc", "value": 52544,
		"label": "Warmi\u0144sko-Mazurskie, Ostr\u00f3dzki, Ma\u0142dyty"
	},
	{
		"test": "abc", "value": 29615,
		"label": "Mazowieckie, Nowodworski, Ma\u0142ocice"
	},
	{
		"test": "abc", "value": 52282,
		"label": "Opolskie, Opolski, Marsza\u0142ki"
	},
	{
		"test": "abc", "value": 37810,
		"label": "\u015awi\u0119tokrzyskie, Kielecki, Mas\u0142\u00f3w Pierwszy"
	},
	{
		"test": "abc", "value": 52324,
		"label": "Pomorskie, Pucki, Mechelinki"
	},
	{
		"test": "abc", "value": 10668,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, M\u0119d\u0142\u00f3w"
	},
	{
		"test": "abc", "value": 10332,
		"label": "Mazowieckie, Otwocki, Micha\u0142\u00f3wek"
	},
	{
		"test": "abc", "value": 52376,
		"label": "Mazowieckie, Legionowski, Micha\u0142\u00f3w-Grabina"
	},
	{
		"test": "abc", "value": 52225,
		"label": "Ma\u0142opolskie, Krakowski, Micha\u0142owice"
	},
	{
		"test": "abc", "value": 6354,
		"label": "Mazowieckie, Pruszkowski, Micha\u0142owice-Wie\u015b"
	},
	{
		"test": "abc", "value": 38052,
		"label": "Mazowieckie, Legionowski, Micha\u0142\u00f3w-Regin\u00f3w"
	},
	{
		"test": "abc", "value": 40170,
		"label": "Pomorskie, Kartuski, Miechucino"
	},
	{
		"test": "abc", "value": 34893,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Mi\u0119dzywodzie"
	},
	{
		"test": "abc", "value": 16057,
		"label": "Pomorskie, S\u0142upski, Mielno"
	},
	{
		"test": "abc", "value": 24820,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Mielno"
	},
	{
		"test": "abc", "value": 13611,
		"label": "Zachodniopomorskie, Policki, Mierzyn"
	},
	{
		"test": "abc", "value": 27600,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Mirk\u00f3w"
	},
	{
		"test": "abc", "value": 15044,
		"label": "Mazowieckie, Pruszkowski, M\u0142och\u00f3w"
	},
	{
		"test": "abc", "value": 48601,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Mnichowice"
	},
	{
		"test": "abc", "value": 23982,
		"label": "Ma\u0142opolskie, Krakowski, Mnik\u00f3w"
	},
	{
		"test": "abc", "value": 52003,
		"label": "Ma\u0142opolskie, Krakowski, Modlnica"
	},
	{
		"test": "abc", "value": 31171,
		"label": "Ma\u0142opolskie, Krakowski, Modlniczka"
	},
	{
		"test": "abc", "value": 30274,
		"label": "Ma\u0142opolskie, Krakowski, Mogilany"
	},
	{
		"test": "abc", "value": 32614,
		"label": "Zachodniopomorskie, Stargardzki, Morzyczyn"
	},
	{
		"test": "abc", "value": 19040,
		"label": "Pomorskie, Pucki, Mosty"
	},
	{
		"test": "abc", "value": 30217,
		"label": "Lubelskie, Lubelski, Motycz"
	},
	{
		"test": "abc", "value": 3992,
		"label": "Wielkopolskie, Pozna\u0144ski, Mrowino"
	},
	{
		"test": "abc", "value": 40413,
		"label": "Mazowieckie, Mi\u0144ski, Mrozy"
	},
	{
		"test": "abc", "value": 19023,
		"label": "Zachodniopomorskie, Gryficki, Mrze\u017cyno"
	},
	{
		"test": "abc", "value": 52427,
		"label": "Podkarpackie, Jaros\u0142awski, Munina"
	},
	{
		"test": "abc", "value": 764,
		"label": "Mazowieckie, Piaseczy\u0144ski, Mysiad\u0142o"
	},
	{
		"test": "abc", "value": 52554,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Mys\u0142akowice"
	},
	{
		"test": "abc", "value": 15839,
		"label": "Kujawsko-Pomorskie, Bydgoski, My\u015bl\u0119cinek"
	},
	{
		"test": "abc", "value": 19543,
		"label": "Mazowieckie, Pruszkowski, Nadarzyn"
	},
	{
		"test": "abc", "value": 4865,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Nadma"
	},
	{
		"test": "abc", "value": 6002,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Nadolice Wielkie"
	},
	{
		"test": "abc", "value": 11650,
		"label": "Ma\u0142opolskie, Krakowski, Narama"
	},
	{
		"test": "abc", "value": 52434,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Naterki"
	},
	{
		"test": "abc", "value": 52439,
		"label": "\u015al\u0105skie, Gliwicki, Nieborowice"
	},
	{
		"test": "abc", "value": 22442,
		"label": "Zachodniopomorskie, Gryficki, Niechorze"
	},
	{
		"test": "abc", "value": 12266,
		"label": "Ma\u0142opolskie, Tarnowski, Niedomice"
	},
	{
		"test": "abc", "value": 52230,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Niekanin"
	},
	{
		"test": "abc", "value": 51206,
		"label": "Kujawsko-Pomorskie, Bydgoski, Niemcz"
	},
	{
		"test": "abc", "value": 25245,
		"label": "Mazowieckie, Legionowski, Niepor\u0119t"
	},
	{
		"test": "abc", "value": 52291,
		"label": "Podlaskie, Bia\u0142ostocki, Niewodnica Korycka"
	},
	{
		"test": "abc", "value": 52405,
		"label": "Wielkopolskie, \u015aremski, Nochowo"
	},
	{
		"test": "abc", "value": 43998,
		"label": "Mazowieckie, Piaseczy\u0144ski, Nowa Iwiczna"
	},
	{
		"test": "abc", "value": 37600,
		"label": "Mazowieckie, Piaseczy\u0144ski, Nowa Wola"
	},
	{
		"test": "abc", "value": 52243,
		"label": "Pomorskie, Kartuski, Nowe Czaple"
	},
	{
		"test": "abc", "value": 52249,
		"label": "Mazowieckie, Siedlecki, Nowe Iganie"
	},
	{
		"test": "abc", "value": 27468,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Nowe Lipiny"
	},
	{
		"test": "abc", "value": 52553,
		"label": "\u015awi\u0119tokrzyskie, Kielecki, Nowiny"
	},
	{
		"test": "abc", "value": 29580,
		"label": "Zachodniopomorskie, My\u015bliborski, Nowogr\u00f3dek Pomorski"
	},
	{
		"test": "abc", "value": 10959,
		"label": "Mazowieckie, Warszawski Zachodni, Nowy Dziekan\u00f3w"
	},
	{
		"test": "abc", "value": 52531,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski, Obora"
	},
	{
		"test": "abc", "value": 52390,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Obrowo"
	},
	{
		"test": "abc", "value": 37970,
		"label": "Lubuskie, Zielonog\u00f3rski, Ochla"
	},
	{
		"test": "abc", "value": 34992,
		"label": "Ma\u0142opolskie, Wielicki, Ochman\u00f3w"
	},
	{
		"test": "abc", "value": 52507,
		"label": "Mazowieckie, Legionowski, Olszewnica Nowa"
	},
	{
		"test": "abc", "value": 52690,
		"label": "Mazowieckie, Legionowski, Olszewnica Stara"
	},
	{
		"test": "abc", "value": 13084,
		"label": "Mazowieckie, Pruszkowski, Opacz-Kolonia"
	},
	{
		"test": "abc", "value": 51821,
		"label": "Ma\u0142opolskie, Proszowicki, Opatkowice"
	},
	{
		"test": "abc", "value": 20837,
		"label": "Pomorskie, Wejherowski, Orle"
	},
	{
		"test": "abc", "value": 52701,
		"label": "\u015al\u0105skie, Miko\u0142owski, Ornontowice"
	},
	{
		"test": "abc", "value": 42560,
		"label": "Kujawsko-Pomorskie, Bydgoski, Osielsko"
	},
	{
		"test": "abc", "value": 52373,
		"label": "Podlaskie, Bia\u0142ostocki, Osowicze"
	},
	{
		"test": "abc", "value": 34318,
		"label": "Mazowieckie, Pruszkowski, Otr\u0119busy"
	},
	{
		"test": "abc", "value": 27677,
		"label": "Mazowieckie, Otwocki, Otwock Ma\u0142y"
	},
	{
		"test": "abc", "value": 52298,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Ozorzyce"
	},
	{
		"test": "abc", "value": 47059,
		"label": "Wielkopolskie, Pozna\u0144ski, Paczkowo"
	},
	{
		"test": "abc", "value": 44016,
		"label": "Wielkopolskie, Pozna\u0144ski, Pal\u0119dzie"
	},
	{
		"test": "abc", "value": 46626,
		"label": "Mazowieckie, Pruszkowski, Parzniew"
	},
	{
		"test": "abc", "value": 25480,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Paw\u0142owice"
	},
	{
		"test": "abc", "value": 13037,
		"label": "Mazowieckie, Pruszkowski, P\u0119cice Ma\u0142e"
	},
	{
		"test": "abc", "value": 52290,
		"label": "Wielkopolskie, Pozna\u0144ski, Pecna"
	},
	{
		"test": "abc", "value": 45216,
		"label": "Wielkopolskie, Gosty\u0144ski, P\u0119powo"
	},
	{
		"test": "abc", "value": 45599,
		"label": "Pomorskie, Kartuski, P\u0119powo"
	},
	{
		"test": "abc", "value": 4744,
		"label": "Ma\u0142opolskie, Krakowski, Piekary"
	},
	{
		"test": "abc", "value": 20312,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Pietrzykowice"
	},
	{
		"test": "abc", "value": 35553,
		"label": "Ma\u0142opolskie, Chrzanowski, Pi\u0142a Ko\u015bcielecka"
	},
	{
		"test": "abc", "value": 52438,
		"label": "\u015al\u0105skie, Gliwicki, Pilchowice"
	},
	{
		"test": "abc", "value": 11639,
		"label": "Pomorskie, Starogardzki, Pinczyn"
	},
	{
		"test": "abc", "value": 50508,
		"label": "\u015al\u0105skie, Bielski, Pisarzowice"
	},
	{
		"test": "abc", "value": 52271,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Piszkawa"
	},
	{
		"test": "abc", "value": 30423,
		"label": "Wielkopolskie, Pozna\u0144ski, Plewiska"
	},
	{
		"test": "abc", "value": 52347,
		"label": "Mazowieckie, Pu\u0142tuski, Poby\u0142kowo Ma\u0142e"
	},
	{
		"test": "abc", "value": 39906,
		"label": "Pomorskie, S\u0142upski, Podd\u0105bie"
	},
	{
		"test": "abc", "value": 43126,
		"label": "Pomorskie, Pucki, Pog\u00f3rze"
	},
	{
		"test": "abc", "value": 25293,
		"label": "Zachodniopomorskie, \u0141obeski, Pogorzelica"
	},
	{
		"test": "abc", "value": 28369,
		"label": "Zachodniopomorskie, Gryficki, Pogorzelica"
	},
	{
		"test": "abc", "value": 52198,
		"label": "Kujawsko-Pomorskie, Brodnicki, P\u00f3\u0142ko"
	},
	{
		"test": "abc", "value": 24694,
		"label": "Lubuskie, Zielonog\u00f3rski, Pomorsko"
	},
	{
		"test": "abc", "value": 4863,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Poniatowice"
	},
	{
		"test": "abc", "value": 52551,
		"label": "\u015al\u0105skie, Myszkowski, Poraj"
	},
	{
		"test": "abc", "value": 9000,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Poronin"
	},
	{
		"test": "abc", "value": 2986,
		"label": "Mazowieckie, Piaseczy\u0144ski, Pra\u017cm\u00f3w"
	},
	{
		"test": "abc", "value": 52330,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Pruszowice"
	},
	{
		"test": "abc", "value": 49540,
		"label": "Wielkopolskie, Pozna\u0144ski, Prze\u017amierowo"
	},
	{
		"test": "abc", "value": 52408,
		"label": "Mazowieckie, Piaseczy\u0144ski, Przypki"
	},
	{
		"test": "abc", "value": 52435,
		"label": "Wielkopolskie, \u015aremski, Psarskie"
	},
	{
		"test": "abc", "value": 9616,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Psary"
	},
	{
		"test": "abc", "value": 42431,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, Pszenno"
	},
	{
		"test": "abc", "value": 37911,
		"label": "Zachodniopomorskie, Goleniowski, Pucice"
	},
	{
		"test": "abc", "value": 2797,
		"label": "Podkarpackie, Stalowowolski, Pysznica"
	},
	{
		"test": "abc", "value": 52394,
		"label": "Wielkopolskie, Pozna\u0144ski, Rabowice"
	},
	{
		"test": "abc", "value": 42060,
		"label": "Ma\u0142opolskie, Krakowski, Raciborowice"
	},
	{
		"test": "abc", "value": 3291,
		"label": "Ma\u0142opolskie, Miechowski, Rac\u0142awice"
	},
	{
		"test": "abc", "value": 26411,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Rac\u0142awice Wielkie"
	},
	{
		"test": "abc", "value": 8184,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Radomierzyce"
	},
	{
		"test": "abc", "value": 14233,
		"label": "Pomorskie, Gda\u0144ski, Radunica"
	},
	{
		"test": "abc", "value": 37461,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Radwanice"
	},
	{
		"test": "abc", "value": 5264,
		"label": "Mazowieckie, \u017byrardowski, Radziejowice"
	},
	{
		"test": "abc", "value": 52319,
		"label": "Wielkopolskie, Szamotulski, Radzyny"
	},
	{
		"test": "abc", "value": 3525,
		"label": "Mazowieckie, Pruszkowski, Raszyn"
	},
	{
		"test": "abc", "value": 9898,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Redykajny"
	},
	{
		"test": "abc", "value": 29189,
		"label": "Mazowieckie, Pruszkowski, Regu\u0142y"
	},
	{
		"test": "abc", "value": 52338,
		"label": "Mazowieckie, Legionowski, Rembelszczyzna"
	},
	{
		"test": "abc", "value": 3482,
		"label": "Zachodniopomorskie, Gryficki, Rewal"
	},
	{
		"test": "abc", "value": 1209,
		"label": "Wielkopolskie, Pleszewski, Robak\u00f3w"
	},
	{
		"test": "abc", "value": 22215,
		"label": "Wielkopolskie, Pozna\u0144ski, Robakowo"
	},
	{
		"test": "abc", "value": 17972,
		"label": "Wielkopolskie, Pozna\u0144ski, Rogalin"
	},
	{
		"test": "abc", "value": 42767,
		"label": "Zachodniopomorskie, Gryficki, Rogowo"
	},
	{
		"test": "abc", "value": 16717,
		"label": "Zachodniopomorskie, Stargardzki, Rogowo"
	},
	{
		"test": "abc", "value": 52512,
		"label": "Mazowieckie, P\u0142ocki, Rogozino"
	},
	{
		"test": "abc", "value": 48500,
		"label": "Wielkopolskie, Pozna\u0144ski, Rokietnica"
	},
	{
		"test": "abc", "value": 52384,
		"label": "Pomorskie, Tczewski, Rokitki"
	},
	{
		"test": "abc", "value": 23959,
		"label": "Pomorskie, Gda\u0144ski, Rokitnica"
	},
	{
		"test": "abc", "value": 52704,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Rosnowo"
	},
	{
		"test": "abc", "value": 52705,
		"label": "Wielkopolskie, Pozna\u0144ski, Rosnowo"
	},
	{
		"test": "abc", "value": 589,
		"label": "Pomorskie, Gda\u0144ski, Rotmanka"
	},
	{
		"test": "abc", "value": 936,
		"label": "Pomorskie, S\u0142upski, Rowy"
	},
	{
		"test": "abc", "value": 52429,
		"label": "Mazowieckie, Pruszkowski, Rozalin"
	},
	{
		"test": "abc", "value": 52295,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Rozgarty"
	},
	{
		"test": "abc", "value": 16881,
		"label": "Pomorskie, Gda\u0144ski, R\u00f3\u017cyny"
	},
	{
		"test": "abc", "value": 21300,
		"label": "Ma\u0142opolskie, Krakowski, Rudawa"
	},
	{
		"test": "abc", "value": 52465,
		"label": "Wielkopolskie, Pozna\u0144ski, Rumianek"
	},
	{
		"test": "abc", "value": 52300,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Ru\u015b"
	},
	{
		"test": "abc", "value": 17967,
		"label": "Mazowieckie, Pruszkowski, Rusiec"
	},
	{
		"test": "abc", "value": 52496,
		"label": "Ma\u0142opolskie, Krakowski, Rybna"
	},
	{
		"test": "abc", "value": 52393,
		"label": "Ma\u0142opolskie, Wadowicki, Rycz\u00f3w"
	},
	{
		"test": "abc", "value": 19992,
		"label": "Ma\u0142opolskie, Krakowski, Rz\u0105ska"
	},
	{
		"test": "abc", "value": 52789,
		"label": "Mazowieckie, Wyszkowski, Rz\u0105\u015bnik"
	},
	{
		"test": "abc", "value": 52530,
		"label": "Mazowieckie, Ostro\u0142\u0119cki, Rzeku\u0144"
	},
	{
		"test": "abc", "value": 34342,
		"label": "Mazowieckie, Grodziski, Sade Budy"
	},
	{
		"test": "abc", "value": 38585,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Sadk\u00f3w"
	},
	{
		"test": "abc", "value": 27725,
		"label": "Mazowieckie, Warszawski Zachodni, Sadowa"
	},
	{
		"test": "abc", "value": 43506,
		"label": "Wielkopolskie, Pozna\u0144ski, Sady"
	},
	{
		"test": "abc", "value": 11359,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Sarbinowo"
	},
	{
		"test": "abc", "value": 38155,
		"label": "\u0141\u00f3dzkie, \u0141aski, S\u0119dziejowice"
	},
	{
		"test": "abc", "value": 18184,
		"label": "Mazowieckie, Pruszkowski, S\u0119kocin Nowy"
	},
	{
		"test": "abc", "value": 52431,
		"label": "Mazowieckie, Sochaczewski, Seroki-Parcela"
	},
	{
		"test": "abc", "value": 52221,
		"label": "Zachodniopomorskie, Policki, Siad\u0142o Dolne"
	},
	{
		"test": "abc", "value": 52402,
		"label": "Mazowieckie, P\u0142o\u0144ski, Siedlin"
	},
	{
		"test": "abc", "value": 51550,
		"label": "Pomorskie, S\u0142upski, Siemianice"
	},
	{
		"test": "abc", "value": 10970,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, Sienna"
	},
	{
		"test": "abc", "value": 46611,
		"label": "Pomorskie, Kartuski, Sierakowice"
	},
	{
		"test": "abc", "value": 52463,
		"label": "Wielkopolskie, Pozna\u0144ski, Sieros\u0142aw"
	},
	{
		"test": "abc", "value": 52411,
		"label": "Mazowieckie, Grodziski, Siestrze\u0144"
	},
	{
		"test": "abc", "value": 52213,
		"label": "Zachodniopomorskie, Szczecinecki, Silnowo"
	},
	{
		"test": "abc", "value": 24542,
		"label": "Opolskie, Brzeski, Skarbimierz"
	},
	{
		"test": "abc", "value": 52444,
		"label": "Zachodniopomorskie, Policki, Skarbimierzyce"
	},
	{
		"test": "abc", "value": 52356,
		"label": "Ma\u0142opolskie, Krakowski, Skawina"
	},
	{
		"test": "abc", "value": 11676,
		"label": "Mazowieckie, Legionowski, Skierdy"
	},
	{
		"test": "abc", "value": 4215,
		"label": "Kujawsko-Pomorskie, Nakielski, Sk\u00f3rzewo"
	},
	{
		"test": "abc", "value": 2450,
		"label": "Wielkopolskie, Pozna\u0144ski, Sk\u00f3rzewo"
	},
	{
		"test": "abc", "value": 34270,
		"label": "Pomorskie, Gda\u0144ski, Skowarcz"
	},
	{
		"test": "abc", "value": 32338,
		"label": "Mazowieckie, Legionowski, Skrzeszew"
	},
	{
		"test": "abc", "value": 13636,
		"label": "Mazowieckie, Grodziski, Sku\u0142y"
	},
	{
		"test": "abc", "value": 52305,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Skwierzynka"
	},
	{
		"test": "abc", "value": 46478,
		"label": "Ma\u0142opolskie, Wielicki, \u015aledziejowice"
	},
	{
		"test": "abc", "value": 4654,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u015al\u0119za"
	},
	{
		"test": "abc", "value": 11377,
		"label": "Mazowieckie, Pruszkowski, S\u0142omin"
	},
	{
		"test": "abc", "value": 42993,
		"label": "Mazowieckie, P\u0142ocki, S\u0142upno"
	},
	{
		"test": "abc", "value": 41596,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, S\u0142upno"
	},
	{
		"test": "abc", "value": 52357,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Smolec"
	},
	{
		"test": "abc", "value": 28882,
		"label": "Mazowieckie, Otwocki, Sobienie Szlacheckie"
	},
	{
		"test": "abc", "value": 26262,
		"label": "Dolno\u015bl\u0105skie, Lw\u00f3wecki, Sobota"
	},
	{
		"test": "abc", "value": 49453,
		"label": "Mazowieckie, Piaseczy\u0144ski, Solec"
	},
	{
		"test": "abc", "value": 52547,
		"label": "Wielkopolskie, Ostrowski, So\u015bnie"
	},
	{
		"test": "abc", "value": 52504,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Spalice"
	},
	{
		"test": "abc", "value": 52360,
		"label": "Mazowieckie, Legionowski, Stanis\u0142aw\u00f3w Drugi"
	},
	{
		"test": "abc", "value": 52350,
		"label": "Mazowieckie, Legionowski, Stanis\u0142aw\u00f3w Pierwszy"
	},
	{
		"test": "abc", "value": 52218,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Stanisz\u00f3w"
	},
	{
		"test": "abc", "value": 37859,
		"label": "Mazowieckie, Piaseczy\u0144ski, Stara Iwiczna"
	},
	{
		"test": "abc", "value": 52398,
		"label": "Mazowieckie, Pruszkowski, Stara Wie\u015b"
	},
	{
		"test": "abc", "value": 21611,
		"label": "Mazowieckie, Warszawski Zachodni, Stare Babice"
	},
	{
		"test": "abc", "value": 52552,
		"label": "Mazowieckie, Nowodworski, Stare Grochale"
	},
	{
		"test": "abc", "value": 15424,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Starowa G\u00f3ra"
	},
	{
		"test": "abc", "value": 22561,
		"label": "Pomorskie, Nowodworski, Stegna"
	},
	{
		"test": "abc", "value": 49040,
		"label": "Mazowieckie, Mi\u0144ski, Stojad\u0142a"
	},
	{
		"test": "abc", "value": 39808,
		"label": "Pomorskie, Gda\u0144ski, Straszyn"
	},
	{
		"test": "abc", "value": 52593,
		"label": "Mazowieckie, P\u0142ocki, Str\u00f3\u017cewko"
	},
	{
		"test": "abc", "value": 20144,
		"label": "Ma\u0142opolskie, Wielicki, Strumiany"
	},
	{
		"test": "abc", "value": 52345,
		"label": "Mazowieckie, Warszawski Zachodni, Strzykuly"
	},
	{
		"test": "abc", "value": 21888,
		"label": "Pomorskie, Pucki, Suchy Dw\u00f3r"
	},
	{
		"test": "abc", "value": 16085,
		"label": "Wielkopolskie, Pozna\u0144ski, Suchy Las"
	},
	{
		"test": "abc", "value": 52351,
		"label": "Ma\u0142opolskie, Wielicki, Su\u0142k\u00f3w"
	},
	{
		"test": "abc", "value": 16272,
		"label": "Pomorskie, Pucki, Swarzewo"
	},
	{
		"test": "abc", "value": 52419,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski, \u015awierklaniec"
	},
	{
		"test": "abc", "value": 6424,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u015awi\u0119ta Katarzyna"
	},
	{
		"test": "abc", "value": 35566,
		"label": "Podkarpackie, Rzeszowski, \u015awilcza"
	},
	{
		"test": "abc", "value": 52383,
		"label": "Mazowieckie, Grodziski, Szcz\u0119sne"
	},
	{
		"test": "abc", "value": 859,
		"label": "Wielkopolskie, Szamotulski, Szczuczyn"
	},
	{
		"test": "abc", "value": 52336,
		"label": "Wielkopolskie, Pozna\u0144ski, Szczytniki"
	},
	{
		"test": "abc", "value": 39179,
		"label": "Mazowieckie, Warszawski Zachodni, Szeligi"
	},
	{
		"test": "abc", "value": 32934,
		"label": "Pomorskie, Wejherowski, Szemud"
	},
	{
		"test": "abc", "value": 52340,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski, Szklary G\u00f3rne"
	},
	{
		"test": "abc", "value": 52518,
		"label": "Pomorskie, Kartuski, Sznurki"
	},
	{
		"test": "abc", "value": 15233,
		"label": "Wielkopolskie, Pozna\u0144ski, Szreniawa"
	},
	{
		"test": "abc", "value": 46812,
		"label": "Pomorskie, Nowodworski, Sztutowo"
	},
	{
		"test": "abc", "value": 52426,
		"label": "Wielkopolskie, Pilski, Szyd\u0142owo"
	},
	{
		"test": "abc", "value": 52234,
		"label": "Pomorskie, Kartuski, Szymbark"
	},
	{
		"test": "abc", "value": 52823,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Tacz\u00f3w Wielki"
	},
	{
		"test": "abc", "value": 20502,
		"label": "Wielkopolskie, Pozna\u0144ski, Tarnowo Podg\u00f3rne"
	},
	{
		"test": "abc", "value": 39907,
		"label": "Pomorskie, Kartuski, Tokary"
	},
	{
		"test": "abc", "value": 50027,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Tomaszkowo"
	},
	{
		"test": "abc", "value": 26253,
		"label": "Podkarpackie, Rzeszowski, Trzebownisko"
	},
	{
		"test": "abc", "value": 15812,
		"label": "Pomorskie, Kartuski, Tuchom"
	},
	{
		"test": "abc", "value": 32745,
		"label": "Wielkopolskie, Pozna\u0144ski, Tulce"
	},
	{
		"test": "abc", "value": 52231,
		"label": "Lubelskie, Lubelski, Turka"
	},
	{
		"test": "abc", "value": 29424,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Tyniec Ma\u0142y"
	},
	{
		"test": "abc", "value": 41680,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Unie\u015bcie"
	},
	{
		"test": "abc", "value": 13355,
		"label": "Mazowieckie, Piaseczy\u0144ski, Ustan\u00f3w"
	},
	{
		"test": "abc", "value": 34561,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Ustronie Morskie"
	},
	{
		"test": "abc", "value": 52371,
		"label": "Wielkopolskie, W\u0105growiecki, W\u0105growiec"
	},
	{
		"test": "abc", "value": 50953,
		"label": "Mazowieckie, Pruszkowski, Walend\u00f3w"
	},
	{
		"test": "abc", "value": 46852,
		"label": "Mazowieckie, Otwocki, Warszawice"
	},
	{
		"test": "abc", "value": 37521,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Warszowice"
	},
	{
		"test": "abc", "value": 44745,
		"label": "Zachodniopomorskie, Policki, Warzymice"
	},
	{
		"test": "abc", "value": 27803,
		"label": "Ma\u0142opolskie, Krakowski, W\u0119grzce"
	},
	{
		"test": "abc", "value": 7529,
		"label": "Podkarpackie, Leski, Wetlina"
	},
	{
		"test": "abc", "value": 2743,
		"label": "Mazowieckie, Otwocki, Wi\u0105zowna"
	},
	{
		"test": "abc", "value": 47618,
		"label": "Ma\u0142opolskie, Krakowski, Wi\u0119ckowice"
	},
	{
		"test": "abc", "value": 52359,
		"label": "Mazowieckie, Legionowski, Wieliszew"
	},
	{
		"test": "abc", "value": 52377,
		"label": "Ma\u0142opolskie, Krakowski, Wielka Wie\u015b"
	},
	{
		"test": "abc", "value": 52536,
		"label": "\u015al\u0105skie, Cz\u0119stochowski, Wierzchowisko"
	},
	{
		"test": "abc", "value": 52200,
		"label": "Kujawsko-Pomorskie, Bydgoski, Wilcze"
	},
	{
		"test": "abc", "value": 29203,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wilczyce"
	},
	{
		"test": "abc", "value": 52239,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, Wilkszyn"
	},
	{
		"test": "abc", "value": 29287,
		"label": "Wielkopolskie, Pozna\u0144ski, Wiry"
	},
	{
		"test": "abc", "value": 52315,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Wi\u015bniowa G\u00f3ra"
	},
	{
		"test": "abc", "value": 13603,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Wisznia Ma\u0142a"
	},
	{
		"test": "abc", "value": 46502,
		"label": "Mazowieckie, Piaseczy\u0144ski, W\u0142adys\u0142aw\u00f3w"
	},
	{
		"test": "abc", "value": 6035,
		"label": "Ma\u0142opolskie, Krakowski, W\u0142osa\u0144"
	},
	{
		"test": "abc", "value": 52385,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wojkowice"
	},
	{
		"test": "abc", "value": 52220,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wojnowice"
	},
	{
		"test": "abc", "value": 14748,
		"label": "Mazowieckie, Piaseczy\u0144ski, Wola Mrokowska"
	},
	{
		"test": "abc", "value": 6924,
		"label": "Zachodniopomorskie, Policki, Wo\u0142czkowo"
	},
	{
		"test": "abc", "value": 23803,
		"label": "Mazowieckie, Warszawski Zachodni, Wolica"
	},
	{
		"test": "abc", "value": 51237,
		"label": "Mazowieckie, Pruszkowski, Wolica"
	},
	{
		"test": "abc", "value": 44464,
		"label": "Mazowieckie, Piaseczy\u0144ski, W\u00f3lka Kosowska"
	},
	{
		"test": "abc", "value": 47782,
		"label": "Mazowieckie, Mi\u0144ski, W\u00f3lka Mi\u0144ska"
	},
	{
		"test": "abc", "value": 52442,
		"label": "Podkarpackie, Rzeszowski, W\u00f3lka Podle\u015bna"
	},
	{
		"test": "abc", "value": 52537,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Wrzosowo"
	},
	{
		"test": "abc", "value": 15665,
		"label": "Wielkopolskie, Pozna\u0144ski, Wysogotowo"
	},
	{
		"test": "abc", "value": 14088,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wysoka"
	},
	{
		"test": "abc", "value": 52664,
		"label": "Podkarpackie, Wy\u017cne"
	},
	{
		"test": "abc", "value": 52331,
		"label": "Ma\u0142opolskie, Wielicki, Zabawa"
	},
	{
		"test": "abc", "value": 29492,
		"label": "Mazowieckie, Grodziski, \u017babia Wola"
	},
	{
		"test": "abc", "value": 31832,
		"label": "Ma\u0142opolskie, Krakowski, Zabierz\u00f3w"
	},
	{
		"test": "abc", "value": 13351,
		"label": "Lubuskie, Zielonog\u00f3rski, Zab\u00f3r"
	},
	{
		"test": "abc", "value": 33346,
		"label": "Mazowieckie, Warszawski Zachodni, Zabor\u00f3wek"
	},
	{
		"test": "abc", "value": 52280,
		"label": "Ma\u0142opolskie, Wielicki, Zakrzowiec"
	},
	{
		"test": "abc", "value": 27018,
		"label": "Wielkopolskie, Pozna\u0144ski, Zalasewo"
	},
	{
		"test": "abc", "value": 17216,
		"label": "Mazowieckie, Piaseczy\u0144ski, Zalesie G\u00f3rne"
	},
	{
		"test": "abc", "value": 17703,
		"label": "Mazowieckie, Piaseczy\u0144ski, Zamienie"
	},
	{
		"test": "abc", "value": 20796,
		"label": "Mazowieckie, Mi\u0144ski, Zamienie"
	},
	{
		"test": "abc", "value": 25518,
		"label": "Mazowieckie, Otwocki, \u017ban\u0119cin"
	},
	{
		"test": "abc", "value": 26661,
		"label": "Wielkopolskie, \u015aredzki, Zaniemy\u015bl"
	},
	{
		"test": "abc", "value": 46889,
		"label": "Podlaskie, Bia\u0142ostocki, Za\u015bcianki"
	},
	{
		"test": "abc", "value": 52685,
		"label": "Wielkopolskie, \u015aremski, Zbrudzewo"
	},
	{
		"test": "abc", "value": 16196,
		"label": "Zachodniopomorskie, Gryfi\u0144ski, \u017belewo"
	},
	{
		"test": "abc", "value": 52281,
		"label": "Ma\u0142opolskie, Krakowski, \u017berkowice"
	},
	{
		"test": "abc", "value": 11887,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u017berniki Ma\u0142e"
	},
	{
		"test": "abc", "value": 52369,
		"label": "Mazowieckie, Piaseczy\u0144ski, Zgorza\u0142a"
	},
	{
		"test": "abc", "value": 52327,
		"label": "Kujawsko-Pomorskie, Bydgoski, Zielonka"
	},
	{
		"test": "abc", "value": 2350,
		"label": "Mazowieckie, Zwole\u0144ski, Zielonka Nowa"
	},
	{
		"test": "abc", "value": 876,
		"label": "Ma\u0142opolskie, Krakowski, Zielonki"
	},
	{
		"test": "abc", "value": 42318,
		"label": "Wielkopolskie, Kaliski, Z\u0142otniki"
	},
	{
		"test": "abc", "value": 52325,
		"label": "Podkarpackie, Mielecki, Z\u0142otniki"
	},
	{
		"test": "abc", "value": 22698,
		"label": "Wielkopolskie, Pozna\u0144ski, Z\u0142otniki"
	},
	{
		"test": "abc", "value": 40262,
		"label": "Podlaskie, Bia\u0142ostocki, Z\u0142otniki"
	},
	{
		"test": "abc", "value": 34935,
		"label": "Dolno\u015bl\u0105skie, Luba\u0144ski, Z\u0142otniki Luba\u0144skie"
	},
	{
		"test": "abc", "value": 45748,
		"label": "Mazowieckie, Pruszkowski, \u017b\u00f3\u0142win"
	},
	{
		"test": "abc", "value": 52186,
		"label": "Pomorskie, Gda\u0144sk, Anio\u0142ki"
	},
	{
		"test": "abc", "value": 52488,
		"label": "Pomorskie, Gdynia, Babie Do\u0142y"
	},
	{
		"test": "abc", "value": 52133,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, Ba\u0142uty"
	},
	{
		"test": "abc", "value": 38720,
		"label": "Mazowieckie, Warszawa, Bemowo"
	},
	{
		"test": "abc", "value": 42663,
		"label": "Mazowieckie, Warszawa, Bia\u0142o\u0142\u0119ka"
	},
	{
		"test": "abc", "value": 28904,
		"label": "Mazowieckie, Warszawa, Bielany"
	},
	{
		"test": "abc", "value": 52201,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Bie\u0144czyce"
	},
	{
		"test": "abc", "value": 52137,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Bie\u017can\u00f3w-Prokocim"
	},
	{
		"test": "abc", "value": 52188,
		"label": "Pomorskie, Gda\u0144sk, Br\u0119towo"
	},
	{
		"test": "abc", "value": 52127,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Bronowice"
	},
	{
		"test": "abc", "value": 52202,
		"label": "Pomorskie, Gda\u0144sk, Brze\u017ano"
	},
	{
		"test": "abc", "value": 52114,
		"label": "Pomorskie, Gda\u0144sk, Che\u0142m I Gda\u0144sk Po\u0142udnie"
	},
	{
		"test": "abc", "value": 52169,
		"label": "Pomorskie, Gdynia, Chwarzno-Wiczlino"
	},
	{
		"test": "abc", "value": 52184,
		"label": "Pomorskie, Gdynia, Chylonia"
	},
	{
		"test": "abc", "value": 52187,
		"label": "Pomorskie, Gdynia, Cisowa"
	},
	{
		"test": "abc", "value": 52138,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Czy\u017cyny"
	},
	{
		"test": "abc", "value": 52162,
		"label": "Pomorskie, Gdynia, D\u0105browa"
	},
	{
		"test": "abc", "value": 52124,
		"label": "Ma\u0142opolskie, Krak\u00f3w, D\u0119bniki"
	},
	{
		"test": "abc", "value": 52179,
		"label": "Pomorskie, Sopot, Dolny Sopot"
	},
	{
		"test": "abc", "value": 52489,
		"label": "Pomorskie, Gdynia, Dzia\u0142ki Le\u015bne"
	},
	{
		"test": "abc", "value": 52122,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Fabryczna"
	},
	{
		"test": "abc", "value": 52167,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, G\u00f3rna"
	},
	{
		"test": "abc", "value": 52183,
		"label": "Pomorskie, Sopot, G\u00f3rny Sopot"
	},
	{
		"test": "abc", "value": 52180,
		"label": "Pomorskie, Gdynia, Grab\u00f3wek"
	},
	{
		"test": "abc", "value": 52118,
		"label": "Wielkopolskie, Pozna\u0144, Grunwald"
	},
	{
		"test": "abc", "value": 52175,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Grzeg\u00f3rzki"
	},
	{
		"test": "abc", "value": 52205,
		"label": "Pomorskie, Gda\u0144sk, Jasie\u0144"
	},
	{
		"test": "abc", "value": 52119,
		"label": "Wielkopolskie, Pozna\u0144, Je\u017cyce"
	},
	{
		"test": "abc", "value": 52490,
		"label": "Pomorskie, Gdynia, Kamienna G\u00f3ra"
	},
	{
		"test": "abc", "value": 52190,
		"label": "Pomorskie, Sopot, Karlikowo"
	},
	{
		"test": "abc", "value": 52328,
		"label": "Pomorskie, Gdynia, Karwiny"
	},
	{
		"test": "abc", "value": 52148,
		"label": "Pomorskie, Gda\u0144sk, Kokoszki"
	},
	{
		"test": "abc", "value": 52476,
		"label": "Pomorskie, Gda\u0144sk, Krakowiec-G\u00f3rki Zachodnie"
	},
	{
		"test": "abc", "value": 52123,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Krowodrza"
	},
	{
		"test": "abc", "value": 52121,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Krzyki"
	},
	{
		"test": "abc", "value": 52150,
		"label": "Ma\u0142opolskie, Krak\u00f3w, \u0141agiewniki"
	},
	{
		"test": "abc", "value": 52491,
		"label": "Pomorskie, Gdynia, Leszczynki"
	},
	{
		"test": "abc", "value": 52477,
		"label": "Pomorskie, Gda\u0144sk, Letnica"
	},
	{
		"test": "abc", "value": 52134,
		"label": "Pomorskie, Gdynia, Ma\u0142y Kack"
	},
	{
		"test": "abc", "value": 52173,
		"label": "Pomorskie, Gda\u0144sk, Matarnia"
	},
	{
		"test": "abc", "value": 52141,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Mistrzejowice"
	},
	{
		"test": "abc", "value": 52478,
		"label": "Pomorskie, Gda\u0144sk, M\u0142yniska"
	},
	{
		"test": "abc", "value": 20284,
		"label": "Mazowieckie, Warszawa, Mokot\u00f3w"
	},
	{
		"test": "abc", "value": 52126,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Nowa Huta"
	},
	{
		"test": "abc", "value": 52128,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Miasto"
	},
	{
		"test": "abc", "value": 52479,
		"label": "Pomorskie, Gda\u0144sk, Nowy Port"
	},
	{
		"test": "abc", "value": 52163,
		"label": "Pomorskie, Gdynia, Ob\u0142u\u017ce"
	},
	{
		"test": "abc", "value": 38687,
		"label": "Mazowieckie, Warszawa, Ochota"
	},
	{
		"test": "abc", "value": 52135,
		"label": "Pomorskie, Gdynia, Oksywie"
	},
	{
		"test": "abc", "value": 52181,
		"label": "Pomorskie, Gda\u0144sk, Oliwa"
	},
	{
		"test": "abc", "value": 52480,
		"label": "Pomorskie, Gda\u0144sk, Olszynka"
	},
	{
		"test": "abc", "value": 52182,
		"label": "Pomorskie, Gdynia, Or\u0142owo"
	},
	{
		"test": "abc", "value": 52155,
		"label": "Pomorskie, Gda\u0144sk, Orunia-\u015aw. Wojciech-Lipce"
	},
	{
		"test": "abc", "value": 52115,
		"label": "Pomorskie, Gda\u0144sk, Osowa"
	},
	{
		"test": "abc", "value": 52131,
		"label": "Pomorskie, Gda\u0144sk, Piecki-Migowo"
	},
	{
		"test": "abc", "value": 52142,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Podg\u00f3rze"
	},
	{
		"test": "abc", "value": 52139,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Podg\u00f3rze Duchackie"
	},
	{
		"test": "abc", "value": 52160,
		"label": "Pomorskie, Gdynia, Pog\u00f3rze"
	},
	{
		"test": "abc", "value": 52164,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, Polesie"
	},
	{
		"test": "abc", "value": 52147,
		"label": "Zachodniopomorskie, Szczecin, P\u00f3\u0142noc"
	},
	{
		"test": "abc", "value": 52112,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Pr\u0105dnik Bia\u0142y"
	},
	{
		"test": "abc", "value": 52130,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Pr\u0105dnik Czerwony"
	},
	{
		"test": "abc", "value": 36957,
		"label": "Mazowieckie, Warszawa, Praga-P\u00f3\u0142noc"
	},
	{
		"test": "abc", "value": 51145,
		"label": "Mazowieckie, Warszawa, Praga-Po\u0142udnie"
	},
	{
		"test": "abc", "value": 52140,
		"label": "Zachodniopomorskie, Szczecin, Prawobrze\u017ce"
	},
	{
		"test": "abc", "value": 52481,
		"label": "Pomorskie, Gda\u0144sk, Przer\u00f3bka"
	},
	{
		"test": "abc", "value": 52185,
		"label": "Pomorskie, Gda\u0144sk, Przymorze Ma\u0142e"
	},
	{
		"test": "abc", "value": 52177,
		"label": "Pomorskie, Gda\u0144sk, Przymorze Wielkie"
	},
	{
		"test": "abc", "value": 52156,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Psie Pole"
	},
	{
		"test": "abc", "value": 52270,
		"label": "Pomorskie, Gdynia, Pustki Cisowskie-Demptowo"
	},
	{
		"test": "abc", "value": 52178,
		"label": "Pomorskie, Gdynia, Red\u0142owo"
	},
	{
		"test": "abc", "value": 22883,
		"label": "Mazowieckie, Warszawa, Rembert\u00f3w"
	},
	{
		"test": "abc", "value": 52482,
		"label": "Pomorskie, Gda\u0144sk, Rudniki"
	},
	{
		"test": "abc", "value": 52192,
		"label": "Pomorskie, Gda\u0144sk, Siedlce"
	},
	{
		"test": "abc", "value": 50052,
		"label": "Mazowieckie, Warszawa, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"test": "abc", "value": 52158,
		"label": "Zachodniopomorskie, Szczecin, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"test": "abc", "value": 52157,
		"label": "Pomorskie, Gdynia, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"test": "abc", "value": 52174,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"test": "abc", "value": 52113,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"test": "abc", "value": 52166,
		"label": "Pomorskie, Gda\u0144sk, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"test": "abc", "value": 52116,
		"label": "Wielkopolskie, Pozna\u0144, Stare Miasto"
	},
	{
		"test": "abc", "value": 52111,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Stare Miasto"
	},
	{
		"test": "abc", "value": 52129,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Stare Miasto"
	},
	{
		"test": "abc", "value": 52303,
		"label": "Pomorskie, Gda\u0144sk, Stogi"
	},
	{
		"test": "abc", "value": 52483,
		"label": "Pomorskie, Gda\u0144sk, Strzy\u017ca"
	},
	{
		"test": "abc", "value": 52189,
		"label": "Pomorskie, Gda\u0144sk, Suchanino"
	},
	{
		"test": "abc", "value": 52171,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Swoszowice"
	},
	{
		"test": "abc", "value": 32953,
		"label": "Mazowieckie, Warszawa, Targ\u00f3wek"
	},
	{
		"test": "abc", "value": 52484,
		"label": "Pomorskie, Gda\u0144sk, Uje\u015bcisko-\u0141ostowice"
	},
	{
		"test": "abc", "value": 24305,
		"label": "Mazowieckie, Warszawa, Ursus"
	},
	{
		"test": "abc", "value": 3766,
		"label": "Mazowieckie, Warszawa, Ursyn\u00f3w"
	},
	{
		"test": "abc", "value": 52485,
		"label": "Pomorskie, Gda\u0144sk, VII Dw\u00f3r"
	},
	{
		"test": "abc", "value": 30707,
		"label": "Mazowieckie, Warszawa, Wawer"
	},
	{
		"test": "abc", "value": 37544,
		"label": "Mazowieckie, Warszawa, Weso\u0142a"
	},
	{
		"test": "abc", "value": 52149,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, Widzew"
	},
	{
		"test": "abc", "value": 52132,
		"label": "Pomorskie, Gdynia, Wielki Kack"
	},
	{
		"test": "abc", "value": 1320,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w"
	},
	{
		"test": "abc", "value": 52159,
		"label": "Wielkopolskie, Pozna\u0144, Wilda"
	},
	{
		"test": "abc", "value": 52492,
		"label": "Pomorskie, Gdynia, Witomino Le\u015bnicz\u00f3wka"
	},
	{
		"test": "abc", "value": 52151,
		"label": "Pomorskie, Gdynia, Witomino-Radiostacja"
	},
	{
		"test": "abc", "value": 3645,
		"label": "Mazowieckie, Warszawa, W\u0142ochy"
	},
	{
		"test": "abc", "value": 32638,
		"label": "Mazowieckie, Warszawa, Wola"
	},
	{
		"test": "abc", "value": 52170,
		"label": "Pomorskie, Gda\u0144sk, Wrzeszcz"
	},
	{
		"test": "abc", "value": 52486,
		"label": "Pomorskie, Gda\u0144sk, Wyspa Sobieszewska"
	},
	{
		"test": "abc", "value": 52120,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Wzg\u00f3rza Krzes\u0142awickie"
	},
	{
		"test": "abc", "value": 52487,
		"label": "Pomorskie, Gda\u0144sk, Wzg\u00f3rze Mickiewicza"
	},
	{
		"test": "abc", "value": 52493,
		"label": "Pomorskie, Gdynia, Wzg\u00f3rze \u015aw. Maksymiliana"
	},
	{
		"test": "abc", "value": 52168,
		"label": "Pomorskie, Gda\u0144sk, \u017babianka-Wejhera-Jelitkowo-Tysi\u0105clecia"
	},
	{
		"test": "abc", "value": 52136,
		"label": "Zachodniopomorskie, Szczecin, Zach\u00f3d"
	},
	{
		"test": "abc", "value": 52165,
		"label": "Pomorskie, Gda\u0144sk, Zaspa-M\u0142yniec"
	},
	{
		"test": "abc", "value": 52154,
		"label": "Pomorskie, Gda\u0144sk, Zaspa-Rozstaje"
	},
	{
		"test": "abc", "value": 52143,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic P\u00f3\u0142nocnych"
	},
	{
		"test": "abc", "value": 52144,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic Po\u0142udniowych"
	},
	{
		"test": "abc", "value": 52161,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic \u015ar\u00f3dmiejskich"
	},
	{
		"test": "abc", "value": 52475,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic Wschodnich"
	},
	{
		"test": "abc", "value": 52152,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic Zachodnich"
	},
	{
		"test": "abc", "value": 36021,
		"label": "Mazowieckie, Warszawa, \u017boliborz"
	},
	{
		"test": "abc", "value": 52117,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Zwierzyniec"
	},
	{
		"test": "abc", "value": 52737,
		"label": "Mazowieckie, Warszawa, Aleksandr\u00f3w"
	},
	{
		"test": "abc", "value": 52733,
		"label": "Mazowieckie, Warszawa, Anin"
	},
	{
		"test": "abc", "value": 52703,
		"label": "Wielkopolskie, Pozna\u0144, Antoninek-Zieliniec-Kobylepole"
	},
	{
		"test": "abc", "value": 52568,
		"label": "Mazowieckie, Warszawa, August\u00f3wka"
	},
	{
		"test": "abc", "value": 52762,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Bartoszowice"
	},
	{
		"test": "abc", "value": 52663,
		"label": "Mazowieckie, Warszawa, Bemowo Lotnisko"
	},
	{
		"test": "abc", "value": 52691,
		"label": "Mazowieckie, Warszawa, Bia\u0142o\u0142\u0119ka Dworska"
	},
	{
		"test": "abc", "value": 52763,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Bie\u0144kowice"
	},
	{
		"test": "abc", "value": 52764,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Bierdzany"
	},
	{
		"test": "abc", "value": 52765,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Biskupin"
	},
	{
		"test": "abc", "value": 52727,
		"label": "Mazowieckie, Warszawa, B\u0142onia Wilanowskie"
	},
	{
		"test": "abc", "value": 52660,
		"label": "Mazowieckie, Warszawa, Boernerowo"
	},
	{
		"test": "abc", "value": 52766,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Borek"
	},
	{
		"test": "abc", "value": 52767,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Broch\u00f3w"
	},
	{
		"test": "abc", "value": 52597,
		"label": "Mazowieckie, Warszawa, Br\u00f3dno"
	},
	{
		"test": "abc", "value": 52598,
		"label": "Mazowieckie, Warszawa, Br\u00f3dno Podgrodzie"
	},
	{
		"test": "abc", "value": 52683,
		"label": "Mazowieckie, Warszawa, Brzeziny"
	},
	{
		"test": "abc", "value": 52630,
		"label": "Wielkopolskie, Pozna\u0144, Chartowo"
	},
	{
		"test": "abc", "value": 52613,
		"label": "Mazowieckie, Warszawa, Chomicz\u00f3wka"
	},
	{
		"test": "abc", "value": 52676,
		"label": "Mazowieckie, Warszawa, Choszcz\u00f3wka"
	},
	{
		"test": "abc", "value": 52669,
		"label": "Mazowieckie, Warszawa, Chrzan\u00f3w"
	},
	{
		"test": "abc", "value": 52696,
		"label": "Mazowieckie, Warszawa, Czechowice"
	},
	{
		"test": "abc", "value": 52565,
		"label": "Mazowieckie, Warszawa, Czerniak\u00f3w"
	},
	{
		"test": "abc", "value": 52653,
		"label": "Mazowieckie, Warszawa, Czyste"
	},
	{
		"test": "abc", "value": 52768,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, D\u0105bie"
	},
	{
		"test": "abc", "value": 52586,
		"label": "Mazowieckie, Warszawa, D\u0105br\u00f3wka"
	},
	{
		"test": "abc", "value": 52675,
		"label": "Mazowieckie, Warszawa, D\u0105br\u00f3wka Szlachecka"
	},
	{
		"test": "abc", "value": 52601,
		"label": "Mazowieckie, Warszawa, Elsner\u00f3w"
	},
	{
		"test": "abc", "value": 52619,
		"label": "Wielkopolskie, Pozna\u0144, Fabianowo-Kotowo"
	},
	{
		"test": "abc", "value": 52736,
		"label": "Mazowieckie, Warszawa, Falenica"
	},
	{
		"test": "abc", "value": 52572,
		"label": "Mazowieckie, Warszawa, Filtry"
	},
	{
		"test": "abc", "value": 52665,
		"label": "Mazowieckie, Warszawa, Fort Bema"
	},
	{
		"test": "abc", "value": 52661,
		"label": "Mazowieckie, Warszawa, Fort Radiowo"
	},
	{
		"test": "abc", "value": 52771,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, G\u0105d\u00f3w Ma\u0142y"
	},
	{
		"test": "abc", "value": 52769,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Gaj"
	},
	{
		"test": "abc", "value": 52770,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Gajowice"
	},
	{
		"test": "abc", "value": 52622,
		"label": "Wielkopolskie, Pozna\u0144, G\u0142\u00f3wna"
	},
	{
		"test": "abc", "value": 52686,
		"label": "Wielkopolskie, Pozna\u0144, G\u0142uszyna"
	},
	{
		"test": "abc", "value": 52714,
		"label": "Mazowieckie, Warszawa, Goc\u0142aw"
	},
	{
		"test": "abc", "value": 52746,
		"label": "Mazowieckie, Warszawa, Goc\u0142awek"
	},
	{
		"test": "abc", "value": 52693,
		"label": "Mazowieckie, Warszawa, Go\u0142\u0105bki"
	},
	{
		"test": "abc", "value": 52666,
		"label": "Mazowieckie, Warszawa, G\u00f3rce"
	},
	{
		"test": "abc", "value": 52631,
		"label": "Wielkopolskie, Pozna\u0144, G\u00f3rczyn"
	},
	{
		"test": "abc", "value": 52583,
		"label": "Mazowieckie, Warszawa, Grab\u00f3w"
	},
	{
		"test": "abc", "value": 52745,
		"label": "Mazowieckie, Warszawa, Groch\u00f3w"
	},
	{
		"test": "abc", "value": 52692,
		"label": "Mazowieckie, Warszawa, Grodzisk"
	},
	{
		"test": "abc", "value": 52750,
		"label": "Mazowieckie, Warszawa, Grosz\u00f3wka"
	},
	{
		"test": "abc", "value": 52662,
		"label": "Mazowieckie, Warszawa, Groty"
	},
	{
		"test": "abc", "value": 52637,
		"label": "Wielkopolskie, Pozna\u0144, Grunwald P\u00f3\u0142noc"
	},
	{
		"test": "abc", "value": 52639,
		"label": "Wielkopolskie, Pozna\u0144, Grunwald Po\u0142udnie"
	},
	{
		"test": "abc", "value": 52678,
		"label": "Mazowieckie, Warszawa, Henryk\u00f3w"
	},
	{
		"test": "abc", "value": 52772,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Huby"
	},
	{
		"test": "abc", "value": 52609,
		"label": "Mazowieckie, Warszawa, Huta"
	},
	{
		"test": "abc", "value": 52773,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Jagodno"
	},
	{
		"test": "abc", "value": 52706,
		"label": "Wielkopolskie, Pozna\u0144, Jana III Sobieskiego i Marysie\u0144ki"
	},
	{
		"test": "abc", "value": 52774,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Jarno\u0142t\u00f3w"
	},
	{
		"test": "abc", "value": 52667,
		"label": "Mazowieckie, Warszawa, Jelonki P\u00f3\u0142nocne"
	},
	{
		"test": "abc", "value": 52668,
		"label": "Mazowieckie, Warszawa, Jelonki Po\u0142udniowe"
	},
	{
		"test": "abc", "value": 52775,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Jerzmanowo"
	},
	{
		"test": "abc", "value": 52584,
		"label": "Mazowieckie, Warszawa, Jeziorki P\u00f3\u0142nocne"
	},
	{
		"test": "abc", "value": 52585,
		"label": "Mazowieckie, Warszawa, Jeziorki Po\u0142udniowe"
	},
	{
		"test": "abc", "value": 52629,
		"label": "Wielkopolskie, Pozna\u0144, Junikowo"
	},
	{
		"test": "abc", "value": 52594,
		"label": "Mazowieckie, Warszawa, Kabaty"
	},
	{
		"test": "abc", "value": 52713,
		"label": "Mazowieckie, Warszawa, Kamionek"
	},
	{
		"test": "abc", "value": 52776,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kar\u0142owice"
	},
	{
		"test": "abc", "value": 52577,
		"label": "Mazowieckie, Warszawa, Kaw\u0119czyn-Wygoda"
	},
	{
		"test": "abc", "value": 52730,
		"label": "Mazowieckie, Warszawa, K\u0119pa Zawadowska"
	},
	{
		"test": "abc", "value": 52604,
		"label": "Wielkopolskie, Pozna\u0144, Kiekrz"
	},
	{
		"test": "abc", "value": 52777,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Klecina"
	},
	{
		"test": "abc", "value": 52778,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kleczk\u00f3w"
	},
	{
		"test": "abc", "value": 52779,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, K\u0142okoczyce"
	},
	{
		"test": "abc", "value": 52684,
		"label": "Mazowieckie, Warszawa, Kobia\u0142ka"
	},
	{
		"test": "abc", "value": 52650,
		"label": "Mazowieckie, Warszawa, Ko\u0142o"
	},
	{
		"test": "abc", "value": 52780,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kowale"
	},
	{
		"test": "abc", "value": 52781,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kozan\u00f3w"
	},
	{
		"test": "abc", "value": 52709,
		"label": "Wielkopolskie, Pozna\u0144, Krzesiny-Pokrzywno-Garaszewo"
	},
	{
		"test": "abc", "value": 52610,
		"label": "Wielkopolskie, Pozna\u0144, Krzy\u017cowniki-Smochowice"
	},
	{
		"test": "abc", "value": 52560,
		"label": "Mazowieckie, Warszawa, Ksawer\u00f3w"
	},
	{
		"test": "abc", "value": 52783,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ksi\u0119\u017ce Ma\u0142e"
	},
	{
		"test": "abc", "value": 52784,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ksi\u0119\u017ce Wielkie"
	},
	{
		"test": "abc", "value": 52785,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ku\u017aniki"
	},
	{
		"test": "abc", "value": 52623,
		"label": "Wielkopolskie, Pozna\u0144, Kwiatowe"
	},
	{
		"test": "abc", "value": 52786,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Lamowice Stare"
	},
	{
		"test": "abc", "value": 52740,
		"label": "Mazowieckie, Warszawa, Las"
	},
	{
		"test": "abc", "value": 52614,
		"label": "Mazowieckie, Warszawa, Las Biela\u0144ski"
	},
	{
		"test": "abc", "value": 52595,
		"label": "Mazowieckie, Warszawa, Las Kabacki"
	},
	{
		"test": "abc", "value": 52615,
		"label": "Wielkopolskie, Pozna\u0144, \u0141awica"
	},
	{
		"test": "abc", "value": 52640,
		"label": "Wielkopolskie, Pozna\u0144, \u0141azarz"
	},
	{
		"test": "abc", "value": 52787,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Lesica"
	},
	{
		"test": "abc", "value": 52788,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Le\u015bnica"
	},
	{
		"test": "abc", "value": 52790,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Lipa Piotrowska"
	},
	{
		"test": "abc", "value": 52658,
		"label": "Mazowieckie, Warszawa, Lotnisko"
	},
	{
		"test": "abc", "value": 52791,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Marszowice"
	},
	{
		"test": "abc", "value": 52634,
		"label": "Mazowieckie, Warszawa, Marymont Kaskada"
	},
	{
		"test": "abc", "value": 52700,
		"label": "Mazowieckie, Warszawa, Marymont-Potok"
	},
	{
		"test": "abc", "value": 52635,
		"label": "Mazowieckie, Warszawa, Marymont Ruda"
	},
	{
		"test": "abc", "value": 52743,
		"label": "Mazowieckie, Warszawa, Marysin Wawerski"
	},
	{
		"test": "abc", "value": 52792,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ma\u015blice"
	},
	{
		"test": "abc", "value": 52732,
		"label": "Mazowieckie, Warszawa, Miedzeszyn"
	},
	{
		"test": "abc", "value": 52734,
		"label": "Mazowieckie, Warszawa, Mi\u0119dzylesie"
	},
	{
		"test": "abc", "value": 52657,
		"label": "Mazowieckie, Warszawa, Mir\u00f3w"
	},
	{
		"test": "abc", "value": 52605,
		"label": "Mazowieckie, Warszawa, M\u0142ociny"
	},
	{
		"test": "abc", "value": 52654,
		"label": "Mazowieckie, Warszawa, M\u0142yn\u00f3w"
	},
	{
		"test": "abc", "value": 52793,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Mokra"
	},
	{
		"test": "abc", "value": 52702,
		"label": "Wielkopolskie, Pozna\u0144, Morasko-Radojewo"
	},
	{
		"test": "abc", "value": 52794,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Muchob\u00f3r Ma\u0142y"
	},
	{
		"test": "abc", "value": 52642,
		"label": "Mazowieckie, Warszawa, Muran\u00f3w"
	},
	{
		"test": "abc", "value": 52795,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Nadodrze"
	},
	{
		"test": "abc", "value": 52739,
		"label": "Mazowieckie, Warszawa, Nadwi\u015ble"
	},
	{
		"test": "abc", "value": 52632,
		"label": "Wielkopolskie, Pozna\u0144, Naramowice"
	},
	{
		"test": "abc", "value": 52592,
		"label": "Mazowieckie, Warszawa, Natolin"
	},
	{
		"test": "abc", "value": 52695,
		"label": "Mazowieckie, Warszawa, Nied\u017awiadek"
	},
	{
		"test": "abc", "value": 52574,
		"label": "Mazowieckie, Warszawa, Nowa Praga"
	},
	{
		"test": "abc", "value": 52644,
		"label": "Mazowieckie, Warszawa, Nowe Miasto"
	},
	{
		"test": "abc", "value": 52688,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Winogrady P\u00f3\u0142noc"
	},
	{
		"test": "abc", "value": 52687,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Winogrady Po\u0142udnie"
	},
	{
		"test": "abc", "value": 52689,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Winogrady Wsch\u00f3d"
	},
	{
		"test": "abc", "value": 52716,
		"label": "Mazowieckie, Warszawa, Nowe W\u0142ochy"
	},
	{
		"test": "abc", "value": 52670,
		"label": "Mazowieckie, Warszawa, Nowodwory"
	},
	{
		"test": "abc", "value": 52656,
		"label": "Mazowieckie, Warszawa, Nowolipki"
	},
	{
		"test": "abc", "value": 52796,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Nowy Dw\u00f3r"
	},
	{
		"test": "abc", "value": 52578,
		"label": "Mazowieckie, Warszawa, Nowy Rembert\u00f3w"
	},
	{
		"test": "abc", "value": 52742,
		"label": "Mazowieckie, Warszawa, Nowy Wawer"
	},
	{
		"test": "abc", "value": 52652,
		"label": "Mazowieckie, Warszawa, Odolany"
	},
	{
		"test": "abc", "value": 52626,
		"label": "Wielkopolskie, Pozna\u0144, Ogrody"
	},
	{
		"test": "abc", "value": 52722,
		"label": "Mazowieckie, Warszawa, Ok\u0119cie"
	},
	{
		"test": "abc", "value": 52797,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, O\u0142bin"
	},
	{
		"test": "abc", "value": 52744,
		"label": "Mazowieckie, Warszawa, Olszynka Grochowska"
	},
	{
		"test": "abc", "value": 52798,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, O\u0142taszyn"
	},
	{
		"test": "abc", "value": 52720,
		"label": "Mazowieckie, Warszawa, Opacz Wielka"
	},
	{
		"test": "abc", "value": 52799,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Opatowice"
	},
	{
		"test": "abc", "value": 52800,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Opor\u00f3w"
	},
	{
		"test": "abc", "value": 52672,
		"label": "Wielkopolskie, Pozna\u0144, Osiedle Je\u017cyce"
	},
	{
		"test": "abc", "value": 52782,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Osiedle Krzyki"
	},
	{
		"test": "abc", "value": 52815,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Osiedle Psie Pole"
	},
	{
		"test": "abc", "value": 52671,
		"label": "Wielkopolskie, Pozna\u0144, Osiedle Stare Miasto"
	},
	{
		"test": "abc", "value": 52674,
		"label": "Wielkopolskie, Pozna\u0144, Osiedle Wilda"
	},
	{
		"test": "abc", "value": 52801,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Osobowice"
	},
	{
		"test": "abc", "value": 52753,
		"label": "Wielkopolskie, Pozna\u0144, Ostr\u00f3w Tumski-\u015ar\u00f3dka-Zawady-Komandoria"
	},
	{
		"test": "abc", "value": 52723,
		"label": "Mazowieckie, Warszawa, Paluch"
	},
	{
		"test": "abc", "value": 52802,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Partynice"
	},
	{
		"test": "abc", "value": 52803,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Paw\u0142owice"
	},
	{
		"test": "abc", "value": 52573,
		"label": "Mazowieckie, Warszawa, Pelcowizna"
	},
	{
		"test": "abc", "value": 52628,
		"label": "Mazowieckie, Warszawa, Piaski"
	},
	{
		"test": "abc", "value": 52618,
		"label": "Wielkopolskie, Pozna\u0144, Pi\u0105tkowo"
	},
	{
		"test": "abc", "value": 52804,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Pilczyce"
	},
	{
		"test": "abc", "value": 52807,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Plac Grunwaldzki"
	},
	{
		"test": "abc", "value": 52607,
		"label": "Mazowieckie, Warszawa, Plac\u00f3wka"
	},
	{
		"test": "abc", "value": 52752,
		"label": "Mazowieckie, Warszawa, Plac Wojska Polskiego"
	},
	{
		"test": "abc", "value": 52616,
		"label": "Wielkopolskie, Pozna\u0144, Podolany"
	},
	{
		"test": "abc", "value": 52808,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Polanka"
	},
	{
		"test": "abc", "value": 52809,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Polanowice"
	},
	{
		"test": "abc", "value": 52810,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Po\u0142udnie"
	},
	{
		"test": "abc", "value": 52811,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Popowice"
	},
	{
		"test": "abc", "value": 52812,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Po\u015bwi\u0119tne"
	},
	{
		"test": "abc", "value": 52655,
		"label": "Mazowieckie, Warszawa, Pow\u0105zki"
	},
	{
		"test": "abc", "value": 52645,
		"label": "Mazowieckie, Warszawa, Powi\u015ble"
	},
	{
		"test": "abc", "value": 52731,
		"label": "Mazowieckie, Warszawa, Powsin"
	},
	{
		"test": "abc", "value": 52728,
		"label": "Mazowieckie, Warszawa, Powsinek"
	},
	{
		"test": "abc", "value": 52813,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Pracze Odrza\u0144skie"
	},
	{
		"test": "abc", "value": 52814,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Przedmie\u015bcie O\u0142awskie"
	},
	{
		"test": "abc", "value": 52587,
		"label": "Mazowieckie, Warszawa, Pyry"
	},
	{
		"test": "abc", "value": 52608,
		"label": "Mazowieckie, Warszawa, Radiowo"
	},
	{
		"test": "abc", "value": 52735,
		"label": "Mazowieckie, Warszawa, Rado\u015b\u0107"
	},
	{
		"test": "abc", "value": 52719,
		"label": "Mazowieckie, Warszawa, Rak\u00f3w"
	},
	{
		"test": "abc", "value": 52569,
		"label": "Mazowieckie, Warszawa, Rakowiec"
	},
	{
		"test": "abc", "value": 52816,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Rakowiec"
	},
	{
		"test": "abc", "value": 52620,
		"label": "Wielkopolskie, Pozna\u0144, Rataje"
	},
	{
		"test": "abc", "value": 52817,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Raty\u0144"
	},
	{
		"test": "abc", "value": 52824,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, R\u0119dzin"
	},
	{
		"test": "abc", "value": 52818,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, R\u00f3\u017canka"
	},
	{
		"test": "abc", "value": 52741,
		"label": "Mazowieckie, Warszawa, Sadul"
	},
	{
		"test": "abc", "value": 52566,
		"label": "Mazowieckie, Warszawa, Sadyba"
	},
	{
		"test": "abc", "value": 52698,
		"label": "Mazowieckie, Warszawa, Sady \u017boliborskie"
	},
	{
		"test": "abc", "value": 52718,
		"label": "Mazowieckie, Warszawa, Salomea"
	},
	{
		"test": "abc", "value": 52715,
		"label": "Mazowieckie, Warszawa, Saska K\u0119pa"
	},
	{
		"test": "abc", "value": 52819,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, S\u0119polno"
	},
	{
		"test": "abc", "value": 52567,
		"label": "Mazowieckie, Warszawa, Siekierki"
	},
	{
		"test": "abc", "value": 52563,
		"label": "Mazowieckie, Warszawa, Sielce"
	},
	{
		"test": "abc", "value": 52596,
		"label": "Mazowieckie, Warszawa, Skarpa Powsi\u0144ska"
	},
	{
		"test": "abc", "value": 52697,
		"label": "Mazowieckie, Warszawa, Skorosze"
	},
	{
		"test": "abc", "value": 52633,
		"label": "Mazowieckie, Warszawa, S\u0142odowiec"
	},
	{
		"test": "abc", "value": 52559,
		"label": "Mazowieckie, Warszawa, S\u0142u\u017cew"
	},
	{
		"test": "abc", "value": 52558,
		"label": "Mazowieckie, Warszawa, S\u0142u\u017cewiec"
	},
	{
		"test": "abc", "value": 52624,
		"label": "Wielkopolskie, Pozna\u0144, So\u0142acz"
	},
	{
		"test": "abc", "value": 52641,
		"label": "Mazowieckie, Warszawa, Solec"
	},
	{
		"test": "abc", "value": 52825,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, So\u0142tysowice"
	},
	{
		"test": "abc", "value": 52648,
		"label": "Mazowieckie, Warszawa, \u015ar\u00f3dmie\u015bcie P\u00f3\u0142nocne"
	},
	{
		"test": "abc", "value": 52649,
		"label": "Mazowieckie, Warszawa, \u015ar\u00f3dmie\u015bcie Po\u0142udniowe"
	},
	{
		"test": "abc", "value": 52826,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Stab\u0142owice"
	},
	{
		"test": "abc", "value": 52751,
		"label": "Mazowieckie, Warszawa, Stara Mi\u0142osna"
	},
	{
		"test": "abc", "value": 52571,
		"label": "Mazowieckie, Warszawa, Stara Ochota"
	},
	{
		"test": "abc", "value": 52575,
		"label": "Mazowieckie, Warszawa, Stara Praga"
	},
	{
		"test": "abc", "value": 52627,
		"label": "Mazowieckie, Warszawa, Stare Bielany"
	},
	{
		"test": "abc", "value": 52643,
		"label": "Mazowieckie, Warszawa, Stare Miasto"
	},
	{
		"test": "abc", "value": 52673,
		"label": "Wielkopolskie, Pozna\u0144, Stare Winogrady"
	},
	{
		"test": "abc", "value": 52717,
		"label": "Mazowieckie, Warszawa, Stare W\u0142ochy"
	},
	{
		"test": "abc", "value": 52754,
		"label": "Wielkopolskie, Pozna\u0144, Staro\u0142\u0119ka-Minikowo-Marlewo"
	},
	{
		"test": "abc", "value": 52638,
		"label": "Wielkopolskie, Pozna\u0144, Stary Grunwald"
	},
	{
		"test": "abc", "value": 52580,
		"label": "Mazowieckie, Warszawa, Stary Imielin"
	},
	{
		"test": "abc", "value": 52562,
		"label": "Mazowieckie, Warszawa, Stary Mokot\u00f3w"
	},
	{
		"test": "abc", "value": 52579,
		"label": "Mazowieckie, Warszawa, Stary Rembert\u00f3w"
	},
	{
		"test": "abc", "value": 52588,
		"label": "Mazowieckie, Warszawa, Stary S\u0142u\u017cew"
	},
	{
		"test": "abc", "value": 52699,
		"label": "Mazowieckie, Warszawa, Stary \u017boliborz"
	},
	{
		"test": "abc", "value": 52564,
		"label": "Mazowieckie, Warszawa, Stegny"
	},
	{
		"test": "abc", "value": 52827,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Strachocin"
	},
	{
		"test": "abc", "value": 52617,
		"label": "Wielkopolskie, Pozna\u0144, Strzeszyn"
	},
	{
		"test": "abc", "value": 52646,
		"label": "Wielkopolskie, Pozna\u0144, \u015awierczewo"
	},
	{
		"test": "abc", "value": 52831,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, \u015awiniary"
	},
	{
		"test": "abc", "value": 52679,
		"label": "Mazowieckie, Warszawa, Szamocin"
	},
	{
		"test": "abc", "value": 52694,
		"label": "Mazowieckie, Warszawa, Szamoty"
	},
	{
		"test": "abc", "value": 52755,
		"label": "Wielkopolskie, Pozna\u0144, Szczepankowo-Sp\u0142awie-Krzesinki"
	},
	{
		"test": "abc", "value": 52830,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Szczepin"
	},
	{
		"test": "abc", "value": 52570,
		"label": "Mazowieckie, Warszawa, Szcz\u0119\u015bliwice"
	},
	{
		"test": "abc", "value": 52576,
		"label": "Mazowieckie, Warszawa, Szmulowizna"
	},
	{
		"test": "abc", "value": 52677,
		"label": "Mazowieckie, Warszawa, Tarchomin"
	},
	{
		"test": "abc", "value": 52602,
		"label": "Mazowieckie, Warszawa, Targ\u00f3wek Fabryczny"
	},
	{
		"test": "abc", "value": 52600,
		"label": "Mazowieckie, Warszawa, Targ\u00f3wek Mieszkaniowy"
	},
	{
		"test": "abc", "value": 52832,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Tarnogaj"
	},
	{
		"test": "abc", "value": 52636,
		"label": "Mazowieckie, Warszawa, Ujazd\u00f3w"
	},
	{
		"test": "abc", "value": 52651,
		"label": "Mazowieckie, Warszawa, Ulrych\u00f3w"
	},
	{
		"test": "abc", "value": 52621,
		"label": "Wielkopolskie, Pozna\u0144, Umultowo"
	},
	{
		"test": "abc", "value": 52591,
		"label": "Mazowieckie, Warszawa, Ursyn\u00f3w Centrum"
	},
	{
		"test": "abc", "value": 52581,
		"label": "Mazowieckie, Warszawa, Ursyn\u00f3w P\u00f3\u0142nocny"
	},
	{
		"test": "abc", "value": 52603,
		"label": "Mazowieckie, Warszawa, Utrata"
	},
	{
		"test": "abc", "value": 52761,
		"label": "Wielkopolskie, Pozna\u0144, Warszawskie-Pomet-Malta\u0144skie"
	},
	{
		"test": "abc", "value": 52612,
		"label": "Mazowieckie, Warszawa, Wawrzyszew"
	},
	{
		"test": "abc", "value": 52749,
		"label": "Mazowieckie, Warszawa, Weso\u0142a-Centrum"
	},
	{
		"test": "abc", "value": 52833,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Widawa"
	},
	{
		"test": "abc", "value": 52561,
		"label": "Mazowieckie, Warszawa, Wierzbno"
	},
	{
		"test": "abc", "value": 52726,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w Kr\u00f3lewski"
	},
	{
		"test": "abc", "value": 52725,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w Niski"
	},
	{
		"test": "abc", "value": 52724,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w Wysoki"
	},
	{
		"test": "abc", "value": 52680,
		"label": "Wielkopolskie, Pozna\u0144, Winiary"
	},
	{
		"test": "abc", "value": 52625,
		"label": "Wielkopolskie, Pozna\u0144, Wola"
	},
	{
		"test": "abc", "value": 52748,
		"label": "Mazowieckie, Warszawa, Wola Grzybowska"
	},
	{
		"test": "abc", "value": 52606,
		"label": "Mazowieckie, Warszawa, W\u00f3lka W\u0119glowa"
	},
	{
		"test": "abc", "value": 52611,
		"label": "Mazowieckie, Warszawa, Wrzeciono"
	},
	{
		"test": "abc", "value": 52582,
		"label": "Mazowieckie, Warszawa, Wycz\u00f3\u0142ki"
	},
	{
		"test": "abc", "value": 52557,
		"label": "Mazowieckie, Warszawa, Wygl\u0119d\u00f3w"
	},
	{
		"test": "abc", "value": 52599,
		"label": "Mazowieckie, Warszawa, Zacisze"
	},
	{
		"test": "abc", "value": 52721,
		"label": "Mazowieckie, Warszawa, Za\u0142uski"
	},
	{
		"test": "abc", "value": 52729,
		"label": "Mazowieckie, Warszawa, Zawady"
	},
	{
		"test": "abc", "value": 52659,
		"label": "Wielkopolskie, Pozna\u0144, \u017begrze"
	},
	{
		"test": "abc", "value": 52682,
		"label": "Mazowieckie, Warszawa, \u017bera\u0144"
	},
	{
		"test": "abc", "value": 52738,
		"label": "Mazowieckie, Warszawa, Zerze\u0144"
	},
	{
		"test": "abc", "value": 52747,
		"label": "Mazowieckie, Warszawa, Zielona-Grzybowa"
	},
	{
		"test": "abc", "value": 52681,
		"label": "Wielkopolskie, Pozna\u0144, Zielony D\u0119biec"
	}
];
var Container = React.createClass({
	getInitialState () {
		return options[0];
	},
	updateValue1 (value1) { this.setState({ value1 }); },
	updateValue2 (value2) { this.setState({ value2 }); },
	updateValue3 (value3) { this.setState({ value3 }); },

	loadOptions (input, callback) {
		console.log(input);
		callback(null, {
			options: options.sort(function () {
				return 0.5 - Math.random()
			}).slice(0, 10)
		})
	},

	optionRenderer (option) {
		return (
			<div>
				<strong>{option.label}</strong>
				<em>{option.test}</em>
			</div>
		)
	},

	render () {
		let optgr = [
			{name: "test", options: [{value: "a", label: "a"}, {value: "b", label: "b"}, {value: "c", label: "c"}]},
			{name: "test 2", options: [{value: "d", label: "d"}, {value: "e", label: "e"}, {value: "f", label: "f"}]}
		];


		return (
		<div>
			<Select
				required={false}
				searchable={false}
				options={optgr}
				optgroups={true}
			/>
		</div>
		)

	}
});


ReactDOM.render(
	<Container></Container>,
	document.getElementById('example')
);
