import {
    isArray,
    arrayLength,
    push,
    pop,
    unshift,
    shift,
    some,
    every,
    find,
    filter,
    map,
    isFunction,
    findIndex,
    includes,
    indexOf,
    reduce,
    join,
} from './arrayMethods.js';

const falseArrays = [
    '',
    'pepe',
    1,
    234252346n,
    false,
    undefined,
    true,
    null,
    (i) => {
        i;
    },
    { name: 'Pepe' },
    { name: 'Pepe', length: 'Km' },
];
const falseFunctions = [
    '',
    'pepe',
    1,
    234252346n,
    false,
    undefined,
    true,
    null,
    [],
    [1, 2, 3],
    { name: 'Pepe' },
    { name: 'Pepe', length: 'Km' },
];

describe('Given isArray function', () => {
    describe('When falseArrays given', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should return false', () => {
                expect(isArray(falseArrays[i])).toBe(false);
            });
        }
    });
    describe('When true arrays given', () => {
        test('Then it should return true', () => {
            expect(isArray([])).toBe(true);
            expect(isArray([1, 2, 3, 'zingo']));
        });
    });
});
describe('Given isFunction function', () => {
    describe('When falseFunctions given', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should return false', () => {
                expect(isFunction(falseFunctions[i])).toBe(false);
            });
        }
    });
    describe('When true function given', () => {
        test('Then it should return true', () => {
            expect(
                isFunction((i) => {
                    i;
                })
            ).toBe(true);
        });
    });
});
describe('Given arrayLength function', () => {
    describe('When receive []', () => {
        test('Then should return 0', () => {
            const param = [];
            const result = 0;
            expect(arrayLength(param)).toBe(result);
        });
    });
    describe('When receive [1, 2]', () => {
        test('Then should return 2', () => {
            const param = [1, 2];
            const result = 2;
            expect(arrayLength(param)).toBe(result);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => arrayLength(falseArrays[i])).toThrow();
            });
        }
    });
});
describe('Given push function', () => {
    describe('When receive [], "zingo"', () => {
        test('Then should return 0', () => {
            const param1 = [];
            const param2 = 'zingo';
            const result = 1;
            expect(push(param1, param2)).toBe(result);
        });
    });
    describe('When receive [1, 2], "zingo"', () => {
        test('Then the array should contain "zingo"', () => {
            const param1 = [1, 2];
            const param2 = 'zingo';
            push(param1, param2);
            expect(param1).toContain(param2);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => push(falseArrays[i], 0)).toThrow();
            });
        }
    });
});
describe('Given pop function', () => {
    describe('When receive [1, 2, 3]', () => {
        const param = [1, 2, 3];
        test('Then should return 3', () => {
            expect(pop(param)).toBe(3);
        });
        test('Then arrayLenth should return 2', () => {
            expect(arrayLength(param)).toBe(2);
        });
    });
    describe('When receive []', () => {
        test('Then it should return undefined', () => {
            const param = [];
            expect(pop(param)).toBe(undefined);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => pop(falseArrays[i])).toThrow();
            });
        }
    });
});
describe('Given unshift function', () => {
    describe('When receive [2, 3, 4], 1', () => {
        test('Then should return 4', () => {
            const param1 = [2, 3, 4];
            const param2 = 1;
            const expectedResult = 4;
            expect(unshift(param1, param2)).toBe(expectedResult);
        });
        test('Then the array should contain 1', () => {
            const param1 = [2, 3, 4];
            const param2 = 1;
            unshift(param1, param2);
            expect(param1).toContain(param2);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => unshift(falseArrays[i], 0)).toThrow();
            });
        }
    });
});
describe('Given shift function', () => {
    describe('When receive [7, 8, 9]', () => {
        test('Then it should return 7', () => {
            const param1 = [7, 8, 9];
            expect(shift(param1)).toBe(7);
        });
        test('Then arrayLength should be 2', () => {
            const param1 = [7, 8, 9];
            const expectedResult = 2;
            shift(param1);
            expect(param1.length).toBe(expectedResult);
        });
    });
    describe('When receive []', () => {
        test('Then it should return undefined', () => {
            const param = [];
            expect(shift(param)).toBe(undefined);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => shift(falseArrays[i])).toThrow();
            });
        }
    });
});
describe('Given some function', () => {
    describe('When receive [2, 4, 6, 8, 6, 4, 2], (i) => i % 2 === 1', () => {
        test('Then it should return false', () => {
            const param1 = [2, 4, 6, 8, 6, 4, 2];
            const param2 = (i) => i % 2 === 1;
            const expectedResult = false;
            expect(some(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive [2, 4, 6, 8, 6, 4, 2], (i) => i % 2 === 0', () => {
        test('Then it should return false', () => {
            const param1 = [2, 4, 6, 8, 6, 4, 2];
            const param2 = (i) => i % 2 === 0;
            const expectedResult = true;
            expect(some(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() =>
                    some(falseArrays[i], (a) => {
                        a;
                    })
                ).toThrow();
            });
        }
    });
    describe('When receive falseFunctions', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => some([], falseFunctions[i])).toThrow();
            });
        }
    });
});
describe('Given every function', () => {
    describe('When receive [2, 4, 6, 8, 6, 4, 2], (i) => i % 2 === 0', () => {
        test('Then it should return true', () => {
            const param1 = [2, 4, 6, 8, 6, 4, 2];
            const param2 = (i) => i % 2 === 0;
            const expectedResult = true;
            expect(every(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive [2, 4, 6, 8, 7, 4, 2], (i) => i % 2 === 0', () => {
        test('Then it should return false', () => {
            const param1 = [2, 4, 6, 8, 7, 4, 2];
            const param2 = (i) => i % 2 === 0;
            const expectedResult = false;
            expect(every(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() =>
                    every(falseArrays[i], (a) => {
                        a;
                    })
                ).toThrow();
            });
        }
    });
    describe('When receive falseFunctions', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => every([], falseFunctions[i])).toThrow();
            });
        }
    });
});
describe('Given find function', () => {
    describe('When receive [2, 3, 4, 5], (i) => i < 7', () => {
        test('Then it should return 2', () => {
            const param1 = [2, 3, 4, 5];
            const param2 = (i) => i < 7;
            const expectedResult = 2;
            expect(find(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive [2, 3, 4, 5], (i) => i > 7', () => {
        test('Then it should return undefined', () => {
            const param1 = [2, 3, 4, 5];
            const param2 = (i) => i > 7;
            const expectedResult = undefined;
            expect(find(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() =>
                    find(falseArrays[i], (a) => {
                        a;
                    })
                ).toThrow();
            });
        }
    });
    describe('When receive falseFunctions', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => find([], falseFunctions[i])).toThrow();
            });
        }
    });
});
describe('Given filter function', () => {
    describe('When receive [1, 2, 3, 4, 5, 6], (i) => i % 2 ===0', () => {
        test('Then it should return [2, 4, 6]', () => {
            const param1 = [1, 2, 3, 4, 5, 6];
            const param2 = (i) => i % 2 === 0;
            const result = filter(param1, param2);
            expect(result).toContain(2);
            expect(result).toContain(4);
            expect(result).toContain(6);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() =>
                    filter(falseArrays[i], (a) => {
                        a;
                    })
                ).toThrow();
            });
        }
    });
    describe('When receive falseFunctions', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => filter([], falseFunctions[i])).toThrow();
            });
        }
    });
});
describe('Given map function', () => {
    describe('When receive [1, 2, 3], (i) => i * 3', () => {
        test('Then it should return [3, 6, 9]', () => {
            const param1 = [1, 2, 3];
            const param2 = (i) => i * 3;
            const result = map(param1, param2);
            expect(result).toContain(3);
            expect(result).toContain(6);
            expect(result).toContain(9);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() =>
                    map(falseArrays[i], (a) => {
                        a;
                    })
                ).toThrow();
            });
        }
    });
    describe('When receive falseFunctions', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => map([], falseFunctions[i])).toThrow();
            });
        }
    });
});
describe('Given findIndex function', () => {
    describe('When receive [1, 2, 3, 4], (i) => i % 2 === 0', () => {
        test('Then it should return 2', () => {
            const param1 = [1, 5, 3, 4];
            const param2 = (i) => i % 2 === 0;
            const result = findIndex(param1, param2);
            const expectedResult = 3;
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive [1, 2, 3, 4], (i) => i > 10', () => {
        test('Then it should return 2', () => {
            const param1 = [1, 2, 3, 4];
            const param2 = (i) => i > 10;
            const result = findIndex(param1, param2);
            const expectedResult = -1;
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() =>
                    findIndex(falseArrays[i], (a) => {
                        a;
                    })
                ).toThrow();
            });
        }
    });
    describe('When receive falseFunctions', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => findIndex([], falseFunctions[i])).toThrow();
            });
        }
    });
});
describe('Given includes function', () => {
    describe('When receive [1, 2, 3], 2', () => {
        test('Then should return true', () => {
            const param1 = [1, 2, 3];
            const param2 = 2;
            const expectedResult = true;
            expect(includes(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive [1, 2, 3], 4', () => {
        test('Then should return false', () => {
            const param1 = [1, 2, 3];
            const param2 = 4;
            const expectedResult = false;
            expect(includes(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => includes(falseArrays[i])).toThrow();
            });
        }
    });
});
describe('Given indexOf function', () => {
    describe('When receive [1, 2, 3], 2', () => {
        test('Then should return true', () => {
            const param1 = [1, 2, 3];
            const param2 = 2;
            const expectedResult = 1;
            expect(indexOf(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive [1, 2, 3], 4', () => {
        test('Then should return false', () => {
            const param1 = [1, 2, 3];
            const param2 = 4;
            const expectedResult = -1;
            expect(indexOf(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => indexOf(falseArrays[i])).toThrow();
            });
        }
    });
});
describe('Given reduce function', () => {
    describe('When receive [1, 2, 3, 4], (previousValue, currentValue) => previousValue + currentValue', () => {
        test('Then it should return 2', () => {
            const param1 = [1, 2, 3, 4];
            const param2 = (previousValue, currentValue) =>
                previousValue + currentValue;
            const result = reduce(param1, param2);
            const expectedResult = 10;
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive [1, 2, 3, 4], (previousValue, currentValue) => previousValue + currentValue, 10', () => {
        test('Then it should return 2', () => {
            const param1 = [1, 2, 3, 4];
            const param2 = (previousValue, currentValue) =>
                previousValue + currentValue;
            const param3 = 10;
            const result = reduce(param1, param2, param3);
            const expectedResult = 20;
            expect(result).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() =>
                    reduce(falseArrays[i], (a) => {
                        a;
                    })
                ).toThrow();
            });
        }
    });
    describe('When receive falseFunctions', () => {
        for (let i = 0; i < falseFunctions.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => reduce([], falseFunctions[i])).toThrow();
            });
        }
    });
});
describe('Given join function', () => {
    describe('When receive [1, 2, 3], " - "', () => {
        test('Then should return true', () => {
            const param1 = [1, 2, 3];
            const param2 = ' - ';
            const expectedResult = '1 - 2 - 3';
            expect(join(param1, param2)).toBe(expectedResult);
        });
    });
    describe('When receive [1, 2, 3]', () => {
        test('Then should return false', () => {
            const param1 = [1, 2, 3];
            const expectedResult = '1,2,3';
            expect(join(param1)).toBe(expectedResult);
        });
    });
    describe('When receive falseArrays', () => {
        for (let i = 0; i < falseArrays.length; i++) {
            test('Then it should throw Error', () => {
                expect(() => join(falseArrays[i])).toThrow();
            });
        }
    });
});
