(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{2039:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(513));var suffixes={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};var _default={ordinalNumber:function ordinalNumber(dirtyNumber){var number=Number(dirtyNumber);return number+(suffixes[number]||suffixes[number%10]||suffixes[number>=100?100:null])},era:(0,_index.default)({values:{narrow:["б.з.д.","б.з."],abbreviated:["б.з.д.","б.з."],wide:["біздің заманымызға дейін","біздің заманымыз"]},defaultWidth:"wide"}),quarter:(0,_index.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ші тоқ.","2-ші тоқ.","3-ші тоқ.","4-ші тоқ."],wide:["1-ші тоқсан","2-ші тоқсан","3-ші тоқсан","4-ші тоқсан"]},defaultWidth:"wide",argumentCallback:function(quarter){return Number(quarter)-1}}),month:(0,_index.default)({values:{narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},defaultWidth:"wide",formattingValues:{narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},defaultFormattingWidth:"wide"}),day:(0,_index.default)({values:{narrow:["Ж","Д","С","С","Б","Ж","С"],short:["жс","дс","сс","ср","бс","жм","сб"],abbreviated:["жс","дс","сс","ср","бс","жм","сб"],wide:["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"]},defaultWidth:"wide"}),dayPeriod:(0,_index.default)({values:{narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"}},defaultWidth:"any",formattingValues:{narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түс",morning:"таң",afternoon:"күн",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түсте",morning:"таңертең",afternoon:"күндіз",evening:"кеште",night:"түнде"}},defaultFormattingWidth:"wide"})};exports.default=_default,module.exports=exports.default}}]);
//# sourceMappingURL=273.95359becf1ae564d077a.bundle.js.map