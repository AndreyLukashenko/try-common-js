/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var MyDate, Note, note;

	MyDate = __webpack_require__(1);

	Note = (function() {
	  function Note(head, desc) {
	    this.head = head;
	    this.desc = desc;
	    this.date = new MyDate(12, 5, 2015, 11, 23, 35);
	  }

	  Note.prototype.show = function() {
	    return this.date;
	  };

	  return Note;

	})();

	note = new Note('aaaaa', 'bbbbbb');

	console.log(note.show());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var MyDate, Time;

	Time = __webpack_require__(2);

	MyDate = (function() {
	  function MyDate(day, mounth, year, hours, minutes, seconds) {
	    this.day = day;
	    this.mounth = mounth;
	    this.year = year;
	    this.time = new Time(hours, minutes, seconds);
	  }

	  MyDate.prototype.show = function() {
	    return "date is " + this.day + "." + this.mounth + "." + this.year + " " + (this.time.show());
	  };

	  return MyDate;

	})();

	module.exports = MyDate;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Time;

	Time = (function() {
	  function Time(hours, minutes, seconds) {
	    this.hours = hours;
	    this.minutes = minutes;
	    this.seconds = seconds;
	  }

	  Time.prototype.show = function() {
	    return this.hours + ":" + this.minutes + ":" + this.seconds;
	  };

	  return Time;

	})();

	module.exports = Time;


/***/ }
/******/ ]);