# 我的工具包

## 一、Clone.js深克隆

导入：

```javascript
import clone, {cloneFirst, cloneLast} from "*/My_Utils/Clone.js";
```

使用：

1. ```javascript
   let newTarget = cloneFirst(taget);	//克隆基本数据对象、一般对象、数组	clone.cloneFirst(taget)
   ```

2. ```javascript
   let newTarget = cloneLast(taget);	//克隆所有类型	clone.cloneLast(taget)
   ```

## 二、Curry.js生成柯里化函数

导入：

```javascript
import curry from "*/My_Utils/Curry.js"	//注意该模块依赖Types.js模块
```

使用：

```javascript
let newFunction = curry(function);
```

## 三、Debounce.js生成防抖函数

导入：

```javascript
import debounce from "*/My_Utils/Debounce.js"	//注意该模块依赖Types.js模块
```

使用：

```javascript
let newFunction = debounce(function, number[, boolean]);
```

参数：

1. number：防抖间隔时间
2. boolean：(true)在事件触发时执行，(false)在定时器回调时执行(默认)

## 四、IsPalindrome.js判断数字是否为回文数

导入：

```javascript
import isPalindrome from "*/My_Utils/IsPalindrome.js";
```

使用：

```javascript
let bool = isPalindrome(number);
```

## 五、IsPrime.js判断数字是否为素数

导入：

```javascript
import isPrime from "*/My_Utils/IsPrime.js";
```

使用：

```javascript
let bool = isPrime(number);
```

## 六、ReverseStr.js反转字符串

导入：

```javascript
import reverseStr from "*/My_Utils/ReverseStr.js";
```

使用：

```javascript
let newStr = reverseStr(string)
```

## 七、Sum.js大数相加

导入：

```javascript
import sum from "*/My_Utils/Sum.js";
```

使用：

```javascript
let result = sum(...numbers);
```

## 八、Throttle.js生成节流函数

导入：

```javascript
import throttle from "*/My_Utils/Throttle.js";	//注意该模块依赖Types.js模块
```

使用：

```javascript
let newFunction = throttle(function, number, object)
```

参数：

1. number：节流间隔时间
2. object：{leading：boolean，trailing：boolean}，leading：是否在事件触发时调用；trailing：是否在定时器回调时调用

## 九、Type.js数据类型

导入：

```javascript
import Types, {deepTag, lightTag, isObject, getType} from "*/My_Utils/Types.js";
```

使用：

1. ```javascript
   let bool = deepTag.includes(type);	//判断某数据类型是否为可遍历
   ```

2. ```javascript
   let bool = isObject(target);	//判断某数据是否为对象类型
   ```

3. ```javascript
   let type = getType(target);	//获取某数据的类型
   ```

4. ```javascript
   Types.xxxTag;	//xxx数据类型
   ```

## 十、Unique.js数组去重

导入：

```javascript
import unique, {uniqueFt, uniqueSet} from "*/My_Utils/Unique.js";
```

使用：

```javascript
let newArr = uniqueFt(arr);	//unique.uniqueFt(arr)
or
let newArr = uniqueSet(arr);	//unique.uniqueSet(arr)
```

