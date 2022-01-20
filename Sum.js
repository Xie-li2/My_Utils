export default function sum(...args) {
    const length = args.length;
    let index = 0;
    let result = args[0].toString();
    while(++index < length){
        if (typeof args[index] !== "number"){
            throw new Error("sum参数错误，sum(...number).");
        }
        let item = args[index].toString();
        // 取两数最大长度
        let maxLength = Math.max(result.length, item.length);
        // 用0补齐长度
        result = result.padStart(maxLength, "0");
        item = item.padStart(maxLength, "0");
        // 定义加法过程需要的变量
        let t = 0;  //中间变量
        let f = 0;  //进位
        let sum = '';
        for(let i = maxLength - 1; i >= 0; i --){
            t = parseInt(result[i]) + parseInt(item[i]) + f;
            f = Math.floor(t/10);
            sum = t%10 + sum;
        }
        if(f === 1){
            result = "1" + sum;
        }else{
            result = sum;
        }
    }
    return result;
}