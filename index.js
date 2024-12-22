const add = (n1,n2)=>n1+n2
const sub = (n1,n2)=>n1-n2
const div = (n1,n2)=>{
    if(n2==0){
        return "ERROR"
    }
    else {
        // console.log("ERROR")
        return n1/n2}
    
}
const mul = (n1,n2)=>n1*n2

const ops = {
    "+": add,
    "-": sub,
    "x": mul,
    "/": div,
}

const operate = (n1,sign,n2) =>ops[sign](n1,n2)

let di = document.querySelector(".display")
let buts = document.querySelectorAll("button")
// console.log(buts)


let signs =["+","-","/","x"]
let n1 = ""
let n2 = ""
let sign
let clear = false
let signed=false
const work=function (but,dis){
    
    if (but.textContent== "c"){dis.textContent=""}
    else if (signs.includes(but.textContent)){
        if (signed == false){
        if (n1){n2 = dis.textContent
            n2 = Number(n2)
            n1 = Number(n1)
            dis.textContent = operate(n1,sign,n2) % 1 != 0? parseFloat(operate(n1,sign,n2).toFixed(5)): operate(n1,sign,n2) == "ERROR"?  "ERROR" :operate(n1,sign,n2) 
            n1 = ""
            n2 = ""
            clear = true       
        }
        n1 = dis.textContent
        sign = but.textContent
        clear = true
        signed = true
    }else{n1 = dis.textContent
        sign = but.textContent
        clear = true
        signed = true}}
    
    else if (but.textContent== "="){n2 = dis.textContent
        if (signed == false){
        if (n1 && n2 ) {
            n2 = Number(n2)
            n1 = Number(n1)
        dis.textContent =  operate(n1,sign,n2) == "ERROR"?  "ERROR": operate(n1,sign,n2) % 1 == 0? operate(n1,sign,n2) : parseFloat(operate(n1,sign,n2).toFixed(5))
        n1 = dis.textContent
        n2 = ""
        clear = true
        signed = true
        }}
        
    }
    else {
        if (clear){
            dis.textContent=""
            clear = false
            signed = false
        }

    dis.textContent += !dis.textContent.includes(".")?but.textContent:but.textContent  != "."?but.textContent:""
    }
    but.blur();
}


window.addEventListener("keypress",(e)=>{
    buts.forEach((but)=>{
    if (e.key == but.textContent){
        but.click()
    }
    else if (e.key == "Enter" && but.textContent == "="){
        but.click()
    }
    else if (e.key == "*" && but.textContent == "x"){
        but.click()
    }
   

})})
window.addEventListener("keydown",(e)=>{
    if (e.key == "Backspace"){
        di.textContent = di.textContent.substring(0,di.textContent.length-1)
    }
})
buts.forEach((bu)=>{
    bu.onclick = () => work(bu, di)
})

