(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tools = {}));
}(this, (function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.umd.js.map
