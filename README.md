# donot
*Do not use this Javascript utility library*

This is basically my collection of functions that i often use in projects. They can probably be found in other libraries (like Lodash), but i might not want to use those libraries (because they're big) or because it's overkill.

Because this is a bit of a grabbag of things you probably shouldn't be using this library. Hence the name.

## Install
Using `npm`:
```
$ npm install --save donot
```

Using `yarn`:
```
$ yarn add donot
```

`donot` is a UMD library and thus can be used as a CommonJS module for Node.js, AMD (with Require.js) or as a plain old Javacript global.

## API
Here are all the functions:

**`$(selector: string): HTMLElement`**
A shortcut for `document.querySelector`.

```javascript
$("body").style.background = 'red';`
````

**`$$(selector: string): HTMLElement`**
A shortcut for `document.querySelectorAll`. Converts the elements in an array.

```javascript
$$("p").forEach((p) => p.style.color = 'red');
````

**`chunk(array: array, size: number): array`**
Chunks a given `array` in multiple arrays of maximum size `size`.

```javascript
const nrs = _.range(1, 10);
const chunks = _.chunk(nrs, 4);
console.log(chunks); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9 ] ]
````

**`combinations(list: array, opts?:object): array`**
Create a list of all unique combinations, where a,b === b,a. By default, equals like 'a,a' are allowed, if you don't want that, pass `{ allowEquals : false }` as a second argument.

```javascript
const options = combinations([1, 2]);
console.log(options); // [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ] ]

const options = combinations([1, 2], { allowEquals : false });
console.log(options); // [ [ 1, 2 ] ]
````

**`degToRad(deg: number): number`**
Converts from degrees to radians.

```javascript
console.log(degToRad(180)); // 3.141592....
````

**`getJson(url: string): Promise`**
**`getJson(url: string, params: object): Promise`**
Uses `fetch` to do a HTTP call and return JSON. `params` can be an object that will be transformed into URL arguments (see also `urlWithParams`).

```javascript
const data = await getJson('http://www.example.com/data.json');
````

**`matrix(cols: number, rows: number): arrray`**
Creates a multidimensional array.

```javascript
const grid = matrix([1,2,3], [4,5,6]);
console.log(grid[0][1]); // 4
````

**`noop(): function`**
Returns an empty function.

**`range(max: number): number`**
**`range(min: number, max: number): number`**
Creates a filled array with number from `min` (or 0 if that is not given) to, but not including `max`.

```javascript
console.log(range(3)); // [ 0, 1, 2 ]
console.log(range(2, 5)); // [ 2, 3, 4 ]
```

**`randInt(max: number) : number`**
**`randInt(min: number, max: number)`**
Returns a random integer between `min` (or 0 if that is not given) and `max`.

**`sample(list: array): any`**
Returns a random element from an array.

**`shuffle(list: array): array`**
Returns a shuffled (randomized) copy of `list`.

**`sum(list: array): number`**
Returns the sum of all numbers in `list`.

```javascript
console.log(sum([1,2,3,4])); // 10
````

**`timeout(ms: number): Promise`**
Returns a promisified version of `window.setTimeout` (browser) or `setTimeout`) (Node) with a time of `ms` miliseconds.

```javascript
console.log("Let's wait 2 seconds");
await timeout(2000);
console.log("That was 2 seconds");
````

**`urlWithParams(url: string, params: object): string`**
Transform a `url` with an object `params` into an URL with arguments.

```javascript
const url = _.urlWithParams('http://example.com', {
        foo : 'bar',
        1 : '2'
});
```

## License
MIT &copy; [Hay Kranen](http://www.haykranen.nl)