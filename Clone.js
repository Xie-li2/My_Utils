import types,{deepTag, isObject, getType} from './Types';
import Types from "./Types";

// 简单克隆
export function cloneFirst(target) {
    if(!isObject(target) || (getType(target) === Types.objectTag || getType(target) === Types.arrayTag)){
        return JSON.parse(JSON.stringify(target));
    }
    throw new Error("cloneFirst只支持克隆基本数据对象、数组、object");
}
//通用while循环
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while(++index < length){
        iteratee(array[index], index);
    }
    return array;
}
//初始化克隆对象
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
//克隆Symbol
function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
}
//克隆正则
function cloneReg(target) {
    const reFlags = /\w*$/;
    const result = new target.constructor(target.source, reFlags.exec(target));
    result.lastIndex = target.lastIndex;
    return result;
}
//克隆函数
function cloneFun(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}
//克隆不可遍历对象
function cloneOtherType(target, type) {
    const Ctor = target.constructor;
    switch (type) {
        case types.boolTag:
        case types.numberTag:
        case types.stringTag:
        case types.errorTag:
        case types.dateTag:
            return new Ctor(target);
        case types.regexpTag:
            return cloneReg(target);
        case types.symbolTag:
            return cloneSymbol(target);
        case types.funTag:
            return cloneFun(target);
        default:
            return null;
    }
}
// 全面克隆
export function cloneLast(target, map = new WeakMap()) {
    if(!isObject(target)){
        return target;
    }
    const type = getType(target);
    let cloneTarget;
    if(deepTag.includes(type)){
        cloneTarget = getInit(target, type);
    }else{
        return cloneOtherType(target, type);
    }
    if(map.get(target)){
        return target;
    }
    map.set(target,cloneTarget);
    if(type === types.setTag){
        target.forEach(value=>{
            cloneTarget.add(cloneLast(value));
        });
        return cloneTarget;
    }
    if(type === types.mapTag){
        target.forEach((value, key)=>{
            cloneTarget.set(key, cloneLast(value));
        });
        return cloneTarget;
    }
    const keys = (type === types.arrayTag) ? undefined : Object.keys(target);
    forEach(keys || target, (value, key)=>{
        if(keys){
            key = value;
        }
        cloneTarget[key] = cloneLast(target[key], map);
    })
    return cloneTarget;
}
export default {cloneFirst,cloneLast};