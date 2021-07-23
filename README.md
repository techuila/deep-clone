# node-loopie [![NPM version](https://img.shields.io/npm/v/@techuila/deep-clone.svg?style=flat)](https://www.npmjs.com/package/@techuila/deep-clone) [![NPM monthly downloads](https://img.shields.io/npm/dm/@techuila/deep-clone.svg?style=flat)](https://www.npmjs.com/package/@techuila/deep-clone) [![NPM total downloads](https://img.shields.io/npm/dt/@techuila/deep-clone.svg?style=flat)](https://www.npmjs.com/package/@techuila/deep-clone)

Deep clones all fields of the original objects even functions.

## Installation

Install with [npm](https://www.npmjs.com/):

```sh
 $ npm install --save @techuila/deep-clone
```

### Usage

Using import:

```js
import deepClone from '@techuila/deep-clone';
```

Using require:

```js
const deepClone from '@techuila/deep-clone';
```

```js
const obj = {
	name: 'john',
	obj: {
		name: 'doe',
		age: 1,
		isMarried: true,
		children: [{ name: 'child 1' }, { name: 'child 2' }, { name: 'child 3' }],
	},
	new: {
		name: 'hello',
		children: [{ name: 'child 1' }, { name: 'child 2' }, { name: 'child 3' }],
	},
};

const copy_object = deepClone(obj);
```

### Author

**Axl Cuyugan**

- [github/techuila](https://github.com/techuila)
- [twitter/Techuila\_\_](https://twitter.com/Techuila__)

### License

Released under the [ISC License](LICENSE).

---
