(window.webpackJsonp=window.webpackJsonp||[]).push([[31,191,192,193,194,195],{1960:function(module,exports,__webpack_require__){"use strict";function futureSeconds(text){return text.replace(/sekuntia?/,"sekunnin")}function futureMinutes(text){return text.replace(/minuuttia?/,"minuutin")}function futureHours(text){return text.replace(/tuntia?/,"tunnin")}function futureWeeks(text){return text.replace(/(viikko|viikkoa)/,"viikon")}function futureMonths(text){return text.replace(/(kuukausi|kuukautta)/,"kuukauden")}function futureYears(text){return text.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatDistance(token,count,options){options=options||{};var distance=formatDistanceLocale[token],result=1===count?distance.one:distance.other.replace("{{count}}",count);if(options.addSuffix)return options.comparison>0?distance.futureTense(result)+" kuluttua":result+" sitten";return result};var formatDistanceLocale={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:futureSeconds},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:futureSeconds},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(_text){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:futureMinutes},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:futureMinutes},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:futureHours},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:futureHours},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function futureDays(text){return text.replace(/päivää?/,"päivän")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:futureWeeks},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:futureWeeks},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:futureMonths},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:futureMonths},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:futureYears},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:futureYears},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:futureYears},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:futureYears}};module.exports=exports.default},1961:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(512));var _default={date:(0,_index.default)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,_index.default)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,_index.default)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};exports.default=_default,module.exports=exports.default},1962:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,_date,_baseDate,_options){return formatRelativeLocale[token]};var formatRelativeLocale={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};module.exports=exports.default},1963:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(513));var monthValues={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},formattingMonthValues={narrow:monthValues.narrow,abbreviated:monthValues.abbreviated,wide:monthValues.wide.map((function(name){return name+"ta"}))},dayValues={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},formattingDayValues={narrow:dayValues.narrow,short:dayValues.short,abbreviated:dayValues.abbreviated,wide:dayValues.wide.map((function(name){return name+"na"}))};var _default={ordinalNumber:function ordinalNumber(dirtyNumber){return Number(dirtyNumber)+"."},era:(0,_index.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,_index.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(quarter){return Number(quarter)-1}}),month:(0,_index.default)({values:monthValues,formattingValues:formattingMonthValues,defaultWidth:"wide"}),day:(0,_index.default)({values:dayValues,formattingValues:formattingDayValues,defaultWidth:"wide"}),dayPeriod:(0,_index.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},defaultWidth:"wide"})};exports.default=_default,module.exports=exports.default},1964:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__(514)),_index2=_interopRequireDefault(__webpack_require__(515));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={ordinalNumber:(0,_index.default)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(value){return parseInt(value,10)}}),era:(0,_index2.default)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:(0,_index2.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(index){return index+1}}),month:(0,_index2.default)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:(0,_index2.default)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,_index2.default)({matchPatterns:{narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},defaultParseWidth:"any"})};exports.default=_default,module.exports=exports.default},2226:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__(1960)),_index2=_interopRequireDefault(__webpack_require__(1961)),_index3=_interopRequireDefault(__webpack_require__(1962)),_index4=_interopRequireDefault(__webpack_require__(1963)),_index5=_interopRequireDefault(__webpack_require__(1964));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={code:"fi",formatDistance:_index.default,formatLong:_index2.default,formatRelative:_index3.default,localize:_index4.default,match:_index5.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};exports.default=_default,module.exports=exports.default}}]);
//# sourceMappingURL=31.95359becf1ae564d077a.bundle.js.map