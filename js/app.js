(() => {
    var __webpack_modules__ = {
        80: module => {
            /**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
            (function(window) {
                "use strict";
                var mixitup = null, h = null;
                (function() {
                    var VENDORS = [ "webkit", "moz", "o", "ms" ], canary = window.document.createElement("div"), i = -1;
                    for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) window.requestAnimationFrame = window[VENDORS[i] + "RequestAnimationFrame"];
                    if (typeof canary.nextElementSibling === "undefined") Object.defineProperty(window.Element.prototype, "nextElementSibling", {
                        get: function() {
                            var el = this.nextSibling;
                            while (el) {
                                if (el.nodeType === 1) return el;
                                el = el.nextSibling;
                            }
                            return null;
                        }
                    });
                    (function(ElementPrototype) {
                        ElementPrototype.matches = ElementPrototype.matches || ElementPrototype.machesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || ElementPrototype.webkitMatchesSelector || function(selector) {
                            return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
                        };
                    })(window.Element.prototype);
                    if (!Object.keys) Object.keys = function() {
                        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = false, dontEnums = [], dontEnumsLength = -1;
                        hasDontEnumBug = !{
                            toString: null
                        }.propertyIsEnumerable("toString");
                        dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ];
                        dontEnumsLength = dontEnums.length;
                        return function(obj) {
                            var result = [], prop = "", i = -1;
                            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) throw new TypeError("Object.keys called on non-object");
                            for (prop in obj) if (hasOwnProperty.call(obj, prop)) result.push(prop);
                            if (hasDontEnumBug) for (i = 0; i < dontEnumsLength; i++) if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                            return result;
                        };
                    }();
                    if (!Array.isArray) Array.isArray = function(arg) {
                        return Object.prototype.toString.call(arg) === "[object Array]";
                    };
                    if (typeof Object.create !== "function") Object.create = function(undefined) {
                        var Temp = function() {};
                        return function(prototype, propertiesObject) {
                            if (prototype !== Object(prototype) && prototype !== null) throw TypeError("Argument must be an object, or null");
                            Temp.prototype = prototype || {};
                            var result = new Temp;
                            Temp.prototype = null;
                            if (propertiesObject !== undefined) Object.defineProperties(result, propertiesObject);
                            if (prototype === null) result.__proto__ = null;
                            return result;
                        };
                    }();
                    if (!String.prototype.trim) String.prototype.trim = function() {
                        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                    };
                    if (!Array.prototype.indexOf) Array.prototype.indexOf = function(searchElement) {
                        var n, k, t, len;
                        if (this === null) throw new TypeError;
                        t = Object(this);
                        len = t.length >>> 0;
                        if (len === 0) return -1;
                        n = 0;
                        if (arguments.length > 1) {
                            n = Number(arguments[1]);
                            if (n !== n) n = 0; else if (n !== 0 && n !== 1 / 0 && n !== -1 / 0) n = (n > 0 || -1) * Math.floor(Math.abs(n));
                        }
                        if (n >= len) return -1;
                        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) if (k in t && t[k] === searchElement) return k;
                        return -1;
                    };
                    if (!Function.prototype.bind) Function.prototype.bind = function(oThis) {
                        var aArgs, self, FNOP, fBound;
                        if (typeof this !== "function") throw new TypeError;
                        aArgs = Array.prototype.slice.call(arguments, 1);
                        self = this;
                        FNOP = function() {};
                        fBound = function() {
                            return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                        };
                        if (this.prototype) FNOP.prototype = this.prototype;
                        fBound.prototype = new FNOP;
                        return fBound;
                    };
                    if (!window.Element.prototype.dispatchEvent) window.Element.prototype.dispatchEvent = function(event) {
                        try {
                            return this.fireEvent("on" + event.type, event);
                        } catch (err) {}
                    };
                })();
                mixitup = function(container, config, foreignDoc) {
                    var el = null, returnCollection = false, instance = null, facade = null, doc = null, output = null, instances = [], id = "", elements = [], i = -1;
                    doc = foreignDoc || window.document;
                    if (returnCollection = arguments[3]) returnCollection = typeof returnCollection === "boolean";
                    if (typeof container === "string") elements = doc.querySelectorAll(container); else if (container && typeof container === "object" && h.isElement(container, doc)) elements = [ container ]; else if (container && typeof container === "object" && container.length) elements = container; else throw new Error(mixitup.messages.errorFactoryInvalidContainer());
                    if (elements.length < 1) throw new Error(mixitup.messages.errorFactoryContainerNotFound());
                    for (i = 0; el = elements[i]; i++) {
                        if (i > 0 && !returnCollection) break;
                        if (!el.id) {
                            id = "MixItUp" + h.randomHex();
                            el.id = id;
                        } else id = el.id;
                        if (mixitup.instances[id] instanceof mixitup.Mixer) {
                            instance = mixitup.instances[id];
                            if (!config || config && config.debug && config.debug.showWarnings !== false) console.warn(mixitup.messages.warningFactoryPreexistingInstance());
                        } else {
                            instance = new mixitup.Mixer;
                            instance.attach(el, doc, id, config);
                            mixitup.instances[id] = instance;
                        }
                        facade = new mixitup.Facade(instance);
                        if (config && config.debug && config.debug.enable) instances.push(instance); else instances.push(facade);
                    }
                    if (returnCollection) output = new mixitup.Collection(instances); else output = instances[0];
                    return output;
                };
                mixitup.use = function(extension) {
                    mixitup.Base.prototype.callActions.call(mixitup, "beforeUse", arguments);
                    if (typeof extension === "function" && extension.TYPE === "mixitup-extension") {
                        if (typeof mixitup.extensions[extension.NAME] === "undefined") {
                            extension(mixitup);
                            mixitup.extensions[extension.NAME] = extension;
                        }
                    } else if (extension.fn && extension.fn.jquery) mixitup.libraries.$ = extension;
                    mixitup.Base.prototype.callActions.call(mixitup, "afterUse", arguments);
                };
                mixitup.instances = {};
                mixitup.extensions = {};
                mixitup.libraries = {};
                h = {
                    hasClass: function(el, cls) {
                        return !!el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
                    },
                    addClass: function(el, cls) {
                        if (!this.hasClass(el, cls)) el.className += el.className ? " " + cls : cls;
                    },
                    removeClass: function(el, cls) {
                        if (this.hasClass(el, cls)) {
                            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
                            el.className = el.className.replace(reg, " ").trim();
                        }
                    },
                    extend: function(destination, source, deep, handleErrors) {
                        var sourceKeys = [], key = "", i = -1;
                        deep = deep || false;
                        handleErrors = handleErrors || false;
                        try {
                            if (Array.isArray(source)) for (i = 0; i < source.length; i++) sourceKeys.push(i); else if (source) sourceKeys = Object.keys(source);
                            for (i = 0; i < sourceKeys.length; i++) {
                                key = sourceKeys[i];
                                if (!deep || typeof source[key] !== "object" || this.isElement(source[key])) destination[key] = source[key]; else if (Array.isArray(source[key])) {
                                    if (!destination[key]) destination[key] = [];
                                    this.extend(destination[key], source[key], deep, handleErrors);
                                } else {
                                    if (!destination[key]) destination[key] = {};
                                    this.extend(destination[key], source[key], deep, handleErrors);
                                }
                            }
                        } catch (err) {
                            if (handleErrors) this.handleExtendError(err, destination); else throw err;
                        }
                        return destination;
                    },
                    handleExtendError: function(err, destination) {
                        var re = /property "?(\w*)"?[,:] object/i, matches = null, erroneous = "", message = "", suggestion = "", probableMatch = "", key = "", mostMatchingChars = -1, i = -1;
                        if (err instanceof TypeError && (matches = re.exec(err.message))) {
                            erroneous = matches[1];
                            for (key in destination) {
                                i = 0;
                                while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) i++;
                                if (i > mostMatchingChars) {
                                    mostMatchingChars = i;
                                    probableMatch = key;
                                }
                            }
                            if (mostMatchingChars > 1) suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                                probableMatch
                            });
                            message = mixitup.messages.errorConfigInvalidProperty({
                                erroneous,
                                suggestion
                            });
                            throw new TypeError(message);
                        }
                        throw err;
                    },
                    template: function(str) {
                        var re = /\${([\w]*)}/g, dynamics = {}, matches = null;
                        while (matches = re.exec(str)) dynamics[matches[1]] = new RegExp("\\${" + matches[1] + "}", "g");
                        return function(data) {
                            var key = "", output = str;
                            data = data || {};
                            for (key in dynamics) output = output.replace(dynamics[key], typeof data[key] !== "undefined" ? data[key] : "");
                            return output;
                        };
                    },
                    on: function(el, type, fn, useCapture) {
                        if (!el) return;
                        if (el.addEventListener) el.addEventListener(type, fn, useCapture); else if (el.attachEvent) {
                            el["e" + type + fn] = fn;
                            el[type + fn] = function() {
                                el["e" + type + fn](window.event);
                            };
                            el.attachEvent("on" + type, el[type + fn]);
                        }
                    },
                    off: function(el, type, fn) {
                        if (!el) return;
                        if (el.removeEventListener) el.removeEventListener(type, fn, false); else if (el.detachEvent) {
                            el.detachEvent("on" + type, el[type + fn]);
                            el[type + fn] = null;
                        }
                    },
                    getCustomEvent: function(eventType, detail, doc) {
                        var event = null;
                        doc = doc || window.document;
                        if (typeof window.CustomEvent === "function") event = new window.CustomEvent(eventType, {
                            detail,
                            bubbles: true,
                            cancelable: true
                        }); else if (typeof doc.createEvent === "function") {
                            event = doc.createEvent("CustomEvent");
                            event.initCustomEvent(eventType, true, true, detail);
                        } else {
                            event = doc.createEventObject(), event.type = eventType;
                            event.returnValue = false;
                            event.cancelBubble = false;
                            event.detail = detail;
                        }
                        return event;
                    },
                    getOriginalEvent: function(e) {
                        if (e.touches && e.touches.length) return e.touches[0]; else if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0]; else return e;
                    },
                    index: function(el, selector) {
                        var i = 0;
                        while ((el = el.previousElementSibling) !== null) if (!selector || el.matches(selector)) ++i;
                        return i;
                    },
                    camelCase: function(str) {
                        return str.toLowerCase().replace(/([_-][a-z])/g, (function($1) {
                            return $1.toUpperCase().replace(/[_-]/, "");
                        }));
                    },
                    pascalCase: function(str) {
                        return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
                    },
                    dashCase: function(str) {
                        return str.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase();
                    },
                    isElement: function(el, doc) {
                        doc = doc || window.document;
                        if (window.HTMLElement && el instanceof window.HTMLElement) return true; else if (doc.defaultView && doc.defaultView.HTMLElement && el instanceof doc.defaultView.HTMLElement) return true; else return el !== null && el.nodeType === 1 && typeof el.nodeName === "string";
                    },
                    createElement: function(htmlString, doc) {
                        var frag = null, temp = null;
                        doc = doc || window.document;
                        frag = doc.createDocumentFragment();
                        temp = doc.createElement("div");
                        temp.innerHTML = htmlString.trim();
                        while (temp.firstChild) frag.appendChild(temp.firstChild);
                        return frag;
                    },
                    removeWhitespace: function(node) {
                        var deleting;
                        while (node && node.nodeName === "#text") {
                            deleting = node;
                            node = node.previousSibling;
                            deleting.parentElement && deleting.parentElement.removeChild(deleting);
                        }
                    },
                    isEqualArray: function(a, b) {
                        var i = a.length;
                        if (i !== b.length) return false;
                        while (i--) if (a[i] !== b[i]) return false;
                        return true;
                    },
                    deepEquals: function(a, b) {
                        var key;
                        if (typeof a === "object" && a && typeof b === "object" && b) {
                            if (Object.keys(a).length !== Object.keys(b).length) return false;
                            for (key in a) if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                        } else if (a !== b) return false;
                        return true;
                    },
                    arrayShuffle: function(oldArray) {
                        var newArray = oldArray.slice(), len = newArray.length, i = len, p = -1, t = [];
                        while (i--) {
                            p = ~~(Math.random() * len);
                            t = newArray[i];
                            newArray[i] = newArray[p];
                            newArray[p] = t;
                        }
                        return newArray;
                    },
                    arrayFromList: function(list) {
                        var output, i;
                        try {
                            return Array.prototype.slice.call(list);
                        } catch (err) {
                            output = [];
                            for (i = 0; i < list.length; i++) output.push(list[i]);
                            return output;
                        }
                    },
                    debounce: function(func, wait, immediate) {
                        var timeout;
                        return function() {
                            var self = this, args = arguments, callNow = immediate && !timeout, later = null;
                            later = function() {
                                timeout = null;
                                if (!immediate) func.apply(self, args);
                            };
                            clearTimeout(timeout);
                            timeout = setTimeout(later, wait);
                            if (callNow) func.apply(self, args);
                        };
                    },
                    position: function(element) {
                        var xPosition = 0, yPosition = 0, offsetParent = element;
                        while (element) {
                            xPosition -= element.scrollLeft;
                            yPosition -= element.scrollTop;
                            if (element === offsetParent) {
                                xPosition += element.offsetLeft;
                                yPosition += element.offsetTop;
                                offsetParent = element.offsetParent;
                            }
                            element = element.parentElement;
                        }
                        return {
                            x: xPosition,
                            y: yPosition
                        };
                    },
                    getHypotenuse: function(node1, node2) {
                        var distanceX = node1.x - node2.x, distanceY = node1.y - node2.y;
                        distanceX = distanceX < 0 ? distanceX * -1 : distanceX, distanceY = distanceY < 0 ? distanceY * -1 : distanceY;
                        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
                    },
                    getIntersectionRatio: function(box1, box2) {
                        var controlArea = box1.width * box1.height, intersectionX = -1, intersectionY = -1, intersectionArea = -1, ratio = -1;
                        intersectionX = Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));
                        intersectionY = Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));
                        intersectionArea = intersectionY * intersectionX;
                        ratio = intersectionArea / controlArea;
                        return ratio;
                    },
                    closestParent: function(el, selector, includeSelf, doc) {
                        var parent = el.parentNode;
                        doc = doc || window.document;
                        if (includeSelf && el.matches(selector)) return el;
                        while (parent && parent != doc.body) if (parent.matches && parent.matches(selector)) return parent; else if (parent.parentNode) parent = parent.parentNode; else return null;
                        return null;
                    },
                    children: function(el, selector, doc) {
                        var children = [], tempId = "";
                        doc = doc || window.doc;
                        if (el) {
                            if (!el.id) {
                                tempId = "Temp" + this.randomHexKey();
                                el.id = tempId;
                            }
                            children = doc.querySelectorAll("#" + el.id + " > " + selector);
                            if (tempId) el.removeAttribute("id");
                        }
                        return children;
                    },
                    clean: function(originalArray) {
                        var cleanArray = [], i = -1;
                        for (i = 0; i < originalArray.length; i++) if (originalArray[i] !== "") cleanArray.push(originalArray[i]);
                        return cleanArray;
                    },
                    defer: function(libraries) {
                        var deferred = null, promiseWrapper = null, $ = null;
                        promiseWrapper = new this.Deferred;
                        if (mixitup.features.has.promises) promiseWrapper.promise = new Promise((function(resolve, reject) {
                            promiseWrapper.resolve = resolve;
                            promiseWrapper.reject = reject;
                        })); else if (($ = window.jQuery || libraries.$) && typeof $.Deferred === "function") {
                            deferred = $.Deferred();
                            promiseWrapper.promise = deferred.promise();
                            promiseWrapper.resolve = deferred.resolve;
                            promiseWrapper.reject = deferred.reject;
                        } else if (window.console) console.warn(mixitup.messages.warningNoPromiseImplementation());
                        return promiseWrapper;
                    },
                    all: function(tasks, libraries) {
                        var $ = null;
                        if (mixitup.features.has.promises) return Promise.all(tasks); else if (($ = window.jQuery || libraries.$) && typeof $.when === "function") return $.when.apply($, tasks).done((function() {
                            return arguments;
                        }));
                        if (window.console) console.warn(mixitup.messages.warningNoPromiseImplementation());
                        return [];
                    },
                    getPrefix: function(el, property, vendors) {
                        var i = -1, prefix = "";
                        if (h.dashCase(property) in el.style) return "";
                        for (i = 0; prefix = vendors[i]; i++) if (prefix + property in el.style) return prefix.toLowerCase();
                        return "unsupported";
                    },
                    randomHex: function() {
                        return ("00000" + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
                    },
                    getDocumentState: function(doc) {
                        doc = typeof doc.body === "object" ? doc : window.document;
                        return {
                            scrollTop: window.pageYOffset,
                            scrollLeft: window.pageXOffset,
                            docHeight: doc.documentElement.scrollHeight,
                            docWidth: doc.documentElement.scrollWidth,
                            viewportHeight: doc.documentElement.clientHeight,
                            viewportWidth: doc.documentElement.clientWidth
                        };
                    },
                    bind: function(obj, fn) {
                        return function() {
                            return fn.apply(obj, arguments);
                        };
                    },
                    isVisible: function(el) {
                        var styles = null;
                        if (el.offsetParent) return true;
                        styles = window.getComputedStyle(el);
                        if (styles.position === "fixed" && styles.visibility !== "hidden" && styles.opacity !== "0") return true;
                        return false;
                    },
                    seal: function(obj) {
                        if (typeof Object.seal === "function") Object.seal(obj);
                    },
                    freeze: function(obj) {
                        if (typeof Object.freeze === "function") Object.freeze(obj);
                    },
                    compareVersions: function(control, specimen) {
                        var controlParts = control.split("."), specimenParts = specimen.split("."), controlPart = -1, specimenPart = -1, i = -1;
                        for (i = 0; i < controlParts.length; i++) {
                            controlPart = parseInt(controlParts[i].replace(/[^\d.]/g, ""));
                            specimenPart = parseInt(specimenParts[i].replace(/[^\d.]/g, "") || 0);
                            if (specimenPart < controlPart) return false; else if (specimenPart > controlPart) return true;
                        }
                        return true;
                    },
                    Deferred: function() {
                        this.promise = null;
                        this.resolve = null;
                        this.reject = null;
                        this.id = h.randomHex();
                    },
                    isEmptyObject: function(obj) {
                        var key = "";
                        if (typeof Object.keys === "function") return Object.keys(obj).length === 0;
                        for (key in obj) if (obj.hasOwnProperty(key)) return false;
                        return true;
                    },
                    getClassname: function(classNames, elementName, modifier) {
                        var classname = "";
                        classname += classNames.block;
                        if (classname.length) classname += classNames.delineatorElement;
                        classname += classNames["element" + this.pascalCase(elementName)];
                        if (!modifier) return classname;
                        if (classname.length) classname += classNames.delineatorModifier;
                        classname += modifier;
                        return classname;
                    },
                    getProperty: function(obj, stringKey) {
                        var parts = stringKey.split("."), returnCurrent = null, current = "", i = 0;
                        if (!stringKey) return obj;
                        returnCurrent = function(obj) {
                            if (!obj) return null; else return obj[current];
                        };
                        while (i < parts.length) {
                            current = parts[i];
                            obj = returnCurrent(obj);
                            i++;
                        }
                        if (typeof obj !== "undefined") return obj; else return null;
                    }
                };
                mixitup.h = h;
                mixitup.Base = function() {};
                mixitup.Base.prototype = {
                    constructor: mixitup.Base,
                    callActions: function(actionName, args) {
                        var self = this, hooks = self.constructor.actions[actionName], extensionName = "";
                        if (!hooks || h.isEmptyObject(hooks)) return;
                        for (extensionName in hooks) hooks[extensionName].apply(self, args);
                    },
                    callFilters: function(filterName, input, args) {
                        var self = this, hooks = self.constructor.filters[filterName], output = input, extensionName = "";
                        if (!hooks || h.isEmptyObject(hooks)) return output;
                        args = args || [];
                        for (extensionName in hooks) {
                            args = h.arrayFromList(args);
                            args.unshift(output);
                            output = hooks[extensionName].apply(self, args);
                        }
                        return output;
                    }
                };
                mixitup.BaseStatic = function() {
                    this.actions = {};
                    this.filters = {};
                    this.extend = function(extension) {
                        h.extend(this.prototype, extension);
                    };
                    this.registerAction = function(hookName, extensionName, func) {
                        (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
                    };
                    this.registerFilter = function(hookName, extensionName, func) {
                        (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
                    };
                };
                mixitup.Features = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.boxSizingPrefix = "";
                    this.transformPrefix = "";
                    this.transitionPrefix = "";
                    this.boxSizingPrefix = "";
                    this.transformProp = "";
                    this.transformRule = "";
                    this.transitionProp = "";
                    this.perspectiveProp = "";
                    this.perspectiveOriginProp = "";
                    this.has = new mixitup.Has;
                    this.canary = null;
                    this.BOX_SIZING_PROP = "boxSizing";
                    this.TRANSITION_PROP = "transition";
                    this.TRANSFORM_PROP = "transform";
                    this.PERSPECTIVE_PROP = "perspective";
                    this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin";
                    this.VENDORS = [ "Webkit", "moz", "O", "ms" ];
                    this.TWEENABLE = [ "opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ];
                    this.callActions("afterConstruct");
                };
                mixitup.BaseStatic.call(mixitup.Features);
                mixitup.Features.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Features.prototype, {
                    constructor: mixitup.Features,
                    init: function() {
                        var self = this;
                        self.callActions("beforeInit", arguments);
                        self.canary = document.createElement("div");
                        self.setPrefixes();
                        self.runTests();
                        self.callActions("beforeInit", arguments);
                    },
                    runTests: function() {
                        var self = this;
                        self.callActions("beforeRunTests", arguments);
                        self.has.promises = typeof window.Promise === "function";
                        self.has.transitions = self.transitionPrefix !== "unsupported";
                        self.callActions("afterRunTests", arguments);
                        h.freeze(self.has);
                    },
                    setPrefixes: function() {
                        var self = this;
                        self.callActions("beforeSetPrefixes", arguments);
                        self.transitionPrefix = h.getPrefix(self.canary, "Transition", self.VENDORS);
                        self.transformPrefix = h.getPrefix(self.canary, "Transform", self.VENDORS);
                        self.boxSizingPrefix = h.getPrefix(self.canary, "BoxSizing", self.VENDORS);
                        self.boxSizingProp = self.boxSizingPrefix ? self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;
                        self.transitionProp = self.transitionPrefix ? self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;
                        self.transformProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;
                        self.transformRule = self.transformPrefix ? "-" + self.transformPrefix + "-" + self.TRANSFORM_PROP : self.TRANSFORM_PROP;
                        self.perspectiveProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;
                        self.perspectiveOriginProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) : self.PERSPECTIVE_ORIGIN_PROP;
                        self.callActions("afterSetPrefixes", arguments);
                    }
                });
                mixitup.Has = function() {
                    this.transitions = false;
                    this.promises = false;
                    h.seal(this);
                };
                mixitup.features = new mixitup.Features;
                mixitup.features.init();
                mixitup.ConfigAnimation = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = true;
                    this.effects = "fade scale";
                    this.effectsIn = "";
                    this.effectsOut = "";
                    this.duration = 600;
                    this.easing = "ease";
                    this.applyPerspective = true;
                    this.perspectiveDistance = "3000px";
                    this.perspectiveOrigin = "50% 50%";
                    this.queue = true;
                    this.queueLimit = 3;
                    this.animateResizeContainer = true;
                    this.animateResizeTargets = false;
                    this.staggerSequence = null;
                    this.reverseOut = false;
                    this.nudge = true;
                    this.clampHeight = true;
                    this.clampWidth = true;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigAnimation);
                mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;
                mixitup.ConfigBehavior = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.liveSort = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigBehavior);
                mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;
                mixitup.ConfigCallbacks = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.onMixStart = null;
                    this.onMixBusy = null;
                    this.onMixEnd = null;
                    this.onMixFail = null;
                    this.onMixClick = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigCallbacks);
                mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;
                mixitup.ConfigControls = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = true;
                    this.live = false;
                    this.scope = "global";
                    this.toggleLogic = "or";
                    this.toggleDefault = "all";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigControls);
                mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;
                mixitup.ConfigClassNames = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.block = "mixitup";
                    this.elementContainer = "container";
                    this.elementFilter = "control";
                    this.elementSort = "control";
                    this.elementMultimix = "control";
                    this.elementToggle = "control";
                    this.modifierActive = "active";
                    this.modifierDisabled = "disabled";
                    this.modifierFailed = "failed";
                    this.delineatorElement = "-";
                    this.delineatorModifier = "-";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigClassNames);
                mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;
                mixitup.ConfigData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.uidKey = "";
                    this.dirtyCheck = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigData);
                mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;
                mixitup.ConfigDebug = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = false;
                    this.showWarnings = true;
                    this.fauxAsync = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigDebug);
                mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;
                mixitup.ConfigLayout = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.allowNestedTargets = true;
                    this.containerClassName = "";
                    this.siblingBefore = null;
                    this.siblingAfter = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigLayout);
                mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;
                mixitup.ConfigLoad = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.filter = "all";
                    this.sort = "default:asc";
                    this.dataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigLoad);
                mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;
                mixitup.ConfigSelectors = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.target = ".mix";
                    this.control = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigSelectors);
                mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;
                mixitup.ConfigRender = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.target = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigRender);
                mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;
                mixitup.ConfigTemplates = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigTemplates);
                mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;
                mixitup.Config = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.animation = new mixitup.ConfigAnimation;
                    this.behavior = new mixitup.ConfigBehavior;
                    this.callbacks = new mixitup.ConfigCallbacks;
                    this.controls = new mixitup.ConfigControls;
                    this.classNames = new mixitup.ConfigClassNames;
                    this.data = new mixitup.ConfigData;
                    this.debug = new mixitup.ConfigDebug;
                    this.layout = new mixitup.ConfigLayout;
                    this.load = new mixitup.ConfigLoad;
                    this.selectors = new mixitup.ConfigSelectors;
                    this.render = new mixitup.ConfigRender;
                    this.templates = new mixitup.ConfigTemplates;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Config);
                mixitup.Config.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Config.prototype.constructor = mixitup.Config;
                mixitup.MixerDom = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.document = null;
                    this.body = null;
                    this.container = null;
                    this.parent = null;
                    this.targets = [];
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.MixerDom);
                mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);
                mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;
                mixitup.UiClassNames = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.base = "";
                    this.active = "";
                    this.disabled = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.UiClassNames);
                mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);
                mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;
                mixitup.CommandDataset = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.dataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandDataset);
                mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;
                mixitup.CommandMultimix = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.filter = null;
                    this.sort = null;
                    this.insert = null;
                    this.remove = null;
                    this.changeLayout = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandMultimix);
                mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;
                mixitup.CommandFilter = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.selector = "";
                    this.collection = null;
                    this.action = "show";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandFilter);
                mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;
                mixitup.CommandSort = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.sortString = "";
                    this.attribute = "";
                    this.order = "asc";
                    this.collection = null;
                    this.next = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandSort);
                mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;
                mixitup.CommandInsert = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.index = 0;
                    this.collection = [];
                    this.position = "before";
                    this.sibling = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandInsert);
                mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;
                mixitup.CommandRemove = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.targets = [];
                    this.collection = [];
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandRemove);
                mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;
                mixitup.CommandChangeLayout = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.containerClassName = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandChangeLayout);
                mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;
                mixitup.ControlDefinition = function(type, selector, live, parent) {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.type = type;
                    this.selector = selector;
                    this.live = live || false;
                    this.parent = parent || "";
                    this.callActions("afterConstruct");
                    h.freeze(this);
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ControlDefinition);
                mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;
                mixitup.controlDefinitions = [];
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("multimix", "[data-filter][data-sort]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("filter", "[data-filter]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("sort", "[data-sort]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("toggle", "[data-toggle]"));
                mixitup.Control = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.el = null;
                    this.selector = "";
                    this.bound = [];
                    this.pending = -1;
                    this.type = "";
                    this.status = "inactive";
                    this.filter = "";
                    this.sort = "";
                    this.canDisable = false;
                    this.handler = null;
                    this.classNames = new mixitup.UiClassNames;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Control);
                mixitup.Control.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Control.prototype, {
                    constructor: mixitup.Control,
                    init: function(el, type, selector) {
                        var self = this;
                        this.callActions("beforeInit", arguments);
                        self.el = el;
                        self.type = type;
                        self.selector = selector;
                        if (self.selector) self.status = "live"; else {
                            self.canDisable = typeof self.el.disable === "boolean";
                            switch (self.type) {
                              case "filter":
                                self.filter = self.el.getAttribute("data-filter");
                                break;

                              case "toggle":
                                self.filter = self.el.getAttribute("data-toggle");
                                break;

                              case "sort":
                                self.sort = self.el.getAttribute("data-sort");
                                break;

                              case "multimix":
                                self.filter = self.el.getAttribute("data-filter");
                                self.sort = self.el.getAttribute("data-sort");
                                break;
                            }
                        }
                        self.bindClick();
                        mixitup.controls.push(self);
                        this.callActions("afterInit", arguments);
                    },
                    isBound: function(mixer) {
                        var self = this, isBound = false;
                        this.callActions("beforeIsBound", arguments);
                        isBound = self.bound.indexOf(mixer) > -1;
                        return self.callFilters("afterIsBound", isBound, arguments);
                    },
                    addBinding: function(mixer) {
                        var self = this;
                        this.callActions("beforeAddBinding", arguments);
                        if (!self.isBound()) self.bound.push(mixer);
                        this.callActions("afterAddBinding", arguments);
                    },
                    removeBinding: function(mixer) {
                        var self = this, removeIndex = -1;
                        this.callActions("beforeRemoveBinding", arguments);
                        if ((removeIndex = self.bound.indexOf(mixer)) > -1) self.bound.splice(removeIndex, 1);
                        if (self.bound.length < 1) {
                            self.unbindClick();
                            removeIndex = mixitup.controls.indexOf(self);
                            mixitup.controls.splice(removeIndex, 1);
                            if (self.status === "active") self.renderStatus(self.el, "inactive");
                        }
                        this.callActions("afterRemoveBinding", arguments);
                    },
                    bindClick: function() {
                        var self = this;
                        this.callActions("beforeBindClick", arguments);
                        self.handler = function(e) {
                            self.handleClick(e);
                        };
                        h.on(self.el, "click", self.handler);
                        this.callActions("afterBindClick", arguments);
                    },
                    unbindClick: function() {
                        var self = this;
                        this.callActions("beforeUnbindClick", arguments);
                        h.off(self.el, "click", self.handler);
                        self.handler = null;
                        this.callActions("afterUnbindClick", arguments);
                    },
                    handleClick: function(e) {
                        var self = this, button = null, mixer = null, isActive = false, returnValue = void 0, command = {}, clone = null, commands = [], i = -1;
                        this.callActions("beforeHandleClick", arguments);
                        this.pending = 0;
                        mixer = self.bound[0];
                        if (!self.selector) button = self.el; else button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
                        if (!button) {
                            self.callActions("afterHandleClick", arguments);
                            return;
                        }
                        switch (self.type) {
                          case "filter":
                            command.filter = self.filter || button.getAttribute("data-filter");
                            break;

                          case "sort":
                            command.sort = self.sort || button.getAttribute("data-sort");
                            break;

                          case "multimix":
                            command.filter = self.filter || button.getAttribute("data-filter");
                            command.sort = self.sort || button.getAttribute("data-sort");
                            break;

                          case "toggle":
                            command.filter = self.filter || button.getAttribute("data-toggle");
                            if (self.status === "live") isActive = h.hasClass(button, self.classNames.active); else isActive = self.status === "active";
                            break;
                        }
                        for (i = 0; i < self.bound.length; i++) {
                            clone = new mixitup.CommandMultimix;
                            h.extend(clone, command);
                            commands.push(clone);
                        }
                        commands = self.callFilters("commandsHandleClick", commands, arguments);
                        self.pending = self.bound.length;
                        for (i = 0; mixer = self.bound[i]; i++) {
                            command = commands[i];
                            if (!command) continue;
                            if (!mixer.lastClicked) mixer.lastClicked = button;
                            mixitup.events.fire("mixClick", mixer.dom.container, {
                                state: mixer.state,
                                instance: mixer,
                                originalEvent: e,
                                control: mixer.lastClicked
                            }, mixer.dom.document);
                            if (typeof mixer.config.callbacks.onMixClick === "function") {
                                returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);
                                if (returnValue === false) continue;
                            }
                            if (self.type === "toggle") isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter); else mixer.multimix(command);
                        }
                        this.callActions("afterHandleClick", arguments);
                    },
                    update: function(command, toggleArray) {
                        var self = this, actions = new mixitup.CommandMultimix;
                        self.callActions("beforeUpdate", arguments);
                        self.pending--;
                        self.pending = Math.max(0, self.pending);
                        if (self.pending > 0) return;
                        if (self.status === "live") self.updateLive(command, toggleArray); else {
                            actions.sort = self.sort;
                            actions.filter = self.filter;
                            self.callFilters("actionsUpdate", actions, arguments);
                            self.parseStatusChange(self.el, command, actions, toggleArray);
                        }
                        self.callActions("afterUpdate", arguments);
                    },
                    updateLive: function(command, toggleArray) {
                        var self = this, controlButtons = null, actions = null, button = null, i = -1;
                        self.callActions("beforeUpdateLive", arguments);
                        if (!self.el) return;
                        controlButtons = self.el.querySelectorAll(self.selector);
                        for (i = 0; button = controlButtons[i]; i++) {
                            actions = new mixitup.CommandMultimix;
                            switch (self.type) {
                              case "filter":
                                actions.filter = button.getAttribute("data-filter");
                                break;

                              case "sort":
                                actions.sort = button.getAttribute("data-sort");
                                break;

                              case "multimix":
                                actions.filter = button.getAttribute("data-filter");
                                actions.sort = button.getAttribute("data-sort");
                                break;

                              case "toggle":
                                actions.filter = button.getAttribute("data-toggle");
                                break;
                            }
                            actions = self.callFilters("actionsUpdateLive", actions, arguments);
                            self.parseStatusChange(button, command, actions, toggleArray);
                        }
                        self.callActions("afterUpdateLive", arguments);
                    },
                    parseStatusChange: function(button, command, actions, toggleArray) {
                        var self = this, alias = "", toggle = "", i = -1;
                        self.callActions("beforeParseStatusChange", arguments);
                        switch (self.type) {
                          case "filter":
                            if (command.filter === actions.filter) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "multimix":
                            if (command.sort === actions.sort && command.filter === actions.filter) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "sort":
                            if (command.sort.match(/:asc/g)) alias = command.sort.replace(/:asc/g, "");
                            if (command.sort === actions.sort || alias === actions.sort) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "toggle":
                            if (toggleArray.length < 1) self.renderStatus(button, "inactive");
                            if (command.filter === actions.filter) self.renderStatus(button, "active");
                            for (i = 0; i < toggleArray.length; i++) {
                                toggle = toggleArray[i];
                                if (toggle === actions.filter) {
                                    self.renderStatus(button, "active");
                                    break;
                                }
                                self.renderStatus(button, "inactive");
                            }
                            break;
                        }
                        self.callActions("afterParseStatusChange", arguments);
                    },
                    renderStatus: function(button, status) {
                        var self = this;
                        self.callActions("beforeRenderStatus", arguments);
                        switch (status) {
                          case "active":
                            h.addClass(button, self.classNames.active);
                            h.removeClass(button, self.classNames.disabled);
                            if (self.canDisable) self.el.disabled = false;
                            break;

                          case "inactive":
                            h.removeClass(button, self.classNames.active);
                            h.removeClass(button, self.classNames.disabled);
                            if (self.canDisable) self.el.disabled = false;
                            break;

                          case "disabled":
                            if (self.canDisable) self.el.disabled = true;
                            h.addClass(button, self.classNames.disabled);
                            h.removeClass(button, self.classNames.active);
                            break;
                        }
                        if (self.status !== "live") self.status = status;
                        self.callActions("afterRenderStatus", arguments);
                    }
                });
                mixitup.controls = [];
                mixitup.StyleData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.x = 0;
                    this.y = 0;
                    this.top = 0;
                    this.right = 0;
                    this.bottom = 0;
                    this.left = 0;
                    this.width = 0;
                    this.height = 0;
                    this.marginRight = 0;
                    this.marginBottom = 0;
                    this.opacity = 0;
                    this.scale = new mixitup.TransformData;
                    this.translateX = new mixitup.TransformData;
                    this.translateY = new mixitup.TransformData;
                    this.translateZ = new mixitup.TransformData;
                    this.rotateX = new mixitup.TransformData;
                    this.rotateY = new mixitup.TransformData;
                    this.rotateZ = new mixitup.TransformData;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.StyleData);
                mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.StyleData.prototype.constructor = mixitup.StyleData;
                mixitup.TransformData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.value = 0;
                    this.unit = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TransformData);
                mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.TransformData.prototype.constructor = mixitup.TransformData;
                mixitup.TransformDefaults = function() {
                    mixitup.StyleData.apply(this);
                    this.callActions("beforeConstruct");
                    this.scale.value = .01;
                    this.scale.unit = "";
                    this.translateX.value = 20;
                    this.translateX.unit = "px";
                    this.translateY.value = 20;
                    this.translateY.unit = "px";
                    this.translateZ.value = 20;
                    this.translateZ.unit = "px";
                    this.rotateX.value = 90;
                    this.rotateX.unit = "deg";
                    this.rotateY.value = 90;
                    this.rotateY.unit = "deg";
                    this.rotateX.value = 90;
                    this.rotateX.unit = "deg";
                    this.rotateZ.value = 180;
                    this.rotateZ.unit = "deg";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TransformDefaults);
                mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);
                mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;
                mixitup.transformDefaults = new mixitup.TransformDefaults;
                mixitup.EventDetail = function() {
                    this.state = null;
                    this.futureState = null;
                    this.instance = null;
                    this.originalEvent = null;
                };
                mixitup.Events = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.mixStart = null;
                    this.mixBusy = null;
                    this.mixEnd = null;
                    this.mixFail = null;
                    this.mixClick = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Events);
                mixitup.Events.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Events.prototype.constructor = mixitup.Events;
                mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
                    var self = this, event = null, eventDetail = new mixitup.EventDetail;
                    self.callActions("beforeFire", arguments);
                    if (typeof self[eventType] === "undefined") throw new Error('Event type "' + eventType + '" not found.');
                    eventDetail.state = new mixitup.State;
                    h.extend(eventDetail.state, detail.state);
                    if (detail.futureState) {
                        eventDetail.futureState = new mixitup.State;
                        h.extend(eventDetail.futureState, detail.futureState);
                    }
                    eventDetail.instance = detail.instance;
                    if (detail.originalEvent) eventDetail.originalEvent = detail.originalEvent;
                    event = h.getCustomEvent(eventType, eventDetail, doc);
                    self.callFilters("eventFire", event, arguments);
                    el.dispatchEvent(event);
                };
                mixitup.events = new mixitup.Events;
                mixitup.QueueItem = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.args = [];
                    this.instruction = null;
                    this.triggerElement = null;
                    this.deferred = null;
                    this.isToggling = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.QueueItem);
                mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);
                mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;
                mixitup.Mixer = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.config = new mixitup.Config;
                    this.id = "";
                    this.isBusy = false;
                    this.isToggling = false;
                    this.incPadding = true;
                    this.controls = [];
                    this.targets = [];
                    this.origOrder = [];
                    this.cache = {};
                    this.toggleArray = [];
                    this.targetsMoved = 0;
                    this.targetsImmovable = 0;
                    this.targetsBound = 0;
                    this.targetsDone = 0;
                    this.staggerDuration = 0;
                    this.effectsIn = null;
                    this.effectsOut = null;
                    this.transformIn = [];
                    this.transformOut = [];
                    this.queue = [];
                    this.state = null;
                    this.lastOperation = null;
                    this.lastClicked = null;
                    this.userCallback = null;
                    this.userDeferred = null;
                    this.dom = new mixitup.MixerDom;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Mixer);
                mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Mixer.prototype, {
                    constructor: mixitup.Mixer,
                    attach: function(container, document, id, config) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeAttach", arguments);
                        self.id = id;
                        if (config) h.extend(self.config, config, true, true);
                        self.sanitizeConfig();
                        self.cacheDom(container, document);
                        if (self.config.layout.containerClassName) h.addClass(self.dom.container, self.config.layout.containerClassName);
                        if (!mixitup.features.has.transitions) self.config.animation.enable = false;
                        if (typeof window.console === "undefined") self.config.debug.showWarnings = false;
                        if (self.config.data.uidKey) self.config.controls.enable = false;
                        self.indexTargets();
                        self.state = self.getInitialState();
                        for (i = 0; target = self.lastOperation.toHide[i]; i++) target.hide();
                        if (self.config.controls.enable) {
                            self.initControls();
                            self.buildToggleArray(null, self.state);
                            self.updateControls({
                                filter: self.state.activeFilter,
                                sort: self.state.activeSort
                            });
                        }
                        self.parseEffects();
                        self.callActions("afterAttach", arguments);
                    },
                    sanitizeConfig: function() {
                        var self = this;
                        self.callActions("beforeSanitizeConfig", arguments);
                        self.config.controls.scope = self.config.controls.scope.toLowerCase().trim();
                        self.config.controls.toggleLogic = self.config.controls.toggleLogic.toLowerCase().trim();
                        self.config.controls.toggleDefault = self.config.controls.toggleDefault.toLowerCase().trim();
                        self.config.animation.effects = self.config.animation.effects.trim();
                        self.callActions("afterSanitizeConfig", arguments);
                    },
                    getInitialState: function() {
                        var self = this, state = new mixitup.State, operation = new mixitup.Operation;
                        self.callActions("beforeGetInitialState", arguments);
                        state.activeContainerClassName = self.config.layout.containerClassName;
                        if (self.config.load.dataset) {
                            if (!self.config.data.uidKey || typeof self.config.data.uidKey !== "string") throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                            operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                            operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                            operation.show = self.targets.slice();
                            state = self.callFilters("stateGetInitialState", state, arguments);
                        } else {
                            state.activeFilter = self.parseFilterArgs([ self.config.load.filter ]).command;
                            state.activeSort = self.parseSortArgs([ self.config.load.sort ]).command;
                            state.totalTargets = self.targets.length;
                            state = self.callFilters("stateGetInitialState", state, arguments);
                            if (state.activeSort.collection || state.activeSort.attribute || state.activeSort.order === "random" || state.activeSort.order === "desc") {
                                operation.newSort = state.activeSort;
                                self.sortOperation(operation);
                                self.printSort(false, operation);
                                self.targets = operation.newOrder;
                            } else operation.startOrder = operation.newOrder = self.targets;
                            operation.startFilter = operation.newFilter = state.activeFilter;
                            operation.startSort = operation.newSort = state.activeSort;
                            operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                            if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target; else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
                        }
                        operation = self.callFilters("operationGetInitialState", operation, [ state ]);
                        self.lastOperation = operation;
                        if (operation.newFilter) self.filterOperation(operation);
                        state = self.buildState(operation);
                        return state;
                    },
                    cacheDom: function(el, document) {
                        var self = this;
                        self.callActions("beforeCacheDom", arguments);
                        self.dom.document = document;
                        self.dom.body = self.dom.document.querySelector("body");
                        self.dom.container = el;
                        self.dom.parent = el;
                        self.callActions("afterCacheDom", arguments);
                    },
                    indexTargets: function() {
                        var self = this, target = null, el = null, dataset = null, i = -1;
                        self.callActions("beforeIndexTargets", arguments);
                        self.dom.targets = self.config.layout.allowNestedTargets ? self.dom.container.querySelectorAll(self.config.selectors.target) : h.children(self.dom.container, self.config.selectors.target, self.dom.document);
                        self.dom.targets = h.arrayFromList(self.dom.targets);
                        self.targets = [];
                        if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
                        if (self.dom.targets.length) {
                            for (i = 0; el = self.dom.targets[i]; i++) {
                                target = new mixitup.Target;
                                target.init(el, self, dataset ? dataset[i] : void 0);
                                target.isInDom = true;
                                self.targets.push(target);
                            }
                            self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ? self.dom.container : self.dom.targets[0].parentElement;
                        }
                        self.origOrder = self.targets;
                        self.callActions("afterIndexTargets", arguments);
                    },
                    initControls: function() {
                        var self = this, definition = "", controlElements = null, el = null, parent = null, delagators = null, control = null, i = -1, j = -1;
                        self.callActions("beforeInitControls", arguments);
                        switch (self.config.controls.scope) {
                          case "local":
                            parent = self.dom.container;
                            break;

                          case "global":
                            parent = self.dom.document;
                            break;

                          default:
                            throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
                        }
                        for (i = 0; definition = mixitup.controlDefinitions[i]; i++) if (self.config.controls.live || definition.live) {
                            if (definition.parent) {
                                delagators = self.dom[definition.parent];
                                if (!delagators || delagators.length < 0) continue;
                                if (typeof delagators.length !== "number") delagators = [ delagators ];
                            } else delagators = [ parent ];
                            for (j = 0; el = delagators[j]; j++) {
                                control = self.getControl(el, definition.type, definition.selector);
                                self.controls.push(control);
                            }
                        } else {
                            controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);
                            for (j = 0; el = controlElements[j]; j++) {
                                control = self.getControl(el, definition.type, "");
                                if (!control) continue;
                                self.controls.push(control);
                            }
                        }
                        self.callActions("afterInitControls", arguments);
                    },
                    getControl: function(el, type, selector) {
                        var self = this, control = null, i = -1;
                        self.callActions("beforeGetControl", arguments);
                        if (!selector) for (i = 0; control = mixitup.controls[i]; i++) if (control.el === el && control.isBound(self)) return self.callFilters("controlGetControl", null, arguments); else if (control.el === el && control.type === type && control.selector === selector) {
                            control.addBinding(self);
                            return self.callFilters("controlGetControl", control, arguments);
                        }
                        control = new mixitup.Control;
                        control.init(el, type, selector);
                        control.classNames.base = h.getClassname(self.config.classNames, type);
                        control.classNames.active = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
                        control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);
                        control.addBinding(self);
                        return self.callFilters("controlGetControl", control, arguments);
                    },
                    getToggleSelector: function() {
                        var self = this, delineator = self.config.controls.toggleLogic === "or" ? ", " : "", toggleSelector = "";
                        self.callActions("beforeGetToggleSelector", arguments);
                        self.toggleArray = h.clean(self.toggleArray);
                        toggleSelector = self.toggleArray.join(delineator);
                        if (toggleSelector === "") toggleSelector = self.config.controls.toggleDefault;
                        return self.callFilters("selectorGetToggleSelector", toggleSelector, arguments);
                    },
                    buildToggleArray: function(command, state) {
                        var self = this, activeFilterSelector = "";
                        self.callActions("beforeBuildToggleArray", arguments);
                        if (command && command.filter) activeFilterSelector = command.filter.selector.replace(/\s/g, ""); else if (state) activeFilterSelector = state.activeFilter.selector.replace(/\s/g, ""); else return;
                        if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === "all") activeFilterSelector = "";
                        if (self.config.controls.toggleLogic === "or") self.toggleArray = activeFilterSelector.split(","); else self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
                        self.toggleArray = h.clean(self.toggleArray);
                        self.callActions("afterBuildToggleArray", arguments);
                    },
                    splitCompoundSelector: function(compoundSelector) {
                        var partials = compoundSelector.split(/([\.\[])/g), toggleArray = [], selector = "", i = -1;
                        if (partials[0] === "") partials.shift();
                        for (i = 0; i < partials.length; i++) {
                            if (i % 2 === 0) selector = "";
                            selector += partials[i];
                            if (i % 2 !== 0) toggleArray.push(selector);
                        }
                        return toggleArray;
                    },
                    updateControls: function(command) {
                        var self = this, control = null, output = new mixitup.CommandMultimix, i = -1;
                        self.callActions("beforeUpdateControls", arguments);
                        if (command.filter) output.filter = command.filter.selector; else output.filter = self.state.activeFilter.selector;
                        if (command.sort) output.sort = self.buildSortString(command.sort); else output.sort = self.buildSortString(self.state.activeSort);
                        if (output.filter === self.config.selectors.target) output.filter = "all";
                        if (output.filter === "") output.filter = "none";
                        h.freeze(output);
                        for (i = 0; control = self.controls[i]; i++) control.update(output, self.toggleArray);
                        self.callActions("afterUpdateControls", arguments);
                    },
                    buildSortString: function(command) {
                        var self = this;
                        var output = "";
                        output += command.sortString;
                        if (command.next) output += " " + self.buildSortString(command.next);
                        return output;
                    },
                    insertTargets: function(command, operation) {
                        var self = this, nextSibling = null, insertionIndex = -1, frag = null, target = null, el = null, i = -1;
                        self.callActions("beforeInsertTargets", arguments);
                        if (typeof command.index === "undefined") command.index = 0;
                        nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
                        frag = self.dom.document.createDocumentFragment();
                        if (nextSibling) insertionIndex = h.index(nextSibling, self.config.selectors.target); else insertionIndex = self.targets.length;
                        if (command.collection) {
                            for (i = 0; el = command.collection[i]; i++) {
                                if (self.dom.targets.indexOf(el) > -1) throw new Error(mixitup.messages.errorInsertPreexistingElement());
                                el.style.display = "none";
                                frag.appendChild(el);
                                frag.appendChild(self.dom.document.createTextNode(" "));
                                if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;
                                target = new mixitup.Target;
                                target.init(el, self);
                                target.isInDom = true;
                                self.targets.splice(insertionIndex, 0, target);
                                insertionIndex++;
                            }
                            self.dom.parent.insertBefore(frag, nextSibling);
                        }
                        operation.startOrder = self.origOrder = self.targets;
                        self.callActions("afterInsertTargets", arguments);
                    },
                    getNextSibling: function(index, sibling, position) {
                        var self = this, element = null;
                        index = Math.max(index, 0);
                        if (sibling && position === "before") element = sibling; else if (sibling && position === "after") element = sibling.nextElementSibling || null; else if (self.targets.length > 0 && typeof index !== "undefined") element = index < self.targets.length || !self.targets.length ? self.targets[index].dom.el : self.targets[self.targets.length - 1].dom.el.nextElementSibling; else if (self.targets.length === 0 && self.dom.parent.children.length > 0) if (self.config.layout.siblingAfter) element = self.config.layout.siblingAfter; else if (self.config.layout.siblingBefore) element = self.config.layout.siblingBefore.nextElementSibling; else self.dom.parent.children[0]; else element === null;
                        return self.callFilters("elementGetNextSibling", element, arguments);
                    },
                    filterOperation: function(operation) {
                        var self = this, testResult = false, index = -1, action = "", target = null, i = -1;
                        self.callActions("beforeFilterOperation", arguments);
                        action = operation.newFilter.action;
                        for (i = 0; target = operation.newOrder[i]; i++) {
                            if (operation.newFilter.collection) testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1; else if (operation.newFilter.selector === "") testResult = false; else testResult = target.dom.el.matches(operation.newFilter.selector);
                            self.evaluateHideShow(testResult, target, action, operation);
                        }
                        if (operation.toRemove.length) for (i = 0; target = operation.show[i]; i++) if (operation.toRemove.indexOf(target) > -1) {
                            operation.show.splice(i, 1);
                            if ((index = operation.toShow.indexOf(target)) > -1) operation.toShow.splice(index, 1);
                            operation.toHide.push(target);
                            operation.hide.push(target);
                            i--;
                        }
                        operation.matching = operation.show.slice();
                        if (operation.show.length === 0 && operation.newFilter.selector !== "" && self.targets.length !== 0) operation.hasFailed = true;
                        self.callActions("afterFilterOperation", arguments);
                    },
                    evaluateHideShow: function(testResult, target, action, operation) {
                        var self = this, filteredTestResult = false, args = Array.prototype.slice.call(arguments, 1);
                        filteredTestResult = self.callFilters("testResultEvaluateHideShow", testResult, args);
                        self.callActions("beforeEvaluateHideShow", arguments);
                        if (filteredTestResult === true && action === "show" || filteredTestResult === false && action === "hide") {
                            operation.show.push(target);
                            !target.isShown && operation.toShow.push(target);
                        } else {
                            operation.hide.push(target);
                            target.isShown && operation.toHide.push(target);
                        }
                        self.callActions("afterEvaluateHideShow", arguments);
                    },
                    sortOperation: function(operation) {
                        var self = this, newOrder = [], target = null, el = null, i = -1;
                        self.callActions("beforeSortOperation", arguments);
                        operation.startOrder = self.targets;
                        if (operation.newSort.collection) {
                            newOrder = [];
                            for (i = 0; el = operation.newSort.collection[i]; i++) {
                                if (self.dom.targets.indexOf(el) < 0) throw new Error(mixitup.messages.errorSortNonExistentElement());
                                target = new mixitup.Target;
                                target.init(el, self);
                                target.isInDom = true;
                                newOrder.push(target);
                            }
                            operation.newOrder = newOrder;
                        } else if (operation.newSort.order === "random") operation.newOrder = h.arrayShuffle(operation.startOrder); else if (operation.newSort.attribute === "") {
                            operation.newOrder = self.origOrder.slice();
                            if (operation.newSort.order === "desc") operation.newOrder.reverse();
                        } else {
                            operation.newOrder = operation.startOrder.slice();
                            operation.newOrder.sort((function(a, b) {
                                return self.compare(a, b, operation.newSort);
                            }));
                        }
                        if (h.isEqualArray(operation.newOrder, operation.startOrder)) operation.willSort = false;
                        self.callActions("afterSortOperation", arguments);
                    },
                    compare: function(a, b, command) {
                        var self = this, order = command.order, attrA = self.getAttributeValue(a, command.attribute), attrB = self.getAttributeValue(b, command.attribute);
                        if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                            attrA = attrA.toLowerCase();
                            attrB = attrB.toLowerCase();
                        } else {
                            attrA *= 1;
                            attrB *= 1;
                        }
                        if (attrA < attrB) return order === "asc" ? -1 : 1;
                        if (attrA > attrB) return order === "asc" ? 1 : -1;
                        if (attrA === attrB && command.next) return self.compare(a, b, command.next);
                        return 0;
                    },
                    getAttributeValue: function(target, attribute) {
                        var self = this, value = "";
                        value = target.dom.el.getAttribute("data-" + attribute);
                        if (value === null) if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                            attribute: "data-" + attribute
                        }));
                        return self.callFilters("valueGetAttributeValue", value || 0, arguments);
                    },
                    printSort: function(isResetting, operation) {
                        var self = this, startOrder = isResetting ? operation.newOrder : operation.startOrder, newOrder = isResetting ? operation.startOrder : operation.newOrder, nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null, frag = window.document.createDocumentFragment(), whitespace = null, target = null, el = null, i = -1;
                        self.callActions("beforePrintSort", arguments);
                        for (i = 0; target = startOrder[i]; i++) {
                            el = target.dom.el;
                            if (el.style.position === "absolute") continue;
                            h.removeWhitespace(el.previousSibling);
                            el.parentElement.removeChild(el);
                        }
                        whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;
                        if (whitespace && whitespace.nodeName === "#text") h.removeWhitespace(whitespace);
                        for (i = 0; target = newOrder[i]; i++) {
                            el = target.dom.el;
                            if (h.isElement(frag.lastChild)) frag.appendChild(window.document.createTextNode(" "));
                            frag.appendChild(el);
                        }
                        if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) frag.insertBefore(window.document.createTextNode(" "), frag.childNodes[0]);
                        if (nextSibling) {
                            frag.appendChild(window.document.createTextNode(" "));
                            self.dom.parent.insertBefore(frag, nextSibling);
                        } else self.dom.parent.appendChild(frag);
                        self.callActions("afterPrintSort", arguments);
                    },
                    parseSortString: function(sortString, command) {
                        var self = this, rules = sortString.split(" "), current = command, rule = [], i = -1;
                        for (i = 0; i < rules.length; i++) {
                            rule = rules[i].split(":");
                            current.sortString = rules[i];
                            current.attribute = h.dashCase(rule[0]);
                            current.order = rule[1] || "asc";
                            switch (current.attribute) {
                              case "default":
                                current.attribute = "";
                                break;

                              case "random":
                                current.attribute = "";
                                current.order = "random";
                                break;
                            }
                            if (!current.attribute || current.order === "random") break;
                            if (i < rules.length - 1) {
                                current.next = new mixitup.CommandSort;
                                h.freeze(current);
                                current = current.next;
                            }
                        }
                        return self.callFilters("commandsParseSort", command, arguments);
                    },
                    parseEffects: function() {
                        var self = this, transformName = "", effectsIn = self.config.animation.effectsIn || self.config.animation.effects, effectsOut = self.config.animation.effectsOut || self.config.animation.effects;
                        self.callActions("beforeParseEffects", arguments);
                        self.effectsIn = new mixitup.StyleData;
                        self.effectsOut = new mixitup.StyleData;
                        self.transformIn = [];
                        self.transformOut = [];
                        self.effectsIn.opacity = self.effectsOut.opacity = 1;
                        self.parseEffect("fade", effectsIn, self.effectsIn, self.transformIn);
                        self.parseEffect("fade", effectsOut, self.effectsOut, self.transformOut, true);
                        for (transformName in mixitup.transformDefaults) {
                            if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) continue;
                            self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                            self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
                        }
                        self.parseEffect("stagger", effectsIn, self.effectsIn, self.transformIn);
                        self.parseEffect("stagger", effectsOut, self.effectsOut, self.transformOut, true);
                        self.callActions("afterParseEffects", arguments);
                    },
                    parseEffect: function(effectName, effectString, effects, transform, isOut) {
                        var self = this, re = /\(([^)]+)\)/, propIndex = -1, str = "", match = [], val = "", units = [ "%", "px", "em", "rem", "vh", "vw", "deg" ], unit = "", i = -1;
                        self.callActions("beforeParseEffect", arguments);
                        if (typeof effectString !== "string") throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
                        if (effectString.indexOf(effectName) < 0) {
                            if (effectName === "stagger") self.staggerDuration = 0;
                            return;
                        }
                        propIndex = effectString.indexOf(effectName + "(");
                        if (propIndex > -1) {
                            str = effectString.substring(propIndex);
                            match = re.exec(str);
                            val = match[1];
                        }
                        switch (effectName) {
                          case "fade":
                            effects.opacity = val ? parseFloat(val) : 0;
                            break;

                          case "stagger":
                            self.staggerDuration = val ? parseFloat(val) : 100;
                            break;

                          default:
                            if (isOut && self.config.animation.reverseOut && effectName !== "scale") effects[effectName].value = (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1; else effects[effectName].value = val ? parseFloat(val) : mixitup.transformDefaults[effectName].value;
                            if (val) {
                                for (i = 0; unit = units[i]; i++) if (val.indexOf(unit) > -1) {
                                    effects[effectName].unit = unit;
                                    break;
                                }
                            } else effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                            transform.push(effectName + "(" + effects[effectName].value + effects[effectName].unit + ")");
                        }
                        self.callActions("afterParseEffect", arguments);
                    },
                    buildState: function(operation) {
                        var self = this, state = new mixitup.State, target = null, i = -1;
                        self.callActions("beforeBuildState", arguments);
                        for (i = 0; target = self.targets[i]; i++) if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.targets.push(target.dom.el);
                        for (i = 0; target = operation.matching[i]; i++) state.matching.push(target.dom.el);
                        for (i = 0; target = operation.show[i]; i++) state.show.push(target.dom.el);
                        for (i = 0; target = operation.hide[i]; i++) if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.hide.push(target.dom.el);
                        state.id = self.id;
                        state.container = self.dom.container;
                        state.activeFilter = operation.newFilter;
                        state.activeSort = operation.newSort;
                        state.activeDataset = operation.newDataset;
                        state.activeContainerClassName = operation.newContainerClassName;
                        state.hasFailed = operation.hasFailed;
                        state.totalTargets = self.targets.length;
                        state.totalShow = operation.show.length;
                        state.totalHide = operation.hide.length;
                        state.totalMatching = operation.matching.length;
                        state.triggerElement = operation.triggerElement;
                        return self.callFilters("stateBuildState", state, arguments);
                    },
                    goMix: function(shouldAnimate, operation) {
                        var self = this, deferred = null;
                        self.callActions("beforeGoMix", arguments);
                        if (!self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)) shouldAnimate = false;
                        if (!operation.toShow.length && !operation.toHide.length && !operation.willSort && !operation.willChangeLayout) shouldAnimate = false;
                        if (!operation.startState.show.length && !operation.show.length) shouldAnimate = false;
                        mixitup.events.fire("mixStart", self.dom.container, {
                            state: operation.startState,
                            futureState: operation.newState,
                            instance: self
                        }, self.dom.document);
                        if (typeof self.config.callbacks.onMixStart === "function") self.config.callbacks.onMixStart.call(self.dom.container, operation.startState, operation.newState, self);
                        h.removeClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
                        if (!self.userDeferred) deferred = self.userDeferred = h.defer(mixitup.libraries); else deferred = self.userDeferred;
                        self.isBusy = true;
                        if (!shouldAnimate || !mixitup.features.has.transitions) {
                            if (self.config.debug.fauxAsync) setTimeout((function() {
                                self.cleanUp(operation);
                            }), self.config.animation.duration); else self.cleanUp(operation);
                            return self.callFilters("promiseGoMix", deferred.promise, arguments);
                        }
                        if (window.pageYOffset !== operation.docState.scrollTop) window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
                        if (self.config.animation.applyPerspective) {
                            self.dom.parent.style[mixitup.features.perspectiveProp] = self.config.animation.perspectiveDistance;
                            self.dom.parent.style[mixitup.features.perspectiveOriginProp] = self.config.animation.perspectiveOrigin;
                        }
                        if (self.config.animation.animateResizeContainer && operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
                        if (self.config.animation.animateResizeContainer && operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
                        if (operation.startHeight === operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
                        if (operation.startWidth === operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
                        if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) self.dom.parent.style.overflow = "hidden";
                        requestAnimationFrame((function() {
                            self.moveTargets(operation);
                        }));
                        return self.callFilters("promiseGoMix", deferred.promise, arguments);
                    },
                    getStartMixData: function(operation) {
                        var self = this, parentStyle = window.getComputedStyle(self.dom.parent), parentRect = self.dom.parent.getBoundingClientRect(), target = null, data = {}, i = -1, boxSizing = parentStyle[mixitup.features.boxSizingProp];
                        self.incPadding = boxSizing === "border-box";
                        self.callActions("beforeGetStartMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            data = target.getPosData();
                            operation.showPosData[i] = {
                                startPosData: data
                            };
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            data = target.getPosData();
                            operation.toHidePosData[i] = {
                                startPosData: data
                            };
                        }
                        operation.startX = parentRect.left;
                        operation.startY = parentRect.top;
                        operation.startHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
                        operation.startWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
                        self.callActions("afterGetStartMixData", arguments);
                    },
                    setInter: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeSetInter", arguments);
                        if (self.config.animation.clampHeight) {
                            self.dom.parent.style.height = operation.startHeight + "px";
                            self.dom.parent.style.overflow = "hidden";
                        }
                        if (self.config.animation.clampWidth) {
                            self.dom.parent.style.width = operation.startWidth + "px";
                            self.dom.parent.style.overflow = "hidden";
                        }
                        for (i = 0; target = operation.toShow[i]; i++) target.show();
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.startContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        self.callActions("afterSetInter", arguments);
                    },
                    getInterMixData: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeGetInterMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) operation.showPosData[i].interPosData = target.getPosData();
                        for (i = 0; target = operation.toHide[i]; i++) operation.toHidePosData[i].interPosData = target.getPosData();
                        self.callActions("afterGetInterMixData", arguments);
                    },
                    setFinal: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeSetFinal", arguments);
                        operation.willSort && self.printSort(false, operation);
                        for (i = 0; target = operation.toHide[i]; i++) target.hide();
                        self.callActions("afterSetFinal", arguments);
                    },
                    getFinalMixData: function(operation) {
                        var self = this, parentStyle = null, parentRect = null, target = null, i = -1;
                        self.callActions("beforeGetFinalMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) operation.showPosData[i].finalPosData = target.getPosData();
                        for (i = 0; target = operation.toHide[i]; i++) operation.toHidePosData[i].finalPosData = target.getPosData();
                        if (self.config.animation.clampHeight || self.config.animation.clampWidth) self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = "";
                        if (!self.incPadding) parentStyle = window.getComputedStyle(self.dom.parent);
                        parentRect = self.dom.parent.getBoundingClientRect();
                        operation.newX = parentRect.left;
                        operation.newY = parentRect.top;
                        operation.newHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
                        operation.newWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
                        operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
                        operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;
                        if (operation.willSort) self.printSort(true, operation);
                        for (i = 0; target = operation.toShow[i]; i++) target.hide();
                        for (i = 0; target = operation.toHide[i]; i++) target.show();
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.newContainerClassName);
                            h.addClass(self.dom.container, self.config.layout.containerClassName);
                        }
                        self.callActions("afterGetFinalMixData", arguments);
                    },
                    getTweenData: function(operation) {
                        var self = this, target = null, posData = null, effectNames = Object.getOwnPropertyNames(self.effectsIn), effectName = "", effect = null, widthChange = -1, heightChange = -1, i = -1, j = -1;
                        self.callActions("beforeGetTweenData", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            posData = operation.showPosData[i];
                            posData.posIn = new mixitup.StyleData;
                            posData.posOut = new mixitup.StyleData;
                            posData.tweenData = new mixitup.StyleData;
                            if (target.isShown) {
                                posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                                posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                            } else posData.posIn.x = posData.posIn.y = 0;
                            posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                            posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;
                            posData.posIn.opacity = target.isShown ? 1 : self.effectsIn.opacity;
                            posData.posOut.opacity = 1;
                            posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                            if (!target.isShown && !self.config.animation.nudge) {
                                posData.posIn.x = posData.posOut.x;
                                posData.posIn.y = posData.posOut.y;
                            }
                            posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                            posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                            if (self.config.animation.animateResizeTargets) {
                                posData.posIn.width = posData.startPosData.width;
                                posData.posIn.height = posData.startPosData.height;
                                widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;
                                posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                                heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;
                                posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                                posData.posOut.width = posData.finalPosData.width;
                                posData.posOut.height = posData.finalPosData.height;
                                widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;
                                posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;
                                heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;
                                posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;
                                posData.tweenData.width = posData.posOut.width - posData.posIn.width;
                                posData.tweenData.height = posData.posOut.height - posData.posIn.height;
                                posData.tweenData.marginRight = posData.posOut.marginRight - posData.posIn.marginRight;
                                posData.tweenData.marginBottom = posData.posOut.marginBottom - posData.posIn.marginBottom;
                            }
                            for (j = 0; effectName = effectNames[j]; j++) {
                                effect = self.effectsIn[effectName];
                                if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                                posData.posIn[effectName].value = effect.value;
                                posData.posOut[effectName].value = 0;
                                posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                                posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                            }
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            posData = operation.toHidePosData[i];
                            posData.posIn = new mixitup.StyleData;
                            posData.posOut = new mixitup.StyleData;
                            posData.tweenData = new mixitup.StyleData;
                            posData.posIn.x = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                            posData.posIn.y = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                            posData.posOut.x = self.config.animation.nudge ? 0 : posData.posIn.x;
                            posData.posOut.y = self.config.animation.nudge ? 0 : posData.posIn.y;
                            posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                            posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                            if (self.config.animation.animateResizeTargets) {
                                posData.posIn.width = posData.startPosData.width;
                                posData.posIn.height = posData.startPosData.height;
                                widthChange = posData.startPosData.width - posData.interPosData.width;
                                posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                                heightChange = posData.startPosData.height - posData.interPosData.height;
                                posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                            }
                            posData.posIn.opacity = 1;
                            posData.posOut.opacity = self.effectsOut.opacity;
                            posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                            for (j = 0; effectName = effectNames[j]; j++) {
                                effect = self.effectsOut[effectName];
                                if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                                posData.posIn[effectName].value = 0;
                                posData.posOut[effectName].value = effect.value;
                                posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                                posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                            }
                        }
                        self.callActions("afterGetTweenData", arguments);
                    },
                    moveTargets: function(operation) {
                        var self = this, target = null, moveData = null, posData = null, statusChange = "", willTransition = false, staggerIndex = -1, i = -1, checkProgress = self.checkProgress.bind(self);
                        self.callActions("beforeMoveTargets", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            moveData = new mixitup.IMoveData;
                            posData = operation.showPosData[i];
                            statusChange = target.isShown ? "none" : "show";
                            willTransition = self.willTransition(statusChange, operation.hasEffect, posData.posIn, posData.posOut);
                            if (willTransition) staggerIndex++;
                            target.show();
                            moveData.posIn = posData.posIn;
                            moveData.posOut = posData.posOut;
                            moveData.statusChange = statusChange;
                            moveData.staggerIndex = staggerIndex;
                            moveData.operation = operation;
                            moveData.callback = willTransition ? checkProgress : null;
                            target.move(moveData);
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            posData = operation.toHidePosData[i];
                            moveData = new mixitup.IMoveData;
                            statusChange = "hide";
                            willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);
                            moveData.posIn = posData.posIn;
                            moveData.posOut = posData.posOut;
                            moveData.statusChange = statusChange;
                            moveData.staggerIndex = i;
                            moveData.operation = operation;
                            moveData.callback = willTransition ? checkProgress : null;
                            target.move(moveData);
                        }
                        if (self.config.animation.animateResizeContainer) {
                            self.dom.parent.style[mixitup.features.transitionProp] = "height " + self.config.animation.duration + "ms ease, " + "width " + self.config.animation.duration + "ms ease ";
                            requestAnimationFrame((function() {
                                if (operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.newHeight + "px";
                                if (operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.newWidth + "px";
                            }));
                        }
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        self.callActions("afterMoveTargets", arguments);
                    },
                    hasEffect: function() {
                        var self = this, EFFECTABLES = [ "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ], effectName = "", effect = null, result = false, value = -1, i = -1;
                        if (self.effectsIn.opacity !== 1) return self.callFilters("resultHasEffect", true, arguments);
                        for (i = 0; effectName = EFFECTABLES[i]; i++) {
                            effect = self.effectsIn[effectName];
                            value = typeof effect && effect.value !== "undefined" ? effect.value : effect;
                            if (value !== 0) {
                                result = true;
                                break;
                            }
                        }
                        return self.callFilters("resultHasEffect", result, arguments);
                    },
                    willTransition: function(statusChange, hasEffect, posIn, posOut) {
                        var self = this, result = false;
                        if (!h.isVisible(self.dom.container)) result = false; else if (statusChange !== "none" && hasEffect || posIn.x !== posOut.x || posIn.y !== posOut.y) result = true; else if (self.config.animation.animateResizeTargets) result = posIn.width !== posOut.width || posIn.height !== posOut.height || posIn.marginRight !== posOut.marginRight || posIn.marginTop !== posOut.marginTop; else result = false;
                        return self.callFilters("resultWillTransition", result, arguments);
                    },
                    checkProgress: function(operation) {
                        var self = this;
                        self.targetsDone++;
                        if (self.targetsBound === self.targetsDone) self.cleanUp(operation);
                    },
                    cleanUp: function(operation) {
                        var self = this, target = null, whitespaceBefore = null, whitespaceAfter = null, nextInQueue = null, i = -1;
                        self.callActions("beforeCleanUp", arguments);
                        self.targetsMoved = self.targetsImmovable = self.targetsBound = self.targetsDone = 0;
                        for (i = 0; target = operation.show[i]; i++) {
                            target.cleanUp();
                            target.show();
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            target.cleanUp();
                            target.hide();
                        }
                        if (operation.willSort) self.printSort(false, operation);
                        self.dom.parent.style[mixitup.features.transitionProp] = self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = self.dom.parent.style[mixitup.features.perspectiveProp] = self.dom.parent.style[mixitup.features.perspectiveOriginProp] = "";
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.startContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        if (operation.toRemove.length) {
                            for (i = 0; target = self.targets[i]; i++) if (operation.toRemove.indexOf(target) > -1) {
                                if ((whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === "#text" && (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === "#text") h.removeWhitespace(whitespaceBefore);
                                if (!operation.willSort) self.dom.parent.removeChild(target.dom.el);
                                self.targets.splice(i, 1);
                                target.isInDom = false;
                                i--;
                            }
                            self.origOrder = self.targets;
                        }
                        if (operation.willSort) self.targets = operation.newOrder;
                        self.state = operation.newState;
                        self.lastOperation = operation;
                        self.dom.targets = self.state.targets;
                        mixitup.events.fire("mixEnd", self.dom.container, {
                            state: self.state,
                            instance: self
                        }, self.dom.document);
                        if (typeof self.config.callbacks.onMixEnd === "function") self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
                        if (operation.hasFailed) {
                            mixitup.events.fire("mixFail", self.dom.container, {
                                state: self.state,
                                instance: self
                            }, self.dom.document);
                            if (typeof self.config.callbacks.onMixFail === "function") self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                            h.addClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
                        }
                        if (typeof self.userCallback === "function") self.userCallback.call(self.dom.container, self.state, self);
                        if (typeof self.userDeferred.resolve === "function") self.userDeferred.resolve(self.state);
                        self.userCallback = null;
                        self.userDeferred = null;
                        self.lastClicked = null;
                        self.isToggling = false;
                        self.isBusy = false;
                        if (self.queue.length) {
                            self.callActions("beforeReadQueueCleanUp", arguments);
                            nextInQueue = self.queue.shift();
                            self.userDeferred = nextInQueue.deferred;
                            self.isToggling = nextInQueue.isToggling;
                            self.lastClicked = nextInQueue.triggerElement;
                            if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) self.multimix.apply(self, nextInQueue.args); else self.dataset.apply(self, nextInQueue.args);
                        }
                        self.callActions("afterCleanUp", arguments);
                    },
                    parseMultimixArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandMultimix;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) instruction.command.insert = self.parseInsertArgs([ instruction.command.insert ]).command;
                        if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) instruction.command.remove = self.parseRemoveArgs([ instruction.command.remove ]).command;
                        if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) instruction.command.filter = self.parseFilterArgs([ instruction.command.filter ]).command;
                        if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) instruction.command.sort = self.parseSortArgs([ instruction.command.sort ]).command;
                        if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) instruction.command.changeLayout = self.parseChangeLayoutArgs([ instruction.command.changeLayout ]).command;
                        instruction = self.callFilters("instructionParseMultimixArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseFilterArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandFilter;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (typeof arg === "string") instruction.command.selector = arg; else if (arg === null) instruction.command.collection = []; else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) instruction.command.collection = [ arg ]; else if (typeof arg === "object" && typeof arg.length !== "undefined") instruction.command.collection = h.arrayFromList(arg); else if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.selector && instruction.command.collection) throw new Error(mixitup.messages.errorFilterInvalidArguments());
                        instruction = self.callFilters("instructionParseFilterArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseSortArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, sortString = "", i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandSort;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "string":
                                sortString = arg;
                                break;

                              case "object":
                                if (arg.length) instruction.command.collection = h.arrayFromList(arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        if (sortString) instruction.command = self.parseSortString(sortString, instruction.command);
                        instruction = self.callFilters("instructionParseSortArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseInsertArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandInsert;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            if (typeof arg === "number") instruction.command.index = arg; else if (typeof arg === "string" && [ "before", "after" ].indexOf(arg) > -1) instruction.command.position = arg; else if (typeof arg === "string") instruction.command.collection = h.arrayFromList(h.createElement(arg).childNodes); else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) !instruction.command.collection.length ? instruction.command.collection = [ arg ] : instruction.command.sibling = arg; else if (typeof arg === "object" && arg.length) !instruction.command.collection.length ? instruction.command.collection = arg : instruction.command.sibling = arg[0]; else if (typeof arg === "object" && arg.childNodes && arg.childNodes.length) !instruction.command.collection.length ? instruction.command.collection = h.arrayFromList(arg.childNodes) : instruction.command.sibling = arg.childNodes[0]; else if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.index && instruction.command.sibling) throw new Error(mixitup.messages.errorInsertInvalidArguments());
                        if (!instruction.command.collection.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningInsertNoElements());
                        instruction = self.callFilters("instructionParseInsertArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseRemoveArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, target = null, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandRemove;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "number":
                                if (self.targets[arg]) instruction.command.targets[0] = self.targets[arg];
                                break;

                              case "string":
                                instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));
                                break;

                              case "object":
                                if (arg && arg.length) instruction.command.collection = arg; else if (h.isElement(arg, self.dom.document)) instruction.command.collection = [ arg ]; else h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        if (instruction.command.collection.length) for (i = 0; target = self.targets[i]; i++) if (instruction.command.collection.indexOf(target.dom.el) > -1) instruction.command.targets.push(target);
                        if (!instruction.command.targets.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningRemoveNoElements());
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseDatasetArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandDataset;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "object":
                                if (Array.isArray(arg) || typeof arg.length === "number") instruction.command.dataset = arg; else h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseChangeLayoutArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandChangeLayout;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "string":
                                instruction.command.containerClassName = arg;
                                break;

                              case "object":
                                h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        h.freeze(instruction);
                        return instruction;
                    },
                    queueMix: function(queueItem) {
                        var self = this, deferred = null, toggleSelector = "";
                        self.callActions("beforeQueueMix", arguments);
                        deferred = h.defer(mixitup.libraries);
                        if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                            queueItem.deferred = deferred;
                            self.queue.push(queueItem);
                            if (self.config.controls.enable) if (self.isToggling) {
                                self.buildToggleArray(queueItem.instruction.command);
                                toggleSelector = self.getToggleSelector();
                                self.updateControls({
                                    filter: {
                                        selector: toggleSelector
                                    }
                                });
                            } else self.updateControls(queueItem.instruction.command);
                        } else {
                            if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                            deferred.resolve(self.state);
                            mixitup.events.fire("mixBusy", self.dom.container, {
                                state: self.state,
                                instance: self
                            }, self.dom.document);
                            if (typeof self.config.callbacks.onMixBusy === "function") self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
                        }
                        return self.callFilters("promiseQueueMix", deferred.promise, arguments);
                    },
                    getDataOperation: function(newDataset) {
                        var self = this, operation = new mixitup.Operation, startDataset = [];
                        operation = self.callFilters("operationUnmappedGetDataOperation", operation, arguments);
                        if (self.dom.targets.length && !(startDataset = self.state.activeDataset || []).length) throw new Error(mixitup.messages.errorDatasetNotSet());
                        operation.id = h.randomHex();
                        operation.startState = self.state;
                        operation.startDataset = startDataset;
                        operation.newDataset = newDataset.slice();
                        self.diffDatasets(operation);
                        operation.startOrder = self.targets;
                        operation.newOrder = operation.show;
                        if (self.config.animation.enable) {
                            self.getStartMixData(operation);
                            self.setInter(operation);
                            operation.docState = h.getDocumentState(self.dom.document);
                            self.getInterMixData(operation);
                            self.setFinal(operation);
                            self.getFinalMixData(operation);
                            self.parseEffects();
                            operation.hasEffect = self.hasEffect();
                            self.getTweenData(operation);
                        }
                        self.targets = operation.show.slice();
                        operation.newState = self.buildState(operation);
                        Array.prototype.push.apply(self.targets, operation.toRemove);
                        operation = self.callFilters("operationMappedGetDataOperation", operation, arguments);
                        return operation;
                    },
                    diffDatasets: function(operation) {
                        var self = this, persistantStartIds = [], persistantNewIds = [], insertedTargets = [], data = null, target = null, el = null, frag = null, nextEl = null, uids = {}, id = "", i = -1;
                        self.callActions("beforeDiffDatasets", arguments);
                        for (i = 0; data = operation.newDataset[i]; i++) {
                            if (typeof (id = data[self.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                                uidKey: self.config.data.uidKey
                            }));
                            if (!uids[id]) uids[id] = true; else throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                                uid: id
                            }));
                            if ((target = self.cache[id]) instanceof mixitup.Target) {
                                if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                                    el = target.render(data);
                                    target.data = data;
                                    if (el !== target.dom.el) {
                                        if (target.isInDom) {
                                            target.unbindEvents();
                                            self.dom.parent.replaceChild(el, target.dom.el);
                                        }
                                        if (!target.isShown) el.style.display = "none";
                                        target.dom.el = el;
                                        if (target.isInDom) target.bindEvents();
                                    }
                                }
                                el = target.dom.el;
                            } else {
                                target = new mixitup.Target;
                                target.init(null, self, data);
                                target.hide();
                            }
                            if (!target.isInDom) {
                                if (!frag) frag = self.dom.document.createDocumentFragment();
                                if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                                frag.appendChild(target.dom.el);
                                target.isInDom = true;
                                target.unbindEvents();
                                target.bindEvents();
                                target.hide();
                                operation.toShow.push(target);
                                insertedTargets.push(target);
                            } else {
                                nextEl = target.dom.el.nextElementSibling;
                                persistantNewIds.push(id);
                                if (frag) {
                                    if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                                    self.insertDatasetFrag(frag, target.dom.el, insertedTargets);
                                    frag = null;
                                }
                            }
                            operation.show.push(target);
                        }
                        if (frag) {
                            nextEl = nextEl || self.config.layout.siblingAfter;
                            if (nextEl) frag.appendChild(self.dom.document.createTextNode(" "));
                            self.insertDatasetFrag(frag, nextEl, insertedTargets);
                        }
                        for (i = 0; data = operation.startDataset[i]; i++) {
                            id = data[self.config.data.uidKey];
                            target = self.cache[id];
                            if (operation.show.indexOf(target) < 0) {
                                operation.hide.push(target);
                                operation.toHide.push(target);
                                operation.toRemove.push(target);
                            } else persistantStartIds.push(id);
                        }
                        if (!h.isEqualArray(persistantStartIds, persistantNewIds)) operation.willSort = true;
                        self.callActions("afterDiffDatasets", arguments);
                    },
                    insertDatasetFrag: function(frag, nextEl, targets) {
                        var self = this;
                        var insertAt = nextEl ? h.arrayFromList(self.dom.parent.children).indexOf(nextEl) : self.targets.length;
                        self.dom.parent.insertBefore(frag, nextEl);
                        while (targets.length) {
                            self.targets.splice(insertAt, 0, targets.shift());
                            insertAt++;
                        }
                    },
                    willSort: function(sortCommandA, sortCommandB) {
                        var self = this, result = false;
                        if (self.config.behavior.liveSort || sortCommandA.order === "random" || sortCommandA.attribute !== sortCommandB.attribute || sortCommandA.order !== sortCommandB.order || sortCommandA.collection !== sortCommandB.collection || sortCommandA.next === null && sortCommandB.next || sortCommandA.next && sortCommandB.next === null) result = true; else if (sortCommandA.next && sortCommandB.next) result = self.willSort(sortCommandA.next, sortCommandB.next); else result = false;
                        return self.callFilters("resultWillSort", result, arguments);
                    },
                    show: function() {
                        var self = this;
                        return self.filter("all");
                    },
                    hide: function() {
                        var self = this;
                        return self.filter("none");
                    },
                    isMixing: function() {
                        var self = this;
                        return self.isBusy;
                    },
                    filter: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments);
                        return self.multimix({
                            filter: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    toggleOn: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, toggleSelector = "";
                        self.isToggling = true;
                        if (self.toggleArray.indexOf(selector) < 0) self.toggleArray.push(selector);
                        toggleSelector = self.getToggleSelector();
                        return self.multimix({
                            filter: toggleSelector
                        }, instruction.animate, instruction.callback);
                    },
                    toggleOff: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, selectorIndex = self.toggleArray.indexOf(selector), toggleSelector = "";
                        self.isToggling = true;
                        if (selectorIndex > -1) self.toggleArray.splice(selectorIndex, 1);
                        toggleSelector = self.getToggleSelector();
                        return self.multimix({
                            filter: toggleSelector
                        }, instruction.animate, instruction.callback);
                    },
                    sort: function() {
                        var self = this, instruction = self.parseSortArgs(arguments);
                        return self.multimix({
                            sort: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    changeLayout: function() {
                        var self = this, instruction = self.parseChangeLayoutArgs(arguments);
                        return self.multimix({
                            changeLayout: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    dataset: function() {
                        var self = this, instruction = self.parseDatasetArgs(arguments), operation = null, queueItem = null, animate = false;
                        self.callActions("beforeDataset", arguments);
                        if (!self.isBusy) {
                            if (instruction.callback) self.userCallback = instruction.callback;
                            animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                            operation = self.getDataOperation(instruction.command.dataset);
                            return self.goMix(animate, operation);
                        } else {
                            queueItem = new mixitup.QueueItem;
                            queueItem.args = arguments;
                            queueItem.instruction = instruction;
                            return self.queueMix(queueItem);
                        }
                    },
                    multimix: function() {
                        var self = this, operation = null, animate = false, queueItem = null, instruction = self.parseMultimixArgs(arguments);
                        self.callActions("beforeMultimix", arguments);
                        if (!self.isBusy) {
                            operation = self.getOperation(instruction.command);
                            if (self.config.controls.enable) {
                                if (instruction.command.filter && !self.isToggling) {
                                    self.toggleArray.length = 0;
                                    self.buildToggleArray(operation.command);
                                }
                                if (self.queue.length < 1) self.updateControls(operation.command);
                            }
                            if (instruction.callback) self.userCallback = instruction.callback;
                            animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                            self.callFilters("operationMultimix", operation, arguments);
                            return self.goMix(animate, operation);
                        } else {
                            queueItem = new mixitup.QueueItem;
                            queueItem.args = arguments;
                            queueItem.instruction = instruction;
                            queueItem.triggerElement = self.lastClicked;
                            queueItem.isToggling = self.isToggling;
                            return self.queueMix(queueItem);
                        }
                    },
                    getOperation: function(multimixCommand) {
                        var self = this, sortCommand = multimixCommand.sort, filterCommand = multimixCommand.filter, changeLayoutCommand = multimixCommand.changeLayout, removeCommand = multimixCommand.remove, insertCommand = multimixCommand.insert, operation = new mixitup.Operation;
                        operation = self.callFilters("operationUnmappedGetOperation", operation, arguments);
                        operation.id = h.randomHex();
                        operation.command = multimixCommand;
                        operation.startState = self.state;
                        operation.triggerElement = self.lastClicked;
                        if (self.isBusy) {
                            if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                            return null;
                        }
                        if (insertCommand) self.insertTargets(insertCommand, operation);
                        if (removeCommand) operation.toRemove = removeCommand.targets;
                        operation.startSort = operation.newSort = operation.startState.activeSort;
                        operation.startOrder = operation.newOrder = self.targets;
                        if (sortCommand) {
                            operation.startSort = operation.startState.activeSort;
                            operation.newSort = sortCommand;
                            operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);
                            if (operation.willSort) self.sortOperation(operation);
                        }
                        operation.startFilter = operation.startState.activeFilter;
                        if (filterCommand) operation.newFilter = filterCommand; else operation.newFilter = h.extend(new mixitup.CommandFilter, operation.startFilter);
                        if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target; else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
                        self.filterOperation(operation);
                        operation.startContainerClassName = operation.startState.activeContainerClassName;
                        if (changeLayoutCommand) {
                            operation.newContainerClassName = changeLayoutCommand.containerClassName;
                            if (operation.newContainerClassName !== operation.startContainerClassName) operation.willChangeLayout = true;
                        } else operation.newContainerClassName = operation.startContainerClassName;
                        if (self.config.animation.enable) {
                            self.getStartMixData(operation);
                            self.setInter(operation);
                            operation.docState = h.getDocumentState(self.dom.document);
                            self.getInterMixData(operation);
                            self.setFinal(operation);
                            self.getFinalMixData(operation);
                            self.parseEffects();
                            operation.hasEffect = self.hasEffect();
                            self.getTweenData(operation);
                        }
                        if (operation.willSort) self.targets = operation.newOrder;
                        operation.newState = self.buildState(operation);
                        return self.callFilters("operationMappedGetOperation", operation, arguments);
                    },
                    tween: function(operation, multiplier) {
                        var target = null, posData = null, toHideIndex = -1, i = -1;
                        multiplier = Math.min(multiplier, 1);
                        multiplier = Math.max(multiplier, 0);
                        for (i = 0; target = operation.show[i]; i++) {
                            posData = operation.showPosData[i];
                            target.applyTween(posData, multiplier);
                        }
                        for (i = 0; target = operation.hide[i]; i++) {
                            if (target.isShown) target.hide();
                            if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                                posData = operation.toHidePosData[toHideIndex];
                                if (!target.isShown) target.show();
                                target.applyTween(posData, multiplier);
                            }
                        }
                    },
                    insert: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.multimix({
                            insert: args.command
                        }, args.animate, args.callback);
                    },
                    insertBefore: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(args.command.collection, "before", args.command.sibling, args.animate, args.callback);
                    },
                    insertAfter: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(args.command.collection, "after", args.command.sibling, args.animate, args.callback);
                    },
                    prepend: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(0, args.command.collection, args.animate, args.callback);
                    },
                    append: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
                    },
                    remove: function() {
                        var self = this, args = self.parseRemoveArgs(arguments);
                        return self.multimix({
                            remove: args.command
                        }, args.animate, args.callback);
                    },
                    getConfig: function(stringKey) {
                        var self = this, value = null;
                        if (!stringKey) value = self.config; else value = h.getProperty(self.config, stringKey);
                        return self.callFilters("valueGetConfig", value, arguments);
                    },
                    configure: function(config) {
                        var self = this;
                        self.callActions("beforeConfigure", arguments);
                        h.extend(self.config, config, true, true);
                        self.callActions("afterConfigure", arguments);
                    },
                    getState: function() {
                        var self = this, state = null;
                        state = new mixitup.State;
                        h.extend(state, self.state);
                        h.freeze(state);
                        return self.callFilters("stateGetState", state, arguments);
                    },
                    forceRefresh: function() {
                        var self = this;
                        self.indexTargets();
                    },
                    forceRender: function() {
                        var self = this, target = null, el = null, id = "";
                        for (id in self.cache) {
                            target = self.cache[id];
                            el = target.render(target.data);
                            if (el !== target.dom.el) {
                                if (target.isInDom) {
                                    target.unbindEvents();
                                    self.dom.parent.replaceChild(el, target.dom.el);
                                }
                                if (!target.isShown) el.style.display = "none";
                                target.dom.el = el;
                                if (target.isInDom) target.bindEvents();
                            }
                        }
                        self.state = self.buildState(self.lastOperation);
                    },
                    destroy: function(cleanUp) {
                        var self = this, control = null, target = null, i = 0;
                        self.callActions("beforeDestroy", arguments);
                        for (i = 0; control = self.controls[i]; i++) control.removeBinding(self);
                        for (i = 0; target = self.targets[i]; i++) {
                            if (cleanUp) target.show();
                            target.unbindEvents();
                        }
                        if (self.dom.container.id.match(/^MixItUp/)) self.dom.container.removeAttribute("id");
                        delete mixitup.instances[self.id];
                        self.callActions("afterDestroy", arguments);
                    }
                });
                mixitup.IMoveData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.posIn = null;
                    this.posOut = null;
                    this.operation = null;
                    this.callback = null;
                    this.statusChange = "";
                    this.duration = -1;
                    this.staggerIndex = -1;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.IMoveData);
                mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;
                mixitup.TargetDom = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.el = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TargetDom);
                mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);
                mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;
                mixitup.Target = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.sortString = "";
                    this.mixer = null;
                    this.callback = null;
                    this.isShown = false;
                    this.isBound = false;
                    this.isExcluded = false;
                    this.isInDom = false;
                    this.handler = null;
                    this.operation = null;
                    this.data = null;
                    this.dom = new mixitup.TargetDom;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Target);
                mixitup.Target.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Target.prototype, {
                    constructor: mixitup.Target,
                    init: function(el, mixer, data) {
                        var self = this, id = "";
                        self.callActions("beforeInit", arguments);
                        self.mixer = mixer;
                        if (!el) el = self.render(data);
                        self.cacheDom(el);
                        self.bindEvents();
                        if (self.dom.el.style.display !== "none") self.isShown = true;
                        if (data && mixer.config.data.uidKey) {
                            if (typeof (id = data[mixer.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                                uidKey: mixer.config.data.uidKey
                            }));
                            self.id = id;
                            self.data = data;
                            mixer.cache[id] = self;
                        }
                        self.callActions("afterInit", arguments);
                    },
                    render: function(data) {
                        var self = this, render = null, el = null, temp = null, output = "";
                        self.callActions("beforeRender", arguments);
                        render = self.callFilters("renderRender", self.mixer.config.render.target, arguments);
                        if (typeof render !== "function") throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
                        output = render(data);
                        if (output && typeof output === "object" && h.isElement(output)) el = output; else if (typeof output === "string") {
                            temp = document.createElement("div");
                            temp.innerHTML = output;
                            el = temp.firstElementChild;
                        }
                        return self.callFilters("elRender", el, arguments);
                    },
                    cacheDom: function(el) {
                        var self = this;
                        self.callActions("beforeCacheDom", arguments);
                        self.dom.el = el;
                        self.callActions("afterCacheDom", arguments);
                    },
                    getSortString: function(attributeName) {
                        var self = this, value = self.dom.el.getAttribute("data-" + attributeName) || "";
                        self.callActions("beforeGetSortString", arguments);
                        value = isNaN(value * 1) ? value.toLowerCase() : value * 1;
                        self.sortString = value;
                        self.callActions("afterGetSortString", arguments);
                    },
                    show: function() {
                        var self = this;
                        self.callActions("beforeShow", arguments);
                        if (!self.isShown) {
                            self.dom.el.style.display = "";
                            self.isShown = true;
                        }
                        self.callActions("afterShow", arguments);
                    },
                    hide: function() {
                        var self = this;
                        self.callActions("beforeHide", arguments);
                        if (self.isShown) {
                            self.dom.el.style.display = "none";
                            self.isShown = false;
                        }
                        self.callActions("afterHide", arguments);
                    },
                    move: function(moveData) {
                        var self = this;
                        self.callActions("beforeMove", arguments);
                        if (!self.isExcluded) self.mixer.targetsMoved++;
                        self.applyStylesIn(moveData);
                        requestAnimationFrame((function() {
                            self.applyStylesOut(moveData);
                        }));
                        self.callActions("afterMove", arguments);
                    },
                    applyTween: function(posData, multiplier) {
                        var self = this, propertyName = "", tweenData = null, posIn = posData.posIn, currentTransformValues = [], currentValues = new mixitup.StyleData, i = -1;
                        self.callActions("beforeApplyTween", arguments);
                        currentValues.x = posIn.x;
                        currentValues.y = posIn.y;
                        if (multiplier === 0) self.hide(); else if (!self.isShown) self.show();
                        for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                            tweenData = posData.tweenData[propertyName];
                            if (propertyName === "x") {
                                if (!tweenData) continue;
                                currentValues.x = posIn.x + tweenData * multiplier;
                            } else if (propertyName === "y") {
                                if (!tweenData) continue;
                                currentValues.y = posIn.y + tweenData * multiplier;
                            } else if (tweenData instanceof mixitup.TransformData) {
                                if (!tweenData.value) continue;
                                currentValues[propertyName].value = posIn[propertyName].value + tweenData.value * multiplier;
                                currentValues[propertyName].unit = tweenData.unit;
                                currentTransformValues.push(propertyName + "(" + currentValues[propertyName].value + tweenData.unit + ")");
                            } else {
                                if (!tweenData) continue;
                                currentValues[propertyName] = posIn[propertyName] + tweenData * multiplier;
                                self.dom.el.style[propertyName] = currentValues[propertyName];
                            }
                        }
                        if (currentValues.x || currentValues.y) currentTransformValues.unshift("translate(" + currentValues.x + "px, " + currentValues.y + "px)");
                        if (currentTransformValues.length) self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(" ");
                        self.callActions("afterApplyTween", arguments);
                    },
                    applyStylesIn: function(moveData) {
                        var self = this, posIn = moveData.posIn, isFading = self.mixer.effectsIn.opacity !== 1, transformValues = [];
                        self.callActions("beforeApplyStylesIn", arguments);
                        transformValues.push("translate(" + posIn.x + "px, " + posIn.y + "px)");
                        if (self.mixer.config.animation.animateResizeTargets) {
                            if (moveData.statusChange !== "show") {
                                self.dom.el.style.width = posIn.width + "px";
                                self.dom.el.style.height = posIn.height + "px";
                            }
                            self.dom.el.style.marginRight = posIn.marginRight + "px";
                            self.dom.el.style.marginBottom = posIn.marginBottom + "px";
                        }
                        isFading && (self.dom.el.style.opacity = posIn.opacity);
                        if (moveData.statusChange === "show") transformValues = transformValues.concat(self.mixer.transformIn);
                        self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
                        self.callActions("afterApplyStylesIn", arguments);
                    },
                    applyStylesOut: function(moveData) {
                        var self = this, transitionRules = [], transformValues = [], isResizing = self.mixer.config.animation.animateResizeTargets, isFading = typeof self.mixer.effectsIn.opacity !== "undefined";
                        self.callActions("beforeApplyStylesOut", arguments);
                        transitionRules.push(self.writeTransitionRule(mixitup.features.transformRule, moveData.staggerIndex));
                        if (moveData.statusChange !== "none") transitionRules.push(self.writeTransitionRule("opacity", moveData.staggerIndex, moveData.duration));
                        if (isResizing) {
                            transitionRules.push(self.writeTransitionRule("width", moveData.staggerIndex, moveData.duration));
                            transitionRules.push(self.writeTransitionRule("height", moveData.staggerIndex, moveData.duration));
                            transitionRules.push(self.writeTransitionRule("margin", moveData.staggerIndex, moveData.duration));
                        }
                        if (!moveData.callback) {
                            self.mixer.targetsImmovable++;
                            if (self.mixer.targetsMoved === self.mixer.targetsImmovable) self.mixer.cleanUp(moveData.operation);
                            return;
                        }
                        self.operation = moveData.operation;
                        self.callback = moveData.callback;
                        !self.isExcluded && self.mixer.targetsBound++;
                        self.isBound = true;
                        self.applyTransition(transitionRules);
                        if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                            self.dom.el.style.width = moveData.posOut.width + "px";
                            self.dom.el.style.height = moveData.posOut.height + "px";
                            self.dom.el.style.marginRight = moveData.posOut.marginRight + "px";
                            self.dom.el.style.marginBottom = moveData.posOut.marginBottom + "px";
                        }
                        if (!self.mixer.config.animation.nudge && moveData.statusChange === "hide") transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
                        switch (moveData.statusChange) {
                          case "hide":
                            isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);
                            transformValues = transformValues.concat(self.mixer.transformOut);
                            break;

                          case "show":
                            isFading && (self.dom.el.style.opacity = 1);
                        }
                        if (self.mixer.config.animation.nudge || !self.mixer.config.animation.nudge && moveData.statusChange !== "hide") transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
                        self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
                        self.callActions("afterApplyStylesOut", arguments);
                    },
                    writeTransitionRule: function(property, staggerIndex, duration) {
                        var self = this, delay = self.getDelay(staggerIndex), rule = "";
                        rule = property + " " + (duration > 0 ? duration : self.mixer.config.animation.duration) + "ms " + delay + "ms " + (property === "opacity" ? "linear" : self.mixer.config.animation.easing);
                        return self.callFilters("ruleWriteTransitionRule", rule, arguments);
                    },
                    getDelay: function(index) {
                        var self = this, delay = -1;
                        if (typeof self.mixer.config.animation.staggerSequence === "function") index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
                        delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;
                        return self.callFilters("delayGetDelay", delay, arguments);
                    },
                    applyTransition: function(rules) {
                        var self = this, transitionString = rules.join(", ");
                        self.callActions("beforeApplyTransition", arguments);
                        self.dom.el.style[mixitup.features.transitionProp] = transitionString;
                        self.callActions("afterApplyTransition", arguments);
                    },
                    handleTransitionEnd: function(e) {
                        var self = this, propName = e.propertyName, canResize = self.mixer.config.animation.animateResizeTargets;
                        self.callActions("beforeHandleTransitionEnd", arguments);
                        if (self.isBound && e.target.matches(self.mixer.config.selectors.target) && (propName.indexOf("transform") > -1 || propName.indexOf("opacity") > -1 || canResize && propName.indexOf("height") > -1 || canResize && propName.indexOf("width") > -1 || canResize && propName.indexOf("margin") > -1)) {
                            self.callback.call(self, self.operation);
                            self.isBound = false;
                            self.callback = null;
                            self.operation = null;
                        }
                        self.callActions("afterHandleTransitionEnd", arguments);
                    },
                    eventBus: function(e) {
                        var self = this;
                        self.callActions("beforeEventBus", arguments);
                        switch (e.type) {
                          case "webkitTransitionEnd":
                          case "transitionend":
                            self.handleTransitionEnd(e);
                        }
                        self.callActions("afterEventBus", arguments);
                    },
                    unbindEvents: function() {
                        var self = this;
                        self.callActions("beforeUnbindEvents", arguments);
                        h.off(self.dom.el, "webkitTransitionEnd", self.handler);
                        h.off(self.dom.el, "transitionend", self.handler);
                        self.callActions("afterUnbindEvents", arguments);
                    },
                    bindEvents: function() {
                        var self = this, transitionEndEvent = "";
                        self.callActions("beforeBindEvents", arguments);
                        transitionEndEvent = mixitup.features.transitionPrefix === "webkit" ? "webkitTransitionEnd" : "transitionend";
                        self.handler = function(e) {
                            return self.eventBus(e);
                        };
                        h.on(self.dom.el, transitionEndEvent, self.handler);
                        self.callActions("afterBindEvents", arguments);
                    },
                    getPosData: function(getBox) {
                        var self = this, styles = {}, rect = null, posData = new mixitup.StyleData;
                        self.callActions("beforeGetPosData", arguments);
                        posData.x = self.dom.el.offsetLeft;
                        posData.y = self.dom.el.offsetTop;
                        if (self.mixer.config.animation.animateResizeTargets || getBox) {
                            rect = self.dom.el.getBoundingClientRect();
                            posData.top = rect.top;
                            posData.right = rect.right;
                            posData.bottom = rect.bottom;
                            posData.left = rect.left;
                            posData.width = rect.width;
                            posData.height = rect.height;
                        }
                        if (self.mixer.config.animation.animateResizeTargets) {
                            styles = window.getComputedStyle(self.dom.el);
                            posData.marginBottom = parseFloat(styles.marginBottom);
                            posData.marginRight = parseFloat(styles.marginRight);
                        }
                        return self.callFilters("posDataGetPosData", posData, arguments);
                    },
                    cleanUp: function() {
                        var self = this;
                        self.callActions("beforeCleanUp", arguments);
                        self.dom.el.style[mixitup.features.transformProp] = "";
                        self.dom.el.style[mixitup.features.transitionProp] = "";
                        self.dom.el.style.opacity = "";
                        if (self.mixer.config.animation.animateResizeTargets) {
                            self.dom.el.style.width = "";
                            self.dom.el.style.height = "";
                            self.dom.el.style.marginRight = "";
                            self.dom.el.style.marginBottom = "";
                        }
                        self.callActions("afterCleanUp", arguments);
                    }
                });
                mixitup.Collection = function(instances) {
                    var instance = null, i = -1;
                    this.callActions("beforeConstruct");
                    for (i = 0; instance = instances[i]; i++) this[i] = instance;
                    this.length = instances.length;
                    this.callActions("afterConstruct");
                    h.freeze(this);
                };
                mixitup.BaseStatic.call(mixitup.Collection);
                mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Collection.prototype, {
                    constructor: mixitup.Collection,
                    mixitup: function(methodName) {
                        var self = this, instance = null, args = Array.prototype.slice.call(arguments), tasks = [], i = -1;
                        this.callActions("beforeMixitup");
                        args.shift();
                        for (i = 0; instance = self[i]; i++) tasks.push(instance[methodName].apply(instance, args));
                        return self.callFilters("promiseMixitup", h.all(tasks, mixitup.libraries), arguments);
                    }
                });
                mixitup.Operation = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.args = [];
                    this.command = null;
                    this.showPosData = [];
                    this.toHidePosData = [];
                    this.startState = null;
                    this.newState = null;
                    this.docState = null;
                    this.willSort = false;
                    this.willChangeLayout = false;
                    this.hasEffect = false;
                    this.hasFailed = false;
                    this.triggerElement = null;
                    this.show = [];
                    this.hide = [];
                    this.matching = [];
                    this.toShow = [];
                    this.toHide = [];
                    this.toMove = [];
                    this.toRemove = [];
                    this.startOrder = [];
                    this.newOrder = [];
                    this.startSort = null;
                    this.newSort = null;
                    this.startFilter = null;
                    this.newFilter = null;
                    this.startDataset = null;
                    this.newDataset = null;
                    this.viewportDeltaX = 0;
                    this.viewportDeltaY = 0;
                    this.startX = 0;
                    this.startY = 0;
                    this.startHeight = 0;
                    this.startWidth = 0;
                    this.newX = 0;
                    this.newY = 0;
                    this.newHeight = 0;
                    this.newWidth = 0;
                    this.startContainerClassName = "";
                    this.startDisplay = "";
                    this.newContainerClassName = "";
                    this.newDisplay = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Operation);
                mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Operation.prototype.constructor = mixitup.Operation;
                mixitup.State = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.activeFilter = null;
                    this.activeSort = null;
                    this.activeContainerClassName = "";
                    this.container = null;
                    this.targets = [];
                    this.hide = [];
                    this.show = [];
                    this.matching = [];
                    this.totalTargets = -1;
                    this.totalShow = -1;
                    this.totalHide = -1;
                    this.totalMatching = -1;
                    this.hasFailed = false;
                    this.triggerElement = null;
                    this.activeDataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.State);
                mixitup.State.prototype = Object.create(mixitup.Base.prototype);
                mixitup.State.prototype.constructor = mixitup.State;
                mixitup.UserInstruction = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.command = {};
                    this.animate = false;
                    this.callback = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.UserInstruction);
                mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);
                mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;
                mixitup.Messages = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function";
                    this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element";
                    this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`";
                    this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`";
                    this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';
                    this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?';
                    this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`";
                    this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';
                    this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';
                    this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both";
                    this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container";
                    this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both";
                    this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`";
                    this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets";
                    this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`";
                    this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container";
                    this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored." + " If you wish to perform additional methods on this instance, please create a reference.";
                    this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`";
                    this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`";
                    this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the " + "queue is full or queuing is disabled.";
                    this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.";
                    this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install" + " an ES6 Promise polyfill.";
                    this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' + " which may product unexpected sort output";
                    this.callActions("afterConstruct");
                    this.compileTemplates();
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Messages);
                mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Messages.prototype.constructor = mixitup.Messages;
                mixitup.Messages.prototype.compileTemplates = function() {
                    var errorKey = "";
                    var errorMessage = "";
                    for (errorKey in this) {
                        if (typeof (errorMessage = this[errorKey]) !== "string") continue;
                        this[h.camelCase(errorKey)] = h.template(errorMessage);
                    }
                };
                mixitup.messages = new mixitup.Messages;
                mixitup.Facade = function Mixer(mixer) {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct", arguments);
                    this.configure = mixer.configure.bind(mixer);
                    this.show = mixer.show.bind(mixer);
                    this.hide = mixer.hide.bind(mixer);
                    this.filter = mixer.filter.bind(mixer);
                    this.toggleOn = mixer.toggleOn.bind(mixer);
                    this.toggleOff = mixer.toggleOff.bind(mixer);
                    this.sort = mixer.sort.bind(mixer);
                    this.changeLayout = mixer.changeLayout.bind(mixer);
                    this.multimix = mixer.multimix.bind(mixer);
                    this.dataset = mixer.dataset.bind(mixer);
                    this.tween = mixer.tween.bind(mixer);
                    this.insert = mixer.insert.bind(mixer);
                    this.insertBefore = mixer.insertBefore.bind(mixer);
                    this.insertAfter = mixer.insertAfter.bind(mixer);
                    this.prepend = mixer.prepend.bind(mixer);
                    this.append = mixer.append.bind(mixer);
                    this.remove = mixer.remove.bind(mixer);
                    this.destroy = mixer.destroy.bind(mixer);
                    this.forceRefresh = mixer.forceRefresh.bind(mixer);
                    this.forceRender = mixer.forceRender.bind(mixer);
                    this.isMixing = mixer.isMixing.bind(mixer);
                    this.getOperation = mixer.getOperation.bind(mixer);
                    this.getConfig = mixer.getConfig.bind(mixer);
                    this.getState = mixer.getState.bind(mixer);
                    this.callActions("afterConstruct", arguments);
                    h.freeze(this);
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Facade);
                mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Facade.prototype.constructor = mixitup.Facade;
                if (true) module.exports = mixitup;
                mixitup.BaseStatic.call(mixitup.constructor);
                mixitup.NAME = "mixitup";
                mixitup.CORE_VERSION = "3.3.1";
            })(window);
        },
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function menuCloseBackDrop() {
            document.addEventListener("click", (function(e) {
                if (document.querySelector(".menu-open")?.classList.contains("menu-open") && !e.target.closest(".header")) functions_menuClose();
            }));
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                document.addEventListener("click", setSpollerAction);
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                spollersArray.forEach((item => {
                    if (item.dataset.spollers !== "") {
                        const mqArr = item.dataset.spollers.split(",");
                        if (matchMedia(`(${mqArr[1]}: ${mqArr[0]}px)`)) {
                            const details = item.querySelector("details");
                            const summary = item.querySelector("summary");
                            if (!details.hasAttributes("open")) details.setAttribute("open");
                            document.addEventListener("click", (function(e) {
                                if (e.target.contains(summary)) e.preventDefault();
                            }));
                        }
                    }
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerItems = spollersBlock.querySelectorAll("details");
                    if (spollerItems.length) {
                        spollerItems = Array.from(spollerItems).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerItems.forEach((spollerItem => {
                            let spollerTitle = spollerItem.querySelector("summary");
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerItem.hasAttribute("data-open")) {
                                    spollerItem.open = false;
                                    spollerTitle.nextElementSibling.hidden = true;
                                } else {
                                    spollerTitle.classList.add("_spoller-active");
                                    spollerItem.open = true;
                                }
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.classList.remove("_spoller-active");
                                spollerItem.open = true;
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                        const spollerTitle = el.closest("summary");
                        const spollerBlock = spollerTitle.closest("details");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                            !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                spollerBlock.open = false;
                            }), spollerSpeed);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                            if (scrollSpoller && spollerTitle.classList.contains("_spoller-active")) {
                                const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                                const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                                const scrollSpollerNoHeader = spollerBlock.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                                window.scrollTo({
                                    top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                                    behavior: "smooth"
                                });
                            }
                        }
                        e.preventDefault();
                    }
                    if (!el.closest("[data-spollers]")) {
                        const spollersClose = document.querySelectorAll("[data-spoller-close]");
                        if (spollersClose.length) spollersClose.forEach((spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerCloseBlock = spollerClose.parentNode;
                            if (spollersBlock.classList.contains("_spoller-init")) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                setTimeout((() => {
                                    spollerCloseBlock.open = false;
                                }), spollerSpeed);
                            }
                        }));
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                    const tt = spollersBlock.querySelector("._spoller-active");
                    console.log(tt);
                    if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        setTimeout((() => {
                            spollerActiveBlock.open = false;
                        }), spollerSpeed);
                    }
                }
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function functions_menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function chengeActiveClassHeaderAnyType() {
            document.addEventListener("click", chengeActiveClassHeaderClick);
            function chengeActiveClassHeaderClick(e) {
                const targetElement = e.target;
                if (targetElement.closest(".header__link")) {
                    const ActiveItem = document.querySelector(".link-action");
                    ActiveItem?.classList.remove("link-action");
                    targetElement.classList.add("link-action");
                }
            }
            document.addEventListener("scroll", chengeActiveClassHeaderonScroll);
            function chengeActiveClassHeaderonScroll() {
                const headerLinks = document.querySelectorAll("[data-goto]");
                const idBlocks = document.querySelectorAll("section[id]");
                let activeHeaderElement = document.querySelector(".link-action");
                const observerOptions = {
                    rootMargin: "-10% 0px -10% 0px"
                };
                if (headerLinks.length && idBlocks.length) {
                    const observer = new IntersectionObserver(((entries, observer) => {
                        entries.forEach((entry => {
                            if (entry.isIntersecting) {
                                const targetId = entry.target.id;
                                document.querySelector(`[data-goto="${targetId}"]`);
                                if ("#" + targetId != activeHeaderElement?.getAttribute("data-goto")) headerLinks.forEach((headerLink => {
                                    headerLink.classList.remove("link-action");
                                    if (headerLink.getAttribute("data-goto") == "#" + targetId) headerLink.classList.add("link-action");
                                }));
                            }
                        }));
                    }), observerOptions);
                    idBlocks.forEach((block => {
                        observer.observe(block);
                    }));
                }
            }
        }
        function rippleEffect() {
            document.addEventListener("click", (function(e) {
                const targetItem = e.target;
                if (targetItem.closest("[data-ripple]")) {
                    const button = targetItem.closest("[data-ripple]");
                    const ripple = document.createElement("span");
                    const diameter = Math.max(button.clientWidth, button.clientHeight);
                    const radius = diameter / 2;
                    ripple.style.width = ripple.style.height = `${diameter}px`;
                    ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
                    ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
                    ripple.classList.add("ripple");
                    button.dataset.ripple === "once" && button.querySelector(".ripple") ? button.querySelector(".ripple").remove() : null;
                    button.appendChild(ripple);
                    const timeOut = getAnimationDuration(ripple);
                    setTimeout((() => {
                        ripple ? ripple.remove() : null;
                    }), timeOut);
                    function getAnimationDuration() {
                        const aDuration = window.getComputedStyle(ripple).animationDuration;
                        return aDuration.includes("ms") ? aDuration.replace("ms", "") : aDuration.replace("s", "") * 1e3;
                    }
                }
            }));
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) ;
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function overlay() {
            const overlay = document.querySelector(".cdk-overlay-container");
            const overlayComputedStyle = window.getComputedStyle(overlay);
            bodyLockToggle();
            if (overlayComputedStyle.getPropertyValue("display") === "none") {
                overlay.style = "display: block";
                overlay.children[0].classList.toggle("cdk-overlay-backdrop-showing");
            } else {
                overlay.style = "display: none";
                overlay.children[0].classList.toggle("cdk-overlay-backdrop-showing");
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons) this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) || null; else this.youTubeCode = null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        class MousePRLX {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                if (this.config.init) {
                    const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                    if (paralaxMouse.length) {
                        this.paralaxMouseInit(paralaxMouse);
                        this.setLogging(`Прокинувся, стежу за об'єктами: (${paralaxMouse.length})`);
                    } else this.setLogging("Немає жодного обєкта. Сплю...");
                }
            }
            paralaxMouseInit(paralaxMouse) {
                paralaxMouse.forEach((el => {
                    const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                    const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 10;
                    const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 10;
                    const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                    const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                    const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                    let positionX = 0, positionY = 0;
                    let coordXprocent = 0, coordYprocent = 0;
                    setMouseParallaxStyle();
                    if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                    function setMouseParallaxStyle() {
                        const distX = coordXprocent - positionX;
                        const distY = coordYprocent - positionY;
                        positionX += distX * paramAnimation / 1e3;
                        positionY += distY * paramAnimation / 1e3;
                        el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0) rotate(0.02deg);`;
                        requestAnimationFrame(setMouseParallaxStyle);
                    }
                    function mouseMoveParalax(wrapper = window) {
                        wrapper.addEventListener("mousemove", (function(e) {
                            const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                            if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                                const parallaxWidth = window.innerWidth;
                                const parallaxHeight = window.innerHeight;
                                const coordX = e.clientX - parallaxWidth / 2;
                                const coordY = e.clientY - parallaxHeight / 2;
                                coordXprocent = coordX / parallaxWidth * 100;
                                coordYprocent = coordY / parallaxHeight * 100;
                            }
                        }));
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? functions_FLS(`[PRLX Mouse]: ${message}`) : null;
            }
        }
        modules_flsModules.mousePrlx = new MousePRLX({});
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formQuantity() {
            document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest("[data-quantity-plus]") || targetElement.closest("[data-quantity-minus]")) {
                    const valueElement = targetElement.closest("[data-quantity]").querySelector("[data-quantity-value]");
                    let value = parseInt(valueElement.value);
                    if (targetElement.hasAttribute("data-quantity-plus")) {
                        value++;
                        if (+valueElement.dataset.quantityMax && +valueElement.dataset.quantityMax < value) value = valueElement.dataset.quantityMax;
                    } else {
                        --value;
                        if (+valueElement.dataset.quantityMin) {
                            if (+valueElement.dataset.quantityMin > value) value = valueElement.dataset.quantityMin;
                        } else if (value < 1) value = 1;
                    }
                    targetElement.closest("[data-quantity]").querySelector("[data-quantity-value]").value = value;
                }
            }));
        }
        function formRating() {
            const ratings = document.querySelectorAll(".rating");
            if (ratings.length > 0) initRatings();
            function initRatings() {
                let ratingActive, ratingValue;
                for (let index = 0; index < ratings.length; index++) {
                    const rating = ratings[index];
                    initRating(rating);
                }
                function initRating(rating) {
                    initRatingVars(rating);
                    setRatingActiveWidth();
                    if (rating.classList.contains("rating_set")) setRating(rating);
                }
                function initRatingVars(rating) {
                    ratingActive = rating.querySelector(".rating__active");
                    ratingValue = rating.querySelector(".rating__value");
                }
                function setRatingActiveWidth(index = ratingValue.innerHTML) {
                    const ratingActiveWidth = index / .05;
                    ratingActive.style.width = `${ratingActiveWidth}%`;
                }
                function setRating(rating) {
                    const ratingItems = rating.querySelectorAll(".rating__item");
                    for (let index = 0; index < ratingItems.length; index++) {
                        const ratingItem = ratingItems[index];
                        ratingItem.addEventListener("mouseenter", (function(e) {
                            initRatingVars(rating);
                            setRatingActiveWidth(ratingItem.value);
                        }));
                        ratingItem.addEventListener("mouseleave", (function(e) {
                            setRatingActiveWidth();
                        }));
                        ratingItem.addEventListener("click", (function(e) {
                            initRatingVars(rating);
                            if (rating.dataset.ajax) setRatingValue(ratingItem.value, rating); else {
                                ratingValue.innerHTML = index + 1;
                                setRatingActiveWidth();
                            }
                        }));
                    }
                }
                async function setRatingValue(value, rating) {
                    if (!rating.classList.contains("rating_sending")) {
                        rating.classList.add("rating_sending");
                        let response = await fetch("rating.json", {
                            method: "GET"
                        });
                        if (response.ok) {
                            const result = await response.json();
                            const newRating = result.newRating;
                            ratingValue.innerHTML = newRating;
                            setRatingActiveWidth();
                            rating.classList.remove("rating_sending");
                        } else {
                            alert("Помилка");
                            rating.classList.remove("rating_sending");
                        }
                    }
                }
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true,
                    speed: 150
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, немає жодного select");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
                this.config.speed = +originalSelect.dataset.speed;
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                    setTimeout((() => {
                        selectItem.style.zIndex = "";
                    }), originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
                this.setOptionsPosition(selectItem);
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                setTimeout((() => {
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                        _slideToggle(selectOptions, originalSelect.dataset.speed);
                        if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) selectItem.style.zIndex = selectOpenzIndex; else setTimeout((() => {
                            selectItem.style.zIndex = "";
                        }), originalSelect.dataset.speed);
                    }
                }), 0);
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += `</div>`;
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            setOptionsPosition(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
                const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
                const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
                if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
                    selectOptions.hidden = false;
                    const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
                    const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
                    const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
                    selectOptions.hidden = true;
                    const selectItemHeight = selectItem.offsetHeight;
                    const selectItemPos = selectItem.getBoundingClientRect().top;
                    const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                    const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                    if (selectItemResult < 0) {
                        const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                        if (newMaxHeightValue < 100) {
                            selectItem.classList.add("select--show-top");
                            selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                        } else {
                            selectItem.classList.remove("select--show-top");
                            selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
                        }
                    }
                } else setTimeout((() => {
                    selectItem.classList.remove("select--show-top");
                    selectItemScroll.style.maxHeight = customMaxHeightValue;
                }), +originalSelect.dataset.speed);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
                if (!selectOptions.classList.contains("_slide")) {
                    if (originalSelect.multiple) {
                        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                        const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                        originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                            originalSelectSelectedItem.removeAttribute("selected");
                        }));
                        const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                        selectSelectedItems.forEach((selectSelectedItems => {
                            originalSelect.querySelector(`option[value = "${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                        }));
                    } else {
                        if (!originalSelect.hasAttribute("data-show-selected")) setTimeout((() => {
                            if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                            optionItem.hidden = true;
                        }), this.config.speed);
                        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                        this.selectAction(selectItem);
                    }
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? functions_FLS(`[select]: ${message} `) : null;
            }
        }
        modules_flsModules.select = new SelectConstructor({});
        var PipsMode;
        (function(PipsMode) {
            PipsMode["Range"] = "range";
            PipsMode["Steps"] = "steps";
            PipsMode["Positions"] = "positions";
            PipsMode["Count"] = "count";
            PipsMode["Values"] = "values";
        })(PipsMode || (PipsMode = {}));
        var PipsType;
        (function(PipsType) {
            PipsType[PipsType["None"] = -1] = "None";
            PipsType[PipsType["NoValue"] = 0] = "NoValue";
            PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
            PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
        })(PipsType || (PipsType = {}));
        function isValidFormatter(entry) {
            return isValidPartialFormatter(entry) && typeof entry.from === "function";
        }
        function isValidPartialFormatter(entry) {
            return typeof entry === "object" && typeof entry.to === "function";
        }
        function removeElement(el) {
            el.parentElement.removeChild(el);
        }
        function isSet(value) {
            return value !== null && value !== void 0;
        }
        function preventDefault(e) {
            e.preventDefault();
        }
        function unique(array) {
            return array.filter((function(a) {
                return !this[a] ? this[a] = true : false;
            }), {});
        }
        function closest(value, to) {
            return Math.round(value / to) * to;
        }
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
            return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
        }
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout((function() {
                    removeClass(element, className);
                }), duration);
            }
        }
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }
        function asArray(a) {
            return Array.isArray(a) ? a : [ a ];
        }
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }
        function addClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
        }
        function removeClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
        function hasClass(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
        }
        function getPageOffset(doc) {
            var supportPageOffset = window.pageXOffset !== void 0;
            var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
            var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
            var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
            return {
                x,
                y
            };
        }
        function getActions() {
            return window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            };
        }
        function getSupportsPassive() {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, "passive", {
                    get: function() {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("test", null, opts);
            } catch (e) {}
            return supportsPassive;
        }
        function getSupportsTouchActionNone() {
            return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        function subRangeRatio(pa, pb) {
            return 100 / (pb - pa);
        }
        function fromPercentage(range, value, startRange) {
            return value * 100 / (range[startRange + 1] - range[startRange]);
        }
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
        }
        function isPercentage(range, value) {
            return value * (range[1] - range[0]) / 100 + range[0];
        }
        function getJ(value, arr) {
            var j = 1;
            while (value >= arr[j]) j += 1;
            return j;
        }
        function toStepping(xVal, xPct, value) {
            if (value >= xVal.slice(-1)[0]) return 100;
            var j = getJ(value, xVal);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
        }
        function fromStepping(xVal, xPct, value) {
            if (value >= 100) return xVal.slice(-1)[0];
            var j = getJ(value, xPct);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
        }
        function getStep(xPct, xSteps, snap, value) {
            if (value === 100) return value;
            var j = getJ(value, xPct);
            var a = xPct[j - 1];
            var b = xPct[j];
            if (snap) {
                if (value - a > (b - a) / 2) return b;
                return a;
            }
            if (!xSteps[j - 1]) return value;
            return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
        }
        var Spectrum = function() {
            function Spectrum(entry, snap, singleStep) {
                this.xPct = [];
                this.xVal = [];
                this.xSteps = [];
                this.xNumSteps = [];
                this.xHighestCompleteStep = [];
                this.xSteps = [ singleStep || false ];
                this.xNumSteps = [ false ];
                this.snap = snap;
                var index;
                var ordered = [];
                Object.keys(entry).forEach((function(index) {
                    ordered.push([ asArray(entry[index]), index ]);
                }));
                ordered.sort((function(a, b) {
                    return a[0][0] - b[0][0];
                }));
                for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                this.xNumSteps = this.xSteps.slice(0);
                for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
            }
            Spectrum.prototype.getDistance = function(value) {
                var distances = [];
                for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                return distances;
            };
            Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                var xPct_index = 0;
                if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                if (distances === null) distances = [];
                var start_factor;
                var rest_factor = 1;
                var rest_rel_distance = distances[xPct_index];
                var range_pct = 0;
                var rel_range_distance = 0;
                var abs_distance_counter = 0;
                var range_counter = 0;
                if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                while (rest_rel_distance > 0) {
                    range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                    if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                        rel_range_distance = range_pct * start_factor;
                        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                        start_factor = 1;
                    } else {
                        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                        rest_factor = 0;
                    }
                    if (direction) {
                        abs_distance_counter -= rel_range_distance;
                        if (this.xPct.length + range_counter >= 1) range_counter--;
                    } else {
                        abs_distance_counter += rel_range_distance;
                        if (this.xPct.length - range_counter >= 1) range_counter++;
                    }
                    rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                }
                return value + abs_distance_counter;
            };
            Spectrum.prototype.toStepping = function(value) {
                value = toStepping(this.xVal, this.xPct, value);
                return value;
            };
            Spectrum.prototype.fromStepping = function(value) {
                return fromStepping(this.xVal, this.xPct, value);
            };
            Spectrum.prototype.getStep = function(value) {
                value = getStep(this.xPct, this.xSteps, this.snap, value);
                return value;
            };
            Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                var j = getJ(value, this.xPct);
                if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                return (this.xVal[j] - this.xVal[j - 1]) / size;
            };
            Spectrum.prototype.getNearbySteps = function(value) {
                var j = getJ(value, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[j - 2],
                        step: this.xNumSteps[j - 2],
                        highestStep: this.xHighestCompleteStep[j - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[j - 1],
                        step: this.xNumSteps[j - 1],
                        highestStep: this.xHighestCompleteStep[j - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[j],
                        step: this.xNumSteps[j],
                        highestStep: this.xHighestCompleteStep[j]
                    }
                };
            };
            Spectrum.prototype.countStepDecimals = function() {
                var stepDecimals = this.xNumSteps.map(countDecimals);
                return Math.max.apply(null, stepDecimals);
            };
            Spectrum.prototype.hasNoSize = function() {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
            };
            Spectrum.prototype.convert = function(value) {
                return this.getStep(this.toStepping(value));
            };
            Spectrum.prototype.handleEntryPoint = function(index, value) {
                var percentage;
                if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
                if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(percentage);
                this.xVal.push(value[0]);
                var value1 = Number(value[1]);
                if (!percentage) {
                    if (!isNaN(value1)) this.xSteps[0] = value1;
                } else this.xSteps.push(isNaN(value1) ? false : value1);
                this.xHighestCompleteStep.push(0);
            };
            Spectrum.prototype.handleStepPoint = function(i, n) {
                if (!n) return;
                if (this.xVal[i] === this.xVal[i + 1]) {
                    this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                    return;
                }
                this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                this.xHighestCompleteStep[i] = step;
            };
            return Spectrum;
        }();
        var defaultFormatter = {
            to: function(value) {
                return value === void 0 ? "" : value.toFixed(2);
            },
            from: Number
        };
        var cssClasses = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        };
        var INTERNAL_EVENT_NS = {
            tooltips: ".__tooltips",
            aria: ".__aria"
        };
        function testStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
            parsed.singleStep = entry;
        }
        function testKeyboardPageMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
            parsed.keyboardPageMultiplier = entry;
        }
        function testKeyboardMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
            parsed.keyboardMultiplier = entry;
        }
        function testKeyboardDefaultStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
            parsed.keyboardDefaultStep = entry;
        }
        function testRange(parsed, entry) {
            if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
            if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
        }
        function testStart(parsed, entry) {
            entry = asArray(entry);
            if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
            parsed.handles = entry.length;
            parsed.start = entry;
        }
        function testSnap(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
            parsed.snap = entry;
        }
        function testAnimate(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
            parsed.animate = entry;
        }
        function testAnimationDuration(parsed, entry) {
            if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
            parsed.animationDuration = entry;
        }
        function testConnect(parsed, entry) {
            var connect = [ false ];
            var i;
            if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
            if (entry === true || entry === false) {
                for (i = 1; i < parsed.handles; i++) connect.push(entry);
                connect.push(false);
            } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
            parsed.connect = connect;
        }
        function testOrientation(parsed, entry) {
            switch (entry) {
              case "horizontal":
                parsed.ort = 0;
                break;

              case "vertical":
                parsed.ort = 1;
                break;

              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
        }
        function testMargin(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (entry === 0) return;
            parsed.margin = parsed.spectrum.getDistance(entry);
        }
        function testLimit(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            parsed.limit = parsed.spectrum.getDistance(entry);
            if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
        function testPadding(parsed, entry) {
            var index;
            if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (entry === 0) return;
            if (!Array.isArray(entry)) entry = [ entry, entry ];
            parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
            for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var totalPadding = entry[0] + entry[1];
            var firstValue = parsed.spectrum.xVal[0];
            var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
            if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
        function testDirection(parsed, entry) {
            switch (entry) {
              case "ltr":
                parsed.dir = 0;
                break;

              case "rtl":
                parsed.dir = 1;
                break;

              default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
            }
        }
        function testBehaviour(parsed, entry) {
            if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var tap = entry.indexOf("tap") >= 0;
            var drag = entry.indexOf("drag") >= 0;
            var fixed = entry.indexOf("fixed") >= 0;
            var snap = entry.indexOf("snap") >= 0;
            var hover = entry.indexOf("hover") >= 0;
            var unconstrained = entry.indexOf("unconstrained") >= 0;
            var dragAll = entry.indexOf("drag-all") >= 0;
            var smoothSteps = entry.indexOf("smooth-steps") >= 0;
            if (fixed) {
                if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                testMargin(parsed, parsed.start[1] - parsed.start[0]);
            }
            if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
            parsed.events = {
                tap: tap || snap,
                drag,
                dragAll,
                smoothSteps,
                fixed,
                snap,
                hover,
                unconstrained
            };
        }
        function testTooltips(parsed, entry) {
            if (entry === false) return;
            if (entry === true || isValidPartialFormatter(entry)) {
                parsed.tooltips = [];
                for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
            } else {
                entry = asArray(entry);
                if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                entry.forEach((function(formatter) {
                    if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }));
                parsed.tooltips = entry;
            }
        }
        function testHandleAttributes(parsed, entry) {
            if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
            parsed.handleAttributes = entry;
        }
        function testAriaFormat(parsed, entry) {
            if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            parsed.ariaFormat = entry;
        }
        function testFormat(parsed, entry) {
            if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
            parsed.format = entry;
        }
        function testKeyboardSupport(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
            parsed.keyboardSupport = entry;
        }
        function testDocumentElement(parsed, entry) {
            parsed.documentElement = entry;
        }
        function testCssPrefix(parsed, entry) {
            if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
            parsed.cssPrefix = entry;
        }
        function testCssClasses(parsed, entry) {
            if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
            if (typeof parsed.cssPrefix === "string") {
                parsed.cssClasses = {};
                Object.keys(entry).forEach((function(key) {
                    parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                }));
            } else parsed.cssClasses = entry;
        }
        function testOptions(options) {
            var parsed = {
                margin: null,
                limit: null,
                padding: null,
                animate: true,
                animationDuration: 300,
                ariaFormat: defaultFormatter,
                format: defaultFormatter
            };
            var tests = {
                step: {
                    r: false,
                    t: testStep
                },
                keyboardPageMultiplier: {
                    r: false,
                    t: testKeyboardPageMultiplier
                },
                keyboardMultiplier: {
                    r: false,
                    t: testKeyboardMultiplier
                },
                keyboardDefaultStep: {
                    r: false,
                    t: testKeyboardDefaultStep
                },
                start: {
                    r: true,
                    t: testStart
                },
                connect: {
                    r: true,
                    t: testConnect
                },
                direction: {
                    r: true,
                    t: testDirection
                },
                snap: {
                    r: false,
                    t: testSnap
                },
                animate: {
                    r: false,
                    t: testAnimate
                },
                animationDuration: {
                    r: false,
                    t: testAnimationDuration
                },
                range: {
                    r: true,
                    t: testRange
                },
                orientation: {
                    r: false,
                    t: testOrientation
                },
                margin: {
                    r: false,
                    t: testMargin
                },
                limit: {
                    r: false,
                    t: testLimit
                },
                padding: {
                    r: false,
                    t: testPadding
                },
                behaviour: {
                    r: true,
                    t: testBehaviour
                },
                ariaFormat: {
                    r: false,
                    t: testAriaFormat
                },
                format: {
                    r: false,
                    t: testFormat
                },
                tooltips: {
                    r: false,
                    t: testTooltips
                },
                keyboardSupport: {
                    r: true,
                    t: testKeyboardSupport
                },
                documentElement: {
                    r: false,
                    t: testDocumentElement
                },
                cssPrefix: {
                    r: true,
                    t: testCssPrefix
                },
                cssClasses: {
                    r: true,
                    t: testCssClasses
                },
                handleAttributes: {
                    r: false,
                    t: testHandleAttributes
                }
            };
            var defaults = {
                connect: false,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: true,
                cssPrefix: "noUi-",
                cssClasses,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10
            };
            if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
            Object.keys(tests).forEach((function(name) {
                if (!isSet(options[name]) && defaults[name] === void 0) {
                    if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                    return;
                }
                tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
            }));
            parsed.pips = options.pips;
            var d = document.createElement("div");
            var msPrefix = d.style.msTransform !== void 0;
            var noPrefix = d.style.transform !== void 0;
            parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
            var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
            parsed.style = styles[parsed.dir][parsed.ort];
            return parsed;
        }
        function scope(target, options, originalOptions) {
            var actions = getActions();
            var supportsTouchActionNone = getSupportsTouchActionNone();
            var supportsPassive = supportsTouchActionNone && getSupportsPassive();
            var scope_Target = target;
            var scope_Base;
            var scope_Handles;
            var scope_Connects;
            var scope_Pips;
            var scope_Tooltips;
            var scope_Spectrum = options.spectrum;
            var scope_Values = [];
            var scope_Locations = [];
            var scope_HandleNumbers = [];
            var scope_ActiveHandlesCount = 0;
            var scope_Events = {};
            var scope_Document = target.ownerDocument;
            var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
            var scope_Body = scope_Document.body;
            var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
            function addNodeTo(addTarget, className) {
                var div = scope_Document.createElement("div");
                if (className) addClass(div, className);
                addTarget.appendChild(div);
                return div;
            }
            function addOrigin(base, handleNumber) {
                var origin = addNodeTo(base, options.cssClasses.origin);
                var handle = addNodeTo(origin, options.cssClasses.handle);
                addNodeTo(handle, options.cssClasses.touchArea);
                handle.setAttribute("data-handle", String(handleNumber));
                if (options.keyboardSupport) {
                    handle.setAttribute("tabindex", "0");
                    handle.addEventListener("keydown", (function(event) {
                        return eventKeydown(event, handleNumber);
                    }));
                }
                if (options.handleAttributes !== void 0) {
                    var attributes_1 = options.handleAttributes[handleNumber];
                    Object.keys(attributes_1).forEach((function(attribute) {
                        handle.setAttribute(attribute, attributes_1[attribute]);
                    }));
                }
                handle.setAttribute("role", "slider");
                handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                origin.handle = handle;
                return origin;
            }
            function addConnect(base, add) {
                if (!add) return false;
                return addNodeTo(base, options.cssClasses.connect);
            }
            function addElements(connectOptions, base) {
                var connectBase = addNodeTo(base, options.cssClasses.connects);
                scope_Handles = [];
                scope_Connects = [];
                scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                for (var i = 0; i < options.handles; i++) {
                    scope_Handles.push(addOrigin(base, i));
                    scope_HandleNumbers[i] = i;
                    scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                }
            }
            function addSlider(addTarget) {
                addClass(addTarget, options.cssClasses.target);
                if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                var textDirection = getComputedStyle(addTarget).direction;
                if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                return addNodeTo(addTarget, options.cssClasses.base);
            }
            function addTooltip(handle, handleNumber) {
                if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
            }
            function isSliderDisabled() {
                return scope_Target.hasAttribute("disabled");
            }
            function isHandleDisabled(handleNumber) {
                var handleOrigin = scope_Handles[handleNumber];
                return handleOrigin.hasAttribute("disabled");
            }
            function disable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].setAttribute("disabled", "");
                    scope_Handles[handleNumber].handle.removeAttribute("tabindex");
                } else {
                    scope_Target.setAttribute("disabled", "");
                    scope_Handles.forEach((function(handle) {
                        handle.handle.removeAttribute("tabindex");
                    }));
                }
            }
            function enable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].removeAttribute("disabled");
                    scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
                } else {
                    scope_Target.removeAttribute("disabled");
                    scope_Handles.forEach((function(handle) {
                        handle.removeAttribute("disabled");
                        handle.handle.setAttribute("tabindex", "0");
                    }));
                }
            }
            function removeTooltips() {
                if (scope_Tooltips) {
                    removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                    scope_Tooltips.forEach((function(tooltip) {
                        if (tooltip) removeElement(tooltip);
                    }));
                    scope_Tooltips = null;
                }
            }
            function tooltips() {
                removeTooltips();
                scope_Tooltips = scope_Handles.map(addTooltip);
                bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                    if (!scope_Tooltips || !options.tooltips) return;
                    if (scope_Tooltips[handleNumber] === false) return;
                    var formattedValue = values[handleNumber];
                    if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                    scope_Tooltips[handleNumber].innerHTML = formattedValue;
                }));
            }
            function aria() {
                removeEvent("update" + INTERNAL_EVENT_NS.aria);
                bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                    scope_HandleNumbers.forEach((function(index) {
                        var handle = scope_Handles[index];
                        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                        var now = positions[index];
                        var text = String(options.ariaFormat.to(unencoded[index]));
                        min = scope_Spectrum.fromStepping(min).toFixed(1);
                        max = scope_Spectrum.fromStepping(max).toFixed(1);
                        now = scope_Spectrum.fromStepping(now).toFixed(1);
                        handle.children[0].setAttribute("aria-valuemin", min);
                        handle.children[0].setAttribute("aria-valuemax", max);
                        handle.children[0].setAttribute("aria-valuenow", now);
                        handle.children[0].setAttribute("aria-valuetext", text);
                    }));
                }));
            }
            function getGroup(pips) {
                if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
                if (pips.mode === PipsMode.Count) {
                    if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                    var interval = pips.values - 1;
                    var spread = 100 / interval;
                    var values = [];
                    while (interval--) values[interval] = interval * spread;
                    values.push(100);
                    return mapToRange(values, pips.stepped);
                }
                if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                if (pips.mode === PipsMode.Values) {
                    if (pips.stepped) return pips.values.map((function(value) {
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    }));
                    return pips.values;
                }
                return [];
            }
            function mapToRange(values, stepped) {
                return values.map((function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                }));
            }
            function generateSpread(pips) {
                function safeIncrement(value, increment) {
                    return Number((value + increment).toFixed(7));
                }
                var group = getGroup(pips);
                var indexes = {};
                var firstInRange = scope_Spectrum.xVal[0];
                var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                var ignoreFirst = false;
                var ignoreLast = false;
                var prevPct = 0;
                group = unique(group.slice().sort((function(a, b) {
                    return a - b;
                })));
                if (group[0] !== firstInRange) {
                    group.unshift(firstInRange);
                    ignoreFirst = true;
                }
                if (group[group.length - 1] !== lastInRange) {
                    group.push(lastInRange);
                    ignoreLast = true;
                }
                group.forEach((function(current, index) {
                    var step;
                    var i;
                    var q;
                    var low = current;
                    var high = group[index + 1];
                    var newPct;
                    var pctDifference;
                    var pctPos;
                    var type;
                    var steps;
                    var realSteps;
                    var stepSize;
                    var isSteps = pips.mode === PipsMode.Steps;
                    if (isSteps) step = scope_Spectrum.xNumSteps[index];
                    if (!step) step = high - low;
                    if (high === void 0) high = low;
                    step = Math.max(step, 1e-7);
                    for (i = low; i <= high; i = safeIncrement(i, step)) {
                        newPct = scope_Spectrum.toStepping(i);
                        pctDifference = newPct - prevPct;
                        steps = pctDifference / (pips.density || 1);
                        realSteps = Math.round(steps);
                        stepSize = pctDifference / realSteps;
                        for (q = 1; q <= realSteps; q += 1) {
                            pctPos = prevPct + q * stepSize;
                            indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                        }
                        type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                        if (!index && ignoreFirst && i !== high) type = 0;
                        if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                        prevPct = newPct;
                    }
                }));
                return indexes;
            }
            function addMarking(spread, filterFunc, formatter) {
                var _a, _b;
                var element = scope_Document.createElement("div");
                var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
                _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
                _a);
                var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
                _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
                _b);
                var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                addClass(element, options.cssClasses.pips);
                addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                function getClasses(type, source) {
                    var a = source === options.cssClasses.value;
                    var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                    var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                    return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                }
                function addSpread(offset, value, type) {
                    type = filterFunc ? filterFunc(value, type) : type;
                    if (type === PipsType.None) return;
                    var node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.marker);
                    node.style[options.style] = offset + "%";
                    if (type > PipsType.NoValue) {
                        node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.value);
                        node.setAttribute("data-value", String(value));
                        node.style[options.style] = offset + "%";
                        node.innerHTML = String(formatter.to(value));
                    }
                }
                Object.keys(spread).forEach((function(offset) {
                    addSpread(offset, spread[offset][0], spread[offset][1]);
                }));
                return element;
            }
            function removePips() {
                if (scope_Pips) {
                    removeElement(scope_Pips);
                    scope_Pips = null;
                }
            }
            function pips(pips) {
                removePips();
                var spread = generateSpread(pips);
                var filter = pips.filter;
                var format = pips.format || {
                    to: function(value) {
                        return String(Math.round(value));
                    }
                };
                scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                return scope_Pips;
            }
            function baseSize() {
                var rect = scope_Base.getBoundingClientRect();
                var alt = "offset" + [ "Width", "Height" ][options.ort];
                return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
            }
            function attachEvent(events, element, callback, data) {
                var method = function(event) {
                    var e = fixEvent(event, data.pageOffset, data.target || element);
                    if (!e) return false;
                    if (isSliderDisabled() && !data.doNotReject) return false;
                    if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                    if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                    if (data.hover && e.buttons) return false;
                    if (!supportsPassive) e.preventDefault();
                    e.calcPoint = e.points[options.ort];
                    callback(e, data);
                    return;
                };
                var methods = [];
                events.split(" ").forEach((function(eventName) {
                    element.addEventListener(eventName, method, supportsPassive ? {
                        passive: true
                    } : false);
                    methods.push([ eventName, method ]);
                }));
                return methods;
            }
            function fixEvent(e, pageOffset, eventTarget) {
                var touch = e.type.indexOf("touch") === 0;
                var mouse = e.type.indexOf("mouse") === 0;
                var pointer = e.type.indexOf("pointer") === 0;
                var x = 0;
                var y = 0;
                if (e.type.indexOf("MSPointer") === 0) pointer = true;
                if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
                if (touch) {
                    var isTouchOnTarget = function(checkTouch) {
                        var target = checkTouch.target;
                        return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                    };
                    if (e.type === "touchstart") {
                        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                        if (targetTouches.length > 1) return false;
                        x = targetTouches[0].pageX;
                        y = targetTouches[0].pageY;
                    } else {
                        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                        if (!targetTouch) return false;
                        x = targetTouch.pageX;
                        y = targetTouch.pageY;
                    }
                }
                pageOffset = pageOffset || getPageOffset(scope_Document);
                if (mouse || pointer) {
                    x = e.clientX + pageOffset.x;
                    y = e.clientY + pageOffset.y;
                }
                e.pageOffset = pageOffset;
                e.points = [ x, y ];
                e.cursor = mouse || pointer;
                return e;
            }
            function calcPointToPercentage(calcPoint) {
                var location = calcPoint - offset(scope_Base, options.ort);
                var proposal = location * 100 / baseSize();
                proposal = limit(proposal);
                return options.dir ? 100 - proposal : proposal;
            }
            function getClosestHandle(clickedPosition) {
                var smallestDifference = 100;
                var handleNumber = false;
                scope_Handles.forEach((function(handle, index) {
                    if (isHandleDisabled(index)) return;
                    var handlePosition = scope_Locations[index];
                    var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                    var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                    var isCloser = differenceWithThisHandle < smallestDifference;
                    var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                    if (isCloser || isCloserAfter || clickAtEdge) {
                        handleNumber = index;
                        smallestDifference = differenceWithThisHandle;
                    }
                }));
                return handleNumber;
            }
            function documentLeave(event, data) {
                if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
            }
            function eventMove(event, data) {
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
                var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                var proposal = movement * 100 / data.baseSize;
                moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
            }
            function eventEnd(event, data) {
                if (data.handle) {
                    removeClass(data.handle, options.cssClasses.active);
                    scope_ActiveHandlesCount -= 1;
                }
                data.listeners.forEach((function(c) {
                    scope_DocumentElement.removeEventListener(c[0], c[1]);
                }));
                if (scope_ActiveHandlesCount === 0) {
                    removeClass(scope_Target, options.cssClasses.drag);
                    setZindex();
                    if (event.cursor) {
                        scope_Body.style.cursor = "";
                        scope_Body.removeEventListener("selectstart", preventDefault);
                    }
                }
                if (options.events.smoothSteps) {
                    data.handleNumbers.forEach((function(handleNumber) {
                        setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                    }));
                    data.handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                    }));
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    fireEvent("end", handleNumber);
                }));
            }
            function eventStart(event, data) {
                if (data.handleNumbers.some(isHandleDisabled)) return;
                var handle;
                if (data.handleNumbers.length === 1) {
                    var handleOrigin = scope_Handles[data.handleNumbers[0]];
                    handle = handleOrigin.children[0];
                    scope_ActiveHandlesCount += 1;
                    addClass(handle, options.cssClasses.active);
                }
                event.stopPropagation();
                var listeners = [];
                var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                    target: event.target,
                    handle,
                    connect: data.connect,
                    listeners,
                    startCalcPoint: event.calcPoint,
                    baseSize: baseSize(),
                    pageOffset: event.pageOffset,
                    handleNumbers: data.handleNumbers,
                    buttonsProperty: event.buttons,
                    locations: scope_Locations.slice()
                });
                var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                if (event.cursor) {
                    scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                    if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                    scope_Body.addEventListener("selectstart", preventDefault, false);
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("start", handleNumber);
                }));
            }
            function eventTap(event) {
                event.stopPropagation();
                var proposal = calcPointToPercentage(event.calcPoint);
                var handleNumber = getClosestHandle(proposal);
                if (handleNumber === false) return;
                if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                setHandle(handleNumber, proposal, true, true);
                setZindex();
                fireEvent("slide", handleNumber, true);
                fireEvent("update", handleNumber, true);
                if (!options.events.snap) {
                    fireEvent("change", handleNumber, true);
                    fireEvent("set", handleNumber, true);
                } else eventStart(event, {
                    handleNumbers: [ handleNumber ]
                });
            }
            function eventHover(event) {
                var proposal = calcPointToPercentage(event.calcPoint);
                var to = scope_Spectrum.getStep(proposal);
                var value = scope_Spectrum.fromStepping(to);
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, value);
                    }));
                }));
            }
            function eventKeydown(event, handleNumber) {
                if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                var horizontalKeys = [ "Left", "Right" ];
                var verticalKeys = [ "Down", "Up" ];
                var largeStepKeys = [ "PageDown", "PageUp" ];
                var edgeKeys = [ "Home", "End" ];
                if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                    verticalKeys.reverse();
                    largeStepKeys.reverse();
                }
                var key = event.key.replace("Arrow", "");
                var isLargeDown = key === largeStepKeys[0];
                var isLargeUp = key === largeStepKeys[1];
                var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                var isMin = key === edgeKeys[0];
                var isMax = key === edgeKeys[1];
                if (!isDown && !isUp && !isMin && !isMax) return true;
                event.preventDefault();
                var to;
                if (isUp || isDown) {
                    var direction = isDown ? 0 : 1;
                    var steps = getNextStepsForHandle(handleNumber);
                    var step = steps[direction];
                    if (step === null) return false;
                    if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                    if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                    step = Math.max(step, 1e-7);
                    step *= isDown ? -1 : 1;
                    to = scope_Values[handleNumber] + step;
                } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                fireEvent("slide", handleNumber);
                fireEvent("update", handleNumber);
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                return false;
            }
            function bindSliderEvents(behaviour) {
                if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [ index ]
                    });
                }));
                if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
                if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [ connect ];
                    var handlesToDrag = [ handleBefore, handleAfter ];
                    var handleNumbersToDrag = [ index - 1, index ];
                    addClass(connect, options.cssClasses.draggable);
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach((function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect
                        });
                    }));
                }));
            }
            function bindEvent(namespacedEvent, callback) {
                scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                scope_Events[namespacedEvent].push(callback);
                if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                    fireEvent("update", index);
                }));
            }
            function isInternalNamespace(namespace) {
                return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
            }
            function removeEvent(namespacedEvent) {
                var event = namespacedEvent && namespacedEvent.split(".")[0];
                var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                Object.keys(scope_Events).forEach((function(bind) {
                    var tEvent = bind.split(".")[0];
                    var tNamespace = bind.substring(tEvent.length);
                    if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                }));
            }
            function fireEvent(eventName, handleNumber, tap) {
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    var eventType = targetEvent.split(".")[0];
                    if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                    }));
                }));
            }
            function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                var distance;
                if (scope_Handles.length > 1 && !options.events.unconstrained) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                        to = Math.max(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                        to = Math.min(to, distance);
                    }
                }
                if (scope_Handles.length > 1 && options.limit) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                        to = Math.min(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                        to = Math.max(to, distance);
                    }
                }
                if (options.padding) {
                    if (handleNumber === 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                        to = Math.max(to, distance);
                    }
                    if (handleNumber === scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                        to = Math.min(to, distance);
                    }
                }
                if (!smoothSteps) to = scope_Spectrum.getStep(to);
                to = limit(to);
                if (to === reference[handleNumber] && !getValue) return false;
                return to;
            }
            function inRuleOrder(v, a) {
                var o = options.ort;
                return (o ? a : v) + ", " + (o ? v : a);
            }
            function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                var proposals = locations.slice();
                var firstHandle = handleNumbers[0];
                var smoothSteps = options.events.smoothSteps;
                var b = [ !upward, upward ];
                var f = [ upward, !upward ];
                handleNumbers = handleNumbers.slice();
                if (upward) handleNumbers.reverse();
                if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    if (to === false) proposal = 0; else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                })); else b = f = [ true ];
                var state = false;
                handleNumbers.forEach((function(handleNumber, o) {
                    state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                }));
                if (state) {
                    handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                        fireEvent("slide", handleNumber);
                    }));
                    if (connect != void 0) fireEvent("drag", firstHandle);
                }
            }
            function transformDirection(a, b) {
                return options.dir ? 100 - a - b : a;
            }
            function updateHandlePosition(handleNumber, to) {
                scope_Locations[handleNumber] = to;
                scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                var translation = transformDirection(to, 0) - scope_DirOffset;
                var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
            }
            function setZindex() {
                scope_HandleNumbers.forEach((function(handleNumber) {
                    var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                    var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                    scope_Handles[handleNumber].style.zIndex = String(zIndex);
                }));
            }
            function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                if (to === false) return false;
                updateHandlePosition(handleNumber, to);
                return true;
            }
            function updateConnect(index) {
                if (!scope_Connects[index]) return;
                var l = 0;
                var h = 100;
                if (index !== 0) l = scope_Locations[index - 1];
                if (index !== scope_Connects.length - 1) h = scope_Locations[index];
                var connectWidth = h - l;
                var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
            }
            function resolveToValue(to, handleNumber) {
                if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
                if (typeof to === "number") to = String(to);
                to = options.format.from(to);
                if (to !== false) to = scope_Spectrum.toStepping(to);
                if (to === false || isNaN(to)) return scope_Locations[handleNumber];
                return to;
            }
            function valueSet(input, fireSetEvent, exactInput) {
                var values = asArray(input);
                var isInit = scope_Locations[0] === void 0;
                fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
                if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                }));
                var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                if (isInit && scope_Spectrum.hasNoSize()) {
                    exactInput = true;
                    scope_Locations[0] = 0;
                    if (scope_HandleNumbers.length > 1) {
                        var space_1 = 100 / (scope_HandleNumbers.length - 1);
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            scope_Locations[handleNumber] = handleNumber * space_1;
                        }));
                    }
                }
                for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                }));
                setZindex();
                scope_HandleNumbers.forEach((function(handleNumber) {
                    fireEvent("update", handleNumber);
                    if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
                }));
            }
            function valueReset(fireSetEvent) {
                valueSet(options.start, fireSetEvent);
            }
            function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                handleNumber = Number(handleNumber);
                if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                fireEvent("update", handleNumber);
                if (fireSetEvent) fireEvent("set", handleNumber);
            }
            function valueGet(unencoded) {
                if (unencoded === void 0) unencoded = false;
                if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                var values = scope_Values.map(options.format.to);
                if (values.length === 1) return values[0];
                return values;
            }
            function destroy() {
                removeEvent(INTERNAL_EVENT_NS.aria);
                removeEvent(INTERNAL_EVENT_NS.tooltips);
                Object.keys(options.cssClasses).forEach((function(key) {
                    removeClass(scope_Target, options.cssClasses[key]);
                }));
                while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                delete scope_Target.noUiSlider;
            }
            function getNextStepsForHandle(handleNumber) {
                var location = scope_Locations[handleNumber];
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[handleNumber];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;
                if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                if (location === 100) increment = null; else if (location === 0) decrement = null;
                var stepDecimals = scope_Spectrum.countStepDecimals();
                if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
                if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
                return [ decrement, increment ];
            }
            function getNextSteps() {
                return scope_HandleNumbers.map(getNextStepsForHandle);
            }
            function updateOptions(optionsToUpdate, fireSetEvent) {
                var v = valueGet();
                var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
                }));
                var newOptions = testOptions(originalOptions);
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
                }));
                scope_Spectrum = newOptions.spectrum;
                options.margin = newOptions.margin;
                options.limit = newOptions.limit;
                options.padding = newOptions.padding;
                if (options.pips) pips(options.pips); else removePips();
                if (options.tooltips) tooltips(); else removeTooltips();
                scope_Locations = [];
                valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
            }
            function setupSlider() {
                scope_Base = addSlider(scope_Target);
                addElements(options.connect, scope_Base);
                bindSliderEvents(options.events);
                valueSet(options.start);
                if (options.pips) pips(options.pips);
                if (options.tooltips) tooltips();
                aria();
            }
            setupSlider();
            var scope_Self = {
                destroy,
                steps: getNextSteps,
                on: bindEvent,
                off: removeEvent,
                get: valueGet,
                set: valueSet,
                setHandle: valueSetHandle,
                reset: valueReset,
                disable,
                enable,
                __moveHandles: function(upward, proposal, handleNumbers) {
                    moveHandles(upward, proposal, scope_Locations, handleNumbers);
                },
                options: originalOptions,
                updateOptions,
                target: scope_Target,
                removePips,
                removeTooltips,
                getPositions: function() {
                    return scope_Locations.slice();
                },
                getTooltips: function() {
                    return scope_Tooltips;
                },
                getOrigins: function() {
                    return scope_Handles;
                },
                pips
            };
            return scope_Self;
        }
        function initialize(target, originalOptions) {
            if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
            if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
            var options = testOptions(originalOptions);
            var api = scope(target, options, originalOptions);
            target.noUiSlider = api;
            return api;
        }
        function rangeInit() {
            const priceSlider = document.querySelector("#range");
            if (priceSlider) {
                let textFrom = +priceSlider.getAttribute("data-from");
                let textTo = +priceSlider.getAttribute("data-to");
                initialize(priceSlider, {
                    start: [ textFrom, textTo ],
                    connect: true,
                    step: .1,
                    range: {
                        min: [ textFrom ],
                        max: [ textTo ]
                    }
                });
                let changeValues = [ document.getElementById("price-start"), document.getElementById("price-end") ];
                priceSlider.noUiSlider.on("update", (function(values, handle) {
                    changeValues[handle].innerHTML = values[handle];
                }));
            }
        }
        rangeInit();
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_getSlideTransformEl(slideEl) {
            return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementTransitionEnd(el, callback) {
            function fireCallBack(e) {
                if (e.target !== el) return;
                callback.call(el, e);
                el.removeEventListener("transitionend", fireCallBack);
            }
            if (callback) el.addEventListener("transitionend", fireCallBack);
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else if (setTranslate) {
                    swiper.slideToLoop(slideRealIndex, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    const newSlideIndex = swiper.getSlideIndexByData(index);
                    const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                    if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) swiper.loopFix({
                        direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
                        activeSlideIndex: newSlideIndex,
                        slideTo: false
                    });
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(params.clickableClass);
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) subEl.removeEventListener("click", onBulletClick);
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit, params} = _ref;
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime;
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    autoplayStartTime = (new Date).getTime();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function effect_init_effectInit(params) {
            const {effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams} = params;
            on("beforeInit", (() => {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            }));
            on("setTranslate", (() => {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            }));
            on("setTransition", ((_s, duration) => {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            }));
            on("transitionEnd", (() => {
                if (swiper.params.effect !== effect) return;
                if (recreateShadows) {
                    if (!getEffectParams || !getEffectParams().slideShadows) return;
                    swiper.slides.forEach((slideEl => {
                        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => shadowEl.remove()));
                    }));
                    recreateShadows();
                }
            }));
            let requireUpdateOnVirtual;
            on("virtualUpdate", (() => {
                if (swiper.params.effect !== effect) return;
                if (!swiper.slides.length) requireUpdateOnVirtual = true;
                requestAnimationFrame((() => {
                    if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                }));
            }));
        }
        function effect_target_effectTarget(effectParams, slideEl) {
            const transformEl = utils_getSlideTransformEl(slideEl);
            if (transformEl !== slideEl) {
                transformEl.style.backfaceVisibility = "hidden";
                transformEl.style["-webkit-backface-visibility"] = "hidden";
            }
            return transformEl;
        }
        function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
            let {swiper, duration, transformElements, allSlides} = _ref;
            const {activeIndex} = swiper;
            const getSlide = el => {
                if (!el.parentElement) {
                    const slide = swiper.slides.filter((slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode))[0];
                    return slide;
                }
                return el.parentElement;
            };
            if (swiper.params.virtualTranslate && duration !== 0) {
                let eventTriggered = false;
                let transitionEndTarget;
                if (allSlides) transitionEndTarget = transformElements; else transitionEndTarget = transformElements.filter((transformEl => {
                    const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
                    return swiper.getSlideIndex(el) === activeIndex;
                }));
                transitionEndTarget.forEach((el => {
                    utils_elementTransitionEnd(el, (() => {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        const evt = new window.CustomEvent("transitionend", {
                            bubbles: true,
                            cancelable: true
                        });
                        swiper.wrapperEl.dispatchEvent(evt);
                    }));
                }));
            }
        }
        function EffectFade(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                fadeEffect: {
                    crossFade: false
                }
            });
            const setTranslate = () => {
                const {slides} = swiper;
                const params = swiper.params.fadeEffect;
                for (let i = 0; i < slides.length; i += 1) {
                    const slideEl = swiper.slides[i];
                    const offset = slideEl.swiperSlideOffset;
                    let tx = -offset;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    let ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                    const targetEl = effect_target_effectTarget(params, slideEl);
                    targetEl.style.opacity = slideOpacity;
                    targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
                }
            };
            const setTransition = duration => {
                const transformElements = swiper.slides.map((slideEl => utils_getSlideTransformEl(slideEl)));
                transformElements.forEach((el => {
                    el.style.transitionDuration = `${duration}ms`;
                }));
                effect_virtual_transition_end_effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformElements,
                    allSlides: true
                });
            };
            effect_init_effectInit({
                effect: "fade",
                swiper,
                on,
                setTranslate,
                setTransition,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        function initSliders() {
            if (document.querySelector(".swiper")) new swiper_core_Swiper(".swiper", {
                modules: [ Navigation, Pagination, Autoplay, EffectFade ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 300,
                speed: 800,
                loop: true,
                lazy: true,
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function(index, className) {
                        return '<p class="' + className + '">' + "</p>";
                    }
                },
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                on: {}
            });
            if (document.querySelector(".swiper2")) new swiper_core_Swiper(".swiper2", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 100,
                autoHeight: true,
                speed: 800,
                loop: true,
                navigation: {
                    prevEl: ".swiper2-button-prev",
                    nextEl: ".swiper2-button-next"
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        const $ = elem => document.querySelector(elem);
        const countdown = function(_config) {
            const countdownElements = document.querySelectorAll(_config.target);
            countdownElements.forEach((element => {
                const tarDate = element.getAttribute("data-date").split("-");
                const day = parseInt(tarDate[0]);
                const month = parseInt(tarDate[1]);
                const year = parseInt(tarDate[2]);
                let tarTime = element.getAttribute("data-time");
                let tarhour, tarmin;
                if (tarTime != null) {
                    tarTime = tarTime.split(":");
                    tarhour = parseInt(tarTime[0]);
                    tarmin = parseInt(tarTime[1]);
                }
                (new Date).getFullYear();
                let dateNow = new Date;
                dateNow.getDate();
                dateNow.getMonth();
                dateNow.getFullYear();
                dateNow.getHours();
                dateNow.getMinutes();
                const countDownDate = new Date(year, month - 1, day, tarhour, tarmin, 0, 0).getTime();
                $(_config.target + " .day .word").innerHTML = _config.dayWord;
                $(_config.target + " .hour .word").innerHTML = _config.hourWord;
                $(_config.target + " .min .word").innerHTML = _config.minWord;
                $(_config.target + " .sec .word").innerHTML = _config.secWord;
                const updateTime = () => {
                    const now = (new Date).getTime();
                    const distance = countDownDate - now;
                    const days = Math.floor(distance / (1e3 * 60 * 60 * 24));
                    const hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
                    const minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
                    const seconds = Math.floor(distance % (1e3 * 60) / 1e3);
                    requestAnimationFrame(updateTime);
                    $(_config.target + " .day .num").innerHTML = addZero(days);
                    $(_config.target + " .hour .num").innerHTML = addZero(hours);
                    $(_config.target + " .min .num").innerHTML = addZero(minutes);
                    $(_config.target + " .sec .num").innerHTML = addZero(seconds);
                    if (distance < 0) {
                        $(_config.target + " .day .num").innerHTML = addZero(0);
                        $(_config.target + " .hour .num").innerHTML = addZero(0);
                        $(_config.target + " .min .num").innerHTML = addZero(0);
                        $(_config.target + " .sec .num").innerHTML = addZero(0);
                    }
                };
                updateTime();
            }));
        };
        const addZero = x => x < 10 && x >= 0 ? "0" + x : x;
        new countdown({
            target: ".countdown",
            dayWord: " Days",
            hourWord: " Hours",
            minWord: " Minutes",
            secWord: " Second"
        });
        var lazyload_min = __webpack_require__(732);
        const lazyMedia = new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        lazyMedia.update();
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var mixitup = __webpack_require__(80);
        if (document.querySelector(".shop-list__main")) mixitup(".shop-list__main", {
            selectors: {
                target: "[data-mix]"
            },
            animation: {
                effects: "fade translateZ(-100px)"
            },
            animation: {
                effects: "fade translateZ(-100px)",
                easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
            }
        });
        incrisLikeAndShop();
        function incrisLikeAndShop() {
            document.addEventListener("click", (function(e) {
                const target = e.target;
                if (target.closest(".icon-shop")) {
                    const badgeShop = document.querySelector(".badge-shop");
                    badgeShop.textContent = (+badgeShop.textContent + 1).toString();
                }
                if (target.closest(".icon-like")) {
                    const badgeLike = document.querySelector(".badge-like");
                    badgeLike.textContent = (+badgeLike.textContent + 1).toString();
                }
            }));
        }
        document.addEventListener("click", (function(e) {
            const activClass = document.querySelector(".active-view");
            const prodCard = document.querySelectorAll(".car-prod-midl");
            const gridInner = document.querySelector(".shop-list__main");
            const target = e.target;
            if (target.closest("[data-view]")) if (!target.classList.contains("active-view")) {
                prodCard.forEach((element => {
                    element.classList.toggle("car-prod-midl_list");
                }));
                gridInner.classList.toggle("shop-list__main_grid");
                activClass.classList.remove("active-view");
                target.classList.add("active-view");
            }
        }));
        document.addEventListener("click", (function(e) {
            let bigImg = document.querySelector("[data-main-img]");
            const target = e.target;
            if (target.closest("[data-smolle-img]")) bigImg.src = target.src;
        }));
        document.addEventListener("click", (function(e) {
            let tabActive = document.querySelector("._tab-active");
            const target = e.target;
            if (target.closest(".prod-tab__title")) if (!e.target.classList.contains("_tab-active")) {
                tabActive.classList.remove("_tab-active");
                target.classList.add("_tab-active");
            }
        }));
        document.addEventListener("click", (e => {
            if (e.target.closest(".cdk-overlay-backdrop-showing")) {
                bodyLockToggle();
                document.querySelector(".cdk-overlay-container").style = "display: none";
                document.querySelector(".cdk-overlay-container").children[0].classList.toggle("cdk-overlay-backdrop-showing");
                document.querySelector(".shop-list-page__asid").classList.toggle("shop-list-page__asid_open");
            }
            if (e.target.closest(".filter-button")) {
                overlay();
                document.querySelector(".shop-list-page__asid").classList.toggle("shop-list-page__asid_open");
            }
        }));
        activeHeaderUrl();
        function activeHeaderUrl() {
            const menuLinks = document.querySelectorAll(".navigation__links a");
            console.dir(document.title);
            menuLinks.forEach((link => {
                if (link.getAttribute("href").replace("..", "") === location.pathname) link.classList.add("navigation__link_action"); else link.classList.remove("navigation__link_action");
            }));
        }
        const breadCrumbs = document.querySelector(".bread-crumbs");
        location.pathname;
        const titlePage = document.title;
        if (breadCrumbs) {
            const ululbreadCrumbs = breadCrumbs.querySelector("ul");
            let newEl = `<li class="bread-crumbs__link link-active">${titlePage}</li>`;
            ululbreadCrumbs.insertAdjacentHTML("beforeend", newEl);
        }
        window["FLS"] = true;
        isWebp();
        addTouchClass();
        menuInit();
        menuCloseBackDrop();
        chengeActiveClassHeaderAnyType();
        spollers();
        tabs();
        rippleEffect();
        formQuantity();
        formRating();
    })();
})();