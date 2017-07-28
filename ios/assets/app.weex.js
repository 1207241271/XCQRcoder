// { "framework": "Vue" }

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _foo = __webpack_require__(1);

	var _foo2 = _interopRequireDefault(_foo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_foo2.default.el = '#root';
	exports.default = new Vue(_foo2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/yangxu/Documents/workspace/weex/XCQRcoder/src/foo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-503fbbf1"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "alignItems": "center",
	    "marginTop": 200
	  },
	  "title": {
	    "fontSize": 48
	  },
	  "logo": {
	    "width": 360,
	    "height": 82
	  },
	  "scanner": {
	    "width": 400,
	    "height": 400
	  }
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	// var navigator = weex.requireModule('navigator')
	var globalEvent = weex.requireModule('globalEvent');
	globalEvent.addEventListener("geolocation", function (e) {
	  console.log("get geolocation", e);
	});
	exports.default = {

	  mounted: function mounted() {
	    var that = this.$root;
	    console.log('el', this.$refs.scanner);
	    // this.$refs.scanner.focus();
	    // console.log('weex config',weex.config)
	    // navigator.push({
	    //     url: '',
	    //     animated: "true"
	    //   }, event => {
	    //     console.log({ message: 'callback: ' + event })
	    //   })
	  },
	  data: {
	    logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
	    target: 'World'
	  },
	  methods: {
	    update: function update(e) {
	      this.target = 'Weex';
	      console.log('target:', this.target);
	    },
	    jump: function jump() {
	      this.$refs.scanner.startReading();
	      // let scanPageURL = this.getBaseUrl(weex.config.bundleUrl)+'/'+'scanPage.weex.js';
	      // console.log('------weex config url',weex.config.bundleUrl);
	      // console.log('------scan url',scanPageURL);
	      // navigator.push({
	      //   url: scanPageURL,
	      //   animated: "true"
	      // }, event => {
	      //   console.log({ message: 'callback: ' + event })
	      // })
	    },
	    getBaseUrl: function getBaseUrl(url) {
	      var urlArray = url.split('/');
	      var newArray = urlArray.slice(0, urlArray.length - 1);
	      return newArray.join('/');
	    }
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"],
	    on: {
	      "click": _vm.update
	    }
	  }, [_c('wxscanner', {
	    ref: "scanner",
	    staticClass: ["scanner"]
	  }), _c('button', {
	    on: {
	      "click": function($event) {
	        _vm.jump()
	      }
	    }
	  }, [_vm._v("跳转")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);