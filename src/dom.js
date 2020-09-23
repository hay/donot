export function $(selector) {
    return document.querySelector(selector);
}

export function $$(selector) {
    return Array.from(document.querySelectorAll(selector));
}

export function getCssProp(el = 'root', prop) {
    if (el === 'root') {
        return document.documentElement.style.getPropertyValue(prop);
    } else {
        return getComputedStyle(el).getPropertyValue(prop);
    }
}

export function setCssProp(el = 'root', prop, value) {
    if (el === 'root') {
        // Root level
        document.documentElement.style.setProperty(prop, value);
    } else {
        el.style.setProperty(prop, value);
    }
}