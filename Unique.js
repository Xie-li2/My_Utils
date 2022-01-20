export function uniqueFt(array) {
    if (!Array.isArray(array)){
        throw new Error("uniqueFt参数错误，uniqueFt(array).");
    }
    return array.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
}
export function uniqueSet(array) {
    if (!Array.isArray(array)){
        throw new Error("uniqueFt参数错误，uniqueFt(array).");
    }
    return [...new Set(array)];
}
export default {uniqueFt, uniqueSet};