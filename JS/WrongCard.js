
let inputBox = document.querySelectorAll('.inputBox')
let major_fault = document.getElementById('major_fault')
let major_faultBox = document.getElementById('major_faultBox')



inputBox.forEach(function(itmes){
    itmes.onclick = function(){

        major_faultBox.style.display = major_fault.checked  ? "block"  : "none"
        checkboxTTS.style.display = checkTTS.checked  ? "block"  : "none"

 
    }
})


let resetAll = document.getElementById('resetAll').onclick = () =>{
    window.location.reload()
}

// CustomerInput.addEventListener('click' , () =>{
//     if(CustomerInput.checked){
//         Customerchose.style.display = "block"
//     }else{
//         Customerchose.style.display = "none"
   
//     }

// })

let input = document.getElementsByTagName('input')
let pop = document.getElementById('pop')
let CSTname = document.getElementById('CSTname')
let textarea = document.getElementById('textarea')
let chose1 = document.getElementById('chose1')
let chose2 = document.getElementById('chose2')
let chose3 = document.getElementById('chose3')
let TP_Link = document.getElementById('TPLink')
let optionL = document.getElementById('optionL')

 function textareaF(){ 
            if(CSTname.value){
                textarea.textContent = "CST Name:" + CSTname.value + ""
            }
            if (optionL.clicked){
                textarea.textContent += ",CPE: " + "ffff"
        }
            if(pop.checked){
                textarea.textContent += ",Check POP outage:" +  pop.value 

            } if(checkTTS.checked){
                textarea.textContent += checkTTS.value

            } if(chose1.checked){
                textarea.textContent += chose1.value

            } if(chose2.checked){
                textarea.textContent += chose2.value
            } if(chose3.checked){
                textarea.textContent += chose3.value

            }else{

            }
        
    
 }





 