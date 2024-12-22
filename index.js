const add = (n1,n2)=>n1+n2
const sub = (n1,n2)=>n1-n2
const mul = (n1,n2)=>n1*n2
const div = (n1,n2)=>n1/n2

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
const work=function (but,dis){
    
    if (but.textContent== "c"){dis.textContent=""}
    else if (signs.includes(but.textContent)){
        if (n1){n2 = Number(dis.textContent)
            dis.textContent = operate(n1,sign,n2)
            n1 = ""
            n2 = ""
            clear = true       
        }
        n1 = Number(dis.textContent)
        sign = but.textContent
        clear = true
    }
    
    else if (but.textContent== "="){n2 = Number(dis.textContent)
        dis.textContent = operate(n1,sign,n2)
        n1 = ""
        n2 = ""
        clear = true       
    }
    else {
        if (clear){
            dis.textContent=""
            clear = false
        }

    dis.textContent += but.textContent
    }
    but.blur();
}


window.addEventListener("keypress",(e)=>{
    console.log(e)
    buts.forEach((but)=>{
    if (e.key == but.textContent){
        but.click()
    }
    else if (e.key == "Enter" && but.textContent == "="){
        but.click()
    }

})})

buts.forEach((bu)=>{
    console.log(bu.textContent)
    bu.onclick = () => work(bu, di)
})

