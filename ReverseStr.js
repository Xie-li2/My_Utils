export default function reverseStr(str) {
    if (typeof str !== "string"){
        throw new Error("reverseStr参数错误，reverseStr(string).");
    }
    const n = str.length;
    const s = str.split("");
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
        [s[left], s[right]] = [s[right], s[left]];
    }
    return s.join("");
};