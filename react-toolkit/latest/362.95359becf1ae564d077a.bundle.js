(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{2133:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,date,_baseDate,_options){var format=formatRelativeLocale[token];if("function"==typeof format)return format(date);return format};var formatRelativeLocale={lastWeek:function(date){switch(date.getUTCDay()){case 0:return"'prejšnjo nedeljo ob' p";case 3:return"'prejšnjo sredo ob' p";case 6:return"'prejšnjo soboto ob' p";default:return"'prejšnji' EEEE 'ob' p"}},yesterday:"'včeraj ob' p",today:"'danes ob' p",tomorrow:"'jutri ob' p",nextWeek:function(date){switch(date.getUTCDay()){case 0:return"'naslednjo nedeljo ob' p";case 3:return"'naslednjo sredo ob' p";case 6:return"'naslednjo soboto ob' p";default:return"'naslednji' EEEE 'ob' p"}},other:"P"};module.exports=exports.default}}]);
//# sourceMappingURL=362.95359becf1ae564d077a.bundle.js.map