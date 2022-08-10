const num = Number(prompt("Digite um número aqui"))

if(num %2===0){
    if(num %3===0){
       console.log("É divisível por 2 e 3")
    }else{
        console.log("Não é divisível")
    }
}else{
    console.log("Não é divisível")
    }

if(num %2===0 && num %3===0){
    console.log("sim")
}
    


