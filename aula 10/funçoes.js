const soma=(...valores)=>{
    const soma=val=>{
        let res=0
        for(v of val)
            res+=v
            return res
        
    }
    return soma(valores)
}

console.log(soma(10,5,15))