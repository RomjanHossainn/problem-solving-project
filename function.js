

let Numberchecked = (Number) => {
    let partran = /^[0-9]*$/;
    return partran.test(Number)
}


// aria cal??

function ariacal (type,value1,value2){
    if(type == 'Ractangle'){
        return `Ractangle Result = ${value1*value2}`
    }else if(type == 'Squre'){
        return `Squre Reslut = ${value1*value1}`
    }else if(type == 'Tringle'){
        return `Tringle Reslut = ${value1*value2*0.5}`
    }else if(type == 'Circel'){
        return `Circel Reslut = ${value1*value1}`
    }
}



