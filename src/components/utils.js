"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getReferenceLineMap = exports.getId = exports.filterHandles = exports.removeEvent = exports.addEvent = exports.getElSize = exports.IDENTITY = void 0;
var Vue3DraggableResizable_1 = require("./Vue3DraggableResizable");
exports.IDENTITY = Symbol('Vue3DraggableResizable');
function getElSize(el) {
    var style = window.getComputedStyle(el);
    return {
        width: parseFloat(style.getPropertyValue('width')),
        height: parseFloat(style.getPropertyValue('height'))
    };
}
exports.getElSize = getElSize;
function addEvent(el, event, handler) {
    if (!el) {
        return;
    }
    el.addEventListener(event, handler);
}
exports.addEvent = addEvent;
function removeEvent(el, event, handler) {
    if (!el) {
        return;
    }
    el.removeEventListener(event, handler);
}
exports.removeEvent = removeEvent;
function filterHandles(handles) {
    if (handles && handles.length > 0) {
        return __spreadArrays(new Set(__spreadArrays(handles).filter(function (i) { return Vue3DraggableResizable_1.ALL_HANDLES.includes(i); })));
    }
    else {
        return [];
    }
}
exports.filterHandles = filterHandles;
function getId() {
    return String(Math.random()).substr(2) + String(Date.now());
}
exports.getId = getId;
function getReferenceLineMap(containerProvider, parentSize, id) {
    var _a, _b;
    if (containerProvider.disabled.value) {
        return null;
    }
    var referenceLine = {
        row: [],
        col: []
    };
    var parentWidth = parentSize.parentWidth, parentHeight = parentSize.parentHeight;
    (_a = referenceLine.row).push.apply(_a, containerProvider.adsorbRows);
    (_b = referenceLine.col).push.apply(_b, containerProvider.adsorbCols);
    if (containerProvider.adsorbParent.value) {
        referenceLine.row.push(0, parentHeight.value, parentHeight.value / 2);
        referenceLine.col.push(0, parentWidth.value, parentWidth.value / 2);
    }
    var widgetPositionStore = containerProvider.getPositionStore(id);
    Object.values(widgetPositionStore).forEach(function (_a) {
        var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
        referenceLine.row.push(y, y + h, y + h / 2);
        referenceLine.col.push(x, x + w, x + w / 2);
    });
    var referenceLineMap = {
        row: referenceLine.row.reduce(function (pre, cur) {
            var _a;
            return __assign(__assign({}, pre), (_a = {}, _a[cur] = { min: cur - 5, max: cur + 5, value: cur }, _a));
        }, {}),
        col: referenceLine.col.reduce(function (pre, cur) {
            var _a;
            return __assign(__assign({}, pre), (_a = {}, _a[cur] = { min: cur - 5, max: cur + 5, value: cur }, _a));
        }, {})
    };
    return referenceLineMap;
}
exports.getReferenceLineMap = getReferenceLineMap;
