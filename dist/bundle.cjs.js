'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Index = function (a, b) { return a + b; };

/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
var isColor = function (value) {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
};

/**
 * 当前工具函数库版本
 */
var version = '1.0.0';

exports.add = Index;
exports.isColor = isColor;
exports.version = version;
//# sourceMappingURL=bundle.cjs.js.map
