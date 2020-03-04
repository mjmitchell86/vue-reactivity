const { reactive, effect } = require('@vue/reactivity');
var counter = reactive({
    num: 0
});
var currentNumber;
effect(function () {
    currentNumber = counter.num;
});
console.log(currentNumber); //Should be 0
counter.num++;
console.log(currentNumber); //Should be 1
