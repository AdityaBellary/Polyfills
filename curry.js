function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return function(...next){
                return curried(...args, ...next)
            }
        }
    }
}

const data = (name, exp, skill) => (name + "  " + exp + " " + skill)
const totalData = curry(data)

console.log(totalData("Dhoni")("15")("Cricket"))