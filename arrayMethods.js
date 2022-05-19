//length, push, pop, unshift, shift, some, every, find, filter, map, findIndex, includes, indexOf, reduce, join
export function isArray(item) {
    if (typeof item === 'object') {
        try {
            return typeof item.length === 'number';
        } catch (e) {
            return false;
        }
    } else {
        return false;
    }
}
export function isFunction(myFunction) {
    return typeof myFunction === 'function';
}
export function arrayLength(array) {
    if (isArray(array)) {
        return array.length;
    } else {
        throw Error();
    }
}
export function push(array, item) {
    if (isArray(array)) {
        array[arrayLength(array)] = item;
        return arrayLength(array);
    } else {
        throw new Error('Not array');
    }
}
export function pop(array) {
    if (isArray(array)) {
        if (array.length === 0) {
            return undefined;
        }
        const item = array[arrayLength(array) - 1];
        array.length = arrayLength(array) - 1;
        return item;
    } else {
        throw new Error('Not array');
    }
}
export function unshift(array, item) {
    if (isArray(array)) {
        const aux = [item];
        for (let i = 0; i < array.length; i++) {
            push(aux, array[i]);
        }
        for (let i = 0; i < aux.length; i++) {
            array[i] = aux[i];
        }
        return arrayLength(array);
    } else {
        throw new Error('Not array');
    }
}
export function shift(array) {
    if (isArray(array)) {
        if (array.length === 0) {
            return undefined;
        }
        const item = array[0];
        const aux = [];
        for (let i = 1; i < array.length; i++) {
            push(aux, array[i]);
        }
        array.length = array.length - 1;
        for (let j = 0; j < aux.length; j++) {
            array[j] = aux[j];
        }
        return item;
    } else {
        throw new Error('Not array');
    }
}
export function some(array, myFunction) {
    if (isArray(array)) {
        if (isFunction(myFunction)) {
            for (let i = 0; i < array.length; i++) {
                if (myFunction(array[i])) {
                    return true;
                }
            }
            return false;
        } else {
            throw new Error('Not function');
        }
    } else {
        throw new Error('Not array');
    }
}
export function every(array, myFunction) {
    if (isArray(array)) {
        if (isFunction(myFunction)) {
            for (let i = 0; i < array.length; i++) {
                if (!myFunction(array[i])) {
                    console.log('fallo');
                    return false;
                }
            }
            return true;
        } else {
            throw new Error('Not function');
        }
    } else {
        throw new Error('Not array');
    }
}
export function find(array, myFunction) {
    if (isArray(array)) {
        if (isFunction(myFunction)) {
            for (let i = 0; i < array.length; i++) {
                if (myFunction(array[i])) {
                    return array[i];
                }
            }
            return undefined;
        } else {
            throw new Error('Not function');
        }
    } else {
        throw new Error('Not array');
    }
}
export function filter(array, myFunction) {
    if (isArray(array)) {
        if (isFunction(myFunction)) {
            const aux = [];
            for (let i = 0; i < array.length; i++) {
                if (myFunction(array[i])) {
                    push(aux, array[i]);
                }
            }
            return aux;
        } else {
            throw new Error('Not function');
        }
    } else {
        throw new Error('Not array');
    }
}
export function map(array, myFunction) {
    if (isArray(array)) {
        if (isFunction(myFunction)) {
            const aux = [];
            for (let i = 0; i < array.length; i++) {
                push(aux, myFunction(array[i]));
            }
            return aux;
        } else {
            throw new Error('Not function');
        }
    } else {
        throw new Error('Not array');
    }
}
export function findIndex(array, myFunction) {
    if (isArray(array)) {
        if (isFunction(myFunction)) {
            for (let i = 0; i < array.length; i++) {
                if (myFunction(array[i])) {
                    return i;
                }
            }
            return -1;
        } else {
            throw new Error('Not function');
        }
    } else {
        throw new Error('Not array');
    }
}
export function includes(array, value) {
    if (isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    } else {
        throw new Error('Not array');
    }
}
export function indexOf(array, item) {
    if (isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
        return -1;
    } else {
        throw new Error('Not array');
    }
}
export function reduce(array, myFunction, initialValue) {
    if (isArray(array)) {
        if (isFunction(myFunction)) {
            let initialVal, currentValue, currentIndex;
            if (initialValue === undefined) {
                initialVal = array[0];
                currentValue = array[1];
                currentIndex = 1;
            } else {
                initialVal = initialValue;
                currentValue = array[0];
                currentIndex = 0;
            }
            let result = myFunction(initialVal, currentValue);
            for (currentIndex; currentIndex < array.length - 1; ) {
                currentValue = array[++currentIndex];
                result = myFunction(result, currentValue);
            }
            return result;
        } else {
            throw new Error('Not function');
        }
    } else {
        throw new Error('Not array');
    }
}
export function join(array, separator) {
    if (isArray(array)) {
        const mySeparator = separator || ',';
        let result = '';
        for (let i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                result = result + array[i];
            } else {
                result = result + array[i] + mySeparator;
            }
        }
        return result;
    } else {
        throw new Error('Not array');
    }
}
