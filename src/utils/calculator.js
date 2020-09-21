'use strict';


const OPERATOR_TYPE = {
    DOUBLE: "DOUBLE",
    SINGLE: "SINGLE",
    ALIAS: "ALIAS"
}



const OPERATORS = {
    "+": {
        priority: 1,
        type: OPERATOR_TYPE.DOUBLE,
        call(a, b){ return a + b }
    },
    "-": {
        priority: 1,
        type: OPERATOR_TYPE.DOUBLE,
        call(a, b){ return a - b }
    },
    "*": {
        priority: 2,
        type: OPERATOR_TYPE.DOUBLE,
        call(a, b) { return a * b}
    },
    "/": {
        priority: 2,
        type: OPERATOR_TYPE.DOUBLE,
        call(a, b) { return a / b}
    },
    "^": {
        priority: 3,
        type: OPERATOR_TYPE.DOUBLE,
        call(a, n) { return Math.pow(a, n) }
    },
    "!": {
        priority: 3,
        type: OPERATOR_TYPE.SINGLE,
        call(a) { return factTree(a) }
    },
    "sin": {
        priority: 1,
        type: OPERATOR_TYPE.SINGLE,
        call(a) { return Math.sin(a) }
    },
    "cos": {
        priority: 1,
        type: OPERATOR_TYPE.SINGLE,
        call(a) { return Math.cos(a) }
    },
    "pi": {
        priority: 3,
        type: OPERATOR_TYPE.ALIAS,
        call() { return Math.PI }
    }
}


function subTree(left, right){
    if(left > right) {
        return 1;
    }
    if(left === right){
        return left;
    }
    if(right - left === 1){
        return left * right
    }

    const middle = Math.floor((left + right) / 2);
    return subTree(left, middle) * subTree(middle + 1, right);
}


function factTree(n){
    if( n < 0 ){
        return 0;
    }
    if(n === 0) {
        return 1;
    }
    if( n === 1 || n === 2){
        return n;
    }
    return subTree(2, n);
}


function isFloat(token){
    return /^-?[0-9]+\.[0-9]+$/.test(token);
}


function isInt(token){
    return /^-?[0-9]+$/.test(token)
}

function makeToken(arr){
    const token = arr.join("")
    if(isInt(token)){
        return parseInt(token);
    }
    if(isFloat(token)){
        return parseFloat(token);
    }
    return token
}


function parserTokens(str){
    const tokens = [];
    const num = [];
    const opt = [];
    const s = str.split(' ').join('');
    for(let i = 0; i < s.length; i++){
        if(OPERATORS[makeToken(opt)] !== undefined){
            if(opt.length){
                tokens.push(makeToken(opt));
                opt.length = 0;
            }
        }
        if(isInt(s[i])){
            num.push(s[i])
        }
        else if(s[i] === "." && num !== []) {
            num.push(s[i])
        }
        else if(s[i] === "-" && (i === 0 || s[i - 1] === "(")){
            num.push(s[i]);
        }
        else if("+-*/%^!()".indexOf(s[i]) !== -1){
            if(num.length){
                tokens.push(makeToken(num));
                num.length = 0;
            }
            tokens.push(s[i]);
        }
        else if(!isInt(s[i])){
            if(num.length !== 0){
                tokens.push(makeToken(num));
                num.length = 0
            }
            opt.push(s[i]);
        }
    }

    if(num.length){
        tokens.push(makeToken(num));
    }
    if(opt.length){
        tokens.push(makeToken(opt))
    }
    return tokens;
}


function shuntingYard(tokens){
    const stack = [];
    const out = [];
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i]
        console.log(`token: ${token}, out: ${out}, stack: ${stack}`)
        if(OPERATORS[token] !== undefined){
            while(stack.length){
                if(stack[stack.length - 1] === "(") break
                if(OPERATORS[token].priority >= OPERATORS[stack[stack.length - 1]].priority) break
                out.push(stack.pop());
            }
            stack.push(token);
        }
        else if(token === ")"){
            while(stack.length){
                const x = stack.pop();
                if(x === "("){
                    break
                }
                out.push(x);
            }
        }
        else if(token === "("){
            stack.push(token);
        }
        else{
            out.push(token);
        }
    }
    while(stack.length !== 0){
        out.push(stack.pop());
    }
    return out;
}


function calculator(str){
    const tokens = parserTokens(str);
    const polish = shuntingYard(tokens);

    const stack = [];

    for(let i = 0; i < polish.length; i++){
        const token = polish[i];
        if(OPERATORS[token] !== undefined){
            if(OPERATORS[token].type === OPERATOR_TYPE.DOUBLE){
                const x = stack.pop()
                const y = stack.pop()
                stack.push(OPERATORS[token].call(x, y));
            }
            else if(OPERATORS[token].type === OPERATOR_TYPE.SINGLE){
                const x = stack.pop()
                stack.push(OPERATORS[token].call(x));
            }
            else if(OPERATORS[token].type === OPERATOR_TYPE.ALIAS){
                stack.push(OPERATORS[token].call())
            }
        }else{
            stack.push(token)
        }
    }
    return stack.pop()
}


export default calculator;

