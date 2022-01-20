export default function isPrime(num) {
    if(typeof num !== "number"){
        throw new Error("isPrime参数错误，isPrime(number).");
    }
    //两个较小数另外处理
    if(num ===2|| num===3 ) return true ;
    //不在6的倍数两侧的一定不是质数
    if(num%6 !== 1 && num%6 !== 5) return false ;

    let tmp =Math.sqrt(num);
    //在6的倍数两侧的也可能不是质数
    for(let i = 5;i <= tmp;i += 6){
        if(num%i === 0 || num%(i + 2) === 0)
            return false ;
    }
    //排除所有，剩余的是质数
    return true ;
}