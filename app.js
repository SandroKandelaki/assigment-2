function equalOrNot(a,b){
    if(a == b){
        return "equal";
    }else{
        return "not equal"
    }
    
}
console.log(equalOrNot(4,5));

function toCelsius(f){
    
    if(typeof f ==='string' ){
        return "ar aris int"
    }else {
        const c = f / 5;
    return c  
    }
}

console.log(toCelsius('d'));

function calculator(a,b,op){
    
    if(op == '-'){
        result = a-b
        return result
    }else if(op == '+'){
        result = a + b
        return result
    }else if(op == '*'){
        result = a * b
        return result
    }else if(op == '/'){
        result = a / b
        return result
    }else{
        return false
    }
    

}
console.log(calculator(10,7,'f'))