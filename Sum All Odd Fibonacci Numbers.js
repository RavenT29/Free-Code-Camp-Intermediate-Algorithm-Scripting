function fib(num){
    if(num===0) return 0;
    if(num===1) return 1;
    return fib(num-1)+fib(num-2);
}

function sum(num){
    var total=0;
    var arr=[];
    for(i=0;i<=num;i++){
        if(fib(i)<=num){
            arr.push(fib(i));
        }
    }
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            total+=arr[i];
        }
    }
    return total;
}

sum(10);
