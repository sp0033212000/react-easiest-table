import React from 'react';
import classNames from 'classnames';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var isSet = function (obj) {
    return obj !== null && obj !== undefined;
};
var isAry = function (ary) { return Array.isArray(ary); };
var isEmptyArray = function (ary) { return isAry(ary) && ary.length === 0; };

var Table = function (_a) {
    var data = _a.data, order = _a.order, columnOptions = _a.columnOptions;
    return (React.createElement("ul", { className: classNames("w-full", "rounded-sm", "overflow-hidden", "border", "border-solid", "border-grey4", "divide-y", "divide-grey4") },
        React.createElement(HeaderRow, { order: order }),
        React.createElement(Body, { isEmpty: isEmptyArray(data) }, data.map(function (item, index) { return (React.createElement(Row, { key: index, item: item, order: order, columnOptions: columnOptions })); }))));
};
var HeaderRow = function (_a) {
    var order = _a.order;
    return (React.createElement("li", { className: classNames("w-full", "px-6", "py-3", "bg-bg-blue") },
        React.createElement("ul", { className: classNames("w-full", "flex", "items-center") }, order.map(function (_a) {
            var key = _a.key, _b = _a.proportion, proportion = _b === void 0 ? 1 : _b, label = _a.label;
            return (React.createElement("li", { key: key, style: { flex: proportion }, className: classNames(["text-[1rem]", "font-medium"]) }, label));
        }))));
};
var Body = function (_a) {
    var isEmpty = _a.isEmpty, children = _a.children;
    if (isEmpty)
        return (React.createElement("li", { className: classNames("w-full", "px-6", "py-3", "bg-white", "flex", "justify-center", "items-center") },
            React.createElement("p", { className: classNames(["text-[1rem]", "font-normal"]) }, "\u7121\u8CC7\u6599")));
    return React.createElement(React.Fragment, null, children);
};
var Row = function (_a) {
    var order = _a.order, item = _a.item, columnOptions = _a.columnOptions;
    return (React.createElement("li", { className: classNames("w-full", "px-6", "py-3", "bg-white") },
        React.createElement("ul", { className: classNames("w-full", "flex", "items-center") }, order.map(function (_a) {
            var _b, _c, _d;
            var key = _a.key, _e = _a.proportion, proportion = _e === void 0 ? 1 : _e;
            var Render = undefined;
            var displayValue = item[key];
            if (columnOptions) {
                Render = (_b = columnOptions === null || columnOptions === void 0 ? void 0 : columnOptions[key]) === null || _b === void 0 ? void 0 : _b.render;
                displayValue =
                    ((_d = (_c = columnOptions === null || columnOptions === void 0 ? void 0 : columnOptions[key]) === null || _c === void 0 ? void 0 : _c.builder) === null || _d === void 0 ? void 0 : _d.call(_c, displayValue)) || displayValue;
            }
            return (React.createElement("li", { key: key, style: { flex: proportion }, className: classNames(["text-[1rem]", "font-medium"]) }, isSet(Render) ? React.createElement(Render, __assign({}, item)) : displayValue));
        }))));
};

export { Table };
