(window.webpackJsonp=window.webpackJsonp||[]).push([[12,82,405,406,407,408],{2176:function(module,exports,__webpack_require__){"use strict";function declension(scheme,count){if(void 0!==scheme.one&&1===count)return scheme.one;var rem10=count%10,rem100=count%100;return 1===rem10&&11!==rem100?scheme.singularNominative.replace("{{count}}",count):rem10>=2&&rem10<=4&&(rem100<10||rem100>20)?scheme.singularGenitive.replace("{{count}}",count):scheme.pluralGenitive.replace("{{count}}",count)}function buildLocalizeTokenFn(scheme){return function(count,options){return options.addSuffix?options.comparison>0?scheme.future?declension(scheme.future,count):"за "+declension(scheme.regular,count):scheme.past?declension(scheme.past,count):declension(scheme.regular,count)+" тому":declension(scheme.regular,count)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatDistance(token,count,options){return options=options||{},formatDistanceLocale[token](count,options)};var formatDistanceLocale={lessThanXSeconds:buildLocalizeTokenFn({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:function(_,options){return options.addSuffix?options.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},lessThanXMinutes:buildLocalizeTokenFn({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:buildLocalizeTokenFn({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:buildLocalizeTokenFn({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижні"}}),xWeeks:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижня",pluralGenitive:"{{count}} тижні"}}),aboutXMonths:buildLocalizeTokenFn({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяця",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяця",pluralGenitive:"{{count}} місяців"}}),aboutXYears:buildLocalizeTokenFn({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:buildLocalizeTokenFn({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:buildLocalizeTokenFn({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:buildLocalizeTokenFn({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})};module.exports=exports.default},2177:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(512));var _default={date:(0,_index.default)({formats:{full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,_index.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,_index.default)({formats:{full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};exports.default=_default,module.exports=exports.default},2178:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,date,baseDate,options){var format=formatRelativeLocale[token];if("function"==typeof format)return format(date,baseDate,options);return format};var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(2289));var accusativeWeekdays=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function thisWeek(day){return"'у "+accusativeWeekdays[day]+" о' p"}var formatRelativeLocale={lastWeek:function(date,baseDate,options){var day=date.getUTCDay();return(0,_index.default)(date,baseDate,options)?thisWeek(day):function lastWeek(day){var weekday=accusativeWeekdays[day];switch(day){case 0:case 3:case 5:case 6:return"'у минулу "+weekday+" о' p";case 1:case 2:case 4:return"'у минулий "+weekday+" о' p"}}(day)},yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:function(date,baseDate,options){var day=date.getUTCDay();return(0,_index.default)(date,baseDate,options)?thisWeek(day):function nextWeek(day){var weekday=accusativeWeekdays[day];switch(day){case 0:case 3:case 5:case 6:return"'у наступну "+weekday+" о' p";case 1:case 2:case 4:return"'у наступний "+weekday+" о' p"}}(day)},other:"P"};module.exports=exports.default},2179:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(513));var _default={ordinalNumber:function ordinalNumber(dirtyNumber,dirtyOptions){var unit=String((dirtyOptions||{}).unit);return dirtyNumber+("date"===unit?3===dirtyNumber||23===dirtyNumber?"-є":"-е":"minute"===unit||"second"===unit||"hour"===unit?"-а":"-й")},era:(0,_index.default)({values:{narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},defaultWidth:"wide"}),quarter:(0,_index.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(quarter){return Number(quarter)-1}}),month:(0,_index.default)({values:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},defaultWidth:"wide",formattingValues:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},defaultFormattingWidth:"wide"}),day:(0,_index.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},defaultWidth:"wide"}),dayPeriod:(0,_index.default)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},defaultFormattingWidth:"wide"})};exports.default=_default,module.exports=exports.default},2180:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__(514)),_index2=_interopRequireDefault(__webpack_require__(515));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={ordinalNumber:(0,_index.default)({matchPattern:/^(\d+)(-?(е|й|є|а|я))?/i,parsePattern:/\d+/i,valueCallback:function(value){return parseInt(value,10)}}),era:(0,_index2.default)({matchPatterns:{narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,_index2.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(index){return index+1}}),month:(0,_index2.default)({matchPatterns:{narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер|берез|кві|трав?|чер|лип|сер|вер|жов|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопада?|грудень|грудня)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},defaultParseWidth:"any"}),day:(0,_index2.default)({matchPatterns:{narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,_index2.default)({matchPatterns:{narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})};exports.default=_default,module.exports=exports.default},2273:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__(2176)),_index2=_interopRequireDefault(__webpack_require__(2177)),_index3=_interopRequireDefault(__webpack_require__(2178)),_index4=_interopRequireDefault(__webpack_require__(2179)),_index5=_interopRequireDefault(__webpack_require__(2180));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={code:"uk",formatDistance:_index.default,formatLong:_index2.default,formatRelative:_index3.default,localize:_index4.default,match:_index5.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};exports.default=_default,module.exports=exports.default},2289:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function isSameUTCWeek(dirtyDateLeft,dirtyDateRight,options){(0,_index2.default)(2,arguments);var dateLeftStartOfWeek=(0,_index.default)(dirtyDateLeft,options),dateRightStartOfWeek=(0,_index.default)(dirtyDateRight,options);return dateLeftStartOfWeek.getTime()===dateRightStartOfWeek.getTime()};var _index=_interopRequireDefault(__webpack_require__(281)),_index2=_interopRequireDefault(__webpack_require__(14));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default}}]);
//# sourceMappingURL=12.95359becf1ae564d077a.bundle.js.map