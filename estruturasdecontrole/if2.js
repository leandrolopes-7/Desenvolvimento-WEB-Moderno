function teste1(num){
    if(num > 7)
        console.log(num)

    console.log('Final')
}

teste1(8)
teste1(6)

function teste2(num){
    if(num > 7); { //cuidado com o ;, não usar nas estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)