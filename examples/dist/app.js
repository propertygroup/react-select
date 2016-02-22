require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint react/prop-types: 0 */'use strict';function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);var _reactSelect=require('react-select');var _reactSelect2=_interopRequireDefault(_reactSelect);var _componentsContributors=require('./components/Contributors');var _componentsContributors2=_interopRequireDefault(_componentsContributors);var _componentsCustomComponents=require('./components/CustomComponents');var _componentsCustomComponents2=_interopRequireDefault(_componentsCustomComponents);var _componentsCustomRender=require('./components/CustomRender');var _componentsCustomRender2=_interopRequireDefault(_componentsCustomRender);var _componentsMultiselect=require('./components/Multiselect');var _componentsMultiselect2=_interopRequireDefault(_componentsMultiselect);var _componentsNumericSelect=require('./components/NumericSelect');var _componentsNumericSelect2=_interopRequireDefault(_componentsNumericSelect);var _componentsStates=require('./components/States');var _componentsStates2=_interopRequireDefault(_componentsStates);var options=[{"value":1,"label":'Dolnośląskie'},{"value":31,"label":"Kujawsko-pomorskie"},{"value":95,"label":'Łódzkie'},{"value":55,"label":"Lubelskie"},{"value":80,"label":"Lubuskie"},{"value":120,"label":'Małopolskie'},{"value":143,"label":"Mazowieckie"},{"value":186,"label":"Opolskie"},{"value":199,"label":"Podkarpackie"},{"value":225,"label":"Podlaskie"},{"value":243,"label":"Pomorskie"},{"value":264,"label":'Śląskie'},{"value":301,"label":'Świętokrzyskie'},{"value":316,"label":'Warmińsko-mazurskie'},{"value":338,"label":"Wielkopolskie"},{"value":374,"label":"Zachodniopomorskie"},{"value":52362,"label":"Kujawsko-Pomorskie, Bydgoszcz i okolice"},{"value":52261,"label":'Śląskie, Katowice i okolice'},{"value":52258,"label":'Małopolskie, Kraków i okolice'},{"value":52259,"label":'Łódzkie, Łódź i okolice'},{"value":52366,"label":"Lubelskie, Lublin i okolice"},{"value":52363,"label":"Kujawsko-Pomorskie, okolice Bydgoszczy"},{"value":52269,"label":'Śląskie, okolice Katowic'},{"value":52265,"label":'Małopolskie, okolice Krakowa'},{"value":52267,"label":'Łódzkie, okolice Łodzi'},{"value":52367,"label":"Lubelskie, okolice Lublina"},{"value":52365,"label":'Warmińsko-Mazurskie, okolice Olsztyna'},{"value":52263,"label":"Wielkopolskie, okolice Poznania"},{"value":52268,"label":"Zachodniopomorskie, okolice Szczecina"},{"value":52264,"label":'Pomorskie, okolice Trójmiasta'},{"value":52262,"label":"Mazowieckie, okolice Warszawy"},{"value":52266,"label":'Dolnośląskie, okolice Wrocławia'},{"value":52364,"label":'Warmińsko-Mazurskie, Olsztyn i okolice'},{"value":52254,"label":'Wielkopolskie, Poznań i okolice'},{"value":52260,"label":"Zachodniopomorskie, Szczecin i okolice"},{"value":52255,"label":'Pomorskie, Trójmiasto'},{"value":52256,"label":'Pomorskie, Trójmiasto i okolice'},{"value":52253,"label":"Mazowieckie, Warszawa i okolice"},{"value":52257,"label":'Dolnośląskie, Wrocław i okolice'},{"value":52380,"label":"Kujawsko-Pomorskie, Aleksandrowski"},{"value":52412,"label":"Podlaskie, Augustowski"},{"value":265,"label":'Śląskie, Będziński'},{"value":96,"label":'Łódzkie, Bełchatowski'},{"value":144,"label":'Mazowieckie, Białobrzeski'},{"value":227,"label":'Podlaskie, Białostocki'},{"value":266,"label":'Śląskie, Bielski'},{"value":228,"label":"Podlaskie, Bielski"},{"value":57,"label":'Lubelskie, Biłgorajski'},{"value":121,"label":'Małopolskie, Bocheński'},{"value":52423,"label":'Dolnośląskie, Bolesławiecki'},{"value":33,"label":"Kujawsko-Pomorskie, Brodnicki"},{"value":187,"label":"Opolskie, Brzeski"},{"value":122,"label":'Małopolskie, Brzeski'},{"value":116,"label":'Łódzkie, Brzeziński'},{"value":52589,"label":'Świętokrzyskie, Buski'},{"value":34,"label":"Kujawsko-Pomorskie, Bydgoski"},{"value":244,"label":"Pomorskie, Bytowski"},{"value":52332,"label":'Kujawsko-Pomorskie, Chełmiński'},{"value":52292,"label":'Lubelskie, Chełmski'},{"value":245,"label":"Pomorskie, Chojnicki"},{"value":123,"label":'Małopolskie, Chrzanowski'},{"value":145,"label":"Mazowieckie, Ciechanowski"},{"value":267,"label":'Śląskie, Cieszyński'},{"value":340,"label":"Wielkopolskie, Czarnkowsko-Trzcianecki"},{"value":52535,"label":'Śląskie, Częstochowski'},{"value":319,"label":'Warmińsko-Mazurskie, Działdowski'},{"value":52278,"label":'Dolnośląskie, Dzierżoniowski'},{"value":321,"label":'Warmińsko-Mazurskie, Ełcki'},{"value":146,"label":'Mazowieckie, Garwoliński'},{"value":247,"label":'Pomorskie, Gdański'},{"value":322,"label":'Warmińsko-Mazurskie, Giżycki'},{"value":269,"label":'Śląskie, Gliwicki'},{"value":4,"label":'Dolnośląskie, Głogowski'},{"value":341,"label":'Wielkopolskie, Gnieźnieński'},{"value":334,"label":'Warmińsko-Mazurskie, Gołdapski'},{"value":378,"label":"Zachodniopomorskie, Goleniowski"},{"value":36,"label":'Kujawsko-Pomorskie, Golubsko-Dobrzyński'},{"value":52471,"label":"Lubuskie, Gorzowski"},{"value":52386,"label":'Mazowieckie, Gostyniński'},{"value":342,"label":'Wielkopolskie, Gostyński'},{"value":148,"label":"Mazowieckie, Grodziski"},{"value":343,"label":"Wielkopolskie, Grodziski"},{"value":149,"label":'Mazowieckie, Grójecki'},{"value":379,"label":"Zachodniopomorskie, Gryficki"},{"value":380,"label":'Zachodniopomorskie, Gryfiński'},{"value":230,"label":"Podlaskie, Hajnowski"},{"value":323,"label":'Warmińsko-Mazurskie, Iławski'},{"value":38,"label":'Kujawsko-Pomorskie, Inowrocławski'},{"value":52403,"label":"Lubelskie, Janowski"},{"value":344,"label":'Wielkopolskie, Jarociński'},{"value":203,"label":'Podkarpackie, Jarosławski'},{"value":52283,"label":"Podkarpackie, Jasielski"},{"value":6,"label":'Dolnośląskie, Jaworski'},{"value":7,"label":'Dolnośląskie, Jeleniogórski'},{"value":345,"label":"Wielkopolskie, Kaliski"},{"value":381,"label":'Zachodniopomorskie, Kamieński'},{"value":248,"label":"Pomorskie, Kartuski"},{"value":52519,"label":'Warmińsko-Mazurskie, Kętrzyński'},{"value":305,"label":'Świętokrzyskie, Kielecki'},{"value":52541,"label":'Śląskie, Kłobucki'},{"value":9,"label":'Dolnośląskie, Kłodzki'},{"value":382,"label":'Zachodniopomorskie, Kołobrzeski'},{"value":349,"label":'Wielkopolskie, Kościański'},{"value":249,"label":'Pomorskie, Kościerski'},{"value":383,"label":'Zachodniopomorskie, Koszaliński'},{"value":150,"label":"Mazowieckie, Kozienicki"},{"value":126,"label":'Małopolskie, Krakowski'},{"value":191,"label":"Opolskie, Krapkowicki"},{"value":52333,"label":'Lubelskie, Kraśnicki'},{"value":52473,"label":'Wielkopolskie, Krotoszyński'},{"value":97,"label":'Łódzkie, Kutnowski'},{"value":98,"label":'Łódzkie, Łaski'},{"value":251,"label":'Pomorskie, Lęborski'},{"value":52458,"label":'Lubelskie, Łęczyński'},{"value":151,"label":"Mazowieckie, Legionowski"},{"value":52276,"label":'Dolnośląskie, Legnicki'},{"value":220,"label":"Podkarpackie, Leski"},{"value":351,"label":'Wielkopolskie, Leszczyński'},{"value":52309,"label":'Warmińsko-Mazurskie, Lidzbarski'},{"value":392,"label":'Zachodniopomorskie, Łobeski'},{"value":101,"label":'Łódzkie, Łódzki Wschodni'},{"value":11,"label":'Dolnośląskie, Lubański'},{"value":52469,"label":"Lubelskie, Lubartowski"},{"value":64,"label":"Lubelskie, Lubelski"},{"value":12,"label":'Dolnośląskie, Lubiński'},{"value":66,"label":'Lubelskie, Łukowski'},{"value":13,"label":'Dolnośląskie, Lwówecki'},{"value":52539,"label":"Mazowieckie, Makowski"},{"value":252,"label":"Pomorskie, Malborski"},{"value":128,"label":'Małopolskie, Miechowski'},{"value":352,"label":'Wielkopolskie, Międzychodzki'},{"value":210,"label":"Podkarpackie, Mielecki"},{"value":272,"label":'Śląskie, Mikołowski'},{"value":155,"label":'Mazowieckie, Miński'},{"value":156,"label":'Mazowieckie, Mławski'},{"value":326,"label":'Warmińsko-Mazurskie, Mrągowski'},{"value":129,"label":'Małopolskie, Myślenicki'},{"value":384,"label":'Zachodniopomorskie, Myśliborski'},{"value":52550,"label":'Śląskie, Myszkowski'},{"value":41,"label":"Kujawsko-Pomorskie, Nakielski"},{"value":192,"label":'Opolskie, Namysłowski'},{"value":52406,"label":'Warmińsko-Mazurskie, Nidzicki'},{"value":157,"label":"Mazowieckie, Nowodworski"},{"value":253,"label":"Pomorskie, Nowodworski"},{"value":130,"label":'Małopolskie, Nowosądecki'},{"value":84,"label":"Lubuskie, Nowosolski"},{"value":131,"label":'Małopolskie, Nowotarski'},{"value":353,"label":"Wielkopolskie, Nowotomyski"},{"value":52454,"label":"Opolskie, Nyski"},{"value":354,"label":"Wielkopolskie, Obornicki"},{"value":16,"label":'Dolnośląskie, Oławski'},{"value":329,"label":'Warmińsko-Mazurskie, Olecki'},{"value":15,"label":'Dolnośląskie, Oleśnicki'},{"value":132,"label":'Małopolskie, Olkuski'},{"value":330,"label":'Warmińsko-Mazurskie, Olsztyński'},{"value":307,"label":'Świętokrzyskie, Opatowski'},{"value":67,"label":"Lubelskie, Opolski"},{"value":195,"label":"Opolskie, Opolski"},{"value":331,"label":'Warmińsko-Mazurskie, Ostródzki'},{"value":52529,"label":'Mazowieckie, Ostrołęcki'},{"value":308,"label":'Świętokrzyskie, Ostrowiecki'},{"value":355,"label":"Wielkopolskie, Ostrowski"},{"value":52306,"label":"Wielkopolskie, Ostrzeszowski"},{"value":133,"label":'Małopolskie, Oświęcimski'},{"value":160,"label":"Mazowieckie, Otwocki"},{"value":103,"label":'Łódzkie, Pabianicki'},{"value":161,"label":'Mazowieckie, Piaseczyński'},{"value":357,"label":"Wielkopolskie, Pilski"},{"value":332,"label":'Warmińsko-Mazurskie, Piski'},{"value":358,"label":"Wielkopolskie, Pleszewski"},{"value":162,"label":'Mazowieckie, Płocki'},{"value":163,"label":'Mazowieckie, Płoński'},{"value":385,"label":"Zachodniopomorskie, Policki"},{"value":17,"label":'Dolnośląskie, Polkowicki'},{"value":359,"label":'Wielkopolskie, Poznański'},{"value":134,"label":'Małopolskie, Proszowicki'},{"value":164,"label":"Mazowieckie, Pruszkowski"},{"value":165,"label":"Mazowieckie, Przasnyski"},{"value":213,"label":"Podkarpackie, Przeworski"},{"value":274,"label":'Śląskie, Pszczyński'},{"value":254,"label":"Pomorskie, Pucki"},{"value":69,"label":'Lubelskie, Puławski'},{"value":167,"label":'Mazowieckie, Pułtuski'},{"value":386,"label":"Zachodniopomorskie, Pyrzycki"},{"value":275,"label":'Śląskie, Raciborski'},{"value":168,"label":"Mazowieckie, Radomski"},{"value":107,"label":'Łódzkie, Radomszczański'},{"value":52515,"label":'Lubelskie, Radzyński'},{"value":360,"label":"Wielkopolskie, Rawicki"},{"value":108,"label":'Łódzkie, Rawski'},{"value":215,"label":"Podkarpackie, Rzeszowski"},{"value":216,"label":"Podkarpackie, Sanocki"},{"value":44,"label":'Kujawsko-Pomorskie, Sępoleński'},{"value":52248,"label":"Mazowieckie, Siedlecki"},{"value":52521,"label":'Łódzkie, Sieradzki'},{"value":311,"label":'Świętokrzyskie, Skarżyski'},{"value":110,"label":'Łódzkie, Skierniewicki'},{"value":387,"label":'Zachodniopomorskie, Sławieński'},{"value":52215,"label":'Lubuskie, Słubicki'},{"value":361,"label":'Wielkopolskie, Słupecki'},{"value":255,"label":'Pomorskie, Słupski'},{"value":171,"label":"Mazowieckie, Sochaczewski"},{"value":52527,"label":'Mazowieckie, Sokołowski'},{"value":363,"label":'Wielkopolskie, Średzki'},{"value":19,"label":'Dolnośląskie, Średzki'},{"value":364,"label":'Wielkopolskie, Śremski'},{"value":217,"label":"Podkarpackie, Stalowowolski"},{"value":312,"label":'Świętokrzyskie, Starachowicki'},{"value":388,"label":"Zachodniopomorskie, Stargardzki"},{"value":256,"label":"Pomorskie, Starogardzki"},{"value":197,"label":"Opolskie, Strzelecki"},{"value":52523,"label":"Lubuskie, Strzelecko-Drezdenecki"},{"value":18,"label":'Dolnośląskie, Strzeliński'},{"value":218,"label":'Podkarpackie, Strzyżowski'},{"value":52446,"label":'Lubuskie, Sulęciński'},{"value":135,"label":'Małopolskie, Suski'},{"value":72,"label":'Lubelskie, Świdnicki'},{"value":20,"label":'Dolnośląskie, Świdnicki'},{"value":52285,"label":'Zachodniopomorskie, Świdwiński'},{"value":362,"label":"Wielkopolskie, Szamotulski"},{"value":389,"label":"Zachodniopomorskie, Szczecinecki"},{"value":333,"label":'Warmińsko-Mazurskie, Szczycieński'},{"value":52505,"label":'Mazowieckie, Szydłowiecki'},{"value":277,"label":'Śląskie, Tarnogórski'},{"value":136,"label":'Małopolskie, Tarnowski'},{"value":137,"label":'Małopolskie, Tatrzański'},{"value":257,"label":"Pomorskie, Tczewski"},{"value":111,"label":'Łódzkie, Tomaszowski'},{"value":73,"label":"Lubelskie, Tomaszowski"},{"value":46,"label":'Kujawsko-Pomorskie, Toruński'},{"value":21,"label":'Dolnośląskie, Trzebnicki'},{"value":52343,"label":'Małopolskie, Wadowicki'},{"value":52370,"label":'Wielkopolskie, Wągrowiecki'},{"value":22,"label":'Dolnośląskie, Wałbrzyski'},{"value":174,"label":"Mazowieckie, Warszawski Zachodni"},{"value":335,"label":'Warmińsko-Mazurskie, Węgorzewski'},{"value":175,"label":'Mazowieckie, Węgrowski'},{"value":258,"label":"Pomorskie, Wejherowski"},{"value":139,"label":'Małopolskie, Wielicki'},{"value":52320,"label":'Łódzkie, Wieruszowski'},{"value":49,"label":'Kujawsko-Pomorskie, Włocławski'},{"value":74,"label":'Lubelskie, Włodawski'},{"value":176,"label":'Mazowieckie, Wołomiński'},{"value":23,"label":'Dolnośląskie, Wołowski'},{"value":367,"label":'Wielkopolskie, Wolsztyński'},{"value":24,"label":'Dolnośląskie, Wrocławski'},{"value":368,"label":'Wielkopolskie, Wrzesiński'},{"value":52436,"label":"Lubuskie, Wschowski"},{"value":177,"label":"Mazowieckie, Wyszkowski"},{"value":52450,"label":'Dolnośląskie, Ząbkowicki'},{"value":52334,"label":'Lubuskie, Żagański'},{"value":75,"label":"Lubelskie, Zamojski"},{"value":91,"label":'Lubuskie, Żarski'},{"value":280,"label":'Śląskie, Zawierciański'},{"value":115,"label":'Łódzkie, Zgierski'},{"value":26,"label":'Dolnośląskie, Zgorzelecki'},{"value":89,"label":'Lubuskie, Zielonogórski'},{"value":369,"label":'Wielkopolskie, Złotowski'},{"value":178,"label":'Mazowieckie, Zwoleński'},{"value":180,"label":'Mazowieckie, Żyrardowski'},{"value":52511,"label":'Kujawsko-Pomorskie, Aleksandrowski, Aleksandrów Kujawski'},{"value":14762,"label":'Łódzkie, Zgierski, Aleksandrów Łódzki'},{"value":52461,"label":'Małopolskie, Chrzanowski, Alwernia'},{"value":52344,"label":'Małopolskie, Wadowicki, Andrychów'},{"value":52413,"label":'Podlaskie, Augustowski, Augustów'},{"value":52756,"label":"Kujawsko-pomorskie, Barcin"},{"value":52272,"label":'Warmińsko-Mazurskie, Olsztyński, Barczewo'},{"value":13435,"label":'Zachodniopomorskie, Myśliborski, Barlinek'},{"value":15056,"label":'Śląskie, Będziński, Będzin'},{"value":8510,"label":'Łódzkie, Bełchatowski, Bełchatów'},{"value":24220,"label":'Lubelskie, Biała Podlaska'},{"value":26641,"label":'Mazowieckie, Białobrzeski, Białobrzegi'},{"value":9692,"label":'Podlaskie, Białystok'},{"value":52279,"label":'Dolnośląskie, Dzierżoniowski, Bielawa'},{"value":13414,"label":'Śląskie, Bielsko-Biała'},{"value":3739,"label":"Podlaskie, Bielski, Bielsk Podlaski"},{"value":33494,"label":'Dolnośląskie, Oleśnicki, Bierutów'},{"value":52545,"label":'Warmińsko-Mazurskie, Olsztyński, Biskupiec'},{"value":2396,"label":'Mazowieckie, Warszawski Zachodni, Błonie'},{"value":36034,"label":'Małopolskie, Bocheński, Bochnia'},{"value":52424,"label":'Dolnośląskie, Bolesławiecki, Bolesławiec'},{"value":22811,"label":'Dolnośląskie, Jaworski, Bolków'},{"value":34065,"label":"Zachodniopomorskie, Szczecinecki, Borne Sulinowo"},{"value":21231,"label":"Kujawsko-Pomorskie, Brodnicki, Brodnica"},{"value":37359,"label":'Mazowieckie, Pruszkowski, Brwinów'},{"value":10425,"label":"Opolskie, Brzeski, Brzeg"},{"value":35561,"label":'Dolnośląskie, Wołowski, Brzeg Dolny'},{"value":39392,"label":'Małopolskie, Brzeski, Brzesko'},{"value":32853,"label":'Łódzkie, Brzeziński, Brzeziny'},{"value":52590,"label":'Świętokrzyskie, Buski, Busko-Zdrój'},{"value":22550,"label":"Kujawsko-Pomorskie, Bydgoszcz"},{"value":34871,"label":'Śląskie, Bytom'},{"value":12539,"label":'Pomorskie, Bytowski, Bytów'},{"value":52293,"label":'Lubelskie, Chełmski, Chełm'},{"value":52219,"label":'Małopolskie, Oświęcimski, Chełmek'},{"value":52238,"label":'Kujawsko-Pomorskie, Chełmiński, Chełmno'},{"value":46761,"label":"Pomorskie, Chojnicki, Chojnice"},{"value":19219,"label":'Śląskie, Chorzów'},{"value":52251,"label":'Małopolskie, Chrzanowski, Chrzanów'},{"value":6296,"label":'Mazowieckie, Ciechanowski, Ciechanów'},{"value":52381,"label":"Kujawsko-Pomorskie, Aleksandrowski, Ciechocinek"},{"value":16000,"label":'Śląskie, Cieszyński, Cieszyn'},{"value":52441,"label":'Podlaskie, Białostocki, Czarna Białostocka'},{"value":52410,"label":'Wielkopolskie, Czarnkowsko-Trzcianecki, Czarnków'},{"value":52513,"label":'Śląskie, Bielski, Czechowice-Dziedzice'},{"value":30668,"label":'Śląskie, Częstochowa'},{"value":16293,"label":'Śląskie, Dąbrowa Górnicza'},{"value":35342,"label":'Zachodniopomorskie, Sławieński, Darłowo'},{"value":52524,"label":"Lubuskie, Strzelecko-Drezdenecki, Drezdenko"},{"value":24294,"label":'Warmińsko-Mazurskie, Działdowski, Działdowo'},{"value":22546,"label":'Zachodniopomorskie, Kamieński, Dziwnów'},{"value":25289,"label":'Warmińsko-mazurskie, Elbląg'},{"value":51050,"label":'Warmińsko-mazurskie, Ełcki, Ełk'},{"value":50491,"label":'Mazowieckie, Garwoliński, Garwolin'},{"value":46083,"label":'Pomorskie, Gdańsk'},{"value":6196,"label":"Pomorskie, Gdynia"},{"value":11016,"label":'Warmińsko-mazurskie, Giżycki, Giżycko'},{"value":31825,"label":'Śląskie, Gliwice'},{"value":11592,"label":'Dolnośląskie, Głogowski, Głogów'},{"value":20423,"label":'Podkarpackie, Rzeszowski, Głogów Małopolski'},{"value":28203,"label":'Wielkopolskie, Gnieźnieński, Gniezno'},{"value":4455,"label":"Opolskie, Krapkowicki, Gogolin"},{"value":31788,"label":'Warmińsko-Mazurskie, Gołdapski, Gołdap'},{"value":28905,"label":'Zachodniopomorskie, Goleniowski, Goleniów'},{"value":21549,"label":'Mazowieckie, Piaseczyński, Góra Kalwaria'},{"value":37058,"label":'Lubuskie, Gorzów Wielkopolski'},{"value":52822,"label":'Zachodniopomorskie, Kołobrzeski, Gościno'},{"value":52287,"label":'Wielkopolskie, Gostyński, Gostyń'},{"value":52387,"label":'Mazowieckie, Gostyniński, Gostynin'},{"value":36132,"label":"Mazowieckie, Grodziski, Grodzisk Mazowiecki"},{"value":45812,"label":"Wielkopolskie, Grodziski, Grodzisk Wielkopolski"},{"value":1642,"label":'Mazowieckie, Grójecki, Grójec'},{"value":13077,"label":'Kujawsko-Pomorskie, Grudziądz'},{"value":52322,"label":"Zachodniopomorskie, Gryficki, Gryfice"},{"value":47110,"label":'Zachodniopomorskie, Gryfiński, Gryfino'},{"value":20511,"label":'Podlaskie, Hajnowski, Hajnówka'},{"value":52499,"label":'Mazowieckie, Miński, Halinów'},{"value":45344,"label":"Pomorskie, Pucki, Hel"},{"value":9385,"label":'Warmińsko-Mazurskie, Iławski, Iława'},{"value":35739,"label":'Kujawsko-Pomorskie, Inowrocławski, Inowrocław'},{"value":52445,"label":'Zachodniopomorskie, Stargardzki, Ińsko'},{"value":52404,"label":'Lubelskie, Janowski, Janów Lubelski'},{"value":47119,"label":'Wielkopolskie, Jarociński, Jarocin'},{"value":52284,"label":'Podkarpackie, Jasielski, Jasło'},{"value":13032,"label":"Pomorskie, Pucki, Jastarnia"},{"value":52433,"label":'Wielkopolskie, Złotowski, Jastrowie'},{"value":23134,"label":'Śląskie, Jastrzębie-Zdrój'},{"value":52457,"label":'Śląskie, Jaworzno'},{"value":52314,"label":'Dolnośląskie, Świdnicki, Jaworzyna Śląska'},{"value":4661,"label":'Dolnośląskie, Oławski, Jelcz-Laskowice'},{"value":51619,"label":'Dolnośląskie, Jelenia Góra'},{"value":7727,"label":'Mazowieckie, Otwocki, Józefów'},{"value":18767,"label":"Wielkopolskie, Kalisz"},{"value":52546,"label":'Mazowieckie, Miński, Kałuszyn'},{"value":37976,"label":'Dolnośląskie, Jeleniogórski, Karpacz'},{"value":1737,"label":"Pomorskie, Kartuski, Kartuzy"},{"value":31600,"label":'Śląskie, Katowice'},{"value":39252,"label":'Dolnośląskie, Wrocławski, Kąty Wrocławskie'},{"value":52520,"label":'Warmińsko-Mazurskie, Kętrzyński, Kętrzyn'},{"value":36190,"label":'Świętokrzyskie, Kielce'},{"value":52542,"label":'Śląskie, Kłobucki, Kłobuck'},{"value":18264,"label":'Dolnośląskie, Kłodzki, Kłodzko'},{"value":27502,"label":'Śląskie, Gliwicki, Knurów'},{"value":9913,"label":'Mazowieckie, Wołomiński, Kobyłka'},{"value":14102,"label":'Zachodniopomorskie, Kołobrzeski, Kołobrzeg'},{"value":39772,"label":'Łódzkie, Łódzki Wschodni, Koluszki'},{"value":2067,"label":"Wielkopolskie, Konin"},{"value":8437,"label":'Mazowieckie, Piaseczyński, Konstancin-Jeziorna'},{"value":12010,"label":'Łódzkie, Pabianicki, Konstantynów Łódzki'},{"value":2436,"label":'Wielkopolskie, Poznański, Kórnik'},{"value":871,"label":'Wielkopolskie, Kościański, Kościan'},{"value":4395,"label":'Pomorskie, Kościerski, Kościerzyna'},{"value":38447,"label":'Wielkopolskie, Poznański, Kostrzyn'},{"value":52472,"label":'Lubuskie, Gorzowski, Kostrzyn nad Odrą'},{"value":48606,"label":"Zachodniopomorskie, Koszalin"},{"value":44124,"label":'Kujawsko-Pomorskie, Golubsko-Dobrzyński, Kowalewo Pomorskie'},{"value":41196,"label":"Mazowieckie, Kozienicki, Kozienice"},{"value":11158,"label":'Małopolskie, Kraków'},{"value":22482,"label":"Opolskie, Krapkowicki, Krapkowice"},{"value":52237,"label":'Lubelskie, Kraśnicki, Kraśnik'},{"value":36014,"label":"Podkarpackie, Krosno"},{"value":52474,"label":'Wielkopolskie, Krotoszyński, Krotoszyn'},{"value":35022,"label":"Pomorskie, Nowodworski, Krynica Morska"},{"value":11328,"label":'Małopolskie, Nowosądecki, Krynica-Zdrój'},{"value":30868,"label":'Małopolskie, Krakowski, Krzeszowice'},{"value":52534,"label":'Wielkopolskie, Kościański, Krzywiń'},{"value":52525,"label":'Wielkopolskie, Czarnkowsko-Trzcianecki, Krzyż Wielkopolski'},{"value":49787,"label":'Łódzkie, Kutnowski, Kutno'},{"value":52388,"label":'Podkarpackie, Łańcut'},{"value":52382,"label":'Podlaskie, Białostocki, Łapy'},{"value":8769,"label":'Śląskie, Mikołowski, Łaziska Górne'},{"value":41675,"label":'Pomorskie, Lęborski, Łeba'},{"value":52805,"label":'Pomorskie, Lębork'},{"value":52459,"label":'Lubelskie, łęczyński, Łęczna'},{"value":52418,"label":'Śląskie, Lędziny'},{"value":47675,"label":"Mazowieckie, Legionowski, Legionowo"},{"value":40444,"label":'Dolnośląskie, Legnica'},{"value":32749,"label":'Opolskie, Strzelecki, Leśnica'},{"value":12259,"label":"Wielkopolskie, Leszno"},{"value":11303,"label":'Małopolskie, Chrzanowski, Libiąż'},{"value":16187,"label":'Łódzkie, Łódź'},{"value":51541,"label":'Mazowieckie, Warszawski Zachodni, Łomianki'},{"value":23038,"label":'Podlaskie, Łomża'},{"value":30988,"label":'Dolnośląskie, Lubiński, Lubin'},{"value":13220,"label":"Lubelskie, Lublin"},{"value":20203,"label":'Wielkopolskie, Poznański, Luboń'},{"value":19526,"label":'Lubelskie, Łukowski, Łuków'},{"value":52540,"label":'Mazowieckie, Makowski, Maków Mazowiecki'},{"value":44923,"label":"Pomorskie, Malborski, Malbork"},{"value":41324,"label":'Mazowieckie, Wołomiński, Marki'},{"value":28812,"label":'Dolnośląskie, Kłodzki, Międzylesie'},{"value":52760,"label":'Lubuskie, Międzyrzecz'},{"value":33992,"label":'Zachodniopomorskie, Kamieński, Międzyzdroje'},{"value":32591,"label":"Podkarpackie, Mielecki, Mielec"},{"value":16048,"label":'Warmińsko-Mazurskie, Mrągowski, Mikołajki'},{"value":13580,"label":'Śląskie, Mikołowski, Mikołów'},{"value":44298,"label":'Mazowieckie, Grodziski, Milanówek'},{"value":52420,"label":'Dolnośląskie, Milicz'},{"value":43897,"label":'Mazowieckie, Miński, Mińsk Mazowiecki'},{"value":37733,"label":'Mazowieckie, Mławski, Mława'},{"value":49117,"label":'Wielkopolskie, Poznański, Mosina'},{"value":48654,"label":'Warmińsko-Mazurskie, Mrągowski, Mrągowo'},{"value":52323,"label":'Mazowieckie, Żyrardowski, Mszczonów'},{"value":29754,"label":'Wielkopolskie, Poznański, Murowana Goślina'},{"value":47901,"label":'Małopolskie, Myślenicki, Myślenice'},{"value":8955,"label":'Śląskie, Mysłowice'},{"value":25809,"label":'Lubelskie, Puławski, Nałęczów'},{"value":29372,"label":'Opolskie, Namysłowski, Namysłów'},{"value":14321,"label":"Mazowieckie, Nowodworski, Nasielsk"},{"value":36712,"label":'Wielkopolskie, Wrzesiński, Nekla'},{"value":52548,"label":'Warmińsko-Mazurskie, Nidzicki, Nidzica'},{"value":36397,"label":'Małopolskie, Wielicki, Niepołomice'},{"value":10117,"label":'Lubuskie, Nowosolski, Nowa Sól'},{"value":52543,"label":"Zachodniopomorskie, Goleniowski, Nowogard"},{"value":7572,"label":'Mazowieckie, Nowodworski, Nowy Dwór Mazowiecki'},{"value":52247,"label":'Małopolskie, Nowy Sącz'},{"value":1899,"label":'Małopolskie, Nowotarski, Nowy Targ'},{"value":52533,"label":'Wielkopolskie, Nowotomyski, Nowy Tomyśl'},{"value":52455,"label":"Opolskie, Nyski, Nysa"},{"value":21343,"label":"Wielkopolskie, Obornicki, Oborniki"},{"value":32620,"label":'Dolnośląskie, Trzebnicki, Oborniki Śląskie'},{"value":14663,"label":'Dolnośląskie, Oławski, Oława'},{"value":51671,"label":'Warmińsko-Mazurskie, Olecki, Olecko'},{"value":34312,"label":'Dolnośląskie, Oleśnicki, Oleśnica'},{"value":31391,"label":'Małopolskie, Olkuski, Olkusz'},{"value":26804,"label":'Warmińsko-Mazurskie, Olsztyn'},{"value":20064,"label":'Warmińsko-Mazurskie, Olsztyński, Olsztynek'},{"value":52233,"label":"Wielkopolskie, Nowotomyski, Opalenica"},{"value":12168,"label":"Opolskie, Opole"},{"value":19975,"label":"Lubelskie, Opolski, Opole Lubelskie"},{"value":52494,"label":'Warmińsko-Mazurskie, Piski, Orzysz'},{"value":30635,"label":'Warmińsko-Mazurskie, Ostródzki, Ostróda'},{"value":19025,"label":'Mazowieckie, Ostrołęka'},{"value":28917,"label":'Świętokrzyskie, Ostrowiecki, Ostrowiec Świętokrzyski'},{"value":34136,"label":'Wielkopolskie, Ostrowski, Ostrów Wielkopolski'},{"value":52307,"label":'Wielkopolskie, Ostrzeszowski, Ostrzeszów'},{"value":52252,"label":'Małopolskie, Oświęcimski, Oświęcim'},{"value":12955,"label":"Mazowieckie, Otwocki, Otwock"},{"value":24508,"label":'Świętokrzyskie, Opatowski, Ożarów'},{"value":37871,"label":'Mazowieckie, Warszawski Zachodni, Ożarów Mazowiecki'},{"value":19008,"label":'Łódzkie, Zgierski, Ozorków'},{"value":9195,"label":'Łódzkie, Pabianicki, Pabianice'},{"value":28307,"label":'Mazowieckie, Piaseczyński, Piaseczno'},{"value":5414,"label":'Mazowieckie, Pruszkowski, Piastów'},{"value":9467,"label":'Śląskie, Piekary Śląskie'},{"value":36816,"label":'Wielkopolskie, Pilski, Piła'},{"value":52326,"label":'Łódzkie, Piotrków Trybunalski'},{"value":50016,"label":'Warmińsko-Mazurskie, Piski, Pisz'},{"value":52532,"label":'Małopolskie, Nowosądecki, Piwniczna-Zdrój'},{"value":30792,"label":'Mazowieckie, Płocki, Płock'},{"value":42177,"label":'Mazowieckie, Płoński, Płońsk'},{"value":52396,"label":"Wielkopolskie, Szamotulski, Pniewy"},{"value":52510,"label":'Wielkopolskie, Poznański, Pobiedziska'},{"value":2375,"label":'Dolnośląskie, Kłodzki, Polanica-Zdrój'},{"value":52286,"label":'Zachodniopomorskie, Świdwiński, Połczyn-Zdrój'},{"value":28779,"label":"Zachodniopomorskie, Policki, Police"},{"value":16956,"label":'Dolnośląskie, Polkowicki, Polkowice'},{"value":9905,"label":"Lubelskie, Opolski, Poniatowa"},{"value":30892,"label":'Wielkopolskie, Poznań'},{"value":49550,"label":'Pomorskie, Gdański, Pruszcz Gdański'},{"value":10399,"label":'Mazowieckie, Pruszkowski, Pruszków'},{"value":1236,"label":"Mazowieckie, Przasnyski, Przasnysz"},{"value":52374,"label":'Podkarpackie, Przemyśl'},{"value":39791,"label":"Podkarpackie, Przeworski, Przeworsk"},{"value":49952,"label":'Śląskie, Pszczyński, Pszczyna'},{"value":36584,"label":"Pomorskie, Pucki, Puck"},{"value":51827,"label":'Lubelskie, Puławski, Puławy'},{"value":25679,"label":'Mazowieckie, Pułtuski, Pułtusk'},{"value":51217,"label":'Wielkopolskie, Poznański, Puszczykowo'},{"value":52414,"label":'Śląskie, Gliwicki, Pyskowice'},{"value":52392,"label":'Małopolskie, Nowotarski, Rabka-Zdrój'},{"value":14537,"label":'Śląskie, Raciborski, Racibórz'},{"value":21988,"label":'Małopolskie, Tarnowski, Radłów'},{"value":33423,"label":"Mazowieckie, Radom"},{"value":35114,"label":'Łódzkie, Radomszczański, Radomsko'},{"value":2829,"label":'Mazowieckie, Wołomiński, Radzymin'},{"value":52516,"label":'Lubelskie, Radzyński, Radzyń Podlaski'},{"value":15600,"label":'Łódzkie, Rawski, Rawa Mazowiecka'},{"value":25977,"label":"Wielkopolskie, Rawicki, Rawicz"},{"value":23029,"label":"Pomorskie, Wejherowski, Reda"},{"value":52712,"label":"Podkarpackie, Ropczyce"},{"value":8857,"label":'Śląskie, Ruda Śląska'},{"value":18709,"label":"Pomorskie, Wejherowski, Rumia"},{"value":19648,"label":'Śląskie, Rybnik'},{"value":33659,"label":'Podkarpackie, Rzeszów'},{"value":51977,"label":'Łódzkie, Łódzki Wschodni, Rzgów'},{"value":25168,"label":"Podkarpackie, Sanocki, Sanok"},{"value":21267,"label":'Kujawsko-Pomorskie, Sępoleński, Sępólno Krajeńskie'},{"value":52241,"label":"Mazowieckie, Legionowski, Serock"},{"value":3910,"label":'Dolnośląskie, Wrocławski, Siechnice'},{"value":49690,"label":"Mazowieckie, Siedlce"},{"value":49528,"label":'Śląskie, Siemianowice Śląskie'},{"value":52341,"label":"Podlaskie, Siemiatycze"},{"value":52522,"label":'Łódzkie, Sieradzki, Sieradz'},{"value":52339,"label":'Śląskie, Będziński, Siewierz'},{"value":29950,"label":'Świętokrzyskie, Skarżyski, Skarżysko-Kamienna'},{"value":42472,"label":'Łódzkie, Skierniewice'},{"value":29464,"label":'Zachodniopomorskie, Sławieński, Sławno'},{"value":52217,"label":'Lubuskie, Słubicki, Słubice'},{"value":2435,"label":'Wielkopolskie, Słupecki, Słupca'},{"value":15753,"label":'Pomorskie, Słupsk'},{"value":15168,"label":'Dolnośląskie, Wrocławski, Sobótka'},{"value":42582,"label":"Mazowieckie, Sochaczewski, Sochaczew"},{"value":52528,"label":'Mazowieckie, Sokołowski, Sokołów Podlaski'},{"value":52352,"label":"Kujawsko-Pomorskie, Bydgoski, Solec Kujawski"},{"value":10847,"label":"Pomorskie, Sopot"},{"value":43947,"label":'Śląskie, Sosnowiec'},{"value":23503,"label":'Wielkopolskie, Śremski, Śrem'},{"value":17556,"label":'Dolnośląskie, Średzki, Środa Śląska'},{"value":10183,"label":'Wielkopolskie, Średzki, Środa Wielkopolska'},{"value":46169,"label":'Świętokrzyskie, Starachowicki, Starachowice'},{"value":38840,"label":'Zachodniopomorskie, Stargardzki, Stargard Szczeciński'},{"value":32224,"label":'Pomorskie, Starogardzki, Starogard Gdański'},{"value":17501,"label":'Wielkopolskie, Poznański, Stęszew'},{"value":33825,"label":'Śląskie, Cieszyński, Strumień'},{"value":12292,"label":'Łódzkie, Zgierski, Stryków'},{"value":18777,"label":'Dolnośląskie, Strzeliński, Strzelin'},{"value":29050,"label":'Podkarpackie, Strzyżowski, Strzyżów'},{"value":51813,"label":'Małopolskie, Suski, Sucha Beskidzka'},{"value":52447,"label":'Lubuskie, Sulęciński, Sulęcin'},{"value":26213,"label":'Mazowieckie, Miński, Sulejówek'},{"value":42309,"label":'Podlaskie, Suwałki'},{"value":46908,"label":'Wielkopolskie, Poznański, Swarzędz'},{"value":47866,"label":'Dolnośląskie, Świdnicki, Świdnica'},{"value":19804,"label":'Lubelskie, Świdnicki, Świdnik'},{"value":22934,"label":'Dolnośląskie, Świdnicki, Świebodzice'},{"value":52759,"label":'Kujawsko-pomorskie, Świecie'},{"value":52232,"label":'Dolnośląskie, Lubański, Świeradów Zdrój'},{"value":5229,"label":'Śląskie, Świętochłowice'},{"value":28754,"label":'Zachodniopomorskie, Świnoujście'},{"value":52758,"label":'Dolnośląskie, Syców'},{"value":625,"label":'Wielkopolskie, Szamotulski, Szamotuły'},{"value":2151,"label":'Dolnośląskie, Wałbrzyski, Szczawno-Zdrój'},{"value":32657,"label":"Zachodniopomorskie, Szczecin"},{"value":4435,"label":"Zachodniopomorskie, Szczecinecki, Szczecinek"},{"value":52555,"label":'Śląskie, Bielski, Szczyrk'},{"value":36606,"label":'Warmińsko-Mazurskie, Szczycieński, Szczytno'},{"value":49967,"label":'Dolnośląskie, Jeleniogórski, Szklarska Poręba'},{"value":20836,"label":"Kujawsko-Pomorskie, Nakielski, Szubin"},{"value":52506,"label":'Mazowieckie, Szydłowiecki, Szydłowiec'},{"value":52228,"label":'Małopolskie, Tarnów'},{"value":41348,"label":'Śląskie, Tarnogórski, Tarnowskie Góry'},{"value":52273,"label":'Śląskie, Tarnowskie Góry'},{"value":29078,"label":"Pomorskie, Tczewski, Tczew"},{"value":52647,"label":'Mazowieckie, Wołomiński, Tłuszcz'},{"value":52517,"label":'Lubelskie, Tomaszowski, Tomaszów Lubelski'},{"value":42140,"label":'Łódzkie, Tomaszowski, Tomaszów Mazowiecki'},{"value":19894,"label":'Kujawsko-Pomorskie, Toruń'},{"value":8588,"label":"Wielkopolskie, Czarnkowsko-Trzcianecki, Trzcianka"},{"value":32972,"label":'Dolnośląskie, Trzebnicki, Trzebnica'},{"value":12932,"label":'Wielkopolskie, Gnieźnieński, Trzemeszno'},{"value":52707,"label":"Wielkopolskie, Turek"},{"value":39949,"label":'Śląskie, Tychy'},{"value":17318,"label":'Wielkopolskie, Pilski, Ujście'},{"value":20905,"label":'Pomorskie, Słupski, Ustka'},{"value":42904,"label":'Śląskie, Cieszyński, Ustroń'},{"value":52304,"label":'Małopolskie, Wadowice'},{"value":52236,"label":'Dolnośląskie, Wałbrzych'},{"value":52214,"label":'Mazowieckie, Grójecki, Warka'},{"value":8647,"label":"Mazowieckie, Warszawa"},{"value":1786,"label":'Podlaskie, Białostocki, Wasilków'},{"value":35729,"label":'Warmińsko-mazurskie, Węgorzewski, Węgorzewo'},{"value":19240,"label":"Pomorskie, Wejherowski, Wejherowo"},{"value":49238,"label":'Małopolskie, Wielicki, Wieliczka'},{"value":52321,"label":'Łódzkie, Wieruszowski, Wieruszów'},{"value":52294,"label":'Śląskie, Cieszyński, Wisła'},{"value":49596,"label":'Pomorskie, Pucki, Władysławowo'},{"value":44391,"label":'Kujawsko-Pomorskie, Włocławek'},{"value":29786,"label":'Lubelskie, Włodawski, Włodawa'},{"value":16576,"label":'Zachodniopomorskie, Kamieński, Wolin'},{"value":34586,"label":'Mazowieckie, Wołomiński, Wołomin'},{"value":4237,"label":'Dolnośląskie, Wołowski, Wołów'},{"value":50574,"label":'Wielkopolskie, Wolsztyński, Wolsztyn'},{"value":26955,"label":'Dolnośląskie, Wrocław'},{"value":49639,"label":'Wielkopolskie, Wrzesiński, Września'},{"value":52437,"label":"Lubuskie, Wschowski, Wschowa"},{"value":33411,"label":"Wielkopolskie, Pilski, Wyrzysk"},{"value":37260,"label":'Mazowieckie, Wyszkowski, Wyszków'},{"value":23007,"label":'Mazowieckie, Wołomiński, Ząbki'},{"value":52711,"label":'Dolnośląskie, Ząbkowicki, Ząbkowice Śląskie'},{"value":1945,"label":'Śląskie, Zabrze'},{"value":52246,"label":'Lubuskie, Żagański, Żagań'},{"value":24848,"label":'Małopolskie, Tatrzański, Zakopane'},{"value":52401,"label":'Lubelskie, Zamość'},{"value":52468,"label":'Dolnośląskie, Świdnicki, Żarów'},{"value":8848,"label":'Lubuskie, Żarski, Żary'},{"value":40517,"label":'Śląskie, Zawierciański, Zawiercie'},{"value":1136,"label":'Łódzkie, Zgierski, Zgierz'},{"value":49163,"label":'Dolnośląskie, Zgorzelecki, Zgorzelec'},{"value":52451,"label":'Dolnośląskie, Ząbkowicki, Ziębice'},{"value":48806,"label":'Lubuskie, Zielona Góra'},{"value":43707,"label":'Mazowieckie, Wołomiński, Zielonka'},{"value":24706,"label":'Wielkopolskie, Złotowski, Złotów'},{"value":52462,"label":'Dolnośląskie, Trzebnicki, Żmigród'},{"value":52297,"label":'Śląskie, Żory'},{"value":39454,"label":'Pomorskie, Kartuski, Żukowo'},{"value":11917,"label":"Lubelskie, Zamojski, Zwierzyniec"},{"value":19760,"label":'Mazowieckie, Żyrardowski, Żyrardów'},{"value":47604,"label":'Dolnośląskie, Wołowski, Aleksandrowice'},{"value":27903,"label":'Małopolskie, Chrzanowski, Babice'},{"value":22914,"label":"Pomorskie, Kartuski, Banino"},{"value":6771,"label":'Wielkopolskie, Poznański, Baranowo'},{"value":52407,"label":'Warmińsko-Mazurskie, Nidzicki, Bartoszki'},{"value":6766,"label":'Mazowieckie, Piaseczyński, Baszkówka'},{"value":2598,"label":"Zachodniopomorskie, Policki, Bezrzecze"},{"value":52378,"label":'Łódzkie, Zgierski, Biała'},{"value":52349,"label":'Mazowieckie, Legionowski, Białobrzegi'},{"value":8419,"label":'Dolnośląskie, Głogowski, Białołęka'},{"value":27497,"label":'Małopolskie, Krakowski, Bibice'},{"value":38313,"label":'Wielkopolskie, Poznański, Biedrusko'},{"value":17812,"label":'Dolnośląskie, Wrocławski, Bielany Wrocławskie'},{"value":23356,"label":"Mazowieckie, Warszawski Zachodni, Bieniewice"},{"value":52372,"label":'Lubelskie, Biłgorajski, Biłgoraj'},{"value":31477,"label":'Mazowieckie, Nowodworski, Błędowo'},{"value":52470,"label":'Dolnośląskie, Wrocławski, Blizanowice'},{"value":52500,"label":'Mazowieckie, Warszawski Zachodni, Blizne Jasińskiego'},{"value":52203,"label":'Wielkopolskie, Poznański, Bnin'},{"value":48318,"label":'Mazowieckie, Piaseczyński, Bobrowiec'},{"value":52329,"label":'Świętokrzyskie, Ostrowiecki, Bodzechów'},{"value":8304,"label":"Wielkopolskie, Obornicki, Bogdanowo"},{"value":52311,"label":'Dolnośląskie, Oleśnicki, Boguszyce'},{"value":27562,"label":"Pomorskie, Wejherowski, Bojano"},{"value":39699,"label":'Małopolskie, Krakowski, Bolechowice'},{"value":52289,"label":'Mazowieckie, Otwocki, Bolesławów'},{"value":17403,"label":'Łódzkie, Skierniewicki, Bolimów'},{"value":9336,"label":"Pomorskie, Wejherowski, Bolszewo"},{"value":26167,"label":"Pomorskie, Kartuski, Borcz"},{"value":2230,"label":'Pomorskie, Gdański, Borkowo'},{"value":27495,"label":'Wielkopolskie, Poznański, Borówiec'},{"value":52302,"label":'Łódzkie, Zgierski, Bratoszewice'},{"value":3578,"label":'Wielkopolskie, Średzki, Brodowo'},{"value":52526,"label":'Dolnośląskie, Wrocławski, Brzezia Łąka'},{"value":38115,"label":"Opolskie, Opolski, Brzezie"},{"value":6684,"label":'Małopolskie, Krakowski, Brzezie'},{"value":25972,"label":'Dolnośląskie, Średzki, Brzezina'},{"value":52710,"label":'Małopolskie, Krakowski, Brzozówka'},{"value":48736,"label":'Wielkopolskie, Poznański, Bugaj'},{"value":7431,"label":'Łódzkie, Pabianicki, Bychlew'},{"value":52301,"label":'Pomorskie, Słupski, Bydlino'},{"value":52229,"label":'Zachodniopomorskie, Kołobrzeski, Byszewo'},{"value":27525,"label":'Mazowieckie, Legionowski, Chotomów'},{"value":17941,"label":'Dolnośląskie, Wrocławski, Chrząstawa Wielka'},{"value":49279,"label":"Pomorskie, Kartuski, Chwaszczyno"},{"value":6338,"label":'Mazowieckie, Piaseczyński, Chylice'},{"value":31995,"label":'Mazowieckie, Piaseczyński, Chyliczki'},{"value":52299,"label":'Kujawsko-Pomorskie, Toruński, Cierpice'},{"value":52757,"label":'Mazowieckie, Nowodworski, Cybulice Małe'},{"value":32830,"label":"Pomorskie, Kartuski, Czaple"},{"value":16583,"label":'Wielkopolskie, Poznański, Czapury'},{"value":31177,"label":'Małopolskie, Tatrzański, Czarna Góra'},{"value":34679,"label":'Małopolskie, Wielicki, Czarnochowice'},{"value":52312,"label":'Kujawsko-Pomorskie, Toruński, Czernikowo'},{"value":19840,"label":'Wielkopolskie, Poznański, Czmoń'},{"value":52400,"label":'Wielkopolskie, Poznański, Dąbrowa'},{"value":52708,"label":'Świętokrzyskie, Kielecki, Dąbrowa'},{"value":52508,"label":'Mazowieckie, Legionowski, Dąbrowa Chotomowska'},{"value":39467,"label":'Wielkopolskie, Nowotomyski, Dąbrowa Nowa'},{"value":38130,"label":'Wielkopolskie, Poznański, Dąbrówka'},{"value":52467,"label":'Podlaskie, Białostocki, Dąbrówki'},{"value":52226,"label":'Wielkopolskie, Poznański, Dachowa'},{"value":30437,"label":'Wielkopolskie, Poznański, Daszewice'},{"value":11799,"label":"Mazowieckie, Pruszkowski, Dawidy Bankowe"},{"value":52355,"label":'Mazowieckie, Miński, Długa Kościelna'},{"value":30054,"label":'Dolnośląskie, Wrocławski, Długołęka'},{"value":14376,"label":'Dolnośląskie, Wrocławski, Dobrzykowice'},{"value":33284,"label":'Dolnośląskie, Wrocławski, Domasław'},{"value":52348,"label":'Dolnośląskie, Wrocławski, Domaszczyn'},{"value":24393,"label":'Wielkopolskie, Poznański, Dopiewiec'},{"value":52296,"label":"Mazowieckie, Legionowski, Dosin"},{"value":40774,"label":'Wielkopolskie, Leszczyński, Drobnin'},{"value":29280,"label":"Mazowieckie, Warszawski Zachodni, Duchnice"},{"value":36176,"label":'Mazowieckie, Otwocki, Duchnów'},{"value":50552,"label":'Warmińsko-Mazurskie, Olsztyński, Dywity'},{"value":42908,"label":'Mazowieckie, Warszawski Zachodni, Dziekanów Leśny'},{"value":52346,"label":'Mazowieckie, Warszawski Zachodni, Dziekanów Polski'},{"value":25530,"label":'Pomorskie, Kartuski, Dzierżążno'},{"value":13379,"label":'Zachodniopomorskie, Kamieński, Dziwnówek'},{"value":52245,"label":"Pomorskie, Kartuski, Egiertowo"},{"value":32944,"label":'Mazowieckie, Pruszkowski, Falenty Duże'},{"value":32142,"label":"Mazowieckie, Pruszkowski, Falenty Nowe"},{"value":51660,"label":'Małopolskie, Nowosądecki, Florynka'},{"value":9080,"label":'Dolnośląskie, Wrocławski, Gądów'},{"value":52460,"label":'Małopolskie, Krakowski, Gaj'},{"value":9971,"label":'Łódzkie, Łódzki Wschodni, Gałków Duży'},{"value":28489,"label":'Mazowieckie, Radomski, Gębarzów'},{"value":52223,"label":'Małopolskie, Krakowski, Giebułtów'},{"value":22752,"label":'Śląskie, Gliwicki, Gierałtowice'},{"value":52244,"label":"Pomorskie, Kartuski, Glincz"},{"value":49033,"label":'Małopolskie, Myślenicki, Głogoczów'},{"value":31390,"label":'Wielkopolskie, Poznański, Głuchowo'},{"value":46998,"label":"Pomorskie, Wejherowski, Gniewino"},{"value":52240,"label":'Śląskie, Pszczyński, Goczałkowice-Zdrój'},{"value":52224,"label":'Wielkopolskie, Poznański, Gołuski'},{"value":52313,"label":'Mazowieckie, Otwocki, Góraszka'},{"value":12944,"label":'Pomorskie, Wejherowski, Gościcino'},{"value":52335,"label":'Śląskie, Mikołowski, Gostyń'},{"value":6220,"label":'Wielkopolskie, Poznański, Gowarzewo'},{"value":52549,"label":'Mazowieckie, Garwoliński, Goździk'},{"value":52409,"label":'Podlaskie, Białostocki, Grabówka'},{"value":31418,"label":'Dolnośląskie, Wrocławski, Groblice'},{"value":843,"label":"Mazowieckie, Nowodworski, Grochale"},{"value":32038,"label":'Małopolskie, Nowosądecki, Gródek Nad Dunajcem'},{"value":8498,"label":'Śląskie, Bielski, Grodziec'},{"value":52342,"label":'Łódzkie, Zgierski, Grotniki'},{"value":9565,"label":"Mazowieckie, Ciechanowski, Grudusk"},{"value":15024,"label":'Wielkopolskie, Poznański, Gruszczyn'},{"value":52337,"label":'Mazowieckie, Miński, Grzebowilk'},{"value":52308,"label":"Zachodniopomorskie, Policki, Grzepnica"},{"value":29781,"label":'Pomorskie, Kościerski, Grzybowo'},{"value":40396,"label":'Zachodniopomorskie, Kołobrzeski, Grzybowo'},{"value":4332,"label":'Warmińsko-Mazurskie, Olsztyński, Gutkowo'},{"value":7218,"label":'Mazowieckie, Wołomiński, Helenów'},{"value":19320,"label":'Małopolskie, Nowotarski, Huba'},{"value":29941,"label":'Podlaskie, Białostocki, Ignatki-Osiedle'},{"value":52379,"label":'Małopolskie, Krakowski, Iwanowice'},{"value":42100,"label":'Dolnośląskie, Wrocławski, Iwiny'},{"value":38339,"label":'Mazowieckie, Nowodworski, Izabelin-Dziekanówek'},{"value":28697,"label":'Mazowieckie, Legionowski, Jabłonna'},{"value":38176,"label":"Mazowieckie, Legionowski, Jadwisin"},{"value":52497,"label":'Dolnośląskie, Wrocławski, Jaksonów'},{"value":43812,"label":'Mazowieckie, Grodziski, Jaktorów-Kolonia'},{"value":52509,"label":"Lubuskie, Gorzowski, Janczewo"},{"value":52538,"label":"Mazowieckie, Pruszkowski, Janki"},{"value":39660,"label":'Pomorskie, Gdański, Jankowo Gdańskie'},{"value":52495,"label":"Pomorskie, Nowodworski, Jantar"},{"value":52443,"label":"Podkarpackie, Rzeszowski, Jasionka"},{"value":52415,"label":'Śląskie, Tarnogórski, Jaśkowice'},{"value":33634,"label":'Mazowieckie, Grodziski, Jastrzębnik'},{"value":52191,"label":'Dolnośląskie, Wrocławski, Jaszkotle'},{"value":36249,"label":'Małopolskie, Oświęcimski, Jawiszowice'},{"value":10222,"label":'Wielkopolskie, Poznański, Jelonek'},{"value":10760,"label":'Małopolskie, Krakowski, Jerzmanowice'},{"value":52425,"label":'Dolnośląskie, Wrocławski, Jeszkowice'},{"value":52397,"label":'Warmińsko-Mazurskie, Mrągowski, Jora Wielka'},{"value":32821,"label":'Mazowieckie, Piaseczyński, Józefosław'},{"value":18983,"label":'Mazowieckie, Żyrardowski, Józefów'},{"value":38694,"label":'Łódzkie, Łódzki Wschodni, Justynów'},{"value":52288,"label":'Pomorskie, Gdański, Juszkowo'},{"value":50415,"label":'Podlaskie, Białostocki, Juszkowy Gród'},{"value":52556,"label":"Mazowieckie, Pruszkowski, Kajetany"},{"value":35457,"label":'Wielkopolskie, Leszczyński, Kąkolewo'},{"value":52222,"label":'Lubelskie, Lubelski, Kalinówka'},{"value":52464,"label":'Wielkopolskie, Poznański, Kalwy'},{"value":41366,"label":'Dolnośląskie, Wrocławski, Kamień'},{"value":52235,"label":'Dolnośląskie, Wrocławski, Kamieniec Wrocławski'},{"value":52368,"label":'Dolnośląskie, Ząbkowicki, Kamieniec Ząbkowicki'},{"value":52820,"label":'Warmińsko-mazurskie, Szczycieński, Kamionek'},{"value":22002,"label":'Mazowieckie, Żyrardowski, Kamionka'},{"value":2934,"label":'Wielkopolskie, Poznański, Kamionki'},{"value":52428,"label":'Kujawsko-Pomorskie, Toruński, Kamionki Małe'},{"value":52416,"label":'Śląskie, Bielski, Kaniów'},{"value":7633,"label":'Pomorskie, Wejherowski, Kąpino'},{"value":39771,"label":"Mazowieckie, Warszawski Zachodni, Kaputy"},{"value":52317,"label":'Dolnośląskie, Wrocławski, Karwiany'},{"value":8542,"label":'Pomorskie, Nowodworski, Kąty Rybackie'},{"value":37644,"label":'Mazowieckie, Legionowski, Kąty Węgierskie'},{"value":10619,"label":'Wielkopolskie, Szamotulski, Kaźmierz'},{"value":52310,"label":'Pomorskie, Wejherowski, Kębłowo'},{"value":43000,"label":'Mazowieckie, Piaseczyński, Kędzierówka'},{"value":42497,"label":'Wielkopolskie, Poznański, Kiekrz'},{"value":50896,"label":'Dolnośląskie, Wrocławski, Kiełczów'},{"value":52354,"label":'Mazowieckie, Warszawski Zachodni, Kiełpin'},{"value":37907,"label":'Pomorskie, Kartuski, Kiełpino'},{"value":26602,"label":'Warmińsko-Mazurskie, Olsztyński, Kieźliny'},{"value":52452,"label":'Warmińsko-Mazurskie, Olsztyński, Klebark Wielki'},{"value":52498,"label":'Mazowieckie, Wołomiński, Klembów'},{"value":52417,"label":'Pomorskie, Gdański, Kleszczewko'},{"value":22651,"label":'Wielkopolskie, Poznański, Kliny'},{"value":40294,"label":'Dolnośląskie, Wrocławski, Kobierzyce'},{"value":36581,"label":'Wielkopolskie, Poznański, Kobylnica'},{"value":3964,"label":'Wielkopolskie, Poznański, Kobylniki'},{"value":12360,"label":"Mazowieckie, Warszawski Zachodni, Koczargi Stare"},{"value":37334,"label":'Pomorskie, Gdański, Kolbudy'},{"value":52829,"label":"Lubelskie, Lubelski, Kolonia Pliszczyn"},{"value":52503,"label":"Wielkopolskie, Kaliski, Kolonia Skarszewek"},{"value":9076,"label":'Wielkopolskie, Poznański, Komorniki'},{"value":26898,"label":'Warmińsko-Mazurskie, Działdowski, Komorniki'},{"value":39514,"label":'Mazowieckie, Pruszkowski, Komorów'},{"value":52316,"label":'Dolnośląskie, Świdnicki, Komorów'},{"value":35695,"label":'Dolnośląskie, Wrocławski, Komorowice'},{"value":52453,"label":'Wielkopolskie, Poznański, Konarskie'},{"value":46080,"label":'Wielkopolskie, Poznański, Koninko'},{"value":9532,"label":'Mazowieckie, Węgrowski, Korytnica'},{"value":22513,"label":'Mazowieckie, Piaseczyński, Korzeniówka'},{"value":52242,"label":'Małopolskie, Nowosądecki, Korzenna'},{"value":39282,"label":"Pomorskie, Pucki, Kosakowo"},{"value":7421,"label":'Małopolskie, Tatrzański, Kościelisko'},{"value":52227,"label":'Małopolskie, Tarnowski, Koszyce Wielkie'},{"value":52502,"label":'Opolskie, Opolski, Kotórz Wielki'},{"value":52501,"label":'Pomorskie, Gdański, Kowale'},{"value":12905,"label":'Wielkopolskie, Poznański, Koziegłowy'},{"value":11058,"label":'Wielkopolskie, Poznański, Krąplewo'},{"value":40626,"label":"Podkarpackie, Rzeszowski, Krasne"},{"value":9494,"label":'Mazowieckie, Warszawski Zachodni, Kręczki'},{"value":52828,"label":'Kujawsko-pomorskie, Toruński, Krobia'},{"value":44106,"label":'Małopolskie, Krakowski, Kryspinów'},{"value":44037,"label":'Mazowieckie, Żyrardowski, Krze Duże'},{"value":48950,"label":'Dolnośląskie, Wrocławski, Krzeptów'},{"value":36620,"label":'Wielkopolskie, Leszczyński, Krzycko Wielkie'},{"value":51455,"label":'Łódzkie, Zgierski, Krzywiec'},{"value":4996,"label":'Dolnośląskie, Trzebnicki, Krzyżanowice'},{"value":31125,"label":'Łódzkie, Pabianicki, Ksawerów'},{"value":35086,"label":'Mazowieckie, Grodziski, Książenice'},{"value":52389,"label":'Dolnośląskie, Legnicki, Kunice'},{"value":52422,"label":'Małopolskie, Wielicki, Kunice'},{"value":37952,"label":'Wielkopolskie, Międzychodzki, Kwilcz'},{"value":48860,"label":'Mazowieckie, Warszawski Zachodni, Kwirynów'},{"value":52275,"label":'Mazowieckie, Legionowski, Łajski'},{"value":52432,"label":'Śląskie, Pszczyński, Łąka'},{"value":34146,"label":'Mazowieckie, Piaseczyński, Łazy'},{"value":37135,"label":'Pomorskie, Pucki, Łebcz'},{"value":718,"label":'Małopolskie, Wielicki, Lednica Górna'},{"value":52277,"label":'Dolnośląskie, Legnicki, Legnickie Pole'},{"value":3947,"label":'Mazowieckie, Piaseczyński, Lesznowola'},{"value":36767,"label":'Mazowieckie, Grójecki, Lesznowola'},{"value":22066,"label":'Pomorskie, Kartuski, Leźno'},{"value":34647,"label":'Małopolskie, Krakowski, Libertów'},{"value":44885,"label":'Dolnośląskie, Trzebnicki, Ligota Piękna'},{"value":52821,"label":'Mazowieckie, Wołomiński, Lipinki'},{"value":12693,"label":'Mazowieckie, Warszawski Zachodni, Lipków'},{"value":6704,"label":"Mazowieckie, Otwocki, Lipowo"},{"value":52399,"label":'Małopolskie, Krakowski, Liszki'},{"value":52353,"label":'Mazowieckie, Węgrowski, Łochów'},{"value":52430,"label":'Kujawsko-Pomorskie, Bydgoski, Łochowo'},{"value":6883,"label":'Mazowieckie, Warszawski Zachodni, Łomianki Dolne'},{"value":8055,"label":'Wielkopolskie, Poznański, Łopuchowo'},{"value":52250,"label":'Małopolskie, Tarnowski, Łowczówek'},{"value":52806,"label":'Wielkopolskie, Poznański, Łowęcin'},{"value":38755,"label":'Dolnośląskie, Wrocławski, Łozina'},{"value":52375,"label":'Lubelskie, Lubartowski, Lubartów'},{"value":52514,"label":'Lubuskie, Nowosolski, Lubięcin'},{"value":52421,"label":"Pomorskie, Tczewski, Lubiszewo Tczewskie"},{"value":48993,"label":'Zachodniopomorskie, Kamieński, Łukęcin'},{"value":8482,"label":'Wielkopolskie, Poznański, Lusówko'},{"value":42643,"label":'Dolnośląskie, Średzki, Lutynia'},{"value":5710,"label":"Pomorskie, Wejherowski, Luzino"},{"value":4025,"label":'Mazowieckie, Piaseczyński, Magdalenka'},{"value":28635,"label":'Mazowieckie, Wołomiński, Majdan'},{"value":52395,"label":"Kujawsko-Pomorskie, Bydgoski, Maksymilianowo"},{"value":6439,"label":'Mazowieckie, Otwocki, Malcanów'},{"value":52544,"label":'Warmińsko-Mazurskie, Ostródzki, Małdyty'},{"value":29615,"label":'Mazowieckie, Nowodworski, Małocice'},{"value":52282,"label":'Opolskie, Opolski, Marszałki'},{"value":37810,"label":'Świętokrzyskie, Kielecki, Masłów Pierwszy'},{"value":52324,"label":"Pomorskie, Pucki, Mechelinki"},{"value":10668,"label":'Dolnośląskie, Wrocławski, Mędłów'},{"value":10332,"label":'Mazowieckie, Otwocki, Michałówek'},{"value":52376,"label":'Mazowieckie, Legionowski, Michałów-Grabina'},{"value":52225,"label":'Małopolskie, Krakowski, Michałowice'},{"value":6354,"label":'Mazowieckie, Pruszkowski, Michałowice-Wieś'},{"value":38052,"label":'Mazowieckie, Legionowski, Michałów-Reginów'},{"value":40170,"label":"Pomorskie, Kartuski, Miechucino"},{"value":34893,"label":'Zachodniopomorskie, Kamieński, Międzywodzie'},{"value":16057,"label":'Pomorskie, Słupski, Mielno'},{"value":24820,"label":'Zachodniopomorskie, Koszaliński, Mielno'},{"value":13611,"label":"Zachodniopomorskie, Policki, Mierzyn"},{"value":27600,"label":'Dolnośląskie, Wrocławski, Mirków'},{"value":15044,"label":'Mazowieckie, Pruszkowski, Młochów'},{"value":48601,"label":'Dolnośląskie, Wrocławski, Mnichowice'},{"value":23982,"label":'Małopolskie, Krakowski, Mników'},{"value":52003,"label":'Małopolskie, Krakowski, Modlnica'},{"value":31171,"label":'Małopolskie, Krakowski, Modlniczka'},{"value":30274,"label":'Małopolskie, Krakowski, Mogilany'},{"value":32614,"label":"Zachodniopomorskie, Stargardzki, Morzyczyn"},{"value":19040,"label":"Pomorskie, Pucki, Mosty"},{"value":30217,"label":"Lubelskie, Lubelski, Motycz"},{"value":3992,"label":'Wielkopolskie, Poznański, Mrowino'},{"value":40413,"label":'Mazowieckie, Miński, Mrozy'},{"value":19023,"label":'Zachodniopomorskie, Gryficki, Mrzeżyno'},{"value":52427,"label":'Podkarpackie, Jarosławski, Munina'},{"value":764,"label":'Mazowieckie, Piaseczyński, Mysiadło'},{"value":52554,"label":'Dolnośląskie, Jeleniogórski, Mysłakowice'},{"value":15839,"label":'Kujawsko-Pomorskie, Bydgoski, Myślęcinek'},{"value":19543,"label":"Mazowieckie, Pruszkowski, Nadarzyn"},{"value":4865,"label":'Mazowieckie, Wołomiński, Nadma'},{"value":6002,"label":'Dolnośląskie, Wrocławski, Nadolice Wielkie'},{"value":11650,"label":'Małopolskie, Krakowski, Narama'},{"value":52434,"label":'Warmińsko-Mazurskie, Olsztyński, Naterki'},{"value":52439,"label":'Śląskie, Gliwicki, Nieborowice'},{"value":22442,"label":"Zachodniopomorskie, Gryficki, Niechorze"},{"value":12266,"label":'Małopolskie, Tarnowski, Niedomice'},{"value":52230,"label":'Zachodniopomorskie, Kołobrzeski, Niekanin'},{"value":51206,"label":"Kujawsko-Pomorskie, Bydgoski, Niemcz"},{"value":25245,"label":'Mazowieckie, Legionowski, Nieporęt'},{"value":52291,"label":'Podlaskie, Białostocki, Niewodnica Korycka'},{"value":52405,"label":'Wielkopolskie, Śremski, Nochowo'},{"value":43998,"label":'Mazowieckie, Piaseczyński, Nowa Iwiczna'},{"value":37600,"label":'Mazowieckie, Piaseczyński, Nowa Wola'},{"value":52243,"label":"Pomorskie, Kartuski, Nowe Czaple"},{"value":52249,"label":"Mazowieckie, Siedlecki, Nowe Iganie"},{"value":27468,"label":'Mazowieckie, Wołomiński, Nowe Lipiny'},{"value":52553,"label":'Świętokrzyskie, Kielecki, Nowiny'},{"value":29580,"label":'Zachodniopomorskie, Myśliborski, Nowogródek Pomorski'},{"value":10959,"label":'Mazowieckie, Warszawski Zachodni, Nowy Dziekanów'},{"value":52531,"label":'Dolnośląskie, Lubiński, Obora'},{"value":52390,"label":'Kujawsko-Pomorskie, Toruński, Obrowo'},{"value":37970,"label":'Lubuskie, Zielonogórski, Ochla'},{"value":34992,"label":'Małopolskie, Wielicki, Ochmanów'},{"value":52507,"label":"Mazowieckie, Legionowski, Olszewnica Nowa"},{"value":52690,"label":"Mazowieckie, Legionowski, Olszewnica Stara"},{"value":13084,"label":"Mazowieckie, Pruszkowski, Opacz-Kolonia"},{"value":51821,"label":'Małopolskie, Proszowicki, Opatkowice'},{"value":20837,"label":"Pomorskie, Wejherowski, Orle"},{"value":52701,"label":'Śląskie, Mikołowski, Ornontowice'},{"value":42560,"label":"Kujawsko-Pomorskie, Bydgoski, Osielsko"},{"value":52373,"label":'Podlaskie, Białostocki, Osowicze'},{"value":34318,"label":'Mazowieckie, Pruszkowski, Otrębusy'},{"value":27677,"label":'Mazowieckie, Otwocki, Otwock Mały'},{"value":52298,"label":'Dolnośląskie, Wrocławski, Ozorzyce'},{"value":47059,"label":'Wielkopolskie, Poznański, Paczkowo'},{"value":44016,"label":'Wielkopolskie, Poznański, Palędzie'},{"value":46626,"label":"Mazowieckie, Pruszkowski, Parzniew"},{"value":25480,"label":'Śląskie, Pszczyński, Pawłowice'},{"value":13037,"label":'Mazowieckie, Pruszkowski, Pęcice Małe'},{"value":52290,"label":'Wielkopolskie, Poznański, Pecna'},{"value":45216,"label":'Wielkopolskie, Gostyński, Pępowo'},{"value":45599,"label":'Pomorskie, Kartuski, Pępowo'},{"value":4744,"label":'Małopolskie, Krakowski, Piekary'},{"value":20312,"label":'Dolnośląskie, Wrocławski, Pietrzykowice'},{"value":35553,"label":'Małopolskie, Chrzanowski, Piła Kościelecka'},{"value":52438,"label":'Śląskie, Gliwicki, Pilchowice'},{"value":11639,"label":"Pomorskie, Starogardzki, Pinczyn"},{"value":50508,"label":'Śląskie, Bielski, Pisarzowice'},{"value":52271,"label":'Dolnośląskie, Oleśnicki, Piszkawa'},{"value":30423,"label":'Wielkopolskie, Poznański, Plewiska'},{"value":52347,"label":'Mazowieckie, Pułtuski, Pobyłkowo Małe'},{"value":39906,"label":'Pomorskie, Słupski, Poddąbie'},{"value":43126,"label":'Pomorskie, Pucki, Pogórze'},{"value":25293,"label":'Zachodniopomorskie, Łobeski, Pogorzelica'},{"value":28369,"label":"Zachodniopomorskie, Gryficki, Pogorzelica"},{"value":52198,"label":'Kujawsko-Pomorskie, Brodnicki, Półko'},{"value":24694,"label":'Lubuskie, Zielonogórski, Pomorsko'},{"value":4863,"label":'Dolnośląskie, Oleśnicki, Poniatowice'},{"value":52551,"label":'Śląskie, Myszkowski, Poraj'},{"value":9000,"label":'Małopolskie, Tatrzański, Poronin'},{"value":2986,"label":'Mazowieckie, Piaseczyński, Prażmów'},{"value":52330,"label":'Dolnośląskie, Wrocławski, Pruszowice'},{"value":49540,"label":'Wielkopolskie, Poznański, Przeźmierowo'},{"value":52408,"label":'Mazowieckie, Piaseczyński, Przypki'},{"value":52435,"label":'Wielkopolskie, Śremski, Psarskie'},{"value":9616,"label":'Dolnośląskie, Trzebnicki, Psary'},{"value":42431,"label":'Dolnośląskie, Świdnicki, Pszenno'},{"value":37911,"label":"Zachodniopomorskie, Goleniowski, Pucice"},{"value":2797,"label":"Podkarpackie, Stalowowolski, Pysznica"},{"value":52394,"label":'Wielkopolskie, Poznański, Rabowice'},{"value":42060,"label":'Małopolskie, Krakowski, Raciborowice'},{"value":3291,"label":'Małopolskie, Miechowski, Racławice'},{"value":26411,"label":'Dolnośląskie, Wrocławski, Racławice Wielkie'},{"value":8184,"label":'Dolnośląskie, Wrocławski, Radomierzyce'},{"value":14233,"label":'Pomorskie, Gdański, Radunica'},{"value":37461,"label":'Dolnośląskie, Wrocławski, Radwanice'},{"value":5264,"label":'Mazowieckie, Żyrardowski, Radziejowice'},{"value":52319,"label":"Wielkopolskie, Szamotulski, Radzyny"},{"value":3525,"label":"Mazowieckie, Pruszkowski, Raszyn"},{"value":9898,"label":'Warmińsko-Mazurskie, Olsztyński, Redykajny'},{"value":29189,"label":'Mazowieckie, Pruszkowski, Reguły'},{"value":52338,"label":"Mazowieckie, Legionowski, Rembelszczyzna"},{"value":3482,"label":"Zachodniopomorskie, Gryficki, Rewal"},{"value":1209,"label":'Wielkopolskie, Pleszewski, Robaków'},{"value":22215,"label":'Wielkopolskie, Poznański, Robakowo'},{"value":17972,"label":'Wielkopolskie, Poznański, Rogalin'},{"value":42767,"label":"Zachodniopomorskie, Gryficki, Rogowo"},{"value":16717,"label":"Zachodniopomorskie, Stargardzki, Rogowo"},{"value":52512,"label":'Mazowieckie, Płocki, Rogozino'},{"value":48500,"label":'Wielkopolskie, Poznański, Rokietnica'},{"value":52384,"label":"Pomorskie, Tczewski, Rokitki"},{"value":23959,"label":'Pomorskie, Gdański, Rokitnica'},{"value":52704,"label":'Zachodniopomorskie, Koszaliński, Rosnowo'},{"value":52705,"label":'Wielkopolskie, Poznański, Rosnowo'},{"value":589,"label":'Pomorskie, Gdański, Rotmanka'},{"value":936,"label":'Pomorskie, Słupski, Rowy'},{"value":52429,"label":"Mazowieckie, Pruszkowski, Rozalin"},{"value":52295,"label":'Kujawsko-Pomorskie, Toruński, Rozgarty'},{"value":16881,"label":'Pomorskie, Gdański, Różyny'},{"value":21300,"label":'Małopolskie, Krakowski, Rudawa'},{"value":52465,"label":'Wielkopolskie, Poznański, Rumianek'},{"value":52300,"label":'Warmińsko-Mazurskie, Olsztyński, Ruś'},{"value":17967,"label":"Mazowieckie, Pruszkowski, Rusiec"},{"value":52496,"label":'Małopolskie, Krakowski, Rybna'},{"value":52393,"label":'Małopolskie, Wadowicki, Ryczów'},{"value":19992,"label":'Małopolskie, Krakowski, Rząska'},{"value":52789,"label":'Mazowieckie, Wyszkowski, Rząśnik'},{"value":52530,"label":'Mazowieckie, Ostrołęcki, Rzekuń'},{"value":34342,"label":"Mazowieckie, Grodziski, Sade Budy"},{"value":38585,"label":'Dolnośląskie, Wrocławski, Sadków'},{"value":27725,"label":"Mazowieckie, Warszawski Zachodni, Sadowa"},{"value":43506,"label":'Wielkopolskie, Poznański, Sady'},{"value":11359,"label":'Zachodniopomorskie, Koszaliński, Sarbinowo'},{"value":38155,"label":'Łódzkie, Łaski, Sędziejowice'},{"value":18184,"label":'Mazowieckie, Pruszkowski, Sękocin Nowy'},{"value":52431,"label":"Mazowieckie, Sochaczewski, Seroki-Parcela"},{"value":52221,"label":'Zachodniopomorskie, Policki, Siadło Dolne'},{"value":52402,"label":'Mazowieckie, Płoński, Siedlin'},{"value":51550,"label":'Pomorskie, Słupski, Siemianice'},{"value":10970,"label":'Dolnośląskie, Kłodzki, Sienna'},{"value":46611,"label":"Pomorskie, Kartuski, Sierakowice"},{"value":52463,"label":'Wielkopolskie, Poznański, Sierosław'},{"value":52411,"label":'Mazowieckie, Grodziski, Siestrzeń'},{"value":52213,"label":"Zachodniopomorskie, Szczecinecki, Silnowo"},{"value":24542,"label":"Opolskie, Brzeski, Skarbimierz"},{"value":52444,"label":"Zachodniopomorskie, Policki, Skarbimierzyce"},{"value":52356,"label":'Małopolskie, Krakowski, Skawina'},{"value":11676,"label":"Mazowieckie, Legionowski, Skierdy"},{"value":4215,"label":'Kujawsko-Pomorskie, Nakielski, Skórzewo'},{"value":2450,"label":'Wielkopolskie, Poznański, Skórzewo'},{"value":34270,"label":'Pomorskie, Gdański, Skowarcz'},{"value":32338,"label":"Mazowieckie, Legionowski, Skrzeszew"},{"value":13636,"label":'Mazowieckie, Grodziski, Skuły'},{"value":52305,"label":'Zachodniopomorskie, Koszaliński, Skwierzynka'},{"value":46478,"label":'Małopolskie, Wielicki, Śledziejowice'},{"value":4654,"label":'Dolnośląskie, Wrocławski, Ślęza'},{"value":11377,"label":'Mazowieckie, Pruszkowski, Słomin'},{"value":42993,"label":'Mazowieckie, Płocki, Słupno'},{"value":41596,"label":'Mazowieckie, Wołomiński, Słupno'},{"value":52357,"label":'Dolnośląskie, Wrocławski, Smolec'},{"value":28882,"label":"Mazowieckie, Otwocki, Sobienie Szlacheckie"},{"value":26262,"label":'Dolnośląskie, Lwówecki, Sobota'},{"value":49453,"label":'Mazowieckie, Piaseczyński, Solec'},{"value":52547,"label":'Wielkopolskie, Ostrowski, Sośnie'},{"value":52504,"label":'Dolnośląskie, Oleśnicki, Spalice'},{"value":52360,"label":'Mazowieckie, Legionowski, Stanisławów Drugi'},{"value":52350,"label":'Mazowieckie, Legionowski, Stanisławów Pierwszy'},{"value":52218,"label":'Dolnośląskie, Jeleniogórski, Staniszów'},{"value":37859,"label":'Mazowieckie, Piaseczyński, Stara Iwiczna'},{"value":52398,"label":'Mazowieckie, Pruszkowski, Stara Wieś'},{"value":21611,"label":"Mazowieckie, Warszawski Zachodni, Stare Babice"},{"value":52552,"label":"Mazowieckie, Nowodworski, Stare Grochale"},{"value":15424,"label":'Łódzkie, Łódzki Wschodni, Starowa Góra'},{"value":22561,"label":"Pomorskie, Nowodworski, Stegna"},{"value":49040,"label":'Mazowieckie, Miński, Stojadła'},{"value":39808,"label":'Pomorskie, Gdański, Straszyn'},{"value":52593,"label":'Mazowieckie, Płocki, Stróżewko'},{"value":20144,"label":'Małopolskie, Wielicki, Strumiany'},{"value":52345,"label":"Mazowieckie, Warszawski Zachodni, Strzykuly"},{"value":21888,"label":'Pomorskie, Pucki, Suchy Dwór'},{"value":16085,"label":'Wielkopolskie, Poznański, Suchy Las'},{"value":52351,"label":'Małopolskie, Wielicki, Sułków'},{"value":16272,"label":"Pomorskie, Pucki, Swarzewo"},{"value":52419,"label":'Śląskie, Tarnogórski, Świerklaniec'},{"value":6424,"label":'Dolnośląskie, Wrocławski, Święta Katarzyna'},{"value":35566,"label":'Podkarpackie, Rzeszowski, Świlcza'},{"value":52383,"label":'Mazowieckie, Grodziski, Szczęsne'},{"value":859,"label":"Wielkopolskie, Szamotulski, Szczuczyn"},{"value":52336,"label":'Wielkopolskie, Poznański, Szczytniki'},{"value":39179,"label":"Mazowieckie, Warszawski Zachodni, Szeligi"},{"value":32934,"label":"Pomorskie, Wejherowski, Szemud"},{"value":52340,"label":'Dolnośląskie, Lubiński, Szklary Górne'},{"value":52518,"label":"Pomorskie, Kartuski, Sznurki"},{"value":15233,"label":'Wielkopolskie, Poznański, Szreniawa'},{"value":46812,"label":"Pomorskie, Nowodworski, Sztutowo"},{"value":52426,"label":'Wielkopolskie, Pilski, Szydłowo'},{"value":52234,"label":"Pomorskie, Kartuski, Szymbark"},{"value":52823,"label":'Dolnośląskie, Trzebnicki, Taczów Wielki'},{"value":20502,"label":'Wielkopolskie, Poznański, Tarnowo Podgórne'},{"value":39907,"label":"Pomorskie, Kartuski, Tokary"},{"value":50027,"label":'Warmińsko-Mazurskie, Olsztyński, Tomaszkowo'},{"value":26253,"label":"Podkarpackie, Rzeszowski, Trzebownisko"},{"value":15812,"label":"Pomorskie, Kartuski, Tuchom"},{"value":32745,"label":'Wielkopolskie, Poznański, Tulce'},{"value":52231,"label":"Lubelskie, Lubelski, Turka"},{"value":29424,"label":'Dolnośląskie, Wrocławski, Tyniec Mały'},{"value":41680,"label":'Zachodniopomorskie, Koszaliński, Unieście'},{"value":13355,"label":'Mazowieckie, Piaseczyński, Ustanów'},{"value":34561,"label":'Zachodniopomorskie, Kołobrzeski, Ustronie Morskie'},{"value":52371,"label":'Wielkopolskie, Wągrowiecki, Wągrowiec'},{"value":50953,"label":'Mazowieckie, Pruszkowski, Walendów'},{"value":46852,"label":"Mazowieckie, Otwocki, Warszawice"},{"value":37521,"label":'Śląskie, Pszczyński, Warszowice'},{"value":44745,"label":"Zachodniopomorskie, Policki, Warzymice"},{"value":27803,"label":'Małopolskie, Krakowski, Węgrzce'},{"value":7529,"label":"Podkarpackie, Leski, Wetlina"},{"value":2743,"label":'Mazowieckie, Otwocki, Wiązowna'},{"value":47618,"label":'Małopolskie, Krakowski, Więckowice'},{"value":52359,"label":"Mazowieckie, Legionowski, Wieliszew"},{"value":52377,"label":'Małopolskie, Krakowski, Wielka Wieś'},{"value":52536,"label":'Śląskie, Częstochowski, Wierzchowisko'},{"value":52200,"label":"Kujawsko-Pomorskie, Bydgoski, Wilcze"},{"value":29203,"label":'Dolnośląskie, Wrocławski, Wilczyce'},{"value":52239,"label":'Dolnośląskie, Średzki, Wilkszyn'},{"value":29287,"label":'Wielkopolskie, Poznański, Wiry'},{"value":52315,"label":'Łódzkie, Łódzki Wschodni, Wiśniowa Góra'},{"value":13603,"label":'Dolnośląskie, Trzebnicki, Wisznia Mała'},{"value":46502,"label":'Mazowieckie, Piaseczyński, Władysławów'},{"value":6035,"label":'Małopolskie, Krakowski, Włosań'},{"value":52385,"label":'Dolnośląskie, Wrocławski, Wojkowice'},{"value":52220,"label":'Dolnośląskie, Wrocławski, Wojnowice'},{"value":14748,"label":'Mazowieckie, Piaseczyński, Wola Mrokowska'},{"value":6924,"label":'Zachodniopomorskie, Policki, Wołczkowo'},{"value":23803,"label":"Mazowieckie, Warszawski Zachodni, Wolica"},{"value":51237,"label":"Mazowieckie, Pruszkowski, Wolica"},{"value":44464,"label":'Mazowieckie, Piaseczyński, Wólka Kosowska'},{"value":47782,"label":'Mazowieckie, Miński, Wólka Mińska'},{"value":52442,"label":'Podkarpackie, Rzeszowski, Wólka Podleśna'},{"value":52537,"label":'Zachodniopomorskie, Kamieński, Wrzosowo'},{"value":15665,"label":'Wielkopolskie, Poznański, Wysogotowo'},{"value":14088,"label":'Dolnośląskie, Wrocławski, Wysoka'},{"value":52664,"label":'Podkarpackie, Wyżne'},{"value":52331,"label":'Małopolskie, Wielicki, Zabawa'},{"value":29492,"label":'Mazowieckie, Grodziski, Żabia Wola'},{"value":31832,"label":'Małopolskie, Krakowski, Zabierzów'},{"value":13351,"label":'Lubuskie, Zielonogórski, Zabór'},{"value":33346,"label":'Mazowieckie, Warszawski Zachodni, Zaborówek'},{"value":52280,"label":'Małopolskie, Wielicki, Zakrzowiec'},{"value":27018,"label":'Wielkopolskie, Poznański, Zalasewo'},{"value":17216,"label":'Mazowieckie, Piaseczyński, Zalesie Górne'},{"value":17703,"label":'Mazowieckie, Piaseczyński, Zamienie'},{"value":20796,"label":'Mazowieckie, Miński, Zamienie'},{"value":25518,"label":'Mazowieckie, Otwocki, Żanęcin'},{"value":26661,"label":'Wielkopolskie, Średzki, Zaniemyśl'},{"value":46889,"label":'Podlaskie, Białostocki, Zaścianki'},{"value":52685,"label":'Wielkopolskie, Śremski, Zbrudzewo'},{"value":16196,"label":'Zachodniopomorskie, Gryfiński, Żelewo'},{"value":52281,"label":'Małopolskie, Krakowski, Żerkowice'},{"value":11887,"label":'Dolnośląskie, Wrocławski, Żerniki Małe'},{"value":52369,"label":'Mazowieckie, Piaseczyński, Zgorzała'},{"value":52327,"label":"Kujawsko-Pomorskie, Bydgoski, Zielonka"},{"value":2350,"label":'Mazowieckie, Zwoleński, Zielonka Nowa'},{"value":876,"label":'Małopolskie, Krakowski, Zielonki'},{"value":42318,"label":'Wielkopolskie, Kaliski, Złotniki'},{"value":52325,"label":'Podkarpackie, Mielecki, Złotniki'},{"value":22698,"label":'Wielkopolskie, Poznański, Złotniki'},{"value":40262,"label":'Podlaskie, Białostocki, Złotniki'},{"value":34935,"label":'Dolnośląskie, Lubański, Złotniki Lubańskie'},{"value":45748,"label":'Mazowieckie, Pruszkowski, Żółwin'},{"value":52186,"label":'Pomorskie, Gdańsk, Aniołki'},{"value":52488,"label":'Pomorskie, Gdynia, Babie Doły'},{"value":52133,"label":'Łódzkie, Łódź, Bałuty'},{"value":38720,"label":"Mazowieckie, Warszawa, Bemowo"},{"value":42663,"label":'Mazowieckie, Warszawa, Białołęka'},{"value":28904,"label":"Mazowieckie, Warszawa, Bielany"},{"value":52201,"label":'Małopolskie, Kraków, Bieńczyce'},{"value":52137,"label":'Małopolskie, Kraków, Bieżanów-Prokocim'},{"value":52188,"label":'Pomorskie, Gdańsk, Brętowo'},{"value":52127,"label":'Małopolskie, Kraków, Bronowice'},{"value":52202,"label":'Pomorskie, Gdańsk, Brzeźno'},{"value":52114,"label":'Pomorskie, Gdańsk, Chełm I Gdańsk Południe'},{"value":52169,"label":"Pomorskie, Gdynia, Chwarzno-Wiczlino"},{"value":52184,"label":"Pomorskie, Gdynia, Chylonia"},{"value":52187,"label":"Pomorskie, Gdynia, Cisowa"},{"value":52138,"label":'Małopolskie, Kraków, Czyżyny'},{"value":52162,"label":'Pomorskie, Gdynia, Dąbrowa'},{"value":52124,"label":'Małopolskie, Kraków, Dębniki'},{"value":52179,"label":"Pomorskie, Sopot, Dolny Sopot"},{"value":52489,"label":'Pomorskie, Gdynia, Działki Leśne'},{"value":52122,"label":'Dolnośląskie, Wrocław, Fabryczna'},{"value":52167,"label":'Łódzkie, Łódź, Górna'},{"value":52183,"label":'Pomorskie, Sopot, Górny Sopot'},{"value":52180,"label":'Pomorskie, Gdynia, Grabówek'},{"value":52118,"label":'Wielkopolskie, Poznań, Grunwald'},{"value":52175,"label":'Małopolskie, Kraków, Grzegórzki'},{"value":52205,"label":'Pomorskie, Gdańsk, Jasień'},{"value":52119,"label":'Wielkopolskie, Poznań, Jeżyce'},{"value":52490,"label":'Pomorskie, Gdynia, Kamienna Góra'},{"value":52190,"label":"Pomorskie, Sopot, Karlikowo"},{"value":52328,"label":"Pomorskie, Gdynia, Karwiny"},{"value":52148,"label":'Pomorskie, Gdańsk, Kokoszki'},{"value":52476,"label":'Pomorskie, Gdańsk, Krakowiec-Górki Zachodnie'},{"value":52123,"label":'Małopolskie, Kraków, Krowodrza'},{"value":52121,"label":'Dolnośląskie, Wrocław, Krzyki'},{"value":52150,"label":'Małopolskie, Kraków, Łagiewniki'},{"value":52491,"label":"Pomorskie, Gdynia, Leszczynki"},{"value":52477,"label":'Pomorskie, Gdańsk, Letnica'},{"value":52134,"label":'Pomorskie, Gdynia, Mały Kack'},{"value":52173,"label":'Pomorskie, Gdańsk, Matarnia'},{"value":52141,"label":'Małopolskie, Kraków, Mistrzejowice'},{"value":52478,"label":'Pomorskie, Gdańsk, Młyniska'},{"value":20284,"label":'Mazowieckie, Warszawa, Mokotów'},{"value":52126,"label":'Małopolskie, Kraków, Nowa Huta'},{"value":52128,"label":'Wielkopolskie, Poznań, Nowe Miasto'},{"value":52479,"label":'Pomorskie, Gdańsk, Nowy Port'},{"value":52163,"label":'Pomorskie, Gdynia, Obłuże'},{"value":38687,"label":"Mazowieckie, Warszawa, Ochota"},{"value":52135,"label":"Pomorskie, Gdynia, Oksywie"},{"value":52181,"label":'Pomorskie, Gdańsk, Oliwa'},{"value":52480,"label":'Pomorskie, Gdańsk, Olszynka'},{"value":52182,"label":'Pomorskie, Gdynia, Orłowo'},{"value":52155,"label":'Pomorskie, Gdańsk, Orunia-Św. Wojciech-Lipce'},{"value":52115,"label":'Pomorskie, Gdańsk, Osowa'},{"value":52131,"label":'Pomorskie, Gdańsk, Piecki-Migowo'},{"value":52142,"label":'Małopolskie, Kraków, Podgórze'},{"value":52139,"label":'Małopolskie, Kraków, Podgórze Duchackie'},{"value":52160,"label":'Pomorskie, Gdynia, Pogórze'},{"value":52164,"label":'Łódzkie, Łódź, Polesie'},{"value":52147,"label":'Zachodniopomorskie, Szczecin, Północ'},{"value":52112,"label":'Małopolskie, Kraków, Prądnik Biały'},{"value":52130,"label":'Małopolskie, Kraków, Prądnik Czerwony'},{"value":36957,"label":'Mazowieckie, Warszawa, Praga-Północ'},{"value":51145,"label":'Mazowieckie, Warszawa, Praga-Południe'},{"value":52140,"label":'Zachodniopomorskie, Szczecin, Prawobrzeże'},{"value":52481,"label":'Pomorskie, Gdańsk, Przeróbka'},{"value":52185,"label":'Pomorskie, Gdańsk, Przymorze Małe'},{"value":52177,"label":'Pomorskie, Gdańsk, Przymorze Wielkie'},{"value":52156,"label":'Dolnośląskie, Wrocław, Psie Pole'},{"value":52270,"label":"Pomorskie, Gdynia, Pustki Cisowskie-Demptowo"},{"value":52178,"label":'Pomorskie, Gdynia, Redłowo'},{"value":22883,"label":'Mazowieckie, Warszawa, Rembertów'},{"value":52482,"label":'Pomorskie, Gdańsk, Rudniki'},{"value":52192,"label":'Pomorskie, Gdańsk, Siedlce'},{"value":50052,"label":'Mazowieckie, Warszawa, Śródmieście'},{"value":52158,"label":'Zachodniopomorskie, Szczecin, Śródmieście'},{"value":52157,"label":'Pomorskie, Gdynia, Śródmieście'},{"value":52174,"label":'Łódzkie, Łódź, Śródmieście'},{"value":52113,"label":'Dolnośląskie, Wrocław, Śródmieście'},{"value":52166,"label":'Pomorskie, Gdańsk, Śródmieście'},{"value":52116,"label":'Wielkopolskie, Poznań, Stare Miasto'},{"value":52111,"label":'Małopolskie, Kraków, Stare Miasto'},{"value":52129,"label":'Dolnośląskie, Wrocław, Stare Miasto'},{"value":52303,"label":'Pomorskie, Gdańsk, Stogi'},{"value":52483,"label":'Pomorskie, Gdańsk, Strzyża'},{"value":52189,"label":'Pomorskie, Gdańsk, Suchanino'},{"value":52171,"label":'Małopolskie, Kraków, Swoszowice'},{"value":32953,"label":'Mazowieckie, Warszawa, Targówek'},{"value":52484,"label":'Pomorskie, Gdańsk, Ujeścisko-Łostowice'},{"value":24305,"label":"Mazowieckie, Warszawa, Ursus"},{"value":3766,"label":'Mazowieckie, Warszawa, Ursynów'},{"value":52485,"label":'Pomorskie, Gdańsk, VII Dwór'},{"value":30707,"label":"Mazowieckie, Warszawa, Wawer"},{"value":37544,"label":'Mazowieckie, Warszawa, Wesoła'},{"value":52149,"label":'Łódzkie, Łódź, Widzew'},{"value":52132,"label":"Pomorskie, Gdynia, Wielki Kack"},{"value":1320,"label":'Mazowieckie, Warszawa, Wilanów'},{"value":52159,"label":'Wielkopolskie, Poznań, Wilda'},{"value":52492,"label":'Pomorskie, Gdynia, Witomino Leśniczówka'},{"value":52151,"label":"Pomorskie, Gdynia, Witomino-Radiostacja"},{"value":3645,"label":'Mazowieckie, Warszawa, Włochy'},{"value":32638,"label":"Mazowieckie, Warszawa, Wola"},{"value":52170,"label":'Pomorskie, Gdańsk, Wrzeszcz'},{"value":52486,"label":'Pomorskie, Gdańsk, Wyspa Sobieszewska'},{"value":52120,"label":'Małopolskie, Kraków, Wzgórza Krzesławickie'},{"value":52487,"label":'Pomorskie, Gdańsk, Wzgórze Mickiewicza'},{"value":52493,"label":'Pomorskie, Gdynia, Wzgórze Św. Maksymiliana'},{"value":52168,"label":'Pomorskie, Gdańsk, Żabianka-Wejhera-Jelitkowo-Tysiąclecia'},{"value":52136,"label":'Zachodniopomorskie, Szczecin, Zachód'},{"value":52165,"label":'Pomorskie, Gdańsk, Zaspa-Młyniec'},{"value":52154,"label":'Pomorskie, Gdańsk, Zaspa-Rozstaje'},{"value":52143,"label":'Śląskie, Katowice, Zespół Dzielnic Północnych'},{"value":52144,"label":'Śląskie, Katowice, Zespół Dzielnic Południowych'},{"value":52161,"label":'Śląskie, Katowice, Zespół Dzielnic Śródmiejskich'},{"value":52475,"label":'Śląskie, Katowice, Zespół Dzielnic Wschodnich'},{"value":52152,"label":'Śląskie, Katowice, Zespół Dzielnic Zachodnich'},{"value":36021,"label":'Mazowieckie, Warszawa, Żoliborz'},{"value":52117,"label":'Małopolskie, Kraków, Zwierzyniec'},{"value":52737,"label":'Mazowieckie, Warszawa, Aleksandrów'},{"value":52733,"label":"Mazowieckie, Warszawa, Anin"},{"value":52703,"label":'Wielkopolskie, Poznań, Antoninek-Zieliniec-Kobylepole'},{"value":52568,"label":'Mazowieckie, Warszawa, Augustówka'},{"value":52762,"label":'Dolnośląskie, Wrocław, Bartoszowice'},{"value":52663,"label":"Mazowieckie, Warszawa, Bemowo Lotnisko"},{"value":52691,"label":'Mazowieckie, Warszawa, Białołęka Dworska'},{"value":52763,"label":'Dolnośląskie, Wrocław, Bieńkowice'},{"value":52764,"label":'Dolnośląskie, Wrocław, Bierdzany'},{"value":52765,"label":'Dolnośląskie, Wrocław, Biskupin'},{"value":52727,"label":'Mazowieckie, Warszawa, Błonia Wilanowskie'},{"value":52660,"label":"Mazowieckie, Warszawa, Boernerowo"},{"value":52766,"label":'Dolnośląskie, Wrocław, Borek'},{"value":52767,"label":'Dolnośląskie, Wrocław, Brochów'},{"value":52597,"label":'Mazowieckie, Warszawa, Bródno'},{"value":52598,"label":'Mazowieckie, Warszawa, Bródno Podgrodzie'},{"value":52683,"label":"Mazowieckie, Warszawa, Brzeziny"},{"value":52630,"label":'Wielkopolskie, Poznań, Chartowo'},{"value":52613,"label":'Mazowieckie, Warszawa, Chomiczówka'},{"value":52676,"label":'Mazowieckie, Warszawa, Choszczówka'},{"value":52669,"label":'Mazowieckie, Warszawa, Chrzanów'},{"value":52696,"label":"Mazowieckie, Warszawa, Czechowice"},{"value":52565,"label":'Mazowieckie, Warszawa, Czerniaków'},{"value":52653,"label":"Mazowieckie, Warszawa, Czyste"},{"value":52768,"label":'Dolnośląskie, Wrocław, Dąbie'},{"value":52586,"label":'Mazowieckie, Warszawa, Dąbrówka'},{"value":52675,"label":'Mazowieckie, Warszawa, Dąbrówka Szlachecka'},{"value":52601,"label":'Mazowieckie, Warszawa, Elsnerów'},{"value":52619,"label":'Wielkopolskie, Poznań, Fabianowo-Kotowo'},{"value":52736,"label":"Mazowieckie, Warszawa, Falenica"},{"value":52572,"label":"Mazowieckie, Warszawa, Filtry"},{"value":52665,"label":"Mazowieckie, Warszawa, Fort Bema"},{"value":52661,"label":"Mazowieckie, Warszawa, Fort Radiowo"},{"value":52771,"label":'Dolnośląskie, Wrocław, Gądów Mały'},{"value":52769,"label":'Dolnośląskie, Wrocław, Gaj'},{"value":52770,"label":'Dolnośląskie, Wrocław, Gajowice'},{"value":52622,"label":'Wielkopolskie, Poznań, Główna'},{"value":52686,"label":'Wielkopolskie, Poznań, Głuszyna'},{"value":52714,"label":'Mazowieckie, Warszawa, Gocław'},{"value":52746,"label":'Mazowieckie, Warszawa, Gocławek'},{"value":52693,"label":'Mazowieckie, Warszawa, Gołąbki'},{"value":52666,"label":'Mazowieckie, Warszawa, Górce'},{"value":52631,"label":'Wielkopolskie, Poznań, Górczyn'},{"value":52583,"label":'Mazowieckie, Warszawa, Grabów'},{"value":52745,"label":'Mazowieckie, Warszawa, Grochów'},{"value":52692,"label":"Mazowieckie, Warszawa, Grodzisk"},{"value":52750,"label":'Mazowieckie, Warszawa, Groszówka'},{"value":52662,"label":"Mazowieckie, Warszawa, Groty"},{"value":52637,"label":'Wielkopolskie, Poznań, Grunwald Północ'},{"value":52639,"label":'Wielkopolskie, Poznań, Grunwald Południe'},{"value":52678,"label":'Mazowieckie, Warszawa, Henryków'},{"value":52772,"label":'Dolnośląskie, Wrocław, Huby'},{"value":52609,"label":"Mazowieckie, Warszawa, Huta"},{"value":52773,"label":'Dolnośląskie, Wrocław, Jagodno'},{"value":52706,"label":'Wielkopolskie, Poznań, Jana III Sobieskiego i Marysieńki'},{"value":52774,"label":'Dolnośląskie, Wrocław, Jarnołtów'},{"value":52667,"label":'Mazowieckie, Warszawa, Jelonki Północne'},{"value":52668,"label":'Mazowieckie, Warszawa, Jelonki Południowe'},{"value":52775,"label":'Dolnośląskie, Wrocław, Jerzmanowo'},{"value":52584,"label":'Mazowieckie, Warszawa, Jeziorki Północne'},{"value":52585,"label":'Mazowieckie, Warszawa, Jeziorki Południowe'},{"value":52629,"label":'Wielkopolskie, Poznań, Junikowo'},{"value":52594,"label":"Mazowieckie, Warszawa, Kabaty"},{"value":52713,"label":"Mazowieckie, Warszawa, Kamionek"},{"value":52776,"label":'Dolnośląskie, Wrocław, Karłowice'},{"value":52577,"label":'Mazowieckie, Warszawa, Kawęczyn-Wygoda'},{"value":52730,"label":'Mazowieckie, Warszawa, Kępa Zawadowska'},{"value":52604,"label":'Wielkopolskie, Poznań, Kiekrz'},{"value":52777,"label":'Dolnośląskie, Wrocław, Klecina'},{"value":52778,"label":'Dolnośląskie, Wrocław, Kleczków'},{"value":52779,"label":'Dolnośląskie, Wrocław, Kłokoczyce'},{"value":52684,"label":'Mazowieckie, Warszawa, Kobiałka'},{"value":52650,"label":'Mazowieckie, Warszawa, Koło'},{"value":52780,"label":'Dolnośląskie, Wrocław, Kowale'},{"value":52781,"label":'Dolnośląskie, Wrocław, Kozanów'},{"value":52709,"label":'Wielkopolskie, Poznań, Krzesiny-Pokrzywno-Garaszewo'},{"value":52610,"label":'Wielkopolskie, Poznań, Krzyżowniki-Smochowice'},{"value":52560,"label":'Mazowieckie, Warszawa, Ksawerów'},{"value":52783,"label":'Dolnośląskie, Wrocław, Księże Małe'},{"value":52784,"label":'Dolnośląskie, Wrocław, Księże Wielkie'},{"value":52785,"label":'Dolnośląskie, Wrocław, Kuźniki'},{"value":52623,"label":'Wielkopolskie, Poznań, Kwiatowe'},{"value":52786,"label":'Dolnośląskie, Wrocław, Lamowice Stare'},{"value":52740,"label":"Mazowieckie, Warszawa, Las"},{"value":52614,"label":'Mazowieckie, Warszawa, Las Bielański'},{"value":52595,"label":"Mazowieckie, Warszawa, Las Kabacki"},{"value":52615,"label":'Wielkopolskie, Poznań, Ławica'},{"value":52640,"label":'Wielkopolskie, Poznań, Łazarz'},{"value":52787,"label":'Dolnośląskie, Wrocław, Lesica'},{"value":52788,"label":'Dolnośląskie, Wrocław, Leśnica'},{"value":52790,"label":'Dolnośląskie, Wrocław, Lipa Piotrowska'},{"value":52658,"label":"Mazowieckie, Warszawa, Lotnisko"},{"value":52791,"label":'Dolnośląskie, Wrocław, Marszowice'},{"value":52634,"label":"Mazowieckie, Warszawa, Marymont Kaskada"},{"value":52700,"label":"Mazowieckie, Warszawa, Marymont-Potok"},{"value":52635,"label":"Mazowieckie, Warszawa, Marymont Ruda"},{"value":52743,"label":"Mazowieckie, Warszawa, Marysin Wawerski"},{"value":52792,"label":'Dolnośląskie, Wrocław, Maślice'},{"value":52732,"label":"Mazowieckie, Warszawa, Miedzeszyn"},{"value":52734,"label":'Mazowieckie, Warszawa, Międzylesie'},{"value":52657,"label":'Mazowieckie, Warszawa, Mirów'},{"value":52605,"label":'Mazowieckie, Warszawa, Młociny'},{"value":52654,"label":'Mazowieckie, Warszawa, Młynów'},{"value":52793,"label":'Dolnośląskie, Wrocław, Mokra'},{"value":52702,"label":'Wielkopolskie, Poznań, Morasko-Radojewo'},{"value":52794,"label":'Dolnośląskie, Wrocław, Muchobór Mały'},{"value":52642,"label":'Mazowieckie, Warszawa, Muranów'},{"value":52795,"label":'Dolnośląskie, Wrocław, Nadodrze'},{"value":52739,"label":'Mazowieckie, Warszawa, Nadwiśle'},{"value":52632,"label":'Wielkopolskie, Poznań, Naramowice'},{"value":52592,"label":"Mazowieckie, Warszawa, Natolin"},{"value":52695,"label":'Mazowieckie, Warszawa, Niedźwiadek'},{"value":52574,"label":"Mazowieckie, Warszawa, Nowa Praga"},{"value":52644,"label":"Mazowieckie, Warszawa, Nowe Miasto"},{"value":52688,"label":'Wielkopolskie, Poznań, Nowe Winogrady Północ'},{"value":52687,"label":'Wielkopolskie, Poznań, Nowe Winogrady Południe'},{"value":52689,"label":'Wielkopolskie, Poznań, Nowe Winogrady Wschód'},{"value":52716,"label":'Mazowieckie, Warszawa, Nowe Włochy'},{"value":52670,"label":"Mazowieckie, Warszawa, Nowodwory"},{"value":52656,"label":"Mazowieckie, Warszawa, Nowolipki"},{"value":52796,"label":'Dolnośląskie, Wrocław, Nowy Dwór'},{"value":52578,"label":'Mazowieckie, Warszawa, Nowy Rembertów'},{"value":52742,"label":"Mazowieckie, Warszawa, Nowy Wawer"},{"value":52652,"label":"Mazowieckie, Warszawa, Odolany"},{"value":52626,"label":'Wielkopolskie, Poznań, Ogrody'},{"value":52722,"label":'Mazowieckie, Warszawa, Okęcie'},{"value":52797,"label":'Dolnośląskie, Wrocław, Ołbin'},{"value":52744,"label":"Mazowieckie, Warszawa, Olszynka Grochowska"},{"value":52798,"label":'Dolnośląskie, Wrocław, Ołtaszyn'},{"value":52720,"label":"Mazowieckie, Warszawa, Opacz Wielka"},{"value":52799,"label":'Dolnośląskie, Wrocław, Opatowice'},{"value":52800,"label":'Dolnośląskie, Wrocław, Oporów'},{"value":52672,"label":'Wielkopolskie, Poznań, Osiedle Jeżyce'},{"value":52782,"label":'Dolnośląskie, Wrocław, Osiedle Krzyki'},{"value":52815,"label":'Dolnośląskie, Wrocław, Osiedle Psie Pole'},{"value":52671,"label":'Wielkopolskie, Poznań, Osiedle Stare Miasto'},{"value":52674,"label":'Wielkopolskie, Poznań, Osiedle Wilda'},{"value":52801,"label":'Dolnośląskie, Wrocław, Osobowice'},{"value":52753,"label":'Wielkopolskie, Poznań, Ostrów Tumski-Śródka-Zawady-Komandoria'},{"value":52723,"label":"Mazowieckie, Warszawa, Paluch"},{"value":52802,"label":'Dolnośląskie, Wrocław, Partynice'},{"value":52803,"label":'Dolnośląskie, Wrocław, Pawłowice'},{"value":52573,"label":"Mazowieckie, Warszawa, Pelcowizna"},{"value":52628,"label":"Mazowieckie, Warszawa, Piaski"},{"value":52618,"label":'Wielkopolskie, Poznań, Piątkowo'},{"value":52804,"label":'Dolnośląskie, Wrocław, Pilczyce'},{"value":52807,"label":'Dolnośląskie, Wrocław, Plac Grunwaldzki'},{"value":52607,"label":'Mazowieckie, Warszawa, Placówka'},{"value":52752,"label":"Mazowieckie, Warszawa, Plac Wojska Polskiego"},{"value":52616,"label":'Wielkopolskie, Poznań, Podolany'},{"value":52808,"label":'Dolnośląskie, Wrocław, Polanka'},{"value":52809,"label":'Dolnośląskie, Wrocław, Polanowice'},{"value":52810,"label":'Dolnośląskie, Wrocław, Południe'},{"value":52811,"label":'Dolnośląskie, Wrocław, Popowice'},{"value":52812,"label":'Dolnośląskie, Wrocław, Poświętne'},{"value":52655,"label":'Mazowieckie, Warszawa, Powązki'},{"value":52645,"label":'Mazowieckie, Warszawa, Powiśle'},{"value":52731,"label":"Mazowieckie, Warszawa, Powsin"},{"value":52728,"label":"Mazowieckie, Warszawa, Powsinek"},{"value":52813,"label":'Dolnośląskie, Wrocław, Pracze Odrzańskie'},{"value":52814,"label":'Dolnośląskie, Wrocław, Przedmieście Oławskie'},{"value":52587,"label":"Mazowieckie, Warszawa, Pyry"},{"value":52608,"label":"Mazowieckie, Warszawa, Radiowo"},{"value":52735,"label":'Mazowieckie, Warszawa, Radość'},{"value":52719,"label":'Mazowieckie, Warszawa, Raków'},{"value":52569,"label":"Mazowieckie, Warszawa, Rakowiec"},{"value":52816,"label":'Dolnośląskie, Wrocław, Rakowiec'},{"value":52620,"label":'Wielkopolskie, Poznań, Rataje'},{"value":52817,"label":'Dolnośląskie, Wrocław, Ratyń'},{"value":52824,"label":'Dolnośląskie, Wrocław, Rędzin'},{"value":52818,"label":'Dolnośląskie, Wrocław, Różanka'},{"value":52741,"label":"Mazowieckie, Warszawa, Sadul"},{"value":52566,"label":"Mazowieckie, Warszawa, Sadyba"},{"value":52698,"label":'Mazowieckie, Warszawa, Sady Żoliborskie'},{"value":52718,"label":"Mazowieckie, Warszawa, Salomea"},{"value":52715,"label":'Mazowieckie, Warszawa, Saska Kępa'},{"value":52819,"label":'Dolnośląskie, Wrocław, Sępolno'},{"value":52567,"label":"Mazowieckie, Warszawa, Siekierki"},{"value":52563,"label":"Mazowieckie, Warszawa, Sielce"},{"value":52596,"label":'Mazowieckie, Warszawa, Skarpa Powsińska'},{"value":52697,"label":"Mazowieckie, Warszawa, Skorosze"},{"value":52633,"label":'Mazowieckie, Warszawa, Słodowiec'},{"value":52559,"label":'Mazowieckie, Warszawa, Służew'},{"value":52558,"label":'Mazowieckie, Warszawa, Służewiec'},{"value":52624,"label":'Wielkopolskie, Poznań, Sołacz'},{"value":52641,"label":"Mazowieckie, Warszawa, Solec"},{"value":52825,"label":'Dolnośląskie, Wrocław, Sołtysowice'},{"value":52648,"label":'Mazowieckie, Warszawa, Śródmieście Północne'},{"value":52649,"label":'Mazowieckie, Warszawa, Śródmieście Południowe'},{"value":52826,"label":'Dolnośląskie, Wrocław, Stabłowice'},{"value":52751,"label":'Mazowieckie, Warszawa, Stara Miłosna'},{"value":52571,"label":"Mazowieckie, Warszawa, Stara Ochota"},{"value":52575,"label":"Mazowieckie, Warszawa, Stara Praga"},{"value":52627,"label":"Mazowieckie, Warszawa, Stare Bielany"},{"value":52643,"label":"Mazowieckie, Warszawa, Stare Miasto"},{"value":52673,"label":'Wielkopolskie, Poznań, Stare Winogrady'},{"value":52717,"label":'Mazowieckie, Warszawa, Stare Włochy'},{"value":52754,"label":'Wielkopolskie, Poznań, Starołęka-Minikowo-Marlewo'},{"value":52638,"label":'Wielkopolskie, Poznań, Stary Grunwald'},{"value":52580,"label":"Mazowieckie, Warszawa, Stary Imielin"},{"value":52562,"label":'Mazowieckie, Warszawa, Stary Mokotów'},{"value":52579,"label":'Mazowieckie, Warszawa, Stary Rembertów'},{"value":52588,"label":'Mazowieckie, Warszawa, Stary Służew'},{"value":52699,"label":'Mazowieckie, Warszawa, Stary Żoliborz'},{"value":52564,"label":"Mazowieckie, Warszawa, Stegny"},{"value":52827,"label":'Dolnośląskie, Wrocław, Strachocin'},{"value":52617,"label":'Wielkopolskie, Poznań, Strzeszyn'},{"value":52646,"label":'Wielkopolskie, Poznań, Świerczewo'},{"value":52831,"label":'Dolnośląskie, Wrocław, Świniary'},{"value":52679,"label":"Mazowieckie, Warszawa, Szamocin"},{"value":52694,"label":"Mazowieckie, Warszawa, Szamoty"},{"value":52755,"label":'Wielkopolskie, Poznań, Szczepankowo-Spławie-Krzesinki'},{"value":52830,"label":'Dolnośląskie, Wrocław, Szczepin'},{"value":52570,"label":'Mazowieckie, Warszawa, Szczęśliwice'},{"value":52576,"label":"Mazowieckie, Warszawa, Szmulowizna"},{"value":52677,"label":"Mazowieckie, Warszawa, Tarchomin"},{"value":52602,"label":'Mazowieckie, Warszawa, Targówek Fabryczny'},{"value":52600,"label":'Mazowieckie, Warszawa, Targówek Mieszkaniowy'},{"value":52832,"label":'Dolnośląskie, Wrocław, Tarnogaj'},{"value":52636,"label":'Mazowieckie, Warszawa, Ujazdów'},{"value":52651,"label":'Mazowieckie, Warszawa, Ulrychów'},{"value":52621,"label":'Wielkopolskie, Poznań, Umultowo'},{"value":52591,"label":'Mazowieckie, Warszawa, Ursynów Centrum'},{"value":52581,"label":'Mazowieckie, Warszawa, Ursynów Północny'},{"value":52603,"label":"Mazowieckie, Warszawa, Utrata"},{"value":52761,"label":'Wielkopolskie, Poznań, Warszawskie-Pomet-Maltańskie'},{"value":52612,"label":"Mazowieckie, Warszawa, Wawrzyszew"},{"value":52749,"label":'Mazowieckie, Warszawa, Wesoła-Centrum'},{"value":52833,"label":'Dolnośląskie, Wrocław, Widawa'},{"value":52561,"label":"Mazowieckie, Warszawa, Wierzbno"},{"value":52726,"label":'Mazowieckie, Warszawa, Wilanów Królewski'},{"value":52725,"label":'Mazowieckie, Warszawa, Wilanów Niski'},{"value":52724,"label":'Mazowieckie, Warszawa, Wilanów Wysoki'},{"value":52680,"label":'Wielkopolskie, Poznań, Winiary'},{"value":52625,"label":'Wielkopolskie, Poznań, Wola'},{"value":52748,"label":"Mazowieckie, Warszawa, Wola Grzybowska"},{"value":52606,"label":'Mazowieckie, Warszawa, Wólka Węglowa'},{"value":52611,"label":"Mazowieckie, Warszawa, Wrzeciono"},{"value":52582,"label":'Mazowieckie, Warszawa, Wyczółki'},{"value":52557,"label":'Mazowieckie, Warszawa, Wyględów'},{"value":52599,"label":"Mazowieckie, Warszawa, Zacisze"},{"value":52721,"label":'Mazowieckie, Warszawa, Załuski'},{"value":52729,"label":"Mazowieckie, Warszawa, Zawady"},{"value":52659,"label":'Wielkopolskie, Poznań, Żegrze'},{"value":52682,"label":'Mazowieckie, Warszawa, Żerań'},{"value":52738,"label":'Mazowieckie, Warszawa, Zerzeń'},{"value":52747,"label":"Mazowieckie, Warszawa, Zielona-Grzybowa"},{"value":52681,"label":'Wielkopolskie, Poznań, Zielony Dębiec'}];var Container=_react2['default'].createClass({displayName:'Container',getInitialState:function getInitialState(){return options[0];},updateValue:function updateValue(value){this.setState({value:value});},render:function render(){return _react2['default'].createElement(_reactSelect2['default'],{multi:true,searchable:false,options:options,onChange:this.updateValue,value:this.state.value});}});_reactDom2['default'].render(_react2['default'].createElement(Container,null),document.getElementById('example'));

},{"./components/Contributors":2,"./components/CustomComponents":3,"./components/CustomRender":4,"./components/Multiselect":5,"./components/NumericSelect":6,"./components/States":7,"react":undefined,"react-dom":undefined,"react-select":undefined}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var CONTRIBUTORS = require('../data/contributors');
var MAX_CONTRIBUTORS = 6;
var ASYNC_DELAY = 500;

var Contributors = _react2['default'].createClass({
	displayName: 'Contributors',
	propTypes: {
		label: _react2['default'].PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {
			multi: true,
			value: [CONTRIBUTORS[0]]
		};
	},
	onChange: function onChange(value) {
		this.setState({
			value: value
		});
	},
	switchToMulti: function switchToMulti() {
		this.setState({
			multi: true,
			value: [this.state.value]
		});
	},
	switchToSingle: function switchToSingle() {
		this.setState({
			multi: false,
			value: this.state.value[0]
		});
	},
	getContributors: function getContributors(input, callback) {
		input = input.toLowerCase();
		var options = CONTRIBUTORS.filter(function (i) {
			return i.github.substr(0, input.length) === input;
		});
		var data = {
			options: options.slice(0, MAX_CONTRIBUTORS),
			complete: options.length <= MAX_CONTRIBUTORS
		};
		setTimeout(function () {
			callback(null, data);
		}, ASYNC_DELAY);
	},
	gotoContributor: function gotoContributor(value, event) {
		window.open('https://github.com/' + value.github);
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'section' },
			_react2['default'].createElement(
				'h3',
				{ className: 'section-heading' },
				this.props.label
			),
			_react2['default'].createElement(_reactSelect2['default'].Async, { multi: this.state.multi, value: this.state.value, onChange: this.onChange, onValueClick: this.gotoContributor, valueKey: 'github', labelKey: 'name', loadOptions: this.getContributors }),
			_react2['default'].createElement(
				'div',
				{ className: 'checkbox-list' },
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'radio', className: 'checkbox-control', checked: this.state.multi, onChange: this.switchToMulti }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Multiselect'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'radio', className: 'checkbox-control', checked: !this.state.multi, onChange: this.switchToSingle }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Single Value'
					)
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'hint' },
				'This example implements custom label and value properties, async options and opens the github profiles in a new window when values are clicked'
			)
		);
	}
});

module.exports = Contributors;

},{"../data/contributors":8,"react":undefined,"react-select":undefined}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactGravatar = require('react-gravatar');

var _reactGravatar2 = _interopRequireDefault(_reactGravatar);

var USERS = require('../data/users');
var GRAVATAR_SIZE = 15;

var GravatarOption = _react2['default'].createClass({
	displayName: 'GravatarOption',

	propTypes: {
		children: _react2['default'].PropTypes.node,
		className: _react2['default'].PropTypes.string,
		isDisabled: _react2['default'].PropTypes.bool,
		isFocused: _react2['default'].PropTypes.bool,
		isSelected: _react2['default'].PropTypes.bool,
		onFocus: _react2['default'].PropTypes.func,
		onSelect: _react2['default'].PropTypes.func,
		onUnfocus: _react2['default'].PropTypes.func,
		option: _react2['default'].PropTypes.object.isRequired
	},
	handleMouseDown: function handleMouseDown(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	},
	handleMouseEnter: function handleMouseEnter(event) {
		this.props.onFocus(this.props.option, event);
	},
	handleMouseMove: function handleMouseMove(event) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, event);
	},
	handleMouseLeave: function handleMouseLeave(event) {
		this.props.onUnfocus(this.props.option, event);
	},
	render: function render() {
		var gravatarStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle'
		};
		return _react2['default'].createElement(
			'div',
			{ className: this.props.className,
				onMouseDown: this.handleMouseDown,
				onMouseEnter: this.handleMouseEnter,
				onMouseMove: this.handleMouseMove,
				onMouseLeave: this.handleMouseLeave,
				title: this.props.option.title },
			_react2['default'].createElement(_reactGravatar2['default'], { email: this.props.option.email, size: GRAVATAR_SIZE, style: gravatarStyle }),
			this.props.children
		);
	}
});

var GravatarValue = _react2['default'].createClass({
	displayName: 'GravatarValue',

	propTypes: {
		children: _react2['default'].PropTypes.node,
		placeholder: _react2['default'].PropTypes.string,
		value: _react2['default'].PropTypes.object
	},
	render: function render() {
		var gravatarStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle'
		};
		return _react2['default'].createElement(
			'div',
			{ className: 'Select-value', title: this.props.value.title },
			_react2['default'].createElement(
				'span',
				{ className: 'Select-value-label' },
				_react2['default'].createElement(_reactGravatar2['default'], { email: this.props.value.email, size: GRAVATAR_SIZE, style: gravatarStyle }),
				this.props.children
			)
		);
	}
});

var UsersField = _react2['default'].createClass({
	displayName: 'UsersField',

	propTypes: {
		hint: _react2['default'].PropTypes.string,
		label: _react2['default'].PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {};
	},
	setValue: function setValue(value) {
		this.setState({ value: value });
	},
	render: function render() {
		var placeholder = _react2['default'].createElement(
			'span',
			null,
			'☺ Select User'
		);

		return _react2['default'].createElement(
			'div',
			{ className: 'section' },
			_react2['default'].createElement(
				'h3',
				{ className: 'section-heading' },
				this.props.label
			),
			_react2['default'].createElement(_reactSelect2['default'], {
				onChange: this.setValue,
				optionComponent: GravatarOption,
				options: USERS,
				placeholder: placeholder,
				value: this.state.value,
				valueComponent: GravatarValue
			}),
			_react2['default'].createElement(
				'div',
				{ className: 'hint' },
				'This example implements custom Option and Value components to render a Gravatar image for each user based on their email. It also demonstrates rendering HTML elements as the placeholder.'
			)
		);
	}
});

module.exports = UsersField;

},{"../data/users":10,"react":undefined,"react-gravatar":19,"react-select":undefined}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var DisabledUpsellOptions = _react2['default'].createClass({
	displayName: 'DisabledUpsellOptions',
	propTypes: {
		label: _react2['default'].PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {};
	},
	setValue: function setValue(value) {
		this.setState({ value: value });
		console.log('Support level selected:', value.label);
	},
	renderLink: function renderLink() {
		return _react2['default'].createElement(
			'a',
			{ style: { marginLeft: 5 }, href: '/upgrade', target: '_blank' },
			'Upgrade here!'
		);
	},
	renderOption: function renderOption(option) {
		return _react2['default'].createElement(
			'span',
			{ style: { color: option.color } },
			option.label,
			' ',
			option.link
		);
	},
	renderValue: function renderValue(option) {
		return _react2['default'].createElement(
			'strong',
			{ style: { color: option.color } },
			option.label
		);
	},
	render: function render() {
		var options = [{ label: 'Basic customer support', value: 'basic', color: '#E31864' }, { label: 'Premium customer support', value: 'premium', color: '#6216A3' }, { label: 'Pro customer support', value: 'pro', disabled: true, link: this.renderLink() }];
		return _react2['default'].createElement(
			'div',
			{ className: 'section' },
			_react2['default'].createElement(
				'h3',
				{ className: 'section-heading' },
				this.props.label
			),
			_react2['default'].createElement(_reactSelect2['default'], {
				placeholder: 'Select your support level',
				options: options,
				optionRenderer: this.renderOption,
				onChange: this.setValue,
				value: this.state.value,
				valueRenderer: this.renderValue
			}),
			_react2['default'].createElement(
				'div',
				{ className: 'hint' },
				'This demonstates custom render methods and links in disabled options'
			)
		);
	}
});
module.exports = DisabledUpsellOptions;

},{"react":undefined,"react-select":undefined}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var FLAVOURS = [{ label: 'Chocolate', value: 'chocolate' }, { label: 'Vanilla', value: 'vanilla' }, { label: 'Strawberry', value: 'strawberry' }, { label: 'Caramel', value: 'caramel' }, { label: 'Cookies and Cream', value: 'cookiescream' }, { label: 'Peppermint', value: 'peppermint' }];

var WHY_WOULD_YOU = [{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true }].concat(FLAVOURS.slice(1));

var MultiSelectField = _react2['default'].createClass({
	displayName: 'MultiSelectField',
	propTypes: {
		label: _react2['default'].PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {
			disabled: false,
			crazy: false,
			options: FLAVOURS,
			value: []
		};
	},
	handleSelectChange: function handleSelectChange(value) {
		console.log('You\'ve selected:', value);
		this.setState({ value: value });
	},
	toggleDisabled: function toggleDisabled(e) {
		this.setState({ disabled: e.target.checked });
	},
	toggleChocolate: function toggleChocolate(e) {
		var crazy = e.target.checked;
		this.setState({
			crazy: crazy,
			options: crazy ? WHY_WOULD_YOU : FLAVOURS
		});
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'section' },
			_react2['default'].createElement(
				'h3',
				{ className: 'section-heading' },
				this.props.label
			),
			_react2['default'].createElement(_reactSelect2['default'], { multi: true, simpleValue: true, disabled: this.state.disabled, value: this.state.value, placeholder: 'Select your favourite(s)', options: this.state.options, onChange: this.handleSelectChange }),
			_react2['default'].createElement(
				'div',
				{ className: 'checkbox-list' },
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', checked: this.state.disabled, onChange: this.toggleDisabled }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Disable the control'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', checked: this.state.crazy, onChange: this.toggleChocolate }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'I don\'t like Chocolate (disabled the option)'
					)
				)
			)
		);
	}
});

module.exports = MultiSelectField;

},{"react":undefined,"react-select":undefined}],6:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var ValuesAsNumbersField = _react2['default'].createClass({
	displayName: 'ValuesAsNumbersField',
	propTypes: {
		label: _react2['default'].PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {
			options: [{ value: 10, label: 'Ten' }, { value: 11, label: 'Eleven' }, { value: 12, label: 'Twelve' }, { value: 23, label: 'Twenty-three' }, { value: 24, label: 'Twenty-four' }],
			matchPos: 'any',
			matchValue: true,
			matchLabel: true,
			value: null,
			multi: false
		};
	},
	onChangeMatchStart: function onChangeMatchStart(event) {
		this.setState({
			matchPos: event.target.checked ? 'start' : 'any'
		});
	},
	onChangeMatchValue: function onChangeMatchValue(event) {
		this.setState({
			matchValue: event.target.checked
		});
	},
	onChangeMatchLabel: function onChangeMatchLabel(event) {
		this.setState({
			matchLabel: event.target.checked
		});
	},
	onChange: function onChange(value) {
		this.setState({ value: value });
		console.log('Numeric Select value changed to', value);
	},
	onChangeMulti: function onChangeMulti(event) {
		this.setState({
			multi: event.target.checked
		});
	},
	render: function render() {
		var matchProp = 'any';
		if (this.state.matchLabel && !this.state.matchValue) {
			matchProp = 'label';
		}
		if (!this.state.matchLabel && this.state.matchValue) {
			matchProp = 'value';
		}
		return _react2['default'].createElement(
			'div',
			{ className: 'section' },
			_react2['default'].createElement(
				'h3',
				{ className: 'section-heading' },
				this.props.label
			),
			_react2['default'].createElement(_reactSelect2['default'], {
				matchPos: this.state.matchPos,
				matchProp: matchProp,
				multi: this.state.multi,
				onChange: this.onChange,
				options: this.state.options,
				simpleValue: true,
				value: this.state.value
			}),
			_react2['default'].createElement(
				'div',
				{ className: 'checkbox-list' },
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', checked: this.state.multi, onChange: this.onChangeMulti }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Multi-Select'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', checked: this.state.matchValue, onChange: this.onChangeMatchValue }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Match value only'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', checked: this.state.matchLabel, onChange: this.onChangeMatchLabel }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Match label only'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', checked: this.state.matchPos === 'start', onChange: this.onChangeMatchStart }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Only include matches from the start of the string'
					)
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'hint' },
				'This example uses simple numeric values'
			)
		);
	}
});

module.exports = ValuesAsNumbersField;

},{"react":undefined,"react-select":undefined}],7:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var STATES = require('../data/states');

var StatesField = _react2['default'].createClass({
	displayName: 'StatesField',
	propTypes: {
		label: _react2['default'].PropTypes.string,
		searchable: _react2['default'].PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			label: 'States:',
			searchable: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			country: 'AU',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: 'new-south-wales',
			clearable: true
		};
	},
	switchCountry: function switchCountry(e) {
		var newCountry = e.target.value;
		console.log('Country changed to ' + newCountry);
		this.setState({
			country: newCountry,
			selectValue: null
		});
	},
	updateValue: function updateValue(newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue
		});
	},
	focusStateSelect: function focusStateSelect() {
		this.refs.stateSelect.focus();
	},
	toggleCheckbox: function toggleCheckbox(e) {
		var newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	},
	render: function render() {
		var options = STATES[this.state.country];
		return _react2['default'].createElement(
			'div',
			{ className: 'section' },
			_react2['default'].createElement(
				'h3',
				{ className: 'section-heading' },
				this.props.label
			),
			_react2['default'].createElement(_reactSelect2['default'], { ref: 'stateSelect', autofocus: true, options: options, simpleValue: true, clearable: this.state.clearable, name: 'selected-state', disabled: this.state.disabled, value: this.state.selectValue, onChange: this.updateValue, searchable: this.state.searchable }),
			_react2['default'].createElement(
				'div',
				{ style: { marginTop: 14 } },
				_react2['default'].createElement(
					'button',
					{ type: 'button', onClick: this.focusStateSelect },
					'Focus Select'
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox', style: { marginLeft: 10 } },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', name: 'searchable', checked: this.state.searchable, onChange: this.toggleCheckbox }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Searchable'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox', style: { marginLeft: 10 } },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', name: 'disabled', checked: this.state.disabled, onChange: this.toggleCheckbox }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Disabled'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox', style: { marginLeft: 10 } },
					_react2['default'].createElement('input', { type: 'checkbox', className: 'checkbox-control', name: 'clearable', checked: this.state.clearable, onChange: this.toggleCheckbox }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Clearable'
					)
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'checkbox-list' },
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'radio', className: 'checkbox-control', checked: this.state.country === 'AU', value: 'AU', onChange: this.switchCountry }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'Australia'
					)
				),
				_react2['default'].createElement(
					'label',
					{ className: 'checkbox' },
					_react2['default'].createElement('input', { type: 'radio', className: 'checkbox-control', checked: this.state.country === 'US', value: 'US', onChange: this.switchCountry }),
					_react2['default'].createElement(
						'span',
						{ className: 'checkbox-label' },
						'United States'
					)
				)
			)
		);
	}
});

module.exports = StatesField;

},{"../data/states":9,"react":undefined,"react-select":undefined}],8:[function(require,module,exports){
'use strict';

module.exports = [{ github: 'jedwatson', name: 'Jed Watson' }, { github: 'bruderstein', name: 'Dave Brotherstone' }, { github: 'jossmac', name: 'Joss Mackison' }, { github: 'jniechcial', name: 'Jakub Niechciał' }, { github: 'craigdallimore', name: 'Craig Dallimore' }, { github: 'julen', name: 'Julen Ruiz Aizpuru' }, { github: 'dcousens', name: 'Daniel Cousens' }, { github: 'jgautsch', name: 'Jon Gautsch' }, { github: 'dmitry-smirnov', name: 'Dmitry Smirnov' }];

},{}],9:[function(require,module,exports){
'use strict';

exports.AU = [{ value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' }, { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' }, { value: 'victoria', label: 'Victoria', className: 'State-Vic' }, { value: 'queensland', label: 'Queensland', className: 'State-Qld' }, { value: 'western-australia', label: 'Western Australia', className: 'State-WA' }, { value: 'south-australia', label: 'South Australia', className: 'State-SA' }, { value: 'tasmania', label: 'Tasmania', className: 'State-Tas' }, { value: 'northern-territory', label: 'Northern Territory', className: 'State-NT' }];

exports.US = [{ value: 'AL', label: 'Alabama', disabled: true }, { value: 'AK', label: 'Alaska' }, { value: 'AS', label: 'American Samoa' }, { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' }, { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' }, { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' }, { value: 'DC', label: 'District Of Columbia' }, { value: 'FM', label: 'Federated States Of Micronesia' }, { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' }, { value: 'GU', label: 'Guam' }, { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' }, { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' }, { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' }, { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' }, { value: 'ME', label: 'Maine' }, { value: 'MH', label: 'Marshall Islands' }, { value: 'MD', label: 'Maryland' }, { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' }, { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' }, { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' }, { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' }, { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' }, { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' }, { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' }, { value: 'MP', label: 'Northern Mariana Islands' }, { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' }, { value: 'OR', label: 'Oregon' }, { value: 'PW', label: 'Palau' }, { value: 'PA', label: 'Pennsylvania' }, { value: 'PR', label: 'Puerto Rico' }, { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' }, { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' }, { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' }, { value: 'VT', label: 'Vermont' }, { value: 'VI', label: 'Virgin Islands' }, { value: 'VA', label: 'Virginia' }, { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' }, { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' }];

},{}],10:[function(require,module,exports){
'use strict';

module.exports = [{ value: 'John Smith', label: 'John Smith', email: 'john@smith.com' }, { value: 'Merry Jane', label: 'Merry Jane', email: 'merry@jane.com' }, { value: 'Stan Hoper', label: 'Stan Hoper', email: 'stan@hoper.com' }];

},{}],11:[function(require,module,exports){
var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;

},{}],12:[function(require,module,exports){
(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();

},{}],13:[function(require,module,exports){
module.exports = function() {
  var mediaQuery;
  if (typeof window !== "undefined" && window !== null) {
    mediaQuery = "(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)";
    if (window.devicePixelRatio > 1.25) {
      return true;
    }
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
      return true;
    }
  }
  return false;
};

},{}],14:[function(require,module,exports){
(function(){
  var crypt = require('crypt'),
      utf8 = require('charenc').utf8,
      isBuffer = require('is-buffer'),
      bin = require('charenc').bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if(typeof message == 'undefined')
      return;

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();

},{"charenc":11,"crypt":12,"is-buffer":15}],15:[function(require,module,exports){
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install is-buffer`
 */

module.exports = function (obj) {
  return !!(
    obj != null &&
    obj.constructor &&
    typeof obj.constructor.isBuffer === 'function' &&
    obj.constructor.isBuffer(obj)
  )
}

},{}],16:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],17:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],18:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":16,"./encode":17}],19:[function(require,module,exports){
// Generated by CoffeeScript 1.10.0
var React, isRetina, md5, querystring;

React = require('react');

md5 = require('md5');

querystring = require('querystring');

isRetina = require('is-retina');

module.exports = React.createClass({
  displayName: 'Gravatar',
  propTypes: {
    email: React.PropTypes.string,
    md5: React.PropTypes.string,
    size: React.PropTypes.number,
    rating: React.PropTypes.string,
    https: React.PropTypes.bool,
    "default": React.PropTypes.string,
    className: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      size: 50,
      rating: 'g',
      https: false,
      "default": "retro"
    };
  },
  render: function() {
    var base, hash, modernBrowser, query, retinaQuery, retinaSrc, src;
    base = this.props.https ? "https://secure.gravatar.com/avatar/" : 'http://www.gravatar.com/avatar/';
    query = querystring.stringify({
      s: this.props.size,
      r: this.props.rating,
      d: this.props["default"]
    });
    retinaQuery = querystring.stringify({
      s: this.props.size * 2,
      r: this.props.rating,
      d: this.props["default"]
    });
    if (this.props.md5) {
      hash = this.props.md5;
    } else if (this.props.email) {
      hash = md5(this.props.email);
    } else {
      console.warn('Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.');
      return React.createElement("script", null);
    }
    src = base + hash + "?" + query;
    retinaSrc = base + hash + "?" + retinaQuery;
    modernBrowser = true;
    if (typeof window !== "undefined" && window !== null) {
      modernBrowser = 'srcset' in document.createElement('img');
    }
    if (!modernBrowser && isRetina()) {
      return React.createElement("img", React.__spread({
        "style": this.props.style,
        "className": "react-gravatar " + this.props.className,
        "src": retinaSrc,
        "height": this.props.size,
        "width": this.props.size
      }, this.props));
    } else {
      return React.createElement("img", React.__spread({
        "style": this.props.style,
        "className": "react-gravatar " + this.props.className,
        "src": src,
        "srcSet": retinaSrc + " 2x",
        "height": this.props.size,
        "width": this.props.size
      }, this.props));
    }
  }
});

},{"is-retina":13,"md5":14,"querystring":18,"react":undefined}]},{},[1]);
