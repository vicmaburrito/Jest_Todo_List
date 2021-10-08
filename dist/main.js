/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #2c3e50;\\n}\\n\\n#complete-list,\\n.todo-items ul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n#complete-list {\\n  background-color: #85929e;\\n  margin: 10% 25%;\\n}\\n\\n#todo-items {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.flex {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 5px;\\n}\\n\\nbutton {\\n  width: 100%;\\n  height: 100%;\\n  border: none;\\n  background-color: #f6f6f6;\\n  padding: 10px 5px;\\n}\\n\\nhr {\\n  margin: 0;\\n  padding: 0;\\n  border: none;\\n}\\n\\ninput[type='text'] {\\n  width: 100%;\\n  height: 100%;\\n  padding: 8px;\\n  border: none;\\n}\\n\\ninput[type='text']:focus {\\n  outline: none;\\n}\\n\\n.material-icons {\\n  padding: 5px;\\n  color: black;\\n  font-size: 26px;\\n}\\n\\n.items span {\\n  color: rgb(28, 40, 51);\\n  font-size: 20px;\\n  font-weight: 900;\\n  padding: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"destroyTodo\": () => (/* binding */ destroyTodo),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\nfunction createTodo(todoItem, todoList) {\n  todoList.push(todoItem);\n  return todoList;\n}\n\nfunction destroyTodo(todo, todoList) {\n  const index = todoList.indexOf(todo);\n  todoList.splice(index, 1);\n  todoList.forEach((todo, currentIndex) => {\n    if (currentIndex >= index) {\n      todo.index -= 1;\n    }\n  });\n  return todoList;\n}\n\nfunction updateTodo(newTodo, oldTodo) {\n  oldTodo = newTodo;\n  return oldTodo;\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\n\n\nconst button = document.querySelector('button');\n\nclass Todo {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\nlet todos = [];\n\nfunction createMaterialIconelement(name, color) {\n  const span = document.createElement('span');\n  span.classList.add('material-icons', 'edit-icon');\n  span.style.marginLeft = 'auto';\n  span.style.cursor = 'pointer';\n  if (color !== undefined) {\n    span.style.color = color;\n  }\n  span.innerHTML = name;\n\n  return span;\n}\n\nfunction createCheckBox(index) {\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.classList.add('checkbox');\n  checkbox.checked = todos[index].completed;\n  return checkbox;\n}\n\nfunction createTodoDivElement(color) {\n  const div = document.createElement('div');\n  div.classList.add('flex', 'todo-element');\n  div.style.backgroundColor = color;\n  return div;\n}\n\nfunction createReplaceTodoElementForCompletedTask(elementDescription) {\n  const fragment = document.createDocumentFragment();\n  const div = document.createElement('div');\n  const tickSpan = createMaterialIconelement('done', 'green');\n  const strike = document.createElement('strike');\n  const editSpan = createMaterialIconelement(' more_vert', 'green');\n  div.appendChild(tickSpan);\n  strike.innerHTML = `<span>${elementDescription}</span>`;\n  div.appendChild(strike);\n  fragment.appendChild(div);\n  fragment.appendChild(editSpan);\n\n  return [fragment, tickSpan];\n}\n\nfunction createTodoItem(todo) {\n  const li = document.createElement('li');\n  if (todo.completed) {\n    const div = document.createElement('div');\n    div.classList.add('todo-element', 'flex');\n    const hr = document.createElement('hr');\n    div.appendChild(\n      createReplaceTodoElementForCompletedTask(todo.description)[0],\n    );\n    li.appendChild(div);\n    li.appendChild(hr);\n  } else {\n    li.innerHTML = `\n    <div class=\"flex todo-element\">\n      <div>\n          <input type=\"checkbox\" class=\"checkbox\" \n          ${todo.completed ? 'checked' : ''}>\n          <span>${todo.description}</span>\n      </div>\n      <span class=\"material-icons edit-icon\" style=\"cursor: pointer\">\n          more_vert\n      </span>\n    </div>\n    <hr>`;\n  }\n\n  return li;\n}\n\nfunction ReplaceTodoItem(todo) {\n  const checkbox = createCheckBox(todos.indexOf(todo));\n  const span = document.createElement('span');\n  span.innerText = todo.description;\n  const threeDots = createMaterialIconelement('more_vert');\n  const innerDiv = document.createElement('div');\n  innerDiv.appendChild(checkbox);\n  innerDiv.appendChild(span);\n  const div = createTodoDivElement('white');\n\n  div.appendChild(innerDiv);\n  div.appendChild(threeDots);\n\n  return [div, checkbox];\n}\n\nfunction addTodoItem(todo) {\n  const ul = document.querySelector('#complete-list');\n  const li = createTodoItem(todo);\n  ul.appendChild(li);\n}\n\nfunction saveTodosLocally() {\n  localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nfunction changeElementToCompleted(checkbox) {\n  const ul = document.querySelector('#complete-list');\n  const index = [...ul.childNodes].indexOf(\n    checkbox.parentElement.parentElement.parentElement,\n  ) - 4;\n\n  (0,_update_js__WEBPACK_IMPORTED_MODULE_1__.setAsCompleted)(todos[index - 1]);\n  saveTodosLocally();\n\n  const [completedElement, tickSpan] = createReplaceTodoElementForCompletedTask(\n    todos[index - 1].description,\n  );\n  const div = document.createElement('div');\n  div.classList.add('todo-element', 'flex');\n  div.appendChild(completedElement);\n  const prevChild = checkbox.parentElement.parentElement;\n  checkbox.parentElement.parentElement.replaceWith(div);\n  tickSpan.addEventListener('click', () => {\n    if (tickSpan.innerText === 'done') {\n      div.replaceWith(prevChild);\n      const checkbox = prevChild.firstElementChild.firstElementChild;\n      checkbox.checked = false;\n      (0,_update_js__WEBPACK_IMPORTED_MODULE_1__.setAsCompleted)(todos[index - 1]);\n      saveTodosLocally();\n    }\n  });\n}\n\nfunction populate() {\n  todos.sort((a, b) => (a.index > b.index ? 1 : -1));\n  todos.forEach((todo) => {\n    addTodoItem(todo);\n  });\n}\n\nfunction addEventToSingleCheckBox(checkbox, todo) {\n  checkbox.addEventListener('change', () => {\n    changeElementToCompleted(checkbox, todo);\n  });\n}\n\nfunction addEventsToCheckboxes(checkbox, todo) {\n  const checkboxes = document.querySelectorAll('.checkbox');\n\n  if (checkbox) {\n    addEventToSingleCheckBox(checkbox, todo);\n  } else {\n    checkboxes.forEach((checkbox) => {\n      addEventToSingleCheckBox(checkbox);\n    });\n  }\n}\n\nfunction addEventsToEditIconsContinued(editIcon) {\n  editIcon.addEventListener('click', () => {\n    const ul = document.querySelector('#complete-list');\n    const index = [...ul.childNodes].indexOf(editIcon.parentElement.parentElement) - 5;\n\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.classList.add('edit-input');\n    input.value = todos[index].description;\n    input.style.backgroundColor = 'transparent';\n\n    const div = createTodoDivElement('#FFFBAE');\n    const span = createMaterialIconelement('delete');\n    const checkbox = createCheckBox(index);\n    div.appendChild(checkbox);\n    div.appendChild(input);\n    div.appendChild(span);\n\n    const todoElements = document.querySelectorAll('.todo-element');\n    todoElements[index].replaceWith(div);\n\n    input.addEventListener('keyup', (e) => {\n      if (e.key === 'Enter') {\n        const todo = todos[index];\n        todo.description = input.value;\n        (0,_controller_js__WEBPACK_IMPORTED_MODULE_2__.updateTodo)(todo, todos[index]);\n        const [newDiv, newCheckbox] = ReplaceTodoItem(todo);\n        addEventsToEditIconsContinued(newDiv.lastChild);\n        div.replaceWith(newDiv);\n        saveTodosLocally();\n        div.style.backgroundColor = 'white';\n        addEventsToCheckboxes(newCheckbox, todo);\n      }\n    });\n\n    span.addEventListener('click', () => {\n      saveTodosLocally();\n      (0,_controller_js__WEBPACK_IMPORTED_MODULE_2__.destroyTodo)(todos[index], todos);\n      div.parentElement.remove();\n      saveTodosLocally();\n    });\n  });\n}\n\nfunction addEventsToEditIcons(recievedIndex) {\n  const editIcons = document.querySelectorAll('.edit-icon');\n\n  editIcons.forEach((editIcon, foreachIndex) => {\n    if (recievedIndex) {\n      if (editIcons.length - 1 === foreachIndex) {\n        addEventsToEditIconsContinued(editIcon);\n      }\n    } else {\n      addEventsToEditIconsContinued(editIcon);\n    }\n  });\n}\n\nwindow.addEventListener('load', () => {\n  const oldTodos = JSON.parse(localStorage.getItem('todos'));\n  if (oldTodos) {\n    todos = oldTodos;\n  }\n  populate();\n  addEventsToCheckboxes();\n  addEventsToEditIcons();\n});\n\nfunction addEventListenerToInput() {\n  const input = document.querySelector('#input');\n  input.addEventListener('keyup', (e) => {\n    if (e.key === 'Enter') {\n      const todo = new Todo(input.value, false, todos.length + 1);\n      (0,_controller_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(todo, todos);\n      addTodoItem(todo);\n      saveTodosLocally();\n      input.value = '';\n      addEventsToEditIcons(todos.length - 1);\n      const checkboxes = document.querySelectorAll('.checkbox');\n      addEventsToCheckboxes(checkboxes.lastChild, todo);\n    }\n  });\n}\n\naddEventListenerToInput();\n\nbutton.addEventListener('click', () => {\n  const newTodos = (0,_update_js__WEBPACK_IMPORTED_MODULE_1__.clearAllCompleted)(todos);\n  todos = newTodos;\n\n  saveTodosLocally();\n});\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAsCompleted\": () => (/* binding */ setAsCompleted),\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted)\n/* harmony export */ });\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\nfunction setAsCompleted(todo) {\n  todo.completed = !todo.completed;\n  return todo;\n}\n\nfunction clearAllCompleted(todos) {\n  const todoElements = document.querySelectorAll('.todo-element');\n  const removedTodos = [];\n  const newTodos = todos;\n  newTodos.forEach((todo, index) => {\n    if (todo.completed) {\n      removedTodos.push(todo);\n      todoElements[index].parentNode.remove();\n    }\n  });\n\n  removedTodos.forEach((todo) => {\n    (0,_controller_js__WEBPACK_IMPORTED_MODULE_0__.destroyTodo)(todo, newTodos);\n  });\n\n  return newTodos;\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;