(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1886:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,date,baseDate,options){var format=formatRelativeLocale[token];if("function"==typeof format)return format(date,baseDate,options);return format};var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(2289));var accusativeWeekdays=["нядзелю","панядзелак","аўторак","сераду","чацвер","пятніцу","суботу"];function thisWeek(day){return"'у "+accusativeWeekdays[day]+" а' p"}var formatRelativeLocale={lastWeek:function(date,baseDate,options){var day=date.getUTCDay();return(0,_index.default)(date,baseDate,options)?thisWeek(day):function lastWeek(day){var weekday=accusativeWeekdays[day];switch(day){case 0:case 3:case 5:case 6:return"'у мінулую "+weekday+" а' p";case 1:case 2:case 4:return"'у мінулы "+weekday+" а' p"}}(day)},yesterday:"'учора а' p",today:"'сёння а' p",tomorrow:"'заўтра а' p",nextWeek:function(date,baseDate,options){var day=date.getUTCDay();return(0,_index.default)(date,baseDate,options)?thisWeek(day):function nextWeek(day){var weekday=accusativeWeekdays[day];switch(day){case 0:case 3:case 5:case 6:return"'у наступную "+weekday+" а' p";case 1:case 2:case 4:return"'у наступны "+weekday+" а' p"}}(day)},other:"P"};module.exports=exports.default},2289:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function isSameUTCWeek(dirtyDateLeft,dirtyDateRight,options){(0,_index2.default)(2,arguments);var dateLeftStartOfWeek=(0,_index.default)(dirtyDateLeft,options),dateRightStartOfWeek=(0,_index.default)(dirtyDateRight,options);return dateLeftStartOfWeek.getTime()===dateRightStartOfWeek.getTime()};var _index=_interopRequireDefault(__webpack_require__(281)),_index2=_interopRequireDefault(__webpack_require__(14));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default}}]);
//# sourceMappingURL=73.95359becf1ae564d077a.bundle.js.map