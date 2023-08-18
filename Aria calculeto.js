


const main_form = document.getElementById('main_form')
let ractangle = main_form.querySelector(".Ractangle")
let Squre = main_form.querySelector(".Squre")
let Tringle = main_form.querySelector('.Tringle')
let Redius = main_form.querySelector(".Redius")
let output = document.querySelector('.output')
const select = main_form.querySelector('select[name="select"]')



select.onchange = (e) =>{

    if(e.target.value == 'Ractangle'){
        ractangle.style.display = 'block'
        
    }else{
        ractangle.style.display = 'none'
    }
    if(e.target.value == 'Squre'){
        Squre.style.display = 'block'
        
    }else{
        Squre.style.display = 'none'
    }
    if(e.target.value == 'Tringle'){
        Tringle.style.display = 'block'
    }else{
        Tringle.style.display = 'none'
    }
    if(e.target.value == 'Circel'){
        Redius.style.display = 'block'
    }else{
        Redius.style.display = 'none'
    }
} 

main_form.addEventListener('submit',(event) => {
    event.preventDefault()
    if(select.value == 'Select'){
        output.innerHTML = 'Apni kiser  !'
        output.style.color = '#3c65de'
    }

    if(select.value == 'Ractangle'){
        let length = event.target.length.value;
        let width = event.target.Width.value 
        output.innerHTML = ariacal(select.value,length,width)
        
        if(length == '' || width ==''){
            output.innerHTML = 'All Field Requrad !'
            output.style.color ='#e9273e' 
        }else if(Numberchecked(length) == false || Numberchecked(width) == false){
            output.innerHTML = 'Apni Input Field A Songkha Din'
            output.style.color = 'green'
        }
        
    }else if(select.value == 'Squre'){
        let bahu = event.target.Bahu.value;
        output.innerHTML = ariacal(select.value,bahu)
        if(bahu ==''){
            output.innerHTML = 'All Field Requrad'
            output.style.color ='#de3c88' 
        }else if(Numberchecked(bahu) == false){
            output.innerHTML ='Apni Input Field A Songkha Din'
            output.style.color = 'green'
        }
        
    }else if(select.value == 'Tringle'){
        let base = event.target.base.value;
        let height = event.target.height.value
        output.innerHTML = ariacal(select.value,base,height)
        if(base == '' || height ==''){
            output.innerHTML = 'All Field Requrad'
            output.style.color ='red' 
        }else if(Numberchecked(base) == false || Numberchecked(height) == false){
            output.innerHTML = 'Apni Input Field A Songkha Din'
            output.style.color = 'green'
        }

    }else if(select.value == 'Circel'){
        let redius = event.target.redius.value;
        output.innerHTML = ariacal(select.value,redius)
        if(redius ==''){
            output.innerHTML = 'All Field Requrad'
            output.style.color ='red' 
        }else if(Numberchecked(redius) == false ){
            output.innerHTML = 'Apni Input Field A Songkha Din'
            output.style.color = 'green'
        }

    }

    
    
})
