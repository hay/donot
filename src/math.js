// Create a list of all unique combinations, where a,b === b,a
export function combinations(list, opts = { allowEquals : true}) {
    const out = [];
    const keys = new Set();

    for (let item of matrix(list, list)) {
        if ('allowEquals' in opts && !opts.allowEquals) {
            if (item[0] === item[1]) {
                continue;
            }
        }

        if (item[0] > item[1]) {
            item = [item[1], item[0]];
        }

        const key = String(item[0]) + String(item[1]);

        if (!keys.has(key)) {
            out.push(item);
            keys.add(key);
        }
    }

    return out;
}

export function degToRad(deg) {
    return deg * (Math.PI / 180)
}

export function matrix(cols, rows) {
    const arr = [];

    for (let x of cols) {
        for (let y of rows) {
            arr.push([x,y]);
        }
    }

    return arr;
}

export function noop() {
    return function(){};
}

export function range(min, max = null) {
    if (!max) {
        max = min;
        min = 0;
    }

    return Array.from(new Array((max - min)), (x,i) => i + min)
}

export function randInt(min, max = null) {
    if (!max) {
        max = min;
        min = 0;
    }

    return Math.round(Math.random() * (max - min)) + min;
}

export function sample(array) {
    return shuffle(array)[0];
}

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export function sum(array) {
    return array.reduce((a,b) => a + b);
}