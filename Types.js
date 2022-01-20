//可遍历数据类型
const objectTag = '[object Object]';
const arrayTag = '[object Array]';
const mapTag = '[object Map]';
const setTag = '[object Set]';
const argsTag = '[object Arguments]';
//不可遍历数据类型
const numberTag = '[object Number]';
const stringTag = '[object String]';
const boolTag = '[object Boolean]';
const symbolTag = '[object Symbol]';
const undTag = '[object Undefined]';
const nullTag = '[object Null]';
const funTag = '[object Function]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';

export const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];
export const lightTag = [boolTag, dateTag, errorTag, numberTag, regexpTag, stringTag, symbolTag, undTag, nullTag, funTag];
//判断是否为对象类型
export function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}
//判断具体类型
export function getType(target) {
    return Object.prototype.toString.call(target);
}

export default {
    getType,
    isObject,
    deepTag,
    lightTag,
    objectTag,
    arrayTag,
    mapTag,
    setTag,
    argsTag,
    numberTag,
    stringTag,
    boolTag,
    symbolTag,
    undTag,
    nullTag,
    funTag,
    dateTag,
    errorTag,
    regexpTag
}