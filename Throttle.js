import Types, {getType} from "./Types";
export default function throttle(func, wait, options) {
    if ((getType(func) !== Types.funTag) || (getType(wait) !== Types.numberTag) || (getType(options) !== Types.objectTag)){
        throw new Error("throttle参数错误，throttle(function, number, {leading:boolean,trailing:boolean}).");
    }
    let timeout, context, args, result;
    let previous = 0;
    if (!options) options = {};

    let later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    let throttled = function() {
        let now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        let remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }

    return throttled;
}