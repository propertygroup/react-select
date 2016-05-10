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
		"value": 1,
		"label": "Dolno\u015bl\u0105skie"
	},
	{
		"value": 31,
		"label": "Kujawsko-pomorskie"
	},
	{
		"value": 95,
		"label": "\u0141\u00f3dzkie"
	},
	{
		"value": 55,
		"label": "Lubelskie"
	},
	{
		"value": 80,
		"label": "Lubuskie"
	},
	{
		"value": 120,
		"label": "Ma\u0142opolskie"
	},
	{
		"value": 143,
		"label": "Mazowieckie"
	},
	{
		"value": 186,
		"label": "Opolskie"
	},
	{
		"value": 199,
		"label": "Podkarpackie"
	},
	{
		"value": 225,
		"label": "Podlaskie"
	},
	{
		"value": 243,
		"label": "Pomorskie"
	},
	{
		"value": 264,
		"label": "\u015al\u0105skie"
	},
	{
		"value": 301,
		"label": "\u015awi\u0119tokrzyskie"
	},
	{
		"value": 316,
		"label": "Warmi\u0144sko-mazurskie"
	},
	{
		"value": 338,
		"label": "Wielkopolskie"
	},
	{
		"value": 374,
		"label": "Zachodniopomorskie"
	},
	{
		"value": 52362,
		"label": "Kujawsko-Pomorskie, Bydgoszcz i okolice"
	},
	{
		"value": 52261,
		"label": "\u015al\u0105skie, Katowice i okolice"
	},
	{
		"value": 52258,
		"label": "Ma\u0142opolskie, Krak\u00f3w i okolice"
	},
	{
		"value": 52259,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a i okolice"
	},
	{
		"value": 52366,
		"label": "Lubelskie, Lublin i okolice"
	},
	{
		"value": 52363,
		"label": "Kujawsko-Pomorskie, okolice Bydgoszczy"
	},
	{
		"value": 52269,
		"label": "\u015al\u0105skie, okolice Katowic"
	},
	{
		"value": 52265,
		"label": "Ma\u0142opolskie, okolice Krakowa"
	},
	{
		"value": 52267,
		"label": "\u0141\u00f3dzkie, okolice \u0141odzi"
	},
	{
		"value": 52367,
		"label": "Lubelskie, okolice Lublina"
	},
	{
		"value": 52365,
		"label": "Warmi\u0144sko-Mazurskie, okolice Olsztyna"
	},
	{
		"value": 52263,
		"label": "Wielkopolskie, okolice Poznania"
	},
	{
		"value": 52268,
		"label": "Zachodniopomorskie, okolice Szczecina"
	},
	{
		"value": 52264,
		"label": "Pomorskie, okolice Tr\u00f3jmiasta"
	},
	{
		"value": 52262,
		"label": "Mazowieckie, okolice Warszawy"
	},
	{
		"value": 52266,
		"label": "Dolno\u015bl\u0105skie, okolice Wroc\u0142awia"
	},
	{
		"value": 52364,
		"label": "Warmi\u0144sko-Mazurskie, Olsztyn i okolice"
	},
	{
		"value": 52254,
		"label": "Wielkopolskie, Pozna\u0144 i okolice"
	},
	{
		"value": 52260,
		"label": "Zachodniopomorskie, Szczecin i okolice"
	},
	{
		"value": 52255,
		"label": "Pomorskie, Tr\u00f3jmiasto"
	},
	{
		"value": 52256,
		"label": "Pomorskie, Tr\u00f3jmiasto i okolice"
	},
	{
		"value": 52253,
		"label": "Mazowieckie, Warszawa i okolice"
	},
	{
		"value": 52257,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw i okolice"
	},
	{
		"value": 52380,
		"label": "Kujawsko-Pomorskie, Aleksandrowski"
	},
	{
		"value": 52412,
		"label": "Podlaskie, Augustowski"
	},
	{
		"value": 265,
		"label": "\u015al\u0105skie, B\u0119dzi\u0144ski"
	},
	{
		"value": 96,
		"label": "\u0141\u00f3dzkie, Be\u0142chatowski"
	},
	{
		"value": 144,
		"label": "Mazowieckie, Bia\u0142obrzeski"
	},
	{
		"value": 227,
		"label": "Podlaskie, Bia\u0142ostocki"
	},
	{
		"value": 266,
		"label": "\u015al\u0105skie, Bielski"
	},
	{
		"value": 228,
		"label": "Podlaskie, Bielski"
	},
	{
		"value": 57,
		"label": "Lubelskie, Bi\u0142gorajski"
	},
	{
		"value": 121,
		"label": "Ma\u0142opolskie, Boche\u0144ski"
	},
	{
		"value": 52423,
		"label": "Dolno\u015bl\u0105skie, Boles\u0142awiecki"
	},
	{
		"value": 33,
		"label": "Kujawsko-Pomorskie, Brodnicki"
	},
	{
		"value": 187,
		"label": "Opolskie, Brzeski"
	},
	{
		"value": 122,
		"label": "Ma\u0142opolskie, Brzeski"
	},
	{
		"value": 116,
		"label": "\u0141\u00f3dzkie, Brzezi\u0144ski"
	},
	{
		"value": 52589,
		"label": "\u015awi\u0119tokrzyskie, Buski"
	},
	{
		"value": 34,
		"label": "Kujawsko-Pomorskie, Bydgoski"
	},
	{
		"value": 244,
		"label": "Pomorskie, Bytowski"
	},
	{
		"value": 52332,
		"label": "Kujawsko-Pomorskie, Che\u0142mi\u0144ski"
	},
	{
		"value": 52292,
		"label": "Lubelskie, Che\u0142mski"
	},
	{
		"value": 245,
		"label": "Pomorskie, Chojnicki"
	},
	{
		"value": 123,
		"label": "Ma\u0142opolskie, Chrzanowski"
	},
	{
		"value": 145,
		"label": "Mazowieckie, Ciechanowski"
	},
	{
		"value": 267,
		"label": "\u015al\u0105skie, Cieszy\u0144ski"
	},
	{
		"value": 340,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki"
	},
	{
		"value": 52535,
		"label": "\u015al\u0105skie, Cz\u0119stochowski"
	},
	{
		"value": 319,
		"label": "Warmi\u0144sko-Mazurskie, Dzia\u0142dowski"
	},
	{
		"value": 52278,
		"label": "Dolno\u015bl\u0105skie, Dzier\u017coniowski"
	},
	{
		"value": 321,
		"label": "Warmi\u0144sko-Mazurskie, E\u0142cki"
	},
	{
		"value": 146,
		"label": "Mazowieckie, Garwoli\u0144ski"
	},
	{
		"value": 247,
		"label": "Pomorskie, Gda\u0144ski"
	},
	{
		"value": 322,
		"label": "Warmi\u0144sko-Mazurskie, Gi\u017cycki"
	},
	{
		"value": 269,
		"label": "\u015al\u0105skie, Gliwicki"
	},
	{
		"value": 4,
		"label": "Dolno\u015bl\u0105skie, G\u0142ogowski"
	},
	{
		"value": 341,
		"label": "Wielkopolskie, Gnie\u017anie\u0144ski"
	},
	{
		"value": 334,
		"label": "Warmi\u0144sko-Mazurskie, Go\u0142dapski"
	},
	{
		"value": 378,
		"label": "Zachodniopomorskie, Goleniowski"
	},
	{
		"value": 36,
		"label": "Kujawsko-Pomorskie, Golubsko-Dobrzy\u0144ski"
	},
	{
		"value": 52471,
		"label": "Lubuskie, Gorzowski"
	},
	{
		"value": 52386,
		"label": "Mazowieckie, Gostyni\u0144ski"
	},
	{
		"value": 342,
		"label": "Wielkopolskie, Gosty\u0144ski"
	},
	{
		"value": 148,
		"label": "Mazowieckie, Grodziski"
	},
	{
		"value": 343,
		"label": "Wielkopolskie, Grodziski"
	},
	{
		"value": 149,
		"label": "Mazowieckie, Gr\u00f3jecki"
	},
	{
		"value": 379,
		"label": "Zachodniopomorskie, Gryficki"
	},
	{
		"value": 380,
		"label": "Zachodniopomorskie, Gryfi\u0144ski"
	},
	{
		"value": 230,
		"label": "Podlaskie, Hajnowski"
	},
	{
		"value": 323,
		"label": "Warmi\u0144sko-Mazurskie, I\u0142awski"
	},
	{
		"value": 38,
		"label": "Kujawsko-Pomorskie, Inowroc\u0142awski"
	},
	{
		"value": 52403,
		"label": "Lubelskie, Janowski"
	},
	{
		"value": 344,
		"label": "Wielkopolskie, Jaroci\u0144ski"
	},
	{
		"value": 203,
		"label": "Podkarpackie, Jaros\u0142awski"
	},
	{
		"value": 52283,
		"label": "Podkarpackie, Jasielski"
	},
	{
		"value": 6,
		"label": "Dolno\u015bl\u0105skie, Jaworski"
	},
	{
		"value": 7,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski"
	},
	{
		"value": 345,
		"label": "Wielkopolskie, Kaliski"
	},
	{
		"value": 381,
		"label": "Zachodniopomorskie, Kamie\u0144ski"
	},
	{
		"value": 248,
		"label": "Pomorskie, Kartuski"
	},
	{
		"value": 52519,
		"label": "Warmi\u0144sko-Mazurskie, K\u0119trzy\u0144ski"
	},
	{
		"value": 305,
		"label": "\u015awi\u0119tokrzyskie, Kielecki"
	},
	{
		"value": 52541,
		"label": "\u015al\u0105skie, K\u0142obucki"
	},
	{
		"value": 9,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki"
	},
	{
		"value": 382,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski"
	},
	{
		"value": 349,
		"label": "Wielkopolskie, Ko\u015bcia\u0144ski"
	},
	{
		"value": 249,
		"label": "Pomorskie, Ko\u015bcierski"
	},
	{
		"value": 383,
		"label": "Zachodniopomorskie, Koszali\u0144ski"
	},
	{
		"value": 150,
		"label": "Mazowieckie, Kozienicki"
	},
	{
		"value": 126,
		"label": "Ma\u0142opolskie, Krakowski"
	},
	{
		"value": 191,
		"label": "Opolskie, Krapkowicki"
	},
	{
		"value": 52333,
		"label": "Lubelskie, Kra\u015bnicki"
	},
	{
		"value": 52473,
		"label": "Wielkopolskie, Krotoszy\u0144ski"
	},
	{
		"value": 97,
		"label": "\u0141\u00f3dzkie, Kutnowski"
	},
	{
		"value": 98,
		"label": "\u0141\u00f3dzkie, \u0141aski"
	},
	{
		"value": 251,
		"label": "Pomorskie, L\u0119borski"
	},
	{
		"value": 52458,
		"label": "Lubelskie, \u0141\u0119czy\u0144ski"
	},
	{
		"value": 151,
		"label": "Mazowieckie, Legionowski"
	},
	{
		"value": 52276,
		"label": "Dolno\u015bl\u0105skie, Legnicki"
	},
	{
		"value": 220,
		"label": "Podkarpackie, Leski"
	},
	{
		"value": 351,
		"label": "Wielkopolskie, Leszczy\u0144ski"
	},
	{
		"value": 52309,
		"label": "Warmi\u0144sko-Mazurskie, Lidzbarski"
	},
	{
		"value": 392,
		"label": "Zachodniopomorskie, \u0141obeski"
	},
	{
		"value": 101,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni"
	},
	{
		"value": 11,
		"label": "Dolno\u015bl\u0105skie, Luba\u0144ski"
	},
	{
		"value": 52469,
		"label": "Lubelskie, Lubartowski"
	},
	{
		"value": 64,
		"label": "Lubelskie, Lubelski"
	},
	{
		"value": 12,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski"
	},
	{
		"value": 66,
		"label": "Lubelskie, \u0141ukowski"
	},
	{
		"value": 13,
		"label": "Dolno\u015bl\u0105skie, Lw\u00f3wecki"
	},
	{
		"value": 52539,
		"label": "Mazowieckie, Makowski"
	},
	{
		"value": 252,
		"label": "Pomorskie, Malborski"
	},
	{
		"value": 128,
		"label": "Ma\u0142opolskie, Miechowski"
	},
	{
		"value": 352,
		"label": "Wielkopolskie, Mi\u0119dzychodzki"
	},
	{
		"value": 210,
		"label": "Podkarpackie, Mielecki"
	},
	{
		"value": 272,
		"label": "\u015al\u0105skie, Miko\u0142owski"
	},
	{
		"value": 155,
		"label": "Mazowieckie, Mi\u0144ski"
	},
	{
		"value": 156,
		"label": "Mazowieckie, M\u0142awski"
	},
	{
		"value": 326,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski"
	},
	{
		"value": 129,
		"label": "Ma\u0142opolskie, My\u015blenicki"
	},
	{
		"value": 384,
		"label": "Zachodniopomorskie, My\u015bliborski"
	},
	{
		"value": 52550,
		"label": "\u015al\u0105skie, Myszkowski"
	},
	{
		"value": 41,
		"label": "Kujawsko-Pomorskie, Nakielski"
	},
	{
		"value": 192,
		"label": "Opolskie, Namys\u0142owski"
	},
	{
		"value": 52406,
		"label": "Warmi\u0144sko-Mazurskie, Nidzicki"
	},
	{
		"value": 157,
		"label": "Mazowieckie, Nowodworski"
	},
	{
		"value": 253,
		"label": "Pomorskie, Nowodworski"
	},
	{
		"value": 130,
		"label": "Ma\u0142opolskie, Nowos\u0105decki"
	},
	{
		"value": 84,
		"label": "Lubuskie, Nowosolski"
	},
	{
		"value": 131,
		"label": "Ma\u0142opolskie, Nowotarski"
	},
	{
		"value": 353,
		"label": "Wielkopolskie, Nowotomyski"
	},
	{
		"value": 52454,
		"label": "Opolskie, Nyski"
	},
	{
		"value": 354,
		"label": "Wielkopolskie, Obornicki"
	},
	{
		"value": 16,
		"label": "Dolno\u015bl\u0105skie, O\u0142awski"
	},
	{
		"value": 329,
		"label": "Warmi\u0144sko-Mazurskie, Olecki"
	},
	{
		"value": 15,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki"
	},
	{
		"value": 132,
		"label": "Ma\u0142opolskie, Olkuski"
	},
	{
		"value": 330,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski"
	},
	{
		"value": 307,
		"label": "\u015awi\u0119tokrzyskie, Opatowski"
	},
	{
		"value": 67,
		"label": "Lubelskie, Opolski"
	},
	{
		"value": 195,
		"label": "Opolskie, Opolski"
	},
	{
		"value": 331,
		"label": "Warmi\u0144sko-Mazurskie, Ostr\u00f3dzki"
	},
	{
		"value": 52529,
		"label": "Mazowieckie, Ostro\u0142\u0119cki"
	},
	{
		"value": 308,
		"label": "\u015awi\u0119tokrzyskie, Ostrowiecki"
	},
	{
		"value": 355,
		"label": "Wielkopolskie, Ostrowski"
	},
	{
		"value": 52306,
		"label": "Wielkopolskie, Ostrzeszowski"
	},
	{
		"value": 133,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski"
	},
	{
		"value": 160,
		"label": "Mazowieckie, Otwocki"
	},
	{
		"value": 103,
		"label": "\u0141\u00f3dzkie, Pabianicki"
	},
	{
		"value": 161,
		"label": "Mazowieckie, Piaseczy\u0144ski"
	},
	{
		"value": 357,
		"label": "Wielkopolskie, Pilski"
	},
	{
		"value": 332,
		"label": "Warmi\u0144sko-Mazurskie, Piski"
	},
	{
		"value": 358,
		"label": "Wielkopolskie, Pleszewski"
	},
	{
		"value": 162,
		"label": "Mazowieckie, P\u0142ocki"
	},
	{
		"value": 163,
		"label": "Mazowieckie, P\u0142o\u0144ski"
	},
	{
		"value": 385,
		"label": "Zachodniopomorskie, Policki"
	},
	{
		"value": 17,
		"label": "Dolno\u015bl\u0105skie, Polkowicki"
	},
	{
		"value": 359,
		"label": "Wielkopolskie, Pozna\u0144ski"
	},
	{
		"value": 134,
		"label": "Ma\u0142opolskie, Proszowicki"
	},
	{
		"value": 164,
		"label": "Mazowieckie, Pruszkowski"
	},
	{
		"value": 165,
		"label": "Mazowieckie, Przasnyski"
	},
	{
		"value": 213,
		"label": "Podkarpackie, Przeworski"
	},
	{
		"value": 274,
		"label": "\u015al\u0105skie, Pszczy\u0144ski"
	},
	{
		"value": 254,
		"label": "Pomorskie, Pucki"
	},
	{
		"value": 69,
		"label": "Lubelskie, Pu\u0142awski"
	},
	{
		"value": 167,
		"label": "Mazowieckie, Pu\u0142tuski"
	},
	{
		"value": 386,
		"label": "Zachodniopomorskie, Pyrzycki"
	},
	{
		"value": 275,
		"label": "\u015al\u0105skie, Raciborski"
	},
	{
		"value": 168,
		"label": "Mazowieckie, Radomski"
	},
	{
		"value": 107,
		"label": "\u0141\u00f3dzkie, Radomszcza\u0144ski"
	},
	{
		"value": 52515,
		"label": "Lubelskie, Radzy\u0144ski"
	},
	{
		"value": 360,
		"label": "Wielkopolskie, Rawicki"
	},
	{
		"value": 108,
		"label": "\u0141\u00f3dzkie, Rawski"
	},
	{
		"value": 215,
		"label": "Podkarpackie, Rzeszowski"
	},
	{
		"value": 216,
		"label": "Podkarpackie, Sanocki"
	},
	{
		"value": 44,
		"label": "Kujawsko-Pomorskie, S\u0119pole\u0144ski"
	},
	{
		"value": 52248,
		"label": "Mazowieckie, Siedlecki"
	},
	{
		"value": 52521,
		"label": "\u0141\u00f3dzkie, Sieradzki"
	},
	{
		"value": 311,
		"label": "\u015awi\u0119tokrzyskie, Skar\u017cyski"
	},
	{
		"value": 110,
		"label": "\u0141\u00f3dzkie, Skierniewicki"
	},
	{
		"value": 387,
		"label": "Zachodniopomorskie, S\u0142awie\u0144ski"
	},
	{
		"value": 52215,
		"label": "Lubuskie, S\u0142ubicki"
	},
	{
		"value": 361,
		"label": "Wielkopolskie, S\u0142upecki"
	},
	{
		"value": 255,
		"label": "Pomorskie, S\u0142upski"
	},
	{
		"value": 171,
		"label": "Mazowieckie, Sochaczewski"
	},
	{
		"value": 52527,
		"label": "Mazowieckie, Soko\u0142owski"
	},
	{
		"value": 363,
		"label": "Wielkopolskie, \u015aredzki"
	},
	{
		"value": 19,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki"
	},
	{
		"value": 364,
		"label": "Wielkopolskie, \u015aremski"
	},
	{
		"value": 217,
		"label": "Podkarpackie, Stalowowolski"
	},
	{
		"value": 312,
		"label": "\u015awi\u0119tokrzyskie, Starachowicki"
	},
	{
		"value": 388,
		"label": "Zachodniopomorskie, Stargardzki"
	},
	{
		"value": 256,
		"label": "Pomorskie, Starogardzki"
	},
	{
		"value": 197,
		"label": "Opolskie, Strzelecki"
	},
	{
		"value": 52523,
		"label": "Lubuskie, Strzelecko-Drezdenecki"
	},
	{
		"value": 18,
		"label": "Dolno\u015bl\u0105skie, Strzeli\u0144ski"
	},
	{
		"value": 218,
		"label": "Podkarpackie, Strzy\u017cowski"
	},
	{
		"value": 52446,
		"label": "Lubuskie, Sul\u0119ci\u0144ski"
	},
	{
		"value": 135,
		"label": "Ma\u0142opolskie, Suski"
	},
	{
		"value": 72,
		"label": "Lubelskie, \u015awidnicki"
	},
	{
		"value": 20,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki"
	},
	{
		"value": 52285,
		"label": "Zachodniopomorskie, \u015awidwi\u0144ski"
	},
	{
		"value": 362,
		"label": "Wielkopolskie, Szamotulski"
	},
	{
		"value": 389,
		"label": "Zachodniopomorskie, Szczecinecki"
	},
	{
		"value": 333,
		"label": "Warmi\u0144sko-Mazurskie, Szczycie\u0144ski"
	},
	{
		"value": 52505,
		"label": "Mazowieckie, Szyd\u0142owiecki"
	},
	{
		"value": 277,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski"
	},
	{
		"value": 136,
		"label": "Ma\u0142opolskie, Tarnowski"
	},
	{
		"value": 137,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski"
	},
	{
		"value": 257,
		"label": "Pomorskie, Tczewski"
	},
	{
		"value": 111,
		"label": "\u0141\u00f3dzkie, Tomaszowski"
	},
	{
		"value": 73,
		"label": "Lubelskie, Tomaszowski"
	},
	{
		"value": 46,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski"
	},
	{
		"value": 21,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki"
	},
	{
		"value": 52343,
		"label": "Ma\u0142opolskie, Wadowicki"
	},
	{
		"value": 52370,
		"label": "Wielkopolskie, W\u0105growiecki"
	},
	{
		"value": 22,
		"label": "Dolno\u015bl\u0105skie, Wa\u0142brzyski"
	},
	{
		"value": 174,
		"label": "Mazowieckie, Warszawski Zachodni"
	},
	{
		"value": 335,
		"label": "Warmi\u0144sko-Mazurskie, W\u0119gorzewski"
	},
	{
		"value": 175,
		"label": "Mazowieckie, W\u0119growski"
	},
	{
		"value": 258,
		"label": "Pomorskie, Wejherowski"
	},
	{
		"value": 139,
		"label": "Ma\u0142opolskie, Wielicki"
	},
	{
		"value": 52320,
		"label": "\u0141\u00f3dzkie, Wieruszowski"
	},
	{
		"value": 49,
		"label": "Kujawsko-Pomorskie, W\u0142oc\u0142awski"
	},
	{
		"value": 74,
		"label": "Lubelskie, W\u0142odawski"
	},
	{
		"value": 176,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski"
	},
	{
		"value": 23,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski"
	},
	{
		"value": 367,
		"label": "Wielkopolskie, Wolszty\u0144ski"
	},
	{
		"value": 24,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski"
	},
	{
		"value": 368,
		"label": "Wielkopolskie, Wrzesi\u0144ski"
	},
	{
		"value": 52436,
		"label": "Lubuskie, Wschowski"
	},
	{
		"value": 177,
		"label": "Mazowieckie, Wyszkowski"
	},
	{
		"value": 52450,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki"
	},
	{
		"value": 52334,
		"label": "Lubuskie, \u017baga\u0144ski"
	},
	{
		"value": 75,
		"label": "Lubelskie, Zamojski"
	},
	{
		"value": 91,
		"label": "Lubuskie, \u017barski"
	},
	{
		"value": 280,
		"label": "\u015al\u0105skie, Zawiercia\u0144ski"
	},
	{
		"value": 115,
		"label": "\u0141\u00f3dzkie, Zgierski"
	},
	{
		"value": 26,
		"label": "Dolno\u015bl\u0105skie, Zgorzelecki"
	},
	{
		"value": 89,
		"label": "Lubuskie, Zielonog\u00f3rski"
	},
	{
		"value": 369,
		"label": "Wielkopolskie, Z\u0142otowski"
	},
	{
		"value": 178,
		"label": "Mazowieckie, Zwole\u0144ski"
	},
	{
		"value": 180,
		"label": "Mazowieckie, \u017byrardowski"
	},
	{
		"value": 52511,
		"label": "Kujawsko-Pomorskie, Aleksandrowski, Aleksandr\u00f3w Kujawski"
	},
	{
		"value": 14762,
		"label": "\u0141\u00f3dzkie, Zgierski, Aleksandr\u00f3w \u0141\u00f3dzki"
	},
	{
		"value": 52461,
		"label": "Ma\u0142opolskie, Chrzanowski, Alwernia"
	},
	{
		"value": 52344,
		"label": "Ma\u0142opolskie, Wadowicki, Andrych\u00f3w"
	},
	{
		"value": 52413,
		"label": "Podlaskie, Augustowski, August\u00f3w"
	},
	{
		"value": 52756,
		"label": "Kujawsko-pomorskie, Barcin"
	},
	{
		"value": 52272,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Barczewo"
	},
	{
		"value": 13435,
		"label": "Zachodniopomorskie, My\u015bliborski, Barlinek"
	},
	{
		"value": 15056,
		"label": "\u015al\u0105skie, B\u0119dzi\u0144ski, B\u0119dzin"
	},
	{
		"value": 8510,
		"label": "\u0141\u00f3dzkie, Be\u0142chatowski, Be\u0142chat\u00f3w"
	},
	{
		"value": 24220,
		"label": "Lubelskie, Bia\u0142a Podlaska"
	},
	{
		"value": 26641,
		"label": "Mazowieckie, Bia\u0142obrzeski, Bia\u0142obrzegi"
	},
	{
		"value": 9692,
		"label": "Podlaskie, Bia\u0142ystok"
	},
	{
		"value": 52279,
		"label": "Dolno\u015bl\u0105skie, Dzier\u017coniowski, Bielawa"
	},
	{
		"value": 13414,
		"label": "\u015al\u0105skie, Bielsko-Bia\u0142a"
	},
	{
		"value": 3739,
		"label": "Podlaskie, Bielski, Bielsk Podlaski"
	},
	{
		"value": 33494,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Bierut\u00f3w"
	},
	{
		"value": 52545,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Biskupiec"
	},
	{
		"value": 2396,
		"label": "Mazowieckie, Warszawski Zachodni, B\u0142onie"
	},
	{
		"value": 36034,
		"label": "Ma\u0142opolskie, Boche\u0144ski, Bochnia"
	},
	{
		"value": 52424,
		"label": "Dolno\u015bl\u0105skie, Boles\u0142awiecki, Boles\u0142awiec"
	},
	{
		"value": 22811,
		"label": "Dolno\u015bl\u0105skie, Jaworski, Bolk\u00f3w"
	},
	{
		"value": 34065,
		"label": "Zachodniopomorskie, Szczecinecki, Borne Sulinowo"
	},
	{
		"value": 21231,
		"label": "Kujawsko-Pomorskie, Brodnicki, Brodnica"
	},
	{
		"value": 37359,
		"label": "Mazowieckie, Pruszkowski, Brwin\u00f3w"
	},
	{
		"value": 10425,
		"label": "Opolskie, Brzeski, Brzeg"
	},
	{
		"value": 35561,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski, Brzeg Dolny"
	},
	{
		"value": 39392,
		"label": "Ma\u0142opolskie, Brzeski, Brzesko"
	},
	{
		"value": 32853,
		"label": "\u0141\u00f3dzkie, Brzezi\u0144ski, Brzeziny"
	},
	{
		"value": 52590,
		"label": "\u015awi\u0119tokrzyskie, Buski, Busko-Zdr\u00f3j"
	},
	{
		"value": 22550,
		"label": "Kujawsko-Pomorskie, Bydgoszcz"
	},
	{
		"value": 34871,
		"label": "\u015al\u0105skie, Bytom"
	},
	{
		"value": 12539,
		"label": "Pomorskie, Bytowski, Byt\u00f3w"
	},
	{
		"value": 52293,
		"label": "Lubelskie, Che\u0142mski, Che\u0142m"
	},
	{
		"value": 52219,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski, Che\u0142mek"
	},
	{
		"value": 52238,
		"label": "Kujawsko-Pomorskie, Che\u0142mi\u0144ski, Che\u0142mno"
	},
	{
		"value": 46761,
		"label": "Pomorskie, Chojnicki, Chojnice"
	},
	{
		"value": 19219,
		"label": "\u015al\u0105skie, Chorz\u00f3w"
	},
	{
		"value": 52251,
		"label": "Ma\u0142opolskie, Chrzanowski, Chrzan\u00f3w"
	},
	{
		"value": 6296,
		"label": "Mazowieckie, Ciechanowski, Ciechan\u00f3w"
	},
	{
		"value": 52381,
		"label": "Kujawsko-Pomorskie, Aleksandrowski, Ciechocinek"
	},
	{
		"value": 16000,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Cieszyn"
	},
	{
		"value": 52441,
		"label": "Podlaskie, Bia\u0142ostocki, Czarna Bia\u0142ostocka"
	},
	{
		"value": 52410,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki, Czarnk\u00f3w"
	},
	{
		"value": 52513,
		"label": "\u015al\u0105skie, Bielski, Czechowice-Dziedzice"
	},
	{
		"value": 30668,
		"label": "\u015al\u0105skie, Cz\u0119stochowa"
	},
	{
		"value": 16293,
		"label": "\u015al\u0105skie, D\u0105browa G\u00f3rnicza"
	},
	{
		"value": 35342,
		"label": "Zachodniopomorskie, S\u0142awie\u0144ski, Dar\u0142owo"
	},
	{
		"value": 52524,
		"label": "Lubuskie, Strzelecko-Drezdenecki, Drezdenko"
	},
	{
		"value": 24294,
		"label": "Warmi\u0144sko-Mazurskie, Dzia\u0142dowski, Dzia\u0142dowo"
	},
	{
		"value": 22546,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Dziwn\u00f3w"
	},
	{
		"value": 25289,
		"label": "Warmi\u0144sko-mazurskie, Elbl\u0105g"
	},
	{
		"value": 51050,
		"label": "Warmi\u0144sko-mazurskie, E\u0142cki, E\u0142k"
	},
	{
		"value": 50491,
		"label": "Mazowieckie, Garwoli\u0144ski, Garwolin"
	},
	{
		"value": 46083,
		"label": "Pomorskie, Gda\u0144sk"
	},
	{
		"value": 6196,
		"label": "Pomorskie, Gdynia"
	},
	{
		"value": 11016,
		"label": "Warmi\u0144sko-mazurskie, Gi\u017cycki, Gi\u017cycko"
	},
	{
		"value": 31825,
		"label": "\u015al\u0105skie, Gliwice"
	},
	{
		"value": 11592,
		"label": "Dolno\u015bl\u0105skie, G\u0142ogowski, G\u0142og\u00f3w"
	},
	{
		"value": 20423,
		"label": "Podkarpackie, Rzeszowski, G\u0142og\u00f3w Ma\u0142opolski"
	},
	{
		"value": 28203,
		"label": "Wielkopolskie, Gnie\u017anie\u0144ski, Gniezno"
	},
	{
		"value": 4455,
		"label": "Opolskie, Krapkowicki, Gogolin"
	},
	{
		"value": 31788,
		"label": "Warmi\u0144sko-Mazurskie, Go\u0142dapski, Go\u0142dap"
	},
	{
		"value": 28905,
		"label": "Zachodniopomorskie, Goleniowski, Goleni\u00f3w"
	},
	{
		"value": 21549,
		"label": "Mazowieckie, Piaseczy\u0144ski, G\u00f3ra Kalwaria"
	},
	{
		"value": 37058,
		"label": "Lubuskie, Gorz\u00f3w Wielkopolski"
	},
	{
		"value": 52822,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Go\u015bcino"
	},
	{
		"value": 52287,
		"label": "Wielkopolskie, Gosty\u0144ski, Gosty\u0144"
	},
	{
		"value": 52387,
		"label": "Mazowieckie, Gostyni\u0144ski, Gostynin"
	},
	{
		"value": 36132,
		"label": "Mazowieckie, Grodziski, Grodzisk Mazowiecki"
	},
	{
		"value": 45812,
		"label": "Wielkopolskie, Grodziski, Grodzisk Wielkopolski"
	},
	{
		"value": 1642,
		"label": "Mazowieckie, Gr\u00f3jecki, Gr\u00f3jec"
	},
	{
		"value": 13077,
		"label": "Kujawsko-Pomorskie, Grudzi\u0105dz"
	},
	{
		"value": 52322,
		"label": "Zachodniopomorskie, Gryficki, Gryfice"
	},
	{
		"value": 47110,
		"label": "Zachodniopomorskie, Gryfi\u0144ski, Gryfino"
	},
	{
		"value": 20511,
		"label": "Podlaskie, Hajnowski, Hajn\u00f3wka"
	},
	{
		"value": 52499,
		"label": "Mazowieckie, Mi\u0144ski, Halin\u00f3w"
	},
	{
		"value": 45344,
		"label": "Pomorskie, Pucki, Hel"
	},
	{
		"value": 9385,
		"label": "Warmi\u0144sko-Mazurskie, I\u0142awski, I\u0142awa"
	},
	{
		"value": 35739,
		"label": "Kujawsko-Pomorskie, Inowroc\u0142awski, Inowroc\u0142aw"
	},
	{
		"value": 52445,
		"label": "Zachodniopomorskie, Stargardzki, I\u0144sko"
	},
	{
		"value": 52404,
		"label": "Lubelskie, Janowski, Jan\u00f3w Lubelski"
	},
	{
		"value": 47119,
		"label": "Wielkopolskie, Jaroci\u0144ski, Jarocin"
	},
	{
		"value": 52284,
		"label": "Podkarpackie, Jasielski, Jas\u0142o"
	},
	{
		"value": 13032,
		"label": "Pomorskie, Pucki, Jastarnia"
	},
	{
		"value": 52433,
		"label": "Wielkopolskie, Z\u0142otowski, Jastrowie"
	},
	{
		"value": 23134,
		"label": "\u015al\u0105skie, Jastrz\u0119bie-Zdr\u00f3j"
	},
	{
		"value": 52457,
		"label": "\u015al\u0105skie, Jaworzno"
	},
	{
		"value": 52314,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, Jaworzyna \u015al\u0105ska"
	},
	{
		"value": 4661,
		"label": "Dolno\u015bl\u0105skie, O\u0142awski, Jelcz-Laskowice"
	},
	{
		"value": 51619,
		"label": "Dolno\u015bl\u0105skie, Jelenia G\u00f3ra"
	},
	{
		"value": 7727,
		"label": "Mazowieckie, Otwocki, J\u00f3zef\u00f3w"
	},
	{
		"value": 18767,
		"label": "Wielkopolskie, Kalisz"
	},
	{
		"value": 52546,
		"label": "Mazowieckie, Mi\u0144ski, Ka\u0142uszyn"
	},
	{
		"value": 37976,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Karpacz"
	},
	{
		"value": 1737,
		"label": "Pomorskie, Kartuski, Kartuzy"
	},
	{
		"value": 31600,
		"label": "\u015al\u0105skie, Katowice"
	},
	{
		"value": 39252,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, K\u0105ty Wroc\u0142awskie"
	},
	{
		"value": 52520,
		"label": "Warmi\u0144sko-Mazurskie, K\u0119trzy\u0144ski, K\u0119trzyn"
	},
	{
		"value": 36190,
		"label": "\u015awi\u0119tokrzyskie, Kielce"
	},
	{
		"value": 52542,
		"label": "\u015al\u0105skie, K\u0142obucki, K\u0142obuck"
	},
	{
		"value": 18264,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, K\u0142odzko"
	},
	{
		"value": 27502,
		"label": "\u015al\u0105skie, Gliwicki, Knur\u00f3w"
	},
	{
		"value": 9913,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Koby\u0142ka"
	},
	{
		"value": 14102,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Ko\u0142obrzeg"
	},
	{
		"value": 39772,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Koluszki"
	},
	{
		"value": 2067,
		"label": "Wielkopolskie, Konin"
	},
	{
		"value": 8437,
		"label": "Mazowieckie, Piaseczy\u0144ski, Konstancin-Jeziorna"
	},
	{
		"value": 12010,
		"label": "\u0141\u00f3dzkie, Pabianicki, Konstantyn\u00f3w \u0141\u00f3dzki"
	},
	{
		"value": 2436,
		"label": "Wielkopolskie, Pozna\u0144ski, K\u00f3rnik"
	},
	{
		"value": 871,
		"label": "Wielkopolskie, Ko\u015bcia\u0144ski, Ko\u015bcian"
	},
	{
		"value": 4395,
		"label": "Pomorskie, Ko\u015bcierski, Ko\u015bcierzyna"
	},
	{
		"value": 38447,
		"label": "Wielkopolskie, Pozna\u0144ski, Kostrzyn"
	},
	{
		"value": 52472,
		"label": "Lubuskie, Gorzowski, Kostrzyn nad Odr\u0105"
	},
	{
		"value": 48606,
		"label": "Zachodniopomorskie, Koszalin"
	},
	{
		"value": 44124,
		"label": "Kujawsko-Pomorskie, Golubsko-Dobrzy\u0144ski, Kowalewo Pomorskie"
	},
	{
		"value": 41196,
		"label": "Mazowieckie, Kozienicki, Kozienice"
	},
	{
		"value": 11158,
		"label": "Ma\u0142opolskie, Krak\u00f3w"
	},
	{
		"value": 22482,
		"label": "Opolskie, Krapkowicki, Krapkowice"
	},
	{
		"value": 52237,
		"label": "Lubelskie, Kra\u015bnicki, Kra\u015bnik"
	},
	{
		"value": 36014,
		"label": "Podkarpackie, Krosno"
	},
	{
		"value": 52474,
		"label": "Wielkopolskie, Krotoszy\u0144ski, Krotoszyn"
	},
	{
		"value": 35022,
		"label": "Pomorskie, Nowodworski, Krynica Morska"
	},
	{
		"value": 11328,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Krynica-Zdr\u00f3j"
	},
	{
		"value": 30868,
		"label": "Ma\u0142opolskie, Krakowski, Krzeszowice"
	},
	{
		"value": 52534,
		"label": "Wielkopolskie, Ko\u015bcia\u0144ski, Krzywi\u0144"
	},
	{
		"value": 52525,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki, Krzy\u017c Wielkopolski"
	},
	{
		"value": 49787,
		"label": "\u0141\u00f3dzkie, Kutnowski, Kutno"
	},
	{
		"value": 52388,
		"label": "Podkarpackie, \u0141a\u0144cut"
	},
	{
		"value": 52382,
		"label": "Podlaskie, Bia\u0142ostocki, \u0141apy"
	},
	{
		"value": 8769,
		"label": "\u015al\u0105skie, Miko\u0142owski, \u0141aziska G\u00f3rne"
	},
	{
		"value": 41675,
		"label": "Pomorskie, L\u0119borski, \u0141eba"
	},
	{
		"value": 52805,
		"label": "Pomorskie, L\u0119bork"
	},
	{
		"value": 52459,
		"label": "Lubelskie, \u0142\u0119czy\u0144ski, \u0141\u0119czna"
	},
	{
		"value": 52418,
		"label": "\u015al\u0105skie, L\u0119dziny"
	},
	{
		"value": 47675,
		"label": "Mazowieckie, Legionowski, Legionowo"
	},
	{
		"value": 40444,
		"label": "Dolno\u015bl\u0105skie, Legnica"
	},
	{
		"value": 32749,
		"label": "Opolskie, Strzelecki, Le\u015bnica"
	},
	{
		"value": 12259,
		"label": "Wielkopolskie, Leszno"
	},
	{
		"value": 11303,
		"label": "Ma\u0142opolskie, Chrzanowski, Libi\u0105\u017c"
	},
	{
		"value": 16187,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a"
	},
	{
		"value": 51541,
		"label": "Mazowieckie, Warszawski Zachodni, \u0141omianki"
	},
	{
		"value": 23038,
		"label": "Podlaskie, \u0141om\u017ca"
	},
	{
		"value": 30988,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski, Lubin"
	},
	{
		"value": 13220,
		"label": "Lubelskie, Lublin"
	},
	{
		"value": 20203,
		"label": "Wielkopolskie, Pozna\u0144ski, Lubo\u0144"
	},
	{
		"value": 19526,
		"label": "Lubelskie, \u0141ukowski, \u0141uk\u00f3w"
	},
	{
		"value": 52540,
		"label": "Mazowieckie, Makowski, Mak\u00f3w Mazowiecki"
	},
	{
		"value": 44923,
		"label": "Pomorskie, Malborski, Malbork"
	},
	{
		"value": 41324,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Marki"
	},
	{
		"value": 28812,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, Mi\u0119dzylesie"
	},
	{
		"value": 52760,
		"label": "Lubuskie, Mi\u0119dzyrzecz"
	},
	{
		"value": 33992,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Mi\u0119dzyzdroje"
	},
	{
		"value": 32591,
		"label": "Podkarpackie, Mielecki, Mielec"
	},
	{
		"value": 16048,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski, Miko\u0142ajki"
	},
	{
		"value": 13580,
		"label": "\u015al\u0105skie, Miko\u0142owski, Miko\u0142\u00f3w"
	},
	{
		"value": 44298,
		"label": "Mazowieckie, Grodziski, Milan\u00f3wek"
	},
	{
		"value": 52420,
		"label": "Dolno\u015bl\u0105skie, Milicz"
	},
	{
		"value": 43897,
		"label": "Mazowieckie, Mi\u0144ski, Mi\u0144sk Mazowiecki"
	},
	{
		"value": 37733,
		"label": "Mazowieckie, M\u0142awski, M\u0142awa"
	},
	{
		"value": 49117,
		"label": "Wielkopolskie, Pozna\u0144ski, Mosina"
	},
	{
		"value": 48654,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski, Mr\u0105gowo"
	},
	{
		"value": 52323,
		"label": "Mazowieckie, \u017byrardowski, Mszczon\u00f3w"
	},
	{
		"value": 29754,
		"label": "Wielkopolskie, Pozna\u0144ski, Murowana Go\u015blina"
	},
	{
		"value": 47901,
		"label": "Ma\u0142opolskie, My\u015blenicki, My\u015blenice"
	},
	{
		"value": 8955,
		"label": "\u015al\u0105skie, Mys\u0142owice"
	},
	{
		"value": 25809,
		"label": "Lubelskie, Pu\u0142awski, Na\u0142\u0119cz\u00f3w"
	},
	{
		"value": 29372,
		"label": "Opolskie, Namys\u0142owski, Namys\u0142\u00f3w"
	},
	{
		"value": 14321,
		"label": "Mazowieckie, Nowodworski, Nasielsk"
	},
	{
		"value": 36712,
		"label": "Wielkopolskie, Wrzesi\u0144ski, Nekla"
	},
	{
		"value": 52548,
		"label": "Warmi\u0144sko-Mazurskie, Nidzicki, Nidzica"
	},
	{
		"value": 36397,
		"label": "Ma\u0142opolskie, Wielicki, Niepo\u0142omice"
	},
	{
		"value": 10117,
		"label": "Lubuskie, Nowosolski, Nowa S\u00f3l"
	},
	{
		"value": 52543,
		"label": "Zachodniopomorskie, Goleniowski, Nowogard"
	},
	{
		"value": 7572,
		"label": "Mazowieckie, Nowodworski, Nowy Dw\u00f3r Mazowiecki"
	},
	{
		"value": 52247,
		"label": "Ma\u0142opolskie, Nowy S\u0105cz"
	},
	{
		"value": 1899,
		"label": "Ma\u0142opolskie, Nowotarski, Nowy Targ"
	},
	{
		"value": 52533,
		"label": "Wielkopolskie, Nowotomyski, Nowy Tomy\u015bl"
	},
	{
		"value": 52455,
		"label": "Opolskie, Nyski, Nysa"
	},
	{
		"value": 21343,
		"label": "Wielkopolskie, Obornicki, Oborniki"
	},
	{
		"value": 32620,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Oborniki \u015al\u0105skie"
	},
	{
		"value": 14663,
		"label": "Dolno\u015bl\u0105skie, O\u0142awski, O\u0142awa"
	},
	{
		"value": 51671,
		"label": "Warmi\u0144sko-Mazurskie, Olecki, Olecko"
	},
	{
		"value": 34312,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Ole\u015bnica"
	},
	{
		"value": 31391,
		"label": "Ma\u0142opolskie, Olkuski, Olkusz"
	},
	{
		"value": 26804,
		"label": "Warmi\u0144sko-Mazurskie, Olsztyn"
	},
	{
		"value": 20064,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Olsztynek"
	},
	{
		"value": 52233,
		"label": "Wielkopolskie, Nowotomyski, Opalenica"
	},
	{
		"value": 12168,
		"label": "Opolskie, Opole"
	},
	{
		"value": 19975,
		"label": "Lubelskie, Opolski, Opole Lubelskie"
	},
	{
		"value": 52494,
		"label": "Warmi\u0144sko-Mazurskie, Piski, Orzysz"
	},
	{
		"value": 30635,
		"label": "Warmi\u0144sko-Mazurskie, Ostr\u00f3dzki, Ostr\u00f3da"
	},
	{
		"value": 19025,
		"label": "Mazowieckie, Ostro\u0142\u0119ka"
	},
	{
		"value": 28917,
		"label": "\u015awi\u0119tokrzyskie, Ostrowiecki, Ostrowiec \u015awi\u0119tokrzyski"
	},
	{
		"value": 34136,
		"label": "Wielkopolskie, Ostrowski, Ostr\u00f3w Wielkopolski"
	},
	{
		"value": 52307,
		"label": "Wielkopolskie, Ostrzeszowski, Ostrzesz\u00f3w"
	},
	{
		"value": 52252,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski, O\u015bwi\u0119cim"
	},
	{
		"value": 12955,
		"label": "Mazowieckie, Otwocki, Otwock"
	},
	{
		"value": 24508,
		"label": "\u015awi\u0119tokrzyskie, Opatowski, O\u017car\u00f3w"
	},
	{
		"value": 37871,
		"label": "Mazowieckie, Warszawski Zachodni, O\u017car\u00f3w Mazowiecki"
	},
	{
		"value": 19008,
		"label": "\u0141\u00f3dzkie, Zgierski, Ozork\u00f3w"
	},
	{
		"value": 9195,
		"label": "\u0141\u00f3dzkie, Pabianicki, Pabianice"
	},
	{
		"value": 28307,
		"label": "Mazowieckie, Piaseczy\u0144ski, Piaseczno"
	},
	{
		"value": 5414,
		"label": "Mazowieckie, Pruszkowski, Piast\u00f3w"
	},
	{
		"value": 9467,
		"label": "\u015al\u0105skie, Piekary \u015al\u0105skie"
	},
	{
		"value": 36816,
		"label": "Wielkopolskie, Pilski, Pi\u0142a"
	},
	{
		"value": 52326,
		"label": "\u0141\u00f3dzkie, Piotrk\u00f3w Trybunalski"
	},
	{
		"value": 50016,
		"label": "Warmi\u0144sko-Mazurskie, Piski, Pisz"
	},
	{
		"value": 52532,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Piwniczna-Zdr\u00f3j"
	},
	{
		"value": 30792,
		"label": "Mazowieckie, P\u0142ocki, P\u0142ock"
	},
	{
		"value": 42177,
		"label": "Mazowieckie, P\u0142o\u0144ski, P\u0142o\u0144sk"
	},
	{
		"value": 52396,
		"label": "Wielkopolskie, Szamotulski, Pniewy"
	},
	{
		"value": 52510,
		"label": "Wielkopolskie, Pozna\u0144ski, Pobiedziska"
	},
	{
		"value": 2375,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, Polanica-Zdr\u00f3j"
	},
	{
		"value": 52286,
		"label": "Zachodniopomorskie, \u015awidwi\u0144ski, Po\u0142czyn-Zdr\u00f3j"
	},
	{
		"value": 28779,
		"label": "Zachodniopomorskie, Policki, Police"
	},
	{
		"value": 16956,
		"label": "Dolno\u015bl\u0105skie, Polkowicki, Polkowice"
	},
	{
		"value": 9905,
		"label": "Lubelskie, Opolski, Poniatowa"
	},
	{
		"value": 30892,
		"label": "Wielkopolskie, Pozna\u0144"
	},
	{
		"value": 49550,
		"label": "Pomorskie, Gda\u0144ski, Pruszcz Gda\u0144ski"
	},
	{
		"value": 10399,
		"label": "Mazowieckie, Pruszkowski, Pruszk\u00f3w"
	},
	{
		"value": 1236,
		"label": "Mazowieckie, Przasnyski, Przasnysz"
	},
	{
		"value": 52374,
		"label": "Podkarpackie, Przemy\u015bl"
	},
	{
		"value": 39791,
		"label": "Podkarpackie, Przeworski, Przeworsk"
	},
	{
		"value": 49952,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Pszczyna"
	},
	{
		"value": 36584,
		"label": "Pomorskie, Pucki, Puck"
	},
	{
		"value": 51827,
		"label": "Lubelskie, Pu\u0142awski, Pu\u0142awy"
	},
	{
		"value": 25679,
		"label": "Mazowieckie, Pu\u0142tuski, Pu\u0142tusk"
	},
	{
		"value": 51217,
		"label": "Wielkopolskie, Pozna\u0144ski, Puszczykowo"
	},
	{
		"value": 52414,
		"label": "\u015al\u0105skie, Gliwicki, Pyskowice"
	},
	{
		"value": 52392,
		"label": "Ma\u0142opolskie, Nowotarski, Rabka-Zdr\u00f3j"
	},
	{
		"value": 14537,
		"label": "\u015al\u0105skie, Raciborski, Racib\u00f3rz"
	},
	{
		"value": 21988,
		"label": "Ma\u0142opolskie, Tarnowski, Rad\u0142\u00f3w"
	},
	{
		"value": 33423,
		"label": "Mazowieckie, Radom"
	},
	{
		"value": 35114,
		"label": "\u0141\u00f3dzkie, Radomszcza\u0144ski, Radomsko"
	},
	{
		"value": 2829,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Radzymin"
	},
	{
		"value": 52516,
		"label": "Lubelskie, Radzy\u0144ski, Radzy\u0144 Podlaski"
	},
	{
		"value": 15600,
		"label": "\u0141\u00f3dzkie, Rawski, Rawa Mazowiecka"
	},
	{
		"value": 25977,
		"label": "Wielkopolskie, Rawicki, Rawicz"
	},
	{
		"value": 23029,
		"label": "Pomorskie, Wejherowski, Reda"
	},
	{
		"value": 52712,
		"label": "Podkarpackie, Ropczyce"
	},
	{
		"value": 8857,
		"label": "\u015al\u0105skie, Ruda \u015al\u0105ska"
	},
	{
		"value": 18709,
		"label": "Pomorskie, Wejherowski, Rumia"
	},
	{
		"value": 19648,
		"label": "\u015al\u0105skie, Rybnik"
	},
	{
		"value": 33659,
		"label": "Podkarpackie, Rzesz\u00f3w"
	},
	{
		"value": 51977,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Rzg\u00f3w"
	},
	{
		"value": 25168,
		"label": "Podkarpackie, Sanocki, Sanok"
	},
	{
		"value": 21267,
		"label": "Kujawsko-Pomorskie, S\u0119pole\u0144ski, S\u0119p\u00f3lno Kraje\u0144skie"
	},
	{
		"value": 52241,
		"label": "Mazowieckie, Legionowski, Serock"
	},
	{
		"value": 3910,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Siechnice"
	},
	{
		"value": 49690,
		"label": "Mazowieckie, Siedlce"
	},
	{
		"value": 49528,
		"label": "\u015al\u0105skie, Siemianowice \u015al\u0105skie"
	},
	{
		"value": 52341,
		"label": "Podlaskie, Siemiatycze"
	},
	{
		"value": 52522,
		"label": "\u0141\u00f3dzkie, Sieradzki, Sieradz"
	},
	{
		"value": 52339,
		"label": "\u015al\u0105skie, B\u0119dzi\u0144ski, Siewierz"
	},
	{
		"value": 29950,
		"label": "\u015awi\u0119tokrzyskie, Skar\u017cyski, Skar\u017cysko-Kamienna"
	},
	{
		"value": 42472,
		"label": "\u0141\u00f3dzkie, Skierniewice"
	},
	{
		"value": 29464,
		"label": "Zachodniopomorskie, S\u0142awie\u0144ski, S\u0142awno"
	},
	{
		"value": 52217,
		"label": "Lubuskie, S\u0142ubicki, S\u0142ubice"
	},
	{
		"value": 2435,
		"label": "Wielkopolskie, S\u0142upecki, S\u0142upca"
	},
	{
		"value": 15753,
		"label": "Pomorskie, S\u0142upsk"
	},
	{
		"value": 15168,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Sob\u00f3tka"
	},
	{
		"value": 42582,
		"label": "Mazowieckie, Sochaczewski, Sochaczew"
	},
	{
		"value": 52528,
		"label": "Mazowieckie, Soko\u0142owski, Soko\u0142\u00f3w Podlaski"
	},
	{
		"value": 52352,
		"label": "Kujawsko-Pomorskie, Bydgoski, Solec Kujawski"
	},
	{
		"value": 10847,
		"label": "Pomorskie, Sopot"
	},
	{
		"value": 43947,
		"label": "\u015al\u0105skie, Sosnowiec"
	},
	{
		"value": 23503,
		"label": "Wielkopolskie, \u015aremski, \u015arem"
	},
	{
		"value": 17556,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, \u015aroda \u015al\u0105ska"
	},
	{
		"value": 10183,
		"label": "Wielkopolskie, \u015aredzki, \u015aroda Wielkopolska"
	},
	{
		"value": 46169,
		"label": "\u015awi\u0119tokrzyskie, Starachowicki, Starachowice"
	},
	{
		"value": 38840,
		"label": "Zachodniopomorskie, Stargardzki, Stargard Szczeci\u0144ski"
	},
	{
		"value": 32224,
		"label": "Pomorskie, Starogardzki, Starogard Gda\u0144ski"
	},
	{
		"value": 17501,
		"label": "Wielkopolskie, Pozna\u0144ski, St\u0119szew"
	},
	{
		"value": 33825,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Strumie\u0144"
	},
	{
		"value": 12292,
		"label": "\u0141\u00f3dzkie, Zgierski, Stryk\u00f3w"
	},
	{
		"value": 18777,
		"label": "Dolno\u015bl\u0105skie, Strzeli\u0144ski, Strzelin"
	},
	{
		"value": 29050,
		"label": "Podkarpackie, Strzy\u017cowski, Strzy\u017c\u00f3w"
	},
	{
		"value": 51813,
		"label": "Ma\u0142opolskie, Suski, Sucha Beskidzka"
	},
	{
		"value": 52447,
		"label": "Lubuskie, Sul\u0119ci\u0144ski, Sul\u0119cin"
	},
	{
		"value": 26213,
		"label": "Mazowieckie, Mi\u0144ski, Sulej\u00f3wek"
	},
	{
		"value": 42309,
		"label": "Podlaskie, Suwa\u0142ki"
	},
	{
		"value": 46908,
		"label": "Wielkopolskie, Pozna\u0144ski, Swarz\u0119dz"
	},
	{
		"value": 47866,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, \u015awidnica"
	},
	{
		"value": 19804,
		"label": "Lubelskie, \u015awidnicki, \u015awidnik"
	},
	{
		"value": 22934,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, \u015awiebodzice"
	},
	{
		"value": 52759,
		"label": "Kujawsko-pomorskie, \u015awiecie"
	},
	{
		"value": 52232,
		"label": "Dolno\u015bl\u0105skie, Luba\u0144ski, \u015awierad\u00f3w Zdr\u00f3j"
	},
	{
		"value": 5229,
		"label": "\u015al\u0105skie, \u015awi\u0119toch\u0142owice"
	},
	{
		"value": 28754,
		"label": "Zachodniopomorskie, \u015awinouj\u015bcie"
	},
	{
		"value": 52758,
		"label": "Dolno\u015bl\u0105skie, Syc\u00f3w"
	},
	{
		"value": 625,
		"label": "Wielkopolskie, Szamotulski, Szamotu\u0142y"
	},
	{
		"value": 2151,
		"label": "Dolno\u015bl\u0105skie, Wa\u0142brzyski, Szczawno-Zdr\u00f3j"
	},
	{
		"value": 32657,
		"label": "Zachodniopomorskie, Szczecin"
	},
	{
		"value": 4435,
		"label": "Zachodniopomorskie, Szczecinecki, Szczecinek"
	},
	{
		"value": 52555,
		"label": "\u015al\u0105skie, Bielski, Szczyrk"
	},
	{
		"value": 36606,
		"label": "Warmi\u0144sko-Mazurskie, Szczycie\u0144ski, Szczytno"
	},
	{
		"value": 49967,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Szklarska Por\u0119ba"
	},
	{
		"value": 20836,
		"label": "Kujawsko-Pomorskie, Nakielski, Szubin"
	},
	{
		"value": 52506,
		"label": "Mazowieckie, Szyd\u0142owiecki, Szyd\u0142owiec"
	},
	{
		"value": 52228,
		"label": "Ma\u0142opolskie, Tarn\u00f3w"
	},
	{
		"value": 41348,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski, Tarnowskie G\u00f3ry"
	},
	{
		"value": 52273,
		"label": "\u015al\u0105skie, Tarnowskie G\u00f3ry"
	},
	{
		"value": 29078,
		"label": "Pomorskie, Tczewski, Tczew"
	},
	{
		"value": 52647,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, T\u0142uszcz"
	},
	{
		"value": 52517,
		"label": "Lubelskie, Tomaszowski, Tomasz\u00f3w Lubelski"
	},
	{
		"value": 42140,
		"label": "\u0141\u00f3dzkie, Tomaszowski, Tomasz\u00f3w Mazowiecki"
	},
	{
		"value": 19894,
		"label": "Kujawsko-Pomorskie, Toru\u0144"
	},
	{
		"value": 8588,
		"label": "Wielkopolskie, Czarnkowsko-Trzcianecki, Trzcianka"
	},
	{
		"value": 32972,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Trzebnica"
	},
	{
		"value": 12932,
		"label": "Wielkopolskie, Gnie\u017anie\u0144ski, Trzemeszno"
	},
	{
		"value": 52707,
		"label": "Wielkopolskie, Turek"
	},
	{
		"value": 39949,
		"label": "\u015al\u0105skie, Tychy"
	},
	{
		"value": 17318,
		"label": "Wielkopolskie, Pilski, Uj\u015bcie"
	},
	{
		"value": 20905,
		"label": "Pomorskie, S\u0142upski, Ustka"
	},
	{
		"value": 42904,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Ustro\u0144"
	},
	{
		"value": 52304,
		"label": "Ma\u0142opolskie, Wadowice"
	},
	{
		"value": 52236,
		"label": "Dolno\u015bl\u0105skie, Wa\u0142brzych"
	},
	{
		"value": 52214,
		"label": "Mazowieckie, Gr\u00f3jecki, Warka"
	},
	{
		"value": 8647,
		"label": "Mazowieckie, Warszawa"
	},
	{
		"value": 1786,
		"label": "Podlaskie, Bia\u0142ostocki, Wasilk\u00f3w"
	},
	{
		"value": 35729,
		"label": "Warmi\u0144sko-mazurskie, W\u0119gorzewski, W\u0119gorzewo"
	},
	{
		"value": 19240,
		"label": "Pomorskie, Wejherowski, Wejherowo"
	},
	{
		"value": 49238,
		"label": "Ma\u0142opolskie, Wielicki, Wieliczka"
	},
	{
		"value": 52321,
		"label": "\u0141\u00f3dzkie, Wieruszowski, Wierusz\u00f3w"
	},
	{
		"value": 52294,
		"label": "\u015al\u0105skie, Cieszy\u0144ski, Wis\u0142a"
	},
	{
		"value": 49596,
		"label": "Pomorskie, Pucki, W\u0142adys\u0142awowo"
	},
	{
		"value": 44391,
		"label": "Kujawsko-Pomorskie, W\u0142oc\u0142awek"
	},
	{
		"value": 29786,
		"label": "Lubelskie, W\u0142odawski, W\u0142odawa"
	},
	{
		"value": 16576,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Wolin"
	},
	{
		"value": 34586,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Wo\u0142omin"
	},
	{
		"value": 4237,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski, Wo\u0142\u00f3w"
	},
	{
		"value": 50574,
		"label": "Wielkopolskie, Wolszty\u0144ski, Wolsztyn"
	},
	{
		"value": 26955,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw"
	},
	{
		"value": 49639,
		"label": "Wielkopolskie, Wrzesi\u0144ski, Wrze\u015bnia"
	},
	{
		"value": 52437,
		"label": "Lubuskie, Wschowski, Wschowa"
	},
	{
		"value": 33411,
		"label": "Wielkopolskie, Pilski, Wyrzysk"
	},
	{
		"value": 37260,
		"label": "Mazowieckie, Wyszkowski, Wyszk\u00f3w"
	},
	{
		"value": 23007,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Z\u0105bki"
	},
	{
		"value": 52711,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki, Z\u0105bkowice \u015al\u0105skie"
	},
	{
		"value": 1945,
		"label": "\u015al\u0105skie, Zabrze"
	},
	{
		"value": 52246,
		"label": "Lubuskie, \u017baga\u0144ski, \u017baga\u0144"
	},
	{
		"value": 24848,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Zakopane"
	},
	{
		"value": 52401,
		"label": "Lubelskie, Zamo\u015b\u0107"
	},
	{
		"value": 52468,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, \u017bar\u00f3w"
	},
	{
		"value": 8848,
		"label": "Lubuskie, \u017barski, \u017bary"
	},
	{
		"value": 40517,
		"label": "\u015al\u0105skie, Zawiercia\u0144ski, Zawiercie"
	},
	{
		"value": 1136,
		"label": "\u0141\u00f3dzkie, Zgierski, Zgierz"
	},
	{
		"value": 49163,
		"label": "Dolno\u015bl\u0105skie, Zgorzelecki, Zgorzelec"
	},
	{
		"value": 52451,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki, Zi\u0119bice"
	},
	{
		"value": 48806,
		"label": "Lubuskie, Zielona G\u00f3ra"
	},
	{
		"value": 43707,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Zielonka"
	},
	{
		"value": 24706,
		"label": "Wielkopolskie, Z\u0142otowski, Z\u0142ot\u00f3w"
	},
	{
		"value": 52462,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, \u017bmigr\u00f3d"
	},
	{
		"value": 52297,
		"label": "\u015al\u0105skie, \u017bory"
	},
	{
		"value": 39454,
		"label": "Pomorskie, Kartuski, \u017bukowo"
	},
	{
		"value": 11917,
		"label": "Lubelskie, Zamojski, Zwierzyniec"
	},
	{
		"value": 19760,
		"label": "Mazowieckie, \u017byrardowski, \u017byrard\u00f3w"
	},
	{
		"value": 47604,
		"label": "Dolno\u015bl\u0105skie, Wo\u0142owski, Aleksandrowice"
	},
	{
		"value": 27903,
		"label": "Ma\u0142opolskie, Chrzanowski, Babice"
	},
	{
		"value": 22914,
		"label": "Pomorskie, Kartuski, Banino"
	},
	{
		"value": 6771,
		"label": "Wielkopolskie, Pozna\u0144ski, Baranowo"
	},
	{
		"value": 52407,
		"label": "Warmi\u0144sko-Mazurskie, Nidzicki, Bartoszki"
	},
	{
		"value": 6766,
		"label": "Mazowieckie, Piaseczy\u0144ski, Baszk\u00f3wka"
	},
	{
		"value": 2598,
		"label": "Zachodniopomorskie, Policki, Bezrzecze"
	},
	{
		"value": 52378,
		"label": "\u0141\u00f3dzkie, Zgierski, Bia\u0142a"
	},
	{
		"value": 52349,
		"label": "Mazowieckie, Legionowski, Bia\u0142obrzegi"
	},
	{
		"value": 8419,
		"label": "Dolno\u015bl\u0105skie, G\u0142ogowski, Bia\u0142o\u0142\u0119ka"
	},
	{
		"value": 27497,
		"label": "Ma\u0142opolskie, Krakowski, Bibice"
	},
	{
		"value": 38313,
		"label": "Wielkopolskie, Pozna\u0144ski, Biedrusko"
	},
	{
		"value": 17812,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Bielany Wroc\u0142awskie"
	},
	{
		"value": 23356,
		"label": "Mazowieckie, Warszawski Zachodni, Bieniewice"
	},
	{
		"value": 52372,
		"label": "Lubelskie, Bi\u0142gorajski, Bi\u0142goraj"
	},
	{
		"value": 31477,
		"label": "Mazowieckie, Nowodworski, B\u0142\u0119dowo"
	},
	{
		"value": 52470,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Blizanowice"
	},
	{
		"value": 52500,
		"label": "Mazowieckie, Warszawski Zachodni, Blizne Jasi\u0144skiego"
	},
	{
		"value": 52203,
		"label": "Wielkopolskie, Pozna\u0144ski, Bnin"
	},
	{
		"value": 48318,
		"label": "Mazowieckie, Piaseczy\u0144ski, Bobrowiec"
	},
	{
		"value": 52329,
		"label": "\u015awi\u0119tokrzyskie, Ostrowiecki, Bodzech\u00f3w"
	},
	{
		"value": 8304,
		"label": "Wielkopolskie, Obornicki, Bogdanowo"
	},
	{
		"value": 52311,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Boguszyce"
	},
	{
		"value": 27562,
		"label": "Pomorskie, Wejherowski, Bojano"
	},
	{
		"value": 39699,
		"label": "Ma\u0142opolskie, Krakowski, Bolechowice"
	},
	{
		"value": 52289,
		"label": "Mazowieckie, Otwocki, Boles\u0142aw\u00f3w"
	},
	{
		"value": 17403,
		"label": "\u0141\u00f3dzkie, Skierniewicki, Bolim\u00f3w"
	},
	{
		"value": 9336,
		"label": "Pomorskie, Wejherowski, Bolszewo"
	},
	{
		"value": 26167,
		"label": "Pomorskie, Kartuski, Borcz"
	},
	{
		"value": 2230,
		"label": "Pomorskie, Gda\u0144ski, Borkowo"
	},
	{
		"value": 27495,
		"label": "Wielkopolskie, Pozna\u0144ski, Bor\u00f3wiec"
	},
	{
		"value": 52302,
		"label": "\u0141\u00f3dzkie, Zgierski, Bratoszewice"
	},
	{
		"value": 3578,
		"label": "Wielkopolskie, \u015aredzki, Brodowo"
	},
	{
		"value": 52526,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Brzezia \u0141\u0105ka"
	},
	{
		"value": 38115,
		"label": "Opolskie, Opolski, Brzezie"
	},
	{
		"value": 6684,
		"label": "Ma\u0142opolskie, Krakowski, Brzezie"
	},
	{
		"value": 25972,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, Brzezina"
	},
	{
		"value": 52710,
		"label": "Ma\u0142opolskie, Krakowski, Brzoz\u00f3wka"
	},
	{
		"value": 48736,
		"label": "Wielkopolskie, Pozna\u0144ski, Bugaj"
	},
	{
		"value": 7431,
		"label": "\u0141\u00f3dzkie, Pabianicki, Bychlew"
	},
	{
		"value": 52301,
		"label": "Pomorskie, S\u0142upski, Bydlino"
	},
	{
		"value": 52229,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Byszewo"
	},
	{
		"value": 27525,
		"label": "Mazowieckie, Legionowski, Chotom\u00f3w"
	},
	{
		"value": 17941,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Chrz\u0105stawa Wielka"
	},
	{
		"value": 49279,
		"label": "Pomorskie, Kartuski, Chwaszczyno"
	},
	{
		"value": 6338,
		"label": "Mazowieckie, Piaseczy\u0144ski, Chylice"
	},
	{
		"value": 31995,
		"label": "Mazowieckie, Piaseczy\u0144ski, Chyliczki"
	},
	{
		"value": 52299,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Cierpice"
	},
	{
		"value": 52757,
		"label": "Mazowieckie, Nowodworski, Cybulice Ma\u0142e"
	},
	{
		"value": 32830,
		"label": "Pomorskie, Kartuski, Czaple"
	},
	{
		"value": 16583,
		"label": "Wielkopolskie, Pozna\u0144ski, Czapury"
	},
	{
		"value": 31177,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Czarna G\u00f3ra"
	},
	{
		"value": 34679,
		"label": "Ma\u0142opolskie, Wielicki, Czarnochowice"
	},
	{
		"value": 52312,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Czernikowo"
	},
	{
		"value": 19840,
		"label": "Wielkopolskie, Pozna\u0144ski, Czmo\u0144"
	},
	{
		"value": 52400,
		"label": "Wielkopolskie, Pozna\u0144ski, D\u0105browa"
	},
	{
		"value": 52708,
		"label": "\u015awi\u0119tokrzyskie, Kielecki, D\u0105browa"
	},
	{
		"value": 52508,
		"label": "Mazowieckie, Legionowski, D\u0105browa Chotomowska"
	},
	{
		"value": 39467,
		"label": "Wielkopolskie, Nowotomyski, D\u0105browa Nowa"
	},
	{
		"value": 38130,
		"label": "Wielkopolskie, Pozna\u0144ski, D\u0105br\u00f3wka"
	},
	{
		"value": 52467,
		"label": "Podlaskie, Bia\u0142ostocki, D\u0105br\u00f3wki"
	},
	{
		"value": 52226,
		"label": "Wielkopolskie, Pozna\u0144ski, Dachowa"
	},
	{
		"value": 30437,
		"label": "Wielkopolskie, Pozna\u0144ski, Daszewice"
	},
	{
		"value": 11799,
		"label": "Mazowieckie, Pruszkowski, Dawidy Bankowe"
	},
	{
		"value": 52355,
		"label": "Mazowieckie, Mi\u0144ski, D\u0142uga Ko\u015bcielna"
	},
	{
		"value": 30054,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, D\u0142ugo\u0142\u0119ka"
	},
	{
		"value": 14376,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Dobrzykowice"
	},
	{
		"value": 33284,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Domas\u0142aw"
	},
	{
		"value": 52348,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Domaszczyn"
	},
	{
		"value": 24393,
		"label": "Wielkopolskie, Pozna\u0144ski, Dopiewiec"
	},
	{
		"value": 52296,
		"label": "Mazowieckie, Legionowski, Dosin"
	},
	{
		"value": 40774,
		"label": "Wielkopolskie, Leszczy\u0144ski, Drobnin"
	},
	{
		"value": 29280,
		"label": "Mazowieckie, Warszawski Zachodni, Duchnice"
	},
	{
		"value": 36176,
		"label": "Mazowieckie, Otwocki, Duchn\u00f3w"
	},
	{
		"value": 50552,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Dywity"
	},
	{
		"value": 42908,
		"label": "Mazowieckie, Warszawski Zachodni, Dziekan\u00f3w Le\u015bny"
	},
	{
		"value": 52346,
		"label": "Mazowieckie, Warszawski Zachodni, Dziekan\u00f3w Polski"
	},
	{
		"value": 25530,
		"label": "Pomorskie, Kartuski, Dzier\u017c\u0105\u017cno"
	},
	{
		"value": 13379,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Dziwn\u00f3wek"
	},
	{
		"value": 52245,
		"label": "Pomorskie, Kartuski, Egiertowo"
	},
	{
		"value": 32944,
		"label": "Mazowieckie, Pruszkowski, Falenty Du\u017ce"
	},
	{
		"value": 32142,
		"label": "Mazowieckie, Pruszkowski, Falenty Nowe"
	},
	{
		"value": 51660,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Florynka"
	},
	{
		"value": 9080,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, G\u0105d\u00f3w"
	},
	{
		"value": 52460,
		"label": "Ma\u0142opolskie, Krakowski, Gaj"
	},
	{
		"value": 9971,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Ga\u0142k\u00f3w Du\u017cy"
	},
	{
		"value": 28489,
		"label": "Mazowieckie, Radomski, G\u0119barz\u00f3w"
	},
	{
		"value": 52223,
		"label": "Ma\u0142opolskie, Krakowski, Giebu\u0142t\u00f3w"
	},
	{
		"value": 22752,
		"label": "\u015al\u0105skie, Gliwicki, Giera\u0142towice"
	},
	{
		"value": 52244,
		"label": "Pomorskie, Kartuski, Glincz"
	},
	{
		"value": 49033,
		"label": "Ma\u0142opolskie, My\u015blenicki, G\u0142ogocz\u00f3w"
	},
	{
		"value": 31390,
		"label": "Wielkopolskie, Pozna\u0144ski, G\u0142uchowo"
	},
	{
		"value": 46998,
		"label": "Pomorskie, Wejherowski, Gniewino"
	},
	{
		"value": 52240,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Gocza\u0142kowice-Zdr\u00f3j"
	},
	{
		"value": 52224,
		"label": "Wielkopolskie, Pozna\u0144ski, Go\u0142uski"
	},
	{
		"value": 52313,
		"label": "Mazowieckie, Otwocki, G\u00f3raszka"
	},
	{
		"value": 12944,
		"label": "Pomorskie, Wejherowski, Go\u015bcicino"
	},
	{
		"value": 52335,
		"label": "\u015al\u0105skie, Miko\u0142owski, Gosty\u0144"
	},
	{
		"value": 6220,
		"label": "Wielkopolskie, Pozna\u0144ski, Gowarzewo"
	},
	{
		"value": 52549,
		"label": "Mazowieckie, Garwoli\u0144ski, Go\u017adzik"
	},
	{
		"value": 52409,
		"label": "Podlaskie, Bia\u0142ostocki, Grab\u00f3wka"
	},
	{
		"value": 31418,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Groblice"
	},
	{
		"value": 843,
		"label": "Mazowieckie, Nowodworski, Grochale"
	},
	{
		"value": 32038,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Gr\u00f3dek Nad Dunajcem"
	},
	{
		"value": 8498,
		"label": "\u015al\u0105skie, Bielski, Grodziec"
	},
	{
		"value": 52342,
		"label": "\u0141\u00f3dzkie, Zgierski, Grotniki"
	},
	{
		"value": 9565,
		"label": "Mazowieckie, Ciechanowski, Grudusk"
	},
	{
		"value": 15024,
		"label": "Wielkopolskie, Pozna\u0144ski, Gruszczyn"
	},
	{
		"value": 52337,
		"label": "Mazowieckie, Mi\u0144ski, Grzebowilk"
	},
	{
		"value": 52308,
		"label": "Zachodniopomorskie, Policki, Grzepnica"
	},
	{
		"value": 29781,
		"label": "Pomorskie, Ko\u015bcierski, Grzybowo"
	},
	{
		"value": 40396,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Grzybowo"
	},
	{
		"value": 4332,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Gutkowo"
	},
	{
		"value": 7218,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Helen\u00f3w"
	},
	{
		"value": 19320,
		"label": "Ma\u0142opolskie, Nowotarski, Huba"
	},
	{
		"value": 29941,
		"label": "Podlaskie, Bia\u0142ostocki, Ignatki-Osiedle"
	},
	{
		"value": 52379,
		"label": "Ma\u0142opolskie, Krakowski, Iwanowice"
	},
	{
		"value": 42100,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Iwiny"
	},
	{
		"value": 38339,
		"label": "Mazowieckie, Nowodworski, Izabelin-Dziekan\u00f3wek"
	},
	{
		"value": 28697,
		"label": "Mazowieckie, Legionowski, Jab\u0142onna"
	},
	{
		"value": 38176,
		"label": "Mazowieckie, Legionowski, Jadwisin"
	},
	{
		"value": 52497,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Jakson\u00f3w"
	},
	{
		"value": 43812,
		"label": "Mazowieckie, Grodziski, Jaktor\u00f3w-Kolonia"
	},
	{
		"value": 52509,
		"label": "Lubuskie, Gorzowski, Janczewo"
	},
	{
		"value": 52538,
		"label": "Mazowieckie, Pruszkowski, Janki"
	},
	{
		"value": 39660,
		"label": "Pomorskie, Gda\u0144ski, Jankowo Gda\u0144skie"
	},
	{
		"value": 52495,
		"label": "Pomorskie, Nowodworski, Jantar"
	},
	{
		"value": 52443,
		"label": "Podkarpackie, Rzeszowski, Jasionka"
	},
	{
		"value": 52415,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski, Ja\u015bkowice"
	},
	{
		"value": 33634,
		"label": "Mazowieckie, Grodziski, Jastrz\u0119bnik"
	},
	{
		"value": 52191,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Jaszkotle"
	},
	{
		"value": 36249,
		"label": "Ma\u0142opolskie, O\u015bwi\u0119cimski, Jawiszowice"
	},
	{
		"value": 10222,
		"label": "Wielkopolskie, Pozna\u0144ski, Jelonek"
	},
	{
		"value": 10760,
		"label": "Ma\u0142opolskie, Krakowski, Jerzmanowice"
	},
	{
		"value": 52425,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Jeszkowice"
	},
	{
		"value": 52397,
		"label": "Warmi\u0144sko-Mazurskie, Mr\u0105gowski, Jora Wielka"
	},
	{
		"value": 32821,
		"label": "Mazowieckie, Piaseczy\u0144ski, J\u00f3zefos\u0142aw"
	},
	{
		"value": 18983,
		"label": "Mazowieckie, \u017byrardowski, J\u00f3zef\u00f3w"
	},
	{
		"value": 38694,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Justyn\u00f3w"
	},
	{
		"value": 52288,
		"label": "Pomorskie, Gda\u0144ski, Juszkowo"
	},
	{
		"value": 50415,
		"label": "Podlaskie, Bia\u0142ostocki, Juszkowy Gr\u00f3d"
	},
	{
		"value": 52556,
		"label": "Mazowieckie, Pruszkowski, Kajetany"
	},
	{
		"value": 35457,
		"label": "Wielkopolskie, Leszczy\u0144ski, K\u0105kolewo"
	},
	{
		"value": 52222,
		"label": "Lubelskie, Lubelski, Kalin\u00f3wka"
	},
	{
		"value": 52464,
		"label": "Wielkopolskie, Pozna\u0144ski, Kalwy"
	},
	{
		"value": 41366,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kamie\u0144"
	},
	{
		"value": 52235,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kamieniec Wroc\u0142awski"
	},
	{
		"value": 52368,
		"label": "Dolno\u015bl\u0105skie, Z\u0105bkowicki, Kamieniec Z\u0105bkowicki"
	},
	{
		"value": 52820,
		"label": "Warmi\u0144sko-mazurskie, Szczycie\u0144ski, Kamionek"
	},
	{
		"value": 22002,
		"label": "Mazowieckie, \u017byrardowski, Kamionka"
	},
	{
		"value": 2934,
		"label": "Wielkopolskie, Pozna\u0144ski, Kamionki"
	},
	{
		"value": 52428,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Kamionki Ma\u0142e"
	},
	{
		"value": 52416,
		"label": "\u015al\u0105skie, Bielski, Kani\u00f3w"
	},
	{
		"value": 7633,
		"label": "Pomorskie, Wejherowski, K\u0105pino"
	},
	{
		"value": 39771,
		"label": "Mazowieckie, Warszawski Zachodni, Kaputy"
	},
	{
		"value": 52317,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Karwiany"
	},
	{
		"value": 8542,
		"label": "Pomorskie, Nowodworski, K\u0105ty Rybackie"
	},
	{
		"value": 37644,
		"label": "Mazowieckie, Legionowski, K\u0105ty W\u0119gierskie"
	},
	{
		"value": 10619,
		"label": "Wielkopolskie, Szamotulski, Ka\u017amierz"
	},
	{
		"value": 52310,
		"label": "Pomorskie, Wejherowski, K\u0119b\u0142owo"
	},
	{
		"value": 43000,
		"label": "Mazowieckie, Piaseczy\u0144ski, K\u0119dzier\u00f3wka"
	},
	{
		"value": 42497,
		"label": "Wielkopolskie, Pozna\u0144ski, Kiekrz"
	},
	{
		"value": 50896,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kie\u0142cz\u00f3w"
	},
	{
		"value": 52354,
		"label": "Mazowieckie, Warszawski Zachodni, Kie\u0142pin"
	},
	{
		"value": 37907,
		"label": "Pomorskie, Kartuski, Kie\u0142pino"
	},
	{
		"value": 26602,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Kie\u017aliny"
	},
	{
		"value": 52452,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Klebark Wielki"
	},
	{
		"value": 52498,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Klemb\u00f3w"
	},
	{
		"value": 52417,
		"label": "Pomorskie, Gda\u0144ski, Kleszczewko"
	},
	{
		"value": 22651,
		"label": "Wielkopolskie, Pozna\u0144ski, Kliny"
	},
	{
		"value": 40294,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Kobierzyce"
	},
	{
		"value": 36581,
		"label": "Wielkopolskie, Pozna\u0144ski, Kobylnica"
	},
	{
		"value": 3964,
		"label": "Wielkopolskie, Pozna\u0144ski, Kobylniki"
	},
	{
		"value": 12360,
		"label": "Mazowieckie, Warszawski Zachodni, Koczargi Stare"
	},
	{
		"value": 37334,
		"label": "Pomorskie, Gda\u0144ski, Kolbudy"
	},
	{
		"value": 52829,
		"label": "Lubelskie, Lubelski, Kolonia Pliszczyn"
	},
	{
		"value": 52503,
		"label": "Wielkopolskie, Kaliski, Kolonia Skarszewek"
	},
	{
		"value": 9076,
		"label": "Wielkopolskie, Pozna\u0144ski, Komorniki"
	},
	{
		"value": 26898,
		"label": "Warmi\u0144sko-Mazurskie, Dzia\u0142dowski, Komorniki"
	},
	{
		"value": 39514,
		"label": "Mazowieckie, Pruszkowski, Komor\u00f3w"
	},
	{
		"value": 52316,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, Komor\u00f3w"
	},
	{
		"value": 35695,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Komorowice"
	},
	{
		"value": 52453,
		"label": "Wielkopolskie, Pozna\u0144ski, Konarskie"
	},
	{
		"value": 46080,
		"label": "Wielkopolskie, Pozna\u0144ski, Koninko"
	},
	{
		"value": 9532,
		"label": "Mazowieckie, W\u0119growski, Korytnica"
	},
	{
		"value": 22513,
		"label": "Mazowieckie, Piaseczy\u0144ski, Korzeni\u00f3wka"
	},
	{
		"value": 52242,
		"label": "Ma\u0142opolskie, Nowos\u0105decki, Korzenna"
	},
	{
		"value": 39282,
		"label": "Pomorskie, Pucki, Kosakowo"
	},
	{
		"value": 7421,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Ko\u015bcielisko"
	},
	{
		"value": 52227,
		"label": "Ma\u0142opolskie, Tarnowski, Koszyce Wielkie"
	},
	{
		"value": 52502,
		"label": "Opolskie, Opolski, Kot\u00f3rz Wielki"
	},
	{
		"value": 52501,
		"label": "Pomorskie, Gda\u0144ski, Kowale"
	},
	{
		"value": 12905,
		"label": "Wielkopolskie, Pozna\u0144ski, Kozieg\u0142owy"
	},
	{
		"value": 11058,
		"label": "Wielkopolskie, Pozna\u0144ski, Kr\u0105plewo"
	},
	{
		"value": 40626,
		"label": "Podkarpackie, Rzeszowski, Krasne"
	},
	{
		"value": 9494,
		"label": "Mazowieckie, Warszawski Zachodni, Kr\u0119czki"
	},
	{
		"value": 52828,
		"label": "Kujawsko-pomorskie, Toru\u0144ski, Krobia"
	},
	{
		"value": 44106,
		"label": "Ma\u0142opolskie, Krakowski, Kryspin\u00f3w"
	},
	{
		"value": 44037,
		"label": "Mazowieckie, \u017byrardowski, Krze Du\u017ce"
	},
	{
		"value": 48950,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Krzept\u00f3w"
	},
	{
		"value": 36620,
		"label": "Wielkopolskie, Leszczy\u0144ski, Krzycko Wielkie"
	},
	{
		"value": 51455,
		"label": "\u0141\u00f3dzkie, Zgierski, Krzywiec"
	},
	{
		"value": 4996,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Krzy\u017canowice"
	},
	{
		"value": 31125,
		"label": "\u0141\u00f3dzkie, Pabianicki, Ksawer\u00f3w"
	},
	{
		"value": 35086,
		"label": "Mazowieckie, Grodziski, Ksi\u0105\u017cenice"
	},
	{
		"value": 52389,
		"label": "Dolno\u015bl\u0105skie, Legnicki, Kunice"
	},
	{
		"value": 52422,
		"label": "Ma\u0142opolskie, Wielicki, Kunice"
	},
	{
		"value": 37952,
		"label": "Wielkopolskie, Mi\u0119dzychodzki, Kwilcz"
	},
	{
		"value": 48860,
		"label": "Mazowieckie, Warszawski Zachodni, Kwiryn\u00f3w"
	},
	{
		"value": 52275,
		"label": "Mazowieckie, Legionowski, \u0141ajski"
	},
	{
		"value": 52432,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, \u0141\u0105ka"
	},
	{
		"value": 34146,
		"label": "Mazowieckie, Piaseczy\u0144ski, \u0141azy"
	},
	{
		"value": 37135,
		"label": "Pomorskie, Pucki, \u0141ebcz"
	},
	{
		"value": 718,
		"label": "Ma\u0142opolskie, Wielicki, Lednica G\u00f3rna"
	},
	{
		"value": 52277,
		"label": "Dolno\u015bl\u0105skie, Legnicki, Legnickie Pole"
	},
	{
		"value": 3947,
		"label": "Mazowieckie, Piaseczy\u0144ski, Lesznowola"
	},
	{
		"value": 36767,
		"label": "Mazowieckie, Gr\u00f3jecki, Lesznowola"
	},
	{
		"value": 22066,
		"label": "Pomorskie, Kartuski, Le\u017ano"
	},
	{
		"value": 34647,
		"label": "Ma\u0142opolskie, Krakowski, Libert\u00f3w"
	},
	{
		"value": 44885,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Ligota Pi\u0119kna"
	},
	{
		"value": 52821,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Lipinki"
	},
	{
		"value": 12693,
		"label": "Mazowieckie, Warszawski Zachodni, Lipk\u00f3w"
	},
	{
		"value": 6704,
		"label": "Mazowieckie, Otwocki, Lipowo"
	},
	{
		"value": 52399,
		"label": "Ma\u0142opolskie, Krakowski, Liszki"
	},
	{
		"value": 52353,
		"label": "Mazowieckie, W\u0119growski, \u0141och\u00f3w"
	},
	{
		"value": 52430,
		"label": "Kujawsko-Pomorskie, Bydgoski, \u0141ochowo"
	},
	{
		"value": 6883,
		"label": "Mazowieckie, Warszawski Zachodni, \u0141omianki Dolne"
	},
	{
		"value": 8055,
		"label": "Wielkopolskie, Pozna\u0144ski, \u0141opuchowo"
	},
	{
		"value": 52250,
		"label": "Ma\u0142opolskie, Tarnowski, \u0141owcz\u00f3wek"
	},
	{
		"value": 52806,
		"label": "Wielkopolskie, Pozna\u0144ski, \u0141ow\u0119cin"
	},
	{
		"value": 38755,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u0141ozina"
	},
	{
		"value": 52375,
		"label": "Lubelskie, Lubartowski, Lubart\u00f3w"
	},
	{
		"value": 52514,
		"label": "Lubuskie, Nowosolski, Lubi\u0119cin"
	},
	{
		"value": 52421,
		"label": "Pomorskie, Tczewski, Lubiszewo Tczewskie"
	},
	{
		"value": 48993,
		"label": "Zachodniopomorskie, Kamie\u0144ski, \u0141uk\u0119cin"
	},
	{
		"value": 8482,
		"label": "Wielkopolskie, Pozna\u0144ski, Lus\u00f3wko"
	},
	{
		"value": 42643,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, Lutynia"
	},
	{
		"value": 5710,
		"label": "Pomorskie, Wejherowski, Luzino"
	},
	{
		"value": 4025,
		"label": "Mazowieckie, Piaseczy\u0144ski, Magdalenka"
	},
	{
		"value": 28635,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Majdan"
	},
	{
		"value": 52395,
		"label": "Kujawsko-Pomorskie, Bydgoski, Maksymilianowo"
	},
	{
		"value": 6439,
		"label": "Mazowieckie, Otwocki, Malcan\u00f3w"
	},
	{
		"value": 52544,
		"label": "Warmi\u0144sko-Mazurskie, Ostr\u00f3dzki, Ma\u0142dyty"
	},
	{
		"value": 29615,
		"label": "Mazowieckie, Nowodworski, Ma\u0142ocice"
	},
	{
		"value": 52282,
		"label": "Opolskie, Opolski, Marsza\u0142ki"
	},
	{
		"value": 37810,
		"label": "\u015awi\u0119tokrzyskie, Kielecki, Mas\u0142\u00f3w Pierwszy"
	},
	{
		"value": 52324,
		"label": "Pomorskie, Pucki, Mechelinki"
	},
	{
		"value": 10668,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, M\u0119d\u0142\u00f3w"
	},
	{
		"value": 10332,
		"label": "Mazowieckie, Otwocki, Micha\u0142\u00f3wek"
	},
	{
		"value": 52376,
		"label": "Mazowieckie, Legionowski, Micha\u0142\u00f3w-Grabina"
	},
	{
		"value": 52225,
		"label": "Ma\u0142opolskie, Krakowski, Micha\u0142owice"
	},
	{
		"value": 6354,
		"label": "Mazowieckie, Pruszkowski, Micha\u0142owice-Wie\u015b"
	},
	{
		"value": 38052,
		"label": "Mazowieckie, Legionowski, Micha\u0142\u00f3w-Regin\u00f3w"
	},
	{
		"value": 40170,
		"label": "Pomorskie, Kartuski, Miechucino"
	},
	{
		"value": 34893,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Mi\u0119dzywodzie"
	},
	{
		"value": 16057,
		"label": "Pomorskie, S\u0142upski, Mielno"
	},
	{
		"value": 24820,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Mielno"
	},
	{
		"value": 13611,
		"label": "Zachodniopomorskie, Policki, Mierzyn"
	},
	{
		"value": 27600,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Mirk\u00f3w"
	},
	{
		"value": 15044,
		"label": "Mazowieckie, Pruszkowski, M\u0142och\u00f3w"
	},
	{
		"value": 48601,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Mnichowice"
	},
	{
		"value": 23982,
		"label": "Ma\u0142opolskie, Krakowski, Mnik\u00f3w"
	},
	{
		"value": 52003,
		"label": "Ma\u0142opolskie, Krakowski, Modlnica"
	},
	{
		"value": 31171,
		"label": "Ma\u0142opolskie, Krakowski, Modlniczka"
	},
	{
		"value": 30274,
		"label": "Ma\u0142opolskie, Krakowski, Mogilany"
	},
	{
		"value": 32614,
		"label": "Zachodniopomorskie, Stargardzki, Morzyczyn"
	},
	{
		"value": 19040,
		"label": "Pomorskie, Pucki, Mosty"
	},
	{
		"value": 30217,
		"label": "Lubelskie, Lubelski, Motycz"
	},
	{
		"value": 3992,
		"label": "Wielkopolskie, Pozna\u0144ski, Mrowino"
	},
	{
		"value": 40413,
		"label": "Mazowieckie, Mi\u0144ski, Mrozy"
	},
	{
		"value": 19023,
		"label": "Zachodniopomorskie, Gryficki, Mrze\u017cyno"
	},
	{
		"value": 52427,
		"label": "Podkarpackie, Jaros\u0142awski, Munina"
	},
	{
		"value": 764,
		"label": "Mazowieckie, Piaseczy\u0144ski, Mysiad\u0142o"
	},
	{
		"value": 52554,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Mys\u0142akowice"
	},
	{
		"value": 15839,
		"label": "Kujawsko-Pomorskie, Bydgoski, My\u015bl\u0119cinek"
	},
	{
		"value": 19543,
		"label": "Mazowieckie, Pruszkowski, Nadarzyn"
	},
	{
		"value": 4865,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Nadma"
	},
	{
		"value": 6002,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Nadolice Wielkie"
	},
	{
		"value": 11650,
		"label": "Ma\u0142opolskie, Krakowski, Narama"
	},
	{
		"value": 52434,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Naterki"
	},
	{
		"value": 52439,
		"label": "\u015al\u0105skie, Gliwicki, Nieborowice"
	},
	{
		"value": 22442,
		"label": "Zachodniopomorskie, Gryficki, Niechorze"
	},
	{
		"value": 12266,
		"label": "Ma\u0142opolskie, Tarnowski, Niedomice"
	},
	{
		"value": 52230,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Niekanin"
	},
	{
		"value": 51206,
		"label": "Kujawsko-Pomorskie, Bydgoski, Niemcz"
	},
	{
		"value": 25245,
		"label": "Mazowieckie, Legionowski, Niepor\u0119t"
	},
	{
		"value": 52291,
		"label": "Podlaskie, Bia\u0142ostocki, Niewodnica Korycka"
	},
	{
		"value": 52405,
		"label": "Wielkopolskie, \u015aremski, Nochowo"
	},
	{
		"value": 43998,
		"label": "Mazowieckie, Piaseczy\u0144ski, Nowa Iwiczna"
	},
	{
		"value": 37600,
		"label": "Mazowieckie, Piaseczy\u0144ski, Nowa Wola"
	},
	{
		"value": 52243,
		"label": "Pomorskie, Kartuski, Nowe Czaple"
	},
	{
		"value": 52249,
		"label": "Mazowieckie, Siedlecki, Nowe Iganie"
	},
	{
		"value": 27468,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, Nowe Lipiny"
	},
	{
		"value": 52553,
		"label": "\u015awi\u0119tokrzyskie, Kielecki, Nowiny"
	},
	{
		"value": 29580,
		"label": "Zachodniopomorskie, My\u015bliborski, Nowogr\u00f3dek Pomorski"
	},
	{
		"value": 10959,
		"label": "Mazowieckie, Warszawski Zachodni, Nowy Dziekan\u00f3w"
	},
	{
		"value": 52531,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski, Obora"
	},
	{
		"value": 52390,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Obrowo"
	},
	{
		"value": 37970,
		"label": "Lubuskie, Zielonog\u00f3rski, Ochla"
	},
	{
		"value": 34992,
		"label": "Ma\u0142opolskie, Wielicki, Ochman\u00f3w"
	},
	{
		"value": 52507,
		"label": "Mazowieckie, Legionowski, Olszewnica Nowa"
	},
	{
		"value": 52690,
		"label": "Mazowieckie, Legionowski, Olszewnica Stara"
	},
	{
		"value": 13084,
		"label": "Mazowieckie, Pruszkowski, Opacz-Kolonia"
	},
	{
		"value": 51821,
		"label": "Ma\u0142opolskie, Proszowicki, Opatkowice"
	},
	{
		"value": 20837,
		"label": "Pomorskie, Wejherowski, Orle"
	},
	{
		"value": 52701,
		"label": "\u015al\u0105skie, Miko\u0142owski, Ornontowice"
	},
	{
		"value": 42560,
		"label": "Kujawsko-Pomorskie, Bydgoski, Osielsko"
	},
	{
		"value": 52373,
		"label": "Podlaskie, Bia\u0142ostocki, Osowicze"
	},
	{
		"value": 34318,
		"label": "Mazowieckie, Pruszkowski, Otr\u0119busy"
	},
	{
		"value": 27677,
		"label": "Mazowieckie, Otwocki, Otwock Ma\u0142y"
	},
	{
		"value": 52298,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Ozorzyce"
	},
	{
		"value": 47059,
		"label": "Wielkopolskie, Pozna\u0144ski, Paczkowo"
	},
	{
		"value": 44016,
		"label": "Wielkopolskie, Pozna\u0144ski, Pal\u0119dzie"
	},
	{
		"value": 46626,
		"label": "Mazowieckie, Pruszkowski, Parzniew"
	},
	{
		"value": 25480,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Paw\u0142owice"
	},
	{
		"value": 13037,
		"label": "Mazowieckie, Pruszkowski, P\u0119cice Ma\u0142e"
	},
	{
		"value": 52290,
		"label": "Wielkopolskie, Pozna\u0144ski, Pecna"
	},
	{
		"value": 45216,
		"label": "Wielkopolskie, Gosty\u0144ski, P\u0119powo"
	},
	{
		"value": 45599,
		"label": "Pomorskie, Kartuski, P\u0119powo"
	},
	{
		"value": 4744,
		"label": "Ma\u0142opolskie, Krakowski, Piekary"
	},
	{
		"value": 20312,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Pietrzykowice"
	},
	{
		"value": 35553,
		"label": "Ma\u0142opolskie, Chrzanowski, Pi\u0142a Ko\u015bcielecka"
	},
	{
		"value": 52438,
		"label": "\u015al\u0105skie, Gliwicki, Pilchowice"
	},
	{
		"value": 11639,
		"label": "Pomorskie, Starogardzki, Pinczyn"
	},
	{
		"value": 50508,
		"label": "\u015al\u0105skie, Bielski, Pisarzowice"
	},
	{
		"value": 52271,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Piszkawa"
	},
	{
		"value": 30423,
		"label": "Wielkopolskie, Pozna\u0144ski, Plewiska"
	},
	{
		"value": 52347,
		"label": "Mazowieckie, Pu\u0142tuski, Poby\u0142kowo Ma\u0142e"
	},
	{
		"value": 39906,
		"label": "Pomorskie, S\u0142upski, Podd\u0105bie"
	},
	{
		"value": 43126,
		"label": "Pomorskie, Pucki, Pog\u00f3rze"
	},
	{
		"value": 25293,
		"label": "Zachodniopomorskie, \u0141obeski, Pogorzelica"
	},
	{
		"value": 28369,
		"label": "Zachodniopomorskie, Gryficki, Pogorzelica"
	},
	{
		"value": 52198,
		"label": "Kujawsko-Pomorskie, Brodnicki, P\u00f3\u0142ko"
	},
	{
		"value": 24694,
		"label": "Lubuskie, Zielonog\u00f3rski, Pomorsko"
	},
	{
		"value": 4863,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Poniatowice"
	},
	{
		"value": 52551,
		"label": "\u015al\u0105skie, Myszkowski, Poraj"
	},
	{
		"value": 9000,
		"label": "Ma\u0142opolskie, Tatrza\u0144ski, Poronin"
	},
	{
		"value": 2986,
		"label": "Mazowieckie, Piaseczy\u0144ski, Pra\u017cm\u00f3w"
	},
	{
		"value": 52330,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Pruszowice"
	},
	{
		"value": 49540,
		"label": "Wielkopolskie, Pozna\u0144ski, Prze\u017amierowo"
	},
	{
		"value": 52408,
		"label": "Mazowieckie, Piaseczy\u0144ski, Przypki"
	},
	{
		"value": 52435,
		"label": "Wielkopolskie, \u015aremski, Psarskie"
	},
	{
		"value": 9616,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Psary"
	},
	{
		"value": 42431,
		"label": "Dolno\u015bl\u0105skie, \u015awidnicki, Pszenno"
	},
	{
		"value": 37911,
		"label": "Zachodniopomorskie, Goleniowski, Pucice"
	},
	{
		"value": 2797,
		"label": "Podkarpackie, Stalowowolski, Pysznica"
	},
	{
		"value": 52394,
		"label": "Wielkopolskie, Pozna\u0144ski, Rabowice"
	},
	{
		"value": 42060,
		"label": "Ma\u0142opolskie, Krakowski, Raciborowice"
	},
	{
		"value": 3291,
		"label": "Ma\u0142opolskie, Miechowski, Rac\u0142awice"
	},
	{
		"value": 26411,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Rac\u0142awice Wielkie"
	},
	{
		"value": 8184,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Radomierzyce"
	},
	{
		"value": 14233,
		"label": "Pomorskie, Gda\u0144ski, Radunica"
	},
	{
		"value": 37461,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Radwanice"
	},
	{
		"value": 5264,
		"label": "Mazowieckie, \u017byrardowski, Radziejowice"
	},
	{
		"value": 52319,
		"label": "Wielkopolskie, Szamotulski, Radzyny"
	},
	{
		"value": 3525,
		"label": "Mazowieckie, Pruszkowski, Raszyn"
	},
	{
		"value": 9898,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Redykajny"
	},
	{
		"value": 29189,
		"label": "Mazowieckie, Pruszkowski, Regu\u0142y"
	},
	{
		"value": 52338,
		"label": "Mazowieckie, Legionowski, Rembelszczyzna"
	},
	{
		"value": 3482,
		"label": "Zachodniopomorskie, Gryficki, Rewal"
	},
	{
		"value": 1209,
		"label": "Wielkopolskie, Pleszewski, Robak\u00f3w"
	},
	{
		"value": 22215,
		"label": "Wielkopolskie, Pozna\u0144ski, Robakowo"
	},
	{
		"value": 17972,
		"label": "Wielkopolskie, Pozna\u0144ski, Rogalin"
	},
	{
		"value": 42767,
		"label": "Zachodniopomorskie, Gryficki, Rogowo"
	},
	{
		"value": 16717,
		"label": "Zachodniopomorskie, Stargardzki, Rogowo"
	},
	{
		"value": 52512,
		"label": "Mazowieckie, P\u0142ocki, Rogozino"
	},
	{
		"value": 48500,
		"label": "Wielkopolskie, Pozna\u0144ski, Rokietnica"
	},
	{
		"value": 52384,
		"label": "Pomorskie, Tczewski, Rokitki"
	},
	{
		"value": 23959,
		"label": "Pomorskie, Gda\u0144ski, Rokitnica"
	},
	{
		"value": 52704,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Rosnowo"
	},
	{
		"value": 52705,
		"label": "Wielkopolskie, Pozna\u0144ski, Rosnowo"
	},
	{
		"value": 589,
		"label": "Pomorskie, Gda\u0144ski, Rotmanka"
	},
	{
		"value": 936,
		"label": "Pomorskie, S\u0142upski, Rowy"
	},
	{
		"value": 52429,
		"label": "Mazowieckie, Pruszkowski, Rozalin"
	},
	{
		"value": 52295,
		"label": "Kujawsko-Pomorskie, Toru\u0144ski, Rozgarty"
	},
	{
		"value": 16881,
		"label": "Pomorskie, Gda\u0144ski, R\u00f3\u017cyny"
	},
	{
		"value": 21300,
		"label": "Ma\u0142opolskie, Krakowski, Rudawa"
	},
	{
		"value": 52465,
		"label": "Wielkopolskie, Pozna\u0144ski, Rumianek"
	},
	{
		"value": 52300,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Ru\u015b"
	},
	{
		"value": 17967,
		"label": "Mazowieckie, Pruszkowski, Rusiec"
	},
	{
		"value": 52496,
		"label": "Ma\u0142opolskie, Krakowski, Rybna"
	},
	{
		"value": 52393,
		"label": "Ma\u0142opolskie, Wadowicki, Rycz\u00f3w"
	},
	{
		"value": 19992,
		"label": "Ma\u0142opolskie, Krakowski, Rz\u0105ska"
	},
	{
		"value": 52789,
		"label": "Mazowieckie, Wyszkowski, Rz\u0105\u015bnik"
	},
	{
		"value": 52530,
		"label": "Mazowieckie, Ostro\u0142\u0119cki, Rzeku\u0144"
	},
	{
		"value": 34342,
		"label": "Mazowieckie, Grodziski, Sade Budy"
	},
	{
		"value": 38585,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Sadk\u00f3w"
	},
	{
		"value": 27725,
		"label": "Mazowieckie, Warszawski Zachodni, Sadowa"
	},
	{
		"value": 43506,
		"label": "Wielkopolskie, Pozna\u0144ski, Sady"
	},
	{
		"value": 11359,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Sarbinowo"
	},
	{
		"value": 38155,
		"label": "\u0141\u00f3dzkie, \u0141aski, S\u0119dziejowice"
	},
	{
		"value": 18184,
		"label": "Mazowieckie, Pruszkowski, S\u0119kocin Nowy"
	},
	{
		"value": 52431,
		"label": "Mazowieckie, Sochaczewski, Seroki-Parcela"
	},
	{
		"value": 52221,
		"label": "Zachodniopomorskie, Policki, Siad\u0142o Dolne"
	},
	{
		"value": 52402,
		"label": "Mazowieckie, P\u0142o\u0144ski, Siedlin"
	},
	{
		"value": 51550,
		"label": "Pomorskie, S\u0142upski, Siemianice"
	},
	{
		"value": 10970,
		"label": "Dolno\u015bl\u0105skie, K\u0142odzki, Sienna"
	},
	{
		"value": 46611,
		"label": "Pomorskie, Kartuski, Sierakowice"
	},
	{
		"value": 52463,
		"label": "Wielkopolskie, Pozna\u0144ski, Sieros\u0142aw"
	},
	{
		"value": 52411,
		"label": "Mazowieckie, Grodziski, Siestrze\u0144"
	},
	{
		"value": 52213,
		"label": "Zachodniopomorskie, Szczecinecki, Silnowo"
	},
	{
		"value": 24542,
		"label": "Opolskie, Brzeski, Skarbimierz"
	},
	{
		"value": 52444,
		"label": "Zachodniopomorskie, Policki, Skarbimierzyce"
	},
	{
		"value": 52356,
		"label": "Ma\u0142opolskie, Krakowski, Skawina"
	},
	{
		"value": 11676,
		"label": "Mazowieckie, Legionowski, Skierdy"
	},
	{
		"value": 4215,
		"label": "Kujawsko-Pomorskie, Nakielski, Sk\u00f3rzewo"
	},
	{
		"value": 2450,
		"label": "Wielkopolskie, Pozna\u0144ski, Sk\u00f3rzewo"
	},
	{
		"value": 34270,
		"label": "Pomorskie, Gda\u0144ski, Skowarcz"
	},
	{
		"value": 32338,
		"label": "Mazowieckie, Legionowski, Skrzeszew"
	},
	{
		"value": 13636,
		"label": "Mazowieckie, Grodziski, Sku\u0142y"
	},
	{
		"value": 52305,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Skwierzynka"
	},
	{
		"value": 46478,
		"label": "Ma\u0142opolskie, Wielicki, \u015aledziejowice"
	},
	{
		"value": 4654,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u015al\u0119za"
	},
	{
		"value": 11377,
		"label": "Mazowieckie, Pruszkowski, S\u0142omin"
	},
	{
		"value": 42993,
		"label": "Mazowieckie, P\u0142ocki, S\u0142upno"
	},
	{
		"value": 41596,
		"label": "Mazowieckie, Wo\u0142omi\u0144ski, S\u0142upno"
	},
	{
		"value": 52357,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Smolec"
	},
	{
		"value": 28882,
		"label": "Mazowieckie, Otwocki, Sobienie Szlacheckie"
	},
	{
		"value": 26262,
		"label": "Dolno\u015bl\u0105skie, Lw\u00f3wecki, Sobota"
	},
	{
		"value": 49453,
		"label": "Mazowieckie, Piaseczy\u0144ski, Solec"
	},
	{
		"value": 52547,
		"label": "Wielkopolskie, Ostrowski, So\u015bnie"
	},
	{
		"value": 52504,
		"label": "Dolno\u015bl\u0105skie, Ole\u015bnicki, Spalice"
	},
	{
		"value": 52360,
		"label": "Mazowieckie, Legionowski, Stanis\u0142aw\u00f3w Drugi"
	},
	{
		"value": 52350,
		"label": "Mazowieckie, Legionowski, Stanis\u0142aw\u00f3w Pierwszy"
	},
	{
		"value": 52218,
		"label": "Dolno\u015bl\u0105skie, Jeleniog\u00f3rski, Stanisz\u00f3w"
	},
	{
		"value": 37859,
		"label": "Mazowieckie, Piaseczy\u0144ski, Stara Iwiczna"
	},
	{
		"value": 52398,
		"label": "Mazowieckie, Pruszkowski, Stara Wie\u015b"
	},
	{
		"value": 21611,
		"label": "Mazowieckie, Warszawski Zachodni, Stare Babice"
	},
	{
		"value": 52552,
		"label": "Mazowieckie, Nowodworski, Stare Grochale"
	},
	{
		"value": 15424,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Starowa G\u00f3ra"
	},
	{
		"value": 22561,
		"label": "Pomorskie, Nowodworski, Stegna"
	},
	{
		"value": 49040,
		"label": "Mazowieckie, Mi\u0144ski, Stojad\u0142a"
	},
	{
		"value": 39808,
		"label": "Pomorskie, Gda\u0144ski, Straszyn"
	},
	{
		"value": 52593,
		"label": "Mazowieckie, P\u0142ocki, Str\u00f3\u017cewko"
	},
	{
		"value": 20144,
		"label": "Ma\u0142opolskie, Wielicki, Strumiany"
	},
	{
		"value": 52345,
		"label": "Mazowieckie, Warszawski Zachodni, Strzykuly"
	},
	{
		"value": 21888,
		"label": "Pomorskie, Pucki, Suchy Dw\u00f3r"
	},
	{
		"value": 16085,
		"label": "Wielkopolskie, Pozna\u0144ski, Suchy Las"
	},
	{
		"value": 52351,
		"label": "Ma\u0142opolskie, Wielicki, Su\u0142k\u00f3w"
	},
	{
		"value": 16272,
		"label": "Pomorskie, Pucki, Swarzewo"
	},
	{
		"value": 52419,
		"label": "\u015al\u0105skie, Tarnog\u00f3rski, \u015awierklaniec"
	},
	{
		"value": 6424,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u015awi\u0119ta Katarzyna"
	},
	{
		"value": 35566,
		"label": "Podkarpackie, Rzeszowski, \u015awilcza"
	},
	{
		"value": 52383,
		"label": "Mazowieckie, Grodziski, Szcz\u0119sne"
	},
	{
		"value": 859,
		"label": "Wielkopolskie, Szamotulski, Szczuczyn"
	},
	{
		"value": 52336,
		"label": "Wielkopolskie, Pozna\u0144ski, Szczytniki"
	},
	{
		"value": 39179,
		"label": "Mazowieckie, Warszawski Zachodni, Szeligi"
	},
	{
		"value": 32934,
		"label": "Pomorskie, Wejherowski, Szemud"
	},
	{
		"value": 52340,
		"label": "Dolno\u015bl\u0105skie, Lubi\u0144ski, Szklary G\u00f3rne"
	},
	{
		"value": 52518,
		"label": "Pomorskie, Kartuski, Sznurki"
	},
	{
		"value": 15233,
		"label": "Wielkopolskie, Pozna\u0144ski, Szreniawa"
	},
	{
		"value": 46812,
		"label": "Pomorskie, Nowodworski, Sztutowo"
	},
	{
		"value": 52426,
		"label": "Wielkopolskie, Pilski, Szyd\u0142owo"
	},
	{
		"value": 52234,
		"label": "Pomorskie, Kartuski, Szymbark"
	},
	{
		"value": 52823,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Tacz\u00f3w Wielki"
	},
	{
		"value": 20502,
		"label": "Wielkopolskie, Pozna\u0144ski, Tarnowo Podg\u00f3rne"
	},
	{
		"value": 39907,
		"label": "Pomorskie, Kartuski, Tokary"
	},
	{
		"value": 50027,
		"label": "Warmi\u0144sko-Mazurskie, Olszty\u0144ski, Tomaszkowo"
	},
	{
		"value": 26253,
		"label": "Podkarpackie, Rzeszowski, Trzebownisko"
	},
	{
		"value": 15812,
		"label": "Pomorskie, Kartuski, Tuchom"
	},
	{
		"value": 32745,
		"label": "Wielkopolskie, Pozna\u0144ski, Tulce"
	},
	{
		"value": 52231,
		"label": "Lubelskie, Lubelski, Turka"
	},
	{
		"value": 29424,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Tyniec Ma\u0142y"
	},
	{
		"value": 41680,
		"label": "Zachodniopomorskie, Koszali\u0144ski, Unie\u015bcie"
	},
	{
		"value": 13355,
		"label": "Mazowieckie, Piaseczy\u0144ski, Ustan\u00f3w"
	},
	{
		"value": 34561,
		"label": "Zachodniopomorskie, Ko\u0142obrzeski, Ustronie Morskie"
	},
	{
		"value": 52371,
		"label": "Wielkopolskie, W\u0105growiecki, W\u0105growiec"
	},
	{
		"value": 50953,
		"label": "Mazowieckie, Pruszkowski, Walend\u00f3w"
	},
	{
		"value": 46852,
		"label": "Mazowieckie, Otwocki, Warszawice"
	},
	{
		"value": 37521,
		"label": "\u015al\u0105skie, Pszczy\u0144ski, Warszowice"
	},
	{
		"value": 44745,
		"label": "Zachodniopomorskie, Policki, Warzymice"
	},
	{
		"value": 27803,
		"label": "Ma\u0142opolskie, Krakowski, W\u0119grzce"
	},
	{
		"value": 7529,
		"label": "Podkarpackie, Leski, Wetlina"
	},
	{
		"value": 2743,
		"label": "Mazowieckie, Otwocki, Wi\u0105zowna"
	},
	{
		"value": 47618,
		"label": "Ma\u0142opolskie, Krakowski, Wi\u0119ckowice"
	},
	{
		"value": 52359,
		"label": "Mazowieckie, Legionowski, Wieliszew"
	},
	{
		"value": 52377,
		"label": "Ma\u0142opolskie, Krakowski, Wielka Wie\u015b"
	},
	{
		"value": 52536,
		"label": "\u015al\u0105skie, Cz\u0119stochowski, Wierzchowisko"
	},
	{
		"value": 52200,
		"label": "Kujawsko-Pomorskie, Bydgoski, Wilcze"
	},
	{
		"value": 29203,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wilczyce"
	},
	{
		"value": 52239,
		"label": "Dolno\u015bl\u0105skie, \u015aredzki, Wilkszyn"
	},
	{
		"value": 29287,
		"label": "Wielkopolskie, Pozna\u0144ski, Wiry"
	},
	{
		"value": 52315,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3dzki Wschodni, Wi\u015bniowa G\u00f3ra"
	},
	{
		"value": 13603,
		"label": "Dolno\u015bl\u0105skie, Trzebnicki, Wisznia Ma\u0142a"
	},
	{
		"value": 46502,
		"label": "Mazowieckie, Piaseczy\u0144ski, W\u0142adys\u0142aw\u00f3w"
	},
	{
		"value": 6035,
		"label": "Ma\u0142opolskie, Krakowski, W\u0142osa\u0144"
	},
	{
		"value": 52385,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wojkowice"
	},
	{
		"value": 52220,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wojnowice"
	},
	{
		"value": 14748,
		"label": "Mazowieckie, Piaseczy\u0144ski, Wola Mrokowska"
	},
	{
		"value": 6924,
		"label": "Zachodniopomorskie, Policki, Wo\u0142czkowo"
	},
	{
		"value": 23803,
		"label": "Mazowieckie, Warszawski Zachodni, Wolica"
	},
	{
		"value": 51237,
		"label": "Mazowieckie, Pruszkowski, Wolica"
	},
	{
		"value": 44464,
		"label": "Mazowieckie, Piaseczy\u0144ski, W\u00f3lka Kosowska"
	},
	{
		"value": 47782,
		"label": "Mazowieckie, Mi\u0144ski, W\u00f3lka Mi\u0144ska"
	},
	{
		"value": 52442,
		"label": "Podkarpackie, Rzeszowski, W\u00f3lka Podle\u015bna"
	},
	{
		"value": 52537,
		"label": "Zachodniopomorskie, Kamie\u0144ski, Wrzosowo"
	},
	{
		"value": 15665,
		"label": "Wielkopolskie, Pozna\u0144ski, Wysogotowo"
	},
	{
		"value": 14088,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, Wysoka"
	},
	{
		"value": 52664,
		"label": "Podkarpackie, Wy\u017cne"
	},
	{
		"value": 52331,
		"label": "Ma\u0142opolskie, Wielicki, Zabawa"
	},
	{
		"value": 29492,
		"label": "Mazowieckie, Grodziski, \u017babia Wola"
	},
	{
		"value": 31832,
		"label": "Ma\u0142opolskie, Krakowski, Zabierz\u00f3w"
	},
	{
		"value": 13351,
		"label": "Lubuskie, Zielonog\u00f3rski, Zab\u00f3r"
	},
	{
		"value": 33346,
		"label": "Mazowieckie, Warszawski Zachodni, Zabor\u00f3wek"
	},
	{
		"value": 52280,
		"label": "Ma\u0142opolskie, Wielicki, Zakrzowiec"
	},
	{
		"value": 27018,
		"label": "Wielkopolskie, Pozna\u0144ski, Zalasewo"
	},
	{
		"value": 17216,
		"label": "Mazowieckie, Piaseczy\u0144ski, Zalesie G\u00f3rne"
	},
	{
		"value": 17703,
		"label": "Mazowieckie, Piaseczy\u0144ski, Zamienie"
	},
	{
		"value": 20796,
		"label": "Mazowieckie, Mi\u0144ski, Zamienie"
	},
	{
		"value": 25518,
		"label": "Mazowieckie, Otwocki, \u017ban\u0119cin"
	},
	{
		"value": 26661,
		"label": "Wielkopolskie, \u015aredzki, Zaniemy\u015bl"
	},
	{
		"value": 46889,
		"label": "Podlaskie, Bia\u0142ostocki, Za\u015bcianki"
	},
	{
		"value": 52685,
		"label": "Wielkopolskie, \u015aremski, Zbrudzewo"
	},
	{
		"value": 16196,
		"label": "Zachodniopomorskie, Gryfi\u0144ski, \u017belewo"
	},
	{
		"value": 52281,
		"label": "Ma\u0142opolskie, Krakowski, \u017berkowice"
	},
	{
		"value": 11887,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142awski, \u017berniki Ma\u0142e"
	},
	{
		"value": 52369,
		"label": "Mazowieckie, Piaseczy\u0144ski, Zgorza\u0142a"
	},
	{
		"value": 52327,
		"label": "Kujawsko-Pomorskie, Bydgoski, Zielonka"
	},
	{
		"value": 2350,
		"label": "Mazowieckie, Zwole\u0144ski, Zielonka Nowa"
	},
	{
		"value": 876,
		"label": "Ma\u0142opolskie, Krakowski, Zielonki"
	},
	{
		"value": 42318,
		"label": "Wielkopolskie, Kaliski, Z\u0142otniki"
	},
	{
		"value": 52325,
		"label": "Podkarpackie, Mielecki, Z\u0142otniki"
	},
	{
		"value": 22698,
		"label": "Wielkopolskie, Pozna\u0144ski, Z\u0142otniki"
	},
	{
		"value": 40262,
		"label": "Podlaskie, Bia\u0142ostocki, Z\u0142otniki"
	},
	{
		"value": 34935,
		"label": "Dolno\u015bl\u0105skie, Luba\u0144ski, Z\u0142otniki Luba\u0144skie"
	},
	{
		"value": 45748,
		"label": "Mazowieckie, Pruszkowski, \u017b\u00f3\u0142win"
	},
	{
		"value": 52186,
		"label": "Pomorskie, Gda\u0144sk, Anio\u0142ki"
	},
	{
		"value": 52488,
		"label": "Pomorskie, Gdynia, Babie Do\u0142y"
	},
	{
		"value": 52133,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, Ba\u0142uty"
	},
	{
		"value": 38720,
		"label": "Mazowieckie, Warszawa, Bemowo"
	},
	{
		"value": 42663,
		"label": "Mazowieckie, Warszawa, Bia\u0142o\u0142\u0119ka"
	},
	{
		"value": 28904,
		"label": "Mazowieckie, Warszawa, Bielany"
	},
	{
		"value": 52201,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Bie\u0144czyce"
	},
	{
		"value": 52137,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Bie\u017can\u00f3w-Prokocim"
	},
	{
		"value": 52188,
		"label": "Pomorskie, Gda\u0144sk, Br\u0119towo"
	},
	{
		"value": 52127,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Bronowice"
	},
	{
		"value": 52202,
		"label": "Pomorskie, Gda\u0144sk, Brze\u017ano"
	},
	{
		"value": 52114,
		"label": "Pomorskie, Gda\u0144sk, Che\u0142m I Gda\u0144sk Po\u0142udnie"
	},
	{
		"value": 52169,
		"label": "Pomorskie, Gdynia, Chwarzno-Wiczlino"
	},
	{
		"value": 52184,
		"label": "Pomorskie, Gdynia, Chylonia"
	},
	{
		"value": 52187,
		"label": "Pomorskie, Gdynia, Cisowa"
	},
	{
		"value": 52138,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Czy\u017cyny"
	},
	{
		"value": 52162,
		"label": "Pomorskie, Gdynia, D\u0105browa"
	},
	{
		"value": 52124,
		"label": "Ma\u0142opolskie, Krak\u00f3w, D\u0119bniki"
	},
	{
		"value": 52179,
		"label": "Pomorskie, Sopot, Dolny Sopot"
	},
	{
		"value": 52489,
		"label": "Pomorskie, Gdynia, Dzia\u0142ki Le\u015bne"
	},
	{
		"value": 52122,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Fabryczna"
	},
	{
		"value": 52167,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, G\u00f3rna"
	},
	{
		"value": 52183,
		"label": "Pomorskie, Sopot, G\u00f3rny Sopot"
	},
	{
		"value": 52180,
		"label": "Pomorskie, Gdynia, Grab\u00f3wek"
	},
	{
		"value": 52118,
		"label": "Wielkopolskie, Pozna\u0144, Grunwald"
	},
	{
		"value": 52175,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Grzeg\u00f3rzki"
	},
	{
		"value": 52205,
		"label": "Pomorskie, Gda\u0144sk, Jasie\u0144"
	},
	{
		"value": 52119,
		"label": "Wielkopolskie, Pozna\u0144, Je\u017cyce"
	},
	{
		"value": 52490,
		"label": "Pomorskie, Gdynia, Kamienna G\u00f3ra"
	},
	{
		"value": 52190,
		"label": "Pomorskie, Sopot, Karlikowo"
	},
	{
		"value": 52328,
		"label": "Pomorskie, Gdynia, Karwiny"
	},
	{
		"value": 52148,
		"label": "Pomorskie, Gda\u0144sk, Kokoszki"
	},
	{
		"value": 52476,
		"label": "Pomorskie, Gda\u0144sk, Krakowiec-G\u00f3rki Zachodnie"
	},
	{
		"value": 52123,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Krowodrza"
	},
	{
		"value": 52121,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Krzyki"
	},
	{
		"value": 52150,
		"label": "Ma\u0142opolskie, Krak\u00f3w, \u0141agiewniki"
	},
	{
		"value": 52491,
		"label": "Pomorskie, Gdynia, Leszczynki"
	},
	{
		"value": 52477,
		"label": "Pomorskie, Gda\u0144sk, Letnica"
	},
	{
		"value": 52134,
		"label": "Pomorskie, Gdynia, Ma\u0142y Kack"
	},
	{
		"value": 52173,
		"label": "Pomorskie, Gda\u0144sk, Matarnia"
	},
	{
		"value": 52141,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Mistrzejowice"
	},
	{
		"value": 52478,
		"label": "Pomorskie, Gda\u0144sk, M\u0142yniska"
	},
	{
		"value": 20284,
		"label": "Mazowieckie, Warszawa, Mokot\u00f3w"
	},
	{
		"value": 52126,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Nowa Huta"
	},
	{
		"value": 52128,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Miasto"
	},
	{
		"value": 52479,
		"label": "Pomorskie, Gda\u0144sk, Nowy Port"
	},
	{
		"value": 52163,
		"label": "Pomorskie, Gdynia, Ob\u0142u\u017ce"
	},
	{
		"value": 38687,
		"label": "Mazowieckie, Warszawa, Ochota"
	},
	{
		"value": 52135,
		"label": "Pomorskie, Gdynia, Oksywie"
	},
	{
		"value": 52181,
		"label": "Pomorskie, Gda\u0144sk, Oliwa"
	},
	{
		"value": 52480,
		"label": "Pomorskie, Gda\u0144sk, Olszynka"
	},
	{
		"value": 52182,
		"label": "Pomorskie, Gdynia, Or\u0142owo"
	},
	{
		"value": 52155,
		"label": "Pomorskie, Gda\u0144sk, Orunia-\u015aw. Wojciech-Lipce"
	},
	{
		"value": 52115,
		"label": "Pomorskie, Gda\u0144sk, Osowa"
	},
	{
		"value": 52131,
		"label": "Pomorskie, Gda\u0144sk, Piecki-Migowo"
	},
	{
		"value": 52142,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Podg\u00f3rze"
	},
	{
		"value": 52139,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Podg\u00f3rze Duchackie"
	},
	{
		"value": 52160,
		"label": "Pomorskie, Gdynia, Pog\u00f3rze"
	},
	{
		"value": 52164,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, Polesie"
	},
	{
		"value": 52147,
		"label": "Zachodniopomorskie, Szczecin, P\u00f3\u0142noc"
	},
	{
		"value": 52112,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Pr\u0105dnik Bia\u0142y"
	},
	{
		"value": 52130,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Pr\u0105dnik Czerwony"
	},
	{
		"value": 36957,
		"label": "Mazowieckie, Warszawa, Praga-P\u00f3\u0142noc"
	},
	{
		"value": 51145,
		"label": "Mazowieckie, Warszawa, Praga-Po\u0142udnie"
	},
	{
		"value": 52140,
		"label": "Zachodniopomorskie, Szczecin, Prawobrze\u017ce"
	},
	{
		"value": 52481,
		"label": "Pomorskie, Gda\u0144sk, Przer\u00f3bka"
	},
	{
		"value": 52185,
		"label": "Pomorskie, Gda\u0144sk, Przymorze Ma\u0142e"
	},
	{
		"value": 52177,
		"label": "Pomorskie, Gda\u0144sk, Przymorze Wielkie"
	},
	{
		"value": 52156,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Psie Pole"
	},
	{
		"value": 52270,
		"label": "Pomorskie, Gdynia, Pustki Cisowskie-Demptowo"
	},
	{
		"value": 52178,
		"label": "Pomorskie, Gdynia, Red\u0142owo"
	},
	{
		"value": 22883,
		"label": "Mazowieckie, Warszawa, Rembert\u00f3w"
	},
	{
		"value": 52482,
		"label": "Pomorskie, Gda\u0144sk, Rudniki"
	},
	{
		"value": 52192,
		"label": "Pomorskie, Gda\u0144sk, Siedlce"
	},
	{
		"value": 50052,
		"label": "Mazowieckie, Warszawa, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"value": 52158,
		"label": "Zachodniopomorskie, Szczecin, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"value": 52157,
		"label": "Pomorskie, Gdynia, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"value": 52174,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"value": 52113,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"value": 52166,
		"label": "Pomorskie, Gda\u0144sk, \u015ar\u00f3dmie\u015bcie"
	},
	{
		"value": 52116,
		"label": "Wielkopolskie, Pozna\u0144, Stare Miasto"
	},
	{
		"value": 52111,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Stare Miasto"
	},
	{
		"value": 52129,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Stare Miasto"
	},
	{
		"value": 52303,
		"label": "Pomorskie, Gda\u0144sk, Stogi"
	},
	{
		"value": 52483,
		"label": "Pomorskie, Gda\u0144sk, Strzy\u017ca"
	},
	{
		"value": 52189,
		"label": "Pomorskie, Gda\u0144sk, Suchanino"
	},
	{
		"value": 52171,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Swoszowice"
	},
	{
		"value": 32953,
		"label": "Mazowieckie, Warszawa, Targ\u00f3wek"
	},
	{
		"value": 52484,
		"label": "Pomorskie, Gda\u0144sk, Uje\u015bcisko-\u0141ostowice"
	},
	{
		"value": 24305,
		"label": "Mazowieckie, Warszawa, Ursus"
	},
	{
		"value": 3766,
		"label": "Mazowieckie, Warszawa, Ursyn\u00f3w"
	},
	{
		"value": 52485,
		"label": "Pomorskie, Gda\u0144sk, VII Dw\u00f3r"
	},
	{
		"value": 30707,
		"label": "Mazowieckie, Warszawa, Wawer"
	},
	{
		"value": 37544,
		"label": "Mazowieckie, Warszawa, Weso\u0142a"
	},
	{
		"value": 52149,
		"label": "\u0141\u00f3dzkie, \u0141\u00f3d\u017a, Widzew"
	},
	{
		"value": 52132,
		"label": "Pomorskie, Gdynia, Wielki Kack"
	},
	{
		"value": 1320,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w"
	},
	{
		"value": 52159,
		"label": "Wielkopolskie, Pozna\u0144, Wilda"
	},
	{
		"value": 52492,
		"label": "Pomorskie, Gdynia, Witomino Le\u015bnicz\u00f3wka"
	},
	{
		"value": 52151,
		"label": "Pomorskie, Gdynia, Witomino-Radiostacja"
	},
	{
		"value": 3645,
		"label": "Mazowieckie, Warszawa, W\u0142ochy"
	},
	{
		"value": 32638,
		"label": "Mazowieckie, Warszawa, Wola"
	},
	{
		"value": 52170,
		"label": "Pomorskie, Gda\u0144sk, Wrzeszcz"
	},
	{
		"value": 52486,
		"label": "Pomorskie, Gda\u0144sk, Wyspa Sobieszewska"
	},
	{
		"value": 52120,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Wzg\u00f3rza Krzes\u0142awickie"
	},
	{
		"value": 52487,
		"label": "Pomorskie, Gda\u0144sk, Wzg\u00f3rze Mickiewicza"
	},
	{
		"value": 52493,
		"label": "Pomorskie, Gdynia, Wzg\u00f3rze \u015aw. Maksymiliana"
	},
	{
		"value": 52168,
		"label": "Pomorskie, Gda\u0144sk, \u017babianka-Wejhera-Jelitkowo-Tysi\u0105clecia"
	},
	{
		"value": 52136,
		"label": "Zachodniopomorskie, Szczecin, Zach\u00f3d"
	},
	{
		"value": 52165,
		"label": "Pomorskie, Gda\u0144sk, Zaspa-M\u0142yniec"
	},
	{
		"value": 52154,
		"label": "Pomorskie, Gda\u0144sk, Zaspa-Rozstaje"
	},
	{
		"value": 52143,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic P\u00f3\u0142nocnych"
	},
	{
		"value": 52144,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic Po\u0142udniowych"
	},
	{
		"value": 52161,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic \u015ar\u00f3dmiejskich"
	},
	{
		"value": 52475,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic Wschodnich"
	},
	{
		"value": 52152,
		"label": "\u015al\u0105skie, Katowice, Zesp\u00f3\u0142 Dzielnic Zachodnich"
	},
	{
		"value": 36021,
		"label": "Mazowieckie, Warszawa, \u017boliborz"
	},
	{
		"value": 52117,
		"label": "Ma\u0142opolskie, Krak\u00f3w, Zwierzyniec"
	},
	{
		"value": 52737,
		"label": "Mazowieckie, Warszawa, Aleksandr\u00f3w"
	},
	{
		"value": 52733,
		"label": "Mazowieckie, Warszawa, Anin"
	},
	{
		"value": 52703,
		"label": "Wielkopolskie, Pozna\u0144, Antoninek-Zieliniec-Kobylepole"
	},
	{
		"value": 52568,
		"label": "Mazowieckie, Warszawa, August\u00f3wka"
	},
	{
		"value": 52762,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Bartoszowice"
	},
	{
		"value": 52663,
		"label": "Mazowieckie, Warszawa, Bemowo Lotnisko"
	},
	{
		"value": 52691,
		"label": "Mazowieckie, Warszawa, Bia\u0142o\u0142\u0119ka Dworska"
	},
	{
		"value": 52763,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Bie\u0144kowice"
	},
	{
		"value": 52764,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Bierdzany"
	},
	{
		"value": 52765,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Biskupin"
	},
	{
		"value": 52727,
		"label": "Mazowieckie, Warszawa, B\u0142onia Wilanowskie"
	},
	{
		"value": 52660,
		"label": "Mazowieckie, Warszawa, Boernerowo"
	},
	{
		"value": 52766,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Borek"
	},
	{
		"value": 52767,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Broch\u00f3w"
	},
	{
		"value": 52597,
		"label": "Mazowieckie, Warszawa, Br\u00f3dno"
	},
	{
		"value": 52598,
		"label": "Mazowieckie, Warszawa, Br\u00f3dno Podgrodzie"
	},
	{
		"value": 52683,
		"label": "Mazowieckie, Warszawa, Brzeziny"
	},
	{
		"value": 52630,
		"label": "Wielkopolskie, Pozna\u0144, Chartowo"
	},
	{
		"value": 52613,
		"label": "Mazowieckie, Warszawa, Chomicz\u00f3wka"
	},
	{
		"value": 52676,
		"label": "Mazowieckie, Warszawa, Choszcz\u00f3wka"
	},
	{
		"value": 52669,
		"label": "Mazowieckie, Warszawa, Chrzan\u00f3w"
	},
	{
		"value": 52696,
		"label": "Mazowieckie, Warszawa, Czechowice"
	},
	{
		"value": 52565,
		"label": "Mazowieckie, Warszawa, Czerniak\u00f3w"
	},
	{
		"value": 52653,
		"label": "Mazowieckie, Warszawa, Czyste"
	},
	{
		"value": 52768,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, D\u0105bie"
	},
	{
		"value": 52586,
		"label": "Mazowieckie, Warszawa, D\u0105br\u00f3wka"
	},
	{
		"value": 52675,
		"label": "Mazowieckie, Warszawa, D\u0105br\u00f3wka Szlachecka"
	},
	{
		"value": 52601,
		"label": "Mazowieckie, Warszawa, Elsner\u00f3w"
	},
	{
		"value": 52619,
		"label": "Wielkopolskie, Pozna\u0144, Fabianowo-Kotowo"
	},
	{
		"value": 52736,
		"label": "Mazowieckie, Warszawa, Falenica"
	},
	{
		"value": 52572,
		"label": "Mazowieckie, Warszawa, Filtry"
	},
	{
		"value": 52665,
		"label": "Mazowieckie, Warszawa, Fort Bema"
	},
	{
		"value": 52661,
		"label": "Mazowieckie, Warszawa, Fort Radiowo"
	},
	{
		"value": 52771,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, G\u0105d\u00f3w Ma\u0142y"
	},
	{
		"value": 52769,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Gaj"
	},
	{
		"value": 52770,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Gajowice"
	},
	{
		"value": 52622,
		"label": "Wielkopolskie, Pozna\u0144, G\u0142\u00f3wna"
	},
	{
		"value": 52686,
		"label": "Wielkopolskie, Pozna\u0144, G\u0142uszyna"
	},
	{
		"value": 52714,
		"label": "Mazowieckie, Warszawa, Goc\u0142aw"
	},
	{
		"value": 52746,
		"label": "Mazowieckie, Warszawa, Goc\u0142awek"
	},
	{
		"value": 52693,
		"label": "Mazowieckie, Warszawa, Go\u0142\u0105bki"
	},
	{
		"value": 52666,
		"label": "Mazowieckie, Warszawa, G\u00f3rce"
	},
	{
		"value": 52631,
		"label": "Wielkopolskie, Pozna\u0144, G\u00f3rczyn"
	},
	{
		"value": 52583,
		"label": "Mazowieckie, Warszawa, Grab\u00f3w"
	},
	{
		"value": 52745,
		"label": "Mazowieckie, Warszawa, Groch\u00f3w"
	},
	{
		"value": 52692,
		"label": "Mazowieckie, Warszawa, Grodzisk"
	},
	{
		"value": 52750,
		"label": "Mazowieckie, Warszawa, Grosz\u00f3wka"
	},
	{
		"value": 52662,
		"label": "Mazowieckie, Warszawa, Groty"
	},
	{
		"value": 52637,
		"label": "Wielkopolskie, Pozna\u0144, Grunwald P\u00f3\u0142noc"
	},
	{
		"value": 52639,
		"label": "Wielkopolskie, Pozna\u0144, Grunwald Po\u0142udnie"
	},
	{
		"value": 52678,
		"label": "Mazowieckie, Warszawa, Henryk\u00f3w"
	},
	{
		"value": 52772,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Huby"
	},
	{
		"value": 52609,
		"label": "Mazowieckie, Warszawa, Huta"
	},
	{
		"value": 52773,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Jagodno"
	},
	{
		"value": 52706,
		"label": "Wielkopolskie, Pozna\u0144, Jana III Sobieskiego i Marysie\u0144ki"
	},
	{
		"value": 52774,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Jarno\u0142t\u00f3w"
	},
	{
		"value": 52667,
		"label": "Mazowieckie, Warszawa, Jelonki P\u00f3\u0142nocne"
	},
	{
		"value": 52668,
		"label": "Mazowieckie, Warszawa, Jelonki Po\u0142udniowe"
	},
	{
		"value": 52775,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Jerzmanowo"
	},
	{
		"value": 52584,
		"label": "Mazowieckie, Warszawa, Jeziorki P\u00f3\u0142nocne"
	},
	{
		"value": 52585,
		"label": "Mazowieckie, Warszawa, Jeziorki Po\u0142udniowe"
	},
	{
		"value": 52629,
		"label": "Wielkopolskie, Pozna\u0144, Junikowo"
	},
	{
		"value": 52594,
		"label": "Mazowieckie, Warszawa, Kabaty"
	},
	{
		"value": 52713,
		"label": "Mazowieckie, Warszawa, Kamionek"
	},
	{
		"value": 52776,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kar\u0142owice"
	},
	{
		"value": 52577,
		"label": "Mazowieckie, Warszawa, Kaw\u0119czyn-Wygoda"
	},
	{
		"value": 52730,
		"label": "Mazowieckie, Warszawa, K\u0119pa Zawadowska"
	},
	{
		"value": 52604,
		"label": "Wielkopolskie, Pozna\u0144, Kiekrz"
	},
	{
		"value": 52777,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Klecina"
	},
	{
		"value": 52778,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kleczk\u00f3w"
	},
	{
		"value": 52779,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, K\u0142okoczyce"
	},
	{
		"value": 52684,
		"label": "Mazowieckie, Warszawa, Kobia\u0142ka"
	},
	{
		"value": 52650,
		"label": "Mazowieckie, Warszawa, Ko\u0142o"
	},
	{
		"value": 52780,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kowale"
	},
	{
		"value": 52781,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Kozan\u00f3w"
	},
	{
		"value": 52709,
		"label": "Wielkopolskie, Pozna\u0144, Krzesiny-Pokrzywno-Garaszewo"
	},
	{
		"value": 52610,
		"label": "Wielkopolskie, Pozna\u0144, Krzy\u017cowniki-Smochowice"
	},
	{
		"value": 52560,
		"label": "Mazowieckie, Warszawa, Ksawer\u00f3w"
	},
	{
		"value": 52783,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ksi\u0119\u017ce Ma\u0142e"
	},
	{
		"value": 52784,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ksi\u0119\u017ce Wielkie"
	},
	{
		"value": 52785,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ku\u017aniki"
	},
	{
		"value": 52623,
		"label": "Wielkopolskie, Pozna\u0144, Kwiatowe"
	},
	{
		"value": 52786,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Lamowice Stare"
	},
	{
		"value": 52740,
		"label": "Mazowieckie, Warszawa, Las"
	},
	{
		"value": 52614,
		"label": "Mazowieckie, Warszawa, Las Biela\u0144ski"
	},
	{
		"value": 52595,
		"label": "Mazowieckie, Warszawa, Las Kabacki"
	},
	{
		"value": 52615,
		"label": "Wielkopolskie, Pozna\u0144, \u0141awica"
	},
	{
		"value": 52640,
		"label": "Wielkopolskie, Pozna\u0144, \u0141azarz"
	},
	{
		"value": 52787,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Lesica"
	},
	{
		"value": 52788,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Le\u015bnica"
	},
	{
		"value": 52790,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Lipa Piotrowska"
	},
	{
		"value": 52658,
		"label": "Mazowieckie, Warszawa, Lotnisko"
	},
	{
		"value": 52791,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Marszowice"
	},
	{
		"value": 52634,
		"label": "Mazowieckie, Warszawa, Marymont Kaskada"
	},
	{
		"value": 52700,
		"label": "Mazowieckie, Warszawa, Marymont-Potok"
	},
	{
		"value": 52635,
		"label": "Mazowieckie, Warszawa, Marymont Ruda"
	},
	{
		"value": 52743,
		"label": "Mazowieckie, Warszawa, Marysin Wawerski"
	},
	{
		"value": 52792,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Ma\u015blice"
	},
	{
		"value": 52732,
		"label": "Mazowieckie, Warszawa, Miedzeszyn"
	},
	{
		"value": 52734,
		"label": "Mazowieckie, Warszawa, Mi\u0119dzylesie"
	},
	{
		"value": 52657,
		"label": "Mazowieckie, Warszawa, Mir\u00f3w"
	},
	{
		"value": 52605,
		"label": "Mazowieckie, Warszawa, M\u0142ociny"
	},
	{
		"value": 52654,
		"label": "Mazowieckie, Warszawa, M\u0142yn\u00f3w"
	},
	{
		"value": 52793,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Mokra"
	},
	{
		"value": 52702,
		"label": "Wielkopolskie, Pozna\u0144, Morasko-Radojewo"
	},
	{
		"value": 52794,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Muchob\u00f3r Ma\u0142y"
	},
	{
		"value": 52642,
		"label": "Mazowieckie, Warszawa, Muran\u00f3w"
	},
	{
		"value": 52795,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Nadodrze"
	},
	{
		"value": 52739,
		"label": "Mazowieckie, Warszawa, Nadwi\u015ble"
	},
	{
		"value": 52632,
		"label": "Wielkopolskie, Pozna\u0144, Naramowice"
	},
	{
		"value": 52592,
		"label": "Mazowieckie, Warszawa, Natolin"
	},
	{
		"value": 52695,
		"label": "Mazowieckie, Warszawa, Nied\u017awiadek"
	},
	{
		"value": 52574,
		"label": "Mazowieckie, Warszawa, Nowa Praga"
	},
	{
		"value": 52644,
		"label": "Mazowieckie, Warszawa, Nowe Miasto"
	},
	{
		"value": 52688,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Winogrady P\u00f3\u0142noc"
	},
	{
		"value": 52687,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Winogrady Po\u0142udnie"
	},
	{
		"value": 52689,
		"label": "Wielkopolskie, Pozna\u0144, Nowe Winogrady Wsch\u00f3d"
	},
	{
		"value": 52716,
		"label": "Mazowieckie, Warszawa, Nowe W\u0142ochy"
	},
	{
		"value": 52670,
		"label": "Mazowieckie, Warszawa, Nowodwory"
	},
	{
		"value": 52656,
		"label": "Mazowieckie, Warszawa, Nowolipki"
	},
	{
		"value": 52796,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Nowy Dw\u00f3r"
	},
	{
		"value": 52578,
		"label": "Mazowieckie, Warszawa, Nowy Rembert\u00f3w"
	},
	{
		"value": 52742,
		"label": "Mazowieckie, Warszawa, Nowy Wawer"
	},
	{
		"value": 52652,
		"label": "Mazowieckie, Warszawa, Odolany"
	},
	{
		"value": 52626,
		"label": "Wielkopolskie, Pozna\u0144, Ogrody"
	},
	{
		"value": 52722,
		"label": "Mazowieckie, Warszawa, Ok\u0119cie"
	},
	{
		"value": 52797,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, O\u0142bin"
	},
	{
		"value": 52744,
		"label": "Mazowieckie, Warszawa, Olszynka Grochowska"
	},
	{
		"value": 52798,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, O\u0142taszyn"
	},
	{
		"value": 52720,
		"label": "Mazowieckie, Warszawa, Opacz Wielka"
	},
	{
		"value": 52799,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Opatowice"
	},
	{
		"value": 52800,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Opor\u00f3w"
	},
	{
		"value": 52672,
		"label": "Wielkopolskie, Pozna\u0144, Osiedle Je\u017cyce"
	},
	{
		"value": 52782,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Osiedle Krzyki"
	},
	{
		"value": 52815,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Osiedle Psie Pole"
	},
	{
		"value": 52671,
		"label": "Wielkopolskie, Pozna\u0144, Osiedle Stare Miasto"
	},
	{
		"value": 52674,
		"label": "Wielkopolskie, Pozna\u0144, Osiedle Wilda"
	},
	{
		"value": 52801,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Osobowice"
	},
	{
		"value": 52753,
		"label": "Wielkopolskie, Pozna\u0144, Ostr\u00f3w Tumski-\u015ar\u00f3dka-Zawady-Komandoria"
	},
	{
		"value": 52723,
		"label": "Mazowieckie, Warszawa, Paluch"
	},
	{
		"value": 52802,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Partynice"
	},
	{
		"value": 52803,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Paw\u0142owice"
	},
	{
		"value": 52573,
		"label": "Mazowieckie, Warszawa, Pelcowizna"
	},
	{
		"value": 52628,
		"label": "Mazowieckie, Warszawa, Piaski"
	},
	{
		"value": 52618,
		"label": "Wielkopolskie, Pozna\u0144, Pi\u0105tkowo"
	},
	{
		"value": 52804,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Pilczyce"
	},
	{
		"value": 52807,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Plac Grunwaldzki"
	},
	{
		"value": 52607,
		"label": "Mazowieckie, Warszawa, Plac\u00f3wka"
	},
	{
		"value": 52752,
		"label": "Mazowieckie, Warszawa, Plac Wojska Polskiego"
	},
	{
		"value": 52616,
		"label": "Wielkopolskie, Pozna\u0144, Podolany"
	},
	{
		"value": 52808,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Polanka"
	},
	{
		"value": 52809,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Polanowice"
	},
	{
		"value": 52810,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Po\u0142udnie"
	},
	{
		"value": 52811,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Popowice"
	},
	{
		"value": 52812,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Po\u015bwi\u0119tne"
	},
	{
		"value": 52655,
		"label": "Mazowieckie, Warszawa, Pow\u0105zki"
	},
	{
		"value": 52645,
		"label": "Mazowieckie, Warszawa, Powi\u015ble"
	},
	{
		"value": 52731,
		"label": "Mazowieckie, Warszawa, Powsin"
	},
	{
		"value": 52728,
		"label": "Mazowieckie, Warszawa, Powsinek"
	},
	{
		"value": 52813,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Pracze Odrza\u0144skie"
	},
	{
		"value": 52814,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Przedmie\u015bcie O\u0142awskie"
	},
	{
		"value": 52587,
		"label": "Mazowieckie, Warszawa, Pyry"
	},
	{
		"value": 52608,
		"label": "Mazowieckie, Warszawa, Radiowo"
	},
	{
		"value": 52735,
		"label": "Mazowieckie, Warszawa, Rado\u015b\u0107"
	},
	{
		"value": 52719,
		"label": "Mazowieckie, Warszawa, Rak\u00f3w"
	},
	{
		"value": 52569,
		"label": "Mazowieckie, Warszawa, Rakowiec"
	},
	{
		"value": 52816,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Rakowiec"
	},
	{
		"value": 52620,
		"label": "Wielkopolskie, Pozna\u0144, Rataje"
	},
	{
		"value": 52817,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Raty\u0144"
	},
	{
		"value": 52824,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, R\u0119dzin"
	},
	{
		"value": 52818,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, R\u00f3\u017canka"
	},
	{
		"value": 52741,
		"label": "Mazowieckie, Warszawa, Sadul"
	},
	{
		"value": 52566,
		"label": "Mazowieckie, Warszawa, Sadyba"
	},
	{
		"value": 52698,
		"label": "Mazowieckie, Warszawa, Sady \u017boliborskie"
	},
	{
		"value": 52718,
		"label": "Mazowieckie, Warszawa, Salomea"
	},
	{
		"value": 52715,
		"label": "Mazowieckie, Warszawa, Saska K\u0119pa"
	},
	{
		"value": 52819,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, S\u0119polno"
	},
	{
		"value": 52567,
		"label": "Mazowieckie, Warszawa, Siekierki"
	},
	{
		"value": 52563,
		"label": "Mazowieckie, Warszawa, Sielce"
	},
	{
		"value": 52596,
		"label": "Mazowieckie, Warszawa, Skarpa Powsi\u0144ska"
	},
	{
		"value": 52697,
		"label": "Mazowieckie, Warszawa, Skorosze"
	},
	{
		"value": 52633,
		"label": "Mazowieckie, Warszawa, S\u0142odowiec"
	},
	{
		"value": 52559,
		"label": "Mazowieckie, Warszawa, S\u0142u\u017cew"
	},
	{
		"value": 52558,
		"label": "Mazowieckie, Warszawa, S\u0142u\u017cewiec"
	},
	{
		"value": 52624,
		"label": "Wielkopolskie, Pozna\u0144, So\u0142acz"
	},
	{
		"value": 52641,
		"label": "Mazowieckie, Warszawa, Solec"
	},
	{
		"value": 52825,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, So\u0142tysowice"
	},
	{
		"value": 52648,
		"label": "Mazowieckie, Warszawa, \u015ar\u00f3dmie\u015bcie P\u00f3\u0142nocne"
	},
	{
		"value": 52649,
		"label": "Mazowieckie, Warszawa, \u015ar\u00f3dmie\u015bcie Po\u0142udniowe"
	},
	{
		"value": 52826,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Stab\u0142owice"
	},
	{
		"value": 52751,
		"label": "Mazowieckie, Warszawa, Stara Mi\u0142osna"
	},
	{
		"value": 52571,
		"label": "Mazowieckie, Warszawa, Stara Ochota"
	},
	{
		"value": 52575,
		"label": "Mazowieckie, Warszawa, Stara Praga"
	},
	{
		"value": 52627,
		"label": "Mazowieckie, Warszawa, Stare Bielany"
	},
	{
		"value": 52643,
		"label": "Mazowieckie, Warszawa, Stare Miasto"
	},
	{
		"value": 52673,
		"label": "Wielkopolskie, Pozna\u0144, Stare Winogrady"
	},
	{
		"value": 52717,
		"label": "Mazowieckie, Warszawa, Stare W\u0142ochy"
	},
	{
		"value": 52754,
		"label": "Wielkopolskie, Pozna\u0144, Staro\u0142\u0119ka-Minikowo-Marlewo"
	},
	{
		"value": 52638,
		"label": "Wielkopolskie, Pozna\u0144, Stary Grunwald"
	},
	{
		"value": 52580,
		"label": "Mazowieckie, Warszawa, Stary Imielin"
	},
	{
		"value": 52562,
		"label": "Mazowieckie, Warszawa, Stary Mokot\u00f3w"
	},
	{
		"value": 52579,
		"label": "Mazowieckie, Warszawa, Stary Rembert\u00f3w"
	},
	{
		"value": 52588,
		"label": "Mazowieckie, Warszawa, Stary S\u0142u\u017cew"
	},
	{
		"value": 52699,
		"label": "Mazowieckie, Warszawa, Stary \u017boliborz"
	},
	{
		"value": 52564,
		"label": "Mazowieckie, Warszawa, Stegny"
	},
	{
		"value": 52827,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Strachocin"
	},
	{
		"value": 52617,
		"label": "Wielkopolskie, Pozna\u0144, Strzeszyn"
	},
	{
		"value": 52646,
		"label": "Wielkopolskie, Pozna\u0144, \u015awierczewo"
	},
	{
		"value": 52831,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, \u015awiniary"
	},
	{
		"value": 52679,
		"label": "Mazowieckie, Warszawa, Szamocin"
	},
	{
		"value": 52694,
		"label": "Mazowieckie, Warszawa, Szamoty"
	},
	{
		"value": 52755,
		"label": "Wielkopolskie, Pozna\u0144, Szczepankowo-Sp\u0142awie-Krzesinki"
	},
	{
		"value": 52830,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Szczepin"
	},
	{
		"value": 52570,
		"label": "Mazowieckie, Warszawa, Szcz\u0119\u015bliwice"
	},
	{
		"value": 52576,
		"label": "Mazowieckie, Warszawa, Szmulowizna"
	},
	{
		"value": 52677,
		"label": "Mazowieckie, Warszawa, Tarchomin"
	},
	{
		"value": 52602,
		"label": "Mazowieckie, Warszawa, Targ\u00f3wek Fabryczny"
	},
	{
		"value": 52600,
		"label": "Mazowieckie, Warszawa, Targ\u00f3wek Mieszkaniowy"
	},
	{
		"value": 52832,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Tarnogaj"
	},
	{
		"value": 52636,
		"label": "Mazowieckie, Warszawa, Ujazd\u00f3w"
	},
	{
		"value": 52651,
		"label": "Mazowieckie, Warszawa, Ulrych\u00f3w"
	},
	{
		"value": 52621,
		"label": "Wielkopolskie, Pozna\u0144, Umultowo"
	},
	{
		"value": 52591,
		"label": "Mazowieckie, Warszawa, Ursyn\u00f3w Centrum"
	},
	{
		"value": 52581,
		"label": "Mazowieckie, Warszawa, Ursyn\u00f3w P\u00f3\u0142nocny"
	},
	{
		"value": 52603,
		"label": "Mazowieckie, Warszawa, Utrata"
	},
	{
		"value": 52761,
		"label": "Wielkopolskie, Pozna\u0144, Warszawskie-Pomet-Malta\u0144skie"
	},
	{
		"value": 52612,
		"label": "Mazowieckie, Warszawa, Wawrzyszew"
	},
	{
		"value": 52749,
		"label": "Mazowieckie, Warszawa, Weso\u0142a-Centrum"
	},
	{
		"value": 52833,
		"label": "Dolno\u015bl\u0105skie, Wroc\u0142aw, Widawa"
	},
	{
		"value": 52561,
		"label": "Mazowieckie, Warszawa, Wierzbno"
	},
	{
		"value": 52726,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w Kr\u00f3lewski"
	},
	{
		"value": 52725,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w Niski"
	},
	{
		"value": 52724,
		"label": "Mazowieckie, Warszawa, Wilan\u00f3w Wysoki"
	},
	{
		"value": 52680,
		"label": "Wielkopolskie, Pozna\u0144, Winiary"
	},
	{
		"value": 52625,
		"label": "Wielkopolskie, Pozna\u0144, Wola"
	},
	{
		"value": 52748,
		"label": "Mazowieckie, Warszawa, Wola Grzybowska"
	},
	{
		"value": 52606,
		"label": "Mazowieckie, Warszawa, W\u00f3lka W\u0119glowa"
	},
	{
		"value": 52611,
		"label": "Mazowieckie, Warszawa, Wrzeciono"
	},
	{
		"value": 52582,
		"label": "Mazowieckie, Warszawa, Wycz\u00f3\u0142ki"
	},
	{
		"value": 52557,
		"label": "Mazowieckie, Warszawa, Wygl\u0119d\u00f3w"
	},
	{
		"value": 52599,
		"label": "Mazowieckie, Warszawa, Zacisze"
	},
	{
		"value": 52721,
		"label": "Mazowieckie, Warszawa, Za\u0142uski"
	},
	{
		"value": 52729,
		"label": "Mazowieckie, Warszawa, Zawady"
	},
	{
		"value": 52659,
		"label": "Wielkopolskie, Pozna\u0144, \u017begrze"
	},
	{
		"value": 52682,
		"label": "Mazowieckie, Warszawa, \u017bera\u0144"
	},
	{
		"value": 52738,
		"label": "Mazowieckie, Warszawa, Zerze\u0144"
	},
	{
		"value": 52747,
		"label": "Mazowieckie, Warszawa, Zielona-Grzybowa"
	},
	{
		"value": 52681,
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

	render () {
		return (
		<div>
			<Select required={false} searchable={true} options={options}  />
		</div>
		)

	}
});


ReactDOM.render(
	<Container></Container>,
	document.getElementById('example')
);
