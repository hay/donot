export function $(selector) {
    return document.querySelector(selector);
}

export function $$(selector) {
    return Array.from(document.querySelectorAll(selector));
}

export function getCssProp(el = 'root', prop) {
    const $el = el === 'root' ? document.documentElement : el;
    return window.getComputedStyle($el).getPropertyValue(prop);
}

export function setCssProp(el = 'root', prop, value) {
    const $el = el === 'root' ? document.documentElement : el;
    $el.style.setProperty(prop, value);
}