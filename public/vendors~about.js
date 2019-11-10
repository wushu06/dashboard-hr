(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~about"],{

/***/ "./node_modules/@fullcalendar/core/main.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/core/main.esm.js ***!
  \*****************************************************/
/*! exports provided: Calendar, Component, DateComponent, DateEnv, DateProfileGenerator, DayHeader, DaySeries, DayTable, ElementDragging, ElementScrollController, EmitterMixin, EventApi, FgEventRenderer, FillRenderer, Interaction, Mixin, NamedTimeZoneImpl, PositionCache, ScrollComponent, ScrollController, Slicer, Splitter, Theme, View, WindowScrollController, addDays, addDurations, addMs, addWeeks, allowContextMenu, allowSelection, appendToElement, applyAll, applyMutationToEventStore, applyStyle, applyStyleProp, asRoughMinutes, asRoughMs, asRoughSeconds, buildGotoAnchorHtml, buildSegCompareObj, capitaliseFirstLetter, combineEventUis, compareByFieldSpec, compareByFieldSpecs, compareNumbers, compensateScroll, computeClippingRect, computeEdges, computeFallbackHeaderFormat, computeHeightAndMargins, computeInnerRect, computeRect, computeVisibleDayRange, config, constrainPoint, createDuration, createElement, createEmptyEventStore, createEventInstance, createFormatter, createPlugin, cssToStr, debounce, diffDates, diffDayAndTime, diffDays, diffPoints, diffWeeks, diffWholeDays, diffWholeWeeks, disableCursor, distributeHeight, elementClosest, elementMatches, enableCursor, eventTupleToStore, filterEventStoreDefs, filterHash, findChildren, findElements, flexibleCompare, forceClassName, formatDate, formatIsoTimeString, formatRange, getAllDayHtml, getClippingParents, getDayClasses, getElSeg, getRectCenter, getRelevantEvents, globalDefaults, greatestDurationDenominator, hasBgRendering, htmlEscape, htmlToElement, insertAfterElement, interactionSettingsStore, interactionSettingsToStore, intersectRanges, intersectRects, isArraysEqual, isDateSpansEqual, isInt, isInteractionValid, isMultiDayRange, isPropsEqual, isPropsValid, isSingleDay, isValidDate, listenBySelector, mapHash, matchCellWidths, memoize, memoizeOutput, memoizeRendering, mergeEventStores, multiplyDuration, padStart, parseBusinessHours, parseDragMeta, parseEventDef, parseFieldSpecs, parseMarker, pointInsideRect, prependToElement, preventContextMenu, preventDefault, preventSelection, processScopedUiProps, rangeContainsMarker, rangeContainsRange, rangesEqual, rangesIntersect, refineProps, removeElement, removeExact, renderDateCell, requestJson, sliceEventStore, startOfDay, subtractInnerElHeight, translateRect, uncompensateScroll, undistributeHeight, unpromisify, version, whenTransitionDone, wholeDivideDurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateEnv", function() { return DateEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateProfileGenerator", function() { return DateProfileGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayHeader", function() { return DayHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaySeries", function() { return DaySeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTable", function() { return DayTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementDragging", function() { return ElementDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementScrollController", function() { return ElementScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterMixin", function() { return EmitterMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventApi", function() { return EventApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FgEventRenderer", function() { return FgEventRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillRenderer", function() { return FillRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return Interaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixin", function() { return Mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedTimeZoneImpl", function() { return NamedTimeZoneImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionCache", function() { return PositionCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollController", function() { return ScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slicer", function() { return Slicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splitter", function() { return Splitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowScrollController", function() { return WindowScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDurations", function() { return addDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMs", function() { return addMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWeeks", function() { return addWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowContextMenu", function() { return allowContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowSelection", function() { return allowSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToElement", function() { return appendToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAll", function() { return applyAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMutationToEventStore", function() { return applyMutationToEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyle", function() { return applyStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyleProp", function() { return applyStyleProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughMinutes", function() { return asRoughMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughMs", function() { return asRoughMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughSeconds", function() { return asRoughSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildGotoAnchorHtml", function() { return buildGotoAnchorHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSegCompareObj", function() { return buildSegCompareObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitaliseFirstLetter", function() { return capitaliseFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineEventUis", function() { return combineEventUis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpec", function() { return compareByFieldSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpecs", function() { return compareByFieldSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareNumbers", function() { return compareNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compensateScroll", function() { return compensateScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeClippingRect", function() { return computeClippingRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEdges", function() { return computeEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeFallbackHeaderFormat", function() { return computeFallbackHeaderFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeightAndMargins", function() { return computeHeightAndMargins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeInnerRect", function() { return computeInnerRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeRect", function() { return computeRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeVisibleDayRange", function() { return computeVisibleDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constrainPoint", function() { return constrainPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return createDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyEventStore", function() { return createEmptyEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventInstance", function() { return createEventInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormatter", function() { return createFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlugin", function() { return createPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssToStr", function() { return cssToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDates", function() { return diffDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDayAndTime", function() { return diffDayAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDays", function() { return diffDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffPoints", function() { return diffPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWeeks", function() { return diffWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWholeDays", function() { return diffWholeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWholeWeeks", function() { return diffWholeWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableCursor", function() { return disableCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distributeHeight", function() { return distributeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClosest", function() { return elementClosest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementMatches", function() { return elementMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableCursor", function() { return enableCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTupleToStore", function() { return eventTupleToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterEventStoreDefs", function() { return filterEventStoreDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterHash", function() { return filterHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildren", function() { return findChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElements", function() { return findElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexibleCompare", function() { return flexibleCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceClassName", function() { return forceClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatIsoTimeString", function() { return formatIsoTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRange", function() { return formatRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDayHtml", function() { return getAllDayHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClippingParents", function() { return getClippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayClasses", function() { return getDayClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElSeg", function() { return getElSeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRectCenter", function() { return getRectCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelevantEvents", function() { return getRelevantEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalDefaults", function() { return globalDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greatestDurationDenominator", function() { return greatestDurationDenominator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBgRendering", function() { return hasBgRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlEscape", function() { return htmlEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlToElement", function() { return htmlToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfterElement", function() { return insertAfterElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsStore", function() { return interactionSettingsStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsToStore", function() { return interactionSettingsToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRanges", function() { return intersectRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRects", function() { return intersectRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArraysEqual", function() { return isArraysEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateSpansEqual", function() { return isDateSpansEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return isInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteractionValid", function() { return isInteractionValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiDayRange", function() { return isMultiDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropsEqual", function() { return isPropsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropsValid", function() { return isPropsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSingleDay", function() { return isSingleDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenBySelector", function() { return listenBySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapHash", function() { return mapHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchCellWidths", function() { return matchCellWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeOutput", function() { return memoizeOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeRendering", function() { return memoizeRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeEventStores", function() { return mergeEventStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyDuration", function() { return multiplyDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padStart", function() { return padStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBusinessHours", function() { return parseBusinessHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDragMeta", function() { return parseDragMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEventDef", function() { return parseEventDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFieldSpecs", function() { return parseFieldSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMarker", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInsideRect", function() { return pointInsideRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependToElement", function() { return prependToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventContextMenu", function() { return preventContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventSelection", function() { return preventSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processScopedUiProps", function() { return processScopedUiProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeContainsMarker", function() { return rangeContainsMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeContainsRange", function() { return rangeContainsRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesEqual", function() { return rangesEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesIntersect", function() { return rangesIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refineProps", function() { return refineProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeExact", function() { return removeExact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDateCell", function() { return renderDateCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestJson", function() { return requestJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceEventStore", function() { return sliceEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfDay", function() { return startOfDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractInnerElHeight", function() { return subtractInnerElHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateRect", function() { return translateRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncompensateScroll", function() { return uncompensateScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undistributeHeight", function() { return undistributeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpromisify", function() { return unpromisify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenTransitionDone", function() { return whenTransitionDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wholeDivideDurations", function() { return wholeDivideDurations; });
/*!
FullCalendar Core Package v4.3.1
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/

// Creating
// ----------------------------------------------------------------------------------------------------------------
var elementPropHash = {
    className: true,
    colSpan: true,
    rowSpan: true
};
var containerTagHash = {
    '<tr': 'tbody',
    '<td': 'tr'
};
function createElement(tagName, attrs, content) {
    var el = document.createElement(tagName);
    if (attrs) {
        for (var attrName in attrs) {
            if (attrName === 'style') {
                applyStyle(el, attrs[attrName]);
            }
            else if (elementPropHash[attrName]) {
                el[attrName] = attrs[attrName];
            }
            else {
                el.setAttribute(attrName, attrs[attrName]);
            }
        }
    }
    if (typeof content === 'string') {
        el.innerHTML = content; // shortcut. no need to process HTML in any way
    }
    else if (content != null) {
        appendToElement(el, content);
    }
    return el;
}
function htmlToElement(html) {
    html = html.trim();
    var container = document.createElement(computeContainerTag(html));
    container.innerHTML = html;
    return container.firstChild;
}
function htmlToElements(html) {
    return Array.prototype.slice.call(htmlToNodeList(html));
}
function htmlToNodeList(html) {
    html = html.trim();
    var container = document.createElement(computeContainerTag(html));
    container.innerHTML = html;
    return container.childNodes;
}
// assumes html already trimmed and tag names are lowercase
function computeContainerTag(html) {
    return containerTagHash[html.substr(0, 3) // faster than using regex
    ] || 'div';
}
function appendToElement(el, content) {
    var childNodes = normalizeContent(content);
    for (var i = 0; i < childNodes.length; i++) {
        el.appendChild(childNodes[i]);
    }
}
function prependToElement(parent, content) {
    var newEls = normalizeContent(content);
    var afterEl = parent.firstChild || null; // if no firstChild, will append to end, but that's okay, b/c there were no children
    for (var i = 0; i < newEls.length; i++) {
        parent.insertBefore(newEls[i], afterEl);
    }
}
function insertAfterElement(refEl, content) {
    var newEls = normalizeContent(content);
    var afterEl = refEl.nextSibling || null;
    for (var i = 0; i < newEls.length; i++) {
        refEl.parentNode.insertBefore(newEls[i], afterEl);
    }
}
function normalizeContent(content) {
    var els;
    if (typeof content === 'string') {
        els = htmlToElements(content);
    }
    else if (content instanceof Node) {
        els = [content];
    }
    else { // Node[] or NodeList
        els = Array.prototype.slice.call(content);
    }
    return els;
}
function removeElement(el) {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}
// Querying
// ----------------------------------------------------------------------------------------------------------------
// from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
var matchesMethod = Element.prototype.matches ||
    Element.prototype.matchesSelector ||
    Element.prototype.msMatchesSelector;
var closestMethod = Element.prototype.closest || function (selector) {
    // polyfill
    var el = this;
    if (!document.documentElement.contains(el)) {
        return null;
    }
    do {
        if (elementMatches(el, selector)) {
            return el;
        }
        el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
};
function elementClosest(el, selector) {
    return closestMethod.call(el, selector);
}
function elementMatches(el, selector) {
    return matchesMethod.call(el, selector);
}
// accepts multiple subject els
// returns a real array. good for methods like forEach
function findElements(container, selector) {
    var containers = container instanceof HTMLElement ? [container] : container;
    var allMatches = [];
    for (var i = 0; i < containers.length; i++) {
        var matches = containers[i].querySelectorAll(selector);
        for (var j = 0; j < matches.length; j++) {
            allMatches.push(matches[j]);
        }
    }
    return allMatches;
}
// accepts multiple subject els
// only queries direct child elements
function findChildren(parent, selector) {
    var parents = parent instanceof HTMLElement ? [parent] : parent;
    var allMatches = [];
    for (var i = 0; i < parents.length; i++) {
        var childNodes = parents[i].children; // only ever elements
        for (var j = 0; j < childNodes.length; j++) {
            var childNode = childNodes[j];
            if (!selector || elementMatches(childNode, selector)) {
                allMatches.push(childNode);
            }
        }
    }
    return allMatches;
}
// Attributes
// ----------------------------------------------------------------------------------------------------------------
function forceClassName(el, className, bool) {
    if (bool) {
        el.classList.add(className);
    }
    else {
        el.classList.remove(className);
    }
}
// Style
// ----------------------------------------------------------------------------------------------------------------
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
    for (var propName in props) {
        applyStyleProp(el, propName, props[propName]);
    }
}
function applyStyleProp(el, name, val) {
    if (val == null) {
        el.style[name] = '';
    }
    else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
        el.style[name] = val + 'px';
    }
    else {
        el.style[name] = val;
    }
}

function pointInsideRect(point, rect) {
    return point.left >= rect.left &&
        point.left < rect.right &&
        point.top >= rect.top &&
        point.top < rect.bottom;
}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
    var res = {
        left: Math.max(rect1.left, rect2.left),
        right: Math.min(rect1.right, rect2.right),
        top: Math.max(rect1.top, rect2.top),
        bottom: Math.min(rect1.bottom, rect2.bottom)
    };
    if (res.left < res.right && res.top < res.bottom) {
        return res;
    }
    return false;
}
function translateRect(rect, deltaX, deltaY) {
    return {
        left: rect.left + deltaX,
        right: rect.right + deltaX,
        top: rect.top + deltaY,
        bottom: rect.bottom + deltaY
    };
}
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
    return {
        left: Math.min(Math.max(point.left, rect.left), rect.right),
        top: Math.min(Math.max(point.top, rect.top), rect.bottom)
    };
}
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
    return {
        left: (rect.left + rect.right) / 2,
        top: (rect.top + rect.bottom) / 2
    };
}
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
    return {
        left: point1.left - point2.left,
        top: point1.top - point2.top
    };
}

// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side
var isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
    if (isRtlScrollbarOnLeft === null) {
        isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
    }
    return isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
    var outerEl = createElement('div', {
        style: {
            position: 'absolute',
            top: -1000,
            left: 0,
            border: 0,
            padding: 0,
            overflow: 'scroll',
            direction: 'rtl'
        }
    }, '<div></div>');
    document.body.appendChild(outerEl);
    var innerEl = outerEl.firstChild;
    var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
    removeElement(outerEl);
    return res;
}
// The scrollbar width computations in computeEdges are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width) {
    width = Math.max(0, width); // no negatives
    width = Math.round(width);
    return width;
}

function computeEdges(el, getPadding) {
    if (getPadding === void 0) { getPadding = false; }
    var computedStyle = window.getComputedStyle(el);
    var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
    var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
    var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
    var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
    // must use offset(Width|Height) because compatible with client(Width|Height)
    var scrollbarLeftRight = sanitizeScrollbarWidth(el.offsetWidth - el.clientWidth - borderLeft - borderRight);
    var scrollbarBottom = sanitizeScrollbarWidth(el.offsetHeight - el.clientHeight - borderTop - borderBottom);
    var res = {
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderTop: borderTop,
        borderBottom: borderBottom,
        scrollbarBottom: scrollbarBottom,
        scrollbarLeft: 0,
        scrollbarRight: 0
    };
    if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
        res.scrollbarLeft = scrollbarLeftRight;
    }
    else {
        res.scrollbarRight = scrollbarLeftRight;
    }
    if (getPadding) {
        res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
        res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
        res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
        res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
    }
    return res;
}
function computeInnerRect(el, goWithinPadding) {
    if (goWithinPadding === void 0) { goWithinPadding = false; }
    var outerRect = computeRect(el);
    var edges = computeEdges(el, goWithinPadding);
    var res = {
        left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
        right: outerRect.right - edges.borderRight - edges.scrollbarRight,
        top: outerRect.top + edges.borderTop,
        bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
    };
    if (goWithinPadding) {
        res.left += edges.paddingLeft;
        res.right -= edges.paddingRight;
        res.top += edges.paddingTop;
        res.bottom -= edges.paddingBottom;
    }
    return res;
}
function computeRect(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        right: rect.right + window.pageXOffset,
        bottom: rect.bottom + window.pageYOffset
    };
}
function computeViewportRect() {
    return {
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };
}
function computeHeightAndMargins(el) {
    return el.getBoundingClientRect().height + computeVMargins(el);
}
function computeVMargins(el) {
    var computed = window.getComputedStyle(el);
    return parseInt(computed.marginTop, 10) +
        parseInt(computed.marginBottom, 10);
}
// does not return window
function getClippingParents(el) {
    var parents = [];
    while (el instanceof HTMLElement) { // will stop when gets to document or null
        var computedStyle = window.getComputedStyle(el);
        if (computedStyle.position === 'fixed') {
            break;
        }
        if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
            parents.push(el);
        }
        el = el.parentNode;
    }
    return parents;
}
function computeClippingRect(el) {
    return getClippingParents(el)
        .map(function (el) {
        return computeInnerRect(el);
    })
        .concat(computeViewportRect())
        .reduce(function (rect0, rect1) {
        return intersectRects(rect0, rect1) || rect1; // should always intersect
    });
}

// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
    ev.preventDefault();
}
// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function listenBySelector(container, eventType, selector, handler) {
    function realHandler(ev) {
        var matchedChild = elementClosest(ev.target, selector);
        if (matchedChild) {
            handler.call(matchedChild, ev, matchedChild);
        }
    }
    container.addEventListener(eventType, realHandler);
    return function () {
        container.removeEventListener(eventType, realHandler);
    };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
    var currentMatchedChild;
    return listenBySelector(container, 'mouseover', selector, function (ev, matchedChild) {
        if (matchedChild !== currentMatchedChild) {
            currentMatchedChild = matchedChild;
            onMouseEnter(ev, matchedChild);
            var realOnMouseLeave_1 = function (ev) {
                currentMatchedChild = null;
                onMouseLeave(ev, matchedChild);
                matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
            };
            // listen to the next mouseleave, and then unattach
            matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
        }
    });
}
// Animation
// ----------------------------------------------------------------------------------------------------------------
var transitionEventNames = [
    'webkitTransitionEnd',
    'otransitionend',
    'oTransitionEnd',
    'msTransitionEnd',
    'transitionend'
];
// triggered only when the next single subsequent transition finishes
function whenTransitionDone(el, callback) {
    var realCallback = function (ev) {
        callback(ev);
        transitionEventNames.forEach(function (eventName) {
            el.removeEventListener(eventName, realCallback);
        });
    };
    transitionEventNames.forEach(function (eventName) {
        el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
    });
}

var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Adding
function addWeeks(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n * 7;
    return arrayToUtcDate(a);
}
function addDays(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n;
    return arrayToUtcDate(a);
}
function addMs(m, n) {
    var a = dateToUtcArray(m);
    a[6] += n;
    return arrayToUtcDate(a);
}
// Diffing (all return floats)
function diffWeeks(m0, m1) {
    return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}
function diffMinutes(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}
function diffSeconds(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 1000;
}
function diffDayAndTime(m0, m1) {
    var m0day = startOfDay(m0);
    var m1day = startOfDay(m1);
    return {
        years: 0,
        months: 0,
        days: Math.round(diffDays(m0day, m1day)),
        milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf())
    };
}
// Diffing Whole Units
function diffWholeWeeks(m0, m1) {
    var d = diffWholeDays(m0, m1);
    if (d !== null && d % 7 === 0) {
        return d / 7;
    }
    return null;
}
function diffWholeDays(m0, m1) {
    if (timeAsMs(m0) === timeAsMs(m1)) {
        return Math.round(diffDays(m0, m1));
    }
    return null;
}
// Start-Of
function startOfDay(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate()
    ]);
}
function startOfHour(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours()
    ]);
}
function startOfMinute(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes()
    ]);
}
function startOfSecond(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(),
        m.getUTCSeconds()
    ]);
}
// Week Computation
function weekOfYear(marker, dow, doy) {
    var y = marker.getUTCFullYear();
    var w = weekOfGivenYear(marker, y, dow, doy);
    if (w < 1) {
        return weekOfGivenYear(marker, y - 1, dow, doy);
    }
    var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
    if (nextW >= 1) {
        return Math.min(w, nextW);
    }
    return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
    var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
    var dayStart = startOfDay(marker);
    var days = Math.round(diffDays(firstWeekStart, dayStart));
    return Math.floor(days / 7) + 1; // zero-indexed
}
// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var fwd = 7 + dow - doy;
    // first-week day local weekday -- which local weekday is fwd
    var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
}
// Array Conversion
function dateToLocalArray(date) {
    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
}
function arrayToLocalDate(a) {
    return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
    a[3] || 0, a[4] || 0, a[5] || 0);
}
function dateToUtcArray(date) {
    return [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds()
    ];
}
function arrayToUtcDate(a) {
    // according to web standards (and Safari), a month index is required.
    // massage if only given a year.
    if (a.length === 1) {
        a = a.concat([0]);
    }
    return new Date(Date.UTC.apply(Date, a));
}
// Other Utils
function isValidDate(m) {
    return !isNaN(m.valueOf());
}
function timeAsMs(m) {
    return m.getUTCHours() * 1000 * 60 * 60 +
        m.getUTCMinutes() * 1000 * 60 +
        m.getUTCSeconds() * 1000 +
        m.getUTCMilliseconds();
}

var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
// Parsing and Creation
function createDuration(input, unit) {
    var _a;
    if (typeof input === 'string') {
        return parseString(input);
    }
    else if (typeof input === 'object' && input) { // non-null object
        return normalizeObject(input);
    }
    else if (typeof input === 'number') {
        return normalizeObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
    }
    else {
        return null;
    }
}
function parseString(s) {
    var m = PARSE_RE.exec(s);
    if (m) {
        var sign = m[1] ? -1 : 1;
        return {
            years: 0,
            months: 0,
            days: sign * (m[2] ? parseInt(m[2], 10) : 0),
            milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                (m[6] ? parseInt(m[6], 10) : 0) // ms
            )
        };
    }
    return null;
}
function normalizeObject(obj) {
    return {
        years: obj.years || obj.year || 0,
        months: obj.months || obj.month || 0,
        days: (obj.days || obj.day || 0) +
            getWeeksFromInput(obj) * 7,
        milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
            (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
            (obj.seconds || obj.second || 0) * 1000 + // seconds
            (obj.milliseconds || obj.millisecond || obj.ms || 0) // ms
    };
}
function getWeeksFromInput(obj) {
    return obj.weeks || obj.week || 0;
}
// Equality
function durationsEqual(d0, d1) {
    return d0.years === d1.years &&
        d0.months === d1.months &&
        d0.days === d1.days &&
        d0.milliseconds === d1.milliseconds;
}
function isSingleDay(dur) {
    return dur.years === 0 && dur.months === 0 && dur.days === 1 && dur.milliseconds === 0;
}
// Simple Math
function addDurations(d0, d1) {
    return {
        years: d0.years + d1.years,
        months: d0.months + d1.months,
        days: d0.days + d1.days,
        milliseconds: d0.milliseconds + d1.milliseconds
    };
}
function subtractDurations(d1, d0) {
    return {
        years: d1.years - d0.years,
        months: d1.months - d0.months,
        days: d1.days - d0.days,
        milliseconds: d1.milliseconds - d0.milliseconds
    };
}
function multiplyDuration(d, n) {
    return {
        years: d.years * n,
        months: d.months * n,
        days: d.days * n,
        milliseconds: d.milliseconds * n
    };
}
// Conversions
// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur) {
    return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
    return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
    return asRoughMs(dur) / 864e5;
}
function asRoughMinutes(dur) {
    return asRoughMs(dur) / (1000 * 60);
}
function asRoughSeconds(dur) {
    return asRoughMs(dur) / 1000;
}
function asRoughMs(dur) {
    return dur.years * (365 * 864e5) +
        dur.months * (30 * 864e5) +
        dur.days * 864e5 +
        dur.milliseconds;
}
// Advanced Math
function wholeDivideDurations(numerator, denominator) {
    var res = null;
    for (var i = 0; i < INTERNAL_UNITS.length; i++) {
        var unit = INTERNAL_UNITS[i];
        if (denominator[unit]) {
            var localRes = numerator[unit] / denominator[unit];
            if (!isInt(localRes) || (res !== null && res !== localRes)) {
                return null;
            }
            res = localRes;
        }
        else if (numerator[unit]) {
            // needs to divide by something but can't!
            return null;
        }
    }
    return res;
}
function greatestDurationDenominator(dur, dontReturnWeeks) {
    var ms = dur.milliseconds;
    if (ms) {
        if (ms % 1000 !== 0) {
            return { unit: 'millisecond', value: ms };
        }
        if (ms % (1000 * 60) !== 0) {
            return { unit: 'second', value: ms / 1000 };
        }
        if (ms % (1000 * 60 * 60) !== 0) {
            return { unit: 'minute', value: ms / (1000 * 60) };
        }
        if (ms) {
            return { unit: 'hour', value: ms / (1000 * 60 * 60) };
        }
    }
    if (dur.days) {
        if (!dontReturnWeeks && dur.days % 7 === 0) {
            return { unit: 'week', value: dur.days / 7 };
        }
        return { unit: 'day', value: dur.days };
    }
    if (dur.months) {
        return { unit: 'month', value: dur.months };
    }
    if (dur.years) {
        return { unit: 'year', value: dur.years };
    }
    return { unit: 'millisecond', value: 0 };
}

/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEl, scrollbarWidths) {
    if (scrollbarWidths.left) {
        applyStyle(rowEl, {
            borderLeftWidth: 1,
            marginLeft: scrollbarWidths.left - 1
        });
    }
    if (scrollbarWidths.right) {
        applyStyle(rowEl, {
            borderRightWidth: 1,
            marginRight: scrollbarWidths.right - 1
        });
    }
}
// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEl) {
    applyStyle(rowEl, {
        marginLeft: '',
        marginRight: '',
        borderLeftWidth: '',
        borderRightWidth: ''
    });
}
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
    document.body.classList.add('fc-not-allowed');
}
// Returns the mouse cursor to its original look
function enableCursor() {
    document.body.classList.remove('fc-not-allowed');
}
// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {
    // *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
    // and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.
    var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
    var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
    var flexEls = []; // elements that are allowed to expand. array of DOM nodes
    var flexOffsets = []; // amount of vertical space it takes up
    var flexHeights = []; // actual css height
    var usedHeight = 0;
    undistributeHeight(els); // give all elements their natural height
    // find elements that are below the recommended height (expandable).
    // important to query for heights in a single first pass (to avoid reflow oscillation).
    els.forEach(function (el, i) {
        var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
        var naturalHeight = el.getBoundingClientRect().height;
        var naturalOffset = naturalHeight + computeVMargins(el);
        if (naturalOffset < minOffset) {
            flexEls.push(el);
            flexOffsets.push(naturalOffset);
            flexHeights.push(naturalHeight);
        }
        else {
            // this element stretches past recommended height (non-expandable). mark the space as occupied.
            usedHeight += naturalOffset;
        }
    });
    // readjust the recommended height to only consider the height available to non-maxed-out rows.
    if (shouldRedistribute) {
        availableHeight -= usedHeight;
        minOffset1 = Math.floor(availableHeight / flexEls.length);
        minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
    }
    // assign heights to all expandable elements
    flexEls.forEach(function (el, i) {
        var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
        var naturalOffset = flexOffsets[i];
        var naturalHeight = flexHeights[i];
        var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding
        if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
            el.style.height = newHeight + 'px';
        }
    });
}
// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
    els.forEach(function (el) {
        el.style.height = '';
    });
}
// Given `els`, a set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
    var maxInnerWidth = 0;
    els.forEach(function (el) {
        var innerEl = el.firstChild; // hopefully an element
        if (innerEl instanceof HTMLElement) {
            var innerWidth_1 = innerEl.getBoundingClientRect().width;
            if (innerWidth_1 > maxInnerWidth) {
                maxInnerWidth = innerWidth_1;
            }
        }
    });
    maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance
    els.forEach(function (el) {
        el.style.width = maxInnerWidth + 'px';
    });
    return maxInnerWidth;
}
// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
    // effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
    var reflowStyleProps = {
        position: 'relative',
        left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
    };
    applyStyle(outerEl, reflowStyleProps);
    applyStyle(innerEl, reflowStyleProps);
    var diff = // grab the dimensions
     outerEl.getBoundingClientRect().height -
        innerEl.getBoundingClientRect().height;
    // undo hack
    var resetStyleProps = { position: '', left: '' };
    applyStyle(outerEl, resetStyleProps);
    applyStyle(innerEl, resetStyleProps);
    return diff;
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/
function preventSelection(el) {
    el.classList.add('fc-unselectable');
    el.addEventListener('selectstart', preventDefault);
}
function allowSelection(el) {
    el.classList.remove('fc-unselectable');
    el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/
function preventContextMenu(el) {
    el.addEventListener('contextmenu', preventDefault);
}
function allowContextMenu(el) {
    el.removeEventListener('contextmenu', preventDefault);
}
/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/
function parseFieldSpecs(input) {
    var specs = [];
    var tokens = [];
    var i;
    var token;
    if (typeof input === 'string') {
        tokens = input.split(/\s*,\s*/);
    }
    else if (typeof input === 'function') {
        tokens = [input];
    }
    else if (Array.isArray(input)) {
        tokens = input;
    }
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        if (typeof token === 'string') {
            specs.push(token.charAt(0) === '-' ?
                { field: token.substring(1), order: -1 } :
                { field: token, order: 1 });
        }
        else if (typeof token === 'function') {
            specs.push({ func: token });
        }
    }
    return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
    var i;
    var cmp;
    for (i = 0; i < fieldSpecs.length; i++) {
        cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
        if (cmp) {
            return cmp;
        }
    }
    return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
    if (fieldSpec.func) {
        return fieldSpec.func(obj0, obj1);
    }
    return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
        * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
    if (!a && !b) {
        return 0;
    }
    if (b == null) {
        return -1;
    }
    if (a == null) {
        return 1;
    }
    if (typeof a === 'string' || typeof b === 'string') {
        return String(a).localeCompare(String(b));
    }
    return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/
function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function padStart(val, len) {
    var s = String(val);
    return '000'.substr(0, len - s.length) + s;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/
function compareNumbers(a, b) {
    return a - b;
}
function isInt(n) {
    return n % 1 === 0;
}
/* Weird Utilities
----------------------------------------------------------------------------------------------------------------------*/
function applyAll(functions, thisObj, args) {
    if (typeof functions === 'function') { // supplied a single function
        functions = [functions];
    }
    if (functions) {
        var i = void 0;
        var ret = void 0;
        for (i = 0; i < functions.length; i++) {
            ret = functions[i].apply(thisObj, args) || ret;
        }
        return ret;
    }
}
function firstDefined() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait) {
    var timeout;
    var args;
    var context;
    var timestamp;
    var result;
    var later = function () {
        var last = new Date().valueOf() - timestamp;
        if (last < wait) {
            timeout = setTimeout(later, wait - last);
        }
        else {
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        }
    };
    return function () {
        context = this;
        args = arguments;
        timestamp = new Date().valueOf();
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        return result;
    };
}
// Number and Boolean are only types that defaults or not computed for
// TODO: write more comments
function refineProps(rawProps, processors, defaults, leftoverProps) {
    if (defaults === void 0) { defaults = {}; }
    var refined = {};
    for (var key in processors) {
        var processor = processors[key];
        if (rawProps[key] !== undefined) {
            // found
            if (processor === Function) {
                refined[key] = typeof rawProps[key] === 'function' ? rawProps[key] : null;
            }
            else if (processor) { // a refining function?
                refined[key] = processor(rawProps[key]);
            }
            else {
                refined[key] = rawProps[key];
            }
        }
        else if (defaults[key] !== undefined) {
            // there's an explicit default
            refined[key] = defaults[key];
        }
        else {
            // must compute a default
            if (processor === String) {
                refined[key] = ''; // empty string is default for String
            }
            else if (!processor || processor === Number || processor === Boolean || processor === Function) {
                refined[key] = null; // assign null for other non-custom processor funcs
            }
            else {
                refined[key] = processor(null); // run the custom processor func
            }
        }
    }
    if (leftoverProps) {
        for (var key in rawProps) {
            if (processors[key] === undefined) {
                leftoverProps[key] = rawProps[key];
            }
        }
    }
    return refined;
}
/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange) {
    var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
    var start = startOfDay(timedRange.start);
    var end = addDays(start, dayCnt);
    return { start: start, end: end };
}
// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange, nextDayThreshold) {
    if (nextDayThreshold === void 0) { nextDayThreshold = createDuration(0); }
    var startDay = null;
    var endDay = null;
    if (timedRange.end) {
        endDay = startOfDay(timedRange.end);
        var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
        // If the end time is actually inclusively part of the next day and is equal to or
        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
        if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
            endDay = addDays(endDay, 1);
        }
    }
    if (timedRange.start) {
        startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
        if (endDay && endDay <= startDay) {
            endDay = addDays(startDay, 1);
        }
    }
    return { start: startDay, end: endDay };
}
// spans from one day into another?
function isMultiDayRange(range) {
    var visibleRange = computeVisibleDayRange(range);
    return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
    if (largeUnit === 'year') {
        return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
    }
    else if (largeUnit === 'month') {
        return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
    }
    else {
        return diffDayAndTime(date0, date1); // returns a duration
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

function parseRecurring(eventInput, allDayDefault, dateEnv, recurringTypes, leftovers) {
    for (var i = 0; i < recurringTypes.length; i++) {
        var localLeftovers = {};
        var parsed = recurringTypes[i].parse(eventInput, localLeftovers, dateEnv);
        if (parsed) {
            var allDay = localLeftovers.allDay;
            delete localLeftovers.allDay; // remove from leftovers
            if (allDay == null) {
                allDay = allDayDefault;
                if (allDay == null) {
                    allDay = parsed.allDayGuess;
                    if (allDay == null) {
                        allDay = false;
                    }
                }
            }
            __assign(leftovers, localLeftovers);
            return {
                allDay: allDay,
                duration: parsed.duration,
                typeData: parsed.typeData,
                typeId: i
            };
        }
    }
    return null;
}
/*
Event MUST have a recurringDef
*/
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
    var typeDef = recurringTypes[eventDef.recurringDef.typeId];
    var markers = typeDef.expand(eventDef.recurringDef.typeData, {
        start: dateEnv.subtract(framingRange.start, duration),
        end: framingRange.end
    }, dateEnv);
    // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
    if (eventDef.allDay) {
        markers = markers.map(startOfDay);
    }
    return markers;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
    var dest = {};
    var i;
    var name;
    var complexObjs;
    var j;
    var val;
    var props;
    if (complexProps) {
        for (i = 0; i < complexProps.length; i++) {
            name = complexProps[i];
            complexObjs = [];
            // collect the trailing object values, stopping when a non-object is discovered
            for (j = propObjs.length - 1; j >= 0; j--) {
                val = propObjs[j][name];
                if (typeof val === 'object' && val) { // non-null object
                    complexObjs.unshift(val);
                }
                else if (val !== undefined) {
                    dest[name] = val; // if there were no objects, this value will be used
                    break;
                }
            }
            // if the trailing values were objects, use the merged value
            if (complexObjs.length) {
                dest[name] = mergeProps(complexObjs);
            }
        }
    }
    // copy values into the destination, going from last to first
    for (i = propObjs.length - 1; i >= 0; i--) {
        props = propObjs[i];
        for (name in props) {
            if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
                dest[name] = props[name];
            }
        }
    }
    return dest;
}
function filterHash(hash, func) {
    var filtered = {};
    for (var key in hash) {
        if (func(hash[key], key)) {
            filtered[key] = hash[key];
        }
    }
    return filtered;
}
function mapHash(hash, func) {
    var newHash = {};
    for (var key in hash) {
        newHash[key] = func(hash[key], key);
    }
    return newHash;
}
function arrayToHash(a) {
    var hash = {};
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var item = a_1[_i];
        hash[item] = true;
    }
    return hash;
}
function hashValuesToArray(obj) {
    var a = [];
    for (var key in obj) {
        a.push(obj[key]);
    }
    return a;
}
function isPropsEqual(obj0, obj1) {
    for (var key in obj0) {
        if (hasOwnProperty.call(obj0, key)) {
            if (!(key in obj1)) {
                return false;
            }
        }
    }
    for (var key in obj1) {
        if (hasOwnProperty.call(obj1, key)) {
            if (obj0[key] !== obj1[key]) {
                return false;
            }
        }
    }
    return true;
}

function parseEvents(rawEvents, sourceId, calendar, allowOpenRange) {
    var eventStore = createEmptyEventStore();
    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
        var rawEvent = rawEvents_1[_i];
        var tuple = parseEvent(rawEvent, sourceId, calendar, allowOpenRange);
        if (tuple) {
            eventTupleToStore(tuple, eventStore);
        }
    }
    return eventStore;
}
function eventTupleToStore(tuple, eventStore) {
    if (eventStore === void 0) { eventStore = createEmptyEventStore(); }
    eventStore.defs[tuple.def.defId] = tuple.def;
    if (tuple.instance) {
        eventStore.instances[tuple.instance.instanceId] = tuple.instance;
    }
    return eventStore;
}
function expandRecurring(eventStore, framingRange, calendar) {
    var dateEnv = calendar.dateEnv;
    var defs = eventStore.defs, instances = eventStore.instances;
    // remove existing recurring instances
    instances = filterHash(instances, function (instance) {
        return !defs[instance.defId].recurringDef;
    });
    for (var defId in defs) {
        var def = defs[defId];
        if (def.recurringDef) {
            var duration = def.recurringDef.duration;
            if (!duration) {
                duration = def.allDay ?
                    calendar.defaultAllDayEventDuration :
                    calendar.defaultTimedEventDuration;
            }
            var starts = expandRecurringRanges(def, duration, framingRange, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes);
            for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
                var start = starts_1[_i];
                var instance = createEventInstance(defId, {
                    start: start,
                    end: dateEnv.add(start, duration)
                });
                instances[instance.instanceId] = instance;
            }
        }
    }
    return { defs: defs, instances: instances };
}
// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore, instanceId) {
    var instance = eventStore.instances[instanceId];
    if (instance) {
        var def_1 = eventStore.defs[instance.defId];
        // get events/instances with same group
        var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
            return isEventDefsGrouped(def_1, lookDef);
        });
        // add the original
        // TODO: wish we could use eventTupleToStore or something like it
        newStore.defs[def_1.defId] = def_1;
        newStore.instances[instance.instanceId] = instance;
        return newStore;
    }
    return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
    return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function transformRawEvents(rawEvents, eventSource, calendar) {
    var calEachTransform = calendar.opt('eventDataTransform');
    var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
    if (sourceEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
    }
    if (calEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
    }
    return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
    var refinedEvents;
    if (!func) {
        refinedEvents = rawEvents;
    }
    else {
        refinedEvents = [];
        for (var _i = 0, rawEvents_2 = rawEvents; _i < rawEvents_2.length; _i++) {
            var rawEvent = rawEvents_2[_i];
            var refinedEvent = func(rawEvent);
            if (refinedEvent) {
                refinedEvents.push(refinedEvent);
            }
            else if (refinedEvent == null) {
                refinedEvents.push(rawEvent);
            } // if a different falsy value, do nothing
        }
    }
    return refinedEvents;
}
function createEmptyEventStore() {
    return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
    return {
        defs: __assign({}, store0.defs, store1.defs),
        instances: __assign({}, store0.instances, store1.instances)
    };
}
function filterEventStoreDefs(eventStore, filterFunc) {
    var defs = filterHash(eventStore.defs, filterFunc);
    var instances = filterHash(eventStore.instances, function (instance) {
        return defs[instance.defId]; // still exists?
    });
    return { defs: defs, instances: instances };
}

function parseRange(input, dateEnv) {
    var start = null;
    var end = null;
    if (input.start) {
        start = dateEnv.createMarker(input.start);
    }
    if (input.end) {
        end = dateEnv.createMarker(input.end);
    }
    if (!start && !end) {
        return null;
    }
    if (start && end && end < start) {
        return null;
    }
    return { start: start, end: end };
}
// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges, constraintRange) {
    var invertedRanges = [];
    var start = constraintRange.start; // the end of the previous range. the start of the new range
    var i;
    var dateRange;
    // ranges need to be in order. required for our date-walking algorithm
    ranges.sort(compareRanges);
    for (i = 0; i < ranges.length; i++) {
        dateRange = ranges[i];
        // add the span of time before the event (if there is any)
        if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start: start, end: dateRange.start });
        }
        if (dateRange.end > start) {
            start = dateRange.end;
        }
    }
    // add the span of time after the last event (if there is any)
    if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
        invertedRanges.push({ start: start, end: constraintRange.end });
    }
    return invertedRanges;
}
function compareRanges(range0, range1) {
    return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}
function intersectRanges(range0, range1) {
    var start = range0.start;
    var end = range0.end;
    var newRange = null;
    if (range1.start !== null) {
        if (start === null) {
            start = range1.start;
        }
        else {
            start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
        }
    }
    if (range1.end != null) {
        if (end === null) {
            end = range1.end;
        }
        else {
            end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
        }
    }
    if (start === null || end === null || start < end) {
        newRange = { start: start, end: end };
    }
    return newRange;
}
function rangesEqual(range0, range1) {
    return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
        (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
    return (range0.end === null || range1.start === null || range0.end > range1.start) &&
        (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
    return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
        (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
}
function rangeContainsMarker(range, date) {
    return (range.start === null || date >= range.start) &&
        (range.end === null || date < range.end);
}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date, range) {
    if (range.start != null && date < range.start) {
        return range.start;
    }
    if (range.end != null && date >= range.end) {
        return new Date(range.end.valueOf() - 1);
    }
    return date;
}

function removeExact(array, exactVal) {
    var removeCnt = 0;
    var i = 0;
    while (i < array.length) {
        if (array[i] === exactVal) {
            array.splice(i, 1);
            removeCnt++;
        }
        else {
            i++;
        }
    }
    return removeCnt;
}
function isArraysEqual(a0, a1) {
    var len = a0.length;
    var i;
    if (len !== a1.length) { // not array? or not same length?
        return false;
    }
    for (i = 0; i < len; i++) {
        if (a0[i] !== a1[i]) {
            return false;
        }
    }
    return true;
}

function memoize(workerFunc) {
    var args;
    var res;
    return function () {
        if (!args || !isArraysEqual(args, arguments)) {
            args = arguments;
            res = workerFunc.apply(this, arguments);
        }
        return res;
    };
}
/*
always executes the workerFunc, but if the result is equal to the previous result,
return the previous result instead.
*/
function memoizeOutput(workerFunc, equalityFunc) {
    var cachedRes = null;
    return function () {
        var newRes = workerFunc.apply(this, arguments);
        if (cachedRes === null || !(cachedRes === newRes || equalityFunc(cachedRes, newRes))) {
            cachedRes = newRes;
        }
        return cachedRes;
    };
}

var EXTENDED_SETTINGS_AND_SEVERITIES = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
var COMMA_RE = /,/g; // we need re for globalness
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character
var UTC_RE = /UTC|GMT/;
var NativeFormatter = /** @class */ (function () {
    function NativeFormatter(formatSettings) {
        var standardDateProps = {};
        var extendedSettings = {};
        var severity = 0;
        for (var name_1 in formatSettings) {
            if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
                extendedSettings[name_1] = formatSettings[name_1];
                severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
            }
            else {
                standardDateProps[name_1] = formatSettings[name_1];
                if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
                    severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
                }
            }
        }
        this.standardDateProps = standardDateProps;
        this.extendedSettings = extendedSettings;
        this.severity = severity;
        this.buildFormattingFunc = memoize(buildFormattingFunc);
    }
    NativeFormatter.prototype.format = function (date, context) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
    };
    NativeFormatter.prototype.formatRange = function (start, end, context) {
        var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
        var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
        if (!diffSeverity) {
            return this.format(start, context);
        }
        var biggestUnitForPartial = diffSeverity;
        if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
            (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
            (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
            (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
            biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
        }
        var full0 = this.format(start, context);
        var full1 = this.format(end, context);
        if (full0 === full1) {
            return full0;
        }
        var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
        var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
        var partial0 = partialFormattingFunc(start);
        var partial1 = partialFormattingFunc(end);
        var insertion = findCommonInsertion(full0, partial0, full1, partial1);
        var separator = extendedSettings.separator || '';
        if (insertion) {
            return insertion.before + partial0 + separator + partial1 + insertion.after;
        }
        return full0 + separator + full1;
    };
    NativeFormatter.prototype.getLargestUnit = function () {
        switch (this.severity) {
            case 7:
            case 6:
            case 5:
                return 'year';
            case 4:
                return 'month';
            case 3:
                return 'week';
            default:
                return 'day';
        }
    };
    return NativeFormatter;
}());
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
    var standardDatePropCnt = Object.keys(standardDateProps).length;
    if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
        return function (date) {
            return formatTimeZoneOffset(date.timeZoneOffset);
        };
    }
    if (standardDatePropCnt === 0 && extendedSettings.week) {
        return function (date) {
            return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekLabel, context.locale, extendedSettings.week);
        };
    }
    return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
    standardDateProps = __assign({}, standardDateProps); // copy
    extendedSettings = __assign({}, extendedSettings); // copy
    sanitizeSettings(standardDateProps, extendedSettings);
    standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
    var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
    var zeroFormat; // needed?
    if (extendedSettings.omitZeroMinute) {
        var zeroProps = __assign({}, standardDateProps);
        delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
        zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
    }
    return function (date) {
        var marker = date.marker;
        var format;
        if (zeroFormat && !marker.getUTCMinutes()) {
            format = zeroFormat;
        }
        else {
            format = normalFormat;
        }
        var s = format.format(marker);
        return postProcess(s, date, standardDateProps, extendedSettings, context);
    };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
    // deal with a browser inconsistency where formatting the timezone
    // requires that the hour/minute be present.
    if (standardDateProps.timeZoneName) {
        if (!standardDateProps.hour) {
            standardDateProps.hour = '2-digit';
        }
        if (!standardDateProps.minute) {
            standardDateProps.minute = '2-digit';
        }
    }
    // only support short timezone names
    if (standardDateProps.timeZoneName === 'long') {
        standardDateProps.timeZoneName = 'short';
    }
    // if requesting to display seconds, MUST display minutes
    if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
        delete extendedSettings.omitZeroMinute;
    }
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
    s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
    if (standardDateProps.timeZoneName === 'short') {
        s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
            'UTC' : // important to normalize for IE, which does "GMT"
            formatTimeZoneOffset(date.timeZoneOffset));
    }
    if (extendedSettings.omitCommas) {
        s = s.replace(COMMA_RE, '').trim();
    }
    if (extendedSettings.omitZeroMinute) {
        s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
    }
    // ^ do anything that might create adjacent spaces before this point,
    // because MERIDIEM_RE likes to eat up loading spaces
    if (extendedSettings.meridiem === false) {
        s = s.replace(MERIDIEM_RE, '').trim();
    }
    else if (extendedSettings.meridiem === 'narrow') { // a/p
        s = s.replace(MERIDIEM_RE, function (m0, m1) {
            return m1.toLocaleLowerCase();
        });
    }
    else if (extendedSettings.meridiem === 'short') { // am/pm
        s = s.replace(MERIDIEM_RE, function (m0, m1) {
            return m1.toLocaleLowerCase() + 'm';
        });
    }
    else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
        s = s.replace(MERIDIEM_RE, function (m0) {
            return m0.toLocaleLowerCase();
        });
    }
    s = s.replace(MULTI_SPACE_RE, ' ');
    s = s.trim();
    return s;
}
function injectTzoStr(s, tzoStr) {
    var replaced = false;
    s = s.replace(UTC_RE, function () {
        replaced = true;
        return tzoStr;
    });
    // IE11 doesn't include UTC/GMT in the original string, so append to end
    if (!replaced) {
        s += ' ' + tzoStr;
    }
    return s;
}
function formatWeekNumber(num, weekLabel, locale, display) {
    var parts = [];
    if (display === 'narrow') {
        parts.push(weekLabel);
    }
    else if (display === 'short') {
        parts.push(weekLabel, ' ');
    }
    // otherwise, considered 'numeric'
    parts.push(locale.simpleNumberFormat.format(num));
    if (locale.options.isRtl) { // TODO: use control characters instead?
        parts.reverse();
    }
    return parts.join('');
}
// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0, d1, ca) {
    if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
        return 5;
    }
    if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
        return 4;
    }
    if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
        return 2;
    }
    if (timeAsMs(d0) !== timeAsMs(d1)) {
        return 1;
    }
    return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
    var partialOptions = {};
    for (var name_2 in options) {
        if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
            STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
            partialOptions[name_2] = options[name_2];
        }
    }
    return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
    var i0 = 0;
    while (i0 < full0.length) {
        var found0 = full0.indexOf(partial0, i0);
        if (found0 === -1) {
            break;
        }
        var before0 = full0.substr(0, found0);
        i0 = found0 + partial0.length;
        var after0 = full0.substr(i0);
        var i1 = 0;
        while (i1 < full1.length) {
            var found1 = full1.indexOf(partial1, i1);
            if (found1 === -1) {
                break;
            }
            var before1 = full1.substr(0, found1);
            i1 = found1 + partial1.length;
            var after1 = full1.substr(i1);
            if (before0 === before1 && after0 === after1) {
                return {
                    before: before0,
                    after: after0
                };
            }
        }
    }
    return null;
}

/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/
/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/
var CmdFormatter = /** @class */ (function () {
    function CmdFormatter(cmdStr, separator) {
        this.cmdStr = cmdStr;
        this.separator = separator;
    }
    CmdFormatter.prototype.format = function (date, context) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, this.separator));
    };
    CmdFormatter.prototype.formatRange = function (start, end, context) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, this.separator));
    };
    return CmdFormatter;
}());

var FuncFormatter = /** @class */ (function () {
    function FuncFormatter(func) {
        this.func = func;
    }
    FuncFormatter.prototype.format = function (date, context) {
        return this.func(createVerboseFormattingArg(date, null, context));
    };
    FuncFormatter.prototype.formatRange = function (start, end, context) {
        return this.func(createVerboseFormattingArg(start, end, context));
    };
    return FuncFormatter;
}());

// Formatter Object Creation
function createFormatter(input, defaultSeparator) {
    if (typeof input === 'object' && input) { // non-null object
        if (typeof defaultSeparator === 'string') {
            input = __assign({ separator: defaultSeparator }, input);
        }
        return new NativeFormatter(input);
    }
    else if (typeof input === 'string') {
        return new CmdFormatter(input, defaultSeparator);
    }
    else if (typeof input === 'function') {
        return new FuncFormatter(input);
    }
}
// String Utils
// timeZoneOffset is in minutes
function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
    if (stripZeroTime === void 0) { stripZeroTime = false; }
    var s = marker.toISOString();
    s = s.replace('.000', '');
    if (stripZeroTime) {
        s = s.replace('T00:00:00Z', '');
    }
    if (s.length > 10) { // time part wasn't stripped, can add timezone info
        if (timeZoneOffset == null) {
            s = s.replace('Z', '');
        }
        else if (timeZoneOffset !== 0) {
            s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
        }
        // otherwise, its UTC-0 and we want to keep the Z
    }
    return s;
}
function formatIsoTimeString(marker) {
    return padStart(marker.getUTCHours(), 2) + ':' +
        padStart(marker.getUTCMinutes(), 2) + ':' +
        padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes, doIso) {
    if (doIso === void 0) { doIso = false; }
    var sign = minutes < 0 ? '-' : '+';
    var abs = Math.abs(minutes);
    var hours = Math.floor(abs / 60);
    var mins = Math.round(abs % 60);
    if (doIso) {
        return sign + padStart(hours, 2) + ':' + padStart(mins, 2);
    }
    else {
        return 'GMT' + sign + hours + (mins ? ':' + padStart(mins, 2) : '');
    }
}
// Arg Utils
function createVerboseFormattingArg(start, end, context, separator) {
    var startInfo = expandZonedMarker(start, context.calendarSystem);
    var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
    return {
        date: startInfo,
        start: startInfo,
        end: endInfo,
        timeZone: context.timeZone,
        localeCodes: context.locale.codes,
        separator: separator
    };
}
function expandZonedMarker(dateInfo, calendarSystem) {
    var a = calendarSystem.markerToArray(dateInfo.marker);
    return {
        marker: dateInfo.marker,
        timeZoneOffset: dateInfo.timeZoneOffset,
        array: a,
        year: a[0],
        month: a[1],
        day: a[2],
        hour: a[3],
        minute: a[4],
        second: a[5],
        millisecond: a[6]
    };
}

var EventSourceApi = /** @class */ (function () {
    function EventSourceApi(calendar, internalEventSource) {
        this.calendar = calendar;
        this.internalEventSource = internalEventSource;
    }
    EventSourceApi.prototype.remove = function () {
        this.calendar.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: this.internalEventSource.sourceId
        });
    };
    EventSourceApi.prototype.refetch = function () {
        this.calendar.dispatch({
            type: 'FETCH_EVENT_SOURCES',
            sourceIds: [this.internalEventSource.sourceId]
        });
    };
    Object.defineProperty(EventSourceApi.prototype, "id", {
        get: function () {
            return this.internalEventSource.publicId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventSourceApi.prototype, "url", {
        // only relevant to json-feed event sources
        get: function () {
            return this.internalEventSource.meta.url;
        },
        enumerable: true,
        configurable: true
    });
    return EventSourceApi;
}());

var EventApi = /** @class */ (function () {
    function EventApi(calendar, def, instance) {
        this._calendar = calendar;
        this._def = def;
        this._instance = instance || null;
    }
    /*
    TODO: make event struct more responsible for this
    */
    EventApi.prototype.setProp = function (name, val) {
        var _a, _b;
        if (name in DATE_PROPS) ;
        else if (name in NON_DATE_PROPS) {
            if (typeof NON_DATE_PROPS[name] === 'function') {
                val = NON_DATE_PROPS[name](val);
            }
            this.mutate({
                standardProps: (_a = {}, _a[name] = val, _a)
            });
        }
        else if (name in UNSCOPED_EVENT_UI_PROPS) {
            var ui = void 0;
            if (typeof UNSCOPED_EVENT_UI_PROPS[name] === 'function') {
                val = UNSCOPED_EVENT_UI_PROPS[name](val);
            }
            if (name === 'color') {
                ui = { backgroundColor: val, borderColor: val };
            }
            else if (name === 'editable') {
                ui = { startEditable: val, durationEditable: val };
            }
            else {
                ui = (_b = {}, _b[name] = val, _b);
            }
            this.mutate({
                standardProps: { ui: ui }
            });
        }
    };
    EventApi.prototype.setExtendedProp = function (name, val) {
        var _a;
        this.mutate({
            extendedProps: (_a = {}, _a[name] = val, _a)
        });
    };
    EventApi.prototype.setStart = function (startInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._calendar.dateEnv;
        var start = dateEnv.createMarker(startInput);
        if (start && this._instance) { // TODO: warning if parsed bad
            var instanceRange = this._instance.range;
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
            if (options.maintainDuration) {
                this.mutate({ datesDelta: startDelta });
            }
            else {
                this.mutate({ startDelta: startDelta });
            }
        }
    };
    EventApi.prototype.setEnd = function (endInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._calendar.dateEnv;
        var end;
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) {
                return; // TODO: warning if parsed bad
            }
        }
        if (this._instance) {
            if (end) {
                var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                this.mutate({ endDelta: endDelta });
            }
            else {
                this.mutate({ standardProps: { hasEnd: false } });
            }
        }
    };
    EventApi.prototype.setDates = function (startInput, endInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._calendar.dateEnv;
        var standardProps = { allDay: options.allDay };
        var start = dateEnv.createMarker(startInput);
        var end;
        if (!start) {
            return; // TODO: warning if parsed bad
        }
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) { // TODO: warning if parsed bad
                return;
            }
        }
        if (this._instance) {
            var instanceRange = this._instance.range;
            // when computing the diff for an event being converted to all-day,
            // compute diff off of the all-day values the way event-mutation does.
            if (options.allDay === true) {
                instanceRange = computeAlignedDayRange(instanceRange);
            }
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
            if (end) {
                var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                if (durationsEqual(startDelta, endDelta)) {
                    this.mutate({ datesDelta: startDelta, standardProps: standardProps });
                }
                else {
                    this.mutate({ startDelta: startDelta, endDelta: endDelta, standardProps: standardProps });
                }
            }
            else { // means "clear the end"
                standardProps.hasEnd = false;
                this.mutate({ datesDelta: startDelta, standardProps: standardProps });
            }
        }
    };
    EventApi.prototype.moveStart = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ startDelta: delta });
        }
    };
    EventApi.prototype.moveEnd = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ endDelta: delta });
        }
    };
    EventApi.prototype.moveDates = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ datesDelta: delta });
        }
    };
    EventApi.prototype.setAllDay = function (allDay, options) {
        if (options === void 0) { options = {}; }
        var standardProps = { allDay: allDay };
        var maintainDuration = options.maintainDuration;
        if (maintainDuration == null) {
            maintainDuration = this._calendar.opt('allDayMaintainDuration');
        }
        if (this._def.allDay !== allDay) {
            standardProps.hasEnd = maintainDuration;
        }
        this.mutate({ standardProps: standardProps });
    };
    EventApi.prototype.formatRange = function (formatInput) {
        var dateEnv = this._calendar.dateEnv;
        var instance = this._instance;
        var formatter = createFormatter(formatInput, this._calendar.opt('defaultRangeSeparator'));
        if (this._def.hasEnd) {
            return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                forcedStartTzo: instance.forcedStartTzo,
                forcedEndTzo: instance.forcedEndTzo
            });
        }
        else {
            return dateEnv.format(instance.range.start, formatter, {
                forcedTzo: instance.forcedStartTzo
            });
        }
    };
    EventApi.prototype.mutate = function (mutation) {
        var def = this._def;
        var instance = this._instance;
        if (instance) {
            this._calendar.dispatch({
                type: 'MUTATE_EVENTS',
                instanceId: instance.instanceId,
                mutation: mutation,
                fromApi: true
            });
            var eventStore = this._calendar.state.eventStore;
            this._def = eventStore.defs[def.defId];
            this._instance = eventStore.instances[instance.instanceId];
        }
    };
    EventApi.prototype.remove = function () {
        this._calendar.dispatch({
            type: 'REMOVE_EVENT_DEF',
            defId: this._def.defId
        });
    };
    Object.defineProperty(EventApi.prototype, "source", {
        get: function () {
            var sourceId = this._def.sourceId;
            if (sourceId) {
                return new EventSourceApi(this._calendar, this._calendar.state.eventSources[sourceId]);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "start", {
        get: function () {
            return this._instance ?
                this._calendar.dateEnv.toDate(this._instance.range.start) :
                null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "end", {
        get: function () {
            return (this._instance && this._def.hasEnd) ?
                this._calendar.dateEnv.toDate(this._instance.range.end) :
                null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "id", {
        // computable props that all access the def
        // TODO: find a TypeScript-compatible way to do this at scale
        get: function () { return this._def.publicId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "groupId", {
        get: function () { return this._def.groupId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "allDay", {
        get: function () { return this._def.allDay; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "title", {
        get: function () { return this._def.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "url", {
        get: function () { return this._def.url; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "rendering", {
        get: function () { return this._def.rendering; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "startEditable", {
        get: function () { return this._def.ui.startEditable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "durationEditable", {
        get: function () { return this._def.ui.durationEditable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "constraint", {
        get: function () { return this._def.ui.constraints[0] || null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "overlap", {
        get: function () { return this._def.ui.overlap; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "allow", {
        get: function () { return this._def.ui.allows[0] || null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "backgroundColor", {
        get: function () { return this._def.ui.backgroundColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "borderColor", {
        get: function () { return this._def.ui.borderColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "textColor", {
        get: function () { return this._def.ui.textColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "classNames", {
        // NOTE: user can't modify these because Object.freeze was called in event-def parsing
        get: function () { return this._def.ui.classNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "extendedProps", {
        get: function () { return this._def.extendedProps; },
        enumerable: true,
        configurable: true
    });
    return EventApi;
}());

/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
    var inverseBgByGroupId = {};
    var inverseBgByDefId = {};
    var defByGroupId = {};
    var bgRanges = [];
    var fgRanges = [];
    var eventUis = compileEventUis(eventStore.defs, eventUiBases);
    for (var defId in eventStore.defs) {
        var def = eventStore.defs[defId];
        if (def.rendering === 'inverse-background') {
            if (def.groupId) {
                inverseBgByGroupId[def.groupId] = [];
                if (!defByGroupId[def.groupId]) {
                    defByGroupId[def.groupId] = def;
                }
            }
            else {
                inverseBgByDefId[defId] = [];
            }
        }
    }
    for (var instanceId in eventStore.instances) {
        var instance = eventStore.instances[instanceId];
        var def = eventStore.defs[instance.defId];
        var ui = eventUis[def.defId];
        var origRange = instance.range;
        var normalRange = (!def.allDay && nextDayThreshold) ?
            computeVisibleDayRange(origRange, nextDayThreshold) :
            origRange;
        var slicedRange = intersectRanges(normalRange, framingRange);
        if (slicedRange) {
            if (def.rendering === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId].push(slicedRange);
                }
                else {
                    inverseBgByDefId[instance.defId].push(slicedRange);
                }
            }
            else {
                (def.rendering === 'background' ? bgRanges : fgRanges).push({
                    def: def,
                    ui: ui,
                    instance: instance,
                    range: slicedRange,
                    isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                    isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
                });
            }
        }
    }
    for (var groupId in inverseBgByGroupId) { // BY GROUP
        var ranges = inverseBgByGroupId[groupId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
            var invertedRange = invertedRanges_1[_i];
            var def = defByGroupId[groupId];
            var ui = eventUis[def.defId];
            bgRanges.push({
                def: def,
                ui: ui,
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false
            });
        }
    }
    for (var defId in inverseBgByDefId) {
        var ranges = inverseBgByDefId[defId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
            var invertedRange = invertedRanges_2[_a];
            bgRanges.push({
                def: eventStore.defs[defId],
                ui: eventUis[defId],
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false
            });
        }
    }
    return { bg: bgRanges, fg: fgRanges };
}
function hasBgRendering(def) {
    return def.rendering === 'background' || def.rendering === 'inverse-background';
}
function filterSegsViaEls(view, segs, isMirror) {
    if (view.hasPublicHandlers('eventRender')) {
        segs = segs.filter(function (seg) {
            var custom = view.publiclyTrigger('eventRender', [
                {
                    event: new EventApi(view.calendar, seg.eventRange.def, seg.eventRange.instance),
                    isMirror: isMirror,
                    isStart: seg.isStart,
                    isEnd: seg.isEnd,
                    // TODO: include seg.range once all components consistently generate it
                    el: seg.el,
                    view: view
                }
            ]);
            if (custom === false) { // means don't render at all
                return false;
            }
            else if (custom && custom !== true) {
                seg.el = custom;
            }
            return true;
        });
    }
    for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        setElSeg(seg.el, seg);
    }
    return segs;
}
function setElSeg(el, seg) {
    el.fcSeg = seg;
}
function getElSeg(el) {
    return el.fcSeg || null;
}
// event ui computation
function compileEventUis(eventDefs, eventUiBases) {
    return mapHash(eventDefs, function (eventDef) {
        return compileEventUi(eventDef, eventUiBases);
    });
}
function compileEventUi(eventDef, eventUiBases) {
    var uis = [];
    if (eventUiBases['']) {
        uis.push(eventUiBases['']);
    }
    if (eventUiBases[eventDef.defId]) {
        uis.push(eventUiBases[eventDef.defId]);
    }
    uis.push(eventDef.ui);
    return combineEventUis(uis);
}

// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, calendar) {
    var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
    var dest = createEmptyEventStore();
    for (var defId in eventStore.defs) {
        var def = eventStore.defs[defId];
        dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, calendar.pluginSystem.hooks.eventDefMutationAppliers, calendar);
    }
    for (var instanceId in eventStore.instances) {
        var instance = eventStore.instances[instanceId];
        var def = dest.defs[instance.defId]; // important to grab the newly modified def
        dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, calendar);
    }
    return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, appliers, calendar) {
    var standardProps = mutation.standardProps || {};
    // if hasEnd has not been specified, guess a good value based on deltas.
    // if duration will change, there's no way the default duration will persist,
    // and thus, we need to mark the event as having a real end
    if (standardProps.hasEnd == null &&
        eventConfig.durationEditable &&
        (mutation.startDelta || mutation.endDelta)) {
        standardProps.hasEnd = true; // TODO: is this mutation okay?
    }
    var copy = __assign({}, eventDef, standardProps, { ui: __assign({}, eventDef.ui, standardProps.ui) });
    if (mutation.extendedProps) {
        copy.extendedProps = __assign({}, copy.extendedProps, mutation.extendedProps);
    }
    for (var _i = 0, appliers_1 = appliers; _i < appliers_1.length; _i++) {
        var applier = appliers_1[_i];
        applier(copy, mutation, calendar);
    }
    if (!copy.hasEnd && calendar.opt('forceEventDuration')) {
        copy.hasEnd = true;
    }
    return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, calendar) {
    var dateEnv = calendar.dateEnv;
    var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
    var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
    var copy = __assign({}, eventInstance);
    if (forceAllDay) {
        copy.range = computeAlignedDayRange(copy.range);
    }
    if (mutation.datesDelta && eventConfig.startEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.datesDelta),
            end: dateEnv.add(copy.range.end, mutation.datesDelta)
        };
    }
    if (mutation.startDelta && eventConfig.durationEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.startDelta),
            end: copy.range.end
        };
    }
    if (mutation.endDelta && eventConfig.durationEditable) {
        copy.range = {
            start: copy.range.start,
            end: dateEnv.add(copy.range.end, mutation.endDelta)
        };
    }
    if (clearEnd) {
        copy.range = {
            start: copy.range.start,
            end: calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start)
        };
    }
    // in case event was all-day but the supplied deltas were not
    // better util for this?
    if (eventDef.allDay) {
        copy.range = {
            start: startOfDay(copy.range.start),
            end: startOfDay(copy.range.end)
        };
    }
    // handle invalid durations
    if (copy.range.end < copy.range.start) {
        copy.range.end = calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start);
    }
    return copy;
}

function reduceEventStore (eventStore, action, eventSources, dateProfile, calendar) {
    switch (action.type) {
        case 'RECEIVE_EVENTS': // raw
            return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, calendar);
        case 'ADD_EVENTS': // already parsed, but not expanded
            return addEvent(eventStore, action.eventStore, // new ones
            dateProfile ? dateProfile.activeRange : null, calendar);
        case 'MERGE_EVENTS': // already parsed and expanded
            return mergeEventStores(eventStore, action.eventStore);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'SET_DATE':
        case 'SET_VIEW_TYPE':
            if (dateProfile) {
                return expandRecurring(eventStore, dateProfile.activeRange, calendar);
            }
            else {
                return eventStore;
            }
        case 'CHANGE_TIMEZONE':
            return rezoneDates(eventStore, action.oldDateEnv, calendar.dateEnv);
        case 'MUTATE_EVENTS':
            return applyMutationToRelated(eventStore, action.instanceId, action.mutation, action.fromApi, calendar);
        case 'REMOVE_EVENT_INSTANCES':
            return excludeInstances(eventStore, action.instances);
        case 'REMOVE_EVENT_DEF':
            return filterEventStoreDefs(eventStore, function (eventDef) {
                return eventDef.defId !== action.defId;
            });
        case 'REMOVE_EVENT_SOURCE':
            return excludeEventsBySourceId(eventStore, action.sourceId);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return filterEventStoreDefs(eventStore, function (eventDef) {
                return !eventDef.sourceId; // only keep events with no source id
            });
        case 'REMOVE_ALL_EVENTS':
            return createEmptyEventStore();
        case 'RESET_EVENTS':
            return {
                defs: eventStore.defs,
                instances: eventStore.instances
            };
        default:
            return eventStore;
    }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, calendar) {
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
    ) {
        var subset = parseEvents(transformRawEvents(rawEvents, eventSource, calendar), eventSource.sourceId, calendar);
        if (fetchRange) {
            subset = expandRecurring(subset, fetchRange, calendar);
        }
        return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
    }
    return eventStore;
}
function addEvent(eventStore, subset, expandRange, calendar) {
    if (expandRange) {
        subset = expandRecurring(subset, expandRange, calendar);
    }
    return mergeEventStores(eventStore, subset);
}
function rezoneDates(eventStore, oldDateEnv, newDateEnv) {
    var defs = eventStore.defs;
    var instances = mapHash(eventStore.instances, function (instance) {
        var def = defs[instance.defId];
        if (def.allDay || def.recurringDef) {
            return instance; // isn't dependent on timezone
        }
        else {
            return __assign({}, instance, { range: {
                    start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                    end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
                }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
        }
    });
    return { defs: defs, instances: instances };
}
function applyMutationToRelated(eventStore, instanceId, mutation, fromApi, calendar) {
    var relevant = getRelevantEvents(eventStore, instanceId);
    var eventConfigBase = fromApi ?
        { '': {
                startEditable: true,
                durationEditable: true,
                constraints: [],
                overlap: null,
                allows: [],
                backgroundColor: '',
                borderColor: '',
                textColor: '',
                classNames: []
            } } :
        calendar.eventUiBases;
    relevant = applyMutationToEventStore(relevant, eventConfigBase, mutation, calendar);
    return mergeEventStores(eventStore, relevant);
}
function excludeEventsBySourceId(eventStore, sourceId) {
    return filterEventStoreDefs(eventStore, function (eventDef) {
        return eventDef.sourceId !== sourceId;
    });
}
// QUESTION: why not just return instances? do a general object-property-exclusion util
function excludeInstances(eventStore, removals) {
    return {
        defs: eventStore.defs,
        instances: filterHash(eventStore.instances, function (instance) {
            return !removals[instance.instanceId];
        })
    };
}

// high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionValid(interaction, calendar) {
    return isNewPropsValid({ eventDrag: interaction }, calendar); // HACK: the eventDrag props is used for ALL interactions
}
function isDateSelectionValid(dateSelection, calendar) {
    return isNewPropsValid({ dateSelection: dateSelection }, calendar);
}
function isNewPropsValid(newProps, calendar) {
    var view = calendar.view;
    var props = __assign({ businessHours: view ? view.props.businessHours : createEmptyEventStore(), dateSelection: '', eventStore: calendar.state.eventStore, eventUiBases: calendar.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
    return (calendar.pluginSystem.hooks.isPropsValid || isPropsValid)(props, calendar);
}
function isPropsValid(state, calendar, dateSpanMeta, filterConfig) {
    if (dateSpanMeta === void 0) { dateSpanMeta = {}; }
    if (state.eventDrag && !isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
        return false;
    }
    if (state.dateSelection && !isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
        return false;
    }
    return true;
}
// Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
    var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
    var subjectEventStore = interaction.mutatedEvents;
    var subjectDefs = subjectEventStore.defs;
    var subjectInstances = subjectEventStore.instances;
    var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
        state.eventUiBases :
        { '': calendar.selectionConfig } // if not a real event, validate as a selection
    );
    if (filterConfig) {
        subjectConfigs = mapHash(subjectConfigs, filterConfig);
    }
    var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances); // exclude the subject events. TODO: exclude defs too?
    var otherDefs = otherEventStore.defs;
    var otherInstances = otherEventStore.instances;
    var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
    for (var subjectInstanceId in subjectInstances) {
        var subjectInstance = subjectInstances[subjectInstanceId];
        var subjectRange = subjectInstance.range;
        var subjectConfig = subjectConfigs[subjectInstance.defId];
        var subjectDef = subjectDefs[subjectInstance.defId];
        // constraint
        if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, calendar)) {
            return false;
        }
        // overlap
        var overlapFunc = calendar.opt('eventOverlap');
        if (typeof overlapFunc !== 'function') {
            overlapFunc = null;
        }
        for (var otherInstanceId in otherInstances) {
            var otherInstance = otherInstances[otherInstanceId];
            // intersect! evaluate
            if (rangesIntersect(subjectRange, otherInstance.range)) {
                var otherOverlap = otherConfigs[otherInstance.defId].overlap;
                // consider the other event's overlap. only do this if the subject event is a "real" event
                if (otherOverlap === false && interaction.isEvent) {
                    return false;
                }
                if (subjectConfig.overlap === false) {
                    return false;
                }
                if (overlapFunc && !overlapFunc(new EventApi(calendar, otherDefs[otherInstance.defId], otherInstance), // still event
                new EventApi(calendar, subjectDef, subjectInstance) // moving event
                )) {
                    return false;
                }
            }
        }
        // allow (a function)
        var calendarEventStore = calendar.state.eventStore; // need global-to-calendar, not local to component (splittable)state
        for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
            var subjectAllow = _a[_i];
            var subjectDateSpan = __assign({}, dateSpanMeta, { range: subjectInstance.range, allDay: subjectDef.allDay });
            var origDef = calendarEventStore.defs[subjectDef.defId];
            var origInstance = calendarEventStore.instances[subjectInstanceId];
            var eventApi = void 0;
            if (origDef) { // was previously in the calendar
                eventApi = new EventApi(calendar, origDef, origInstance);
            }
            else { // was an external event
                eventApi = new EventApi(calendar, subjectDef); // no instance, because had no dates
            }
            if (!subjectAllow(calendar.buildDateSpanApi(subjectDateSpan), eventApi)) {
                return false;
            }
        }
    }
    return true;
}
// Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------
function isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
    var relevantEventStore = state.eventStore;
    var relevantDefs = relevantEventStore.defs;
    var relevantInstances = relevantEventStore.instances;
    var selection = state.dateSelection;
    var selectionRange = selection.range;
    var selectionConfig = calendar.selectionConfig;
    if (filterConfig) {
        selectionConfig = filterConfig(selectionConfig);
    }
    // constraint
    if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, calendar)) {
        return false;
    }
    // overlap
    var overlapFunc = calendar.opt('selectOverlap');
    if (typeof overlapFunc !== 'function') {
        overlapFunc = null;
    }
    for (var relevantInstanceId in relevantInstances) {
        var relevantInstance = relevantInstances[relevantInstanceId];
        // intersect! evaluate
        if (rangesIntersect(selectionRange, relevantInstance.range)) {
            if (selectionConfig.overlap === false) {
                return false;
            }
            if (overlapFunc && !overlapFunc(new EventApi(calendar, relevantDefs[relevantInstance.defId], relevantInstance))) {
                return false;
            }
        }
    }
    // allow (a function)
    for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
        var selectionAllow = _a[_i];
        var fullDateSpan = __assign({}, dateSpanMeta, selection);
        if (!selectionAllow(calendar.buildDateSpanApi(fullDateSpan), null)) {
            return false;
        }
    }
    return true;
}
// Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, calendar) {
    for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
        var constraint = constraints_1[_i];
        if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, calendar), subjectRange)) {
            return false;
        }
    }
    return true;
}
function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
otherEventStore, // for if constraint is an even group ID
businessHoursUnexpanded, // for if constraint is 'businessHours'
calendar // for expanding businesshours
) {
    if (constraint === 'businessHours') {
        return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, calendar));
    }
    else if (typeof constraint === 'string') { // an group ID
        return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
            return eventDef.groupId === constraint;
        }));
    }
    else if (typeof constraint === 'object' && constraint) { // non-null object
        return eventStoreToRanges(expandRecurring(constraint, subjectRange, calendar));
    }
    return []; // if it's false
}
// TODO: move to event-store file?
function eventStoreToRanges(eventStore) {
    var instances = eventStore.instances;
    var ranges = [];
    for (var instanceId in instances) {
        ranges.push(instances[instanceId].range);
    }
    return ranges;
}
// TODO: move to geom file?
function anyRangesContainRange(outerRanges, innerRange) {
    for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
        var outerRange = outerRanges_1[_i];
        if (rangeContainsRange(outerRange, innerRange)) {
            return true;
        }
    }
    return false;
}
// Parsing
// ------------------------------------------------------------------------------------------------------------------------
function normalizeConstraint(input, calendar) {
    if (Array.isArray(input)) {
        return parseEvents(input, '', calendar, true); // allowOpenRange=true
    }
    else if (typeof input === 'object' && input) { // non-null object
        return parseEvents([input], '', calendar, true); // allowOpenRange=true
    }
    else if (input != null) {
        return String(input);
    }
    else {
        return null;
    }
}

function htmlEscape(s) {
    return (s + '').replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#039;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br />');
}
// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
    var statements = [];
    for (var name_1 in cssProps) {
        var val = cssProps[name_1];
        if (val != null && val !== '') {
            statements.push(name_1 + ':' + val);
        }
    }
    return statements.join(';');
}
// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
    var parts = [];
    for (var name_2 in attrs) {
        var val = attrs[name_2];
        if (val != null) {
            parts.push(name_2 + '="' + htmlEscape(val) + '"');
        }
    }
    return parts.join(' ');
}
function parseClassName(raw) {
    if (Array.isArray(raw)) {
        return raw;
    }
    else if (typeof raw === 'string') {
        return raw.split(/\s+/);
    }
    else {
        return [];
    }
}

var UNSCOPED_EVENT_UI_PROPS = {
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: null,
    overlap: null,
    allow: null,
    className: parseClassName,
    classNames: parseClassName,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
};
function processUnscopedUiProps(rawProps, calendar, leftovers) {
    var props = refineProps(rawProps, UNSCOPED_EVENT_UI_PROPS, {}, leftovers);
    var constraint = normalizeConstraint(props.constraint, calendar);
    return {
        startEditable: props.startEditable != null ? props.startEditable : props.editable,
        durationEditable: props.durationEditable != null ? props.durationEditable : props.editable,
        constraints: constraint != null ? [constraint] : [],
        overlap: props.overlap,
        allows: props.allow != null ? [props.allow] : [],
        backgroundColor: props.backgroundColor || props.color,
        borderColor: props.borderColor || props.color,
        textColor: props.textColor,
        classNames: props.classNames.concat(props.className)
    };
}
function processScopedUiProps(prefix, rawScoped, calendar, leftovers) {
    var rawUnscoped = {};
    var wasFound = {};
    for (var key in UNSCOPED_EVENT_UI_PROPS) {
        var scopedKey = prefix + capitaliseFirstLetter(key);
        rawUnscoped[key] = rawScoped[scopedKey];
        wasFound[scopedKey] = true;
    }
    if (prefix === 'event') {
        rawUnscoped.editable = rawScoped.editable; // special case. there is no 'eventEditable', just 'editable'
    }
    if (leftovers) {
        for (var key in rawScoped) {
            if (!wasFound[key]) {
                leftovers[key] = rawScoped[key];
            }
        }
    }
    return processUnscopedUiProps(rawUnscoped, calendar);
}
var EMPTY_EVENT_UI = {
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    classNames: []
};
// prevent against problems with <2 args!
function combineEventUis(uis) {
    return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
    return {
        startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
        durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
        constraints: item0.constraints.concat(item1.constraints),
        overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
        allows: item0.allows.concat(item1.allows),
        backgroundColor: item1.backgroundColor || item0.backgroundColor,
        borderColor: item1.borderColor || item0.borderColor,
        textColor: item1.textColor || item0.textColor,
        classNames: item0.classNames.concat(item1.classNames)
    };
}

var NON_DATE_PROPS = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    rendering: String,
    extendedProps: null
};
var DATE_PROPS = {
    start: null,
    date: null,
    end: null,
    allDay: null
};
var uid = 0;
function parseEvent(raw, sourceId, calendar, allowOpenRange) {
    var allDayDefault = computeIsAllDayDefault(sourceId, calendar);
    var leftovers0 = {};
    var recurringRes = parseRecurring(raw, // raw, but with single-event stuff stripped out
    allDayDefault, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes, leftovers0 // will populate with non-recurring props
    );
    if (recurringRes) {
        var def = parseEventDef(leftovers0, sourceId, recurringRes.allDay, Boolean(recurringRes.duration), calendar);
        def.recurringDef = {
            typeId: recurringRes.typeId,
            typeData: recurringRes.typeData,
            duration: recurringRes.duration
        };
        return { def: def, instance: null };
    }
    else {
        var leftovers1 = {};
        var singleRes = parseSingle(raw, allDayDefault, calendar, leftovers1, allowOpenRange);
        if (singleRes) {
            var def = parseEventDef(leftovers1, sourceId, singleRes.allDay, singleRes.hasEnd, calendar);
            var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
            return { def: def, instance: instance };
        }
    }
    return null;
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
The EventNonDateInput has been normalized (id => publicId, etc).
*/
function parseEventDef(raw, sourceId, allDay, hasEnd, calendar) {
    var leftovers = {};
    var def = pluckNonDateProps(raw, calendar, leftovers);
    def.defId = String(uid++);
    def.sourceId = sourceId;
    def.allDay = allDay;
    def.hasEnd = hasEnd;
    for (var _i = 0, _a = calendar.pluginSystem.hooks.eventDefParsers; _i < _a.length; _i++) {
        var eventDefParser = _a[_i];
        var newLeftovers = {};
        eventDefParser(def, leftovers, newLeftovers);
        leftovers = newLeftovers;
    }
    def.extendedProps = __assign(leftovers, def.extendedProps || {});
    // help out EventApi from having user modify props
    Object.freeze(def.ui.classNames);
    Object.freeze(def.extendedProps);
    return def;
}
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
    return {
        instanceId: String(uid++),
        defId: defId,
        range: range,
        forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
        forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
    };
}
function parseSingle(raw, allDayDefault, calendar, leftovers, allowOpenRange) {
    var props = pluckDateProps(raw, leftovers);
    var allDay = props.allDay;
    var startMeta;
    var startMarker = null;
    var hasEnd = false;
    var endMeta;
    var endMarker = null;
    startMeta = calendar.dateEnv.createMarkerMeta(props.start);
    if (startMeta) {
        startMarker = startMeta.marker;
    }
    else if (!allowOpenRange) {
        return null;
    }
    if (props.end != null) {
        endMeta = calendar.dateEnv.createMarkerMeta(props.end);
    }
    if (allDay == null) {
        if (allDayDefault != null) {
            allDay = allDayDefault;
        }
        else {
            // fall back to the date props LAST
            allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
    }
    if (allDay && startMarker) {
        startMarker = startOfDay(startMarker);
    }
    if (endMeta) {
        endMarker = endMeta.marker;
        if (allDay) {
            endMarker = startOfDay(endMarker);
        }
        if (startMarker && endMarker <= startMarker) {
            endMarker = null;
        }
    }
    if (endMarker) {
        hasEnd = true;
    }
    else if (!allowOpenRange) {
        hasEnd = calendar.opt('forceEventDuration') || false;
        endMarker = calendar.dateEnv.add(startMarker, allDay ?
            calendar.defaultAllDayEventDuration :
            calendar.defaultTimedEventDuration);
    }
    return {
        allDay: allDay,
        hasEnd: hasEnd,
        range: { start: startMarker, end: endMarker },
        forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
        forcedEndTzo: endMeta ? endMeta.forcedTzo : null
    };
}
function pluckDateProps(raw, leftovers) {
    var props = refineProps(raw, DATE_PROPS, {}, leftovers);
    props.start = (props.start !== null) ? props.start : props.date;
    delete props.date;
    return props;
}
function pluckNonDateProps(raw, calendar, leftovers) {
    var preLeftovers = {};
    var props = refineProps(raw, NON_DATE_PROPS, {}, preLeftovers);
    var ui = processUnscopedUiProps(preLeftovers, calendar, leftovers);
    props.publicId = props.id;
    delete props.id;
    props.ui = ui;
    return props;
}
function computeIsAllDayDefault(sourceId, calendar) {
    var res = null;
    if (sourceId) {
        var source = calendar.state.eventSources[sourceId];
        res = source.allDayDefault;
    }
    if (res == null) {
        res = calendar.opt('allDayDefault');
    }
    return res;
}

var DEF_DEFAULTS = {
    startTime: '09:00',
    endTime: '17:00',
    daysOfWeek: [1, 2, 3, 4, 5],
    rendering: 'inverse-background',
    classNames: 'fc-nonbusiness',
    groupId: '_businessHours' // so multiple defs get grouped
};
/*
TODO: pass around as EventDefHash!!!
*/
function parseBusinessHours(input, calendar) {
    return parseEvents(refineInputs(input), '', calendar);
}
function refineInputs(input) {
    var rawDefs;
    if (input === true) {
        rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
    }
    else if (Array.isArray(input)) {
        // if specifying an array, every sub-definition NEEDS a day-of-week
        rawDefs = input.filter(function (rawDef) {
            return rawDef.daysOfWeek;
        });
    }
    else if (typeof input === 'object' && input) { // non-null object
        rawDefs = [input];
    }
    else { // is probably false
        rawDefs = [];
    }
    rawDefs = rawDefs.map(function (rawDef) {
        return __assign({}, DEF_DEFAULTS, rawDef);
    });
    return rawDefs;
}

function memoizeRendering(renderFunc, unrenderFunc, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var dependents = [];
    var thisContext;
    var prevArgs;
    function unrender() {
        if (prevArgs) {
            for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
                var dependent = dependents_1[_i];
                dependent.unrender();
            }
            if (unrenderFunc) {
                unrenderFunc.apply(thisContext, prevArgs);
            }
            prevArgs = null;
        }
    }
    function res() {
        if (!prevArgs || !isArraysEqual(prevArgs, arguments)) {
            unrender();
            thisContext = this;
            prevArgs = arguments;
            renderFunc.apply(this, arguments);
        }
    }
    res.dependents = dependents;
    res.unrender = unrender;
    for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
        var dependency = dependencies_1[_i];
        dependency.dependents.push(res);
    }
    return res;
}

var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
var Splitter = /** @class */ (function () {
    function Splitter() {
        this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
        this.splitDateSelection = memoize(this._splitDateSpan);
        this.splitEventStore = memoize(this._splitEventStore);
        this.splitIndividualUi = memoize(this._splitIndividualUi);
        this.splitEventDrag = memoize(this._splitInteraction);
        this.splitEventResize = memoize(this._splitInteraction);
        this.eventUiBuilders = {}; // TODO: typescript protection
    }
    Splitter.prototype.splitProps = function (props) {
        var _this = this;
        var keyInfos = this.getKeyInfo(props);
        var defKeys = this.getKeysForEventDefs(props.eventStore);
        var dateSelections = this.splitDateSelection(props.dateSelection);
        var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
        var eventStores = this.splitEventStore(props.eventStore, defKeys);
        var eventDrags = this.splitEventDrag(props.eventDrag);
        var eventResizes = this.splitEventResize(props.eventResize);
        var splitProps = {};
        this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
            return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
        });
        for (var key in keyInfos) {
            var keyInfo = keyInfos[key];
            var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
            var buildEventUi = this.eventUiBuilders[key];
            splitProps[key] = {
                businessHours: keyInfo.businessHours || props.businessHours,
                dateSelection: dateSelections[key] || null,
                eventStore: eventStore,
                eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                eventDrag: eventDrags[key] || null,
                eventResize: eventResizes[key] || null
            };
        }
        return splitProps;
    };
    Splitter.prototype._splitDateSpan = function (dateSpan) {
        var dateSpans = {};
        if (dateSpan) {
            var keys = this.getKeysForDateSpan(dateSpan);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                dateSpans[key] = dateSpan;
            }
        }
        return dateSpans;
    };
    Splitter.prototype._getKeysForEventDefs = function (eventStore) {
        var _this = this;
        return mapHash(eventStore.defs, function (eventDef) {
            return _this.getKeysForEventDef(eventDef);
        });
    };
    Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
        var defs = eventStore.defs, instances = eventStore.instances;
        var splitStores = {};
        for (var defId in defs) {
            for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                var key = _a[_i];
                if (!splitStores[key]) {
                    splitStores[key] = createEmptyEventStore();
                }
                splitStores[key].defs[defId] = defs[defId];
            }
        }
        for (var instanceId in instances) {
            var instance = instances[instanceId];
            for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
                var key = _c[_b];
                if (splitStores[key]) { // must have already been created
                    splitStores[key].instances[instanceId] = instance;
                }
            }
        }
        return splitStores;
    };
    Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
        var splitHashes = {};
        for (var defId in eventUiBases) {
            if (defId) { // not the '' key
                for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (!splitHashes[key]) {
                        splitHashes[key] = {};
                    }
                    splitHashes[key][defId] = eventUiBases[defId];
                }
            }
        }
        return splitHashes;
    };
    Splitter.prototype._splitInteraction = function (interaction) {
        var splitStates = {};
        if (interaction) {
            var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents) // can't use cached. might be events from other calendar
            );
            // can't rely on defKeys because event data is mutated
            var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
            var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
            var populate = function (key) {
                if (!splitStates[key]) {
                    splitStates[key] = {
                        affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
                        mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
                        isEvent: interaction.isEvent,
                        origSeg: interaction.origSeg
                    };
                }
            };
            for (var key in affectedStores_1) {
                populate(key);
            }
            for (var key in mutatedStores_1) {
                populate(key);
            }
        }
        return splitStates;
    };
    return Splitter;
}());
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
    var baseParts = [];
    if (allUi) {
        baseParts.push(allUi);
    }
    if (eventUiForKey) {
        baseParts.push(eventUiForKey);
    }
    var stuff = {
        '': combineEventUis(baseParts)
    };
    if (individualUi) {
        __assign(stuff, individualUi);
    }
    return stuff;
}

// Generates HTML for an anchor to another view into the calendar.
// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
// `gotoOptions` can either be a DateMarker, or an object with the form:
// { date, type, forceOff }
// `type` is a view-type like "day" or "week". default value is "day".
// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
function buildGotoAnchorHtml(component, gotoOptions, attrs, innerHtml) {
    var dateEnv = component.dateEnv;
    var date;
    var type;
    var forceOff;
    var finalOptions;
    if (gotoOptions instanceof Date) {
        date = gotoOptions; // a single date-like input
    }
    else {
        date = gotoOptions.date;
        type = gotoOptions.type;
        forceOff = gotoOptions.forceOff;
    }
    finalOptions = {
        date: dateEnv.formatIso(date, { omitTime: true }),
        type: type || 'day'
    };
    if (typeof attrs === 'string') {
        innerHtml = attrs;
        attrs = null;
    }
    attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
    innerHtml = innerHtml || '';
    if (!forceOff && component.opt('navLinks')) {
        return '<a' + attrs +
            ' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
            innerHtml +
            '</a>';
    }
    else {
        return '<span' + attrs + '>' +
            innerHtml +
            '</span>';
    }
}
function getAllDayHtml(component) {
    return component.opt('allDayHtml') || htmlEscape(component.opt('allDayText'));
}
// Computes HTML classNames for a single-day element
function getDayClasses(date, dateProfile, context, noThemeHighlight) {
    var calendar = context.calendar, view = context.view, theme = context.theme, dateEnv = context.dateEnv;
    var classes = [];
    var todayStart;
    var todayEnd;
    if (!rangeContainsMarker(dateProfile.activeRange, date)) {
        classes.push('fc-disabled-day');
    }
    else {
        classes.push('fc-' + DAY_IDS[date.getUTCDay()]);
        if (view.opt('monthMode') &&
            dateEnv.getMonth(date) !== dateEnv.getMonth(dateProfile.currentRange.start)) {
            classes.push('fc-other-month');
        }
        todayStart = startOfDay(calendar.getNow());
        todayEnd = addDays(todayStart, 1);
        if (date < todayStart) {
            classes.push('fc-past');
        }
        else if (date >= todayEnd) {
            classes.push('fc-future');
        }
        else {
            classes.push('fc-today');
            if (noThemeHighlight !== true) {
                classes.push(theme.getClass('today'));
            }
        }
    }
    return classes;
}

// given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.
function unpromisify(func, success, failure) {
    // guard against success/failure callbacks being called more than once
    // and guard against a promise AND callback being used together.
    var isResolved = false;
    var wrappedSuccess = function () {
        if (!isResolved) {
            isResolved = true;
            success.apply(this, arguments);
        }
    };
    var wrappedFailure = function () {
        if (!isResolved) {
            isResolved = true;
            if (failure) {
                failure.apply(this, arguments);
            }
        }
    };
    var res = func(wrappedSuccess, wrappedFailure);
    if (res && typeof res.then === 'function') {
        res.then(wrappedSuccess, wrappedFailure);
    }
}

var Mixin = /** @class */ (function () {
    function Mixin() {
    }
    // mix into a CLASS
    Mixin.mixInto = function (destClass) {
        this.mixIntoObj(destClass.prototype);
    };
    // mix into ANY object
    Mixin.mixIntoObj = function (destObj) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            if (!destObj[name]) { // if destination doesn't already define it
                destObj[name] = _this.prototype[name];
            }
        });
    };
    /*
    will override existing methods
    TODO: remove! not used anymore
    */
    Mixin.mixOver = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            destClass.prototype[name] = _this.prototype[name];
        });
    };
    return Mixin;
}());

/*
USAGE:
  import { default as EmitterMixin, EmitterInterface } from './EmitterMixin'
in class:
  on: EmitterInterface['on']
  one: EmitterInterface['one']
  off: EmitterInterface['off']
  trigger: EmitterInterface['trigger']
  triggerWith: EmitterInterface['triggerWith']
  hasHandlers: EmitterInterface['hasHandlers']
after class:
  EmitterMixin.mixInto(TheClass)
*/
var EmitterMixin = /** @class */ (function (_super) {
    __extends(EmitterMixin, _super);
    function EmitterMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmitterMixin.prototype.on = function (type, handler) {
        addToHash(this._handlers || (this._handlers = {}), type, handler);
        return this; // for chaining
    };
    // todo: add comments
    EmitterMixin.prototype.one = function (type, handler) {
        addToHash(this._oneHandlers || (this._oneHandlers = {}), type, handler);
        return this; // for chaining
    };
    EmitterMixin.prototype.off = function (type, handler) {
        if (this._handlers) {
            removeFromHash(this._handlers, type, handler);
        }
        if (this._oneHandlers) {
            removeFromHash(this._oneHandlers, type, handler);
        }
        return this; // for chaining
    };
    EmitterMixin.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.triggerWith(type, this, args);
        return this; // for chaining
    };
    EmitterMixin.prototype.triggerWith = function (type, context, args) {
        if (this._handlers) {
            applyAll(this._handlers[type], context, args);
        }
        if (this._oneHandlers) {
            applyAll(this._oneHandlers[type], context, args);
            delete this._oneHandlers[type]; // will never fire again
        }
        return this; // for chaining
    };
    EmitterMixin.prototype.hasHandlers = function (type) {
        return (this._handlers && this._handlers[type] && this._handlers[type].length) ||
            (this._oneHandlers && this._oneHandlers[type] && this._oneHandlers[type].length);
    };
    return EmitterMixin;
}(Mixin));
function addToHash(hash, type, handler) {
    (hash[type] || (hash[type] = []))
        .push(handler);
}
function removeFromHash(hash, type, handler) {
    if (handler) {
        if (hash[type]) {
            hash[type] = hash[type].filter(function (func) {
                return func !== handler;
            });
        }
    }
    else {
        delete hash[type]; // remove all handler funcs for this type
    }
}

/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/
var PositionCache = /** @class */ (function () {
    function PositionCache(originEl, els, isHorizontal, isVertical) {
        this.originEl = originEl;
        this.els = els;
        this.isHorizontal = isHorizontal;
        this.isVertical = isVertical;
    }
    // Queries the els for coordinates and stores them.
    // Call this method before using and of the get* methods below.
    PositionCache.prototype.build = function () {
        var originEl = this.originEl;
        var originClientRect = this.originClientRect =
            originEl.getBoundingClientRect(); // relative to viewport top-left
        if (this.isHorizontal) {
            this.buildElHorizontals(originClientRect.left);
        }
        if (this.isVertical) {
            this.buildElVerticals(originClientRect.top);
        }
    };
    // Populates the left/right internal coordinate arrays
    PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
        var lefts = [];
        var rights = [];
        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            lefts.push(rect.left - originClientLeft);
            rights.push(rect.right - originClientLeft);
        }
        this.lefts = lefts;
        this.rights = rights;
    };
    // Populates the top/bottom internal coordinate arrays
    PositionCache.prototype.buildElVerticals = function (originClientTop) {
        var tops = [];
        var bottoms = [];
        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            tops.push(rect.top - originClientTop);
            bottoms.push(rect.bottom - originClientTop);
        }
        this.tops = tops;
        this.bottoms = bottoms;
    };
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
    PositionCache.prototype.leftToIndex = function (leftPosition) {
        var lefts = this.lefts;
        var rights = this.rights;
        var len = lefts.length;
        var i;
        for (i = 0; i < len; i++) {
            if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                return i;
            }
        }
    };
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
    PositionCache.prototype.topToIndex = function (topPosition) {
        var tops = this.tops;
        var bottoms = this.bottoms;
        var len = tops.length;
        var i;
        for (i = 0; i < len; i++) {
            if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                return i;
            }
        }
    };
    // Gets the width of the element at the given index
    PositionCache.prototype.getWidth = function (leftIndex) {
        return this.rights[leftIndex] - this.lefts[leftIndex];
    };
    // Gets the height of the element at the given index
    PositionCache.prototype.getHeight = function (topIndex) {
        return this.bottoms[topIndex] - this.tops[topIndex];
    };
    return PositionCache;
}());

/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/
var ScrollController = /** @class */ (function () {
    function ScrollController() {
    }
    ScrollController.prototype.getMaxScrollTop = function () {
        return this.getScrollHeight() - this.getClientHeight();
    };
    ScrollController.prototype.getMaxScrollLeft = function () {
        return this.getScrollWidth() - this.getClientWidth();
    };
    ScrollController.prototype.canScrollVertically = function () {
        return this.getMaxScrollTop() > 0;
    };
    ScrollController.prototype.canScrollHorizontally = function () {
        return this.getMaxScrollLeft() > 0;
    };
    ScrollController.prototype.canScrollUp = function () {
        return this.getScrollTop() > 0;
    };
    ScrollController.prototype.canScrollDown = function () {
        return this.getScrollTop() < this.getMaxScrollTop();
    };
    ScrollController.prototype.canScrollLeft = function () {
        return this.getScrollLeft() > 0;
    };
    ScrollController.prototype.canScrollRight = function () {
        return this.getScrollLeft() < this.getMaxScrollLeft();
    };
    return ScrollController;
}());
var ElementScrollController = /** @class */ (function (_super) {
    __extends(ElementScrollController, _super);
    function ElementScrollController(el) {
        var _this = _super.call(this) || this;
        _this.el = el;
        return _this;
    }
    ElementScrollController.prototype.getScrollTop = function () {
        return this.el.scrollTop;
    };
    ElementScrollController.prototype.getScrollLeft = function () {
        return this.el.scrollLeft;
    };
    ElementScrollController.prototype.setScrollTop = function (top) {
        this.el.scrollTop = top;
    };
    ElementScrollController.prototype.setScrollLeft = function (left) {
        this.el.scrollLeft = left;
    };
    ElementScrollController.prototype.getScrollWidth = function () {
        return this.el.scrollWidth;
    };
    ElementScrollController.prototype.getScrollHeight = function () {
        return this.el.scrollHeight;
    };
    ElementScrollController.prototype.getClientHeight = function () {
        return this.el.clientHeight;
    };
    ElementScrollController.prototype.getClientWidth = function () {
        return this.el.clientWidth;
    };
    return ElementScrollController;
}(ScrollController));
var WindowScrollController = /** @class */ (function (_super) {
    __extends(WindowScrollController, _super);
    function WindowScrollController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowScrollController.prototype.getScrollTop = function () {
        return window.pageYOffset;
    };
    WindowScrollController.prototype.getScrollLeft = function () {
        return window.pageXOffset;
    };
    WindowScrollController.prototype.setScrollTop = function (n) {
        window.scroll(window.pageXOffset, n);
    };
    WindowScrollController.prototype.setScrollLeft = function (n) {
        window.scroll(n, window.pageYOffset);
    };
    WindowScrollController.prototype.getScrollWidth = function () {
        return document.documentElement.scrollWidth;
    };
    WindowScrollController.prototype.getScrollHeight = function () {
        return document.documentElement.scrollHeight;
    };
    WindowScrollController.prototype.getClientHeight = function () {
        return document.documentElement.clientHeight;
    };
    WindowScrollController.prototype.getClientWidth = function () {
        return document.documentElement.clientWidth;
    };
    return WindowScrollController;
}(ScrollController));

/*
Embodies a div that has potential scrollbars
*/
var ScrollComponent = /** @class */ (function (_super) {
    __extends(ScrollComponent, _super);
    function ScrollComponent(overflowX, overflowY) {
        var _this = _super.call(this, createElement('div', {
            className: 'fc-scroller'
        })) || this;
        _this.overflowX = overflowX;
        _this.overflowY = overflowY;
        _this.applyOverflow();
        return _this;
    }
    // sets to natural height, unlocks overflow
    ScrollComponent.prototype.clear = function () {
        this.setHeight('auto');
        this.applyOverflow();
    };
    ScrollComponent.prototype.destroy = function () {
        removeElement(this.el);
    };
    // Overflow
    // -----------------------------------------------------------------------------------------------------------------
    ScrollComponent.prototype.applyOverflow = function () {
        applyStyle(this.el, {
            overflowX: this.overflowX,
            overflowY: this.overflowY
        });
    };
    // Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
    // Useful for preserving scrollbar widths regardless of future resizes.
    // Can pass in scrollbarWidths for optimization.
    ScrollComponent.prototype.lockOverflow = function (scrollbarWidths) {
        var overflowX = this.overflowX;
        var overflowY = this.overflowY;
        scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
        if (overflowX === 'auto') {
            overflowX = (scrollbarWidths.bottom || // horizontal scrollbars?
                this.canScrollHorizontally() // OR scrolling pane with massless scrollbars?
            ) ? 'scroll' : 'hidden';
        }
        if (overflowY === 'auto') {
            overflowY = (scrollbarWidths.left || scrollbarWidths.right || // horizontal scrollbars?
                this.canScrollVertically() // OR scrolling pane with massless scrollbars?
            ) ? 'scroll' : 'hidden';
        }
        applyStyle(this.el, { overflowX: overflowX, overflowY: overflowY });
    };
    ScrollComponent.prototype.setHeight = function (height) {
        applyStyleProp(this.el, 'height', height);
    };
    ScrollComponent.prototype.getScrollbarWidths = function () {
        var edges = computeEdges(this.el);
        return {
            left: edges.scrollbarLeft,
            right: edges.scrollbarRight,
            bottom: edges.scrollbarBottom
        };
    };
    return ScrollComponent;
}(ElementScrollController));

var Theme = /** @class */ (function () {
    function Theme(calendarOptions) {
        this.calendarOptions = calendarOptions;
        this.processIconOverride();
    }
    Theme.prototype.processIconOverride = function () {
        if (this.iconOverrideOption) {
            this.setIconOverride(this.calendarOptions[this.iconOverrideOption]);
        }
    };
    Theme.prototype.setIconOverride = function (iconOverrideHash) {
        var iconClassesCopy;
        var buttonName;
        if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
            iconClassesCopy = __assign({}, this.iconClasses);
            for (buttonName in iconOverrideHash) {
                iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
            }
            this.iconClasses = iconClassesCopy;
        }
        else if (iconOverrideHash === false) {
            this.iconClasses = {};
        }
    };
    Theme.prototype.applyIconOverridePrefix = function (className) {
        var prefix = this.iconOverridePrefix;
        if (prefix && className.indexOf(prefix) !== 0) { // if not already present
            className = prefix + className;
        }
        return className;
    };
    Theme.prototype.getClass = function (key) {
        return this.classes[key] || '';
    };
    Theme.prototype.getIconClass = function (buttonName) {
        var className = this.iconClasses[buttonName];
        if (className) {
            return this.baseIconClass + ' ' + className;
        }
        return '';
    };
    Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
        var className;
        if (this.iconOverrideCustomButtonOption) {
            className = customButtonProps[this.iconOverrideCustomButtonOption];
            if (className) {
                return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
            }
        }
        return '';
    };
    return Theme;
}());
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

var guid = 0;
var Component = /** @class */ (function () {
    function Component(context, isView) {
        // HACK to populate view at top of component instantiation call chain
        if (isView) {
            context.view = this;
        }
        this.uid = String(guid++);
        this.context = context;
        this.dateEnv = context.dateEnv;
        this.theme = context.theme;
        this.view = context.view;
        this.calendar = context.calendar;
        this.isRtl = this.opt('dir') === 'rtl';
    }
    Component.addEqualityFuncs = function (newFuncs) {
        this.prototype.equalityFuncs = __assign({}, this.prototype.equalityFuncs, newFuncs);
    };
    Component.prototype.opt = function (name) {
        return this.context.options[name];
    };
    Component.prototype.receiveProps = function (props) {
        var _a = recycleProps(this.props || {}, props, this.equalityFuncs), anyChanges = _a.anyChanges, comboProps = _a.comboProps;
        this.props = comboProps;
        if (anyChanges) {
            this.render(comboProps);
        }
    };
    Component.prototype.render = function (props) {
    };
    // after destroy is called, this component won't ever be used again
    Component.prototype.destroy = function () {
    };
    return Component;
}());
Component.prototype.equalityFuncs = {};
/*
Reuses old values when equal. If anything is unequal, returns newProps as-is.
Great for PureComponent, but won't be feasible with React, so just eliminate and use React's DOM diffing.
*/
function recycleProps(oldProps, newProps, equalityFuncs) {
    var comboProps = {}; // some old, some new
    var anyChanges = false;
    for (var key in newProps) {
        if (key in oldProps && (oldProps[key] === newProps[key] ||
            (equalityFuncs[key] && equalityFuncs[key](oldProps[key], newProps[key])))) {
            // equal to old? use old prop
            comboProps[key] = oldProps[key];
        }
        else {
            comboProps[key] = newProps[key];
            anyChanges = true;
        }
    }
    for (var key in oldProps) {
        if (!(key in newProps)) {
            anyChanges = true;
            break;
        }
    }
    return { anyChanges: anyChanges, comboProps: comboProps };
}

/*
PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/
var DateComponent = /** @class */ (function (_super) {
    __extends(DateComponent, _super);
    function DateComponent(context, el, isView) {
        var _this = _super.call(this, context, isView) || this;
        _this.el = el;
        return _this;
    }
    DateComponent.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        removeElement(this.el);
    };
    // TODO: WHAT ABOUT (sourceSeg && sourceSeg.component.doesDragMirror)
    //
    // Event Drag-n-Drop Rendering (for both events and external elements)
    // ---------------------------------------------------------------------------------------------------------------
    /*
    renderEventDragSegs(state: EventSegUiInteractionState) {
      if (state) {
        let { isEvent, segs, sourceSeg } = state
  
        if (this.eventRenderer) {
          this.eventRenderer.hideByHash(state.affectedInstances)
        }
  
        // if the user is dragging something that is considered an event with real event data,
        // and this component likes to do drag mirrors OR the component where the seg came from
        // likes to do drag mirrors, then render a drag mirror.
        if (isEvent && (this.doesDragMirror || sourceSeg && sourceSeg.component.doesDragMirror)) {
          if (this.mirrorRenderer) {
            this.mirrorRenderer.renderSegs(segs, { isDragging: true, sourceSeg })
          }
        }
  
        // if it would be impossible to render a drag mirror OR this component likes to render
        // highlights, then render a highlight.
        if (!isEvent || this.doesDragHighlight) {
          if (this.fillRenderer) {
            this.fillRenderer.renderSegs('highlight', segs)
          }
        }
      }
    }
    */
    // Hit System
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.buildPositionCaches = function () {
    };
    DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        return null; // this should be abstract
    };
    // Validation
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.isInteractionValid = function (interaction) {
        var calendar = this.calendar;
        var dateProfile = this.props.dateProfile; // HACK
        var instances = interaction.mutatedEvents.instances;
        if (dateProfile) { // HACK for DayTile
            for (var instanceId in instances) {
                if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
                    return false;
                }
            }
        }
        return isInteractionValid(interaction, calendar);
    };
    DateComponent.prototype.isDateSelectionValid = function (selection) {
        var dateProfile = this.props.dateProfile; // HACK
        if (dateProfile && // HACK for DayTile
            !rangeContainsRange(dateProfile.validRange, selection.range)) {
            return false;
        }
        return isDateSelectionValid(selection, this.calendar);
    };
    // Triggering
    // -----------------------------------------------------------------------------------------------------------------
    // TODO: move to Calendar
    DateComponent.prototype.publiclyTrigger = function (name, args) {
        var calendar = this.calendar;
        return calendar.publiclyTrigger(name, args);
    };
    DateComponent.prototype.publiclyTriggerAfterSizing = function (name, args) {
        var calendar = this.calendar;
        return calendar.publiclyTriggerAfterSizing(name, args);
    };
    DateComponent.prototype.hasPublicHandlers = function (name) {
        var calendar = this.calendar;
        return calendar.hasPublicHandlers(name);
    };
    DateComponent.prototype.triggerRenderedSegs = function (segs, isMirrors) {
        var calendar = this.calendar;
        if (this.hasPublicHandlers('eventPositioned')) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                this.publiclyTriggerAfterSizing('eventPositioned', [
                    {
                        event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                        isMirror: isMirrors,
                        isStart: seg.isStart,
                        isEnd: seg.isEnd,
                        el: seg.el,
                        view: this // safe to cast because this method is only called on context.view
                    }
                ]);
            }
        }
        if (!calendar.state.loadingLevel) { // avoid initial empty state while pending
            calendar.afterSizingTriggers._eventsPositioned = [null]; // fire once
        }
    };
    DateComponent.prototype.triggerWillRemoveSegs = function (segs, isMirrors) {
        var calendar = this.calendar;
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            calendar.trigger('eventElRemove', seg.el);
        }
        if (this.hasPublicHandlers('eventDestroy')) {
            for (var _a = 0, segs_3 = segs; _a < segs_3.length; _a++) {
                var seg = segs_3[_a];
                this.publiclyTrigger('eventDestroy', [
                    {
                        event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                        isMirror: isMirrors,
                        el: seg.el,
                        view: this // safe to cast because this method is only called on context.view
                    }
                ]);
            }
        }
    };
    // Pointer Interaction Utils
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.isValidSegDownEl = function (el) {
        return !this.props.eventDrag && // HACK
            !this.props.eventResize && // HACK
            !elementClosest(el, '.fc-mirror') &&
            (this.isPopover() || !this.isInPopover(el));
        // ^above line ensures we don't detect a seg interaction within a nested component.
        // it's a HACK because it only supports a popover as the nested component.
    };
    DateComponent.prototype.isValidDateDownEl = function (el) {
        var segEl = elementClosest(el, this.fgSegSelector);
        return (!segEl || segEl.classList.contains('fc-mirror')) &&
            !elementClosest(el, '.fc-more') && // a "more.." link
            !elementClosest(el, 'a[data-goto]') && // a clickable nav link
            !this.isInPopover(el);
    };
    DateComponent.prototype.isPopover = function () {
        return this.el.classList.contains('fc-popover');
    };
    DateComponent.prototype.isInPopover = function (el) {
        return Boolean(elementClosest(el, '.fc-popover'));
    };
    return DateComponent;
}(Component));
DateComponent.prototype.fgSegSelector = '.fc-event-container > *';
DateComponent.prototype.bgSegSelector = '.fc-bgevent:not(.fc-nonbusiness)';

var uid$1 = 0;
function createPlugin(input) {
    return {
        id: String(uid$1++),
        deps: input.deps || [],
        reducers: input.reducers || [],
        eventDefParsers: input.eventDefParsers || [],
        isDraggableTransformers: input.isDraggableTransformers || [],
        eventDragMutationMassagers: input.eventDragMutationMassagers || [],
        eventDefMutationAppliers: input.eventDefMutationAppliers || [],
        dateSelectionTransformers: input.dateSelectionTransformers || [],
        datePointTransforms: input.datePointTransforms || [],
        dateSpanTransforms: input.dateSpanTransforms || [],
        views: input.views || {},
        viewPropsTransformers: input.viewPropsTransformers || [],
        isPropsValid: input.isPropsValid || null,
        externalDefTransforms: input.externalDefTransforms || [],
        eventResizeJoinTransforms: input.eventResizeJoinTransforms || [],
        viewContainerModifiers: input.viewContainerModifiers || [],
        eventDropTransformers: input.eventDropTransformers || [],
        componentInteractions: input.componentInteractions || [],
        calendarInteractions: input.calendarInteractions || [],
        themeClasses: input.themeClasses || {},
        eventSourceDefs: input.eventSourceDefs || [],
        cmdFormatter: input.cmdFormatter,
        recurringTypes: input.recurringTypes || [],
        namedTimeZonedImpl: input.namedTimeZonedImpl,
        defaultView: input.defaultView || '',
        elementDraggingImpl: input.elementDraggingImpl,
        optionChangeHandlers: input.optionChangeHandlers || {}
    };
}
var PluginSystem = /** @class */ (function () {
    function PluginSystem() {
        this.hooks = {
            reducers: [],
            eventDefParsers: [],
            isDraggableTransformers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            views: {},
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            eventResizeJoinTransforms: [],
            viewContainerModifiers: [],
            eventDropTransformers: [],
            componentInteractions: [],
            calendarInteractions: [],
            themeClasses: {},
            eventSourceDefs: [],
            cmdFormatter: null,
            recurringTypes: [],
            namedTimeZonedImpl: null,
            defaultView: '',
            elementDraggingImpl: null,
            optionChangeHandlers: {}
        };
        this.addedHash = {};
    }
    PluginSystem.prototype.add = function (plugin) {
        if (!this.addedHash[plugin.id]) {
            this.addedHash[plugin.id] = true;
            for (var _i = 0, _a = plugin.deps; _i < _a.length; _i++) {
                var dep = _a[_i];
                this.add(dep);
            }
            this.hooks = combineHooks(this.hooks, plugin);
        }
    };
    return PluginSystem;
}());
function combineHooks(hooks0, hooks1) {
    return {
        reducers: hooks0.reducers.concat(hooks1.reducers),
        eventDefParsers: hooks0.eventDefParsers.concat(hooks1.eventDefParsers),
        isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
        eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
        eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
        dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
        datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
        dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
        views: __assign({}, hooks0.views, hooks1.views),
        viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
        isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
        externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
        eventResizeJoinTransforms: hooks0.eventResizeJoinTransforms.concat(hooks1.eventResizeJoinTransforms),
        viewContainerModifiers: hooks0.viewContainerModifiers.concat(hooks1.viewContainerModifiers),
        eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
        calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
        componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
        themeClasses: __assign({}, hooks0.themeClasses, hooks1.themeClasses),
        eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
        cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
        recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
        namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
        defaultView: hooks0.defaultView || hooks1.defaultView,
        elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
        optionChangeHandlers: __assign({}, hooks0.optionChangeHandlers, hooks1.optionChangeHandlers)
    };
}

var eventSourceDef = {
    ignoreRange: true,
    parseMeta: function (raw) {
        if (Array.isArray(raw)) { // short form
            return raw;
        }
        else if (Array.isArray(raw.events)) {
            return raw.events;
        }
        return null;
    },
    fetch: function (arg, success) {
        success({
            rawEvents: arg.eventSource.meta
        });
    }
};
var ArrayEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef]
});

var eventSourceDef$1 = {
    parseMeta: function (raw) {
        if (typeof raw === 'function') { // short form
            return raw;
        }
        else if (typeof raw.events === 'function') {
            return raw.events;
        }
        return null;
    },
    fetch: function (arg, success, failure) {
        var dateEnv = arg.calendar.dateEnv;
        var func = arg.eventSource.meta;
        unpromisify(func.bind(null, {
            start: dateEnv.toDate(arg.range.start),
            end: dateEnv.toDate(arg.range.end),
            startStr: dateEnv.formatIso(arg.range.start),
            endStr: dateEnv.formatIso(arg.range.end),
            timeZone: dateEnv.timeZone
        }), function (rawEvents) {
            success({ rawEvents: rawEvents }); // needs an object response
        }, failure // send errorObj directly to failure callback
        );
    }
};
var FuncEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef$1]
});

function requestJson(method, url, params, successCallback, failureCallback) {
    method = method.toUpperCase();
    var body = null;
    if (method === 'GET') {
        url = injectQueryStringParams(url, params);
    }
    else {
        body = encodeParams(params);
    }
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (method !== 'GET') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            try {
                var res = JSON.parse(xhr.responseText);
                successCallback(res, xhr);
            }
            catch (err) {
                failureCallback('Failure parsing JSON', xhr);
            }
        }
        else {
            failureCallback('Request failed', xhr);
        }
    };
    xhr.onerror = function () {
        failureCallback('Request failed', xhr);
    };
    xhr.send(body);
}
function injectQueryStringParams(url, params) {
    return url +
        (url.indexOf('?') === -1 ? '?' : '&') +
        encodeParams(params);
}
function encodeParams(params) {
    var parts = [];
    for (var key in params) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    }
    return parts.join('&');
}

var eventSourceDef$2 = {
    parseMeta: function (raw) {
        if (typeof raw === 'string') { // short form
            raw = { url: raw };
        }
        else if (!raw || typeof raw !== 'object' || !raw.url) {
            return null;
        }
        return {
            url: raw.url,
            method: (raw.method || 'GET').toUpperCase(),
            extraParams: raw.extraParams,
            startParam: raw.startParam,
            endParam: raw.endParam,
            timeZoneParam: raw.timeZoneParam
        };
    },
    fetch: function (arg, success, failure) {
        var meta = arg.eventSource.meta;
        var requestParams = buildRequestParams(meta, arg.range, arg.calendar);
        requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
            success({ rawEvents: rawEvents, xhr: xhr });
        }, function (errorMessage, xhr) {
            failure({ message: errorMessage, xhr: xhr });
        });
    }
};
var JsonFeedEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef$2]
});
function buildRequestParams(meta, range, calendar) {
    var dateEnv = calendar.dateEnv;
    var startParam;
    var endParam;
    var timeZoneParam;
    var customRequestParams;
    var params = {};
    startParam = meta.startParam;
    if (startParam == null) {
        startParam = calendar.opt('startParam');
    }
    endParam = meta.endParam;
    if (endParam == null) {
        endParam = calendar.opt('endParam');
    }
    timeZoneParam = meta.timeZoneParam;
    if (timeZoneParam == null) {
        timeZoneParam = calendar.opt('timeZoneParam');
    }
    // retrieve any outbound GET/POST data from the options
    if (typeof meta.extraParams === 'function') {
        // supplied as a function that returns a key/value object
        customRequestParams = meta.extraParams();
    }
    else {
        // probably supplied as a straight key/value object
        customRequestParams = meta.extraParams || {};
    }
    __assign(params, customRequestParams);
    params[startParam] = dateEnv.formatIso(range.start);
    params[endParam] = dateEnv.formatIso(range.end);
    if (dateEnv.timeZone !== 'local') {
        params[timeZoneParam] = dateEnv.timeZone;
    }
    return params;
}

var recurring = {
    parse: function (rawEvent, leftoverProps, dateEnv) {
        var createMarker = dateEnv.createMarker.bind(dateEnv);
        var processors = {
            daysOfWeek: null,
            startTime: createDuration,
            endTime: createDuration,
            startRecur: createMarker,
            endRecur: createMarker
        };
        var props = refineProps(rawEvent, processors, {}, leftoverProps);
        var anyValid = false;
        for (var propName in props) {
            if (props[propName] != null) {
                anyValid = true;
                break;
            }
        }
        if (anyValid) {
            var duration = null;
            if ('duration' in leftoverProps) {
                duration = createDuration(leftoverProps.duration);
                delete leftoverProps.duration;
            }
            if (!duration && props.startTime && props.endTime) {
                duration = subtractDurations(props.endTime, props.startTime);
            }
            return {
                allDayGuess: Boolean(!props.startTime && !props.endTime),
                duration: duration,
                typeData: props // doesn't need endTime anymore but oh well
            };
        }
        return null;
    },
    expand: function (typeData, framingRange, dateEnv) {
        var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
        if (clippedFramingRange) {
            return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
        }
        else {
            return [];
        }
    }
};
var SimpleRecurrencePlugin = createPlugin({
    recurringTypes: [recurring]
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
    var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
    var dayMarker = startOfDay(framingRange.start);
    var endMarker = framingRange.end;
    var instanceStarts = [];
    while (dayMarker < endMarker) {
        var instanceStart 
        // if everyday, or this particular day-of-week
        = void 0;
        // if everyday, or this particular day-of-week
        if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
            if (startTime) {
                instanceStart = dateEnv.add(dayMarker, startTime);
            }
            else {
                instanceStart = dayMarker;
            }
            instanceStarts.push(instanceStart);
        }
        dayMarker = addDays(dayMarker, 1);
    }
    return instanceStarts;
}

var DefaultOptionChangeHandlers = createPlugin({
    optionChangeHandlers: {
        events: function (events, calendar, deepEqual) {
            handleEventSources([events], calendar, deepEqual);
        },
        eventSources: handleEventSources,
        plugins: handlePlugins
    }
});
function handleEventSources(inputs, calendar, deepEqual) {
    var unfoundSources = hashValuesToArray(calendar.state.eventSources);
    var newInputs = [];
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var input = inputs_1[_i];
        var inputFound = false;
        for (var i = 0; i < unfoundSources.length; i++) {
            if (deepEqual(unfoundSources[i]._raw, input)) {
                unfoundSources.splice(i, 1); // delete
                inputFound = true;
                break;
            }
        }
        if (!inputFound) {
            newInputs.push(input);
        }
    }
    for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
        var unfoundSource = unfoundSources_1[_a];
        calendar.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: unfoundSource.sourceId
        });
    }
    for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
        var newInput = newInputs_1[_b];
        calendar.addEventSource(newInput);
    }
}
// shortcoming: won't remove plugins
function handlePlugins(inputs, calendar) {
    calendar.addPluginInputs(inputs); // will gracefully handle duplicates
}

var config = {}; // TODO: make these options
var globalDefaults = {
    defaultRangeSeparator: ' - ',
    titleRangeSeparator: ' \u2013 ',
    defaultTimedEventDuration: '01:00:00',
    defaultAllDayEventDuration: { day: 1 },
    forceEventDuration: false,
    nextDayThreshold: '00:00:00',
    // display
    columnHeader: true,
    defaultView: '',
    aspectRatio: 1.35,
    header: {
        left: 'title',
        center: '',
        right: 'today prev,next'
    },
    weekends: true,
    weekNumbers: false,
    weekNumberCalculation: 'local',
    editable: false,
    // nowIndicator: false,
    scrollTime: '06:00:00',
    minTime: '00:00:00',
    maxTime: '24:00:00',
    showNonCurrentDates: true,
    // event ajax
    lazyFetching: true,
    startParam: 'start',
    endParam: 'end',
    timeZoneParam: 'timeZone',
    timeZone: 'local',
    // allDayDefault: undefined,
    // locale
    locales: [],
    locale: '',
    // dir: will get this from the default locale
    // buttonIcons: null,
    // allows setting a min-height to the event segment to prevent short events overlapping each other
    timeGridEventMinHeight: 0,
    themeSystem: 'standard',
    // eventResizableFromStart: false,
    dragRevertDuration: 500,
    dragScroll: true,
    allDayMaintainDuration: false,
    // selectable: false,
    unselectAuto: true,
    // selectMinDistance: 0,
    dropAccept: '*',
    eventOrder: 'start,-duration,allDay,title',
    // ^ if start tie, longer events go before shorter. final tie-breaker is title text
    // rerenderDelay: null,
    eventLimit: false,
    eventLimitClick: 'popover',
    dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1000,
    eventDragMinDistance: 5 // only applies to mouse
};
var rtlDefaults = {
    header: {
        left: 'next,prev today',
        center: '',
        right: 'title'
    },
    buttonIcons: {
        // TODO: make RTL support the responibility of the theme
        prev: 'fc-icon-chevron-right',
        next: 'fc-icon-chevron-left',
        prevYear: 'fc-icon-chevrons-right',
        nextYear: 'fc-icon-chevrons-left'
    }
};
var complexOptions = [
    'header',
    'footer',
    'buttonText',
    'buttonIcons'
];
// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
    return mergeProps(optionObjs, complexOptions);
}
// TODO: move this stuff to a "plugin"-related file...
var INTERNAL_PLUGINS = [
    ArrayEventSourcePlugin,
    FuncEventSourcePlugin,
    JsonFeedEventSourcePlugin,
    SimpleRecurrencePlugin,
    DefaultOptionChangeHandlers
];
function refinePluginDefs(pluginInputs) {
    var plugins = [];
    for (var _i = 0, pluginInputs_1 = pluginInputs; _i < pluginInputs_1.length; _i++) {
        var pluginInput = pluginInputs_1[_i];
        if (typeof pluginInput === 'string') {
            var globalName = 'FullCalendar' + capitaliseFirstLetter(pluginInput);
            if (!window[globalName]) {
                console.warn('Plugin file not loaded for ' + pluginInput);
            }
            else {
                plugins.push(window[globalName].default); // is an ES6 module
            }
        }
        else {
            plugins.push(pluginInput);
        }
    }
    return INTERNAL_PLUGINS.concat(plugins);
}

var RAW_EN_LOCALE = {
    code: 'en',
    week: {
        dow: 0,
        doy: 4 // 4 days need to be within the year to be considered the first week
    },
    dir: 'ltr',
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day',
        list: 'list'
    },
    weekLabel: 'W',
    allDayText: 'all-day',
    eventLimitText: 'more',
    noEventsMessage: 'No events to display'
};
function parseRawLocales(explicitRawLocales) {
    var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
    var globalArray = window['FullCalendarLocalesAll'] || []; // from locales-all.js
    var globalObject = window['FullCalendarLocales'] || {}; // from locales/*.js. keys are meaningless
    var allRawLocales = globalArray.concat(// globalArray is low prio
    hashValuesToArray(globalObject), // medium prio
    explicitRawLocales // highest prio
    );
    var rawLocaleMap = {
        en: RAW_EN_LOCALE // necessary?
    };
    for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
        var rawLocale = allRawLocales_1[_i];
        rawLocaleMap[rawLocale.code] = rawLocale;
    }
    return {
        map: rawLocaleMap,
        defaultCode: defaultCode
    };
}
function buildLocale(inputSingular, available) {
    if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
        return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
    }
    else {
        return queryLocale(inputSingular, available);
    }
}
function queryLocale(codeArg, available) {
    var codes = [].concat(codeArg || []); // will convert to array
    var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
    return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
    for (var i = 0; i < codes.length; i++) {
        var parts = codes[i].toLocaleLowerCase().split('-');
        for (var j = parts.length; j > 0; j--) {
            var simpleId = parts.slice(0, j).join('-');
            if (available[simpleId]) {
                return available[simpleId];
            }
        }
    }
    return null;
}
function parseLocale(codeArg, codes, raw) {
    var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
    delete merged.code; // don't want this part of the options
    var week = merged.week;
    delete merged.week;
    return {
        codeArg: codeArg,
        codes: codes,
        week: week,
        simpleNumberFormat: new Intl.NumberFormat(codeArg),
        options: merged
    };
}

var OptionsManager = /** @class */ (function () {
    function OptionsManager(overrides) {
        this.overrides = __assign({}, overrides); // make a copy
        this.dynamicOverrides = {};
        this.compute();
    }
    OptionsManager.prototype.mutate = function (updates, removals, isDynamic) {
        var overrideHash = isDynamic ? this.dynamicOverrides : this.overrides;
        __assign(overrideHash, updates);
        for (var _i = 0, removals_1 = removals; _i < removals_1.length; _i++) {
            var propName = removals_1[_i];
            delete overrideHash[propName];
        }
        this.compute();
    };
    // Computes the flattened options hash for the calendar and assigns to `this.options`.
    // Assumes this.overrides and this.dynamicOverrides have already been initialized.
    OptionsManager.prototype.compute = function () {
        // TODO: not a very efficient system
        var locales = firstDefined(// explicit locale option given?
        this.dynamicOverrides.locales, this.overrides.locales, globalDefaults.locales);
        var locale = firstDefined(// explicit locales option given?
        this.dynamicOverrides.locale, this.overrides.locale, globalDefaults.locale);
        var available = parseRawLocales(locales);
        var localeDefaults = buildLocale(locale || available.defaultCode, available.map).options;
        var dir = firstDefined(// based on options computed so far, is direction RTL?
        this.dynamicOverrides.dir, this.overrides.dir, localeDefaults.dir);
        var dirDefaults = dir === 'rtl' ? rtlDefaults : {};
        this.dirDefaults = dirDefaults;
        this.localeDefaults = localeDefaults;
        this.computed = mergeOptions([
            globalDefaults,
            dirDefaults,
            localeDefaults,
            this.overrides,
            this.dynamicOverrides
        ]);
    };
    return OptionsManager;
}());

var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
    calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
    return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = /** @class */ (function () {
    function GregorianCalendarSystem() {
    }
    GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
        return d.getUTCFullYear();
    };
    GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
        return d.getUTCMonth();
    };
    GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
        return d.getUTCDate();
    };
    GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
        return arrayToUtcDate(arr);
    };
    GregorianCalendarSystem.prototype.markerToArray = function (marker) {
        return dateToUtcArray(marker);
    };
    return GregorianCalendarSystem;
}());
registerCalendarSystem('gregory', GregorianCalendarSystem);

var ISO_RE = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
    var m = ISO_RE.exec(str);
    if (m) {
        var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number('0.' + m[12]) * 1000 : 0));
        if (isValidDate(marker)) {
            var timeZoneOffset = null;
            if (m[13]) {
                timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                    Number(m[18] || 0));
            }
            return {
                marker: marker,
                isTimeUnspecified: !m[6],
                timeZoneOffset: timeZoneOffset
            };
        }
    }
    return null;
}

var DateEnv = /** @class */ (function () {
    function DateEnv(settings) {
        var timeZone = this.timeZone = settings.timeZone;
        var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
        if (settings.namedTimeZoneImpl && isNamedTimeZone) {
            this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
        }
        this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
        this.calendarSystem = createCalendarSystem(settings.calendarSystem);
        this.locale = settings.locale;
        this.weekDow = settings.locale.week.dow;
        this.weekDoy = settings.locale.week.doy;
        if (settings.weekNumberCalculation === 'ISO') {
            this.weekDow = 1;
            this.weekDoy = 4;
        }
        if (typeof settings.firstDay === 'number') {
            this.weekDow = settings.firstDay;
        }
        if (typeof settings.weekNumberCalculation === 'function') {
            this.weekNumberFunc = settings.weekNumberCalculation;
        }
        this.weekLabel = settings.weekLabel != null ? settings.weekLabel : settings.locale.options.weekLabel;
        this.cmdFormatter = settings.cmdFormatter;
    }
    // Creating / Parsing
    DateEnv.prototype.createMarker = function (input) {
        var meta = this.createMarkerMeta(input);
        if (meta === null) {
            return null;
        }
        return meta.marker;
    };
    DateEnv.prototype.createNowMarker = function () {
        if (this.canComputeOffset) {
            return this.timestampToMarker(new Date().valueOf());
        }
        else {
            // if we can't compute the current date val for a timezone,
            // better to give the current local date vals than UTC
            return arrayToUtcDate(dateToLocalArray(new Date()));
        }
    };
    DateEnv.prototype.createMarkerMeta = function (input) {
        if (typeof input === 'string') {
            return this.parse(input);
        }
        var marker = null;
        if (typeof input === 'number') {
            marker = this.timestampToMarker(input);
        }
        else if (input instanceof Date) {
            input = input.valueOf();
            if (!isNaN(input)) {
                marker = this.timestampToMarker(input);
            }
        }
        else if (Array.isArray(input)) {
            marker = arrayToUtcDate(input);
        }
        if (marker === null || !isValidDate(marker)) {
            return null;
        }
        return { marker: marker, isTimeUnspecified: false, forcedTzo: null };
    };
    DateEnv.prototype.parse = function (s) {
        var parts = parse(s);
        if (parts === null) {
            return null;
        }
        var marker = parts.marker;
        var forcedTzo = null;
        if (parts.timeZoneOffset !== null) {
            if (this.canComputeOffset) {
                marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
            }
            else {
                forcedTzo = parts.timeZoneOffset;
            }
        }
        return { marker: marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo: forcedTzo };
    };
    // Accessors
    DateEnv.prototype.getYear = function (marker) {
        return this.calendarSystem.getMarkerYear(marker);
    };
    DateEnv.prototype.getMonth = function (marker) {
        return this.calendarSystem.getMarkerMonth(marker);
    };
    // Adding / Subtracting
    DateEnv.prototype.add = function (marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += dur.years;
        a[1] += dur.months;
        a[2] += dur.days;
        a[6] += dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.subtract = function (marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] -= dur.years;
        a[1] -= dur.months;
        a[2] -= dur.days;
        a[6] -= dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.addYears = function (marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.addMonths = function (marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[1] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    // Diffing Whole Units
    DateEnv.prototype.diffWholeYears = function (m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
            calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
            return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
        }
        return null;
    };
    DateEnv.prototype.diffWholeMonths = function (m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
            return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
        }
        return null;
    };
    // Range / Duration
    DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
        var n = this.diffWholeYears(m0, m1);
        if (n !== null) {
            return { unit: 'year', value: n };
        }
        n = this.diffWholeMonths(m0, m1);
        if (n !== null) {
            return { unit: 'month', value: n };
        }
        n = diffWholeWeeks(m0, m1);
        if (n !== null) {
            return { unit: 'week', value: n };
        }
        n = diffWholeDays(m0, m1);
        if (n !== null) {
            return { unit: 'day', value: n };
        }
        n = diffHours(m0, m1);
        if (isInt(n)) {
            return { unit: 'hour', value: n };
        }
        n = diffMinutes(m0, m1);
        if (isInt(n)) {
            return { unit: 'minute', value: n };
        }
        n = diffSeconds(m0, m1);
        if (isInt(n)) {
            return { unit: 'second', value: n };
        }
        return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
    };
    DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
        // TODO: can use greatestWholeUnit
        var diff;
        if (d.years) {
            diff = this.diffWholeYears(m0, m1);
            if (diff !== null) {
                return diff / asRoughYears(d);
            }
        }
        if (d.months) {
            diff = this.diffWholeMonths(m0, m1);
            if (diff !== null) {
                return diff / asRoughMonths(d);
            }
        }
        if (d.days) {
            diff = diffWholeDays(m0, m1);
            if (diff !== null) {
                return diff / asRoughDays(d);
            }
        }
        return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
    };
    // Start-Of
    DateEnv.prototype.startOf = function (m, unit) {
        if (unit === 'year') {
            return this.startOfYear(m);
        }
        else if (unit === 'month') {
            return this.startOfMonth(m);
        }
        else if (unit === 'week') {
            return this.startOfWeek(m);
        }
        else if (unit === 'day') {
            return startOfDay(m);
        }
        else if (unit === 'hour') {
            return startOfHour(m);
        }
        else if (unit === 'minute') {
            return startOfMinute(m);
        }
        else if (unit === 'second') {
            return startOfSecond(m);
        }
    };
    DateEnv.prototype.startOfYear = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m)
        ]);
    };
    DateEnv.prototype.startOfMonth = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m)
        ]);
    };
    DateEnv.prototype.startOfWeek = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m),
            m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7)
        ]);
    };
    // Week Number
    DateEnv.prototype.computeWeekNumber = function (marker) {
        if (this.weekNumberFunc) {
            return this.weekNumberFunc(this.toDate(marker));
        }
        else {
            return weekOfYear(marker, this.weekDow, this.weekDoy);
        }
    };
    // TODO: choke on timeZoneName: long
    DateEnv.prototype.format = function (marker, formatter, dateOptions) {
        if (dateOptions === void 0) { dateOptions = {}; }
        return formatter.format({
            marker: marker,
            timeZoneOffset: dateOptions.forcedTzo != null ?
                dateOptions.forcedTzo :
                this.offsetForMarker(marker)
        }, this);
    };
    DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
        if (dateOptions === void 0) { dateOptions = {}; }
        if (dateOptions.isEndExclusive) {
            end = addMs(end, -1);
        }
        return formatter.formatRange({
            marker: start,
            timeZoneOffset: dateOptions.forcedStartTzo != null ?
                dateOptions.forcedStartTzo :
                this.offsetForMarker(start)
        }, {
            marker: end,
            timeZoneOffset: dateOptions.forcedEndTzo != null ?
                dateOptions.forcedEndTzo :
                this.offsetForMarker(end)
        }, this);
    };
    DateEnv.prototype.formatIso = function (marker, extraOptions) {
        if (extraOptions === void 0) { extraOptions = {}; }
        var timeZoneOffset = null;
        if (!extraOptions.omitTimeZoneOffset) {
            if (extraOptions.forcedTzo != null) {
                timeZoneOffset = extraOptions.forcedTzo;
            }
            else {
                timeZoneOffset = this.offsetForMarker(marker);
            }
        }
        return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
    };
    // TimeZone
    DateEnv.prototype.timestampToMarker = function (ms) {
        if (this.timeZone === 'local') {
            return arrayToUtcDate(dateToLocalArray(new Date(ms)));
        }
        else if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
            return new Date(ms);
        }
        else {
            return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
        }
    };
    DateEnv.prototype.offsetForMarker = function (m) {
        if (this.timeZone === 'local') {
            return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
        }
        else if (this.timeZone === 'UTC') {
            return 0;
        }
        else if (this.namedTimeZoneImpl) {
            return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
        }
        return null;
    };
    // Conversion
    DateEnv.prototype.toDate = function (m, forcedTzo) {
        if (this.timeZone === 'local') {
            return arrayToLocalDate(dateToUtcArray(m));
        }
        else if (this.timeZone === 'UTC') {
            return new Date(m.valueOf()); // make sure it's a copy
        }
        else if (!this.namedTimeZoneImpl) {
            return new Date(m.valueOf() - (forcedTzo || 0));
        }
        else {
            return new Date(m.valueOf() -
                this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60 // convert minutes -> ms
            );
        }
    };
    return DateEnv;
}());

var SIMPLE_SOURCE_PROPS = {
    id: String,
    allDayDefault: Boolean,
    eventDataTransform: Function,
    success: Function,
    failure: Function
};
var uid$2 = 0;
function doesSourceNeedRange(eventSource, calendar) {
    var defs = calendar.pluginSystem.hooks.eventSourceDefs;
    return !defs[eventSource.sourceDefId].ignoreRange;
}
function parseEventSource(raw, calendar) {
    var defs = calendar.pluginSystem.hooks.eventSourceDefs;
    for (var i = defs.length - 1; i >= 0; i--) { // later-added plugins take precedence
        var def = defs[i];
        var meta = def.parseMeta(raw);
        if (meta) {
            var res = parseEventSourceProps(typeof raw === 'object' ? raw : {}, meta, i, calendar);
            res._raw = raw;
            return res;
        }
    }
    return null;
}
function parseEventSourceProps(raw, meta, sourceDefId, calendar) {
    var leftovers0 = {};
    var props = refineProps(raw, SIMPLE_SOURCE_PROPS, {}, leftovers0);
    var leftovers1 = {};
    var ui = processUnscopedUiProps(leftovers0, calendar, leftovers1);
    props.isFetching = false;
    props.latestFetchId = '';
    props.fetchRange = null;
    props.publicId = String(raw.id || '');
    props.sourceId = String(uid$2++);
    props.sourceDefId = sourceDefId;
    props.meta = meta;
    props.ui = ui;
    props.extendedProps = leftovers1;
    return props;
}

function reduceEventSources (eventSources, action, dateProfile, calendar) {
    switch (action.type) {
        case 'ADD_EVENT_SOURCES': // already parsed
            return addSources(eventSources, action.sources, dateProfile ? dateProfile.activeRange : null, calendar);
        case 'REMOVE_EVENT_SOURCE':
            return removeSource(eventSources, action.sourceId);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'SET_DATE':
        case 'SET_VIEW_TYPE':
            if (dateProfile) {
                return fetchDirtySources(eventSources, dateProfile.activeRange, calendar);
            }
            else {
                return eventSources;
            }
        case 'FETCH_EVENT_SOURCES':
        case 'CHANGE_TIMEZONE':
            return fetchSourcesByIds(eventSources, action.sourceIds ?
                arrayToHash(action.sourceIds) :
                excludeStaticSources(eventSources, calendar), dateProfile ? dateProfile.activeRange : null, calendar);
        case 'RECEIVE_EVENTS':
        case 'RECEIVE_EVENT_ERROR':
            return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return {};
        default:
            return eventSources;
    }
}
var uid$3 = 0;
function addSources(eventSourceHash, sources, fetchRange, calendar) {
    var hash = {};
    for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
        var source = sources_1[_i];
        hash[source.sourceId] = source;
    }
    if (fetchRange) {
        hash = fetchDirtySources(hash, fetchRange, calendar);
    }
    return __assign({}, eventSourceHash, hash);
}
function removeSource(eventSourceHash, sourceId) {
    return filterHash(eventSourceHash, function (eventSource) {
        return eventSource.sourceId !== sourceId;
    });
}
function fetchDirtySources(sourceHash, fetchRange, calendar) {
    return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
        return isSourceDirty(eventSource, fetchRange, calendar);
    }), fetchRange, calendar);
}
function isSourceDirty(eventSource, fetchRange, calendar) {
    if (!doesSourceNeedRange(eventSource, calendar)) {
        return !eventSource.latestFetchId;
    }
    else {
        return !calendar.opt('lazyFetching') ||
            !eventSource.fetchRange ||
            fetchRange.start < eventSource.fetchRange.start ||
            fetchRange.end > eventSource.fetchRange.end;
    }
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, calendar) {
    var nextSources = {};
    for (var sourceId in prevSources) {
        var source = prevSources[sourceId];
        if (sourceIdHash[sourceId]) {
            nextSources[sourceId] = fetchSource(source, fetchRange, calendar);
        }
        else {
            nextSources[sourceId] = source;
        }
    }
    return nextSources;
}
function fetchSource(eventSource, fetchRange, calendar) {
    var sourceDef = calendar.pluginSystem.hooks.eventSourceDefs[eventSource.sourceDefId];
    var fetchId = String(uid$3++);
    sourceDef.fetch({
        eventSource: eventSource,
        calendar: calendar,
        range: fetchRange
    }, function (res) {
        var rawEvents = res.rawEvents;
        var calSuccess = calendar.opt('eventSourceSuccess');
        var calSuccessRes;
        var sourceSuccessRes;
        if (eventSource.success) {
            sourceSuccessRes = eventSource.success(rawEvents, res.xhr);
        }
        if (calSuccess) {
            calSuccessRes = calSuccess(rawEvents, res.xhr);
        }
        rawEvents = sourceSuccessRes || calSuccessRes || rawEvents;
        calendar.dispatch({
            type: 'RECEIVE_EVENTS',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            rawEvents: rawEvents
        });
    }, function (error) {
        var callFailure = calendar.opt('eventSourceFailure');
        console.warn(error.message, error);
        if (eventSource.failure) {
            eventSource.failure(error);
        }
        if (callFailure) {
            callFailure(error);
        }
        calendar.dispatch({
            type: 'RECEIVE_EVENT_ERROR',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            error: error
        });
    });
    return __assign({}, eventSource, { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
    var _a;
    var eventSource = sourceHash[sourceId];
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId) {
        return __assign({}, sourceHash, (_a = {}, _a[sourceId] = __assign({}, eventSource, { isFetching: false, fetchRange: fetchRange }), _a));
    }
    return sourceHash;
}
function excludeStaticSources(eventSources, calendar) {
    return filterHash(eventSources, function (eventSource) {
        return doesSourceNeedRange(eventSource, calendar);
    });
}

var DateProfileGenerator = /** @class */ (function () {
    function DateProfileGenerator(viewSpec, calendar) {
        this.viewSpec = viewSpec;
        this.options = viewSpec.options;
        this.dateEnv = calendar.dateEnv;
        this.calendar = calendar;
        this.initHiddenDays();
    }
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate) {
        var dateEnv = this.dateEnv;
        var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(prevDate, -1);
    };
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate) {
        var dateEnv = this.dateEnv;
        var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(nextDate, 1);
    };
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
        if (forceToValid === void 0) { forceToValid = false; }
        var validRange;
        var minTime = null;
        var maxTime = null;
        var currentInfo;
        var isRangeAllDay;
        var renderRange;
        var activeRange;
        var isValid;
        validRange = this.buildValidRange();
        validRange = this.trimHiddenDays(validRange);
        if (forceToValid) {
            currentDate = constrainMarkerToRange(currentDate, validRange);
        }
        currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
        renderRange = this.trimHiddenDays(renderRange);
        activeRange = renderRange;
        if (!this.options.showNonCurrentDates) {
            activeRange = intersectRanges(activeRange, currentInfo.range);
        }
        minTime = createDuration(this.options.minTime);
        maxTime = createDuration(this.options.maxTime);
        activeRange = this.adjustActiveRange(activeRange, minTime, maxTime);
        activeRange = intersectRanges(activeRange, validRange); // might return null
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = rangesIntersect(currentInfo.range, validRange);
        return {
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validRange: validRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentRange: currentInfo.range,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay: isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeRange: activeRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderRange: renderRange,
            // Duration object that denotes the first visible time of any given day
            minTime: minTime,
            // Duration object that denotes the exclusive visible end time of any given day
            maxTime: maxTime,
            isValid: isValid,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration)
            // pass a fallback (might be null) ^
        };
    };
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildValidRange = function () {
        return this.getRangeOption('validRange', this.calendar.getNow()) ||
            { start: null, end: null }; // completely open-ended
    };
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
        var _a = this, viewSpec = _a.viewSpec, dateEnv = _a.dateEnv;
        var duration = null;
        var unit = null;
        var range = null;
        var dayCount;
        if (viewSpec.duration) {
            duration = viewSpec.duration;
            unit = viewSpec.durationUnit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        else if ((dayCount = this.options.dayCount)) {
            unit = 'day';
            range = this.buildRangeFromDayCount(date, direction, dayCount);
        }
        else if ((range = this.buildCustomVisibleRange(date))) {
            unit = dateEnv.greatestWholeUnit(range.start, range.end).unit;
        }
        else {
            duration = this.getFallbackDuration();
            unit = greatestDurationDenominator(duration).unit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return { duration: duration, unit: unit, range: range };
    };
    DateProfileGenerator.prototype.getFallbackDuration = function () {
        return createDuration({ day: 1 });
    };
    // Returns a new activeRange to have time values (un-ambiguate)
    // minTime or maxTime causes the range to expand.
    DateProfileGenerator.prototype.adjustActiveRange = function (range, minTime, maxTime) {
        var dateEnv = this.dateEnv;
        var start = range.start;
        var end = range.end;
        if (this.viewSpec.class.prototype.usesMinMaxTime) {
            // expand active range if minTime is negative (why not when positive?)
            if (asRoughDays(minTime) < 0) {
                start = startOfDay(start); // necessary?
                start = dateEnv.add(start, minTime);
            }
            // expand active range if maxTime is beyond one day (why not when positive?)
            if (asRoughDays(maxTime) > 1) {
                end = startOfDay(end); // necessary?
                end = addDays(end, -1);
                end = dateEnv.add(end, maxTime);
            }
        }
        return { start: start, end: end };
    };
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed greatestDurationDenominator unit of duration.
    DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
        var dateEnv = this.dateEnv;
        var alignment = this.options.dateAlignment;
        var dateIncrementInput;
        var dateIncrementDuration;
        var start;
        var end;
        var res;
        // compute what the alignment should be
        if (!alignment) {
            dateIncrementInput = this.options.dateIncrement;
            if (dateIncrementInput) {
                dateIncrementDuration = createDuration(dateIncrementInput);
                // use the smaller of the two units
                if (asRoughMs(dateIncrementDuration) < asRoughMs(duration)) {
                    alignment = greatestDurationDenominator(dateIncrementDuration, !getWeeksFromInput(dateIncrementInput)).unit;
                }
                else {
                    alignment = unit;
                }
            }
            else {
                alignment = unit;
            }
        }
        // if the view displays a single day or smaller
        if (asRoughDays(duration) <= 1) {
            if (this.isHiddenDay(start)) {
                start = this.skipHiddenDays(start, direction);
                start = startOfDay(start);
            }
        }
        function computeRes() {
            start = dateEnv.startOf(date, alignment);
            end = dateEnv.add(start, duration);
            res = { start: start, end: end };
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    };
    // Builds the "current" range when a dayCount is specified.
    DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
        var dateEnv = this.dateEnv;
        var customAlignment = this.options.dateAlignment;
        var runningCount = 0;
        var start = date;
        var end;
        if (customAlignment) {
            start = dateEnv.startOf(start, customAlignment);
        }
        start = startOfDay(start);
        start = this.skipHiddenDays(start, direction);
        end = start;
        do {
            end = addDays(end, 1);
            if (!this.isHiddenDay(end)) {
                runningCount++;
            }
        } while (runningCount < dayCount);
        return { start: start, end: end };
    };
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentRange and activeRange at the same time.
    DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
        var dateEnv = this.dateEnv;
        var visibleRange = this.getRangeOption('visibleRange', dateEnv.toDate(date));
        if (visibleRange && (visibleRange.start == null || visibleRange.end == null)) {
            return null;
        }
        return visibleRange;
    };
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        return currentRange;
    };
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
        var dateIncrementInput = this.options.dateIncrement;
        var customAlignment;
        if (dateIncrementInput) {
            return createDuration(dateIncrementInput);
        }
        else if ((customAlignment = this.options.dateAlignment)) {
            return createDuration(1, customAlignment);
        }
        else if (fallback) {
            return fallback;
        }
        else {
            return createDuration({ days: 1 });
        }
    };
    // Arguments after name will be forwarded to a hypothetical function value
    // WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
    // Always clone your objects if you fear mutation.
    DateProfileGenerator.prototype.getRangeOption = function (name) {
        var otherArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherArgs[_i - 1] = arguments[_i];
        }
        var val = this.options[name];
        if (typeof val === 'function') {
            val = val.apply(null, otherArgs);
        }
        if (val) {
            val = parseRange(val, this.dateEnv);
        }
        if (val) {
            val = computeVisibleDayRange(val);
        }
        return val;
    };
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/
    // Initializes internal variables related to calculating hidden days-of-week
    DateProfileGenerator.prototype.initHiddenDays = function () {
        var hiddenDays = this.options.hiddenDays || []; // array of day-of-week indices that are hidden
        var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
        var dayCnt = 0;
        var i;
        if (this.options.weekends === false) {
            hiddenDays.push(0, 6); // 0=sunday, 6=saturday
        }
        for (i = 0; i < 7; i++) {
            if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                dayCnt++;
            }
        }
        if (!dayCnt) {
            throw new Error('invalid hiddenDays'); // all days were hidden? bad.
        }
        this.isHiddenDayHash = isHiddenDayHash;
    };
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
    DateProfileGenerator.prototype.trimHiddenDays = function (range) {
        var start = range.start;
        var end = range.end;
        if (start) {
            start = this.skipHiddenDays(start);
        }
        if (end) {
            end = this.skipHiddenDays(end, -1, true);
        }
        if (start == null || end == null || start < end) {
            return { start: start, end: end };
        }
        return null;
    };
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Date (used for UTC)
    DateProfileGenerator.prototype.isHiddenDay = function (day) {
        if (day instanceof Date) {
            day = day.getUTCDay();
        }
        return this.isHiddenDayHash[day];
    };
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
    DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
        if (inc === void 0) { inc = 1; }
        if (isExclusive === void 0) { isExclusive = false; }
        while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
            date = addDays(date, inc);
        }
        return date;
    };
    return DateProfileGenerator;
}());
// TODO: find a way to avoid comparing DateProfiles. it's tedious
function isDateProfilesEqual(p0, p1) {
    return rangesEqual(p0.validRange, p1.validRange) &&
        rangesEqual(p0.activeRange, p1.activeRange) &&
        rangesEqual(p0.renderRange, p1.renderRange) &&
        durationsEqual(p0.minTime, p1.minTime) &&
        durationsEqual(p0.maxTime, p1.maxTime);
    /*
    TODO: compare more?
      currentRange: DateRange
      currentRangeUnit: string
      isRangeAllDay: boolean
      isValid: boolean
      dateIncrement: Duration
    */
}

function reduce (state, action, calendar) {
    var viewType = reduceViewType(state.viewType, action);
    var dateProfile = reduceDateProfile(state.dateProfile, action, state.currentDate, viewType, calendar);
    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendar);
    var nextState = __assign({}, state, { viewType: viewType,
        dateProfile: dateProfile, currentDate: reduceCurrentDate(state.currentDate, action, dateProfile), eventSources: eventSources, eventStore: reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendar), dateSelection: reduceDateSelection(state.dateSelection, action, calendar), eventSelection: reduceSelectedEvent(state.eventSelection, action), eventDrag: reduceEventDrag(state.eventDrag, action, eventSources, calendar), eventResize: reduceEventResize(state.eventResize, action, eventSources, calendar), eventSourceLoadingLevel: computeLoadingLevel(eventSources), loadingLevel: computeLoadingLevel(eventSources) });
    for (var _i = 0, _a = calendar.pluginSystem.hooks.reducers; _i < _a.length; _i++) {
        var reducerFunc = _a[_i];
        nextState = reducerFunc(nextState, action, calendar);
    }
    // console.log(action.type, nextState)
    return nextState;
}
function reduceViewType(currentViewType, action) {
    switch (action.type) {
        case 'SET_VIEW_TYPE':
            return action.viewType;
        default:
            return currentViewType;
    }
}
function reduceDateProfile(currentDateProfile, action, currentDate, viewType, calendar) {
    var newDateProfile;
    switch (action.type) {
        case 'PREV':
            newDateProfile = calendar.dateProfileGenerators[viewType].buildPrev(currentDateProfile, currentDate);
            break;
        case 'NEXT':
            newDateProfile = calendar.dateProfileGenerators[viewType].buildNext(currentDateProfile, currentDate);
            break;
        case 'SET_DATE':
            if (!currentDateProfile.activeRange ||
                !rangeContainsMarker(currentDateProfile.currentRange, action.dateMarker)) {
                newDateProfile = calendar.dateProfileGenerators[viewType].build(action.dateMarker, undefined, true // forceToValid
                );
            }
            break;
        case 'SET_VIEW_TYPE':
            var generator = calendar.dateProfileGenerators[viewType];
            if (!generator) {
                throw new Error(viewType ?
                    'The FullCalendar view "' + viewType + '" does not exist. Make sure your plugins are loaded correctly.' :
                    'No available FullCalendar view plugins.');
            }
            newDateProfile = generator.build(action.dateMarker || currentDate, undefined, true // forceToValid
            );
            break;
    }
    if (newDateProfile &&
        newDateProfile.isValid &&
        !(currentDateProfile && isDateProfilesEqual(currentDateProfile, newDateProfile))) {
        return newDateProfile;
    }
    else {
        return currentDateProfile;
    }
}
function reduceCurrentDate(currentDate, action, dateProfile) {
    switch (action.type) {
        case 'PREV':
        case 'NEXT':
            if (!rangeContainsMarker(dateProfile.currentRange, currentDate)) {
                return dateProfile.currentRange.start;
            }
            else {
                return currentDate;
            }
        case 'SET_DATE':
        case 'SET_VIEW_TYPE':
            var newDate = action.dateMarker || currentDate;
            if (dateProfile.activeRange && !rangeContainsMarker(dateProfile.activeRange, newDate)) {
                return dateProfile.currentRange.start;
            }
            else {
                return newDate;
            }
        default:
            return currentDate;
    }
}
function reduceDateSelection(currentSelection, action, calendar) {
    switch (action.type) {
        case 'SELECT_DATES':
            return action.selection;
        case 'UNSELECT_DATES':
            return null;
        default:
            return currentSelection;
    }
}
function reduceSelectedEvent(currentInstanceId, action) {
    switch (action.type) {
        case 'SELECT_EVENT':
            return action.eventInstanceId;
        case 'UNSELECT_EVENT':
            return '';
        default:
            return currentInstanceId;
    }
}
function reduceEventDrag(currentDrag, action, sources, calendar) {
    switch (action.type) {
        case 'SET_EVENT_DRAG':
            var newDrag = action.state;
            return {
                affectedEvents: newDrag.affectedEvents,
                mutatedEvents: newDrag.mutatedEvents,
                isEvent: newDrag.isEvent,
                origSeg: newDrag.origSeg
            };
        case 'UNSET_EVENT_DRAG':
            return null;
        default:
            return currentDrag;
    }
}
function reduceEventResize(currentResize, action, sources, calendar) {
    switch (action.type) {
        case 'SET_EVENT_RESIZE':
            var newResize = action.state;
            return {
                affectedEvents: newResize.affectedEvents,
                mutatedEvents: newResize.mutatedEvents,
                isEvent: newResize.isEvent,
                origSeg: newResize.origSeg
            };
        case 'UNSET_EVENT_RESIZE':
            return null;
        default:
            return currentResize;
    }
}
function computeLoadingLevel(eventSources) {
    var cnt = 0;
    for (var sourceId in eventSources) {
        if (eventSources[sourceId].isFetching) {
            cnt++;
        }
    }
    return cnt;
}

var STANDARD_PROPS = {
    start: null,
    end: null,
    allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
    var span = parseOpenDateSpan(raw, dateEnv);
    var range = span.range;
    if (!range.start) {
        return null;
    }
    if (!range.end) {
        if (defaultDuration == null) {
            return null;
        }
        else {
            range.end = dateEnv.add(range.start, defaultDuration);
        }
    }
    return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/
function parseOpenDateSpan(raw, dateEnv) {
    var leftovers = {};
    var standardProps = refineProps(raw, STANDARD_PROPS, {}, leftovers);
    var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
    var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
    var allDay = standardProps.allDay;
    if (allDay == null) {
        allDay = (startMeta && startMeta.isTimeUnspecified) &&
            (!endMeta || endMeta.isTimeUnspecified);
    }
    // use this leftover object as the selection object
    leftovers.range = {
        start: startMeta ? startMeta.marker : null,
        end: endMeta ? endMeta.marker : null
    };
    leftovers.allDay = allDay;
    return leftovers;
}
function isDateSpansEqual(span0, span1) {
    return rangesEqual(span0.range, span1.range) &&
        span0.allDay === span1.allDay &&
        isSpanPropsEqual(span0, span1);
}
// the NON-DATE-RELATED props
function isSpanPropsEqual(span0, span1) {
    for (var propName in span1) {
        if (propName !== 'range' && propName !== 'allDay') {
            if (span0[propName] !== span1[propName]) {
                return false;
            }
        }
    }
    // are there any props that span0 has that span1 DOESN'T have?
    // both have range/allDay, so no need to special-case.
    for (var propName in span0) {
        if (!(propName in span1)) {
            return false;
        }
    }
    return true;
}
function buildDateSpanApi(span, dateEnv) {
    return {
        start: dateEnv.toDate(span.range.start),
        end: dateEnv.toDate(span.range.end),
        startStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
        endStr: dateEnv.formatIso(span.range.end, { omitTime: span.allDay }),
        allDay: span.allDay
    };
}
function buildDatePointApi(span, dateEnv) {
    return {
        date: dateEnv.toDate(span.range.start),
        dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
        allDay: span.allDay
    };
}
function fabricateEventRange(dateSpan, eventUiBases, calendar) {
    var def = parseEventDef({ editable: false }, '', // sourceId
    dateSpan.allDay, true, // hasEnd
    calendar);
    return {
        def: def,
        ui: compileEventUi(def, eventUiBases),
        instance: createEventInstance(def.defId, dateSpan.range),
        range: dateSpan.range,
        isStart: true,
        isEnd: true
    };
}

function compileViewDefs(defaultConfigs, overrideConfigs) {
    var hash = {};
    var viewType;
    for (viewType in defaultConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    for (viewType in overrideConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    if (hash[viewType]) {
        return hash[viewType];
    }
    var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    if (viewDef) {
        hash[viewType] = viewDef;
    }
    return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    var defaultConfig = defaultConfigs[viewType];
    var overrideConfig = overrideConfigs[viewType];
    var queryProp = function (name) {
        return (defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
            ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null);
    };
    var theClass = queryProp('class');
    var superType = queryProp('superType');
    if (!superType && theClass) {
        superType =
            findViewNameBySubclass(theClass, overrideConfigs) ||
                findViewNameBySubclass(theClass, defaultConfigs);
    }
    var superDef = null;
    if (superType) {
        if (superType === viewType) {
            throw new Error('Can\'t have a custom view type that references itself');
        }
        superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
    }
    if (!theClass && superDef) {
        theClass = superDef.class;
    }
    if (!theClass) {
        return null; // don't throw a warning, might be settings for a single-unit view
    }
    return {
        type: viewType,
        class: theClass,
        defaults: __assign({}, (superDef ? superDef.defaults : {}), (defaultConfig ? defaultConfig.options : {})),
        overrides: __assign({}, (superDef ? superDef.overrides : {}), (overrideConfig ? overrideConfig.options : {}))
    };
}
function findViewNameBySubclass(viewSubclass, configs) {
    var superProto = Object.getPrototypeOf(viewSubclass.prototype);
    for (var viewType in configs) {
        var parsed = configs[viewType];
        // need DIRECT subclass, so instanceof won't do it
        if (parsed.class && parsed.class.prototype === superProto) {
            return viewType;
        }
    }
    return '';
}

function parseViewConfigs(inputs) {
    return mapHash(inputs, parseViewConfig);
}
var VIEW_DEF_PROPS = {
    type: String,
    class: null
};
function parseViewConfig(input) {
    if (typeof input === 'function') {
        input = { class: input };
    }
    var options = {};
    var props = refineProps(input, VIEW_DEF_PROPS, {}, options);
    return {
        superType: props.type,
        class: props.class,
        options: options
    };
}

function buildViewSpecs(defaultInputs, optionsManager) {
    var defaultConfigs = parseViewConfigs(defaultInputs);
    var overrideConfigs = parseViewConfigs(optionsManager.overrides.views);
    var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
    return mapHash(viewDefs, function (viewDef) {
        return buildViewSpec(viewDef, overrideConfigs, optionsManager);
    });
}
function buildViewSpec(viewDef, overrideConfigs, optionsManager) {
    var durationInput = viewDef.overrides.duration ||
        viewDef.defaults.duration ||
        optionsManager.dynamicOverrides.duration ||
        optionsManager.overrides.duration;
    var duration = null;
    var durationUnit = '';
    var singleUnit = '';
    var singleUnitOverrides = {};
    if (durationInput) {
        duration = createDuration(durationInput);
        if (duration) { // valid?
            var denom = greatestDurationDenominator(duration, !getWeeksFromInput(durationInput));
            durationUnit = denom.unit;
            if (denom.value === 1) {
                singleUnit = durationUnit;
                singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].options : {};
            }
        }
    }
    var queryButtonText = function (options) {
        var buttonTextMap = options.buttonText || {};
        var buttonTextKey = viewDef.defaults.buttonTextKey;
        if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
            return buttonTextMap[buttonTextKey];
        }
        if (buttonTextMap[viewDef.type] != null) {
            return buttonTextMap[viewDef.type];
        }
        if (buttonTextMap[singleUnit] != null) {
            return buttonTextMap[singleUnit];
        }
    };
    return {
        type: viewDef.type,
        class: viewDef.class,
        duration: duration,
        durationUnit: durationUnit,
        singleUnit: singleUnit,
        options: __assign({}, globalDefaults, viewDef.defaults, optionsManager.dirDefaults, optionsManager.localeDefaults, optionsManager.overrides, singleUnitOverrides, viewDef.overrides, optionsManager.dynamicOverrides),
        buttonTextOverride: queryButtonText(optionsManager.dynamicOverrides) ||
            queryButtonText(optionsManager.overrides) || // constructor-specified buttonText lookup hash takes precedence
            viewDef.overrides.buttonText,
        buttonTextDefault: queryButtonText(optionsManager.localeDefaults) ||
            queryButtonText(optionsManager.dirDefaults) ||
            viewDef.defaults.buttonText ||
            queryButtonText(globalDefaults) ||
            viewDef.type // fall back to given view name
    };
}

var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(context, extraClassName) {
        var _this = _super.call(this, context) || this;
        _this._renderLayout = memoizeRendering(_this.renderLayout, _this.unrenderLayout);
        _this._updateTitle = memoizeRendering(_this.updateTitle, null, [_this._renderLayout]);
        _this._updateActiveButton = memoizeRendering(_this.updateActiveButton, null, [_this._renderLayout]);
        _this._updateToday = memoizeRendering(_this.updateToday, null, [_this._renderLayout]);
        _this._updatePrev = memoizeRendering(_this.updatePrev, null, [_this._renderLayout]);
        _this._updateNext = memoizeRendering(_this.updateNext, null, [_this._renderLayout]);
        _this.el = createElement('div', { className: 'fc-toolbar ' + extraClassName });
        return _this;
    }
    Toolbar.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this._renderLayout.unrender(); // should unrender everything else
        removeElement(this.el);
    };
    Toolbar.prototype.render = function (props) {
        this._renderLayout(props.layout);
        this._updateTitle(props.title);
        this._updateActiveButton(props.activeButton);
        this._updateToday(props.isTodayEnabled);
        this._updatePrev(props.isPrevEnabled);
        this._updateNext(props.isNextEnabled);
    };
    Toolbar.prototype.renderLayout = function (layout) {
        var el = this.el;
        this.viewsWithButtons = [];
        appendToElement(el, this.renderSection('left', layout.left));
        appendToElement(el, this.renderSection('center', layout.center));
        appendToElement(el, this.renderSection('right', layout.right));
    };
    Toolbar.prototype.unrenderLayout = function () {
        this.el.innerHTML = '';
    };
    Toolbar.prototype.renderSection = function (position, buttonStr) {
        var _this = this;
        var _a = this, theme = _a.theme, calendar = _a.calendar;
        var optionsManager = calendar.optionsManager;
        var viewSpecs = calendar.viewSpecs;
        var sectionEl = createElement('div', { className: 'fc-' + position });
        var calendarCustomButtons = optionsManager.computed.customButtons || {};
        var calendarButtonTextOverrides = optionsManager.overrides.buttonText || {};
        var calendarButtonText = optionsManager.computed.buttonText || {};
        if (buttonStr) {
            buttonStr.split(' ').forEach(function (buttonGroupStr, i) {
                var groupChildren = [];
                var isOnlyButtons = true;
                var groupEl;
                buttonGroupStr.split(',').forEach(function (buttonName, j) {
                    var customButtonProps;
                    var viewSpec;
                    var buttonClick;
                    var buttonIcon; // only one of these will be set
                    var buttonText; // "
                    var buttonInnerHtml;
                    var buttonClasses;
                    var buttonEl;
                    var buttonAriaAttr;
                    if (buttonName === 'title') {
                        groupChildren.push(htmlToElement('<h2>&nbsp;</h2>')); // we always want it to take up height
                        isOnlyButtons = false;
                    }
                    else {
                        if ((customButtonProps = calendarCustomButtons[buttonName])) {
                            buttonClick = function (ev) {
                                if (customButtonProps.click) {
                                    customButtonProps.click.call(buttonEl, ev);
                                }
                            };
                            (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = customButtonProps.text);
                        }
                        else if ((viewSpec = viewSpecs[buttonName])) {
                            _this.viewsWithButtons.push(buttonName);
                            buttonClick = function () {
                                calendar.changeView(buttonName);
                            };
                            (buttonText = viewSpec.buttonTextOverride) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = viewSpec.buttonTextDefault);
                        }
                        else if (calendar[buttonName]) { // a calendar method
                            buttonClick = function () {
                                calendar[buttonName]();
                            };
                            (buttonText = calendarButtonTextOverrides[buttonName]) ||
                                (buttonIcon = theme.getIconClass(buttonName)) ||
                                (buttonText = calendarButtonText[buttonName]);
                            //            ^ everything else is considered default
                        }
                        if (buttonClick) {
                            buttonClasses = [
                                'fc-' + buttonName + '-button',
                                theme.getClass('button')
                            ];
                            if (buttonText) {
                                buttonInnerHtml = htmlEscape(buttonText);
                                buttonAriaAttr = '';
                            }
                            else if (buttonIcon) {
                                buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
                                buttonAriaAttr = ' aria-label="' + buttonName + '"';
                            }
                            buttonEl = htmlToElement(// type="button" so that it doesn't submit a form
                            '<button type="button" class="' + buttonClasses.join(' ') + '"' +
                                buttonAriaAttr +
                                '>' + buttonInnerHtml + '</button>');
                            buttonEl.addEventListener('click', buttonClick);
                            groupChildren.push(buttonEl);
                        }
                    }
                });
                if (groupChildren.length > 1) {
                    groupEl = document.createElement('div');
                    var buttonGroupClassName = theme.getClass('buttonGroup');
                    if (isOnlyButtons && buttonGroupClassName) {
                        groupEl.classList.add(buttonGroupClassName);
                    }
                    appendToElement(groupEl, groupChildren);
                    sectionEl.appendChild(groupEl);
                }
                else {
                    appendToElement(sectionEl, groupChildren); // 1 or 0 children
                }
            });
        }
        return sectionEl;
    };
    Toolbar.prototype.updateToday = function (isTodayEnabled) {
        this.toggleButtonEnabled('today', isTodayEnabled);
    };
    Toolbar.prototype.updatePrev = function (isPrevEnabled) {
        this.toggleButtonEnabled('prev', isPrevEnabled);
    };
    Toolbar.prototype.updateNext = function (isNextEnabled) {
        this.toggleButtonEnabled('next', isNextEnabled);
    };
    Toolbar.prototype.updateTitle = function (text) {
        findElements(this.el, 'h2').forEach(function (titleEl) {
            titleEl.innerText = text;
        });
    };
    Toolbar.prototype.updateActiveButton = function (buttonName) {
        var className = this.theme.getClass('buttonActive');
        findElements(this.el, 'button').forEach(function (buttonEl) {
            if (buttonName && buttonEl.classList.contains('fc-' + buttonName + '-button')) {
                buttonEl.classList.add(className);
            }
            else {
                buttonEl.classList.remove(className);
            }
        });
    };
    Toolbar.prototype.toggleButtonEnabled = function (buttonName, bool) {
        findElements(this.el, '.fc-' + buttonName + '-button').forEach(function (buttonEl) {
            buttonEl.disabled = !bool;
        });
    };
    return Toolbar;
}(Component));

var CalendarComponent = /** @class */ (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent(context, el) {
        var _this = _super.call(this, context) || this;
        _this._renderToolbars = memoizeRendering(_this.renderToolbars);
        _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
        _this.el = el;
        prependToElement(el, _this.contentEl = createElement('div', { className: 'fc-view-container' }));
        var calendar = _this.calendar;
        for (var _i = 0, _a = calendar.pluginSystem.hooks.viewContainerModifiers; _i < _a.length; _i++) {
            var modifyViewContainer = _a[_i];
            modifyViewContainer(_this.contentEl, calendar);
        }
        _this.toggleElClassNames(true);
        _this.computeTitle = memoize(computeTitle);
        _this.parseBusinessHours = memoize(function (input) {
            return parseBusinessHours(input, _this.calendar);
        });
        return _this;
    }
    CalendarComponent.prototype.destroy = function () {
        if (this.header) {
            this.header.destroy();
        }
        if (this.footer) {
            this.footer.destroy();
        }
        if (this.view) {
            this.view.destroy();
        }
        removeElement(this.contentEl);
        this.toggleElClassNames(false);
        _super.prototype.destroy.call(this);
    };
    CalendarComponent.prototype.toggleElClassNames = function (bool) {
        var classList = this.el.classList;
        var dirClassName = 'fc-' + this.opt('dir');
        var themeClassName = this.theme.getClass('widget');
        if (bool) {
            classList.add('fc');
            classList.add(dirClassName);
            classList.add(themeClassName);
        }
        else {
            classList.remove('fc');
            classList.remove(dirClassName);
            classList.remove(themeClassName);
        }
    };
    CalendarComponent.prototype.render = function (props) {
        this.freezeHeight();
        var title = this.computeTitle(props.dateProfile, props.viewSpec.options);
        this._renderToolbars(props.viewSpec, props.dateProfile, props.currentDate, props.dateProfileGenerator, title);
        this.renderView(props, title);
        this.updateSize();
        this.thawHeight();
    };
    CalendarComponent.prototype.renderToolbars = function (viewSpec, dateProfile, currentDate, dateProfileGenerator, title) {
        var headerLayout = this.opt('header');
        var footerLayout = this.opt('footer');
        var now = this.calendar.getNow();
        var todayInfo = dateProfileGenerator.build(now);
        var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate);
        var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate);
        var toolbarProps = {
            title: title,
            activeButton: viewSpec.type,
            isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
            isPrevEnabled: prevInfo.isValid,
            isNextEnabled: nextInfo.isValid
        };
        if (headerLayout) {
            if (!this.header) {
                this.header = new Toolbar(this.context, 'fc-header-toolbar');
                prependToElement(this.el, this.header.el);
            }
            this.header.receiveProps(__assign({ layout: headerLayout }, toolbarProps));
        }
        else if (this.header) {
            this.header.destroy();
            this.header = null;
        }
        if (footerLayout) {
            if (!this.footer) {
                this.footer = new Toolbar(this.context, 'fc-footer-toolbar');
                appendToElement(this.el, this.footer.el);
            }
            this.footer.receiveProps(__assign({ layout: footerLayout }, toolbarProps));
        }
        else if (this.footer) {
            this.footer.destroy();
            this.footer = null;
        }
    };
    CalendarComponent.prototype.renderView = function (props, title) {
        var view = this.view;
        var viewSpec = props.viewSpec, dateProfileGenerator = props.dateProfileGenerator;
        if (!view || view.viewSpec !== viewSpec) {
            if (view) {
                view.destroy();
            }
            view = this.view = new viewSpec['class']({
                calendar: this.calendar,
                view: null,
                dateEnv: this.dateEnv,
                theme: this.theme,
                options: viewSpec.options
            }, viewSpec, dateProfileGenerator, this.contentEl);
        }
        else {
            view.addScroll(view.queryScroll());
        }
        view.title = title; // for the API
        var viewProps = {
            dateProfile: props.dateProfile,
            businessHours: this.parseBusinessHours(viewSpec.options.businessHours),
            eventStore: props.eventStore,
            eventUiBases: props.eventUiBases,
            dateSelection: props.dateSelection,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize
        };
        var transformers = this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers);
        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
            var transformer = transformers_1[_i];
            __assign(viewProps, transformer.transform(viewProps, viewSpec, props, view));
        }
        view.receiveProps(viewProps);
    };
    // Sizing
    // -----------------------------------------------------------------------------------------------------------------
    CalendarComponent.prototype.updateSize = function (isResize) {
        if (isResize === void 0) { isResize = false; }
        var view = this.view;
        if (isResize) {
            view.addScroll(view.queryScroll());
        }
        if (isResize || this.isHeightAuto == null) {
            this.computeHeightVars();
        }
        view.updateSize(isResize, this.viewHeight, this.isHeightAuto);
        view.updateNowIndicator(); // we need to guarantee this will run after updateSize
        view.popScroll(isResize);
    };
    CalendarComponent.prototype.computeHeightVars = function () {
        var calendar = this.calendar; // yuck. need to handle dynamic options
        var heightInput = calendar.opt('height');
        var contentHeightInput = calendar.opt('contentHeight');
        this.isHeightAuto = heightInput === 'auto' || contentHeightInput === 'auto';
        if (typeof contentHeightInput === 'number') { // exists and not 'auto'
            this.viewHeight = contentHeightInput;
        }
        else if (typeof contentHeightInput === 'function') { // exists and is a function
            this.viewHeight = contentHeightInput();
        }
        else if (typeof heightInput === 'number') { // exists and not 'auto'
            this.viewHeight = heightInput - this.queryToolbarsHeight();
        }
        else if (typeof heightInput === 'function') { // exists and is a function
            this.viewHeight = heightInput() - this.queryToolbarsHeight();
        }
        else if (heightInput === 'parent') { // set to height of parent element
            var parentEl = this.el.parentNode;
            this.viewHeight = parentEl.getBoundingClientRect().height - this.queryToolbarsHeight();
        }
        else {
            this.viewHeight = Math.round(this.contentEl.getBoundingClientRect().width /
                Math.max(calendar.opt('aspectRatio'), .5));
        }
    };
    CalendarComponent.prototype.queryToolbarsHeight = function () {
        var height = 0;
        if (this.header) {
            height += computeHeightAndMargins(this.header.el);
        }
        if (this.footer) {
            height += computeHeightAndMargins(this.footer.el);
        }
        return height;
    };
    // Height "Freezing"
    // -----------------------------------------------------------------------------------------------------------------
    CalendarComponent.prototype.freezeHeight = function () {
        applyStyle(this.el, {
            height: this.el.getBoundingClientRect().height,
            overflow: 'hidden'
        });
    };
    CalendarComponent.prototype.thawHeight = function () {
        applyStyle(this.el, {
            height: '',
            overflow: ''
        });
    };
    return CalendarComponent;
}(Component));
// Title and Date Formatting
// -----------------------------------------------------------------------------------------------------------------
// Computes what the title at the top of the calendar should be for this view
function computeTitle(dateProfile, viewOptions) {
    var range;
    // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
    if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
        range = dateProfile.currentRange;
    }
    else { // for day units or smaller, use the actual day range
        range = dateProfile.activeRange;
    }
    return this.dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || computeTitleFormat(dateProfile), viewOptions.titleRangeSeparator), { isEndExclusive: dateProfile.isRangeAllDay });
}
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function computeTitleFormat(dateProfile) {
    var currentRangeUnit = dateProfile.currentRangeUnit;
    if (currentRangeUnit === 'year') {
        return { year: 'numeric' };
    }
    else if (currentRangeUnit === 'month') {
        return { year: 'numeric', month: 'long' }; // like "September 2014"
    }
    else {
        var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
        if (days !== null && days > 1) {
            // multi-day range. shorter, like "Sep 9 - 10 2014"
            return { year: 'numeric', month: 'short', day: 'numeric' };
        }
        else {
            // one day. longer, like "September 9 2014"
            return { year: 'numeric', month: 'long', day: 'numeric' };
        }
    }
}
// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses) {
    return theClasses.map(function (theClass) {
        return new theClass();
    });
}

var Interaction = /** @class */ (function () {
    function Interaction(settings) {
        this.component = settings.component;
    }
    Interaction.prototype.destroy = function () {
    };
    return Interaction;
}());
function parseInteractionSettings(component, input) {
    return {
        component: component,
        el: input.el,
        useEventCenter: input.useEventCenter != null ? input.useEventCenter : true
    };
}
function interactionSettingsToStore(settings) {
    var _a;
    return _a = {},
        _a[settings.component.uid] = settings,
        _a;
}
// global state
var interactionSettingsStore = {};

/*
Detects when the user clicks on an event within a DateComponent
*/
var EventClicking = /** @class */ (function (_super) {
    __extends(EventClicking, _super);
    function EventClicking(settings) {
        var _this = _super.call(this, settings) || this;
        _this.handleSegClick = function (ev, segEl) {
            var component = _this.component;
            var seg = getElSeg(segEl);
            if (seg && // might be the <div> surrounding the more link
                component.isValidSegDownEl(ev.target)) {
                // our way to simulate a link click for elements that can't be <a> tags
                // grab before trigger fired in case trigger trashes DOM thru rerendering
                var hasUrlContainer = elementClosest(ev.target, '.fc-has-url');
                var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                component.publiclyTrigger('eventClick', [
                    {
                        el: segEl,
                        event: new EventApi(component.calendar, seg.eventRange.def, seg.eventRange.instance),
                        jsEvent: ev,
                        view: component.view
                    }
                ]);
                if (url && !ev.defaultPrevented) {
                    window.location.href = url;
                }
            }
        };
        var component = settings.component;
        _this.destroy = listenBySelector(component.el, 'click', component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegClick);
        return _this;
    }
    return EventClicking;
}(Interaction));

/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/
var EventHovering = /** @class */ (function (_super) {
    __extends(EventHovering, _super);
    function EventHovering(settings) {
        var _this = _super.call(this, settings) || this;
        // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
        _this.handleEventElRemove = function (el) {
            if (el === _this.currentSegEl) {
                _this.handleSegLeave(null, _this.currentSegEl);
            }
        };
        _this.handleSegEnter = function (ev, segEl) {
            if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                segEl.classList.add('fc-allow-mouse-resize');
                _this.currentSegEl = segEl;
                _this.triggerEvent('eventMouseEnter', ev, segEl);
            }
        };
        _this.handleSegLeave = function (ev, segEl) {
            if (_this.currentSegEl) {
                segEl.classList.remove('fc-allow-mouse-resize');
                _this.currentSegEl = null;
                _this.triggerEvent('eventMouseLeave', ev, segEl);
            }
        };
        var component = settings.component;
        _this.removeHoverListeners = listenToHoverBySelector(component.el, component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegEnter, _this.handleSegLeave);
        component.calendar.on('eventElRemove', _this.handleEventElRemove);
        return _this;
    }
    EventHovering.prototype.destroy = function () {
        this.removeHoverListeners();
        this.component.calendar.off('eventElRemove', this.handleEventElRemove);
    };
    EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
        var component = this.component;
        var seg = getElSeg(segEl);
        if (!ev || component.isValidSegDownEl(ev.target)) {
            component.publiclyTrigger(publicEvName, [
                {
                    el: segEl,
                    event: new EventApi(this.component.calendar, seg.eventRange.def, seg.eventRange.instance),
                    jsEvent: ev,
                    view: component.view
                }
            ]);
        }
    };
    return EventHovering;
}(Interaction));

var StandardTheme = /** @class */ (function (_super) {
    __extends(StandardTheme, _super);
    function StandardTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardTheme;
}(Theme));
StandardTheme.prototype.classes = {
    widget: 'fc-unthemed',
    widgetHeader: 'fc-widget-header',
    widgetContent: 'fc-widget-content',
    buttonGroup: 'fc-button-group',
    button: 'fc-button fc-button-primary',
    buttonActive: 'fc-button-active',
    popoverHeader: 'fc-widget-header',
    popoverContent: 'fc-widget-content',
    // day grid
    headerRow: 'fc-widget-header',
    dayRow: 'fc-widget-content',
    // list view
    listView: 'fc-widget-content'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
    close: 'fc-icon-x',
    prev: 'fc-icon-chevron-left',
    next: 'fc-icon-chevron-right',
    prevYear: 'fc-icon-chevrons-left',
    nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons';
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

var Calendar = /** @class */ (function () {
    function Calendar(el, overrides) {
        var _this = this;
        this.parseRawLocales = memoize(parseRawLocales);
        this.buildLocale = memoize(buildLocale);
        this.buildDateEnv = memoize(buildDateEnv);
        this.buildTheme = memoize(buildTheme);
        this.buildEventUiSingleBase = memoize(this._buildEventUiSingleBase);
        this.buildSelectionConfig = memoize(this._buildSelectionConfig);
        this.buildEventUiBySource = memoizeOutput(buildEventUiBySource, isPropsEqual);
        this.buildEventUiBases = memoize(buildEventUiBases);
        this.interactionsStore = {};
        this.actionQueue = [];
        this.isReducing = false;
        // isDisplaying: boolean = false // installed in DOM? accepting renders?
        this.needsRerender = false; // needs a render?
        this.needsFullRerender = false;
        this.isRendering = false; // currently in the executeRender function?
        this.renderingPauseDepth = 0;
        this.buildDelayedRerender = memoize(buildDelayedRerender);
        this.afterSizingTriggers = {};
        this.isViewUpdated = false;
        this.isDatesUpdated = false;
        this.isEventsUpdated = false;
        this.el = el;
        this.optionsManager = new OptionsManager(overrides || {});
        this.pluginSystem = new PluginSystem();
        // only do once. don't do in handleOptions. because can't remove plugins
        this.addPluginInputs(this.optionsManager.computed.plugins || []);
        this.handleOptions(this.optionsManager.computed);
        this.publiclyTrigger('_init'); // for tests
        this.hydrate();
        this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions
            .map(function (calendarInteractionClass) {
            return new calendarInteractionClass(_this);
        });
    }
    Calendar.prototype.addPluginInputs = function (pluginInputs) {
        var pluginDefs = refinePluginDefs(pluginInputs);
        for (var _i = 0, pluginDefs_1 = pluginDefs; _i < pluginDefs_1.length; _i++) {
            var pluginDef = pluginDefs_1[_i];
            this.pluginSystem.add(pluginDef);
        }
    };
    Object.defineProperty(Calendar.prototype, "view", {
        // public API
        get: function () {
            return this.component ? this.component.view : null;
        },
        enumerable: true,
        configurable: true
    });
    // Public API for rendering
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.render = function () {
        if (!this.component) {
            this.renderableEventStore = createEmptyEventStore();
            this.bindHandlers();
            this.executeRender();
        }
        else {
            this.requestRerender(true);
        }
    };
    Calendar.prototype.destroy = function () {
        if (this.component) {
            this.unbindHandlers();
            this.component.destroy(); // don't null-out. in case API needs access
            this.component = null; // umm ???
            for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
                var interaction = _a[_i];
                interaction.destroy();
            }
            this.publiclyTrigger('_destroyed');
        }
    };
    // Handlers
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.bindHandlers = function () {
        var _this = this;
        // event delegation for nav links
        this.removeNavLinkListener = listenBySelector(this.el, 'click', 'a[data-goto]', function (ev, anchorEl) {
            var gotoOptions = anchorEl.getAttribute('data-goto');
            gotoOptions = gotoOptions ? JSON.parse(gotoOptions) : {};
            var dateEnv = _this.dateEnv;
            var dateMarker = dateEnv.createMarker(gotoOptions.date);
            var viewType = gotoOptions.type;
            // property like "navLinkDayClick". might be a string or a function
            var customAction = _this.viewOpt('navLink' + capitaliseFirstLetter(viewType) + 'Click');
            if (typeof customAction === 'function') {
                customAction(dateEnv.toDate(dateMarker), ev);
            }
            else {
                if (typeof customAction === 'string') {
                    viewType = customAction;
                }
                _this.zoomTo(dateMarker, viewType);
            }
        });
        if (this.opt('handleWindowResize')) {
            window.addEventListener('resize', this.windowResizeProxy = debounce(// prevents rapid calls
            this.windowResize.bind(this), this.opt('windowResizeDelay')));
        }
    };
    Calendar.prototype.unbindHandlers = function () {
        this.removeNavLinkListener();
        if (this.windowResizeProxy) {
            window.removeEventListener('resize', this.windowResizeProxy);
            this.windowResizeProxy = null;
        }
    };
    // Dispatcher
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.hydrate = function () {
        var _this = this;
        this.state = this.buildInitialState();
        var rawSources = this.opt('eventSources') || [];
        var singleRawSource = this.opt('events');
        var sources = []; // parsed
        if (singleRawSource) {
            rawSources.unshift(singleRawSource);
        }
        for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
            var rawSource = rawSources_1[_i];
            var source = parseEventSource(rawSource, this);
            if (source) {
                sources.push(source);
            }
        }
        this.batchRendering(function () {
            _this.dispatch({ type: 'INIT' }); // pass in sources here?
            _this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: sources });
            _this.dispatch({
                type: 'SET_VIEW_TYPE',
                viewType: _this.opt('defaultView') || _this.pluginSystem.hooks.defaultView
            });
        });
    };
    Calendar.prototype.buildInitialState = function () {
        return {
            viewType: null,
            loadingLevel: 0,
            eventSourceLoadingLevel: 0,
            currentDate: this.getInitialDate(),
            dateProfile: null,
            eventSources: {},
            eventStore: createEmptyEventStore(),
            dateSelection: null,
            eventSelection: '',
            eventDrag: null,
            eventResize: null
        };
    };
    Calendar.prototype.dispatch = function (action) {
        this.actionQueue.push(action);
        if (!this.isReducing) {
            this.isReducing = true;
            var oldState = this.state;
            while (this.actionQueue.length) {
                this.state = this.reduce(this.state, this.actionQueue.shift(), this);
            }
            var newState = this.state;
            this.isReducing = false;
            if (!oldState.loadingLevel && newState.loadingLevel) {
                this.publiclyTrigger('loading', [true]);
            }
            else if (oldState.loadingLevel && !newState.loadingLevel) {
                this.publiclyTrigger('loading', [false]);
            }
            var view = this.component && this.component.view;
            if (oldState.eventStore !== newState.eventStore || this.needsFullRerender) {
                if (oldState.eventStore) {
                    this.isEventsUpdated = true;
                }
            }
            if (oldState.dateProfile !== newState.dateProfile || this.needsFullRerender) {
                if (oldState.dateProfile && view) { // why would view be null!?
                    this.publiclyTrigger('datesDestroy', [
                        {
                            view: view,
                            el: view.el
                        }
                    ]);
                }
                this.isDatesUpdated = true;
            }
            if (oldState.viewType !== newState.viewType || this.needsFullRerender) {
                if (oldState.viewType && view) { // why would view be null!?
                    this.publiclyTrigger('viewSkeletonDestroy', [
                        {
                            view: view,
                            el: view.el
                        }
                    ]);
                }
                this.isViewUpdated = true;
            }
            this.requestRerender();
        }
    };
    Calendar.prototype.reduce = function (state, action, calendar) {
        return reduce(state, action, calendar);
    };
    // Render Queue
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.requestRerender = function (needsFull) {
        if (needsFull === void 0) { needsFull = false; }
        this.needsRerender = true;
        this.needsFullRerender = this.needsFullRerender || needsFull;
        this.delayedRerender(); // will call a debounced-version of tryRerender
    };
    Calendar.prototype.tryRerender = function () {
        if (this.component && // must be accepting renders
            this.needsRerender && // indicates that a rerender was requested
            !this.renderingPauseDepth && // not paused
            !this.isRendering // not currently in the render loop
        ) {
            this.executeRender();
        }
    };
    Calendar.prototype.batchRendering = function (func) {
        this.renderingPauseDepth++;
        func();
        this.renderingPauseDepth--;
        if (this.needsRerender) {
            this.requestRerender();
        }
    };
    // Rendering
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.executeRender = function () {
        var needsFullRerender = this.needsFullRerender; // save before clearing
        // clear these BEFORE the render so that new values will accumulate during render
        this.needsRerender = false;
        this.needsFullRerender = false;
        this.isRendering = true;
        this.renderComponent(needsFullRerender);
        this.isRendering = false;
        // received a rerender request while rendering
        if (this.needsRerender) {
            this.delayedRerender();
        }
    };
    /*
    don't call this directly. use executeRender instead
    */
    Calendar.prototype.renderComponent = function (needsFull) {
        var _a = this, state = _a.state, component = _a.component;
        var viewType = state.viewType;
        var viewSpec = this.viewSpecs[viewType];
        var savedScroll = (needsFull && component) ? component.view.queryScroll() : null;
        if (!viewSpec) {
            throw new Error("View type \"" + viewType + "\" is not valid");
        }
        // if event sources are still loading and progressive rendering hasn't been enabled,
        // keep rendering the last fully loaded set of events
        var renderableEventStore = this.renderableEventStore =
            (state.eventSourceLoadingLevel && !this.opt('progressiveEventRendering')) ?
                this.renderableEventStore :
                state.eventStore;
        var eventUiSingleBase = this.buildEventUiSingleBase(viewSpec.options);
        var eventUiBySource = this.buildEventUiBySource(state.eventSources);
        var eventUiBases = this.eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
        if (needsFull || !component) {
            if (component) {
                component.freezeHeight(); // next component will unfreeze it
                component.destroy();
            }
            component = this.component = new CalendarComponent({
                calendar: this,
                view: null,
                dateEnv: this.dateEnv,
                theme: this.theme,
                options: this.optionsManager.computed
            }, this.el);
            this.isViewUpdated = true;
            this.isDatesUpdated = true;
            this.isEventsUpdated = true;
        }
        component.receiveProps(__assign({}, state, { viewSpec: viewSpec, dateProfile: state.dateProfile, dateProfileGenerator: this.dateProfileGenerators[viewType], eventStore: renderableEventStore, eventUiBases: eventUiBases, dateSelection: state.dateSelection, eventSelection: state.eventSelection, eventDrag: state.eventDrag, eventResize: state.eventResize }));
        if (savedScroll) {
            component.view.applyScroll(savedScroll, false);
        }
        if (this.isViewUpdated) {
            this.isViewUpdated = false;
            this.publiclyTrigger('viewSkeletonRender', [
                {
                    view: component.view,
                    el: component.view.el
                }
            ]);
        }
        if (this.isDatesUpdated) {
            this.isDatesUpdated = false;
            this.publiclyTrigger('datesRender', [
                {
                    view: component.view,
                    el: component.view.el
                }
            ]);
        }
        if (this.isEventsUpdated) {
            this.isEventsUpdated = false;
        }
        this.releaseAfterSizingTriggers();
    };
    // Options
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.setOption = function (name, val) {
        var _a;
        this.mutateOptions((_a = {}, _a[name] = val, _a), [], true);
    };
    Calendar.prototype.getOption = function (name) {
        return this.optionsManager.computed[name];
    };
    Calendar.prototype.opt = function (name) {
        return this.optionsManager.computed[name];
    };
    Calendar.prototype.viewOpt = function (name) {
        return this.viewOpts()[name];
    };
    Calendar.prototype.viewOpts = function () {
        return this.viewSpecs[this.state.viewType].options;
    };
    /*
    handles option changes (like a diff)
    */
    Calendar.prototype.mutateOptions = function (updates, removals, isDynamic, deepEqual) {
        var _this = this;
        var changeHandlers = this.pluginSystem.hooks.optionChangeHandlers;
        var normalUpdates = {};
        var specialUpdates = {};
        var oldDateEnv = this.dateEnv; // do this before handleOptions
        var isTimeZoneDirty = false;
        var isSizeDirty = false;
        var anyDifficultOptions = Boolean(removals.length);
        for (var name_1 in updates) {
            if (changeHandlers[name_1]) {
                specialUpdates[name_1] = updates[name_1];
            }
            else {
                normalUpdates[name_1] = updates[name_1];
            }
        }
        for (var name_2 in normalUpdates) {
            if (/^(height|contentHeight|aspectRatio)$/.test(name_2)) {
                isSizeDirty = true;
            }
            else if (/^(defaultDate|defaultView)$/.test(name_2)) ;
            else {
                anyDifficultOptions = true;
                if (name_2 === 'timeZone') {
                    isTimeZoneDirty = true;
                }
            }
        }
        this.optionsManager.mutate(normalUpdates, removals, isDynamic);
        if (anyDifficultOptions) {
            this.handleOptions(this.optionsManager.computed);
            this.needsFullRerender = true;
        }
        this.batchRendering(function () {
            if (anyDifficultOptions) {
                if (isTimeZoneDirty) {
                    _this.dispatch({
                        type: 'CHANGE_TIMEZONE',
                        oldDateEnv: oldDateEnv
                    });
                }
                /* HACK
                has the same effect as calling this.requestRerender(true)
                but recomputes the state's dateProfile
                */
                _this.dispatch({
                    type: 'SET_VIEW_TYPE',
                    viewType: _this.state.viewType
                });
            }
            else if (isSizeDirty) {
                _this.updateSize();
            }
            // special updates
            if (deepEqual) {
                for (var name_3 in specialUpdates) {
                    changeHandlers[name_3](specialUpdates[name_3], _this, deepEqual);
                }
            }
        });
    };
    /*
    rebuilds things based off of a complete set of refined options
    */
    Calendar.prototype.handleOptions = function (options) {
        var _this = this;
        var pluginHooks = this.pluginSystem.hooks;
        this.defaultAllDayEventDuration = createDuration(options.defaultAllDayEventDuration);
        this.defaultTimedEventDuration = createDuration(options.defaultTimedEventDuration);
        this.delayedRerender = this.buildDelayedRerender(options.rerenderDelay);
        this.theme = this.buildTheme(options);
        var available = this.parseRawLocales(options.locales);
        this.availableRawLocales = available.map;
        var locale = this.buildLocale(options.locale || available.defaultCode, available.map);
        this.dateEnv = this.buildDateEnv(locale, options.timeZone, pluginHooks.namedTimeZonedImpl, options.firstDay, options.weekNumberCalculation, options.weekLabel, pluginHooks.cmdFormatter);
        this.selectionConfig = this.buildSelectionConfig(options); // needs dateEnv. do after :(
        // ineffecient to do every time?
        this.viewSpecs = buildViewSpecs(pluginHooks.views, this.optionsManager);
        // ineffecient to do every time?
        this.dateProfileGenerators = mapHash(this.viewSpecs, function (viewSpec) {
            return new viewSpec.class.prototype.dateProfileGeneratorClass(viewSpec, _this);
        });
    };
    Calendar.prototype.getAvailableLocaleCodes = function () {
        return Object.keys(this.availableRawLocales);
    };
    Calendar.prototype._buildSelectionConfig = function (rawOpts) {
        return processScopedUiProps('select', rawOpts, this);
    };
    Calendar.prototype._buildEventUiSingleBase = function (rawOpts) {
        if (rawOpts.editable) { // so 'editable' affected events
            rawOpts = __assign({}, rawOpts, { eventEditable: true });
        }
        return processScopedUiProps('event', rawOpts, this);
    };
    // Trigger
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.hasPublicHandlers = function (name) {
        return this.hasHandlers(name) ||
            this.opt(name); // handler specified in options
    };
    Calendar.prototype.publiclyTrigger = function (name, args) {
        var optHandler = this.opt(name);
        this.triggerWith(name, this, args);
        if (optHandler) {
            return optHandler.apply(this, args);
        }
    };
    Calendar.prototype.publiclyTriggerAfterSizing = function (name, args) {
        var afterSizingTriggers = this.afterSizingTriggers;
        (afterSizingTriggers[name] || (afterSizingTriggers[name] = [])).push(args);
    };
    Calendar.prototype.releaseAfterSizingTriggers = function () {
        var afterSizingTriggers = this.afterSizingTriggers;
        for (var name_4 in afterSizingTriggers) {
            for (var _i = 0, _a = afterSizingTriggers[name_4]; _i < _a.length; _i++) {
                var args = _a[_i];
                this.publiclyTrigger(name_4, args);
            }
        }
        this.afterSizingTriggers = {};
    };
    // View
    // -----------------------------------------------------------------------------------------------------------------
    // Returns a boolean about whether the view is okay to instantiate at some point
    Calendar.prototype.isValidViewType = function (viewType) {
        return Boolean(this.viewSpecs[viewType]);
    };
    Calendar.prototype.changeView = function (viewType, dateOrRange) {
        var dateMarker = null;
        if (dateOrRange) {
            if (dateOrRange.start && dateOrRange.end) { // a range
                this.optionsManager.mutate({ visibleRange: dateOrRange }, []); // will not rerender
                this.handleOptions(this.optionsManager.computed); // ...but yuck
            }
            else { // a date
                dateMarker = this.dateEnv.createMarker(dateOrRange); // just like gotoDate
            }
        }
        this.unselect();
        this.dispatch({
            type: 'SET_VIEW_TYPE',
            viewType: viewType,
            dateMarker: dateMarker
        });
    };
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    // needs to change
    Calendar.prototype.zoomTo = function (dateMarker, viewType) {
        var spec;
        viewType = viewType || 'day'; // day is default zoom
        spec = this.viewSpecs[viewType] ||
            this.getUnitViewSpec(viewType);
        this.unselect();
        if (spec) {
            this.dispatch({
                type: 'SET_VIEW_TYPE',
                viewType: spec.type,
                dateMarker: dateMarker
            });
        }
        else {
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: dateMarker
            });
        }
    };
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
    Calendar.prototype.getUnitViewSpec = function (unit) {
        var component = this.component;
        var viewTypes = [];
        var i;
        var spec;
        // put views that have buttons first. there will be duplicates, but oh
        if (component.header) {
            viewTypes.push.apply(viewTypes, component.header.viewsWithButtons);
        }
        if (component.footer) {
            viewTypes.push.apply(viewTypes, component.footer.viewsWithButtons);
        }
        for (var viewType in this.viewSpecs) {
            viewTypes.push(viewType);
        }
        for (i = 0; i < viewTypes.length; i++) {
            spec = this.viewSpecs[viewTypes[i]];
            if (spec) {
                if (spec.singleUnit === unit) {
                    return spec;
                }
            }
        }
    };
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.getInitialDate = function () {
        var defaultDateInput = this.opt('defaultDate');
        // compute the initial ambig-timezone date
        if (defaultDateInput != null) {
            return this.dateEnv.createMarker(defaultDateInput);
        }
        else {
            return this.getNow(); // getNow already returns unzoned
        }
    };
    Calendar.prototype.prev = function () {
        this.unselect();
        this.dispatch({ type: 'PREV' });
    };
    Calendar.prototype.next = function () {
        this.unselect();
        this.dispatch({ type: 'NEXT' });
    };
    Calendar.prototype.prevYear = function () {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.dateEnv.addYears(this.state.currentDate, -1)
        });
    };
    Calendar.prototype.nextYear = function () {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
        });
    };
    Calendar.prototype.today = function () {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.getNow()
        });
    };
    Calendar.prototype.gotoDate = function (zonedDateInput) {
        this.unselect();
        this.dispatch({
            type: 'SET_DATE',
            dateMarker: this.dateEnv.createMarker(zonedDateInput)
        });
    };
    Calendar.prototype.incrementDate = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // else, warn about invalid input?
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.add(this.state.currentDate, delta)
            });
        }
    };
    // for external API
    Calendar.prototype.getDate = function () {
        return this.dateEnv.toDate(this.state.currentDate);
    };
    // Date Formatting Utils
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.formatDate = function (d, formatter) {
        var dateEnv = this.dateEnv;
        return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
    };
    // `settings` is for formatter AND isEndExclusive
    Calendar.prototype.formatRange = function (d0, d1, settings) {
        var dateEnv = this.dateEnv;
        return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings, this.opt('defaultRangeSeparator')), settings);
    };
    Calendar.prototype.formatIso = function (d, omitTime) {
        var dateEnv = this.dateEnv;
        return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime: omitTime });
    };
    // Sizing
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.windowResize = function (ev) {
        if (!this.isHandlingWindowResize &&
            this.component && // why?
            ev.target === window // not a jqui resize event
        ) {
            this.isHandlingWindowResize = true;
            this.updateSize();
            this.publiclyTrigger('windowResize', [this.view]);
            this.isHandlingWindowResize = false;
        }
    };
    Calendar.prototype.updateSize = function () {
        if (this.component) { // when?
            this.component.updateSize(true);
        }
    };
    // Component Registration
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.registerInteractiveComponent = function (component, settingsInput) {
        var settings = parseInteractionSettings(component, settingsInput);
        var DEFAULT_INTERACTIONS = [
            EventClicking,
            EventHovering
        ];
        var interactionClasses = DEFAULT_INTERACTIONS.concat(this.pluginSystem.hooks.componentInteractions);
        var interactions = interactionClasses.map(function (interactionClass) {
            return new interactionClass(settings);
        });
        this.interactionsStore[component.uid] = interactions;
        interactionSettingsStore[component.uid] = settings;
    };
    Calendar.prototype.unregisterInteractiveComponent = function (component) {
        for (var _i = 0, _a = this.interactionsStore[component.uid]; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener.destroy();
        }
        delete this.interactionsStore[component.uid];
        delete interactionSettingsStore[component.uid];
    };
    // Date Selection / Event Selection / DayClick
    // -----------------------------------------------------------------------------------------------------------------
    // this public method receives start/end dates in any format, with any timezone
    // NOTE: args were changed from v3
    Calendar.prototype.select = function (dateOrObj, endDate) {
        var selectionInput;
        if (endDate == null) {
            if (dateOrObj.start != null) {
                selectionInput = dateOrObj;
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: null
                };
            }
        }
        else {
            selectionInput = {
                start: dateOrObj,
                end: endDate
            };
        }
        var selection = parseDateSpan(selectionInput, this.dateEnv, createDuration({ days: 1 }) // TODO: cache this?
        );
        if (selection) { // throw parse error otherwise?
            this.dispatch({ type: 'SELECT_DATES', selection: selection });
            this.triggerDateSelect(selection);
        }
    };
    // public method
    Calendar.prototype.unselect = function (pev) {
        if (this.state.dateSelection) {
            this.dispatch({ type: 'UNSELECT_DATES' });
            this.triggerDateUnselect(pev);
        }
    };
    Calendar.prototype.triggerDateSelect = function (selection, pev) {
        var arg = __assign({}, this.buildDateSpanApi(selection), { jsEvent: pev ? pev.origEvent : null, view: this.view });
        this.publiclyTrigger('select', [arg]);
    };
    Calendar.prototype.triggerDateUnselect = function (pev) {
        this.publiclyTrigger('unselect', [
            {
                jsEvent: pev ? pev.origEvent : null,
                view: this.view
            }
        ]);
    };
    // TODO: receive pev?
    Calendar.prototype.triggerDateClick = function (dateSpan, dayEl, view, ev) {
        var arg = __assign({}, this.buildDatePointApi(dateSpan), { dayEl: dayEl, jsEvent: ev, // Is this always a mouse event? See #4655
            view: view });
        this.publiclyTrigger('dateClick', [arg]);
    };
    Calendar.prototype.buildDatePointApi = function (dateSpan) {
        var props = {};
        for (var _i = 0, _a = this.pluginSystem.hooks.datePointTransforms; _i < _a.length; _i++) {
            var transform = _a[_i];
            __assign(props, transform(dateSpan, this));
        }
        __assign(props, buildDatePointApi(dateSpan, this.dateEnv));
        return props;
    };
    Calendar.prototype.buildDateSpanApi = function (dateSpan) {
        var props = {};
        for (var _i = 0, _a = this.pluginSystem.hooks.dateSpanTransforms; _i < _a.length; _i++) {
            var transform = _a[_i];
            __assign(props, transform(dateSpan, this));
        }
        __assign(props, buildDateSpanApi(dateSpan, this.dateEnv));
        return props;
    };
    // Date Utils
    // -----------------------------------------------------------------------------------------------------------------
    // Returns a DateMarker for the current date, as defined by the client's computer or from the `now` option
    Calendar.prototype.getNow = function () {
        var now = this.opt('now');
        if (typeof now === 'function') {
            now = now();
        }
        if (now == null) {
            return this.dateEnv.createNowMarker();
        }
        return this.dateEnv.createMarker(now);
    };
    // Event-Date Utilities
    // -----------------------------------------------------------------------------------------------------------------
    // Given an event's allDay status and start date, return what its fallback end date should be.
    // TODO: rename to computeDefaultEventEnd
    Calendar.prototype.getDefaultEventEnd = function (allDay, marker) {
        var end = marker;
        if (allDay) {
            end = startOfDay(end);
            end = this.dateEnv.add(end, this.defaultAllDayEventDuration);
        }
        else {
            end = this.dateEnv.add(end, this.defaultTimedEventDuration);
        }
        return end;
    };
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.addEvent = function (eventInput, sourceInput) {
        if (eventInput instanceof EventApi) {
            var def = eventInput._def;
            var instance = eventInput._instance;
            // not already present? don't want to add an old snapshot
            if (!this.state.eventStore.defs[def.defId]) {
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore({ def: def, instance: instance }) // TODO: better util for two args?
                });
            }
            return eventInput;
        }
        var sourceId;
        if (sourceInput instanceof EventSourceApi) {
            sourceId = sourceInput.internalEventSource.sourceId;
        }
        else if (sourceInput != null) {
            var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
            if (!sourceApi) {
                console.warn('Could not find an event source with ID "' + sourceInput + '"'); // TODO: test
                return null;
            }
            else {
                sourceId = sourceApi.internalEventSource.sourceId;
            }
        }
        var tuple = parseEvent(eventInput, sourceId, this);
        if (tuple) {
            this.dispatch({
                type: 'ADD_EVENTS',
                eventStore: eventTupleToStore(tuple)
            });
            return new EventApi(this, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
        }
        return null;
    };
    // TODO: optimize
    Calendar.prototype.getEventById = function (id) {
        var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
        id = String(id);
        for (var defId in defs) {
            var def = defs[defId];
            if (def.publicId === id) {
                if (def.recurringDef) {
                    return new EventApi(this, def, null);
                }
                else {
                    for (var instanceId in instances) {
                        var instance = instances[instanceId];
                        if (instance.defId === def.defId) {
                            return new EventApi(this, def, instance);
                        }
                    }
                }
            }
        }
        return null;
    };
    Calendar.prototype.getEvents = function () {
        var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
        var eventApis = [];
        for (var id in instances) {
            var instance = instances[id];
            var def = defs[instance.defId];
            eventApis.push(new EventApi(this, def, instance));
        }
        return eventApis;
    };
    Calendar.prototype.removeAllEvents = function () {
        this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
    };
    Calendar.prototype.rerenderEvents = function () {
        this.dispatch({ type: 'RESET_EVENTS' });
    };
    // Public Event Sources API
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.getEventSources = function () {
        var sourceHash = this.state.eventSources;
        var sourceApis = [];
        for (var internalId in sourceHash) {
            sourceApis.push(new EventSourceApi(this, sourceHash[internalId]));
        }
        return sourceApis;
    };
    Calendar.prototype.getEventSourceById = function (id) {
        var sourceHash = this.state.eventSources;
        id = String(id);
        for (var sourceId in sourceHash) {
            if (sourceHash[sourceId].publicId === id) {
                return new EventSourceApi(this, sourceHash[sourceId]);
            }
        }
        return null;
    };
    Calendar.prototype.addEventSource = function (sourceInput) {
        if (sourceInput instanceof EventSourceApi) {
            // not already present? don't want to add an old snapshot
            if (!this.state.eventSources[sourceInput.internalEventSource.sourceId]) {
                this.dispatch({
                    type: 'ADD_EVENT_SOURCES',
                    sources: [sourceInput.internalEventSource]
                });
            }
            return sourceInput;
        }
        var eventSource = parseEventSource(sourceInput, this);
        if (eventSource) { // TODO: error otherwise?
            this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
            return new EventSourceApi(this, eventSource);
        }
        return null;
    };
    Calendar.prototype.removeAllEventSources = function () {
        this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
    };
    Calendar.prototype.refetchEvents = function () {
        this.dispatch({ type: 'FETCH_EVENT_SOURCES' });
    };
    // Scroll
    // -----------------------------------------------------------------------------------------------------------------
    Calendar.prototype.scrollToTime = function (timeInput) {
        var duration = createDuration(timeInput);
        if (duration) {
            this.component.view.scrollToDuration(duration);
        }
    };
    return Calendar;
}());
EmitterMixin.mixInto(Calendar);
// for memoizers
// -----------------------------------------------------------------------------------------------------------------
function buildDateEnv(locale, timeZone, namedTimeZoneImpl, firstDay, weekNumberCalculation, weekLabel, cmdFormatter) {
    return new DateEnv({
        calendarSystem: 'gregory',
        timeZone: timeZone,
        namedTimeZoneImpl: namedTimeZoneImpl,
        locale: locale,
        weekNumberCalculation: weekNumberCalculation,
        firstDay: firstDay,
        weekLabel: weekLabel,
        cmdFormatter: cmdFormatter
    });
}
function buildTheme(calendarOptions) {
    var themeClass = this.pluginSystem.hooks.themeClasses[calendarOptions.themeSystem] || StandardTheme;
    return new themeClass(calendarOptions);
}
function buildDelayedRerender(wait) {
    var func = this.tryRerender.bind(this);
    if (wait != null) {
        func = debounce(func, wait);
    }
    return func;
}
function buildEventUiBySource(eventSources) {
    return mapHash(eventSources, function (eventSource) {
        return eventSource.ui;
    });
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
    var eventUiBases = { '': eventUiSingleBase };
    for (var defId in eventDefs) {
        var def = eventDefs[defId];
        if (def.sourceId && eventUiBySource[def.sourceId]) {
            eventUiBases[defId] = eventUiBySource[def.sourceId];
        }
    }
    return eventUiBases;
}

var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, context, createElement('div', { className: 'fc-view fc-' + viewSpec.type + '-view' }), true // isView (HACK)
        ) || this;
        _this.renderDatesMem = memoizeRendering(_this.renderDatesWrap, _this.unrenderDatesWrap);
        _this.renderBusinessHoursMem = memoizeRendering(_this.renderBusinessHours, _this.unrenderBusinessHours, [_this.renderDatesMem]);
        _this.renderDateSelectionMem = memoizeRendering(_this.renderDateSelectionWrap, _this.unrenderDateSelectionWrap, [_this.renderDatesMem]);
        _this.renderEventsMem = memoizeRendering(_this.renderEvents, _this.unrenderEvents, [_this.renderDatesMem]);
        _this.renderEventSelectionMem = memoizeRendering(_this.renderEventSelectionWrap, _this.unrenderEventSelectionWrap, [_this.renderEventsMem]);
        _this.renderEventDragMem = memoizeRendering(_this.renderEventDragWrap, _this.unrenderEventDragWrap, [_this.renderDatesMem]);
        _this.renderEventResizeMem = memoizeRendering(_this.renderEventResizeWrap, _this.unrenderEventResizeWrap, [_this.renderDatesMem]);
        _this.viewSpec = viewSpec;
        _this.dateProfileGenerator = dateProfileGenerator;
        _this.type = viewSpec.type;
        _this.eventOrderSpecs = parseFieldSpecs(_this.opt('eventOrder'));
        _this.nextDayThreshold = createDuration(_this.opt('nextDayThreshold'));
        parentEl.appendChild(_this.el);
        _this.initialize();
        return _this;
    }
    View.prototype.initialize = function () {
    };
    Object.defineProperty(View.prototype, "activeStart", {
        // Date Setting/Unsetting
        // -----------------------------------------------------------------------------------------------------------------
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.activeRange.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "activeEnd", {
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.activeRange.end);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "currentStart", {
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.currentRange.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "currentEnd", {
        get: function () {
            return this.dateEnv.toDate(this.props.dateProfile.currentRange.end);
        },
        enumerable: true,
        configurable: true
    });
    // General Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.render = function (props) {
        this.renderDatesMem(props.dateProfile);
        this.renderBusinessHoursMem(props.businessHours);
        this.renderDateSelectionMem(props.dateSelection);
        this.renderEventsMem(props.eventStore);
        this.renderEventSelectionMem(props.eventSelection);
        this.renderEventDragMem(props.eventDrag);
        this.renderEventResizeMem(props.eventResize);
    };
    View.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderDatesMem.unrender(); // should unrender everything else
    };
    // Sizing
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        var calendar = this.calendar;
        if (isResize || // HACKS...
            calendar.isViewUpdated ||
            calendar.isDatesUpdated ||
            calendar.isEventsUpdated) {
            // sort of the catch-all sizing
            // anything that might cause dimension changes
            this.updateBaseSize(isResize, viewHeight, isAuto);
        }
    };
    View.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
    };
    // Date Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderDatesWrap = function (dateProfile) {
        this.renderDates(dateProfile);
        this.addScroll({
            duration: createDuration(this.opt('scrollTime'))
        });
        this.startNowIndicator(dateProfile); // shouldn't render yet because updateSize will be called soon
    };
    View.prototype.unrenderDatesWrap = function () {
        this.stopNowIndicator();
        this.unrenderDates();
    };
    View.prototype.renderDates = function (dateProfile) { };
    View.prototype.unrenderDates = function () { };
    // Business Hours
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderBusinessHours = function (businessHours) { };
    View.prototype.unrenderBusinessHours = function () { };
    // Date Selection
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderDateSelectionWrap = function (selection) {
        if (selection) {
            this.renderDateSelection(selection);
        }
    };
    View.prototype.unrenderDateSelectionWrap = function (selection) {
        if (selection) {
            this.unrenderDateSelection(selection);
        }
    };
    View.prototype.renderDateSelection = function (selection) { };
    View.prototype.unrenderDateSelection = function (selection) { };
    // Event Rendering
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEvents = function (eventStore) { };
    View.prototype.unrenderEvents = function () { };
    // util for subclasses
    View.prototype.sliceEvents = function (eventStore, allDay) {
        var props = this.props;
        return sliceEventStore(eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? this.nextDayThreshold : null).fg;
    };
    View.prototype.computeEventDraggable = function (eventDef, eventUi) {
        var transformers = this.calendar.pluginSystem.hooks.isDraggableTransformers;
        var val = eventUi.startEditable;
        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
            var transformer = transformers_1[_i];
            val = transformer(val, eventDef, eventUi, this);
        }
        return val;
    };
    View.prototype.computeEventStartResizable = function (eventDef, eventUi) {
        return eventUi.durationEditable && this.opt('eventResizableFromStart');
    };
    View.prototype.computeEventEndResizable = function (eventDef, eventUi) {
        return eventUi.durationEditable;
    };
    // Event Selection
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEventSelectionWrap = function (instanceId) {
        if (instanceId) {
            this.renderEventSelection(instanceId);
        }
    };
    View.prototype.unrenderEventSelectionWrap = function (instanceId) {
        if (instanceId) {
            this.unrenderEventSelection(instanceId);
        }
    };
    View.prototype.renderEventSelection = function (instanceId) { };
    View.prototype.unrenderEventSelection = function (instanceId) { };
    // Event Drag
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEventDragWrap = function (state) {
        if (state) {
            this.renderEventDrag(state);
        }
    };
    View.prototype.unrenderEventDragWrap = function (state) {
        if (state) {
            this.unrenderEventDrag(state);
        }
    };
    View.prototype.renderEventDrag = function (state) { };
    View.prototype.unrenderEventDrag = function (state) { };
    // Event Resize
    // -----------------------------------------------------------------------------------------------------------------
    View.prototype.renderEventResizeWrap = function (state) {
        if (state) {
            this.renderEventResize(state);
        }
    };
    View.prototype.unrenderEventResizeWrap = function (state) {
        if (state) {
            this.unrenderEventResize(state);
        }
    };
    View.prototype.renderEventResize = function (state) { };
    View.prototype.unrenderEventResize = function (state) { };
    /* Now Indicator
    ------------------------------------------------------------------------------------------------------------------*/
    // Immediately render the current time indicator and begins re-rendering it at an interval,
    // which is defined by this.getNowIndicatorUnit().
    // TODO: somehow do this for the current whole day's background too
    View.prototype.startNowIndicator = function (dateProfile) {
        var _this = this;
        var dateEnv = this.dateEnv;
        var unit;
        var update;
        var delay; // ms wait value
        if (this.opt('nowIndicator')) {
            unit = this.getNowIndicatorUnit(dateProfile);
            if (unit) {
                update = this.updateNowIndicator.bind(this);
                this.initialNowDate = this.calendar.getNow();
                this.initialNowQueriedMs = new Date().valueOf();
                // wait until the beginning of the next interval
                delay = dateEnv.add(dateEnv.startOf(this.initialNowDate, unit), createDuration(1, unit)).valueOf() - this.initialNowDate.valueOf();
                // TODO: maybe always use setTimeout, waiting until start of next unit
                this.nowIndicatorTimeoutID = setTimeout(function () {
                    _this.nowIndicatorTimeoutID = null;
                    update();
                    if (unit === 'second') {
                        delay = 1000; // every second
                    }
                    else {
                        delay = 1000 * 60; // otherwise, every minute
                    }
                    _this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
                }, delay);
            }
            // rendering will be initiated in updateSize
        }
    };
    // rerenders the now indicator, computing the new current time from the amount of time that has passed
    // since the initial getNow call.
    View.prototype.updateNowIndicator = function () {
        if (this.props.dateProfile && // a way to determine if dates were rendered yet
            this.initialNowDate // activated before?
        ) {
            this.unrenderNowIndicator(); // won't unrender if unnecessary
            this.renderNowIndicator(addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs));
            this.isNowIndicatorRendered = true;
        }
    };
    // Immediately unrenders the view's current time indicator and stops any re-rendering timers.
    // Won't cause side effects if indicator isn't rendered.
    View.prototype.stopNowIndicator = function () {
        if (this.isNowIndicatorRendered) {
            if (this.nowIndicatorTimeoutID) {
                clearTimeout(this.nowIndicatorTimeoutID);
                this.nowIndicatorTimeoutID = null;
            }
            if (this.nowIndicatorIntervalID) {
                clearInterval(this.nowIndicatorIntervalID);
                this.nowIndicatorIntervalID = null;
            }
            this.unrenderNowIndicator();
            this.isNowIndicatorRendered = false;
        }
    };
    View.prototype.getNowIndicatorUnit = function (dateProfile) {
        // subclasses should implement
    };
    // Renders a current time indicator at the given datetime
    View.prototype.renderNowIndicator = function (date) {
        // SUBCLASSES MUST PASS TO CHILDREN!
    };
    // Undoes the rendering actions from renderNowIndicator
    View.prototype.unrenderNowIndicator = function () {
        // SUBCLASSES MUST PASS TO CHILDREN!
    };
    /* Scroller
    ------------------------------------------------------------------------------------------------------------------*/
    View.prototype.addScroll = function (scroll) {
        var queuedScroll = this.queuedScroll || (this.queuedScroll = {});
        __assign(queuedScroll, scroll);
    };
    View.prototype.popScroll = function (isResize) {
        this.applyQueuedScroll(isResize);
        this.queuedScroll = null;
    };
    View.prototype.applyQueuedScroll = function (isResize) {
        this.applyScroll(this.queuedScroll || {}, isResize);
    };
    View.prototype.queryScroll = function () {
        var scroll = {};
        if (this.props.dateProfile) { // dates rendered yet?
            __assign(scroll, this.queryDateScroll());
        }
        return scroll;
    };
    View.prototype.applyScroll = function (scroll, isResize) {
        var duration = scroll.duration;
        if (duration != null) {
            delete scroll.duration;
            if (this.props.dateProfile) { // dates rendered yet?
                __assign(scroll, this.computeDateScroll(duration));
            }
        }
        if (this.props.dateProfile) { // dates rendered yet?
            this.applyDateScroll(scroll);
        }
    };
    View.prototype.computeDateScroll = function (duration) {
        return {}; // subclasses must implement
    };
    View.prototype.queryDateScroll = function () {
        return {}; // subclasses must implement
    };
    View.prototype.applyDateScroll = function (scroll) {
        // subclasses must implement
    };
    // for API
    View.prototype.scrollToDuration = function (duration) {
        this.applyScroll({ duration: duration }, false);
    };
    return View;
}(DateComponent));
EmitterMixin.mixInto(View);
View.prototype.usesMinMaxTime = false;
View.prototype.dateProfileGeneratorClass = DateProfileGenerator;

var FgEventRenderer = /** @class */ (function () {
    function FgEventRenderer(context) {
        this.segs = [];
        this.isSizeDirty = false;
        this.context = context;
    }
    FgEventRenderer.prototype.renderSegs = function (segs, mirrorInfo) {
        this.rangeUpdated(); // called too frequently :(
        // render an `.el` on each seg
        // returns a subset of the segs. segs that were actually rendered
        segs = this.renderSegEls(segs, mirrorInfo);
        this.segs = segs;
        this.attachSegs(segs, mirrorInfo);
        this.isSizeDirty = true;
        this.context.view.triggerRenderedSegs(this.segs, Boolean(mirrorInfo));
    };
    FgEventRenderer.prototype.unrender = function (_segs, mirrorInfo) {
        this.context.view.triggerWillRemoveSegs(this.segs, Boolean(mirrorInfo));
        this.detachSegs(this.segs);
        this.segs = [];
    };
    // Updates values that rely on options and also relate to range
    FgEventRenderer.prototype.rangeUpdated = function () {
        var options = this.context.options;
        var displayEventTime;
        var displayEventEnd;
        this.eventTimeFormat = createFormatter(options.eventTimeFormat || this.computeEventTimeFormat(), options.defaultRangeSeparator);
        displayEventTime = options.displayEventTime;
        if (displayEventTime == null) {
            displayEventTime = this.computeDisplayEventTime(); // might be based off of range
        }
        displayEventEnd = options.displayEventEnd;
        if (displayEventEnd == null) {
            displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
        }
        this.displayEventTime = displayEventTime;
        this.displayEventEnd = displayEventEnd;
    };
    // Renders and assigns an `el` property for each foreground event segment.
    // Only returns segments that successfully rendered.
    FgEventRenderer.prototype.renderSegEls = function (segs, mirrorInfo) {
        var html = '';
        var i;
        if (segs.length) { // don't build an empty html string
            // build a large concatenation of event segment HTML
            for (i = 0; i < segs.length; i++) {
                html += this.renderSegHtml(segs[i], mirrorInfo);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
            htmlToElements(html).forEach(function (el, i) {
                var seg = segs[i];
                if (el) {
                    seg.el = el;
                }
            });
            segs = filterSegsViaEls(this.context.view, segs, Boolean(mirrorInfo));
        }
        return segs;
    };
    // Generic utility for generating the HTML classNames for an event segment's element
    FgEventRenderer.prototype.getSegClasses = function (seg, isDraggable, isResizable, mirrorInfo) {
        var classes = [
            'fc-event',
            seg.isStart ? 'fc-start' : 'fc-not-start',
            seg.isEnd ? 'fc-end' : 'fc-not-end'
        ].concat(seg.eventRange.ui.classNames);
        if (isDraggable) {
            classes.push('fc-draggable');
        }
        if (isResizable) {
            classes.push('fc-resizable');
        }
        if (mirrorInfo) {
            classes.push('fc-mirror');
            if (mirrorInfo.isDragging) {
                classes.push('fc-dragging');
            }
            if (mirrorInfo.isResizing) {
                classes.push('fc-resizing');
            }
        }
        return classes;
    };
    // Compute the text that should be displayed on an event's element.
    // `range` can be the Event object itself, or something range-like, with at least a `start`.
    // If event times are disabled, or the event has no time, will return a blank string.
    // If not specified, formatter will default to the eventTimeFormat setting,
    // and displayEnd will default to the displayEventEnd setting.
    FgEventRenderer.prototype.getTimeText = function (eventRange, formatter, displayEnd) {
        var def = eventRange.def, instance = eventRange.instance;
        return this._getTimeText(instance.range.start, def.hasEnd ? instance.range.end : null, def.allDay, formatter, displayEnd, instance.forcedStartTzo, instance.forcedEndTzo);
    };
    FgEventRenderer.prototype._getTimeText = function (start, end, allDay, formatter, displayEnd, forcedStartTzo, forcedEndTzo) {
        var dateEnv = this.context.dateEnv;
        if (formatter == null) {
            formatter = this.eventTimeFormat;
        }
        if (displayEnd == null) {
            displayEnd = this.displayEventEnd;
        }
        if (this.displayEventTime && !allDay) {
            if (displayEnd && end) {
                return dateEnv.formatRange(start, end, formatter, {
                    forcedStartTzo: forcedStartTzo,
                    forcedEndTzo: forcedEndTzo
                });
            }
            else {
                return dateEnv.format(start, formatter, {
                    forcedTzo: forcedStartTzo
                });
            }
        }
        return '';
    };
    FgEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true
        };
    };
    FgEventRenderer.prototype.computeDisplayEventTime = function () {
        return true;
    };
    FgEventRenderer.prototype.computeDisplayEventEnd = function () {
        return true;
    };
    // Utility for generating event skin-related CSS properties
    FgEventRenderer.prototype.getSkinCss = function (ui) {
        return {
            'background-color': ui.backgroundColor,
            'border-color': ui.borderColor,
            color: ui.textColor
        };
    };
    FgEventRenderer.prototype.sortEventSegs = function (segs) {
        var specs = this.context.view.eventOrderSpecs;
        var objs = segs.map(buildSegCompareObj);
        objs.sort(function (obj0, obj1) {
            return compareByFieldSpecs(obj0, obj1, specs);
        });
        return objs.map(function (c) {
            return c._seg;
        });
    };
    FgEventRenderer.prototype.computeSizes = function (force) {
        if (force || this.isSizeDirty) {
            this.computeSegSizes(this.segs);
        }
    };
    FgEventRenderer.prototype.assignSizes = function (force) {
        if (force || this.isSizeDirty) {
            this.assignSegSizes(this.segs);
            this.isSizeDirty = false;
        }
    };
    FgEventRenderer.prototype.computeSegSizes = function (segs) {
    };
    FgEventRenderer.prototype.assignSegSizes = function (segs) {
    };
    // Manipulation on rendered segs
    FgEventRenderer.prototype.hideByHash = function (hash) {
        if (hash) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                if (hash[seg.eventRange.instance.instanceId]) {
                    seg.el.style.visibility = 'hidden';
                }
            }
        }
    };
    FgEventRenderer.prototype.showByHash = function (hash) {
        if (hash) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                if (hash[seg.eventRange.instance.instanceId]) {
                    seg.el.style.visibility = '';
                }
            }
        }
    };
    FgEventRenderer.prototype.selectByInstanceId = function (instanceId) {
        if (instanceId) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                var eventInstance = seg.eventRange.instance;
                if (eventInstance && eventInstance.instanceId === instanceId &&
                    seg.el // necessary?
                ) {
                    seg.el.classList.add('fc-selected');
                }
            }
        }
    };
    FgEventRenderer.prototype.unselectByInstanceId = function (instanceId) {
        if (instanceId) {
            for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                var seg = _a[_i];
                if (seg.el) { // necessary?
                    seg.el.classList.remove('fc-selected');
                }
            }
        }
    };
    return FgEventRenderer;
}());
// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg) {
    var eventDef = seg.eventRange.def;
    var range = seg.eventRange.instance.range;
    var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
    var end = range.end ? range.end.valueOf() : 0; // "
    return __assign({}, eventDef.extendedProps, eventDef, { id: eventDef.publicId, start: start,
        end: end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg // for later retrieval
     });
}

var FillRenderer = /** @class */ (function () {
    function FillRenderer(context) {
        this.fillSegTag = 'div';
        this.dirtySizeFlags = {};
        this.context = context;
        this.containerElsByType = {};
        this.segsByType = {};
    }
    FillRenderer.prototype.getSegsByType = function (type) {
        return this.segsByType[type] || [];
    };
    FillRenderer.prototype.renderSegs = function (type, segs) {
        var _a;
        var renderedSegs = this.renderSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs
        var containerEls = this.attachSegs(type, renderedSegs);
        if (containerEls) {
            (_a = (this.containerElsByType[type] || (this.containerElsByType[type] = []))).push.apply(_a, containerEls);
        }
        this.segsByType[type] = renderedSegs;
        if (type === 'bgEvent') {
            this.context.view.triggerRenderedSegs(renderedSegs, false); // isMirror=false
        }
        this.dirtySizeFlags[type] = true;
    };
    // Unrenders a specific type of fill that is currently rendered on the grid
    FillRenderer.prototype.unrender = function (type) {
        var segs = this.segsByType[type];
        if (segs) {
            if (type === 'bgEvent') {
                this.context.view.triggerWillRemoveSegs(segs, false); // isMirror=false
            }
            this.detachSegs(type, segs);
        }
    };
    // Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
    // Only returns segments that successfully rendered.
    FillRenderer.prototype.renderSegEls = function (type, segs) {
        var _this = this;
        var html = '';
        var i;
        if (segs.length) {
            // build a large concatenation of segment HTML
            for (i = 0; i < segs.length; i++) {
                html += this.renderSegHtml(type, segs[i]);
            }
            // Grab individual elements from the combined HTML string. Use each as the default rendering.
            // Then, compute the 'el' for each segment.
            htmlToElements(html).forEach(function (el, i) {
                var seg = segs[i];
                if (el) {
                    seg.el = el;
                }
            });
            if (type === 'bgEvent') {
                segs = filterSegsViaEls(this.context.view, segs, false // isMirror. background events can never be mirror elements
                );
            }
            // correct element type? (would be bad if a non-TD were inserted into a table for example)
            segs = segs.filter(function (seg) {
                return elementMatches(seg.el, _this.fillSegTag);
            });
        }
        return segs;
    };
    // Builds the HTML needed for one fill segment. Generic enough to work with different types.
    FillRenderer.prototype.renderSegHtml = function (type, seg) {
        var css = null;
        var classNames = [];
        if (type !== 'highlight' && type !== 'businessHours') {
            css = {
                'background-color': seg.eventRange.ui.backgroundColor
            };
        }
        if (type !== 'highlight') {
            classNames = classNames.concat(seg.eventRange.ui.classNames);
        }
        if (type === 'businessHours') {
            classNames.push('fc-bgevent');
        }
        else {
            classNames.push('fc-' + type.toLowerCase());
        }
        return '<' + this.fillSegTag +
            (classNames.length ? ' class="' + classNames.join(' ') + '"' : '') +
            (css ? ' style="' + cssToStr(css) + '"' : '') +
            '></' + this.fillSegTag + '>';
    };
    FillRenderer.prototype.detachSegs = function (type, segs) {
        var containerEls = this.containerElsByType[type];
        if (containerEls) {
            containerEls.forEach(removeElement);
            delete this.containerElsByType[type];
        }
    };
    FillRenderer.prototype.computeSizes = function (force) {
        for (var type in this.segsByType) {
            if (force || this.dirtySizeFlags[type]) {
                this.computeSegSizes(this.segsByType[type]);
            }
        }
    };
    FillRenderer.prototype.assignSizes = function (force) {
        for (var type in this.segsByType) {
            if (force || this.dirtySizeFlags[type]) {
                this.assignSegSizes(this.segsByType[type]);
            }
        }
        this.dirtySizeFlags = {};
    };
    FillRenderer.prototype.computeSegSizes = function (segs) {
    };
    FillRenderer.prototype.assignSegSizes = function (segs) {
    };
    return FillRenderer;
}());

var NamedTimeZoneImpl = /** @class */ (function () {
    function NamedTimeZoneImpl(timeZoneName) {
        this.timeZoneName = timeZoneName;
    }
    return NamedTimeZoneImpl;
}());

/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/
var ElementDragging = /** @class */ (function () {
    function ElementDragging(el) {
        this.emitter = new EmitterMixin();
    }
    ElementDragging.prototype.destroy = function () {
    };
    ElementDragging.prototype.setMirrorIsVisible = function (bool) {
        // optional if subclass doesn't want to support a mirror
    };
    ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
        // optional if subclass doesn't want to support a mirror
    };
    ElementDragging.prototype.setAutoScrollEnabled = function (bool) {
        // optional
    };
    return ElementDragging;
}());

function formatDate(dateInput, settings) {
    if (settings === void 0) { settings = {}; }
    var dateEnv = buildDateEnv$1(settings);
    var formatter = createFormatter(settings);
    var dateMeta = dateEnv.createMarkerMeta(dateInput);
    if (!dateMeta) { // TODO: warning?
        return '';
    }
    return dateEnv.format(dateMeta.marker, formatter, {
        forcedTzo: dateMeta.forcedTzo
    });
}
function formatRange(startInput, endInput, settings // mixture of env and formatter settings
) {
    var dateEnv = buildDateEnv$1(typeof settings === 'object' && settings ? settings : {}); // pass in if non-null object
    var formatter = createFormatter(settings, globalDefaults.defaultRangeSeparator);
    var startMeta = dateEnv.createMarkerMeta(startInput);
    var endMeta = dateEnv.createMarkerMeta(endInput);
    if (!startMeta || !endMeta) { // TODO: warning?
        return '';
    }
    return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
        forcedStartTzo: startMeta.forcedTzo,
        forcedEndTzo: endMeta.forcedTzo,
        isEndExclusive: settings.isEndExclusive
    });
}
// TODO: more DRY and optimized
function buildDateEnv$1(settings) {
    var locale = buildLocale(settings.locale || 'en', parseRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
    // ensure required settings
    settings = __assign({ timeZone: globalDefaults.timeZone, calendarSystem: 'gregory' }, settings, { locale: locale });
    return new DateEnv(settings);
}

var DRAG_META_PROPS = {
    startTime: createDuration,
    duration: createDuration,
    create: Boolean,
    sourceId: String
};
var DRAG_META_DEFAULTS = {
    create: true
};
function parseDragMeta(raw) {
    var leftoverProps = {};
    var refined = refineProps(raw, DRAG_META_PROPS, DRAG_META_DEFAULTS, leftoverProps);
    refined.leftoverProps = leftoverProps;
    return refined;
}

// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
    // if more than one week row, or if there are a lot of columns with not much space,
    // put just the day numbers will be in each cell
    if (!datesRepDistinctDays || dayCnt > 10) {
        return { weekday: 'short' }; // "Sat"
    }
    else if (dayCnt > 1) {
        return { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }; // "Sat 11/12"
    }
    else {
        return { weekday: 'long' }; // "Saturday"
    }
}
function renderDateCell(dateMarker, dateProfile, datesRepDistinctDays, colCnt, colHeadFormat, context, colspan, otherAttrs) {
    var view = context.view, dateEnv = context.dateEnv, theme = context.theme, options = context.options;
    var isDateValid = rangeContainsMarker(dateProfile.activeRange, dateMarker); // TODO: called too frequently. cache somehow.
    var classNames = [
        'fc-day-header',
        theme.getClass('widgetHeader')
    ];
    var innerHtml;
    if (typeof options.columnHeaderHtml === 'function') {
        innerHtml = options.columnHeaderHtml(dateEnv.toDate(dateMarker));
    }
    else if (typeof options.columnHeaderText === 'function') {
        innerHtml = htmlEscape(options.columnHeaderText(dateEnv.toDate(dateMarker)));
    }
    else {
        innerHtml = htmlEscape(dateEnv.format(dateMarker, colHeadFormat));
    }
    // if only one row of days, the classNames on the header can represent the specific days beneath
    if (datesRepDistinctDays) {
        classNames = classNames.concat(
        // includes the day-of-week class
        // noThemeHighlight=true (don't highlight the header)
        getDayClasses(dateMarker, dateProfile, context, true));
    }
    else {
        classNames.push('fc-' + DAY_IDS[dateMarker.getUTCDay()]); // only add the day-of-week class
    }
    return '' +
        '<th class="' + classNames.join(' ') + '"' +
        ((isDateValid && datesRepDistinctDays) ?
            ' data-date="' + dateEnv.formatIso(dateMarker, { omitTime: true }) + '"' :
            '') +
        (colspan > 1 ?
            ' colspan="' + colspan + '"' :
            '') +
        (otherAttrs ?
            ' ' + otherAttrs :
            '') +
        '>' +
        (isDateValid ?
            // don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
            buildGotoAnchorHtml(view, { date: dateMarker, forceOff: !datesRepDistinctDays || colCnt === 1 }, innerHtml) :
            // if not valid, display text, but no link
            innerHtml) +
        '</th>';
}

var DayHeader = /** @class */ (function (_super) {
    __extends(DayHeader, _super);
    function DayHeader(context, parentEl) {
        var _this = _super.call(this, context) || this;
        parentEl.innerHTML = ''; // because might be nbsp
        parentEl.appendChild(_this.el = htmlToElement('<div class="fc-row ' + _this.theme.getClass('headerRow') + '">' +
            '<table class="' + _this.theme.getClass('tableGrid') + '">' +
            '<thead></thead>' +
            '</table>' +
            '</div>'));
        _this.thead = _this.el.querySelector('thead');
        return _this;
    }
    DayHeader.prototype.destroy = function () {
        removeElement(this.el);
    };
    DayHeader.prototype.render = function (props) {
        var dates = props.dates, datesRepDistinctDays = props.datesRepDistinctDays;
        var parts = [];
        if (props.renderIntroHtml) {
            parts.push(props.renderIntroHtml());
        }
        var colHeadFormat = createFormatter(this.opt('columnHeaderFormat') ||
            computeFallbackHeaderFormat(datesRepDistinctDays, dates.length));
        for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
            var date = dates_1[_i];
            parts.push(renderDateCell(date, props.dateProfile, datesRepDistinctDays, dates.length, colHeadFormat, this.context));
        }
        if (this.isRtl) {
            parts.reverse();
        }
        this.thead.innerHTML = '<tr>' + parts.join('') + '</tr>';
    };
    return DayHeader;
}(Component));

var DaySeries = /** @class */ (function () {
    function DaySeries(range, dateProfileGenerator) {
        var date = range.start;
        var end = range.end;
        var indices = [];
        var dates = [];
        var dayIndex = -1;
        while (date < end) { // loop each day from start to end
            if (dateProfileGenerator.isHiddenDay(date)) {
                indices.push(dayIndex + 0.5); // mark that it's between indices
            }
            else {
                dayIndex++;
                indices.push(dayIndex);
                dates.push(date);
            }
            date = addDays(date, 1);
        }
        this.dates = dates;
        this.indices = indices;
        this.cnt = dates.length;
    }
    DaySeries.prototype.sliceRange = function (range) {
        var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
        var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
        var clippedFirstIndex = Math.max(0, firstIndex);
        var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
        // deal with in-between indices
        clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
        clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
        if (clippedFirstIndex <= clippedLastIndex) {
            return {
                firstIndex: clippedFirstIndex,
                lastIndex: clippedLastIndex,
                isStart: firstIndex === clippedFirstIndex,
                isEnd: lastIndex === clippedLastIndex
            };
        }
        else {
            return null;
        }
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    DaySeries.prototype.getDateDayIndex = function (date) {
        var indices = this.indices;
        var dayOffset = Math.floor(diffDays(this.dates[0], date));
        if (dayOffset < 0) {
            return indices[0] - 1;
        }
        else if (dayOffset >= indices.length) {
            return indices[indices.length - 1] + 1;
        }
        else {
            return indices[dayOffset];
        }
    };
    return DaySeries;
}());

var DayTable = /** @class */ (function () {
    function DayTable(daySeries, breakOnWeeks) {
        var dates = daySeries.dates;
        var daysPerRow;
        var firstDay;
        var rowCnt;
        if (breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dates[0].getUTCDay();
            for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow++) {
                if (dates[daysPerRow].getUTCDay() === firstDay) {
                    break;
                }
            }
            rowCnt = Math.ceil(dates.length / daysPerRow);
        }
        else {
            rowCnt = 1;
            daysPerRow = dates.length;
        }
        this.rowCnt = rowCnt;
        this.colCnt = daysPerRow;
        this.daySeries = daySeries;
        this.cells = this.buildCells();
        this.headerDates = this.buildHeaderDates();
    }
    DayTable.prototype.buildCells = function () {
        var rows = [];
        for (var row = 0; row < this.rowCnt; row++) {
            var cells = [];
            for (var col = 0; col < this.colCnt; col++) {
                cells.push(this.buildCell(row, col));
            }
            rows.push(cells);
        }
        return rows;
    };
    DayTable.prototype.buildCell = function (row, col) {
        return {
            date: this.daySeries.dates[row * this.colCnt + col]
        };
    };
    DayTable.prototype.buildHeaderDates = function () {
        var dates = [];
        for (var col = 0; col < this.colCnt; col++) {
            dates.push(this.cells[0][col].date);
        }
        return dates;
    };
    DayTable.prototype.sliceRange = function (range) {
        var colCnt = this.colCnt;
        var seriesSeg = this.daySeries.sliceRange(range);
        var segs = [];
        if (seriesSeg) {
            var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
            var index = firstIndex;
            while (index <= lastIndex) {
                var row = Math.floor(index / colCnt);
                var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                segs.push({
                    row: row,
                    firstCol: index % colCnt,
                    lastCol: (nextIndex - 1) % colCnt,
                    isStart: seriesSeg.isStart && index === firstIndex,
                    isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex
                });
                index = nextIndex;
            }
        }
        return segs;
    };
    return DayTable;
}());

var Slicer = /** @class */ (function () {
    function Slicer() {
        this.sliceBusinessHours = memoize(this._sliceBusinessHours);
        this.sliceDateSelection = memoize(this._sliceDateSpan);
        this.sliceEventStore = memoize(this._sliceEventStore);
        this.sliceEventDrag = memoize(this._sliceInteraction);
        this.sliceEventResize = memoize(this._sliceInteraction);
    }
    Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        var eventUiBases = props.eventUiBases;
        var eventSegs = this.sliceEventStore.apply(this, [props.eventStore, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs));
        return {
            dateSelectionSegs: this.sliceDateSelection.apply(this, [props.dateSelection, eventUiBases, component].concat(extraArgs)),
            businessHourSegs: this.sliceBusinessHours.apply(this, [props.businessHours, dateProfile, nextDayThreshold, component].concat(extraArgs)),
            fgEventSegs: eventSegs.fg,
            bgEventSegs: eventSegs.bg,
            eventDrag: this.sliceEventDrag.apply(this, [props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
            eventResize: this.sliceEventResize.apply(this, [props.eventResize, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
            eventSelection: props.eventSelection
        }; // TODO: give interactionSegs?
    };
    Slicer.prototype.sliceNowDate = function (// does not memoize
    date, component) {
        var extraArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extraArgs[_i - 2] = arguments[_i];
        }
        return this._sliceDateSpan.apply(this, [{ range: { start: date, end: addMs(date, 1) }, allDay: false },
            {},
            component].concat(extraArgs));
    };
    Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        if (!businessHours) {
            return [];
        }
        return this._sliceEventStore.apply(this, [expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), component.calendar),
            {},
            dateProfile,
            nextDayThreshold,
            component].concat(extraArgs)).bg;
    };
    Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            extraArgs[_i - 5] = arguments[_i];
        }
        if (eventStore) {
            var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                bg: this.sliceEventRanges(rangeRes.bg, component, extraArgs),
                fg: this.sliceEventRanges(rangeRes.fg, component, extraArgs)
            };
        }
        else {
            return { bg: [], fg: [] };
        }
    };
    Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold, component) {
        var extraArgs = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            extraArgs[_i - 5] = arguments[_i];
        }
        if (!interaction) {
            return null;
        }
        var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
        return {
            segs: this.sliceEventRanges(rangeRes.fg, component, extraArgs),
            affectedInstances: interaction.affectedEvents.instances,
            isEvent: interaction.isEvent,
            sourceSeg: interaction.origSeg
        };
    };
    Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, component) {
        var extraArgs = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            extraArgs[_i - 3] = arguments[_i];
        }
        if (!dateSpan) {
            return [];
        }
        var eventRange = fabricateEventRange(dateSpan, eventUiBases, component.calendar);
        var segs = this.sliceRange.apply(this, [dateSpan.range].concat(extraArgs));
        for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
            var seg = segs_1[_a];
            seg.component = component;
            seg.eventRange = eventRange;
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */
    Slicer.prototype.sliceEventRanges = function (eventRanges, component, // TODO: kill
    extraArgs) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.sliceEventRange(eventRange, component, extraArgs));
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */
    Slicer.prototype.sliceEventRange = function (eventRange, component, // TODO: kill
    extraArgs) {
        var segs = this.sliceRange.apply(this, [eventRange.range].concat(extraArgs));
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            seg.component = component;
            seg.eventRange = eventRange;
            seg.isStart = eventRange.isStart && seg.isStart;
            seg.isEnd = eventRange.isEnd && seg.isEnd;
        }
        return segs;
    };
    return Slicer;
}());
/*
for incorporating minTime/maxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/
function computeActiveRange(dateProfile, isComponentAllDay) {
    var range = dateProfile.activeRange;
    if (isComponentAllDay) {
        return range;
    }
    return {
        start: addMs(range.start, dateProfile.minTime.milliseconds),
        end: addMs(range.end, dateProfile.maxTime.milliseconds - 864e5) // 864e5 = ms in a day
    };
}

// exports
// --------------------------------------------------------------------------------------------------
var version = '4.3.1';




/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.esm.js ***!
  \********************************************************/
/*! exports provided: default, AbstractDayGridView, DayBgRow, DayGrid, DayGridSlicer, DayGridView, SimpleDayGrid, buildBasicDayTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDayGridView", function() { return DayGridView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBgRow", function() { return DayBgRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGrid", function() { return DayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridSlicer", function() { return DayGridSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridView", function() { return DayGridView$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDayGrid", function() { return SimpleDayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBasicDayTable", function() { return buildDayTable; });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/*!
FullCalendar Day Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

var DayGridDateProfileGenerator = /** @class */ (function (_super) {
    __extends(DayGridDateProfileGenerator, _super);
    function DayGridDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    DayGridDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        var dateEnv = this.dateEnv;
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        var endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) {
                end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addWeeks"])(endOfWeek, 1);
            }
        }
        // ensure 6 weeks
        if (this.options.monthMode &&
            this.options.fixedWeekCount) {
            var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffWeeks"])(start, end));
            end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addWeeks"])(end, 6 - rowCnt);
        }
        return { start: start, end: end };
    };
    return DayGridDateProfileGenerator;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateProfileGenerator"]));

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
  - className (string)
  - content (HTML string, element, or element array)
  - parentEl
  - top
  - left
  - right (the x coord of where the right edge should be. not a "CSS" right)
  - autoHide (boolean)
  - show (callback)
  - hide (callback)
*/
var Popover = /** @class */ (function () {
    function Popover(options) {
        var _this = this;
        this.isHidden = true;
        this.margin = 10; // the space required between the popover and the edges of the scroll container
        // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
        this.documentMousedown = function (ev) {
            // only hide the popover if the click happened outside the popover
            if (_this.el && !_this.el.contains(ev.target)) {
                _this.hide();
            }
        };
        this.options = options;
    }
    // Shows the popover on the specified position. Renders it if not already
    Popover.prototype.show = function () {
        if (this.isHidden) {
            if (!this.el) {
                this.render();
            }
            this.el.style.display = '';
            this.position();
            this.isHidden = false;
            this.trigger('show');
        }
    };
    // Hides the popover, through CSS, but does not remove it from the DOM
    Popover.prototype.hide = function () {
        if (!this.isHidden) {
            this.el.style.display = 'none';
            this.isHidden = true;
            this.trigger('hide');
        }
    };
    // Creates `this.el` and renders content inside of it
    Popover.prototype.render = function () {
        var _this = this;
        var options = this.options;
        var el = this.el = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
            className: 'fc-popover ' + (options.className || ''),
            style: {
                top: '0',
                left: '0'
            }
        });
        if (typeof options.content === 'function') {
            options.content(el);
        }
        options.parentEl.appendChild(el);
        // when a click happens on anything inside with a 'fc-close' className, hide the popover
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["listenBySelector"])(el, 'click', '.fc-close', function (ev) {
            _this.hide();
        });
        if (options.autoHide) {
            document.addEventListener('mousedown', this.documentMousedown);
        }
    };
    // Hides and unregisters any handlers
    Popover.prototype.destroy = function () {
        this.hide();
        if (this.el) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.el);
            this.el = null;
        }
        document.removeEventListener('mousedown', this.documentMousedown);
    };
    // Positions the popover optimally, using the top/left/right options
    Popover.prototype.position = function () {
        var options = this.options;
        var el = this.el;
        var elDims = el.getBoundingClientRect(); // only used for width,height
        var origin = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(el.offsetParent);
        var clippingRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeClippingRect"])(options.parentEl);
        var top; // the "position" (not "offset") values for the popover
        var left; //
        // compute top and left
        top = options.top || 0;
        if (options.left !== undefined) {
            left = options.left;
        }
        else if (options.right !== undefined) {
            left = options.right - elDims.width; // derive the left value from the right value
        }
        else {
            left = 0;
        }
        // constrain to the view port. if constrained by two edges, give precedence to top/left
        top = Math.min(top, clippingRect.bottom - elDims.height - this.margin);
        top = Math.max(top, clippingRect.top + this.margin);
        left = Math.min(left, clippingRect.right - elDims.width - this.margin);
        left = Math.max(left, clippingRect.left + this.margin);
        Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(el, {
            top: top - origin.top,
            left: left - origin.left
        });
    };
    // Triggers a callback. Calls a function in the option hash of the same name.
    // Arguments beyond the first `name` are forwarded on.
    // TODO: better code reuse for this. Repeat code
    // can kill this???
    Popover.prototype.trigger = function (name) {
        if (this.options[name]) {
            this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    return Popover;
}());

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
// "Simple" is bad a name. has nothing to do with SimpleDayGrid
var SimpleDayGridEventRenderer = /** @class */ (function (_super) {
    __extends(SimpleDayGridEventRenderer, _super);
    function SimpleDayGridEventRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Builds the HTML to be used for the default element for an individual segment
    SimpleDayGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
        var _a = this.context, view = _a.view, options = _a.options;
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventUi = eventRange.ui;
        var allDay = eventDef.allDay;
        var isDraggable = view.computeEventDraggable(eventDef, eventUi);
        var isResizableFromStart = allDay && seg.isStart && view.computeEventStartResizable(eventDef, eventUi);
        var isResizableFromEnd = allDay && seg.isEnd && view.computeEventEndResizable(eventDef, eventUi);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
        var skinCss = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(this.getSkinCss(eventUi));
        var timeHtml = '';
        var timeText;
        var titleHtml;
        classes.unshift('fc-day-grid-event', 'fc-h-event');
        // Only display a timed events time if it is the starting segment
        if (seg.isStart) {
            timeText = this.getTimeText(eventRange);
            if (timeText) {
                timeHtml = '<span class="fc-time">' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(timeText) + '</span>';
            }
        }
        titleHtml =
            '<span class="fc-title">' +
                (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title || '') || '&nbsp;') + // we always want one line of height
                '</span>';
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (options.dir === 'rtl' ?
                titleHtml + ' ' + timeHtml : // put a natural space in between
                timeHtml + ' ' + titleHtml //
            ) +
            '</div>' +
            (isResizableFromStart ?
                '<div class="fc-resizer fc-start-resizer"></div>' :
                '') +
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer"></div>' :
                '') +
            '</a>';
    };
    // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
    SimpleDayGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'narrow'
        };
    };
    SimpleDayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return false; // TODO: somehow consider the originating DayGrid's column count
    };
    return SimpleDayGridEventRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]));

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
var DayGridEventRenderer = /** @class */ (function (_super) {
    __extends(DayGridEventRenderer, _super);
    function DayGridEventRenderer(dayGrid) {
        var _this = _super.call(this, dayGrid.context) || this;
        _this.dayGrid = dayGrid;
        return _this;
    }
    // Renders the given foreground event segments onto the grid
    DayGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // append to each row's content skeleton
        this.dayGrid.rowEls.forEach(function (rowNode, i) {
            rowNode.querySelector('.fc-content-skeleton > table').appendChild(rowStructs[i].tbodyEl);
        });
        // removes the "more.." events popover
        if (!mirrorInfo) {
            this.dayGrid.removeSegPopover();
        }
    };
    // Unrenders all currently rendered foreground event segments
    DayGridEventRenderer.prototype.detachSegs = function () {
        var rowStructs = this.rowStructs || [];
        var rowStruct;
        while ((rowStruct = rowStructs.pop())) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(rowStruct.tbodyEl);
        }
        this.rowStructs = null;
    };
    // Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
    // Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
    // PRECONDITION: each segment shoud already have a rendered and assigned `.el`
    DayGridEventRenderer.prototype.renderSegRows = function (segs) {
        var rowStructs = [];
        var segRows;
        var row;
        segRows = this.groupSegRows(segs); // group into nested arrays
        // iterate each row of segment groupings
        for (row = 0; row < segRows.length; row++) {
            rowStructs.push(this.renderSegRow(row, segRows[row]));
        }
        return rowStructs;
    };
    // Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
    // the segments. Returns object with a bunch of internal data about how the render was calculated.
    // NOTE: modifies rowSegs
    DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
        var dayGrid = this.dayGrid;
        var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
        var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
        var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
        var tbody = document.createElement('tbody');
        var segMatrix = []; // lookup for which segments are rendered into which level+col cells
        var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
        var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
        var i;
        var levelSegs;
        var col;
        var tr;
        var j;
        var seg;
        var td;
        // populates empty cells from the current column (`col`) to `endCol`
        function emptyCellsUntil(endCol) {
            while (col < endCol) {
                // try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
                td = (loneCellMatrix[i - 1] || [])[col];
                if (td) {
                    td.rowSpan = (td.rowSpan || 1) + 1;
                }
                else {
                    td = document.createElement('td');
                    tr.appendChild(td);
                }
                cellMatrix[i][col] = td;
                loneCellMatrix[i][col] = td;
                col++;
            }
        }
        for (i = 0; i < levelCnt; i++) { // iterate through all levels
            levelSegs = segLevels[i];
            col = 0;
            tr = document.createElement('tr');
            segMatrix.push([]);
            cellMatrix.push([]);
            loneCellMatrix.push([]);
            // levelCnt might be 1 even though there are no actual levels. protect against this.
            // this single empty row is useful for styling.
            if (levelSegs) {
                for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
                    seg = levelSegs[j];
                    var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                    var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                    emptyCellsUntil(leftCol);
                    // create a container that occupies or more columns. append the event element.
                    td = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: 'fc-event-container' }, seg.el);
                    if (leftCol !== rightCol) {
                        td.colSpan = rightCol - leftCol + 1;
                    }
                    else { // a single-column segment
                        loneCellMatrix[i][col] = td;
                    }
                    while (col <= rightCol) {
                        cellMatrix[i][col] = td;
                        segMatrix[i][col] = seg;
                        col++;
                    }
                    tr.appendChild(td);
                }
            }
            emptyCellsUntil(colCnt); // finish off the row
            var introHtml = dayGrid.renderProps.renderIntroHtml();
            if (introHtml) {
                if (dayGrid.isRtl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(tr, introHtml);
                }
                else {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["prependToElement"])(tr, introHtml);
                }
            }
            tbody.appendChild(tr);
        }
        return {
            row: row,
            tbodyEl: tbody,
            cellMatrix: cellMatrix,
            segMatrix: segMatrix,
            segLevels: segLevels,
            segs: rowSegs
        };
    };
    // Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
    // NOTE: modifies segs
    DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
        var _a = this.dayGrid, isRtl = _a.isRtl, colCnt = _a.colCnt;
        var levels = [];
        var i;
        var seg;
        var j;
        // Give preference to elements with certain criteria, so they have
        // a chance to be closer to the top.
        segs = this.sortEventSegs(segs);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            // loop through levels, starting with the topmost, until the segment doesn't collide with other segments
            for (j = 0; j < levels.length; j++) {
                if (!isDaySegCollision(seg, levels[j])) {
                    break;
                }
            }
            // `j` now holds the desired subrow index
            seg.level = j;
            seg.leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol; // for sorting only
            seg.rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol // for sorting only
            ;
            (levels[j] || (levels[j] = [])).push(seg);
        }
        // order segments left-to-right. very important if calendar is RTL
        for (j = 0; j < levels.length; j++) {
            levels[j].sort(compareDaySegCols);
        }
        return levels;
    };
    // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
    DayGridEventRenderer.prototype.groupSegRows = function (segs) {
        var segRows = [];
        var i;
        for (i = 0; i < this.dayGrid.rowCnt; i++) {
            segRows.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segRows[segs[i].row].push(segs[i]);
        }
        return segRows;
    };
    // Computes a default `displayEventEnd` value if one is not expliclty defined
    DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
    };
    return DayGridEventRenderer;
}(SimpleDayGridEventRenderer));
// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
    var i;
    var otherSeg;
    for (i = 0; i < otherSegs.length; i++) {
        otherSeg = otherSegs[i];
        if (otherSeg.firstCol <= seg.lastCol &&
            otherSeg.lastCol >= seg.firstCol) {
            return true;
        }
    }
    return false;
}
// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
    return a.leftCol - b.leftCol;
}

var DayGridMirrorRenderer = /** @class */ (function (_super) {
    __extends(DayGridMirrorRenderer, _super);
    function DayGridMirrorRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var sourceSeg = mirrorInfo.sourceSeg;
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        // inject each new event skeleton into each associated row
        this.dayGrid.rowEls.forEach(function (rowNode, row) {
            var skeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-mirror-skeleton"><table></table></div>'); // will be absolutely positioned
            var skeletonTopEl;
            var skeletonTop;
            // If there is an original segment, match the top position. Otherwise, put it at the row's top level
            if (sourceSeg && sourceSeg.row === row) {
                skeletonTopEl = sourceSeg.el;
            }
            else {
                skeletonTopEl = rowNode.querySelector('.fc-content-skeleton tbody');
                if (!skeletonTopEl) { // when no events
                    skeletonTopEl = rowNode.querySelector('.fc-content-skeleton table');
                }
            }
            skeletonTop = skeletonTopEl.getBoundingClientRect().top -
                rowNode.getBoundingClientRect().top; // the offsetParent origin
            skeletonEl.style.top = skeletonTop + 'px';
            skeletonEl.querySelector('table').appendChild(rowStructs[row].tbodyEl);
            rowNode.appendChild(skeletonEl);
        });
    };
    return DayGridMirrorRenderer;
}(DayGridEventRenderer));

var EMPTY_CELL_HTML = '<td style="pointer-events:none"></td>';
var DayGridFillRenderer = /** @class */ (function (_super) {
    __extends(DayGridFillRenderer, _super);
    function DayGridFillRenderer(dayGrid) {
        var _this = _super.call(this, dayGrid.context) || this;
        _this.fillSegTag = 'td'; // override the default tag name
        _this.dayGrid = dayGrid;
        return _this;
    }
    DayGridFillRenderer.prototype.renderSegs = function (type, segs) {
        // don't render timed background events
        if (type === 'bgEvent') {
            segs = segs.filter(function (seg) {
                return seg.eventRange.def.allDay;
            });
        }
        _super.prototype.renderSegs.call(this, type, segs);
    };
    DayGridFillRenderer.prototype.attachSegs = function (type, segs) {
        var els = [];
        var i;
        var seg;
        var skeletonEl;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            skeletonEl = this.renderFillRow(type, seg);
            this.dayGrid.rowEls[seg.row].appendChild(skeletonEl);
            els.push(skeletonEl);
        }
        return els;
    };
    // Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
    DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
        var dayGrid = this.dayGrid;
        var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
        var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
        var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
        var startCol = leftCol;
        var endCol = rightCol + 1;
        var className;
        var skeletonEl;
        var trEl;
        if (type === 'businessHours') {
            className = 'bgevent';
        }
        else {
            className = type.toLowerCase();
        }
        skeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-' + className + '-skeleton">' +
            '<table><tr></tr></table>' +
            '</div>');
        trEl = skeletonEl.getElementsByTagName('tr')[0];
        if (startCol > 0) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, 
            // will create (startCol + 1) td's
            new Array(startCol + 1).join(EMPTY_CELL_HTML));
        }
        seg.el.colSpan = endCol - startCol;
        trEl.appendChild(seg.el);
        if (endCol < colCnt) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, 
            // will create (colCnt - endCol) td's
            new Array(colCnt - endCol + 1).join(EMPTY_CELL_HTML));
        }
        var introHtml = dayGrid.renderProps.renderIntroHtml();
        if (introHtml) {
            if (dayGrid.isRtl) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["appendToElement"])(trEl, introHtml);
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["prependToElement"])(trEl, introHtml);
            }
        }
        return skeletonEl;
    };
    return DayGridFillRenderer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FillRenderer"]));

var DayTile = /** @class */ (function (_super) {
    __extends(DayTile, _super);
    function DayTile(context, el) {
        var _this = _super.call(this, context, el) || this;
        var eventRenderer = _this.eventRenderer = new DayTileEventRenderer(_this);
        var renderFrame = _this.renderFrame = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderFrame);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderFrame]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        context.calendar.registerInteractiveComponent(_this, {
            el: _this.el,
            useEventCenter: false
        });
        return _this;
    }
    DayTile.prototype.render = function (props) {
        this.renderFrame(props.date);
        this.renderFgEvents(props.fgSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDragInstances);
        this.renderEventResize(props.eventResizeInstances);
    };
    DayTile.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderFrame.unrender(); // should unrender everything else
        this.calendar.unregisterInteractiveComponent(this);
    };
    DayTile.prototype._renderFrame = function (date) {
        var _a = this, theme = _a.theme, dateEnv = _a.dateEnv;
        var title = dateEnv.format(date, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(this.opt('dayPopoverFormat')) // TODO: cache
        );
        this.el.innerHTML =
            '<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
                '<span class="fc-title">' +
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(title) +
                '</span>' +
                '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
                '</div>' +
                '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
                '<div class="fc-event-container"></div>' +
                '</div>';
        this.segContainerEl = this.el.querySelector('.fc-event-container');
    };
    DayTile.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        var date = this.props.date; // HACK
        if (positionLeft < elWidth && positionTop < elHeight) {
            return {
                component: this,
                dateSpan: {
                    allDay: true,
                    range: { start: date, end: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(date, 1) }
                },
                dayEl: this.el,
                rect: {
                    left: 0,
                    top: 0,
                    right: elWidth,
                    bottom: elHeight
                },
                layer: 1
            };
        }
    };
    return DayTile;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
var DayTileEventRenderer = /** @class */ (function (_super) {
    __extends(DayTileEventRenderer, _super);
    function DayTileEventRenderer(dayTile) {
        var _this = _super.call(this, dayTile.context) || this;
        _this.dayTile = dayTile;
        return _this;
    }
    DayTileEventRenderer.prototype.attachSegs = function (segs) {
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            this.dayTile.segContainerEl.appendChild(seg.el);
        }
    };
    DayTileEventRenderer.prototype.detachSegs = function (segs) {
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(seg.el);
        }
    };
    return DayTileEventRenderer;
}(SimpleDayGridEventRenderer));

var DayBgRow = /** @class */ (function () {
    function DayBgRow(context) {
        this.context = context;
    }
    DayBgRow.prototype.renderHtml = function (props) {
        var parts = [];
        if (props.renderIntroHtml) {
            parts.push(props.renderIntroHtml());
        }
        for (var _i = 0, _a = props.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            parts.push(renderCellHtml(cell.date, props.dateProfile, this.context, cell.htmlAttrs));
        }
        if (!props.cells.length) {
            parts.push('<td class="fc-day ' + this.context.theme.getClass('widgetContent') + '"></td>');
        }
        if (this.context.options.dir === 'rtl') {
            parts.reverse();
        }
        return '<tr>' + parts.join('') + '</tr>';
    };
    return DayBgRow;
}());
function renderCellHtml(date, dateProfile, context, otherAttrs) {
    var dateEnv = context.dateEnv, theme = context.theme;
    var isDateValid = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsMarker"])(dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
    var classes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(date, dateProfile, context);
    classes.unshift('fc-day', theme.getClass('widgetContent'));
    return '<td class="' + classes.join(' ') + '"' +
        (isDateValid ?
            ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
            '') +
        (otherAttrs ?
            ' ' + otherAttrs :
            '') +
        '></td>';
}

var DAY_NUM_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ day: 'numeric' });
var WEEK_NUM_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'numeric' });
var DayGrid = /** @class */ (function (_super) {
    __extends(DayGrid, _super);
    function DayGrid(context, el, renderProps) {
        var _this = _super.call(this, context, el) || this;
        _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
        _this.isCellSizesDirty = false;
        var eventRenderer = _this.eventRenderer = new DayGridEventRenderer(_this);
        var fillRenderer = _this.fillRenderer = new DayGridFillRenderer(_this);
        _this.mirrorRenderer = new DayGridMirrorRenderer(_this);
        var renderCells = _this.renderCells = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderCells, _this._unrenderCells);
        _this.renderBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderCells]);
        _this.renderDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'), [renderCells]);
        _this.renderBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderCells]);
        _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderCells]);
        _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventDrag, _this._unrenderEventDrag, [renderCells]);
        _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventResize, _this._unrenderEventResize, [renderCells]);
        _this.renderProps = renderProps;
        return _this;
    }
    DayGrid.prototype.render = function (props) {
        var cells = props.cells;
        this.rowCnt = cells.length;
        this.colCnt = cells[0].length;
        this.renderCells(cells, props.isRigid);
        this.renderBusinessHours(props.businessHourSegs);
        this.renderDateSelection(props.dateSelectionSegs);
        this.renderBgEvents(props.bgEventSegs);
        this.renderFgEvents(props.fgEventSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDrag);
        this.renderEventResize(props.eventResize);
        if (this.segPopoverTile) {
            this.updateSegPopoverTile();
        }
    };
    DayGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderCells.unrender(); // will unrender everything else
    };
    DayGrid.prototype.getCellRange = function (row, col) {
        var start = this.props.cells[row][col].date;
        var end = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(start, 1);
        return { start: start, end: end };
    };
    DayGrid.prototype.updateSegPopoverTile = function (date, segs) {
        var ownProps = this.props;
        this.segPopoverTile.receiveProps({
            date: date || this.segPopoverTile.props.date,
            fgSegs: segs || this.segPopoverTile.props.fgSegs,
            eventSelection: ownProps.eventSelection,
            eventDragInstances: ownProps.eventDrag ? ownProps.eventDrag.affectedInstances : null,
            eventResizeInstances: ownProps.eventResize ? ownProps.eventResize.affectedInstances : null
        });
    };
    /* Date Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderCells = function (cells, isRigid) {
        var _a = this, view = _a.view, dateEnv = _a.dateEnv;
        var _b = this, rowCnt = _b.rowCnt, colCnt = _b.colCnt;
        var html = '';
        var row;
        var col;
        for (row = 0; row < rowCnt; row++) {
            html += this.renderDayRowHtml(row, isRigid);
        }
        this.el.innerHTML = html;
        this.rowEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-row');
        this.cellEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-day, .fc-disabled-day');
        if (this.isRtl) {
            this.cellEls.reverse();
        }
        this.rowPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.rowEls, false, true // vertical
        );
        this.colPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.cellEls.slice(0, colCnt), // only the first row
        true, false // horizontal
        );
        // trigger dayRender with each cell's element
        for (row = 0; row < rowCnt; row++) {
            for (col = 0; col < colCnt; col++) {
                this.publiclyTrigger('dayRender', [
                    {
                        date: dateEnv.toDate(cells[row][col].date),
                        el: this.getCellEl(row, col),
                        view: view
                    }
                ]);
            }
        }
        this.isCellSizesDirty = true;
    };
    DayGrid.prototype._unrenderCells = function () {
        this.removeSegPopover();
    };
    // Generates the HTML for a single row, which is a div that wraps a table.
    // `row` is the row number.
    DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
        var theme = this.theme;
        var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
        if (isRigid) {
            classes.push('fc-rigid');
        }
        var bgRow = new DayBgRow(this.context);
        return '' +
            '<div class="' + classes.join(' ') + '">' +
            '<div class="fc-bg">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            bgRow.renderHtml({
                cells: this.props.cells[row],
                dateProfile: this.props.dateProfile,
                renderIntroHtml: this.renderProps.renderBgIntroHtml
            }) +
            '</table>' +
            '</div>' +
            '<div class="fc-content-skeleton">' +
            '<table>' +
            (this.getIsNumbersVisible() ?
                '<thead>' +
                    this.renderNumberTrHtml(row) +
                    '</thead>' :
                '') +
            '</table>' +
            '</div>' +
            '</div>';
    };
    DayGrid.prototype.getIsNumbersVisible = function () {
        return this.getIsDayNumbersVisible() ||
            this.renderProps.cellWeekNumbersVisible ||
            this.renderProps.colWeekNumbersVisible;
    };
    DayGrid.prototype.getIsDayNumbersVisible = function () {
        return this.rowCnt > 1;
    };
    /* Grid Number Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.renderNumberTrHtml = function (row) {
        var intro = this.renderProps.renderNumberIntroHtml(row, this);
        return '' +
            '<tr>' +
            (this.isRtl ? '' : intro) +
            this.renderNumberCellsHtml(row) +
            (this.isRtl ? intro : '') +
            '</tr>';
    };
    DayGrid.prototype.renderNumberCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.props.cells[row][col].date;
            htmls.push(this.renderNumberCellHtml(date));
        }
        if (this.isRtl) {
            htmls.reverse();
        }
        return htmls.join('');
    };
    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
    // The number row will only exist if either day numbers or week numbers are turned on.
    DayGrid.prototype.renderNumberCellHtml = function (date) {
        var _a = this, view = _a.view, dateEnv = _a.dateEnv;
        var html = '';
        var isDateValid = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsMarker"])(this.props.dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        var classes;
        var weekCalcFirstDow;
        if (!isDayNumberVisible && !this.renderProps.cellWeekNumbersVisible) {
            // no numbers in day cell (week number must be along the side)
            return '<td></td>'; //  will create an empty space above events :(
        }
        classes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getDayClasses"])(date, this.props.dateProfile, this.context);
        classes.unshift('fc-day-top');
        if (this.renderProps.cellWeekNumbersVisible) {
            weekCalcFirstDow = dateEnv.weekDow;
        }
        html += '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                '') +
            '>';
        if (this.renderProps.cellWeekNumbersVisible && (date.getUTCDay() === weekCalcFirstDow)) {
            html += Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(view, { date: date, type: 'week' }, { 'class': 'fc-week-number' }, dateEnv.format(date, WEEK_NUM_FORMAT) // inner HTML
            );
        }
        if (isDayNumberVisible) {
            html += Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(view, date, { 'class': 'fc-day-number' }, dateEnv.format(date, DAY_NUM_FORMAT) // inner HTML
            );
        }
        html += '</td>';
        return html;
    };
    /* Sizing
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.updateSize = function (isResize) {
        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
        if (isResize ||
            this.isCellSizesDirty ||
            this.view.calendar.isEventsUpdated // hack
        ) {
            this.buildPositionCaches();
            this.isCellSizesDirty = false;
        }
        fillRenderer.computeSizes(isResize);
        eventRenderer.computeSizes(isResize);
        mirrorRenderer.computeSizes(isResize);
        fillRenderer.assignSizes(isResize);
        eventRenderer.assignSizes(isResize);
        mirrorRenderer.assignSizes(isResize);
    };
    DayGrid.prototype.buildPositionCaches = function () {
        this.buildColPositions();
        this.buildRowPositions();
    };
    DayGrid.prototype.buildColPositions = function () {
        this.colPositions.build();
    };
    DayGrid.prototype.buildRowPositions = function () {
        this.rowPositions.build();
        this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
    };
    /* Hit System
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.positionToHit = function (leftPosition, topPosition) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(leftPosition);
        var row = rowPositions.topToIndex(topPosition);
        if (row != null && col != null) {
            return {
                row: row,
                col: col,
                dateSpan: {
                    range: this.getCellRange(row, col),
                    allDay: true
                },
                dayEl: this.getCellEl(row, col),
                relativeRect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row]
                }
            };
        }
    };
    /* Cell System
    ------------------------------------------------------------------------------------------------------------------*/
    // FYI: the first column is the leftmost column, regardless of date
    DayGrid.prototype.getCellEl = function (row, col) {
        return this.cellEls[row * this.colCnt + col];
    };
    /* Event Drag Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', state.segs);
        }
    };
    DayGrid.prototype._unrenderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight');
        }
    };
    /* Event Resize Visualization
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype._renderEventResize = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', state.segs);
            this.mirrorRenderer.renderSegs(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    DayGrid.prototype._unrenderEventResize = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight');
            this.mirrorRenderer.unrender(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    /* More+ Link Popover
    ------------------------------------------------------------------------------------------------------------------*/
    DayGrid.prototype.removeSegPopover = function () {
        if (this.segPopover) {
            this.segPopover.hide(); // in handler, will call segPopover's removeElement
        }
    };
    // Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
    // `levelLimit` can be false (don't limit), a number, or true (should be computed).
    DayGrid.prototype.limitRows = function (levelLimit) {
        var rowStructs = this.eventRenderer.rowStructs || [];
        var row; // row #
        var rowLevelLimit;
        for (row = 0; row < rowStructs.length; row++) {
            this.unlimitRow(row);
            if (!levelLimit) {
                rowLevelLimit = false;
            }
            else if (typeof levelLimit === 'number') {
                rowLevelLimit = levelLimit;
            }
            else {
                rowLevelLimit = this.computeRowLevelLimit(row);
            }
            if (rowLevelLimit !== false) {
                this.limitRow(row, rowLevelLimit);
            }
        }
    };
    // Computes the number of levels a row will accomodate without going outside its bounds.
    // Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
    // `row` is the row number.
    DayGrid.prototype.computeRowLevelLimit = function (row) {
        var rowEl = this.rowEls[row]; // the containing "fake" row div
        var rowBottom = rowEl.getBoundingClientRect().bottom; // relative to viewport!
        var trEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findChildren"])(this.eventRenderer.rowStructs[row].tbodyEl);
        var i;
        var trEl;
        // Reveal one level <tr> at a time and stop when we find one out of bounds
        for (i = 0; i < trEls.length; i++) {
            trEl = trEls[i];
            trEl.classList.remove('fc-limited'); // reset to original state (reveal)
            if (trEl.getBoundingClientRect().bottom > rowBottom) {
                return i;
            }
        }
        return false; // should not limit at all
    };
    // Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
    // `row` is the row number.
    // `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
    DayGrid.prototype.limitRow = function (row, levelLimit) {
        var _this = this;
        var _a = this, colCnt = _a.colCnt, isRtl = _a.isRtl;
        var rowStruct = this.eventRenderer.rowStructs[row];
        var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
        var col = 0; // col #, left-to-right (not chronologically)
        var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
        var cellMatrix; // a matrix (by level, then column) of all <td> elements in the row
        var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
        var i;
        var seg;
        var segsBelow; // array of segment objects below `seg` in the current `col`
        var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
        var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
        var td;
        var rowSpan;
        var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
        var j;
        var moreTd;
        var moreWrap;
        var moreLink;
        // Iterates through empty level cells and places "more" links inside if need be
        var emptyCellsUntil = function (endCol) {
            while (col < endCol) {
                segsBelow = _this.getCellSegs(row, col, levelLimit);
                if (segsBelow.length) {
                    td = cellMatrix[levelLimit - 1][col];
                    moreLink = _this.renderMoreLink(row, col, segsBelow);
                    moreWrap = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, moreLink);
                    td.appendChild(moreWrap);
                    moreNodes.push(moreWrap);
                }
                col++;
            }
        };
        if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
            levelSegs = rowStruct.segLevels[levelLimit - 1];
            cellMatrix = rowStruct.cellMatrix;
            limitedNodes = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findChildren"])(rowStruct.tbodyEl).slice(levelLimit); // get level <tr> elements past the limit
            limitedNodes.forEach(function (node) {
                node.classList.add('fc-limited'); // hide elements and get a simple DOM-nodes array
            });
            // iterate though segments in the last allowable level
            for (i = 0; i < levelSegs.length; i++) {
                seg = levelSegs[i];
                var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                emptyCellsUntil(leftCol); // process empty cells before the segment
                // determine *all* segments below `seg` that occupy the same columns
                colSegsBelow = [];
                totalSegsBelow = 0;
                while (col <= rightCol) {
                    segsBelow = this.getCellSegs(row, col, levelLimit);
                    colSegsBelow.push(segsBelow);
                    totalSegsBelow += segsBelow.length;
                    col++;
                }
                if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
                    td = cellMatrix[levelLimit - 1][leftCol]; // the segment's parent cell
                    rowSpan = td.rowSpan || 1;
                    segMoreNodes = [];
                    // make a replacement <td> for each column the segment occupies. will be one for each colspan
                    for (j = 0; j < colSegsBelow.length; j++) {
                        moreTd = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('td', { className: 'fc-more-cell', rowSpan: rowSpan });
                        segsBelow = colSegsBelow[j];
                        moreLink = this.renderMoreLink(row, leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
                        );
                        moreWrap = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', null, moreLink);
                        moreTd.appendChild(moreWrap);
                        segMoreNodes.push(moreTd);
                        moreNodes.push(moreTd);
                    }
                    td.classList.add('fc-limited');
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["insertAfterElement"])(td, segMoreNodes);
                    limitedNodes.push(td);
                }
            }
            emptyCellsUntil(this.colCnt); // finish off the level
            rowStruct.moreEls = moreNodes; // for easy undoing later
            rowStruct.limitedEls = limitedNodes; // for easy undoing later
        }
    };
    // Reveals all levels and removes all "more"-related elements for a grid's row.
    // `row` is a row number.
    DayGrid.prototype.unlimitRow = function (row) {
        var rowStruct = this.eventRenderer.rowStructs[row];
        if (rowStruct.moreEls) {
            rowStruct.moreEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"]);
            rowStruct.moreEls = null;
        }
        if (rowStruct.limitedEls) {
            rowStruct.limitedEls.forEach(function (limitedEl) {
                limitedEl.classList.remove('fc-limited');
            });
            rowStruct.limitedEls = null;
        }
    };
    // Renders an <a> element that represents hidden event element for a cell.
    // Responsible for attaching click handler as well.
    DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
        var _this = this;
        var _a = this, view = _a.view, dateEnv = _a.dateEnv;
        var a = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', { className: 'fc-more' });
        a.innerText = this.getMoreLinkText(hiddenSegs.length);
        a.addEventListener('click', function (ev) {
            var clickOption = _this.opt('eventLimitClick');
            var _col = _this.isRtl ? _this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
            var date = _this.props.cells[row][_col].date;
            var moreEl = ev.currentTarget;
            var dayEl = _this.getCellEl(row, col);
            var allSegs = _this.getCellSegs(row, col);
            // rescope the segments to be within the cell's date
            var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
            var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
            if (typeof clickOption === 'function') {
                // the returned value can be an atomic option
                clickOption = _this.publiclyTrigger('eventLimitClick', [
                    {
                        date: dateEnv.toDate(date),
                        allDay: true,
                        dayEl: dayEl,
                        moreEl: moreEl,
                        segs: reslicedAllSegs,
                        hiddenSegs: reslicedHiddenSegs,
                        jsEvent: ev,
                        view: view
                    }
                ]);
            }
            if (clickOption === 'popover') {
                _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
            }
            else if (typeof clickOption === 'string') { // a view name
                view.calendar.zoomTo(date, clickOption);
            }
        });
        return a;
    };
    // Reveals the popover that displays all events within a cell
    DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
        var _this = this;
        var _a = this, calendar = _a.calendar, view = _a.view, theme = _a.theme;
        var _col = this.isRtl ? this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
        var moreWrap = moreLink.parentNode; // the <div> wrapper around the <a>
        var topEl; // the element we want to match the top coordinate of
        var options;
        if (this.rowCnt === 1) {
            topEl = view.el; // will cause the popover to cover any sort of header
        }
        else {
            topEl = this.rowEls[row]; // will align with top of row
        }
        options = {
            className: 'fc-more-popover ' + theme.getClass('popover'),
            parentEl: view.el,
            top: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(topEl).top,
            autoHide: true,
            content: function (el) {
                _this.segPopoverTile = new DayTile(_this.context, el);
                _this.updateSegPopoverTile(_this.props.cells[row][_col].date, segs);
            },
            hide: function () {
                _this.segPopoverTile.destroy();
                _this.segPopoverTile = null;
                _this.segPopover.destroy();
                _this.segPopover = null;
            }
        };
        // Determine horizontal coordinate.
        // We use the moreWrap instead of the <td> to avoid border confusion.
        if (this.isRtl) {
            options.right = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(moreWrap).right + 1; // +1 to be over cell border
        }
        else {
            options.left = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(moreWrap).left - 1; // -1 to be over cell border
        }
        this.segPopover = new Popover(options);
        this.segPopover.show();
        calendar.releaseAfterSizingTriggers(); // hack for eventPositioned
    };
    // Given the events within an array of segment objects, reslice them to be in a single day
    DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
        var dayStart = dayDate;
        var dayEnd = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dayStart, 1);
        var dayRange = { start: dayStart, end: dayEnd };
        var newSegs = [];
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            var eventRange = seg.eventRange;
            var origRange = eventRange.range;
            var slicedRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(origRange, dayRange);
            if (slicedRange) {
                newSegs.push(__assign({}, seg, { eventRange: {
                        def: eventRange.def,
                        ui: __assign({}, eventRange.ui, { durationEditable: false }),
                        instance: eventRange.instance,
                        range: slicedRange
                    }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() }));
            }
        }
        return newSegs;
    };
    // Generates the text that should be inside a "more" link, given the number of events it represents
    DayGrid.prototype.getMoreLinkText = function (num) {
        var opt = this.opt('eventLimitText');
        if (typeof opt === 'function') {
            return opt(num);
        }
        else {
            return '+' + num + ' ' + opt;
        }
    };
    // Returns segments within a given cell.
    // If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
    DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
        var level = startLevel || 0;
        var segs = [];
        var seg;
        while (level < segMatrix.length) {
            seg = segMatrix[level][col];
            if (seg) {
                segs.push(seg);
            }
            level++;
        }
        return segs;
    };
    return DayGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));

var WEEK_NUM_FORMAT$1 = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({ week: 'numeric' });
/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var DayGridView = /** @class */ (function (_super) {
    __extends(DayGridView, _super);
    function DayGridView(context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
        /* Header Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before the day-of week header cells
        _this.renderHeadIntroHtml = function () {
            var theme = _this.theme;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<th class="fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.weekNumberStyleAttr() + '>' +
                    '<span>' + // needed for matchCellWidths
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(_this.opt('weekLabel')) +
                    '</span>' +
                    '</th>';
            }
            return '';
        };
        /* Day Grid Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
        _this.renderDayGridNumberIntroHtml = function (row, dayGrid) {
            var dateEnv = _this.dateEnv;
            var weekStart = dayGrid.props.cells[row][0].date;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '>' +
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(// aside from link, important for matchCellWidths
                    _this, { date: weekStart, type: 'week', forceOff: dayGrid.colCnt === 1 }, dateEnv.format(weekStart, WEEK_NUM_FORMAT$1) // inner HTML
                    ) +
                    '</td>';
            }
            return '';
        };
        // Generates the HTML that goes before the day bg cells for each day-row
        _this.renderDayGridBgIntroHtml = function () {
            var theme = _this.theme;
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number ' + theme.getClass('widgetContent') + '" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        // Generates the HTML that goes before every other type of row generated by DayGrid.
        // Affects mirror-skeleton and highlight-skeleton rows.
        _this.renderDayGridIntroHtml = function () {
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        _this.el.classList.add('fc-dayGrid-view');
        _this.el.innerHTML = _this.renderSkeletonHtml();
        _this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
        'auto' // overflow y
        );
        var dayGridContainerEl = _this.scroller.el;
        _this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl);
        dayGridContainerEl.classList.add('fc-day-grid-container');
        var dayGridEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'fc-day-grid' });
        dayGridContainerEl.appendChild(dayGridEl);
        var cellWeekNumbersVisible;
        if (_this.opt('weekNumbers')) {
            if (_this.opt('weekNumbersWithinDays')) {
                cellWeekNumbersVisible = true;
                _this.colWeekNumbersVisible = false;
            }
            else {
                cellWeekNumbersVisible = false;
                _this.colWeekNumbersVisible = true;
            }
        }
        else {
            _this.colWeekNumbersVisible = false;
            cellWeekNumbersVisible = false;
        }
        _this.dayGrid = new DayGrid(_this.context, dayGridEl, {
            renderNumberIntroHtml: _this.renderDayGridNumberIntroHtml,
            renderBgIntroHtml: _this.renderDayGridBgIntroHtml,
            renderIntroHtml: _this.renderDayGridIntroHtml,
            colWeekNumbersVisible: _this.colWeekNumbersVisible,
            cellWeekNumbersVisible: cellWeekNumbersVisible
        });
        return _this;
    }
    DayGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.dayGrid.destroy();
        this.scroller.destroy();
    };
    // Builds the HTML skeleton for the view.
    // The day-grid component will render inside of a container defined by this HTML.
    DayGridView.prototype.renderSkeletonHtml = function () {
        var theme = this.theme;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (this.opt('columnHeader') ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    // Generates an HTML attribute string for setting the width of the week number column, if it is known
    DayGridView.prototype.weekNumberStyleAttr = function () {
        if (this.weekNumberWidth != null) {
            return 'style="width:' + this.weekNumberWidth + 'px"';
        }
        return '';
    };
    // Determines whether each row should have a constant height
    DayGridView.prototype.hasRigidRows = function () {
        var eventLimit = this.opt('eventLimit');
        return eventLimit && typeof eventLimit !== 'number';
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    DayGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
        this.dayGrid.updateSize(isResize);
    };
    // Refreshes the horizontal dimensions of the view
    DayGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        var dayGrid = this.dayGrid;
        var eventLimit = this.opt('eventLimit');
        var headRowEl = this.header ? this.header.el : null; // HACK
        var scrollerHeight;
        var scrollbarWidths;
        // hack to give the view some height prior to dayGrid's columns being rendered
        // TODO: separate setting height from scroller VS dayGrid.
        if (!dayGrid.rowEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        if (this.colWeekNumbersVisible) {
            // Make sure all week number cells running down the side have the same width.
            this.weekNumberWidth = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["matchCellWidths"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-week-number'));
        }
        // reset all heights to be natural
        this.scroller.clear();
        if (headRowEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["uncompensateScroll"])(headRowEl);
        }
        dayGrid.removeSegPopover(); // kill the "more" popover if displayed
        // is the event limit a constant level number?
        if (eventLimit && typeof eventLimit === 'number') {
            dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
        }
        // distribute the height to the rows
        // (viewHeight is a "recommended" value if isAuto)
        scrollerHeight = this.computeScrollerHeight(viewHeight);
        this.setGridHeight(scrollerHeight, isAuto);
        // is the event limit dynamically calculated?
        if (eventLimit && typeof eventLimit !== 'number') {
            dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
        }
        if (!isAuto) { // should we force dimensions of the scroll container?
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                if (headRowEl) {
                    Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compensateScroll"])(headRowEl, scrollbarWidths);
                }
                // doing the scrollbar compensation might have created text overflow which created more height. redo
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            // guarantees the same scrollbar widths
            this.scroller.lockOverflow(scrollbarWidths);
        }
    };
    // given a desired total height of the view, returns what the height of the scroller should be
    DayGridView.prototype.computeScrollerHeight = function (viewHeight) {
        return viewHeight -
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
    };
    // Sets the height of just the DayGrid component in this view
    DayGridView.prototype.setGridHeight = function (height, isAuto) {
        if (this.opt('monthMode')) {
            // if auto, make the height of each row the height that it would be if there were 6 weeks
            if (isAuto) {
                height *= this.dayGrid.rowCnt / 6;
            }
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["distributeHeight"])(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
        }
        else {
            if (isAuto) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["undistributeHeight"])(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
            }
            else {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["distributeHeight"])(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
            }
        }
    };
    /* Scroll
    ------------------------------------------------------------------------------------------------------------------*/
    DayGridView.prototype.computeDateScroll = function (duration) {
        return { top: 0 };
    };
    DayGridView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    DayGridView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    return DayGridView;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]));
DayGridView.prototype.dateProfileGeneratorClass = DayGridDateProfileGenerator;

var SimpleDayGrid = /** @class */ (function (_super) {
    __extends(SimpleDayGrid, _super);
    function SimpleDayGrid(context, dayGrid) {
        var _this = _super.call(this, context, dayGrid.el) || this;
        _this.slicer = new DayGridSlicer();
        _this.dayGrid = dayGrid;
        context.calendar.registerInteractiveComponent(_this, { el: _this.dayGrid.el });
        return _this;
    }
    SimpleDayGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.calendar.unregisterInteractiveComponent(this);
    };
    SimpleDayGrid.prototype.render = function (props) {
        var dayGrid = this.dayGrid;
        var dateProfile = props.dateProfile, dayTable = props.dayTable;
        dayGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, props.nextDayThreshold, dayGrid, dayTable), { dateProfile: dateProfile, cells: dayTable.cells, isRigid: props.isRigid }));
    };
    SimpleDayGrid.prototype.buildPositionCaches = function () {
        this.dayGrid.buildPositionCaches();
    };
    SimpleDayGrid.prototype.queryHit = function (positionLeft, positionTop) {
        var rawHit = this.dayGrid.positionToHit(positionLeft, positionTop);
        if (rawHit) {
            return {
                component: this.dayGrid,
                dateSpan: rawHit.dateSpan,
                dayEl: rawHit.dayEl,
                rect: {
                    left: rawHit.relativeRect.left,
                    right: rawHit.relativeRect.right,
                    top: rawHit.relativeRect.top,
                    bottom: rawHit.relativeRect.bottom
                },
                layer: 0
            };
        }
    };
    return SimpleDayGrid;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]));
var DayGridSlicer = /** @class */ (function (_super) {
    __extends(DayGridSlicer, _super);
    function DayGridSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayGridSlicer.prototype.sliceRange = function (dateRange, dayTable) {
        return dayTable.sliceRange(dateRange);
    };
    return DayGridSlicer;
}(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Slicer"]));

var DayGridView$1 = /** @class */ (function (_super) {
    __extends(DayGridView, _super);
    function DayGridView(_context, viewSpec, dateProfileGenerator, parentEl) {
        var _this = _super.call(this, _context, viewSpec, dateProfileGenerator, parentEl) || this;
        _this.buildDayTable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayTable);
        if (_this.opt('columnHeader')) {
            _this.header = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayHeader"](_this.context, _this.el.querySelector('.fc-head-container'));
        }
        _this.simpleDayGrid = new SimpleDayGrid(_this.context, _this.dayGrid);
        return _this;
    }
    DayGridView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.header) {
            this.header.destroy();
        }
        this.simpleDayGrid.destroy();
    };
    DayGridView.prototype.render = function (props) {
        _super.prototype.render.call(this, props);
        var dateProfile = this.props.dateProfile;
        var dayTable = this.dayTable =
            this.buildDayTable(dateProfile, this.dateProfileGenerator);
        if (this.header) {
            this.header.receiveProps({
                dateProfile: dateProfile,
                dates: dayTable.headerDates,
                datesRepDistinctDays: dayTable.rowCnt === 1,
                renderIntroHtml: this.renderHeadIntroHtml
            });
        }
        this.simpleDayGrid.receiveProps({
            dateProfile: dateProfile,
            dayTable: dayTable,
            businessHours: props.businessHours,
            dateSelection: props.dateSelection,
            eventStore: props.eventStore,
            eventUiBases: props.eventUiBases,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize,
            isRigid: this.hasRigidRows(),
            nextDayThreshold: this.nextDayThreshold
        });
    };
    return DayGridView;
}(DayGridView));
function buildDayTable(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DaySeries"](dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayTable"](daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
    defaultView: 'dayGridMonth',
    views: {
        dayGrid: DayGridView$1,
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 }
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 }
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            monthMode: true,
            fixedWeekCount: true
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = (main);



/***/ }),

/***/ "./node_modules/@fullcalendar/vue/main.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/vue/main.esm.js ***!
  \****************************************************/
/*! exports provided: default, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/*
FullCalendar Vue Component v4.3.1
Docs: https://fullcalendar.io/docs/vue
License: MIT
*/



function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/*
Really simple clone utility. Only copies plain arrays, objects, and Dates. Transfers everything else as-is.
Wanted to use a third-party lib, but none did exactly this.
*/

function deepCopy(input) {
  if (Array.isArray(input)) {
    return input.map(deepCopy);
  } else if (input instanceof Date) {
    return new Date(input.valueOf());
  } else if (_typeof(input) === 'object' && input) {
    // non-null object
    return mapHash(input, deepCopy);
  } else {
    // everything else (null, function, etc)
    return input;
  }
}
function mapHash(input, func) {
  var output = {};

  for (var key in input) {
    if (hasOwnProperty.call(input, key)) {
      output[key] = func(input[key], key);
    }
  }

  return output;
}

/*
the docs point to this file as an index of options.
when this files is moved, update the docs.
*/

/*
TODO: figure out booleans so attributes can be defined like:
<FullCalendar editable />
*/
var PROP_DEFS = {
  header: {},
  footer: {},
  customButtons: {},
  buttonIcons: {},
  themeSystem: {},
  bootstrapFontAwesome: {},
  firstDay: {},
  dir: {},
  weekends: {},
  hiddenDays: {},
  fixedWeekCount: {},
  weekNumbers: {},
  weekNumbersWithinDays: {},
  weekNumberCalculation: {},
  businessHours: {},
  showNonCurrentDates: {},
  height: {},
  contentHeight: {},
  aspectRatio: {},
  handleWindowResize: {},
  windowResizeDelay: {},
  eventLimit: {},
  eventLimitClick: {},
  timeZone: {},
  now: {},
  defaultView: {},
  allDaySlot: {},
  allDayText: {},
  slotDuration: {},
  slotLabelFormat: {},
  slotLabelInterval: {},
  snapDuration: {},
  scrollTime: {},
  minTime: {},
  maxTime: {},
  slotEventOverlap: {},
  listDayFormat: {},
  listDayAltFormat: {},
  noEventsMessage: {},
  defaultDate: {},
  nowIndicator: {},
  visibleRange: {},
  validRange: {},
  dateIncrement: {},
  dateAlignment: {},
  duration: {},
  dayCount: {},
  locales: {},
  locale: {},
  eventTimeFormat: {},
  columnHeader: {},
  columnHeaderFormat: {},
  columnHeaderText: {},
  columnHeaderHtml: {},
  titleFormat: {},
  weekLabel: {},
  displayEventTime: {},
  displayEventEnd: {},
  eventLimitText: {},
  dayPopoverFormat: {},
  navLinks: {},
  navLinkDayClick: {},
  navLinkWeekClick: {},
  selectable: {},
  selectMirror: {},
  unselectAuto: {},
  unselectCancel: {},
  defaultAllDayEventDuration: {},
  defaultTimedEventDuration: {},
  cmdFormatter: {},
  defaultRangeSeparator: {},
  selectConstraint: {},
  selectOverlap: {},
  selectAllow: {},
  editable: {},
  eventStartEditable: {},
  eventDurationEditable: {},
  eventConstraint: {},
  eventOverlap: {},
  eventAllow: {},
  eventClassName: {},
  eventClassNames: {},
  eventBackgroundColor: {},
  eventBorderColor: {},
  eventTextColor: {},
  eventColor: {},
  events: {},
  eventSources: {},
  allDayDefault: {},
  startParam: {},
  endParam: {},
  lazyFetching: {},
  nextDayThreshold: {},
  eventOrder: {},
  rerenderDelay: {},
  dragRevertDuration: {},
  dragScroll: {},
  longPressDelay: {},
  eventLongPressDelay: {},
  droppable: {},
  dropAccept: {},
  eventDataTransform: {},
  allDayMaintainDuration: {},
  eventResizableFromStart: {},
  timeGridEventMinHeight: {},
  allDayHtml: {},
  eventDragMinDistance: {},
  eventResourceEditable: {},
  eventSourceFailure: {},
  eventSourceSuccess: {},
  forceEventDuration: {},
  progressiveEventRendering: {},
  selectLongPressDelay: {},
  selectMinDistance: {},
  timeZoneParam: {},
  titleRangeSeparator: {},
  // compound OptionsInput...
  buttonText: {},
  views: {},
  plugins: {},
  // scheduler...
  schedulerLicenseKey: {},
  resources: {},
  resourceLabelText: {},
  resourceOrder: {},
  filterResourcesWithEvents: {},
  resourceText: {},
  resourceGroupField: {},
  resourceGroupText: {},
  resourceAreaWidth: {},
  resourceColumns: {},
  resourcesInitiallyExpanded: {},
  slotWidth: {},
  datesAboveResources: {},
  googleCalendarApiKey: {},
  refetchResourcesOnNavigate: {},
  // used to be emissions but are now props...
  datesRender: {},
  datesDestroy: {},
  dayRender: {},
  eventRender: {},
  eventDestroy: {},
  viewSkeletonRender: {},
  viewSkeletonDestroy: {},
  resourceRender: {}
};
var PROP_IS_DEEP = {
  header: true,
  footer: true,
  events: true,
  eventSources: true,
  resources: true
};
var EMISSION_NAMES = ['windowResize', 'dateClick', 'eventClick', 'eventMouseEnter', 'eventMouseLeave', 'select', 'unselect', 'loading', 'eventPositioned', '_eventsPositioned', 'eventDragStart', 'eventDragStop', 'eventDrop', 'eventResizeStart', 'eventResizeStop', 'eventResize', 'drop', 'eventReceive', 'eventLeave', '_destroyed', // should now be props... (TODO: eventually remove)
'datesRender', 'datesDestroy', 'dayRender', 'eventRender', 'eventDestroy', 'viewSkeletonRender', 'viewSkeletonDestroy', 'resourceRender']; // identify deprecated emissions (TODO: eventually remove)

var EMISSION_USE_PROP = {
  datesRender: true,
  datesDestroy: true,
  dayRender: true,
  eventRender: true,
  eventDestroy: true,
  viewSkeletonRender: true,
  viewSkeletonDestroy: true,
  resourceRender: true
};

/*
VOCAB:
"props" are the values passed in from the parent (they are NOT listeners/emissions)
"emissions" are another way to say "events that will fire"
"options" are the options that the FullCalendar API accepts

NOTE: "deep" props are complex objects that we want to watch for internal changes.
Vue allows a reference to be internally mutated. Each time we detect a mutation,
we use deepCopy to freeze the state. This has the added benefit of stripping the
getter/setter methods that Vue embeds.
*/

var FullCalendarComponent = {
  props: PROP_DEFS,
  // INTERNALS
  // this.$options.calendar
  // this.$options.deepCopies - all current deep options
  // this.$options.dirtyOptions - null/undefined means nothing dirty
  data: function data() {
    return {
      renderId: 0,
      deepCopies: {}
    };
  },
  render: function render(createElement) {
    return createElement('div', {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: {
        'data-fc-render-id': this.renderId
      }
    });
  },
  mounted: function mounted() {
    warnDeprecatedListeners(this.$listeners);
    this.$options.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__["Calendar"](this.$el, this.buildCalendarOptions());
    this.$options.calendar.render();
  },
  beforeUpdate: function beforeUpdate() {
    this.renderDirty();
  },
  beforeDestroy: function beforeDestroy() {
    this.$options.calendar.destroy();
  },
  watch: mapHash(PROP_DEFS, buildPropWatcher),
  methods: {
    buildCalendarOptions: function buildCalendarOptions() {
      var _this = this;

      var options = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var emissionName = _step.value;

          options[emissionName] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this.$emit.apply(_this, [emissionName].concat(args));
          };
        };

        for (var _iterator = EMISSION_NAMES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        } // do after emissions. these props will override emissions with same name

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var propName in PROP_DEFS) {
        var propVal = this[propName]; // protect against FullCalendar choking on undefined options

        if (propVal !== undefined) {
          if (PROP_IS_DEEP[propName]) {
            propVal = deepCopy(propVal); // freeze state

            this.deepCopies[propName] = propVal; // side effect!
          }

          options[propName] = propVal;
        }
      }

      return options;
    },
    recordDirtyOption: function recordDirtyOption(optionName, newVal) {
      (this.$options.dirtyOptions || (this.$options.dirtyOptions = {}))[optionName] = newVal;
      this.renderId++; // triggers a render eventually
    },
    renderDirty: function renderDirty() {
      var dirtyOptions = this.$options.dirtyOptions;

      if (dirtyOptions) {
        this.$options.dirtyOptions = null; // clear before rendering. might trigger new dirtiness

        this.$options.calendar.mutateOptions(dirtyOptions, [], false, fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a);
      }
    },
    getApi: function getApi() {
      return this.$options.calendar;
    }
  }
};

function buildPropWatcher(propDef, propName) {
  if (PROP_IS_DEEP[propName]) {
    return {
      deep: true,
      // listen to children as well
      handler: function handler(newVal) {
        // use this instead of the handler's param because if same reference, will always be equal
        var oldVal = this.deepCopies[propName];

        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(newVal, oldVal)) {
          newVal = deepCopy(newVal); // freeze state

          this.deepCopies[propName] = newVal; // always keep this up to date

          this.recordDirtyOption(propName, newVal);
        }
      }
    };
  } else {
    return function (newVal) {
      this.recordDirtyOption(propName, newVal);
    };
  }
}

function warnDeprecatedListeners(listenerHash) {
  for (var emissionName in listenerHash) {
    if (EMISSION_USE_PROP[emissionName]) {
      console.warn('Use of ' + emissionName + ' as an event is deprecated. Please convert to a prop.');
    }
  }
}

/*
Registers the component globally if appropriate.
This modules exposes the component AND an install function.

Derived from:
https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
*/

var installed = false; // declare install function executed by Vue.use()

function install(Vue) {
  if (!installed) {
    installed = true;
    Vue.component('FullCalendar', FullCalendarComponent);
  }
} // detect a globally availble version of Vue (eg. in browser via <script> tag)

var GlobalVue;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
} // auto-install if possible


if (GlobalVue) {
  GlobalVue.use({
    install: install
  });
} // to allow use as module (npm/webpack/etc.) export component

/* harmony default export */ __webpack_exports__["default"] = (FullCalendarComponent);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@fullcalendar/core/main.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@fullcalendar/core/main.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.fc {\n  direction: ltr;\n  text-align: left;\n}\n\n.fc-rtl {\n  text-align: right;\n}\n\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em;\n}\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: 0.3;\n}\n\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: 0.3;\n}\n\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7;\n}\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 4px;\n}\n\n.fc-rtl .fc-popover .fc-header {\n  flex-direction: row-reverse;\n}\n\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px;\n}\n\n.fc-popover .fc-header .fc-close {\n  cursor: pointer;\n  opacity: 0.65;\n  font-size: 1.1em;\n}\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px;\n}\n\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0;\n}\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */\n}\n\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */\n}\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */\n}\n\n.fc th {\n  text-align: center;\n}\n\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top;\n}\n\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */\n}\n\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer;\n}\n\na[data-goto]:hover {\n  text-decoration: underline;\n}\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0;\n}\n\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\n     the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent;\n}\n\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */\n}\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative;\n}\n\n.fc-row .fc-bg {\n  z-index: 1;\n}\n\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */\n}\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent;\n}\n\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2;\n}\n\n.fc-row .fc-highlight-skeleton {\n  z-index: 3;\n}\n\n/*\nrow content (which contains day/week numbers and events) as well as \"mirror\" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */\n}\n\n.fc-row .fc-mirror-skeleton {\n  z-index: 5;\n}\n\n.fc .fc-row .fc-content-skeleton table,\n.fc .fc-row .fc-content-skeleton td,\n.fc .fc-row .fc-mirror-skeleton td {\n  /* see-through to the background below */\n  /* extra precedence to prevent theme-provided backgrounds */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n}\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-mirror-skeleton td {\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0;\n}\n\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-mirror-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0;\n}\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch;\n}\n\n/* TODO: move to timegrid/daygrid */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: 0.85em;\n  line-height: 1.4;\n  border-radius: 3px;\n  border: 1px solid #3788d8;\n}\n\n.fc-event,\n.fc-event-dot {\n  background-color: #3788d8;\n  /* default BACKGROUND color */\n}\n\n.fc-event,\n.fc-event:hover {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */\n}\n\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */\n}\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed;\n}\n\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2;\n}\n\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4;\n}\n\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none;\n}\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block;\n}\n\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.fc-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: 0.25;\n}\n\n/* Event Dragging\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-dragging.fc-selected {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n\n.fc-event.fc-dragging:not(.fc-selected) {\n  opacity: 0.75;\n}\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n}\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */\n}\n\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */\n}\n\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px;\n}\n\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */\n}\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px;\n}\n\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */\n}\n\n.fc-mirror-skeleton tr:first-child > td > .fc-day-grid-event {\n  margin-top: 0;\n  /* except for mirror skeleton */\n}\n\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.fc-day-grid-event .fc-time {\n  font-weight: bold;\n}\n\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */\n}\n\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */\n}\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: 0.85em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\na.fc-more:hover {\n  text-decoration: underline;\n}\n\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none;\n}\n\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */\n}\n\n.fc-more-popover {\n  z-index: 2;\n  width: 220px;\n}\n\n.fc-more-popover .fc-event-container {\n  padding: 10px;\n}\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red;\n}\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/*\nTODO: more distinction between this file and common.css\n*/\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd;\n}\n\n.fc-unthemed .fc-popover {\n  background-color: #fff;\n}\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee;\n}\n\n.fc-unthemed td.fc-today {\n  background: #fcf8e3;\n}\n\n.fc-unthemed .fc-disabled-day {\n  background: #d7d7d7;\n  opacity: 0.3;\n}\n\n/* Icons\n--------------------------------------------------------------------------------------------------\nfrom https://feathericons.com/ and built with IcoMoon\n*/\n@font-face {\n  font-family: \"fcicons\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fc-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"fcicons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: \"\\E900\";\n}\n\n.fc-icon-chevron-right:before {\n  content: \"\\E901\";\n}\n\n.fc-icon-chevrons-left:before {\n  content: \"\\E902\";\n}\n\n.fc-icon-chevrons-right:before {\n  content: \"\\E903\";\n}\n\n.fc-icon-minus-square:before {\n  content: \"\\E904\";\n}\n\n.fc-icon-plus-square:before {\n  content: \"\\E905\";\n}\n\n.fc-icon-x:before {\n  content: \"\\E906\";\n}\n\n.fc-icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n}\n\n/* Buttons\n--------------------------------------------------------------------------------------------------\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n*/\n/* reset */\n.fc-button {\n  border-radius: 0;\n  overflow: visible;\n  text-transform: none;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.fc-button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n.fc-button {\n  -webkit-appearance: button;\n}\n\n.fc-button:not(:disabled) {\n  cursor: pointer;\n}\n\n.fc-button::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n/* theme */\n.fc-button {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.4em 0.65em;\n  font-size: 1em;\n  line-height: 1.5;\n  border-radius: 0.25em;\n}\n\n.fc-button:hover {\n  color: #212529;\n  text-decoration: none;\n}\n\n.fc-button:focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n}\n\n.fc-button:disabled {\n  opacity: 0.65;\n}\n\n/* \"primary\" coloring */\n.fc-button-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n\n.fc-button-primary:hover {\n  color: #fff;\n  background-color: #1e2b37;\n  border-color: #1a252f;\n}\n\n.fc-button-primary:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n\n.fc-button-primary:disabled {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n\n.fc-button-primary:not(:disabled):active,\n.fc-button-primary:not(:disabled).fc-button-active {\n  color: #fff;\n  background-color: #1a252f;\n  border-color: #151e27;\n}\n\n.fc-button-primary:not(:disabled):active:focus,\n.fc-button-primary:not(:disabled).fc-button-active:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n\n/* icons within buttons */\n.fc-button .fc-icon {\n  vertical-align: middle;\n  font-size: 1.5em;\n}\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.fc-button-group > .fc-button {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n.fc-button-group > .fc-button:hover {\n  z-index: 1;\n}\n\n.fc-button-group > .fc-button:focus,\n.fc-button-group > .fc-button:active,\n.fc-button-group > .fc-button.fc-button-active {\n  z-index: 1;\n}\n\n.fc-button-group > .fc-button:not(:first-child) {\n  margin-left: -1px;\n}\n\n.fc-button-group > .fc-button:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.fc-button-group > .fc-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid;\n}\n\n/* List View\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-list-item:hover td {\n  background-color: #f5f5f5;\n}\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.fc-toolbar.fc-header-toolbar {\n  margin-bottom: 1.5em;\n}\n\n.fc-toolbar.fc-footer-toolbar {\n  margin-top: 1.5em;\n}\n\n/* inner content */\n.fc-toolbar > * > :not(:first-child) {\n  margin-left: 0.75em;\n}\n\n.fc-toolbar h2 {\n  font-size: 1.75em;\n  margin: 0;\n}\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-view-container {\n  position: relative;\n}\n\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1;\n}\n\n@media print {\n  .fc {\n    max-width: 100% !important;\n  }\n\n  /* Global Event Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc-event {\n    background: #fff !important;\n    color: #000 !important;\n    page-break-inside: avoid;\n  }\n\n  .fc-event .fc-resizer {\n    display: none;\n  }\n\n  /* Table & Day-Row Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc th,\n.fc td,\n.fc hr,\n.fc thead,\n.fc tbody,\n.fc-row {\n    border-color: #ccc !important;\n    background: #fff !important;\n  }\n\n  /* kill the overlaid, absolutely-positioned components */\n  /* common... */\n  .fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton,\n.fc-bgevent-container,\n.fc-business-container,\n.fc-highlight-container,\n.fc-mirror-container {\n    display: none;\n  }\n\n  /* don't force a min-height on rows (for DayGrid) */\n  .fc tbody .fc-row {\n    height: auto !important;\n    /* undo height that JS set in distributeHeight */\n    min-height: 0 !important;\n    /* undo the min-height from each view's specific stylesheet */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton {\n    position: static;\n    /* undo .fc-rigid */\n    padding-bottom: 0 !important;\n    /* use a more border-friendly method for this... */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton tbody tr:last-child td {\n    /* only works in newer browsers */\n    padding-bottom: 1em;\n    /* ...gives space within the skeleton. also ensures min height in a way */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton table {\n    /* provides a min-height for the row, but only effective for IE, which exaggerates this value,\n       making it look more like 3em. for other browers, it will already be this tall */\n    height: 1em;\n  }\n\n  /* Undo month-view event limiting. Display all events and hide the \"more\" links\n  --------------------------------------------------------------------------------------------------*/\n  .fc-more-cell,\n.fc-more {\n    display: none !important;\n  }\n\n  .fc tr.fc-limited {\n    display: table-row !important;\n  }\n\n  .fc td.fc-limited {\n    display: table-cell !important;\n  }\n\n  .fc-popover {\n    display: none;\n    /* never display the \"more..\" popover in print mode */\n  }\n\n  /* TimeGrid Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* undo the min-height 100% trick used to fill the container's height */\n  .fc-time-grid {\n    min-height: 0 !important;\n  }\n\n  /* don't display the side axis at all (\"all-day\" and time cells) */\n  .fc-timeGrid-view .fc-axis {\n    display: none;\n  }\n\n  /* don't display the horizontal lines */\n  .fc-slats,\n.fc-time-grid hr {\n    /* this hr is used when height is underused and needs to be filled */\n    display: none !important;\n    /* important overrides inline declaration */\n  }\n\n  /* let the container that holds the events be naturally positioned and create real height */\n  .fc-time-grid .fc-content-skeleton {\n    position: static;\n  }\n\n  /* in case there are no events, we still want some height */\n  .fc-time-grid .fc-content-skeleton table {\n    height: 4em;\n  }\n\n  /* kill the horizontal spacing made by the event container. event margins will be done below */\n  .fc-time-grid .fc-event-container {\n    margin: 0 !important;\n  }\n\n  /* TimeGrid *Event* Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* naturally position events, vertically stacking them */\n  .fc-time-grid .fc-event {\n    position: static !important;\n    margin: 3px 2px !important;\n  }\n\n  /* for events that continue to a future day, give the bottom border back */\n  .fc-time-grid .fc-event.fc-not-end {\n    border-bottom-width: 1px !important;\n  }\n\n  /* indicate the event continues via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-end:after {\n    content: \"...\";\n  }\n\n  /* for events that are continuations from previous days, give the top border back */\n  .fc-time-grid .fc-event.fc-not-start {\n    border-top-width: 1px !important;\n  }\n\n  /* indicate the event is a continuation via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-start:before {\n    content: \"...\";\n  }\n\n  /* time */\n  /* undo a previous declaration and let the time text span to a second line */\n  .fc-time-grid .fc-event .fc-time {\n    white-space: normal !important;\n  }\n\n  /* hide the the time that is normally displayed... */\n  .fc-time-grid .fc-event .fc-time span {\n    display: none;\n  }\n\n  /* ...replace it with a more verbose version (includes AM/PM) stored in an html attribute */\n  .fc-time-grid .fc-event .fc-time:after {\n    content: attr(data-full);\n  }\n\n  /* Vertical Scroller & Containers\n  --------------------------------------------------------------------------------------------------*/\n  /* kill the scrollbars and allow natural height */\n  .fc-scroller,\n.fc-day-grid-container,\n.fc-time-grid-container {\n    /* */\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  /* kill the horizontal border/padding used to compensate for scrollbars */\n  .fc-row {\n    border: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* Button Controls\n  --------------------------------------------------------------------------------------------------*/\n  .fc-button-group,\n.fc button {\n    display: none;\n    /* don't display any button-related controls */\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@fullcalendar/daygrid/main.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@fullcalendar/daygrid/main.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DayGridView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-dayGridWeek-view .fc-content-skeleton,\n.fc-dayGridDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */\n}\n\n.fc-dayGrid-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */\n}\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden;\n}\n\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3;\n}\n\n.fc-dayGrid-view .fc-week-number,\n.fc-dayGrid-view .fc-day-number {\n  padding: 2px;\n}\n\n.fc-dayGrid-view th.fc-week-number,\n.fc-dayGrid-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can't have as much v space */\n}\n\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: right;\n}\n\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: left;\n}\n\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0;\n}\n\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px;\n}\n\n.fc-dayGrid-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080;\n}\n\n/* when week/day number have own column */\n.fc-dayGrid-view td.fc-week-number {\n  text-align: center;\n}\n\n.fc-dayGrid-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/*! exports provided: default, ErrorBag, Rules, ValidationObserver, ValidationProvider, Validator, directive, install, mapFields, mixin, version, withValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBag", function() { return ErrorBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rules", function() { return Rules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationObserver", function() { return ValidationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationProvider", function() { return ValidationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFields", function() { return mapFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withValidation", function() { return withValidation; });
/**
  * vee-validate v2.2.15
  * (c) 2019 Abdelrahman Awad
  * @license MIT
  */
// 

var isTextInput = function (el) {
  return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'textarea', 'number'], el.type);
};

var isCheckboxOrRadioInput = function (el) {
  return includes(['radio', 'checkbox'], el.type);
};

var isDateInput = function (el) {
  return includes(['date', 'week', 'month', 'datetime-local', 'time'], el.type);
};

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };

var isNaN$1 = function (value) {
  if ('isNaN' in Number) {
    return Number.isNaN(value);
  }

  // eslint-disable-next-line
  return typeof(value) === 'number' && value !== value;
};

/**
 * Checks if the values are either null or undefined.
 */
var isNullOrUndefined = function () {
  var values = [], len = arguments.length;
  while ( len-- ) values[ len ] = arguments[ len ];

  return values.every(function (value) {
    return value === null || value === undefined;
  });
};

/**
 * Creates the default flags object.
 */
var createFlags = function () { return ({
  untouched: true,
  touched: false,
  dirty: false,
  pristine: true,
  valid: null,
  invalid: null,
  validated: false,
  pending: false,
  required: false,
  changed: false
}); };

/**
 * Shallow object comparison.
 */
var isEqual = function (lhs, rhs) {
  if (lhs instanceof RegExp && rhs instanceof RegExp) {
    return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
  }

  if (Array.isArray(lhs) && Array.isArray(rhs)) {
    if (lhs.length !== rhs.length) { return false; }

    for (var i = 0; i < lhs.length; i++) {
      if (!isEqual(lhs[i], rhs[i])) {
        return false;
      }
    }

    return true;
  }

  // if both are objects, compare each key recursively.
  if (isObject(lhs) && isObject(rhs)) {
    return Object.keys(lhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    }) && Object.keys(rhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    });
  }

  if (isNaN$1(lhs) && isNaN$1(rhs)) {
    return true;
  }

  return lhs === rhs;
};

/**
 * Determines the input field scope.
 */
var getScope = function (el) {
  var scope = getDataAttribute(el, 'scope');
  if (isNullOrUndefined(scope)) {
    var form = getForm(el);

    if (form) {
      scope = getDataAttribute(form, 'scope');
    }
  }

  return !isNullOrUndefined(scope) ? scope : null;
};

/**
 * Get the closest form element.
 */
var getForm = function (el) {
  if (isNullOrUndefined(el)) { return null; }

  if (el.tagName === 'FORM') { return el; }

  if (!isNullOrUndefined(el.form)) { return el.form; }

  return !isNullOrUndefined(el.parentNode) ? getForm(el.parentNode) : null;
};

/**
 * Gets the value in an object safely.
 */
var getPath = function (path, target, def) {
  if ( def === void 0 ) def = undefined;

  if (!path || !target) { return def; }

  var value = target;
  path.split('.').every(function (prop) {
    if (prop in value) {
      value = value[prop];

      return true;
    }

    value = def;

    return false;
  });

  return value;
};

/**
 * Checks if path exists within an object.
 */
var hasPath = function (path, target) {
  var obj = target;
  var previousPath = null;
  var isNullOrNonObject = false;
  var isValidPath = path.split('.').reduce(function (reducer, prop) {
    if (obj == null || typeof obj !== 'object') {
      isNullOrNonObject = true;
      return reducer && false;
    }

    if (prop in obj) {
      obj = obj[prop];
      previousPath = previousPath === null ? prop : previousPath + '.' + prop;

      return reducer && true;
    }

    return reducer && false;
  }, true);

  if (true) {
    if (isNullOrNonObject) {
      throw new Error(previousPath + ' is not an object');
    }
  }

  return isValidPath;
};

/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (includes(rule, ':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params };
};

/**
 * Debounces a function.
 */
var debounce = function (fn, wait, token) {
  if ( wait === void 0 ) wait = 0;
  if ( token === void 0 ) token = { cancelled: false };

  if (wait === 0) {
    return fn;
  }

  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var later = function () {
      timeout = null;

      // check if the fn call was cancelled.
      if (!token.cancelled) { fn.apply(void 0, args); }
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout) { fn.apply(void 0, args); }
  };
};

/**
 * Appends a rule definition to a list of rules.
 */
var appendRule = function (rule, rules) {
  if (!rules) {
    return normalizeRules(rule);
  }

  if (!rule) {
    return normalizeRules(rules);
  }

  if (typeof rules === 'string') {
    rules = normalizeRules(rules);
  }

  return assign({}, rules, normalizeRules(rule));
};

/**
 * Normalizes the given rules expression.
 */
var normalizeRules = function (rules) {
  // if falsy value return an empty object.
  if (!rules) {
    return {};
  }

  if (isObject(rules)) {
    // $FlowFixMe
    return Object.keys(rules).reduce(function (prev, curr) {
      var params = [];
      // $FlowFixMe
      if (rules[curr] === true) {
        params = [];
      } else if (Array.isArray(rules[curr])) {
        params = rules[curr];
      } else if (isObject(rules[curr])) {
        params = rules[curr];
      } else {
        params = [rules[curr]];
      }

      // $FlowFixMe
      if (rules[curr] !== false) {
        prev[curr] = params;
      }

      return prev;
    }, {});
  }

  if (typeof rules !== 'string') {
    warn('rules must be either a string or an object.');
    return {};
  }

  return rules.split('|').reduce(function (prev, rule) {
    var parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }

    prev[parsedRule.name] = parsedRule.params;
    return prev;
  }, {});
};

/**
 * Emits a warning to the console.
 */
var warn = function (message) {
  console.warn(("[vee-validate] " + message)); // eslint-disable-line
};

/**
 * Creates a branded error object.
 */
var createError = function (message) { return new Error(("[vee-validate] " + message)); };

/**
 * Checks if the value is an object.
 */
var isObject = function (obj) { return obj !== null && obj && typeof obj === 'object' && ! Array.isArray(obj); };

/**
 * Checks if a function is callable.
 */
var isCallable = function (func) { return typeof func === 'function'; };

/**
 * Check if element has the css class on it.
 */
var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)")));
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function (el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function (el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }

  if (hasClass(el, className)) {
    var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Adds or removes a class name on the input depending on the status flag.
 */
var toggleClass = function (el, className, status) {
  if (!el || !className) { return; }

  if (Array.isArray(className)) {
    className.forEach(function (item) { return toggleClass(el, item, status); });
    return;
  }

  if (status) {
    return addClass(el, className);
  }

  removeClass(el, className);
};

/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
var toArray = function (arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }

  var array = [];
  var length = arrayLike.length;
  /* istanbul ignore next */
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  /* istanbul ignore next */
  return array;
};

/**
 * Converts an array-like object to array and place other elements in an array
 */
var ensureArray = function (arrayLike) {
  if (Array.isArray(arrayLike)) {
    return [].concat( arrayLike );
  }
  var array = toArray(arrayLike);
  return isEmptyArray(array) ? [arrayLike] : array;
};

/**
 * Assign polyfill from the mdn.
 */
var assign = function (target) {
  var others = [], len = arguments.length - 1;
  while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [ target ].concat( others ));
  }

  /* istanbul ignore next */
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  /* istanbul ignore next */
  var to = Object(target);
  /* istanbul ignore next */
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });
  /* istanbul ignore next */
  return to;
};

var id = 0;
var idTemplate = '{id}';

/**
 * Generates a unique id.
 */
var uniqId = function () {
  // handle too many uses of uniqId, although unlikely.
  if (id >= 9999) {
    id = 0;
    // shift the template.
    idTemplate = idTemplate.replace('{id}', '_{id}');
  }

  id++;
  var newId = idTemplate.replace('{id}', String(id));

  return newId;
};

var findIndex = function (arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
};

/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
var find = function (arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  var idx = findIndex(array, predicate);

  return idx === -1 ? undefined : array[idx];
};

var isBuiltInComponent = function (vnode) {
  if (!vnode) {
    return false;
  }

  var tag = vnode.componentOptions.tag;

  return /^(keep-alive|transition|transition-group)$/.test(tag);
};

var makeDelayObject = function (events, delay, delayConfig) {
  if (typeof delay === 'number') {
    return events.reduce(function (prev, e) {
      prev[e] = delay;
      return prev;
    }, {});
  }

  return events.reduce(function (prev, e) {
    if (typeof delay === 'object' && e in delay) {
      prev[e] = delay[e];
      return prev;
    }

    if (typeof delayConfig === 'number') {
      prev[e] = delayConfig;
      return prev;
    }

    prev[e] = (delayConfig && delayConfig[e]) || 0;

    return prev;
  }, {});
};

var deepParseInt = function (input) {
  if (typeof input === 'number') { return input; }

  if (typeof input === 'string') { return parseInt(input); }

  var map = {};
  for (var element in input) {
    map[element] = parseInt(input[element]);
  }

  return map;
};

var merge = function (target, source) {
  if (! (isObject(target) && isObject(source))) {
    return target;
  }

  Object.keys(source).forEach(function (key) {
    var obj, obj$1;

    if (isObject(source[key])) {
      if (! target[key]) {
        assign(target, ( obj = {}, obj[key] = {}, obj ));
      }

      merge(target[key], source[key]);
      return;
    }

    assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
  });

  return target;
};

var fillRulesFromElement = function (el, rules) {
  if (el.required) {
    rules = appendRule('required', rules);
  }

  if (isTextInput(el)) {
    if (el.type === 'email') {
      rules = appendRule(("email" + (el.multiple ? ':multiple' : '')), rules);
    }

    if (el.pattern) {
      rules = appendRule({ regex: el.pattern }, rules);
    }

    // 524288 is the max on some browsers and test environments.
    if (el.maxLength >= 0 && el.maxLength < 524288) {
      rules = appendRule(("max:" + (el.maxLength)), rules);
    }

    if (el.minLength > 0) {
      rules = appendRule(("min:" + (el.minLength)), rules);
    }

    if (el.type === 'number') {
      rules = appendRule('decimal', rules);
      if (el.min !== '') {
        rules = appendRule(("min_value:" + (el.min)), rules);
      }

      if (el.max !== '') {
        rules = appendRule(("max_value:" + (el.max)), rules);
      }
    }

    return rules;
  }

  if (isDateInput(el)) {
    var timeFormat = el.step && Number(el.step) < 60 ? 'HH:mm:ss' : 'HH:mm';

    if (el.type === 'date') {
      return appendRule('date_format:yyyy-MM-dd', rules);
    }

    if (el.type === 'datetime-local') {
      return appendRule(("date_format:yyyy-MM-ddT" + timeFormat), rules);
    }

    if (el.type === 'month') {
      return appendRule('date_format:yyyy-MM', rules);
    }

    if (el.type === 'week') {
      return appendRule('date_format:yyyy-[W]WW', rules);
    }

    if (el.type === 'time') {
      return appendRule(("date_format:" + timeFormat), rules);
    }
  }

  return rules;
};

var values = function (obj) {
  if (isCallable(Object.values)) {
    return Object.values(obj);
  }

  // fallback to keys()
  /* istanbul ignore next */
  return Object.keys(obj).map(function (k) { return obj[k]; });
};

var parseSelector = function (selector) {
  var rule = null;
  if (includes(selector, ':')) {
    rule = selector.split(':').pop();
    selector = selector.replace((":" + rule), '');
  }

  if (selector[0] === '#') {
    return {
      id: selector.slice(1),
      rule: rule,
      name: null,
      scope: null
    };
  }

  var scope = null;
  var name = selector;
  if (includes(selector, '.')) {
    var parts = selector.split('.');
    scope = parts[0];
    name = parts.slice(1).join('.');
  }

  return {
    id: null,
    scope: scope,
    name: name,
    rule: rule
  };
};

var includes = function (collection, item) {
  return collection.indexOf(item) !== -1;
};

var isEmptyArray = function (arr) {
  return Array.isArray(arr) && arr.length === 0;
};

var defineNonReactive = function (obj, prop, value) {
  Object.defineProperty(obj, prop, {
    configurable: false,
    writable: true,
    value: value
  });
};

// 

var LOCALE = 'en';

var Dictionary = function Dictionary (dictionary) {
  if ( dictionary === void 0 ) dictionary = {};

  this.container = {};
  this.merge(dictionary);
};

var prototypeAccessors = { locale: { configurable: true } };

prototypeAccessors.locale.get = function () {
  return LOCALE;
};

prototypeAccessors.locale.set = function (value) {
  LOCALE = value || 'en';
};

Dictionary.prototype.hasLocale = function hasLocale (locale) {
  return !!this.container[locale];
};

Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
  if (!this.container[locale]) {
    this.container[locale] = {};
  }

  this.container[locale].dateFormat = format;
};

Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
  if (!this.container[locale] || !this.container[locale].dateFormat) {
    return null;
  }

  return this.container[locale].dateFormat;
};

Dictionary.prototype.getMessage = function getMessage (locale, key, data) {
  var message = null;
  if (!this.hasMessage(locale, key)) {
    message = this._getDefaultMessage(locale);
  } else {
    message = this.container[locale].messages[key];
  }

  return isCallable(message) ? message.apply(void 0, data) : message;
};

/**
 * Gets a specific message for field. falls back to the rule message.
 */
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key, data) {
  if (!this.hasLocale(locale)) {
    return this.getMessage(locale, key, data);
  }

  var dict = this.container[locale].custom && this.container[locale].custom[field];
  if (!dict || !dict[key]) {
    return this.getMessage(locale, key, data);
  }

  var message = dict[key];
  return isCallable(message) ? message.apply(void 0, data) : message;
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.container[locale].messages._default;
  }

  return this.container.en.messages._default;
};

Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  if (!this.hasAttribute(locale, key)) {
    return fallback;
  }

  return this.container[locale].attributes[key];
};

Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].messages &&
          this.container[locale].messages[key]
  );
};

Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].attributes &&
          this.container[locale].attributes[key]
  );
};

Dictionary.prototype.merge = function merge$1 (dictionary) {
  merge(this.container, dictionary);
};

Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }
    
  if (!this.container[locale].messages) {
    this.container[locale].messages = {};
  }

  this.container[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].attributes[key] = attribute;
};

Object.defineProperties( Dictionary.prototype, prototypeAccessors );

var drivers = {
  default: new Dictionary({
    en: {
      messages: {},
      attributes: {},
      custom: {}
    }
  })
};

var currentDriver = 'default';

var DictionaryResolver = function DictionaryResolver () {};

DictionaryResolver._checkDriverName = function _checkDriverName (driver) {
  if (!driver) {
    throw createError('you must provide a name to the dictionary driver');
  }
};

DictionaryResolver.setDriver = function setDriver (driver, implementation) {
    if ( implementation === void 0 ) implementation = null;

  this._checkDriverName(driver);
  if (implementation) {
    drivers[driver] = implementation;
  }

  currentDriver = driver;
};

DictionaryResolver.getDriver = function getDriver () {
  return drivers[currentDriver];
};

// 

var ErrorBag = function ErrorBag (errorBag, id) {
  if ( errorBag === void 0 ) errorBag = null;
  if ( id === void 0 ) id = null;

  this.vmId = id || null;
  // make this bag a mirror of the provided one, sharing the same items reference.
  if (errorBag && errorBag instanceof ErrorBag) {
    this.items = errorBag.items;
  } else {
    this.items = [];
  }
};

ErrorBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
    var this$1 = this;

  var index = 0;
  return {
    next: function () {
      return { value: this$1.items[index++], done: index > this$1.items.length };
    }
  };
};

/**
 * Adds an error to the internal array.
 */
ErrorBag.prototype.add = function add (error) {
    var ref;

  (ref = this.items).push.apply(
    ref, this._normalizeError(error)
  );
};

/**
 * Normalizes passed errors to an error array.
 */
ErrorBag.prototype._normalizeError = function _normalizeError (error) {
    var this$1 = this;

  if (Array.isArray(error)) {
    return error.map(function (e) {
      e.scope = !isNullOrUndefined(e.scope) ? e.scope : null;
      e.vmId = !isNullOrUndefined(e.vmId) ? e.vmId : (this$1.vmId || null);

      return e;
    });
  }

  error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
  error.vmId = !isNullOrUndefined(error.vmId) ? error.vmId : (this.vmId || null);

  return [error];
};

/**
 * Regenrates error messages if they have a generator function.
 */
ErrorBag.prototype.regenerate = function regenerate () {
  this.items.forEach(function (i) {
    i.msg = isCallable(i.regenerate) ? i.regenerate() : i.msg;
  });
};

/**
 * Updates a field error with the new field scope.
 */
ErrorBag.prototype.update = function update (id, error) {
  var item = find(this.items, function (i) { return i.id === id; });
  if (!item) {
    return;
  }

  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};

/**
 * Gets all error messages from the internal array.
 */
ErrorBag.prototype.all = function all (scope) {
    var this$1 = this;

  var filterFn = function (item) {
    var matchesScope = true;
    var matchesVM = true;
    if (!isNullOrUndefined(scope)) {
      matchesScope = item.scope === scope;
    }

    if (!isNullOrUndefined(this$1.vmId)) {
      matchesVM = item.vmId === this$1.vmId;
    }

    return matchesVM && matchesScope;
  };

  return this.items.filter(filterFn).map(function (e) { return e.msg; });
};

/**
 * Checks if there are any errors in the internal array.
 */
ErrorBag.prototype.any = function any (scope) {
    var this$1 = this;

  var filterFn = function (item) {
    var matchesScope = true;
    var matchesVM = true;
    if (!isNullOrUndefined(scope)) {
      matchesScope = item.scope === scope;
    }

    if (!isNullOrUndefined(this$1.vmId)) {
      matchesVM = item.vmId === this$1.vmId;
    }

    return matchesVM && matchesScope;
  };

  return !!this.items.filter(filterFn).length;
};

/**
 * Removes all items from the internal array.
 */
ErrorBag.prototype.clear = function clear (scope) {
    var this$1 = this;

  var matchesVM = isNullOrUndefined(this.vmId) ? function () { return true; } : function (i) { return i.vmId === this$1.vmId; };
  var matchesScope = function (i) { return i.scope === scope; };
  if (arguments.length === 0) {
    matchesScope = function () { return true; };
  } else if (isNullOrUndefined(scope)) {
    scope = null;
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (matchesVM(this.items[i]) && matchesScope(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Collects errors into groups or for a specific field.
 */
ErrorBag.prototype.collect = function collect (field, scope, map) {
    var this$1 = this;
    if ( map === void 0 ) map = true;

  var isSingleField = !isNullOrUndefined(field) && !field.includes('*');
  var groupErrors = function (items) {
    var errors = items.reduce(function (collection, error) {
      if (!isNullOrUndefined(this$1.vmId) && error.vmId !== this$1.vmId) {
        return collection;
      }

      if (!collection[error.field]) {
        collection[error.field] = [];
      }

      collection[error.field].push(map ? error.msg : error);

      return collection;
    }, {});

    // reduce the collection to be a single array.
    if (isSingleField) {
      return values(errors)[0] || [];
    }

    return errors;
  };

  if (isNullOrUndefined(field)) {
    return groupErrors(this.items);
  }

  var selector = isNullOrUndefined(scope) ? String(field) : (scope + "." + field);
  var ref = this._makeCandidateFilters(selector);
    var isPrimary = ref.isPrimary;
    var isAlt = ref.isAlt;

  var collected = this.items.reduce(function (prev, curr) {
    if (isPrimary(curr)) {
      prev.primary.push(curr);
    }

    if (isAlt(curr)) {
      prev.alt.push(curr);
    }

    return prev;
  }, { primary: [], alt: [] });

  collected = collected.primary.length ? collected.primary : collected.alt;

  return groupErrors(collected);
};

/**
 * Gets the internal array length.
 */
ErrorBag.prototype.count = function count () {
    var this$1 = this;

  if (this.vmId) {
    return this.items.filter(function (e) { return e.vmId === this$1.vmId; }).length;
  }

  return this.items.length;
};

/**
 * Finds and fetches the first error message for the specified field id.
 */
ErrorBag.prototype.firstById = function firstById (id) {
  var error = find(this.items, function (i) { return i.id === id; });

  return error ? error.msg : undefined;
};

/**
 * Gets the first error message for a specific field.
 */
ErrorBag.prototype.first = function first (field, scope) {
    if ( scope === void 0 ) scope = null;

  var selector = isNullOrUndefined(scope) ? field : (scope + "." + field);
  var match = this._match(selector);

  return match && match.msg;
};

/**
 * Returns the first error rule for the specified field
 */
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
  var errors = this.collect(field, scope, false);

  return (errors.length && errors[0].rule) || undefined;
};

/**
 * Checks if the internal array has at least one error for the specified field.
 */
ErrorBag.prototype.has = function has (field, scope) {
    if ( scope === void 0 ) scope = null;

  return !!this.first(field, scope);
};

/**
 * Gets the first error message for a specific field and a rule.
 */
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];

  return (error && error.msg) || undefined;
};

/**
 * Gets the first error message for a specific field that not match the rule.
 */
ErrorBag.prototype.firstNot = function firstNot (name, rule, scope) {
    if ( rule === void 0 ) rule = 'required';
    if ( scope === void 0 ) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule !== rule; })[0];

  return (error && error.msg) || undefined;
};

/**
 * Removes errors by matching against the id or ids.
 */
ErrorBag.prototype.removeById = function removeById (id) {
  var condition = function (item) { return item.id === id; };
  if (Array.isArray(id)) {
    condition = function (item) { return id.indexOf(item.id) !== -1; };
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (condition(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Removes all error messages associated with a specific field.
 */
ErrorBag.prototype.remove = function remove (field, scope, vmId) {
  if (isNullOrUndefined(field)) {
    return;
  }

  var selector = isNullOrUndefined(scope) ? String(field) : (scope + "." + field);
  var ref = this._makeCandidateFilters(selector);
    var isPrimary = ref.isPrimary;
    var isAlt = ref.isAlt;
  var matches = function (item) { return isPrimary(item) || isAlt(item); };
  var shouldRemove = function (item) {
    if (isNullOrUndefined(vmId)) { return matches(item); }

    return matches(item) && item.vmId === vmId;
  };

  for (var i = 0; i < this.items.length; ++i) {
    if (shouldRemove(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};

ErrorBag.prototype._makeCandidateFilters = function _makeCandidateFilters (selector) {
    var this$1 = this;

  var matchesRule = function () { return true; };
  var matchesScope = function () { return true; };
  var matchesName = function () { return true; };
  var matchesVM = function () { return true; };

  var ref = parseSelector(selector);
    var id = ref.id;
    var rule = ref.rule;
    var scope = ref.scope;
    var name = ref.name;

  if (rule) {
    matchesRule = function (item) { return item.rule === rule; };
  }

  // match by id, can be combined with rule selection.
  if (id) {
    return {
      isPrimary: function (item) { return matchesRule(item) && (function (item) { return id === item.id; }); },
      isAlt: function () { return false; }
    };
  }

  if (isNullOrUndefined(scope)) {
    // if no scope specified, make sure the found error has no scope.
    matchesScope = function (item) { return isNullOrUndefined(item.scope); };
  } else {
    matchesScope = function (item) { return item.scope === scope; };
  }

  if (!isNullOrUndefined(name) && name !== '*') {
    matchesName = function (item) { return item.field === name; };
  }

  if (!isNullOrUndefined(this.vmId)) {
    matchesVM = function (item) { return item.vmId === this$1.vmId; };
  }

  // matches the first candidate.
  var isPrimary = function (item) {
    return matchesVM(item) && matchesName(item) && matchesRule(item) && matchesScope(item);
  };

  // matches a second candidate, which is a field with a name containing the '.' character.
  var isAlt = function (item) {
    return matchesVM(item) && matchesRule(item) && item.field === (scope + "." + name);
  };

  return {
    isPrimary: isPrimary,
    isAlt: isAlt
  };
};

ErrorBag.prototype._match = function _match (selector) {
  if (isNullOrUndefined(selector)) {
    return undefined;
  }

  var ref = this._makeCandidateFilters(selector);
    var isPrimary = ref.isPrimary;
    var isAlt = ref.isAlt;

  return this.items.reduce(function (prev, item, idx, arr) {
    var isLast = idx === arr.length - 1;
    if (prev.primary) {
      return isLast ? prev.primary : prev;
    }

    if (isPrimary(item)) {
      prev.primary = item;
    }

    if (isAlt(item)) {
      prev.alt = item;
    }

    // keep going.
    if (!isLast) {
      return prev;
    }

    return prev.primary || prev.alt;
  }, {});
};

var DEFAULT_CONFIG = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  fieldsBagName: 'fields',
  classes: false,
  classNames: null,
  events: 'input',
  inject: true,
  fastExit: true,
  aria: true,
  validity: false,
  mode: 'aggressive',
  useConstraintAttrs: true,
  i18n: null,
  i18nRootKey: 'validation'
};

var currentConfig = assign({}, DEFAULT_CONFIG);

var resolveConfig = function (ctx) {
  var selfConfig = getPath('$options.$_veeValidate', ctx, {});

  return assign({}, currentConfig, selfConfig);
};

var getConfig = function () { return currentConfig; };

var setConfig = function (newConf) {
  currentConfig = assign({}, currentConfig, newConf);
};

// VNode Utils

// Gets the model object on the vnode.
function findModel (vnode) {
  if (!vnode.data) {
    return null;
  }

  // Component Model
  if (vnode.data.model) {
    return vnode.data.model;
  }

  return !!(vnode.data.directives) && find(vnode.data.directives, function (d) { return d.name === 'model'; });
}

function extractChildren (vnode) {
  if (Array.isArray(vnode)) {
    return vnode;
  }

  if (Array.isArray(vnode.children)) {
    return vnode.children;
  }

  if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
    return vnode.componentOptions.children;
  }

  return [];
}

function extractVNodes (vnode) {
  if (findModel(vnode)) {
    return [vnode];
  }

  var children = extractChildren(vnode);

  return children.reduce(function (nodes, node) {
    var candidates = extractVNodes(node);
    if (candidates.length) {
      nodes.push.apply(nodes, candidates);
    }

    return nodes;
  }, []);
}

// Resolves v-model config if exists.
function findModelConfig (vnode) {
  if (!vnode.componentOptions) { return null; }

  return vnode.componentOptions.Ctor.options.model;
}
// Adds a listener to vnode listener object.
function mergeVNodeListeners (obj, eventName, handler) {
  // Has a single listener, convert to array.
  if (isCallable(obj[eventName])) {
    var prevHandler = obj[eventName];
    obj[eventName] = [prevHandler];
  }

  // no listeners, create the array.
  if (isNullOrUndefined(obj[eventName])) {
    obj[eventName] = [];
  }

  obj[eventName].push(handler);
}

// Adds a listener to a native HTML vnode.
function addNativeNodeListener (node, eventName, handler) {
  if (isNullOrUndefined(node.data.on)) {
    node.data.on = {};
  }

  mergeVNodeListeners(node.data.on, eventName, handler);
}

// Adds a listener to a Vue component vnode.
function addComponentNodeListener (node, eventName, handler) {
  /* istanbul ignore next */
  if (!node.componentOptions.listeners) {
    node.componentOptions.listeners = {};
  }

  mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}
function addVNodeListener (vnode, eventName, handler) {
  if (vnode.componentOptions) {
    addComponentNodeListener(vnode, eventName, handler);
    return;
  }

  addNativeNodeListener(vnode, eventName, handler);
}
// Determines if `change` should be used over `input` for listeners.
function getInputEventName (vnode, model) {
  // Is a component.
  if (vnode.componentOptions) {
    var ref = findModelConfig(vnode) || { event: 'input' };
    var event = ref.event;

    return event;
  }

  // Lazy Models and select tag typically use change event
  if ((model && model.modifiers && model.modifiers.lazy) || vnode.tag === 'select') {
    return 'change';
  }

  // is a textual-type input.
  if (vnode.data.attrs && isTextInput({ type: vnode.data.attrs.type || 'text' })) {
    return 'input';
  }

  return 'change';
}

function normalizeSlots (slots, ctx) {
  return Object.keys(slots).reduce(function (arr, key) {
    slots[key].forEach(function (vnode) {
      if (!vnode.context) {
        slots[key].context = ctx;
        if (!vnode.data) {
          vnode.data = {};
        }
        vnode.data.slot = key;
      }
    });

    return arr.concat(slots[key]);
  }, []);
}
function createRenderless (h, children) {
  // Only render the first item of the node.
  if (Array.isArray(children) && children[0]) {
    return children[0];
  }

  // a single node.
  if (children) {
    return children;
  }

  // No slots, render nothing.
  return h();
}

/**
 * Generates the options required to construct a field.
 */
var Resolver = function Resolver () {};

Resolver.generate = function generate (el, binding, vnode) {
  var model = Resolver.resolveModel(binding, vnode);
  var options = resolveConfig(vnode.context);

  return {
    name: Resolver.resolveName(el, vnode),
    el: el,
    listen: !binding.modifiers.disable,
    bails: binding.modifiers.bails ? true : (binding.modifiers.continues === true ? false : undefined),
    scope: Resolver.resolveScope(el, binding, vnode),
    vm: vnode.context,
    expression: binding.value,
    component: vnode.componentInstance,
    classes: options.classes,
    classNames: options.classNames,
    getter: Resolver.resolveGetter(el, vnode, model),
    events: Resolver.resolveEvents(el, vnode) || options.events,
    model: model,
    delay: Resolver.resolveDelay(el, vnode, options),
    rules: Resolver.resolveRules(el, binding, vnode),
    immediate: !!binding.modifiers.initial || !!binding.modifiers.immediate,
    persist: !!binding.modifiers.persist,
    validity: options.validity && !vnode.componentInstance,
    aria: options.aria && !vnode.componentInstance,
    initialValue: Resolver.resolveInitialValue(vnode)
  };
};

Resolver.getCtorConfig = function getCtorConfig (vnode) {
  if (!vnode.componentInstance) { return null; }

  var config = getPath('componentInstance.$options.$_veeValidate', vnode);

  return config;
};

/**
 * Resolves the rules defined on an element.
 */
Resolver.resolveRules = function resolveRules (el, binding, vnode) {
  var rules = '';
  if (!binding.value && (!binding || !binding.expression)) {
    rules = getDataAttribute(el, 'rules');
  }

  if (binding.value && includes(['string', 'object'], typeof binding.value.rules)) {
    rules = binding.value.rules;
  } else if (binding.value) {
    rules = binding.value;
  }

  if (vnode.componentInstance) {
    return rules;
  }

  // If validity is disabled, ignore field rules.
  var normalized = normalizeRules(rules);
  if (!getConfig().useConstraintAttrs) {
    return normalized;
  }

  return assign({}, fillRulesFromElement(el, {}), normalized);
};

/**
 * @param {*} vnode
 */
Resolver.resolveInitialValue = function resolveInitialValue (vnode) {
  var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });

  return model && model.value;
};

/**
 * Resolves the delay value.
 * @param {*} el
 * @param {*} vnode
 * @param {Object} options
 */
Resolver.resolveDelay = function resolveDelay (el, vnode, options) {
  var delay = getDataAttribute(el, 'delay');
  var globalDelay = (options && 'delay' in options) ? options.delay : 0;

  if (!delay && vnode.componentInstance && vnode.componentInstance.$attrs) {
    delay = vnode.componentInstance.$attrs['data-vv-delay'];
  }

  if (!isObject(globalDelay)) {
    return deepParseInt(delay || globalDelay);
  }

  if (!isNullOrUndefined(delay)) {
    globalDelay.input = delay;
  }

  return deepParseInt(globalDelay);
};

/**
 * Resolves the events to validate in response to.
 * @param {*} el
 * @param {*} vnode
 */
Resolver.resolveEvents = function resolveEvents (el, vnode) {
  // resolve it from the root element.
  var events = getDataAttribute(el, 'validate-on');

  // resolve from data-vv-validate-on if its a vue component.
  if (!events && vnode.componentInstance && vnode.componentInstance.$attrs) {
    events = vnode.componentInstance.$attrs['data-vv-validate-on'];
  }

  // resolve it from $_veeValidate options.
  if (!events && vnode.componentInstance) {
    var config = Resolver.getCtorConfig(vnode);
    events = config && config.events;
  }

  if (!events && getConfig().events) {
    events = getConfig().events;
  }

  // resolve the model event if its configured for custom components.
  if (events && vnode.componentInstance && includes(events, 'input')) {
    var ref = vnode.componentInstance.$options.model || { event: 'input' };
      var event = ref.event;
    // if the prop was configured but not the model.
    if (!event) {
      return events;
    }

    events = events.replace('input', event);
  }

  return events;
};

/**
 * Resolves the scope for the field.
 * @param {*} el
 * @param {*} binding
 */
Resolver.resolveScope = function resolveScope (el, binding, vnode) {
    if ( vnode === void 0 ) vnode = {};

  var scope = null;
  if (vnode.componentInstance && isNullOrUndefined(scope)) {
    scope = vnode.componentInstance.$attrs && vnode.componentInstance.$attrs['data-vv-scope'];
  }

  return !isNullOrUndefined(scope) ? scope : getScope(el);
};

/**
 * Checks if the node directives contains a v-model or a specified arg.
 * Args take priority over models.
 *
 * @return {Object}
 */
Resolver.resolveModel = function resolveModel (binding, vnode) {
  if (binding.arg) {
    return { expression: binding.arg };
  }

  var model = findModel(vnode);
  if (!model) {
    return null;
  }

  // https://github.com/vuejs/vue/blob/dev/src/core/util/lang.js#L26
  var watchable = !/[^\w.$]/.test(model.expression) && hasPath(model.expression, vnode.context);
  var lazy = !!(model.modifiers && model.modifiers.lazy);

  if (!watchable) {
    return { expression: null, lazy: lazy };
  }

  return { expression: model.expression, lazy: lazy };
};

/**
 * Resolves the field name to trigger validations.
 * @return {String} The field name.
 */
Resolver.resolveName = function resolveName (el, vnode) {
  var name = getDataAttribute(el, 'name');

  if (!name && !vnode.componentInstance) {
    return el.name;
  }

  if (!name && vnode.componentInstance && vnode.componentInstance.$attrs) {
    name = vnode.componentInstance.$attrs['data-vv-name'] || vnode.componentInstance.$attrs['name'];
  }

  if (!name && vnode.componentInstance) {
    var config = Resolver.getCtorConfig(vnode);
    if (config && isCallable(config.name)) {
      var boundGetter = config.name.bind(vnode.componentInstance);

      return boundGetter();
    }

    return vnode.componentInstance.name;
  }

  return name;
};

/**
 * Returns a value getter input type.
 */
Resolver.resolveGetter = function resolveGetter (el, vnode, model) {
  if (model && model.expression) {
    return function () {
      return getPath(model.expression, vnode.context);
    };
  }

  if (vnode.componentInstance) {
    var path = getDataAttribute(el, 'value-path') || (vnode.componentInstance.$attrs && vnode.componentInstance.$attrs['data-vv-value-path']);
    if (path) {
      return function () {
        return getPath(path, vnode.componentInstance);
      };
    }

    var config = Resolver.getCtorConfig(vnode);
    if (config && isCallable(config.value)) {
      var boundGetter = config.value.bind(vnode.componentInstance);

      return function () {
        return boundGetter();
      };
    }

    var ref = vnode.componentInstance.$options.model || { prop: 'value' };
      var prop = ref.prop;

    return function () {
      return vnode.componentInstance[prop];
    };
  }

  switch (el.type) {
  case 'checkbox': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));

    els = toArray(els).filter(function (el) { return el.checked; });
    if (!els.length) { return undefined; }

    return els.map(function (checkbox) { return checkbox.value; });
  };
  case 'radio': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
    var elm = find(els, function (el) { return el.checked; });

    return elm && elm.value;
  };
  case 'file': return function (context) {
    return toArray(el.files);
  };
  case 'select-multiple': return function () {
    return toArray(el.options).filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; });
  };
  default: return function () {
    return el && el.value;
  };
  }
};

var RULES = {};

var RuleContainer = function RuleContainer () {};

var staticAccessors = { rules: { configurable: true } };

RuleContainer.add = function add (name, ref) {
    var validate = ref.validate;
    var options = ref.options;
    var paramNames = ref.paramNames;

  RULES[name] = {
    validate: validate,
    options: options,
    paramNames: paramNames
  };
};

staticAccessors.rules.get = function () {
  return RULES;
};

RuleContainer.has = function has (name) {
  return !!RULES[name];
};

RuleContainer.isImmediate = function isImmediate (name) {
  return !!(RULES[name] && RULES[name].options.immediate);
};

RuleContainer.isRequireRule = function isRequireRule (name) {
  return !!(RULES[name] && RULES[name].options.computesRequired);
};

RuleContainer.isTargetRule = function isTargetRule (name) {
  return !!(RULES[name] && RULES[name].options.hasTarget);
};

RuleContainer.remove = function remove (ruleName) {
  delete RULES[ruleName];
};

RuleContainer.getParamNames = function getParamNames (ruleName) {
  return RULES[ruleName] && RULES[ruleName].paramNames;
};

RuleContainer.getOptions = function getOptions (ruleName) {
  return RULES[ruleName] && RULES[ruleName].options;
};

RuleContainer.getValidatorMethod = function getValidatorMethod (ruleName) {
  return RULES[ruleName] ? RULES[ruleName].validate : null;
};

Object.defineProperties( RuleContainer, staticAccessors );

// 

var isEvent = function (evt) {
  return (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) || (evt && evt.srcElement);
};

var normalizeEvents = function (evts) {
  if (!evts) { return []; }

  return (typeof evts === 'string' ? evts.split('|') : evts);
};

var supportsPassive = true;

var detectPassiveSupport = function () {
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get () {
        supportsPassive = true;
      }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {
    supportsPassive = false;
  }
  return supportsPassive;
};

var addEventListener = function (el, eventName, cb) {
  el.addEventListener(eventName, cb, supportsPassive ? { passive: true } : false);
};

// 

var DEFAULT_OPTIONS = {
  targetOf: null,
  immediate: false,
  persist: false,
  scope: null,
  listen: true,
  name: null,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: 'input|blur',
  delay: 0,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};

var Field = function Field (options) {
  if ( options === void 0 ) options = {};

  this.id = uniqId();
  this.el = options.el;
  this.updated = false;
  this.vmId = options.vmId;
  defineNonReactive(this, 'dependencies', []);
  defineNonReactive(this, 'watchers', []);
  defineNonReactive(this, 'events', []);
  this.delay = 0;
  this.rules = {};
  this.forceRequired = false;
  this._cacheId(options);
  this.classNames = assign({}, DEFAULT_OPTIONS.classNames);
  options = assign({}, DEFAULT_OPTIONS, options);
  this._delay = !isNullOrUndefined(options.delay) ? options.delay : 0; // cache initial delay
  this.validity = options.validity;
  this.aria = options.aria;
  this.flags = options.flags || createFlags();
  defineNonReactive(this, 'vm', options.vm);
  defineNonReactive(this, 'componentInstance', options.component);
  this.ctorConfig = this.componentInstance ? getPath('$options.$_veeValidate', this.componentInstance) : undefined;
  this.update(options);
  // set initial value.
  this.initialValue = this.value;
  this.updated = false;
};

var prototypeAccessors$1 = { validator: { configurable: true },isRequired: { configurable: true },isDisabled: { configurable: true },alias: { configurable: true },value: { configurable: true },bails: { configurable: true },rejectsFalse: { configurable: true } };

prototypeAccessors$1.validator.get = function () {
  if (!this.vm || !this.vm.$validator) {
    return { validate: function () { return Promise.resolve(true); } };
  }

  return this.vm.$validator;
};

prototypeAccessors$1.isRequired.get = function () {
  return !!this.rules.required || this.forceRequired;
};

prototypeAccessors$1.isDisabled.get = function () {
  return !!(this.el && this.el.disabled);
};

/**
 * Gets the display name (user-friendly name).
 */
prototypeAccessors$1.alias.get = function () {
  if (this._alias) {
    return this._alias;
  }

  var alias = null;
  if (this.ctorConfig && this.ctorConfig.alias) {
    alias = isCallable(this.ctorConfig.alias) ? this.ctorConfig.alias.call(this.componentInstance) : this.ctorConfig.alias;
  }

  if (!alias && this.el) {
    alias = getDataAttribute(this.el, 'as');
  }

  if (!alias && this.componentInstance) {
    return this.componentInstance.$attrs && this.componentInstance.$attrs['data-vv-as'];
  }

  return alias;
};

/**
 * Gets the input value.
 */

prototypeAccessors$1.value.get = function () {
  if (!isCallable(this.getter)) {
    return undefined;
  }

  return this.getter();
};

prototypeAccessors$1.bails.get = function () {
  return this._bails;
};

/**
 * If the field rejects false as a valid value for the required rule.
 */

prototypeAccessors$1.rejectsFalse.get = function () {
  if (this.componentInstance && this.ctorConfig) {
    return !!this.ctorConfig.rejectsFalse;
  }

  if (!this.el) {
    return false;
  }

  return this.el.type === 'checkbox';
};

/**
 * Determines if the instance matches the options provided.
 */
Field.prototype.matches = function matches (options) {
    var this$1 = this;

  if (!options) {
    return true;
  }

  if (options.id) {
    return this.id === options.id;
  }

  var matchesComponentId = isNullOrUndefined(options.vmId) ? function () { return true; } : function (id) { return id === this$1.vmId; };
  if (!matchesComponentId(options.vmId)) {
    return false;
  }

  if (options.name === undefined && options.scope === undefined) {
    return true;
  }

  if (options.scope === undefined) {
    return this.name === options.name;
  }

  if (options.name === undefined) {
    return this.scope === options.scope;
  }

  return options.name === this.name && options.scope === this.scope;
};

/**
 * Caches the field id.
 */
Field.prototype._cacheId = function _cacheId (options) {
  if (this.el && !options.targetOf) {
    this.el._veeValidateId = this.id;
  }
};

/**
 * Keeps a reference of the most current validation run.
 */
Field.prototype.waitFor = function waitFor (pendingPromise) {
  this._waitingFor = pendingPromise;
};

Field.prototype.isWaitingFor = function isWaitingFor (promise) {
  return this._waitingFor === promise;
};

/**
 * Updates the field with changed data.
 */
Field.prototype.update = function update (options) {
    var this$1 = this;

  this.targetOf = options.targetOf || null;
  this.immediate = options.immediate || this.immediate || false;
  this.persist = options.persist || this.persist || false;

  // update errors scope if the field scope was changed.
  if (!isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
    this.validator.update(this.id, { scope: options.scope });
  }
  this.scope = !isNullOrUndefined(options.scope) ? options.scope
    : !isNullOrUndefined(this.scope) ? this.scope : null;
  this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
  this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
  this._bails = options.bails !== undefined ? options.bails : this._bails;
  this.model = options.model || this.model;
  this.listen = options.listen !== undefined ? options.listen : this.listen;
  this.classes = (options.classes || this.classes || false) && !this.componentInstance;
  this.classNames = isObject(options.classNames) ? merge(this.classNames, options.classNames) : this.classNames;
  this.getter = isCallable(options.getter) ? options.getter : this.getter;
  this._alias = options.alias || this._alias;
  this.events = (options.events) ? normalizeEvents(options.events) : this.events;
  this.delay = makeDelayObject(this.events, options.delay || this.delay, this._delay);
  this.updateDependencies();
  this.addActionListeners();

  if ( true && !this.name && !this.targetOf) {
    warn('A field is missing a "name" or "data-vv-name" attribute');
  }

  // update required flag flags
  if (options.rules !== undefined) {
    this.flags.required = this.isRequired;
  }

  if (Object.keys(options.rules || {}).length === 0 && this.updated) {
    var resetFlag = this.flags.validated;
    this.validator.validate(("#" + (this.id))).then(function () {
      this$1.flags.validated = resetFlag;
    });
  }

  // validate if it was validated before and field was updated and there was a rules mutation.
  if (this.flags.validated && options.rules !== undefined && this.updated) {
    this.validator.validate(("#" + (this.id)));
  }

  this.updated = true;
  this.addValueListeners();

  // no need to continue.
  if (!this.el) {
    return;
  }
  this.updateClasses();
  this.updateAriaAttrs();
};

/**
 * Resets field flags and errors.
 */
Field.prototype.reset = function reset () {
    var this$1 = this;

  if (this._cancellationToken) {
    this._cancellationToken.cancelled = true;
    delete this._cancellationToken;
  }

  var defaults = createFlags();
  Object.keys(this.flags).filter(function (flag) { return flag !== 'required'; }).forEach(function (flag) {
    this$1.flags[flag] = defaults[flag];
  });

  // update initial value
  this.initialValue = this.value;
  this.flags.changed = false;

  this.addValueListeners();
  this.addActionListeners();
  this.updateClasses(true);
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Sets the flags and their negated counterparts, and updates the classes and re-adds action listeners.
 */
Field.prototype.setFlags = function setFlags (flags) {
    var this$1 = this;

  var negated = {
    pristine: 'dirty',
    dirty: 'pristine',
    valid: 'invalid',
    invalid: 'valid',
    touched: 'untouched',
    untouched: 'touched'
  };

  Object.keys(flags).forEach(function (flag) {
    this$1.flags[flag] = flags[flag];
    // if it has a negation and was not specified, set it as well.
    if (negated[flag] && flags[negated[flag]] === undefined) {
      this$1.flags[negated[flag]] = !flags[flag];
    }
  });

  if (
    flags.untouched !== undefined ||
    flags.touched !== undefined ||
    flags.dirty !== undefined ||
    flags.pristine !== undefined
  ) {
    this.addActionListeners();
  }
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Determines if the field requires references to target fields.
*/
Field.prototype.updateDependencies = function updateDependencies () {
    var this$1 = this;

  // reset dependencies.
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];

  // we get the selectors for each field.
  var fields = Object.keys(this.rules).reduce(function (prev, r) {
    if (RuleContainer.isTargetRule(r)) {
      prev.push({ selector: this$1.rules[r][0], name: r });
    }

    return prev;
  }, []);

  if (!fields.length || !this.vm || !this.vm.$el) { return; }

  // must be contained within the same component, so we use the vm root element constrain our dom search.
  fields.forEach(function (ref$1) {
      var selector = ref$1.selector;
      var name = ref$1.name;

    var ref = this$1.vm.$refs[selector];
    var el = Array.isArray(ref) ? ref[0] : ref;
    if (!el) {
      return;
    }

    var options = {
      vm: this$1.vm,
      classes: this$1.classes,
      classNames: this$1.classNames,
      delay: this$1.delay,
      scope: this$1.scope,
      events: this$1.events.join('|'),
      immediate: this$1.immediate,
      targetOf: this$1.id
    };

    // probably a component.
    if (isCallable(el.$watch)) {
      options.component = el;
      options.el = el.$el;
      options.getter = Resolver.resolveGetter(el.$el, el.$vnode);
    } else {
      options.el = el;
      options.getter = Resolver.resolveGetter(el, {});
    }

    this$1.dependencies.push({ name: name, field: new Field(options) });
  });
};

/**
 * Removes listeners.
 */
Field.prototype.unwatch = function unwatch (tag) {
    if ( tag === void 0 ) tag = null;

  if (!tag) {
    this.watchers.forEach(function (w) { return w.unwatch(); });
    this.watchers = [];
    return;
  }

  this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
  this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};

/**
 * Updates the element classes depending on each field flag status.
 */
Field.prototype.updateClasses = function updateClasses (isReset) {
    var this$1 = this;
    if ( isReset === void 0 ) isReset = false;

  if (!this.classes || this.isDisabled) { return; }
  var applyClasses = function (el) {
    toggleClass(el, this$1.classNames.dirty, this$1.flags.dirty);
    toggleClass(el, this$1.classNames.pristine, this$1.flags.pristine);
    toggleClass(el, this$1.classNames.touched, this$1.flags.touched);
    toggleClass(el, this$1.classNames.untouched, this$1.flags.untouched);

    // remove valid/invalid classes on reset.
    if (isReset) {
      toggleClass(el, this$1.classNames.valid, false);
      toggleClass(el, this$1.classNames.invalid, false);
    }

    // make sure we don't set any classes if the state is undetermined.
    if (!isNullOrUndefined(this$1.flags.valid) && this$1.flags.validated) {
      toggleClass(el, this$1.classNames.valid, this$1.flags.valid);
    }

    if (!isNullOrUndefined(this$1.flags.invalid) && this$1.flags.validated) {
      toggleClass(el, this$1.classNames.invalid, this$1.flags.invalid);
    }
  };

  if (!isCheckboxOrRadioInput(this.el)) {
    applyClasses(this.el);
    return;
  }

  var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
  toArray(els).forEach(applyClasses);
};

/**
 * Adds the listeners required for automatic classes and some flags.
 */
Field.prototype.addActionListeners = function addActionListeners () {
    var this$1 = this;

  // remove previous listeners.
  this.unwatch(/class/);

  if (!this.el) { return; }

  var onBlur = function () {
    this$1.flags.touched = true;
    this$1.flags.untouched = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.touched, true);
      toggleClass(this$1.el, this$1.classNames.untouched, false);
    }

    // only needed once.
    this$1.unwatch(/^class_blur$/);
  };

  var inputEvent = isTextInput(this.el) ? 'input' : 'change';
  var onInput = function () {
    this$1.flags.dirty = true;
    this$1.flags.pristine = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.pristine, false);
      toggleClass(this$1.el, this$1.classNames.dirty, true);
    }

    // only needed once.
    this$1.unwatch(/^class_input$/);
  };

  if (this.componentInstance && isCallable(this.componentInstance.$once)) {
    this.componentInstance.$once('input', onInput);
    this.componentInstance.$once('blur', onBlur);
    this.watchers.push({
      tag: 'class_input',
      unwatch: function () {
        this$1.componentInstance.$off('input', onInput);
      }
    });
    this.watchers.push({
      tag: 'class_blur',
      unwatch: function () {
        this$1.componentInstance.$off('blur', onBlur);
      }
    });
    return;
  }

  if (!this.el) { return; }

  addEventListener(this.el, inputEvent, onInput);
  // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
  var blurEvent = isCheckboxOrRadioInput(this.el) ? 'change' : 'blur';
  addEventListener(this.el, blurEvent, onBlur);
  this.watchers.push({
    tag: 'class_input',
    unwatch: function () {
      this$1.el.removeEventListener(inputEvent, onInput);
    }
  });

  this.watchers.push({
    tag: 'class_blur',
    unwatch: function () {
      this$1.el.removeEventListener(blurEvent, onBlur);
    }
  });
};

Field.prototype.checkValueChanged = function checkValueChanged () {
  // handle some people initialize the value to null, since text inputs have empty string value.
  if (this.initialValue === null && this.value === '' && isTextInput(this.el)) {
    return false;
  }

  return this.value !== this.initialValue;
};

/**
 * Determines the suitable primary event to listen for.
 */
Field.prototype._determineInputEvent = function _determineInputEvent () {
  // if its a custom component, use the customized model event or the input event.
  if (this.componentInstance) {
    return (this.componentInstance.$options.model && this.componentInstance.$options.model.event) || 'input';
  }

  if (this.model && this.model.lazy) {
    return 'change';
  }

  if (isTextInput(this.el)) {
    return 'input';
  }

  return 'change';
};

/**
 * Determines the list of events to listen to.
 */
Field.prototype._determineEventList = function _determineEventList (defaultInputEvent) {
    var this$1 = this;

  // if no event is configured, or it is a component or a text input then respect the user choice.
  if (!this.events.length || this.componentInstance || isTextInput(this.el)) {
    return [].concat( this.events ).map(function (evt) {
      if (evt === 'input' && this$1.model && this$1.model.lazy) {
        return 'change';
      }

      return evt;
    });
  }

  // force suitable event for non-text type fields.
  return this.events.map(function (e) {
    if (e === 'input') {
      return defaultInputEvent;
    }

    return e;
  });
};

/**
 * Adds the listeners required for validation.
 */
Field.prototype.addValueListeners = function addValueListeners () {
    var this$1 = this;

  this.unwatch(/^input_.+/);
  if (!this.listen || !this.el) { return; }

  var token = { cancelled: false };
  var fn = this.targetOf ? function () {
    var target = this$1.validator._resolveField(("#" + (this$1.targetOf)));
    if (target && target.flags.validated) {
      this$1.validator.validate(("#" + (this$1.targetOf)));
    }
  } : function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    // if its a DOM event, resolve the value, otherwise use the first parameter as the value.
    if (args.length === 0 || isEvent(args[0])) {
      args[0] = this$1.value;
    }

    this$1.flags.pending = true;
    this$1._cancellationToken = token;
    this$1.validator.validate(("#" + (this$1.id)), args[0]);
  };

  var inputEvent = this._determineInputEvent();
  var events = this._determineEventList(inputEvent);

  // if on input validation is requested.
  if (includes(events, inputEvent)) {
    var ctx = null;
    var expression = null;
    var watchCtxVm = false;
    // if its watchable from the context vm.
    if (this.model && this.model.expression) {
      ctx = this.vm;
      expression = this.model.expression;
      watchCtxVm = true;
    }

    // watch it from the custom component vm instead.
    if (!expression && this.componentInstance && this.componentInstance.$options.model) {
      ctx = this.componentInstance;
      expression = this.componentInstance.$options.model.prop || 'value';
    }

    if (ctx && expression) {
      var debouncedFn = debounce(fn, this.delay[inputEvent], token);
      var unwatch = ctx.$watch(expression, debouncedFn);
      this.watchers.push({
        tag: 'input_model',
        unwatch: function () {
          this$1.vm.$nextTick(function () {
            unwatch();
          });
        }
      });

      // filter out input event when we are watching from the context vm.
      if (watchCtxVm) {
        events = events.filter(function (e) { return e !== inputEvent; });
      }
    }
  }

  // Add events.
  events.forEach(function (e) {
    var debouncedFn = debounce(fn, this$1.delay[e], token);

    this$1._addComponentEventListener(e, debouncedFn);
    this$1._addHTMLEventListener(e, debouncedFn);
  });
};

Field.prototype._addComponentEventListener = function _addComponentEventListener (evt, validate) {
    var this$1 = this;

  if (!this.componentInstance) { return; }

  this.componentInstance.$on(evt, validate);
  this.watchers.push({
    tag: 'input_vue',
    unwatch: function () {
      this$1.componentInstance.$off(evt, validate);
    }
  });
};

Field.prototype._addHTMLEventListener = function _addHTMLEventListener (evt, validate) {
    var this$1 = this;

  if (!this.el || this.componentInstance) { return; }

  // listen for the current element.
  var addListener = function (el) {
    addEventListener(el, evt, validate);
    this$1.watchers.push({
      tag: 'input_native',
      unwatch: function () {
        el.removeEventListener(evt, validate);
      }
    });
  };

  addListener(this.el);
  if (!isCheckboxOrRadioInput(this.el)) {
    return;
  }

  var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
  toArray(els).forEach(function (el) {
    // skip if it is added by v-validate and is not the current element.
    if (el._veeValidateId && el !== this$1.el) {
      return;
    }

    addListener(el);
  });
};

/**
 * Updates aria attributes on the element.
 */
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
    var this$1 = this;

  if (!this.aria || !this.el || !isCallable(this.el.setAttribute)) { return; }

  var applyAriaAttrs = function (el) {
    el.setAttribute('aria-required', this$1.isRequired ? 'true' : 'false');
    el.setAttribute('aria-invalid', this$1.flags.invalid ? 'true' : 'false');
  };

  if (!isCheckboxOrRadioInput(this.el)) {
    applyAriaAttrs(this.el);
    return;
  }

  var els = document.querySelectorAll(("input[name=\"" + (this.el.name) + "\"]"));
  toArray(els).forEach(applyAriaAttrs);
};

/**
 * Updates the custom validity for the field.
 */
Field.prototype.updateCustomValidity = function updateCustomValidity () {
  if (!this.validity || !this.el || !isCallable(this.el.setCustomValidity) || !this.validator.errors) { return; }

  this.el.setCustomValidity(this.flags.valid ? '' : (this.validator.errors.firstById(this.id) || ''));
};

/**
 * Removes all listeners.
 */
Field.prototype.destroy = function destroy () {
  // ignore the result of any ongoing validation.
  if (this._cancellationToken) {
    this._cancellationToken.cancelled = true;
  }

  this.unwatch();
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors$1 );

// 

var FieldBag = function FieldBag (items) {
  if ( items === void 0 ) items = [];

  this.items = items || [];
  this.itemsById = this.items.reduce(function (itemsById, item) {
    itemsById[item.id] = item;
    return itemsById;
  }, {});
};

var prototypeAccessors$2 = { length: { configurable: true } };

FieldBag.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function () {
    var this$1 = this;

  var index = 0;
  return {
    next: function () {
      return { value: this$1.items[index++], done: index > this$1.items.length };
    }
  };
};

/**
 * Gets the current items length.
 */

prototypeAccessors$2.length.get = function () {
  return this.items.length;
};

/**
 * Finds the first field that matches the provided matcher object.
 */
FieldBag.prototype.find = function find$1 (matcher) {
  return find(this.items, function (item) { return item.matches(matcher); });
};

/**
 * Finds the field with the given id, using a plain object as a map to link
 * ids to items faster than by looping over the array and matching.
 */
FieldBag.prototype.findById = function findById (id) {
  return this.itemsById[id] || null;
};

/**
 * Filters the items down to the matched fields.
 */
FieldBag.prototype.filter = function filter (matcher) {
  // multiple matchers to be tried.
  if (Array.isArray(matcher)) {
    return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); });
  }

  return this.items.filter(function (item) { return item.matches(matcher); });
};

/**
 * Maps the field items using the mapping function.
 */
FieldBag.prototype.map = function map (mapper) {
  return this.items.map(mapper);
};

/**
 * Finds and removes the first field that matches the provided matcher object, returns the removed item.
 */
FieldBag.prototype.remove = function remove (matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }

  if (!item) { return null; }

  var index = this.items.indexOf(item);
  this.items.splice(index, 1);
  delete this.itemsById[item.id];

  return item;
};

/**
 * Adds a field item to the list.
 */
FieldBag.prototype.push = function push (item) {
  if (! (item instanceof Field)) {
    throw createError('FieldBag only accepts instances of Field that has an id defined.');
  }

  if (!item.id) {
    throw createError('Field id must be defined.');
  }

  if (this.findById(item.id)) {
    throw createError(("Field with id " + (item.id) + " is already added."));
  }

  this.items.push(item);
  this.itemsById[item.id] = item;
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$2 );

var ScopedValidator = function ScopedValidator (base, vm) {
  this.id = vm._uid;
  this._base = base;
  this._paused = false;

  // create a mirror bag with limited component scope.
  this.errors = new ErrorBag(base.errors, this.id);
};

var prototypeAccessors$3 = { flags: { configurable: true },rules: { configurable: true },fields: { configurable: true },dictionary: { configurable: true },locale: { configurable: true } };

prototypeAccessors$3.flags.get = function () {
    var this$1 = this;

  return this._base.fields.items.filter(function (f) { return f.vmId === this$1.id; }).reduce(function (acc, field) {
    if (field.scope) {
      if (!acc[("$" + (field.scope))]) {
        acc[("$" + (field.scope))] = {};
      }

      acc[("$" + (field.scope))][field.name] = field.flags;
    }

    acc[field.name] = field.flags;

    return acc;
  }, {});
};

prototypeAccessors$3.rules.get = function () {
  return this._base.rules;
};

prototypeAccessors$3.fields.get = function () {
  return new FieldBag(this._base.fields.filter({ vmId: this.id }));
};

prototypeAccessors$3.dictionary.get = function () {
  return this._base.dictionary;
};

prototypeAccessors$3.locale.get = function () {
  return this._base.locale;
};

prototypeAccessors$3.locale.set = function (val) {
  this._base.locale = val;
};

ScopedValidator.prototype.localize = function localize () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).localize.apply(ref, args);
};

ScopedValidator.prototype.update = function update () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).update.apply(ref, args);
};

ScopedValidator.prototype.attach = function attach (opts) {
  var attachOpts = assign({}, opts, { vmId: this.id });

  return this._base.attach(attachOpts);
};

ScopedValidator.prototype.pause = function pause () {
  this._paused = true;
};

ScopedValidator.prototype.resume = function resume () {
  this._paused = false;
};

ScopedValidator.prototype.remove = function remove (ruleName) {
  return this._base.remove(ruleName);
};

ScopedValidator.prototype.detach = function detach (name, scope) {
  return this._base.detach(name, scope, this.id);
};

ScopedValidator.prototype.extend = function extend () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).extend.apply(ref, args);
};

ScopedValidator.prototype.validate = function validate (descriptor, value, opts) {
    if ( opts === void 0 ) opts = {};

  if (this._paused) { return Promise.resolve(true); }

  return this._base.validate(descriptor, value, assign({}, { vmId: this.id }, opts || {}));
};

ScopedValidator.prototype.verify = function verify () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).verify.apply(ref, args);
};

ScopedValidator.prototype.validateAll = function validateAll (values, opts) {
    if ( opts === void 0 ) opts = {};

  if (this._paused) { return Promise.resolve(true); }

  return this._base.validateAll(values, assign({}, { vmId: this.id }, opts || {}));
};

ScopedValidator.prototype.validateScopes = function validateScopes (opts) {
    if ( opts === void 0 ) opts = {};

  if (this._paused) { return Promise.resolve(true); }

  return this._base.validateScopes(assign({}, { vmId: this.id }, opts || {}));
};

ScopedValidator.prototype.destroy = function destroy () {
  delete this.id;
  delete this._base;
};

ScopedValidator.prototype.reset = function reset (matcher) {
  return this._base.reset(Object.assign({}, matcher || {}, { vmId: this.id }));
};

ScopedValidator.prototype.flag = function flag () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base).flag.apply(ref, args.concat( [this.id] ));
};

ScopedValidator.prototype._resolveField = function _resolveField () {
    var ref;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
  return (ref = this._base)._resolveField.apply(ref, args);
};

Object.defineProperties( ScopedValidator.prototype, prototypeAccessors$3 );

var VALIDATOR = null;

var getValidator = function () {
  return VALIDATOR;
};

var setValidator = function (value) {
  VALIDATOR = value;

  return value;
};

// 

/**
 * Checks if a parent validator instance was requested.
 */
var requestsValidator = function (injections) {
  if (isObject(injections) && injections.$validator) {
    return true;
  }

  return false;
};

var mixin = {
  provide: function provide () {
    if (this.$validator && !isBuiltInComponent(this.$vnode)) {
      return {
        $validator: this.$validator
      };
    }

    return {};
  },
  beforeCreate: function beforeCreate () {
    // if built in do nothing.
    if (isBuiltInComponent(this.$vnode) || this.$options.$__veeInject === false) {
      return;
    }

    // if its a root instance set the config if it exists.
    if (!this.$parent) {
      setConfig(this.$options.$_veeValidate || {});
    }

    var options = resolveConfig(this);

    // if its a root instance, inject anyways, or if it requested a new instance.
    if (!this.$parent || (this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator))) {
      this.$validator = new ScopedValidator(getValidator(), this);
    }

    var requested = requestsValidator(this.$options.inject);

    // if automatic injection is enabled and no instance was requested.
    if (! this.$validator && options.inject && !requested) {
      this.$validator = new ScopedValidator(getValidator(), this);
    }

    // don't inject errors or fieldBag as no validator was resolved.
    if (!requested && !this.$validator) {
      return;
    }

    // There is a validator but it isn't injected, mark as reactive.
    if (!requested && this.$validator) {
      var Vue = this.$options._base; // the vue constructor.
      Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
    }

    if (!this.$options.computed) {
      this.$options.computed = {};
    }

    this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter () {
      return this.$validator.errors;
    };
    this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter () {
      return this.$validator.fields.items.reduce(function (acc, field) {
        if (field.scope) {
          if (!acc[("$" + (field.scope))]) {
            acc[("$" + (field.scope))] = {};
          }

          acc[("$" + (field.scope))][field.name] = field.flags;

          return acc;
        }

        acc[field.name] = field.flags;

        return acc;
      }, {});
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.$validator && this._uid === this.$validator.id) {
      this.$validator.errors.clear(); // remove errors generated by this component.
    }
  }
};

// 

/**
 * Finds the requested field by id from the context object.
 */
function findField (el, context) {
  if (!context || !context.$validator) {
    return null;
  }

  return context.$validator.fields.findById(el._veeValidateId);
}
var directive = {
  bind: function bind (el, binding, vnode) {
    var validator = vnode.context.$validator;
    if (!validator) {
      if (true) {
        warn("No validator instance is present on vm, did you forget to inject '$validator'?");
      }

      return;
    }

    var fieldOptions = Resolver.generate(el, binding, vnode);
    validator.attach(fieldOptions);
  },
  inserted: function inserted (el, binding, vnode) {
    var field = findField(el, vnode.context);
    var scope = Resolver.resolveScope(el, binding, vnode);

    // skip if scope hasn't changed.
    if (!field || scope === field.scope) { return; }

    // only update scope.
    field.update({ scope: scope });

    // allows the field to re-evaluated once more in the update hook.
    field.updated = false;
  },
  update: function update (el, binding, vnode) {
    var field = findField(el, vnode.context);

    // make sure we don't do unneccasary work if no important change was done.
    if (!field || (field.updated && isEqual(binding.value, binding.oldValue))) { return; }
    var scope = Resolver.resolveScope(el, binding, vnode);
    var rules = Resolver.resolveRules(el, binding, vnode);

    field.update({
      scope: scope,
      rules: rules
    });
  },
  unbind: function unbind (el, binding, ref) {
    var context = ref.context;

    var field = findField(el, context);
    if (!field) { return; }

    context.$validator.detach(field);
  }
};

// 

var Validator = function Validator (validations, options, pluginContainer) {
  if ( options === void 0 ) options = { fastExit: true };
  if ( pluginContainer === void 0 ) pluginContainer = null;

  this.errors = new ErrorBag();
  this.fields = new FieldBag();
  this._createFields(validations);
  this.paused = false;
  this.fastExit = !isNullOrUndefined(options && options.fastExit) ? options.fastExit : true;
  this.$vee = pluginContainer || {
    _vm: {
      $nextTick: function (cb) { return isCallable(cb) ? cb() : Promise.resolve(); },
      $emit: function () {},
      $off: function () {}
    }
  };
};

var prototypeAccessors$4 = { rules: { configurable: true },dictionary: { configurable: true },flags: { configurable: true },locale: { configurable: true } };
var staticAccessors$1 = { rules: { configurable: true },dictionary: { configurable: true },locale: { configurable: true } };

/**
 * @deprecated
 */
staticAccessors$1.rules.get = function () {
  if (true) {
    warn('this accessor will be deprecated, use `import { rules } from "vee-validate"` instead.');
  }

  return RuleContainer.rules;
};

/**
 * @deprecated
 */
prototypeAccessors$4.rules.get = function () {
  if (true) {
    warn('this accessor will be deprecated, use `import { rules } from "vee-validate"` instead.');
  }

  return RuleContainer.rules;
};

prototypeAccessors$4.dictionary.get = function () {
  return DictionaryResolver.getDriver();
};

staticAccessors$1.dictionary.get = function () {
  return DictionaryResolver.getDriver();
};

prototypeAccessors$4.flags.get = function () {
  return this.fields.items.reduce(function (acc, field) {
      var obj;

    if (field.scope) {
      acc[("$" + (field.scope))] = ( obj = {}, obj[field.name] = field.flags, obj );

      return acc;
    }

    acc[field.name] = field.flags;

    return acc;
  }, {});
};

/**
 * Getter for the current locale.
 */
prototypeAccessors$4.locale.get = function () {
  return Validator.locale;
};

/**
 * Setter for the validator locale.
 */
prototypeAccessors$4.locale.set = function (value) {
  Validator.locale = value;
};

staticAccessors$1.locale.get = function () {
  return DictionaryResolver.getDriver().locale;
};

/**
 * Setter for the validator locale.
 */
staticAccessors$1.locale.set = function (value) {
  var hasChanged = value !== DictionaryResolver.getDriver().locale;
  DictionaryResolver.getDriver().locale = value;
  if (hasChanged && Validator.$vee && Validator.$vee._vm) {
    Validator.$vee._vm.$emit('localeChanged');
  }
};

/**
 * Static constructor.
 * @deprecated
 */
Validator.create = function create (validations, options) {
  if (true) {
    warn('Please use `new` to create new validator instances.');
  }

  return new Validator(validations, options);
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.extend = function extend (name, validator, options) {
    if ( options === void 0 ) options = {};

  Validator._guardExtend(name, validator);
  // rules imported from the minimal bundle
  // will have the options embedded in them
  var mergedOpts = validator.options || {};
  Validator._merge(name, {
    validator: validator,
    paramNames: (options && options.paramNames) || validator.paramNames,
    options: assign({ hasTarget: false, immediate: true }, mergedOpts, options || {})
  });
};

/**
 * Removes a rule from the list of validators.
 * @deprecated
 */
Validator.remove = function remove (name) {
  if (true) {
    warn('this method will be deprecated, you can still override your rules with `extend`');
  }

  RuleContainer.remove(name);
};

/**
 * Adds and sets the current locale for the validator.
*/
Validator.prototype.localize = function localize (lang, dictionary) {
  Validator.localize(lang, dictionary);
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.localize = function localize (lang, dictionary) {
    var obj;

  if (isObject(lang)) {
    DictionaryResolver.getDriver().merge(lang);
    return;
  }

  // merge the dictionary.
  if (dictionary) {
    var locale = lang || dictionary.name;
    dictionary = assign({}, dictionary);
    DictionaryResolver.getDriver().merge(( obj = {}, obj[locale] = dictionary, obj ));
  }

  if (lang) {
    // set the locale.
    Validator.locale = lang;
  }
};

/**
 * Registers a field to be validated.
 */
Validator.prototype.attach = function attach (fieldOpts) {
    var this$1 = this;

  // We search for a field with the same name & scope, having persist enabled
  var oldFieldMatcher = { name: fieldOpts.name, scope: fieldOpts.scope, persist: true };
  var oldField = fieldOpts.persist ? this.fields.find(oldFieldMatcher) : null;

  if (oldField) {
    // We keep the flags of the old field, then we remove its instance
    fieldOpts.flags = oldField.flags;
    oldField.destroy();
    this.fields.remove(oldField);
  }

  // fixes initial value detection with v-model and select elements.
  var value = fieldOpts.initialValue;
  var field = new Field(fieldOpts);
  this.fields.push(field);

  // validate the field initially
  if (field.immediate) {
    this.$vee._vm.$nextTick(function () { return this$1.validate(("#" + (field.id)), value || field.value, { vmId: fieldOpts.vmId }); });
  } else {
    this._validate(field, value || field.value, { initial: true }).then(function (result) {
      field.flags.valid = result.valid;
      field.flags.invalid = !result.valid;
    });
  }

  return field;
};

/**
 * Sets the flags on a field.
 */
Validator.prototype.flag = function flag (name, flags, uid) {
    if ( uid === void 0 ) uid = null;

  var field = this._resolveField(name, undefined, uid);
  if (!field || !flags) {
    return;
  }

  field.setFlags(flags);
};

/**
 * Removes a field from the validator.
 */
Validator.prototype.detach = function detach (name, scope, uid) {
  var field = isCallable(name.destroy) ? name : this._resolveField(name, scope, uid);
  if (!field) { return; }

  // We destroy/remove the field & error instances if it's not a `persist` one
  if (!field.persist) {
    field.destroy();
    this.errors.remove(field.name, field.scope, field.vmId);
    this.fields.remove(field);
  }
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.prototype.extend = function extend (name, validator, options) {
    if ( options === void 0 ) options = {};

  Validator.extend(name, validator, options);
};

Validator.prototype.reset = function reset (matcher) {
    var this$1 = this;

  // two ticks
  return this.$vee._vm.$nextTick().then(function () {
    return this$1.$vee._vm.$nextTick();
  }).then(function () {
    this$1.fields.filter(matcher).forEach(function (field) {
      field.waitFor(null);
      field.reset(); // reset field flags.
      this$1.errors.remove(field.name, field.scope, matcher && matcher.vmId);
    });
  });
};

/**
 * Updates a field, updating both errors and flags.
 */
Validator.prototype.update = function update (id, ref) {
    var scope = ref.scope;

  var field = this._resolveField(("#" + id));
  if (!field) { return; }

  // remove old scope.
  this.errors.update(id, { scope: scope });
};

/**
 * Removes a rule from the list of validators.
 * @deprecated
 */
Validator.prototype.remove = function remove (name) {
  Validator.remove(name);
};

/**
 * Validates a value against a registered field validations.
 */
Validator.prototype.validate = function validate (fieldDescriptor, value, ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var silent = ref.silent;
    var vmId = ref.vmId;

  if (this.paused) { return Promise.resolve(true); }

  // overload to validate all.
  if (isNullOrUndefined(fieldDescriptor)) {
    return this.validateScopes({ silent: silent, vmId: vmId });
  }

  // overload to validate scope-less fields.
  if (fieldDescriptor === '*') {
    return this.validateAll(undefined, { silent: silent, vmId: vmId });
  }

  // if scope validation was requested.
  if (/^(.+)\.\*$/.test(fieldDescriptor)) {
    var matched = fieldDescriptor.match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched);
  }

  var field = this._resolveField(fieldDescriptor);
  if (!field) {
    return this._handleFieldNotFound(fieldDescriptor);
  }

  if (!silent) { field.flags.pending = true; }
  if (value === undefined) {
    value = field.value;
  }

  var validationPromise = this._validate(field, value);
  field.waitFor(validationPromise);

  return validationPromise.then(function (result) {
    if (!silent && field.isWaitingFor(validationPromise)) {
      // allow next validation to mutate the state.
      field.waitFor(null);
      this$1._handleValidationResults([result], vmId);
    }

    return result.valid;
  });
};

/**
 * Pauses the validator.
 */
Validator.prototype.pause = function pause () {
  this.paused = true;

  return this;
};

/**
 * Resumes the validator.
 */
Validator.prototype.resume = function resume () {
  this.paused = false;

  return this;
};

/**
 * Validates each value against the corresponding field validations.
 */
Validator.prototype.validateAll = function validateAll (values, ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var silent = ref.silent;
    var vmId = ref.vmId;

  if (this.paused) { return Promise.resolve(true); }

  var matcher = null;
  var providedValues = false;

  if (typeof values === 'string') {
    matcher = { scope: values, vmId: vmId };
  } else if (isObject(values)) {
    matcher = Object.keys(values).map(function (key) {
      return { name: key, vmId: vmId, scope: null };
    });
    providedValues = true;
  } else if (Array.isArray(values)) {
    matcher = values.map(function (key) {
      return typeof key === 'object' ? Object.assign({ vmId: vmId }, key) : { name: key, vmId: vmId };
    });
  } else {
    matcher = { scope: null, vmId: vmId };
  }

  return Promise.all(
    this.fields.filter(matcher).map(function (field) { return this$1._validate(field, providedValues ? values[field.name] : field.value); })
  ).then(function (results) {
    if (!silent) {
      this$1._handleValidationResults(results, vmId);
    }

    return results.every(function (t) { return t.valid; });
  });
};

/**
 * Validates all scopes.
 */
Validator.prototype.validateScopes = function validateScopes (ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var silent = ref.silent;
    var vmId = ref.vmId;

  if (this.paused) { return Promise.resolve(true); }

  return Promise.all(
    this.fields.filter({ vmId: vmId }).map(function (field) { return this$1._validate(field, field.value); })
  ).then(function (results) {
    if (!silent) {
      this$1._handleValidationResults(results, vmId);
    }

    return results.every(function (t) { return t.valid; });
  });
};

/**
 * Validates a value against the rules.
 */
Validator.prototype.verify = function verify (value, rules, options) {
    if ( options === void 0 ) options = {};

  var field = {
    name: (options && options.name) || '{field}',
    rules: normalizeRules(rules),
    bails: getPath('bails', options, true),
    forceRequired: false,
    get isRequired () {
      return !!this.rules.required || this.forceRequired;
    }
  };

  var targetRules = Object.keys(field.rules).filter(RuleContainer.isTargetRule);
  if (targetRules.length && options && isObject(options.values)) {
    field.dependencies = targetRules.map(function (rule) {
      var ref = field.rules[rule];
        var targetKey = ref[0];

      return {
        name: rule,
        field: { value: options.values[targetKey] }
      };
    });
  }

  return this._validate(field, value).then(function (result) {
    var errors = [];
    var ruleMap = {};
    result.errors.forEach(function (e) {
      errors.push(e.msg);
      ruleMap[e.rule] = e.msg;
    });

    return {
      valid: result.valid,
      errors: errors,
      failedRules: ruleMap
    };
  });
};

/**
 * Perform cleanup.
 */
Validator.prototype.destroy = function destroy () {
  this.$vee._vm.$off('localeChanged');
};

/**
 * Creates the fields to be validated.
 */
Validator.prototype._createFields = function _createFields (validations) {
    var this$1 = this;

  if (!validations) { return; }

  Object.keys(validations).forEach(function (field) {
    var options = assign({}, { name: field, rules: validations[field] });
    this$1.attach(options);
  });
};

/**
 * Date rules need the existence of a format, so date_format must be supplied.
 */
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
  var format = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format = validations.date_format[0];
  }

  return format || DictionaryResolver.getDriver().getDateFormat(this.locale);
};

/**
 * Formats an error message for field and a rule.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, targetName) {
    if ( data === void 0 ) data = {};
    if ( targetName === void 0 ) targetName = null;

  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule, targetName);

  return DictionaryResolver.getDriver().getFieldMessage(this.locale, field.name, rule.name, [name, params, data]);
};

/**
 * We need to convert any object param to an array format since the locales do not handle params as objects yet.
 */
Validator.prototype._convertParamObjectToArray = function _convertParamObjectToArray (obj, ruleName) {
  if (Array.isArray(obj)) {
    return obj;
  }

  var paramNames = RuleContainer.getParamNames(ruleName);
  if (!paramNames || !isObject(obj)) {
    return obj;
  }

  return paramNames.reduce(function (prev, paramName) {
    if (paramName in obj) {
      prev.push(obj[paramName]);
    }

    return prev;
  }, []);
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, targetName) {
    if ( targetName === void 0 ) targetName = null;

  var params = this._convertParamObjectToArray(rule.params, rule.name);
  if (rule.options.hasTarget && params && params[0]) {
    var localizedName = targetName || DictionaryResolver.getDriver().getAttribute(this.locale, params[0], params[0]);
    return [localizedName].concat(params.slice(1));
  }

  return params;
};

/**
 * Resolves an appropriate display name, first checking 'data-as' or the registered 'prettyName'
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
  return field.alias || DictionaryResolver.getDriver().getAttribute(this.locale, field.name, field.name);
};

/**
 * Converts an array of params to an object with named properties.
 * Only works if the rule is configured with a paramNames array.
 * Returns the same params if it cannot convert it.
 */
Validator.prototype._convertParamArrayToObj = function _convertParamArrayToObj (params, ruleName) {
  var paramNames = RuleContainer.getParamNames(ruleName);
  if (!paramNames) {
    return params;
  }

  if (isObject(params)) {
    // check if the object is either a config object or a single parameter that is an object.
    var hasKeys = paramNames.some(function (name) { return Object.keys(params).indexOf(name) !== -1; });
    // if it has some of the keys, return it as is.
    if (hasKeys) {
      return params;
    }
    // otherwise wrap the object in an array.
    params = [params];
  }

  // Reduce the paramsNames to a param object.
  return params.reduce(function (prev, value, idx) {
    prev[paramNames[idx]] = value;

    return prev;
  }, {});
};

/**
 * Tests a single input value against a rule.
 */
Validator.prototype._test = function _test (field, value, rule) {
    var this$1 = this;

  var validator = RuleContainer.getValidatorMethod(rule.name);
  var params = Array.isArray(rule.params) ? toArray(rule.params) : rule.params;
  if (!params) {
    params = [];
  }

  var targetName = null;
  if (!validator || typeof validator !== 'function') {
    return Promise.reject(createError(("No such validator '" + (rule.name) + "' exists.")));
  }

  // has field dependencies.
  if (rule.options.hasTarget && field.dependencies) {
    var target = find(field.dependencies, function (d) { return d.name === rule.name; });
    if (target) {
      targetName = target.field.alias;
      params = [target.field.value].concat(params.slice(1));
    }
  } else if (rule.name === 'required' && field.rejectsFalse) {
    // invalidate false if no args were specified and the field rejects false by default.
    params = params.length ? params : [true];
  }

  if (rule.options.isDate) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== 'date_format') {
      params.push(dateFormat);
    }
  }

  var result = validator(value, this._convertParamArrayToObj(params, rule.name));

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) { return (isObject(t) ? t.valid : t); });
      } else { // Is a single object/boolean.
        allValid = isObject(values) ? values.valid : values;
        data = values.data;
      }

      return {
        valid: allValid,
        data: result.data,
        errors: allValid ? [] : [this$1._createFieldError(field, rule, data, targetName)]
      };
    });
  }

  if (!isObject(result)) {
    result = { valid: result, data: {} };
  }

  return {
    valid: result.valid,
    data: result.data,
    errors: result.valid ? [] : [this._createFieldError(field, rule, result.data, targetName)]
  };
};

/**
 * Merges a validator object into the RULES and Messages.
 */
Validator._merge = function _merge (name, ref) {
    var validator = ref.validator;
    var options = ref.options;
    var paramNames = ref.paramNames;

  var validate = isCallable(validator) ? validator : validator.validate;
  if (validator.getMessage) {
    DictionaryResolver.getDriver().setMessage(Validator.locale, name, validator.getMessage);
  }

  RuleContainer.add(name, {
    validate: validate,
    options: options,
    paramNames: paramNames
  });
};

/**
 * Guards from extension violations.
 */
Validator._guardExtend = function _guardExtend (name, validator) {
  if (isCallable(validator)) {
    return;
  }

  if (!isCallable(validator.validate)) {
    throw createError(
      ("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.")
    );
  }
};

/**
 * Creates a Field Error Object.
 */
Validator.prototype._createFieldError = function _createFieldError (field, rule, data, targetName) {
    var this$1 = this;

  return {
    id: field.id,
    vmId: field.vmId,
    field: field.name,
    msg: this._formatErrorMessage(field, rule, data, targetName),
    rule: rule.name,
    scope: field.scope,
    regenerate: function () {
      return this$1._formatErrorMessage(field, rule, data, targetName);
    }
  };
};

/**
 * Tries different strategies to find a field.
 */
Validator.prototype._resolveField = function _resolveField (name, scope, uid) {
  if (name[0] === '#') {
    return this.fields.findById(name.slice(1));
  }

  if (!isNullOrUndefined(scope)) {
    return this.fields.find({ name: name, scope: scope, vmId: uid });
  }

  if (includes(name, '.')) {
    var ref = name.split('.');
      var fieldScope = ref[0];
      var fieldName = ref.slice(1);
    var field = this.fields.find({ name: fieldName.join('.'), scope: fieldScope, vmId: uid });
    if (field) {
      return field;
    }
  }

  return this.fields.find({ name: name, scope: null, vmId: uid });
};

/**
 * Handles when a field is not found.
 */
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
  var fullName = isNullOrUndefined(scope) ? name : ("" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name);

  return Promise.reject(createError(
    ("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first.")
  ));
};

/**
 * Handles validation results.
 */
Validator.prototype._handleValidationResults = function _handleValidationResults (results, vmId) {
    var this$1 = this;

  var matchers = results.map(function (result) { return ({ id: result.id }); });
  this.errors.removeById(matchers.map(function (m) { return m.id; }));
  // remove by name and scope to remove any custom errors added.
  results.forEach(function (result) {
    this$1.errors.remove(result.field, result.scope, vmId);
  });
  var allErrors = results.reduce(function (prev, curr) {
    prev.push.apply(prev, curr.errors);

    return prev;
  }, []);

  this.errors.add(allErrors);

  // handle flags.
  this.fields.filter(matchers).forEach(function (field) {
    var result = find(results, function (r) { return r.id === field.id; });
    field.setFlags({
      pending: false,
      valid: result.valid,
      validated: true
    });
  });
};

Validator.prototype._shouldSkip = function _shouldSkip (field, value) {
  // field is configured to run through the pipeline regardless
  if (field.bails === false) {
    return false;
  }

  // disabled fields are skipped if useConstraintAttrs is enabled in config
  if (field.isDisabled && getConfig().useConstraintAttrs) {
    return true;
  }

  // skip if the field is not required and has an empty value.
  return !field.isRequired && (isNullOrUndefined(value) || value === '' || isEmptyArray(value));
};

Validator.prototype._shouldBail = function _shouldBail (field) {
  // if the field was configured explicitly.
  if (field.bails !== undefined) {
    return field.bails;
  }

  return this.fastExit;
};

/**
 * Starts the validation process.
 */
Validator.prototype._validate = function _validate (field, value, ref) {
    var this$1 = this;
    if ( ref === void 0 ) ref = {};
    var initial = ref.initial;

  var requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);

  field.forceRequired = false;
  requireRules.forEach(function (rule) {
    var ruleOptions = RuleContainer.getOptions(rule);
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule], options: ruleOptions });

    if (isCallable(result.then)) { throw createError('Require rules cannot be async'); }
    if (!isObject(result)) { throw createError('Require rules has to return an object (see docs)'); }

    if (result.data.required === true) {
      field.forceRequired = true;
    }
  });

  if (this._shouldSkip(field, value)) {
    return Promise.resolve({ valid: true, id: field.id, field: field.name, scope: field.scope, errors: [] });
  }

  var promises = [];
  var errors = [];
  var isExitEarly = false;
  if (isCallable(field.checkValueChanged)) {
    field.flags.changed = field.checkValueChanged();
  }

  // use of '.some()' is to break iteration in middle by returning true
  Object.keys(field.rules).filter(function (rule) {
    if (!initial || !RuleContainer.has(rule)) { return true; }

    return RuleContainer.isImmediate(rule);
  }).some(function (rule) {
    var ruleOptions = RuleContainer.getOptions(rule);
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule], options: ruleOptions });
    if (isCallable(result.then)) {
      promises.push(result);
    } else if (!result.valid && this$1._shouldBail(field)) {
      errors.push.apply(errors, result.errors);
      isExitEarly = true;
    } else {
      // promisify the result.
      promises.push(new Promise(function (resolve) { return resolve(result); }));
    }

    return isExitEarly;
  });

  if (isExitEarly) {
    return Promise.resolve({ valid: false, errors: errors, id: field.id, field: field.name, scope: field.scope });
  }

  return Promise.all(promises).then(function (results) {
    return results.reduce(function (prev, v) {
        var ref;

      if (!v.valid) {
        (ref = prev.errors).push.apply(ref, v.errors);
      }

      prev.valid = prev.valid && v.valid;

      return prev;
    }, { valid: true, errors: errors, id: field.id, field: field.name, scope: field.scope });
  });
};

Object.defineProperties( Validator.prototype, prototypeAccessors$4 );
Object.defineProperties( Validator, staticAccessors$1 );

// 

var normalizeValue = function (value) {
  if (isObject(value)) {
    return Object.keys(value).reduce(function (prev, key) {
      prev[key] = normalizeValue(value[key]);

      return prev;
    }, {});
  }

  if (isCallable(value)) {
    return value('{0}', ['{1}', '{2}', '{3}']);
  }

  return value;
};

var normalizeFormat = function (locale) {
  // normalize messages
  var dictionary = {};
  if (locale.messages) {
    dictionary.messages = normalizeValue(locale.messages);
  }

  if (locale.custom) {
    dictionary.custom = normalizeValue(locale.custom);
  }

  if (locale.attributes) {
    dictionary.attributes = locale.attributes;
  }

  if (!isNullOrUndefined(locale.dateFormat)) {
    dictionary.dateFormat = locale.dateFormat;
  }

  return dictionary;
};

var I18nDictionary = function I18nDictionary (i18n, rootKey) {
  this.i18n = i18n;
  this.rootKey = rootKey;
};

var prototypeAccessors$5 = { locale: { configurable: true } };

prototypeAccessors$5.locale.get = function () {
  return this.i18n.locale;
};

prototypeAccessors$5.locale.set = function (value) {
  warn('Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead');
};

I18nDictionary.prototype.getDateFormat = function getDateFormat (locale) {
  return this.i18n.getDateTimeFormat(locale || this.locale);
};

I18nDictionary.prototype.setDateFormat = function setDateFormat (locale, value) {
  this.i18n.setDateTimeFormat(locale || this.locale, value);
};

I18nDictionary.prototype.getMessage = function getMessage (_, key, data) {
  var path = (this.rootKey) + ".messages." + key;
  var dataOptions = data;

  if (Array.isArray(data)) {
    dataOptions = [].concat.apply([], data);
  }

  if (this.i18n.te(path)) {
    return this.i18n.t(path, dataOptions);
  }

  // fallback to the fallback message
  if (this.i18n.te(path, this.i18n.fallbackLocale)) {
    return this.i18n.t(path, this.i18n.fallbackLocale, dataOptions);
  }

  // fallback to the root message
  return this.i18n.t(((this.rootKey) + ".messages._default"), dataOptions);
};

I18nDictionary.prototype.getAttribute = function getAttribute (_, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  var path = (this.rootKey) + ".attributes." + key;
  if (this.i18n.te(path)) {
    return this.i18n.t(path);
  }

  return fallback;
};

I18nDictionary.prototype.getFieldMessage = function getFieldMessage (_, field, key, data) {
  var path = (this.rootKey) + ".custom." + field + "." + key;
  if (this.i18n.te(path)) {
    return this.i18n.t(path, data);
  }

  return this.getMessage(_, key, data);
};

I18nDictionary.prototype.merge = function merge$1 (dictionary) {
    var this$1 = this;

  Object.keys(dictionary).forEach(function (localeKey) {
      var obj;

    // i18n doesn't deep merge
    // first clone the existing locale (avoid mutations to locale)
    var clone = merge({}, getPath((localeKey + "." + (this$1.rootKey)), this$1.i18n.messages, {}));
    // Merge cloned locale with new one
    var locale = merge(clone, normalizeFormat(dictionary[localeKey]));
    this$1.i18n.mergeLocaleMessage(localeKey, ( obj = {}, obj[this$1.rootKey] = locale, obj ));
    if (locale.dateFormat) {
      this$1.i18n.setDateTimeFormat(localeKey, locale.dateFormat);
    }
  });
};

I18nDictionary.prototype.setMessage = function setMessage (locale, key, value) {
    var obj, obj$1;

  this.merge(( obj$1 = {}, obj$1[locale] = {
      messages: ( obj = {}, obj[key] = value, obj )
    }, obj$1 ));
};

I18nDictionary.prototype.setAttribute = function setAttribute (locale, key, value) {
    var obj, obj$1;

  this.merge(( obj$1 = {}, obj$1[locale] = {
      attributes: ( obj = {}, obj[key] = value, obj )
    }, obj$1 ));
};

Object.defineProperties( I18nDictionary.prototype, prototypeAccessors$5 );

var aggressive = function () { return ({
  on: ['input']
}); };

var lazy = function () { return ({
  on: ['change']
}); };

var eager = function (ref) {
  var errors = ref.errors;

  if (errors.length) {
    return {
      on: ['input']
    };
  }

  return {
    on: ['change', 'blur']
  };
};

var passive = function () { return ({
  on: []
}); };

var modes = {
  aggressive: aggressive,
  eager: eager,
  passive: passive,
  lazy: lazy
};

// 

var Vue;
var pendingPlugins;
var pluginInstance;

var VeeValidate$1 = function VeeValidate (config, _Vue) {
  this.configure(config);
  pluginInstance = this;
  if (_Vue) {
    Vue = _Vue;
  }
  this._validator = setValidator(
    new Validator(null, { fastExit: config && config.fastExit }, this)
  );
  this._initVM(this.config);
  this._initI18n(this.config);
};

var prototypeAccessors$6 = { i18nDriver: { configurable: true },config: { configurable: true } };
var staticAccessors$2 = { i18nDriver: { configurable: true },config: { configurable: true } };

VeeValidate$1.setI18nDriver = function setI18nDriver (driver, instance) {
  DictionaryResolver.setDriver(driver, instance);
};

VeeValidate$1.configure = function configure (cfg) {
  setConfig(cfg);
};

VeeValidate$1.setMode = function setMode (mode, implementation) {
  setConfig({ mode: mode });
  if (!implementation) {
    return;
  }

  if (!isCallable(implementation)) {
    throw new Error('A mode implementation must be a function');
  }

  modes[mode] = implementation;
};

VeeValidate$1.use = function use (plugin, options) {
    if ( options === void 0 ) options = {};

  if (!isCallable(plugin)) {
    return warn('The plugin must be a callable function');
  }

  // Don't install plugins until vee-validate is installed.
  if (!pluginInstance) {
    if (!pendingPlugins) {
      pendingPlugins = [];
    }
    pendingPlugins.push({ plugin: plugin, options: options });
    return;
  }

  plugin({ Validator: Validator, ErrorBag: ErrorBag, Rules: Validator.rules }, options);
};
VeeValidate$1.install = function install (_Vue, opts) {
  if (Vue && _Vue === Vue) {
    if (true) {
      warn('already installed, Vue.use(VeeValidate) should only be called once.');
    }
    return;
  }

  Vue = _Vue;
  pluginInstance = new VeeValidate$1(opts);
  // inject the plugin container statically into the validator class
  Validator.$vee = pluginInstance;

  detectPassiveSupport();

  Vue.mixin(mixin);
  Vue.directive('validate', directive);
  if (pendingPlugins) {
    pendingPlugins.forEach(function (ref) {
        var plugin = ref.plugin;
        var options = ref.options;

      VeeValidate$1.use(plugin, options);
    });
    pendingPlugins = null;
  }
};

prototypeAccessors$6.i18nDriver.get = function () {
  return DictionaryResolver.getDriver();
};

staticAccessors$2.i18nDriver.get = function () {
  return DictionaryResolver.getDriver();
};

prototypeAccessors$6.config.get = function () {
  return getConfig();
};

staticAccessors$2.config.get = function () {
  return getConfig();
};

VeeValidate$1.prototype._initVM = function _initVM (config) {
    var this$1 = this;

  this._vm = new Vue({
    data: function () { return ({
      errors: this$1._validator.errors,
      fields: this$1._validator.fields
    }); }
  });
};

VeeValidate$1.prototype._initI18n = function _initI18n (config) {
    var this$1 = this;

  var dictionary = config.dictionary;
    var i18n = config.i18n;
    var i18nRootKey = config.i18nRootKey;
    var locale = config.locale;
  var onLocaleChanged = function () {
    if (dictionary) {
      this$1.i18nDriver.merge(dictionary);
    }

    this$1._validator.errors.regenerate();
  };

  // i18 is being used for localization.
  if (i18n) {
    VeeValidate$1.setI18nDriver('i18n', new I18nDictionary(i18n, i18nRootKey));
    i18n._vm.$watch('locale', onLocaleChanged);
  } else if (typeof window !== 'undefined') {
    this._vm.$on('localeChanged', onLocaleChanged);
  }

  if (dictionary) {
    this.i18nDriver.merge(dictionary);
  }

  if (locale && !i18n) {
    this._validator.localize(locale);
  }
};

VeeValidate$1.prototype.configure = function configure (cfg) {
  setConfig(cfg);
};

Object.defineProperties( VeeValidate$1.prototype, prototypeAccessors$6 );
Object.defineProperties( VeeValidate$1, staticAccessors$2 );

VeeValidate$1.mixin = mixin;
VeeValidate$1.directive = directive;
VeeValidate$1.Validator = Validator;
VeeValidate$1.ErrorBag = ErrorBag;

/**
 * Formates file size.
 *
 * @param {Number|String} size
 */
var formatFileSize = function (size) {
  var units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var threshold = 1024;
  size = Number(size) * threshold;
  var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
  return (((size / Math.pow(threshold, i)).toFixed(2) * 1) + " " + (units[i]));
};

/**
 * Checks if vee-validate is defined globally.
 */
var isDefinedGlobally = function () {
  return typeof VeeValidate !== 'undefined';
};

var obj;

var messages = {
  _default: function (field) { return ("The " + field + " value is not valid"); },
  after: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target);
},
  alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters"); },
  alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores"); },
  alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters"); },
  alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces"); },
  before: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target);
},
  between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " field must be between " + min + " and " + max);
},
  confirmed: function (field) { return ("The " + field + " confirmation does not match"); },
  credit_card: function (field) { return ("The " + field + " field is invalid"); },
  date_between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " must be between " + min + " and " + max);
},
  date_format: function (field, ref) {
    var format = ref[0];

    return ("The " + field + " must be in the format " + format);
},
  decimal: function (field, ref) {
    if ( ref === void 0 ) ref = [];
    var decimals = ref[0]; if ( decimals === void 0 ) decimals = '*';

    return ("The " + field + " field must be numeric and may contain" + (!decimals || decimals === '*' ? '' : ' ' + decimals) + " decimal points");
},
  digits: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be numeric and contains exactly " + length + " digits");
},
  dimensions: function (field, ref) {
    var width = ref[0];
    var height = ref[1];

    return ("The " + field + " field must be " + width + " pixels by " + height + " pixels");
},
  email: function (field) { return ("The " + field + " field must be a valid email"); },
  excluded: function (field) { return ("The " + field + " field must be a valid value"); },
  ext: function (field) { return ("The " + field + " field must be a valid file"); },
  image: function (field) { return ("The " + field + " field must be an image"); },
  included: function (field) { return ("The " + field + " field must be a valid value"); },
  integer: function (field) { return ("The " + field + " field must be an integer"); },
  ip: function (field) { return ("The " + field + " field must be a valid ip address"); },
  ip_or_fqdn: function (field) { return ("The " + field + " field must be a valid ip address or FQDN"); },
  length: function (field, ref) {
    var length = ref[0];
    var max = ref[1];

    if (max) {
      return ("The " + field + " length must be between " + length + " and " + max);
    }

    return ("The " + field + " length must be " + length);
  },
  max: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field may not be greater than " + length + " characters");
},
  max_value: function (field, ref) {
    var max = ref[0];

    return ("The " + field + " field must be " + max + " or less");
},
  mimes: function (field) { return ("The " + field + " field must have a valid file type"); },
  min: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be at least " + length + " characters");
},
  min_value: function (field, ref) {
    var min = ref[0];

    return ("The " + field + " field must be " + min + " or more");
},
  numeric: function (field) { return ("The " + field + " field may only contain numeric characters"); },
  regex: function (field) { return ("The " + field + " field format is invalid"); },
  required: function (field) { return ("The " + field + " field is required"); },
  required_if: function (field, ref) {
    var target = ref[0];

    return ("The " + field + " field is required when the " + target + " field has this value");
},
  size: function (field, ref) {
    var size = ref[0];

    return ("The " + field + " size must be less than " + (formatFileSize(size)));
},
  url: function (field) { return ("The " + field + " field is not a valid URL"); }
};

var locale = {
  name: 'en',
  messages: messages,
  attributes: {}
};

if (isDefinedGlobally()) {
  // eslint-disable-next-line
  VeeValidate.Validator.localize(( obj = {}, obj[locale.name] = locale, obj ));
}

function toInteger (dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number)
}

var MILLISECONDS_IN_MINUTE = 60000;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds (dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;

  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate (argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (argument instanceof Date ||
    (typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument === 'number' || Object.prototype.toString.call(argument) === '[object Number]') {
    return new Date(argument)
  } else if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);

      if (isNaN(time)) {
        return new Date(NaN)
      }
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
      if (isNaN(offset)) {
        return new Date(NaN)
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(NaN)
  }
}

function splitDateString (dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;

    if (!validateDate(year, month)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);

    if (!validateDate(year, month, day)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;

    if (!validateWeekDate(year, week)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));

    if (!validateTime(hours)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));

    if (!validateTime(hours, minutes)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE$1
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));

    if (!validateTime(hours, minutes, seconds)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE$1 +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  var hours;

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);

    if (!validateTimezone()) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOWeekYear (isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// Validation functions

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

function validateDate (year, month, date) {
  if (month < 0 || month > 11) {
    return false
  }

  if (date != null) {
    if (date < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false
    }
  }

  return true
}

function validateDayOfYearDate (year, dayOfYear) {
  if (dayOfYear < 1) {
    return false
  }

  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false
  }

  return true
}

function validateWeekDate (year, week, day) {
  if (week < 0 || week > 52) {
    return false
  }

  if (day != null && (day < 0 || day > 6)) {
    return false
  }

  return true
}

function validateTime (hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false
  }

  return true
}

function validateTimezone (hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false
  }

  return true
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount)
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date)
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance (token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      return result + ' ago'
    }
  }

  return result
}

function buildFormatLongFn (args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format
  }
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};

var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}

function buildLocalizeFn (args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var context = options.context ? String(options.context) : 'standalone';

    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth];
    } else {
      valuesArray = args.values[width] || args.values[args.defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index]
  }
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaulFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn (args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};

    var matchResult = string.match(args.matchPattern);
    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0];

    var parseResult = string.match(args.parsePattern);
    if (!parseResult) {
      return null
    }
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function buildMatchFn (args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;

    var matchPattern = (width && args.matchPatterns[width]) || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0];

    var parsePatterns = (width && args.parsePatterns[width]) || args.parsePatterns[args.defaultParseWidth];

    var value;
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string)
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string)
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function findKey (object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key
    }
  }
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;

var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale$1 = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

var MILLISECONDS_IN_DAY = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var weekStartsOn = 1;

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, options);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);

  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK$1 = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCWeek(date, dirtyOptions).getTime() - startOfUTCWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {width: 'abbreviated'})
      // A, B
      case 'GGGGG':
        return localize.era(era, {width: 'narrow'})
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {width: 'wide'})
    }
  },

  // Year
  y: function (date, token, localize, options) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();

    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;

    // Two digit year
    if (token === 'yy') {
      var twoDigitYear = year % 100;
      return addLeadingZeros(twoDigitYear, 2)
    }

    // Ordinal number
    if (token === 'yo') {
      return localize.ordinalNumber(year, {unit: 'year'})
    }

    // Padding
    return addLeadingZeros(year, token.length)
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2)
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {unit: 'year'})
    }

    // Padding
    return addLeadingZeros(weekYear, token.length)
  },

  // ISO week-numbering year
  R: function (date, token, localize, options) {
    var isoWeekYear = getUTCISOWeekYear(date, options);

    // Padding
    return addLeadingZeros(isoWeekYear, token.length)
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token, localize, options) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length)
  },

  // Quarter
  Q: function (date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter)
      // 01, 02, 03, 04
      case 'QQ':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {unit: 'quarter'})
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {width: 'abbreviated', context: 'formatting'})
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {width: 'narrow', context: 'formatting'})
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter)
      // 01, 02, 03, 04
      case 'qq':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {unit: 'quarter'})
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {width: 'abbreviated', context: 'standalone'})
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {width: 'narrow', context: 'standalone'})
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {width: 'wide', context: 'standalone'})
    }
  },

  // Month
  M: function (date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'M':
        return String(month + 1)
      // 01, 02, ..., 12
      case 'MM':
        return addLeadingZeros(month + 1, 2)
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {unit: 'month'})
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {width: 'abbreviated', context: 'formatting'})
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {width: 'narrow', context: 'formatting'})
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone month
  L: function (date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1)
      // 01, 02, ..., 12
      case 'LL':
        return addLeadingZeros(month + 1, 2)
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {unit: 'month'})
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {width: 'abbreviated', context: 'standalone'})
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {width: 'narrow', context: 'standalone'})
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {width: 'wide', context: 'standalone'})
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {unit: 'week'})
    }

    return addLeadingZeros(week, token.length)
  },

  // ISO week of year
  I: function (date, token, localize, options) {
    var isoWeek = getUTCISOWeek(date, options);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {unit: 'week'})
    }

    return addLeadingZeros(isoWeek, token.length)
  },

  // Day of the month
  d: function (date, token, localize, options) {
    var dayOfMonth = date.getUTCDate();

    if (token === 'do') {
      return localize.ordinalNumber(dayOfMonth, {unit: 'date'})
    }

    return addLeadingZeros(dayOfMonth, token.length)
  },

  // Day of year
  D: function (date, token, localize, options) {
    var dayOfYear = getUTCDayOfYear(date, options);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {unit: 'dayOfYear'})
    }

    return addLeadingZeros(dayOfYear, token.length)
  },

  // Day of week
  E: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = ((dayOfWeek - options.weekStartsOn + 8) % 7) || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek)
      // Padded numerical value
      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2)
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {unit: 'day'})
      case 'eee':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = ((dayOfWeek - options.weekStartsOn + 8) % 7) || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek)
      // Padded numberical value
      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length)
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {unit: 'day'})
      case 'ccc':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'standalone'})
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'standalone'})
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {width: 'short', context: 'standalone'})
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'standalone'})
    }
  },

  // ISO day of week
  i: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek)
      // 02
      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length)
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {unit: 'day'})
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = (hours / 12) >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = (hours / 12) >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // Hour [1-12]
  h: function (date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (hours === 0) {
      hours = 12;
    }

    if (token === 'ho') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [0-23]
  H: function (date, token, localize, options) {
    var hours = date.getUTCHours();

    if (token === 'Ho') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [0-11]
  K: function (date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [1-24]
  k: function (date, token, localize, options) {
    var hours = date.getUTCHours();

    if (hours === 0) {
      hours = 24;
    }

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Minute
  m: function (date, token, localize, options) {
    var minutes = date.getUTCMinutes();

    if (token === 'mo') {
      return localize.ordinalNumber(minutes, {unit: 'minute'})
    }

    return addLeadingZeros(minutes, token.length)
  },

  // Second
  s: function (date, token, localize, options) {
    var seconds = date.getUTCSeconds();

    if (token === 'so') {
      return localize.ordinalNumber(seconds, {unit: 'second'})
    }

    return addLeadingZeros(seconds, token.length)
  },

  // Fraction of second
  S: function (date, token, localize, options) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, numberOfDigits)
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z'
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (GMT)
  O: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Seconds timestamp
  t: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length)
  },

  // Milliseconds timestamp
  T: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length)
  }
};

function addLeadingZeros (number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output
}

function formatTimezone (offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimeter + minutes
}

function formatTimezoneWithOptionalMinutes (offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2)
  }
  return formatTimezone(offset, dirtyDelimeter)
}

function formatTimezoneShort (offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours)
  }
  var delimeter = dirtyDelimeter || '';
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2)
}

function dateLongFormatter (pattern, formatLong, options) {
  switch (pattern) {
    case 'P':
      return formatLong.date({width: 'short'})
    case 'PP':
      return formatLong.date({width: 'medium'})
    case 'PPP':
      return formatLong.date({width: 'long'})
    case 'PPPP':
    default:
      return formatLong.date({width: 'full'})
  }
}

function timeLongFormatter (pattern, formatLong, options) {
  switch (pattern) {
    case 'p':
      return formatLong.time({width: 'short'})
    case 'pp':
      return formatLong.time({width: 'medium'})
    case 'ppp':
      return formatLong.time({width: 'long'})
    case 'pppp':
    default:
      return formatLong.time({width: 'full'})
  }
}

function dateTimeLongFormatter (pattern, formatLong, options) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong)
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({width: 'short'});
      break
    case 'PP':
      dateTimeFormat = formatLong.dateTime({width: 'medium'});
      break
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({width: 'long'});
      break
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({width: 'full'});
      break
  }

  return dateTimeFormat
    .replace('{{date}}', dateLongFormatter(datePattern, formatLong))
    .replace('{{time}}', timeLongFormatter(timePattern, formatLong))
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount, dirtyOptions)
}

var protectedTokens = ['D', 'DD', 'YY', 'YYYY'];

function isProtectedToken(token) {
  return protectedTokens.indexOf(token) !== -1
}

function throwProtectedError(token) {
  throw new RangeError(
    '`options.awareOfUnicodeTokens` must be set to `true` to use `' +
      token +
      '` token; see: https://git.io/fxCyr'
  )
}

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 8     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 8     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens (`yy`, `yyyy`).
 *   See: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see: https://git.io/fxCyr
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/dd/yyyy'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   "do 'de' MMMM yyyy",
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(
 *   new Date(2014, 6, 2, 15),
 *   "h 'o''clock'"
 * )
 * //=> "3 o'clock"
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale = options.locale || locale$1;

  var localeFirstWeekContainsDate =
    locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var originalDate = toDate(dirtyDate, options);

  if (!isValid(originalDate, options)) {
    return 'Invalid Date'
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset, options);

  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };

  var result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong, formatterOptions)
      }
      return substring
    })
    .join('')
    .match(formattingTokensRegExp)
    .map(function(substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring)
      }

      var formatter = formatters[firstCharacter];
      if (formatter) {
        if (!options.awareOfUnicodeTokens && isProtectedToken(substring)) {
          throwProtectedError(substring);
        }
        return formatter(utcDate, substring, locale.localize, formatterOptions)
      }

      return substring
    })
    .join('');

  return result
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime()
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime()
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$1 (dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime()
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay (dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = toInteger(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCWeek (dirtyDate, dirtyWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, dirtyOptions) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay (dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek (dirtyDate, dirtyISOWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

var MILLISECONDS_IN_HOUR$1 = 3600000;
var MILLISECONDS_IN_MINUTE$2 = 60000;
var MILLISECONDS_IN_SECOND = 1000;

var numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};

var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern (pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null
  }

  var value = parseInt(matchResult[0], 10);

  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  }
}

function parseTimezonePattern (pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null
  }

  // Input is 'Z'
  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    }
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value: sign * (
      hours * MILLISECONDS_IN_HOUR$1 +
        minutes * MILLISECONDS_IN_MINUTE$2 +
        seconds * MILLISECONDS_IN_SECOND
    ),
    rest: string.slice(matchResult[0].length)
  }
}

function parseAnyDigitsSigned (string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback)
}

function parseNDigits (n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback)
    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback)
  }
}

function parseNDigitsSigned (n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback)
    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback)
  }
}

function dayPeriodEnumToHours (enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4
    case 'evening':
      return 17
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0
  }
}

function normalizeTwoDigitYear (twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result
}

var DAYS_IN_MONTH$1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR$1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// User for validation
function isLeapYearIndex$1 (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {width: 'abbreviated'}) ||
            match.era(string, {width: 'narrow'})
        // A, B
        case 'GGGGG':
          return match.era(string, {width: 'narrow'})
        // Anno Domini, Before Christ
        case 'GGGG':
        default:
          return match.era(string, {width: 'wide'}) ||
            match.era(string, {width: 'abbreviated'}) ||
            match.era(string, {width: 'narrow'})
      }
    },
    set: function (date, value, options) {
      // Sets year 10 BC if BC, or 10 AC if AC
      date.setUTCFullYear(value === 1 ? 10 : -9, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    priority: 130,
    parse: function (string, token, match, options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        }
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback)
        case 'yo':
          return match.ordinalNumber(string, {unit: 'year', valueCallback: valueCallback})
        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (date, value, options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        }
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback)
        case 'Yo':
          return match.ordinalNumber(string, {unit: 'year', valueCallback: valueCallback})
        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (date, value, options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, value, options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options)
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options)
    }
  },

  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, match, options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (date, value, options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear)
    }
  },

  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, match, options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (date, value, options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ': // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return match.ordinalNumber(string, {unit: 'quarter'})
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return match.quarter(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.quarter(string, {width: 'narrow', context: 'formatting'})
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return match.quarter(string, {width: 'narrow', context: 'formatting'})
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return match.quarter(string, {width: 'wide', context: 'formatting'}) ||
            match.quarter(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.quarter(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 4
    },
    set: function (date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq': // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th
        case 'qo':
          return match.ordinalNumber(string, {unit: 'quarter'})
        // Q1, Q2, Q3, Q4
        case 'qqq':
          return match.quarter(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.quarter(string, {width: 'narrow', context: 'standalone'})
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'qqqqq':
          return match.quarter(string, {width: 'narrow', context: 'standalone'})
        // 1st quarter, 2nd quarter, ...
        case 'qqqq':
        default:
          return match.quarter(string, {width: 'wide', context: 'standalone'}) ||
            match.quarter(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.quarter(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 4
    },
    set: function (date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return value - 1
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12
        case 'MM':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th
        case 'Mo':
          return match.ordinalNumber(string, {unit: 'month', valueCallback: valueCallback})
        // Jan, Feb, ..., Dec
        case 'MMM':
          return match.month(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.month(string, {width: 'narrow', context: 'formatting'})
        // J, F, ..., D
        case 'MMMMM':
          return match.month(string, {width: 'narrow', context: 'formatting'})
        // January, February, ..., December
        case 'MMMM':
        default:
          return match.month(string, {width: 'wide', context: 'formatting'}) ||
            match.month(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.month(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return value - 1
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12
        case 'LL':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th
        case 'Lo':
          return match.ordinalNumber(string, {unit: 'month', valueCallback: valueCallback})
        // Jan, Feb, ..., Dec
        case 'LLL':
          return match.month(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.month(string, {width: 'narrow', context: 'standalone'})
        // J, F, ..., D
        case 'LLLLL':
          return match.month(string, {width: 'narrow', context: 'standalone'})
        // January, February, ..., December
        case 'LLLL':
        default:
          return match.month(string, {width: 'wide', context: 'standalone'}) ||
            match.month(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.month(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string)
        case 'wo':
          return match.ordinalNumber(string, {unit: 'week'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 53
    },
    set: function (date, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options)
    }
  },

  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string)
        case 'Io':
          return match.ordinalNumber(string, {unit: 'week'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 53
    },
    set: function (date, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options)
    }
  },

  // Day of the month
  d: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string)
        case 'do':
          return match.ordinalNumber(string, {unit: 'date'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR$1[month]
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH$1[month]
      }
    },
    set: function (date, value, options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Day of year
  D: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string)
        case 'Do':
          return match.ordinalNumber(string, {unit: 'date'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366
      } else {
        return value >= 1 && value <= 365
      }
    },
    set: function (date, value, options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
        // T
        case 'EEEEE':
          return match.day(string, {width: 'narrow', context: 'formatting'})
        // Tu
        case 'EEEEEE':
          return match.day(string, {width: 'short', context: 'formatting'}) ||
          match.day(string, {width: 'narrow', context: 'formatting'})
        // Tuesday
        case 'EEEE':
        default:
          return match.day(string, {width: 'wide', context: 'formatting'}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee': // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd
        case 'eo':
          return match.ordinalNumber(string, {unit: 'day', valueCallback: valueCallback})
        // Tue
        case 'eee':
          return match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
        // T
        case 'eeeee':
          return match.day(string, {width: 'narrow', context: 'formatting'})
        // Tu
        case 'eeeeee':
          return match.day(string, {width: 'short', context: 'formatting'}) ||
          match.day(string, {width: 'narrow', context: 'formatting'})
        // Tuesday
        case 'eeee':
        default:
          return match.day(string, {width: 'wide', context: 'formatting'}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc': // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd
        case 'co':
          return match.ordinalNumber(string, {unit: 'day', valueCallback: valueCallback})
        // Tue
        case 'ccc':
          return match.day(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.day(string, {width: 'short', context: 'standalone'}) ||
            match.day(string, {width: 'narrow', context: 'standalone'})
        // T
        case 'ccccc':
          return match.day(string, {width: 'narrow', context: 'standalone'})
        // Tu
        case 'cccccc':
          return match.day(string, {width: 'short', context: 'standalone'}) ||
          match.day(string, {width: 'narrow', context: 'standalone'})
        // Tuesday
        case 'cccc':
        default:
          return match.day(string, {width: 'wide', context: 'standalone'}) ||
            match.day(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.day(string, {width: 'short', context: 'standalone'}) ||
            match.day(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7
        }
        return value
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii': // 02
          return parseNDigits(token.length, string)
        // 2nd
        case 'io':
          return match.ordinalNumber(string, {unit: 'day'})
        // Tue
        case 'iii':
          return match.day(string, {width: 'abbreviated', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // T
        case 'iiiii':
          return match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // Tu
        case 'iiiiii':
          return match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
          match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // Tuesday
        case 'iiii':
        default:
          return match.day(string, {width: 'wide', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 7
    },
    set: function (date, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'aaaaa':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'aaaa':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'bbbbb':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'bbbb':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'BBBBB':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'BBBB':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string)
        case 'ho':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 12
    },
    set: function (date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date
    }
  },

  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string)
        case 'Ho':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 23
    },
    set: function (date, value, options) {
      date.setUTCHours(value, 0, 0, 0);
      return date
    }
  },

  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string)
        case 'Ko':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date
    }
  },

  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string)
        case 'ko':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 24
    },
    set: function (date, value, options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date
    }
  },

  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string)
        case 'mo':
          return match.ordinalNumber(string, {unit: 'minute'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 59
    },
    set: function (date, value, options) {
      date.setUTCMinutes(value, 0, 0);
      return date
    }
  },

  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string)
        case 'so':
          return match.ordinalNumber(string, {unit: 'second'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 59
    },
    set: function (date, value, options) {
      date.setUTCSeconds(value, 0);
      return date
    }
  },

  // Fraction of second
  S: {
    priority: 40,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3))
      };
      return parseNDigits(token.length, string, valueCallback)
    },
    set: function (date, value, options) {
      date.setUTCMilliseconds(value);
      return date
    }
  },

  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 20,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)
        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string)
        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)
        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)
        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, value, options) {
      return new Date(date.getTime() - value)
    }
  },

  // Timezone (ISO-8601)
  x: {
    priority: 20,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)
        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string)
        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)
        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)
        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, value, options) {
      return new Date(date.getTime() - value)
    }
  },

  // Seconds timestamp
  t: {
    priority: 10,
    parse: function (string, token, match, options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (date, value, options) {
      return new Date(value * 1000)
    }
  },

  // Milliseconds timestamp
  T: {
    priority: 10,
    parse: function (string, token, match, options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (date, value, options) {
      return new Date(value)
    }
  }
};

var TIMEZONE_UNIT_PRIORITY = 20;

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp$1 = /^'(.*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;

var notWhitespaceRegExp = /\S/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 6     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 6     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              |  40 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  20 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  20 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Seconds timestamp               |  10 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Milliseconds timestamp          |  10 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `baseDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *
 * 6. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - defines values missing from the parsed dateString
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens (`yy`, `yyyy`).
 *   See: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see: https://git.io/fxCyr
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/dd/yyyy',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   "do 'de' MMMM",
 *   new Date(2010, 0, 1),
 *   {locale: eo}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(
  dirtyDateString,
  dirtyFormatString,
  dirtyBaseDate,
  dirtyOptions
) {
  if (arguments.length < 3) {
    throw new TypeError(
      '3 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};

  var locale = options.locale || locale$1;

  if (!locale.match) {
    throw new RangeError('locale must contain match property')
  }

  var localeFirstWeekContainsDate =
    locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBaseDate, options)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  };

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [
    {
      priority: TIMEZONE_UNIT_PRIORITY,
      set: dateToSystemTimezone,
      index: 0
    }
  ];

  var i;

  var tokens = formatString.match(formattingTokensRegExp$1);

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.awareOfUnicodeTokens && isProtectedToken(token)) {
      throwProtectedError(token);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];
    if (parser) {
      var parseResult = parser.parse(
        dateString,
        token,
        locale.match,
        subFnOptions
      );

      if (!parseResult) {
        return new Date(NaN)
      }

      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });

      dateString = parseResult.rest;
    } else {
      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN)
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN)
  }

  var uniquePrioritySetters = setters
    .map(function(setter) {
      return setter.priority
    })
    .sort(function(a, b) {
      return b - a
    })
    .filter(function(priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function(priority) {
      return setters
        .filter(function(setter) {
          return setter.priority === priority
        })
        .reverse()
    })
    .map(function(setterArray) {
      return setterArray[0]
    });

  var date = toDate(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (
      setter.validate &&
      !setter.validate(utcDate, setter.value, subFnOptions)
    ) {
      return new Date(NaN)
    }

    utcDate = setter.set(utcDate, setter.value, subFnOptions);
  }

  return utcDate
}

function dateToSystemTimezone(date) {
  var convertedDate = new Date(0);
  convertedDate.setFullYear(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  convertedDate.setHours(
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  return convertedDate
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'")
}

// 

/**
 * Custom parse behavior on top of date-fns parse function.
 */
function parseDate$1 (date, format$1) {
  if (typeof date !== 'string') {
    return isValid(date) ? date : null;
  }

  var parsed = parse(date, format$1, new Date());

  // if date is not valid or the formatted output after parsing does not match
  // the string value passed in (avoids overflows)
  if (!isValid(parsed) || format(parsed, format$1) !== date) {
    return null;
  }

  return parsed;
}

var afterValidator = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var targetValue = ref.targetValue;
  var inclusion = ref.inclusion; if ( inclusion === void 0 ) inclusion = false;
  var format = ref.format;

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }

  value = parseDate$1(value, format);
  targetValue = parseDate$1(targetValue, format);

  // if either is not valid.
  if (!value || !targetValue) {
    return false;
  }

  return isAfter(value, targetValue) || (inclusion && isEqual$1(value, targetValue));
};

var options = {
  hasTarget: true,
  isDate: true
};

// required to convert from a list of array values to an object.
var paramNames = ['targetValue', 'inclusion', 'format'];

var after = {
  validate: afterValidator,
  options: options,
  paramNames: paramNames
};

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i
};

var validate = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alpha).some(function (loc) { return alpha[loc].test(value); });
  }

  return (alpha[locale] || alpha.en).test(value);
};

var paramNames$1 = ['locale'];

var alpha$1 = {
  validate: validate,
  paramNames: paramNames$1
};

var validate$1 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$1(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var paramNames$2 = ['locale'];

var alpha_dash = {
  validate: validate$1,
  paramNames: paramNames$2
};

var validate$2 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$2(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var paramNames$3 = ['locale'];

var alpha_num = {
  validate: validate$2,
  paramNames: paramNames$3
};

var validate$3 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var locale = ref.locale;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$3(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var paramNames$4 = ['locale'];

var alpha_spaces = {
  validate: validate$3,
  paramNames: paramNames$4
};

var validate$4 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var targetValue = ref.targetValue;
  var inclusion = ref.inclusion; if ( inclusion === void 0 ) inclusion = false;
  var format = ref.format;

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }

  value = parseDate$1(value, format);
  targetValue = parseDate$1(targetValue, format);

  // if either is not valid.
  if (!value || !targetValue) {
    return false;
  }

  return isBefore(value, targetValue) || (inclusion && isEqual$1(value, targetValue));
};

var options$1 = {
  hasTarget: true,
  isDate: true
};

var paramNames$5 = ['targetValue', 'inclusion', 'format'];

var before = {
  validate: validate$4,
  options: options$1,
  paramNames: paramNames$5
};

var validate$5 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var min = ref.min;
  var max = ref.max;

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$5(val, { min: min, max: max }); });
  }

  return Number(min) <= value && Number(max) >= value;
};

var paramNames$6 = ['min', 'max'];

var between = {
  validate: validate$5,
  paramNames: paramNames$6
};

var validate$6 = function (value, ref) {
  var targetValue = ref.targetValue;

  return String(value) === String(targetValue);
};
var options$2 = {
  hasTarget: true
};

var paramNames$7 = ['targetValue'];

var confirmed = {
  validate: validate$6,
  options: options$2,
  paramNames: paramNames$7
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType;

    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = _typeof(input);

      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = "a ".concat(invalidType);
      }
    }

    throw new TypeError("Expected string but received ".concat(invalidType, "."));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(assertString_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isCreditCard = unwrapExports(isCreditCard_1);

var validate$7 = function (value) { return isCreditCard(String(value)); };

var credit_card = {
  validate: validate$7
};

var validate$8 = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var min = ref.min;
  var max = ref.max;
  var inclusivity = ref.inclusivity; if ( inclusivity === void 0 ) inclusivity = '()';
  var format = ref.format;

  if (typeof format === 'undefined') {
    format = inclusivity;
    inclusivity = '()';
  }

  var minDate = parseDate$1(String(min), format);
  var maxDate = parseDate$1(String(max), format);
  var dateVal = parseDate$1(String(value), format);

  if (!minDate || !maxDate || !dateVal) {
    return false;
  }

  if (inclusivity === '()') {
    return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
  }

  if (inclusivity === '(]') {
    return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
  }

  if (inclusivity === '[)') {
    return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate));
  }

  return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) ||
    (isBefore(dateVal, maxDate) && isAfter(dateVal, minDate));
};

var options$3 = {
  isDate: true
};

var paramNames$8 = ['min', 'max', 'inclusivity', 'format'];

var date_between = {
  validate: validate$8,
  options: options$3,
  paramNames: paramNames$8
};

var validate$9 = function (value, ref) {
  var format = ref.format;

  return !!parseDate$1(value, format);
};

var options$4 = {
  isDate: true
};

var paramNames$9 = ['format'];

var date_format = {
  validate: validate$9,
  options: options$4,
  paramNames: paramNames$9
};

var validate$a = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var decimals = ref.decimals; if ( decimals === void 0 ) decimals = '*';
  var separator = ref.separator; if ( separator === void 0 ) separator = '.';

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$a(val, { decimals: decimals, separator: separator }); });
  }

  // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }

  var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
  var regex = new RegExp(("^[-+]?\\d*(\\" + separator + "\\d" + regexPart + ")?([eE]{1}[-]?\\d+)?$"));

  if (! regex.test(value)) {
    return false;
  }

  var parsedValue = parseFloat(value);

  // eslint-disable-next-line
  return parsedValue === parsedValue;
};

var paramNames$a = ['decimals', 'separator'];

var decimal = {
  validate: validate$a,
  paramNames: paramNames$a
};

var validate$b = function (value, ref) {
  var length = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$b(val, [length]); });
  }
  var strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var digits = {
  validate: validate$b
};

var imageRegex = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () { return resolve({ valid: false }); };
    image.onload = function () { return resolve({
      valid: image.width === Number(width) && image.height === Number(height)
    }); };

    image.src = URL.createObjectURL(file);
  });
};

var validate$c = function (files, ref) {
  var width = ref[0];
  var height = ref[1];

  var images = ensureArray(files).filter(function (file) { return imageRegex.test(file.name); });
  if (images.length === 0) {
    return false;
  }
  return Promise.all(images.map(function (image) { return validateImage(image, width, height); }));
};

var dimensions = {
  validate: validate$c
};

var merge_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isByteLength;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;
});

unwrapExports(isByteLength_1);

var isFQDN_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(assertString_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }

  if (options.require_tld) {
    var tld = parts.pop();

    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }

  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];

    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }

    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isFQDN = unwrapExports(isFQDN_1);

var isIP_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) ; else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isIP = unwrapExports(isIP_1);

var isEmail_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(assertString_1);

var _merge = _interopRequireDefault(merge_1);

var _isByteLength = _interopRequireDefault(isByteLength_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);

    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!(0, _isByteLength.default)(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  })) {
    return false;
  }

  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isEmail = unwrapExports(isEmail_1);

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var validate$d = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var multiple = ref.multiple; if ( multiple === void 0 ) multiple = false;
  var rest = objectWithoutProperties( ref, ["multiple"] );
  var options = rest;

  if (multiple && !Array.isArray(value)) {
    value = String(value).split(',').map(function (emailStr) { return emailStr.trim(); });
  }

  var validatorOptions = assign({}, options);

  if (Array.isArray(value)) {
    return value.every(function (val) { return isEmail(String(val), validatorOptions); });
  }

  return isEmail(String(value), validatorOptions);
};

var email = {
  validate: validate$d
};

var validate$e = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$e(val, options); });
  }

  return toArray(options).some(function (item) {
    // eslint-disable-next-line
    return item == value;
  });
};

var included = {
  validate: validate$e
};

var validate$f = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return !validate$e.apply(void 0, args);
};

var excluded = {
  validate: validate$f
};

var validate$g = function (files, extensions) {
  var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');
  return ensureArray(files).every(function (file) { return regex.test(file.name); });
};

var ext = {
  validate: validate$g
};

var validate$h = function (files) { return (Array.isArray(files) ? files : [files]).every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }); };

var image = {
  validate: validate$h
};

var validate$i = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var integer = {
  validate: validate$i
};

var validate$j = function (value, ref) {
  if ( ref === void 0 ) ref = {};
  var version = ref.version; if ( version === void 0 ) version = 4;

  if (isNullOrUndefined(value)) {
    value = '';
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return isIP(val, version); });
  }

  return isIP(value, version);
};

var paramNames$b = ['version'];

var ip = {
  validate: validate$j,
  paramNames: paramNames$b
};

var validate$k = function (value) {
  if (isNullOrUndefined(value)) {
    value = '';
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return (isIP(val, '') || isFQDN(val)); });
  }

  return isIP(value, '') || isFQDN(value);
};

var ip_or_fqdn = {
  validate: validate$k
};

var validate$l = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var other = ref[0];

  return value === other;
};

var is = {
  validate: validate$l
};

var validate$m = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var other = ref[0];

  return value !== other;
};

var is_not = {
  validate: validate$m
};

/**
 * @param {Array|String} value
 * @param {Number} length
 * @param {Number} max
 */
var compare = function (value, length, max) {
  if (max === undefined) {
    return value.length === length;
  }

  // cast to number.
  max = Number(max);

  return value.length >= length && value.length <= max;
};

var validate$n = function (value, ref) {
  var length = ref[0];
  var max = ref[1]; if ( max === void 0 ) max = undefined;

  if (isNullOrUndefined(value)) {
    return false;
  }

  length = Number(length);
  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return compare(value, length, max);
};

var length = {
  validate: validate$n
};

var validate$o = function (value, ref) {
  var length = ref[0];

  if (isNullOrUndefined(value)) {
    return length >= 0;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$o(val, [length]); });
  }

  return String(value).length <= length;
};

var max = {
  validate: validate$o
};

var validate$p = function (value, ref) {
  var max = ref[0];

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) { return validate$p(val, [max]); });
  }

  return Number(value) <= max;
};

var max_value = {
  validate: validate$p
};

var validate$q = function (files, mimes) {
  var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');
  return ensureArray(files).every(function (file) { return regex.test(file.type); });
};

var mimes = {
  validate: validate$q
};

var validate$r = function (value, ref) {
  var length = ref[0];

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$r(val, [length]); });
  }

  return String(value).length >= length;
};

var min = {
  validate: validate$r
};

var validate$s = function (value, ref) {
  var min = ref[0];

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) { return validate$s(val, [min]); });
  }

  return Number(value) >= min;
};

var min_value = {
  validate: validate$s
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;

var validate$t = function (value) {
  var testValue = function (val) {
    var strValue = String(val);

    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

var numeric = {
  validate: validate$t
};

var validate$u = function (value, ref) {
  var expression = ref.expression;

  if (typeof expression === 'string') {
    expression = new RegExp(expression);
  }

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$u(val, { expression: expression }); });
  }

  return expression.test(String(value));
};

var paramNames$c = ['expression'];

var regex = {
  validate: validate$u,
  paramNames: paramNames$c
};

var validate$v = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var invalidateFalse = ref[0]; if ( invalidateFalse === void 0 ) invalidateFalse = false;

  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return false;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  if (value === false && invalidateFalse) {
    return false;
  }

  return !!String(value).trim().length;
};

var required = {
  validate: validate$v
};

var validate$w = function (value, ref) {
  if ( ref === void 0 ) ref = [];
  var otherFieldVal = ref[0];
  var possibleVals = ref.slice(1);

  var required = possibleVals.includes(String(otherFieldVal).trim());

  if (!required) {
    return {
      valid: true,
      data: {
        required: required
      }
    };
  }

  var invalid = (isEmptyArray(value) || [false, null, undefined].includes(value));

  invalid = invalid || !String(value).trim().length;

  return {
    valid: !invalid,
    data: {
      required: required
    }
  };
};

var options$5 = {
  hasTarget: true,
  computesRequired: true
};

var required_if = {
  validate: validate$w,
  options: options$5
};

var validate$x = function (files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false;
  }
  var nSize = Number(size) * 1024;
  return ensureArray(files).every(function (file) { return file.size <= nSize; });
};

var size = {
  validate: validate$x
};

var isURL_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(assertString_1);

var _isFQDN = _interopRequireDefault(isFQDN_1);

var _isIP = _interopRequireDefault(isIP_1);

var _merge = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;
});

var isURL = unwrapExports(isURL_1);

var validate$y = function (value, options) {
  if ( options === void 0 ) options = {};

  if (isNullOrUndefined(value)) {
    value = '';
  }

  var validatorOptions = assign({}, options);

  if (Array.isArray(value)) {
    return value.every(function (val) { return isURL(val, validatorOptions); });
  }

  return isURL(value, validatorOptions);
};

var url = {
  validate: validate$y
};

/* eslint-disable camelcase */

var Rules = /*#__PURE__*/Object.freeze({
  after: after,
  alpha_dash: alpha_dash,
  alpha_num: alpha_num,
  alpha_spaces: alpha_spaces,
  alpha: alpha$1,
  before: before,
  between: between,
  confirmed: confirmed,
  credit_card: credit_card,
  date_between: date_between,
  date_format: date_format,
  decimal: decimal,
  digits: digits,
  dimensions: dimensions,
  email: email,
  ext: ext,
  image: image,
  included: included,
  integer: integer,
  length: length,
  ip: ip,
  ip_or_fqdn: ip_or_fqdn,
  is_not: is_not,
  is: is,
  max: max,
  max_value: max_value,
  mimes: mimes,
  min: min,
  min_value: min_value,
  excluded: excluded,
  numeric: numeric,
  regex: regex,
  required: required,
  required_if: required_if,
  size: size,
  url: url
});

// 

var normalize = function (fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (includes(curr, '.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev;
    }, {});
  }

  return fields;
};

// Combines two flags using either AND or OR depending on the flag type.
var combine = function (lhs, rhs) {
  var mapper = {
    pristine: function (lhs, rhs) { return lhs && rhs; },
    dirty: function (lhs, rhs) { return lhs || rhs; },
    touched: function (lhs, rhs) { return lhs || rhs; },
    untouched: function (lhs, rhs) { return lhs && rhs; },
    valid: function (lhs, rhs) { return lhs && rhs; },
    invalid: function (lhs, rhs) { return lhs || rhs; },
    pending: function (lhs, rhs) { return lhs || rhs; },
    required: function (lhs, rhs) { return lhs || rhs; },
    validated: function (lhs, rhs) { return lhs && rhs; }
  };

  return Object.keys(mapper).reduce(function (flags, flag) {
    flags[flag] = mapper[flag](lhs[flag], rhs[flag]);

    return flags;
  }, {});
};

var mapScope = function (scope, deep) {
  if ( deep === void 0 ) deep = true;

  return Object.keys(scope).reduce(function (flags, field) {
    if (!flags) {
      flags = assign({}, scope[field]);
      return flags;
    }

    // scope.
    var isScope = field.indexOf('$') === 0;
    if (deep && isScope) {
      return combine(mapScope(scope[field]), flags);
    } else if (!deep && isScope) {
      return flags;
    }

    flags = combine(flags, scope[field]);

    return flags;
  }, null);
};

/**
 * Maps fields to computed functions.
 */
var mapFields = function (fields) {
  if (!fields) {
    return function () {
      return mapScope(this.$validator.flags);
    };
  }

  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField () {
      // if field exists
      if (this.$validator.flags[field]) {
        return this.$validator.flags[field];
      }

      // scopeless fields were selected.
      if (normalized[curr] === '*') {
        return mapScope(this.$validator.flags, false);
      }

      // if it has a scope defined
      var index = field.indexOf('.');
      if (index <= 0) {
        return {};
      }

      var ref = field.split('.');
      var scope = ref[0];
      var name = ref.slice(1);

      scope = this.$validator.flags[("$" + scope)];
      name = name.join('.');

      // an entire scope was selected: scope.*
      if (name === '*' && scope) {
        return mapScope(scope);
      }

      if (scope && scope[name]) {
        return scope[name];
      }

      return {};
    };

    return prev;
  }, {});
};

var $validator = null;

var PROVIDER_COUNTER = 0;

var ValidationProvider = {
  $__veeInject: false,
  inject: {
    $_veeObserver: {
      from: '$_veeObserver',
      default: function default$1 () {
        if (!this.$vnode.context.$_veeObserver) {
          this.$vnode.context.$_veeObserver = createObserver();
        }

        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    vid: {
      type: [String, Number],
      default: function () {
        PROVIDER_COUNTER++;

        return ("_vee_" + PROVIDER_COUNTER);
      }
    },
    name: {
      type: String,
      default: null
    },
    mode: {
      type: [String, Function],
      default: function () {
        return getConfig().mode;
      }
    },
    events: {
      type: Array,
      validate: function () {
        /* istanbul ignore next */
        if (true) {
          warn('events prop and config will be deprecated in future version please use the interaction modes instead');
        }

        return true;
      },
      default: function () {
        var events = getConfig().events;
        if (typeof events === 'string') {
          return events.split('|');
        }

        return events;
      }
    },
    rules: {
      type: [Object, String],
      default: null
    },
    immediate: {
      type: Boolean,
      default: false
    },
    persist: {
      type: Boolean,
      default: false
    },
    bails: {
      type: Boolean,
      default: function () { return getConfig().fastExit; }
    },
    debounce: {
      type: Number,
      default: function () { return getConfig().delay || 0; }
    },
    tag: {
      type: String,
      default: 'span'
    },
    slim: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    rules: {
      deep: true,
      handler: function handler (val, oldVal) {
        this._needsValidation = !isEqual(val, oldVal);
      }
    }
  },
  data: function () { return ({
    messages: [],
    value: undefined,
    initialized: false,
    initialValue: undefined,
    flags: createFlags(),
    failedRules: {},
    forceRequired: false,
    isDeactivated: false,
    id: null
  }); },
  computed: {
    isValid: function isValid () {
      return this.flags.valid;
    },
    fieldDeps: function fieldDeps () {
      var this$1 = this;

      var rules = normalizeRules(this.rules);

      return Object.keys(rules).filter(RuleContainer.isTargetRule).map(function (rule) {
        var depName = rules[rule][0];
        watchCrossFieldDep(this$1, depName);

        return depName;
      });
    },
    normalizedEvents: function normalizedEvents () {
      var this$1 = this;

      var ref = computeModeSetting(this);
      var on = ref.on;

      return normalizeEvents(on || this.events || []).map(function (e) {
        if (e === 'input') {
          return this$1._inputEventName;
        }

        return e;
      });
    },
    isRequired: function isRequired () {
      var rules = normalizeRules(this.rules);
      var forceRequired = this.forceRequired;

      var isRequired = rules.required || forceRequired;
      this.flags.required = isRequired;

      return isRequired;
    },
    classes: function classes () {
      var this$1 = this;

      var names = getConfig().classNames;
      return Object.keys(this.flags).reduce(function (classes, flag) {
        var className = (names && names[flag]) || flag;
        if (isNullOrUndefined(this$1.flags[flag])) {
          return classes;
        }

        if (className) {
          classes[className] = this$1.flags[flag];
        }

        return classes;
      }, {});
    }
  },
  render: function render (h) {
    var this$1 = this;

    this.registerField();
    var ctx = createValidationCtx(this);

    // Gracefully handle non-existent scoped slots.
    var slot = this.$scopedSlots.default;
    /* istanbul ignore next */
    if (!isCallable(slot)) {
      if (true) {
        warn('ValidationProvider expects a scoped slot. Did you forget to add "v-slot" to your slot?');
      }

      return h(this.tag, this.$slots.default);
    }

    var nodes = slot(ctx);
    // Handle single-root slot.
    extractVNodes(nodes).forEach(function (input) {
      addListeners.call(this$1, input);
    });

    return this.slim ? createRenderless(h, nodes) : h(this.tag, nodes);
  },
  beforeDestroy: function beforeDestroy () {
    // cleanup reference.
    this.$_veeObserver.unsubscribe(this);
  },
  activated: function activated () {
    this.$_veeObserver.subscribe(this);
    this.isDeactivated = false;
  },
  deactivated: function deactivated () {
    this.$_veeObserver.unsubscribe(this);
    this.isDeactivated = true;
  },
  methods: {
    setFlags: function setFlags (flags) {
      var this$1 = this;

      Object.keys(flags).forEach(function (flag) {
        this$1.flags[flag] = flags[flag];
      });
    },
    syncValue: function syncValue (e) {
      var value = normalizeValue$1(e);
      this.value = value;
      this.flags.changed = this.initialValue !== value;
    },
    reset: function reset () {
      this.messages = [];
      this._pendingValidation = null;
      this.initialValue = this.value;
      var flags = createFlags();
      this.setFlags(flags);
    },
    validate: function validate () {
      var this$1 = this;
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (args.length > 0) {
        this.syncValue(args[0]);
      }

      return this.validateSilent().then(function (result) {
        this$1.applyResult(result);

        return result;
      });
    },
    validateSilent: function validateSilent () {
      var this$1 = this;

      this.setFlags({ pending: true });

      return $validator.verify(this.value, this.rules, {
        name: this.name,
        values: createValuesLookup(this),
        bails: this.bails
      }).then(function (result) {
        this$1.setFlags({ pending: false });
        if (!this$1.isRequired) {
          this$1.setFlags({ valid: result.valid, invalid: !result.valid });
        }

        return result;
      });
    },
    applyResult: function applyResult (ref) {
      var errors = ref.errors;
      var failedRules = ref.failedRules;

      this.messages = errors;
      this.failedRules = assign({}, failedRules);
      this.setFlags({
        valid: !errors.length,
        changed: this.value !== this.initialValue,
        invalid: !!errors.length,
        validated: true
      });
    },
    registerField: function registerField () {
      if (!$validator) {
        $validator = getValidator() || new Validator(null, { fastExit: getConfig().fastExit });
      }

      updateRenderingContextRefs(this);
    }
  }
};

function createValidationCtx (ctx) {
  return {
    errors: ctx.messages,
    flags: ctx.flags,
    classes: ctx.classes,
    valid: ctx.isValid,
    failedRules: ctx.failedRules,
    reset: function () { return ctx.reset(); },
    validate: function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return ctx.validate.apply(ctx, args);
  },
    aria: {
      'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
      'aria-required': ctx.isRequired ? 'true' : 'false'
    }
  };
}

function normalizeValue$1 (value) {
  if (isEvent(value)) {
    return value.target.type === 'file' ? toArray(value.target.files) : value.target.value;
  }

  return value;
}

/**
 * Determines if a provider needs to run validation.
 */
function shouldValidate (ctx, model) {
  // when an immediate/initial validation is needed and wasn't done before.
  if (!ctx._ignoreImmediate && ctx.immediate) {
    return true;
  }

  // when the value changes for whatever reason.
  if (ctx.value !== model.value) {
    return true;
  }

  // when it needs validation due to props/cross-fields changes.
  if (ctx._needsValidation) {
    return true;
  }

  // when the initial value is undefined and the field wasn't rendered yet.
  if (!ctx.initialized && model.value === undefined) {
    return true;
  }

  return false;
}

function computeModeSetting (ctx) {
  var compute = isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode];

  return compute({
    errors: ctx.messages,
    value: ctx.value,
    flags: ctx.flags
  });
}

function onRenderUpdate (model) {
  if (!this.initialized) {
    this.initialValue = model.value;
  }

  var validateNow = shouldValidate(this, model);
  this._needsValidation = false;
  this.value = model.value;
  this._ignoreImmediate = true;

  if (!validateNow) {
    return;
  }

  this.validateSilent().then(this.immediate || this.flags.validated ? this.applyResult : function (x) { return x; });
}

// Creates the common handlers for a validatable context.
function createCommonHandlers (ctx) {
  var onInput = function (e) {
    ctx.syncValue(e); // track and keep the value updated.
    ctx.setFlags({ dirty: true, pristine: false });
  };

  // Blur event listener.
  var onBlur = function () {
    ctx.setFlags({ touched: true, untouched: false });
  };

  var onValidate = ctx.$veeHandler;
  var mode = computeModeSetting(ctx);

  // Handle debounce changes.
  if (!onValidate || ctx.$veeDebounce !== ctx.debounce) {
    onValidate = debounce(
      function () {
        ctx.$nextTick(function () {
          var pendingPromise = ctx.validateSilent();
          // avoids race conditions between successive validations.
          ctx._pendingValidation = pendingPromise;
          pendingPromise.then(function (result) {
            if (pendingPromise === ctx._pendingValidation) {
              ctx.applyResult(result);
              ctx._pendingValidation = null;
            }
          });
        });
      },
      mode.debounce || ctx.debounce
    );

    // Cache the handler so we don't create it each time.
    ctx.$veeHandler = onValidate;
    // cache the debounce value so we detect if it was changed.
    ctx.$veeDebounce = ctx.debounce;
  }

  return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
}

// Adds all plugin listeners to the vnode.
function addListeners (node) {
  var model = findModel(node);
  // cache the input eventName.
  this._inputEventName = this._inputEventName || getInputEventName(node, model);

  onRenderUpdate.call(this, model);

  var ref = createCommonHandlers(this);
  var onInput = ref.onInput;
  var onBlur = ref.onBlur;
  var onValidate = ref.onValidate;
  addVNodeListener(node, this._inputEventName, onInput);
  addVNodeListener(node, 'blur', onBlur);

  // add the validation listeners.
  this.normalizedEvents.forEach(function (evt) {
    addVNodeListener(node, evt, onValidate);
  });

  this.initialized = true;
}

function createValuesLookup (ctx) {
  var providers = ctx.$_veeObserver.refs;

  return ctx.fieldDeps.reduce(function (acc, depName) {
    if (!providers[depName]) {
      return acc;
    }

    acc[depName] = providers[depName].value;

    return acc;
  }, {});
}

function updateRenderingContextRefs (ctx) {
  // IDs should not be nullable.
  if (isNullOrUndefined(ctx.id) && ctx.id === ctx.vid) {
    ctx.id = PROVIDER_COUNTER;
    PROVIDER_COUNTER++;
  }

  var id = ctx.id;
  var vid = ctx.vid;
  // Nothing has changed.
  if (ctx.isDeactivated || (id === vid && ctx.$_veeObserver.refs[id])) {
    return;
  }

  // vid was changed.
  if (id !== vid && ctx.$_veeObserver.refs[id] === ctx) {
    ctx.$_veeObserver.unsubscribe({ vid: id });
  }

  ctx.$_veeObserver.subscribe(ctx);
  ctx.id = vid;
}

function createObserver () {
  return {
    refs: {},
    subscribe: function subscribe (ctx) {
      this.refs[ctx.vid] = ctx;
    },
    unsubscribe: function unsubscribe (ctx) {
      delete this.refs[ctx.vid];
    }
  };
}

function watchCrossFieldDep (ctx, depName, withHooks) {
  if ( withHooks === void 0 ) withHooks = true;

  var providers = ctx.$_veeObserver.refs;
  if (!ctx._veeWatchers) {
    ctx._veeWatchers = {};
  }

  if (!providers[depName] && withHooks) {
    return ctx.$once('hook:mounted', function () {
      watchCrossFieldDep(ctx, depName, false);
    });
  }

  if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
    ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
      if (ctx.flags.validated) {
        ctx._needsValidation = true;
        ctx.validate();
      }
    });
  }
}

var flagMergingStrategy = {
  pristine: 'every',
  dirty: 'some',
  touched: 'some',
  untouched: 'every',
  valid: 'every',
  invalid: 'some',
  pending: 'some',
  validated: 'every'
};

function mergeFlags (lhs, rhs, strategy) {
  var stratName = flagMergingStrategy[strategy];

  return [lhs, rhs][stratName](function (f) { return f; });
}

var OBSERVER_COUNTER = 0;

var ValidationObserver = {
  name: 'ValidationObserver',
  provide: function provide () {
    return {
      $_veeObserver: this
    };
  },
  inject: {
    $_veeObserver: {
      from: '$_veeObserver',
      default: function default$1 () {
        if (!this.$vnode.context.$_veeObserver) {
          return null;
        }

        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    slim: {
      type: Boolean,
      default: false
    }
  },
  data: function () { return ({
    vid: ("obs_" + (OBSERVER_COUNTER++)),
    refs: {},
    observers: [],
    persistedStore: {}
  }); },
  computed: {
    ctx: function ctx () {
      var this$1 = this;

      var ctx = {
        errors: {},
        validate: function (arg) {
          var promise = this$1.validate(arg);

          return {
            then: function then (thenable) {
              return promise.then(function (success) {
                if (success && isCallable(thenable)) {
                  return Promise.resolve(thenable());
                }

                return Promise.resolve(success);
              });
            }
          };
        },
        reset: function () { return this$1.reset(); }
      };

      return values(this.refs).concat( Object.keys(this.persistedStore).map(function (key) {
          return {
            vid: key,
            flags: this$1.persistedStore[key].flags,
            messages: this$1.persistedStore[key].errors
          };
        }),
        this.observers ).reduce(function (acc, provider) {
        Object.keys(flagMergingStrategy).forEach(function (flag) {
          var flags = provider.flags || provider.ctx;
          if (!(flag in acc)) {
            acc[flag] = flags[flag];
            return;
          }

          acc[flag] = mergeFlags(acc[flag], flags[flag], flag);
        });

        acc.errors[provider.vid] = provider.messages || values(provider.ctx.errors).reduce(function (errs, obsErrors) {
          return errs.concat(obsErrors);
        }, []);

        return acc;
      }, ctx);
    }
  },
  created: function created () {
    if (this.$_veeObserver) {
      this.$_veeObserver.subscribe(this, 'observer');
    }
  },
  activated: function activated () {
    if (this.$_veeObserver) {
      this.$_veeObserver.subscribe(this, 'observer');
    }
  },
  deactivated: function deactivated () {
    if (this.$_veeObserver) {
      this.$_veeObserver.unsubscribe(this, 'observer');
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.$_veeObserver) {
      this.$_veeObserver.unsubscribe(this, 'observer');
    }
  },
  render: function render (h) {
    var slots = this.$slots.default || this.$scopedSlots.default || [];
    if (isCallable(slots)) {
      slots = slots(this.ctx);
    }

    return this.slim ? createRenderless(h, slots) : h(this.tag, { on: this.$listeners, attrs: this.$attrs }, slots);
  },
  methods: {
    subscribe: function subscribe (subscriber, kind) {
      var obj;

      if ( kind === void 0 ) kind = 'provider';
      if (kind === 'observer') {
        this.observers.push(subscriber);
        return;
      }

      this.refs = Object.assign({}, this.refs, ( obj = {}, obj[subscriber.vid] = subscriber, obj ));
      if (subscriber.persist && this.persistedStore[subscriber.vid]) {
        this.restoreProviderState(subscriber);
      }
    },
    unsubscribe: function unsubscribe (ref, kind) {
      var vid = ref.vid;
      if ( kind === void 0 ) kind = 'provider';

      if (kind === 'provider') {
        this.removeProvider(vid);
      }

      var idx = findIndex(this.observers, function (o) { return o.vid === vid; });
      if (idx !== -1) {
        this.observers.splice(idx, 1);
      }
    },
    validate: function validate (ref) {
      if ( ref === void 0 ) ref = { silent: false };
      var silent = ref.silent;

      return Promise.all(values(this.refs).map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }).concat( this.observers.map(function (obs) { return obs.validate({ silent: silent }); })
      )).then(function (results) { return results.every(function (r) { return r; }); });
    },
    reset: function reset () {
      var this$1 = this;

      Object.keys(this.persistedStore).forEach(function (key) {
        this$1.$delete(this$1.persistedStore, key);
      });
      return values(this.refs).concat( this.observers).forEach(function (ref) { return ref.reset(); });
    },
    restoreProviderState: function restoreProviderState (provider) {
      var state = this.persistedStore[provider.vid];
      provider.setFlags(state.flags);
      provider.applyResult(state);
      this.$delete(this.persistedStore, provider.vid);
    },
    removeProvider: function removeProvider (vid) {
      var obj;

      var provider = this.refs[vid];
      // save it for the next time.
      if (provider && provider.persist) {
        /* istanbul ignore else */
        if (true) {
          if (vid.indexOf('_vee_') === 0) {
            warn('Please provide a `vid` prop when using `persist`, there might be unexpected issues otherwise.');
          }
        }

        this.persistedStore = assign({}, this.persistedStore, ( obj = {}, obj[vid] = {
            flags: provider.flags,
            errors: provider.messages,
            failedRules: provider.failedRules
          }, obj ));
      }

      this.$delete(this.refs, vid);
    },
  }
};

function withValidation (component, ctxToProps) {
  if ( ctxToProps === void 0 ) ctxToProps = null;

  var options = isCallable(component) ? component.options : component;
  options.$__veeInject = false;
  var hoc = {
    name: ((options.name || 'AnonymousHoc') + "WithValidation"),
    props: assign({}, ValidationProvider.props),
    data: ValidationProvider.data,
    computed: assign({}, ValidationProvider.computed),
    methods: assign({}, ValidationProvider.methods),
    $__veeInject: false,
    beforeDestroy: ValidationProvider.beforeDestroy,
    inject: ValidationProvider.inject
  };

  // Default ctx converts ctx props to component props.
  if (!ctxToProps) {
    ctxToProps = function (ctx) { return ctx; };
  }

  var eventName = (options.model && options.model.event) || 'input';

  hoc.render = function (h) {
    var obj;

    this.registerField();
    var vctx = createValidationCtx(this);
    var listeners = assign({}, this.$listeners);

    var model = findModel(this.$vnode);
    this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
    onRenderUpdate.call(this, model);

    var ref = createCommonHandlers(this);
    var onInput = ref.onInput;
    var onBlur = ref.onBlur;
    var onValidate = ref.onValidate;

    mergeVNodeListeners(listeners, eventName, onInput);
    mergeVNodeListeners(listeners, 'blur', onBlur);
    this.normalizedEvents.forEach(function (evt, idx) {
      mergeVNodeListeners(listeners, evt, onValidate);
    });

    // Props are any attrs not associated with ValidationProvider Plus the model prop.
    // WARNING: Accidental prop overwrite will probably happen.
    var ref$1 = findModelConfig(this.$vnode) || { prop: 'value' };
    var prop = ref$1.prop;
    var props = assign({}, this.$attrs, ( obj = {}, obj[prop] = model.value, obj ), ctxToProps(vctx));

    return h(options, {
      attrs: this.$attrs,
      props: props,
      on: listeners
    }, normalizeSlots(this.$slots, this.$vnode.context));
  };

  return hoc;
}

var version = '2.2.15';

Object.keys(Rules).forEach(function (rule) {
  Validator.extend(rule, Rules[rule].validate, assign({}, Rules[rule].options, { paramNames: Rules[rule].paramNames }));
});

// Merge the english messages.
Validator.localize({ en: locale });

var install = VeeValidate$1.install;

VeeValidate$1.version = version;
VeeValidate$1.mapFields = mapFields;
VeeValidate$1.ValidationProvider = ValidationProvider;
VeeValidate$1.ValidationObserver = ValidationObserver;
VeeValidate$1.withValidation = withValidation;

/* harmony default export */ __webpack_exports__["default"] = (VeeValidate$1);



/***/ })

}]);