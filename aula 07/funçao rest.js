function soma(...valores){
    let tam = valores.length
    let res = 0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(soma(5,10,8,10))

function soma2(...valores2){
    let tam2 = valores2.length 
    let res2 = 0
    for(let v of valores2){
        res2+=v
    }

    return res2
}




console.log(soma2(50,50))


