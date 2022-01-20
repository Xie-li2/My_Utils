import Types, {getType} from "./Types";
export default function debounce(func, wait, immediate = false) {
    if((getType(func) !== Types.funTag) || (getType(wait) !== Types.numberTag) || (getType(immediate) !== Types.boolTag)) {
        throw new Error("debounce参数错误，debounce(function, number, boolean).");
    }
    let timeout, result;
    let debounced = function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            let callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        } else {
            timeout = setTimeout(function(){
                result = func.apply(context, args)
            }, wait);
        }
        return result;
    };

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}