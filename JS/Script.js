
let inputBox = document.querySelectorAll('.inputBox')
let checkTTS = document.getElementById('checkTTS')
let checkboxTTS = document.getElementById('checkboxTTS')
let boxRadio = document.getElementById('R2')
let checkRadio_2 = document.getElementById('checkRadio_2')
let checkRadio_4 = document.getElementById('checkRadio_4')
let Account_Status = document.getElementById('Account_Status')
let checkRadio_5 = document.getElementById('checkRadio_5')
let Active = document.getElementById('Active')
let checkRadio_7 = document.getElementById('checkRadio_7')
let disabled_enabled = document.getElementById('disabled_enabled')
let checkRadio_8 = document.getElementById('checkRadio_8')
let enabled = document.getElementById('enabled')
let checkRadio_10 = document.getElementById('checkRadio_10')
let line_Blocked = document.getElementById('line_Blocked')
let checkRadio_11 = document.getElementById('checkRadio_11')
let subscription = document.getElementById('subscription')
let checkRadio_13 = document.getElementById('checkRadio_13')
let Check_customer = document.getElementById('Check_customer')
let checkRadio_14 = document.getElementById('checkRadio_14')
let overlapping = document.getElementById('overlapping')
let checkRadio_16 = document.getElementById('checkRadio_16')
let Yes_No = document.getElementById('Yes_No')
let CustomerInput = document.getElementById('CustomerInput')
let Customerchose = document.getElementById('Customerchose')
let Internet_Not_working = document.getElementById('Internet_Not_working')
let Matrix_sutats = document.getElementById('Matrix_sutatss')
let Router = document.getElementById('Router')
let Router_sutats = document.getElementById('Router_sutats')
let Different = document.getElementById('Different')
let DifferentBox = document.getElementById('DifferentBox')
let Both_Down = document.getElementById('Both_Down')
let Both_DownBox = document.getElementById('Both_DownBox')
let Query_IP = document.getElementById('Query_IP')
let Query_IPBox = document.getElementById('Query_IPBox')
let Not_IP = document.getElementById('Not_IP')
let optained_IP = document.getElementById('optained_IP')
let optained_IPBox = document.getElementById('optained_IPBox')
let matches = document.getElementById('matches')
let matchesBox = document.getElementById('matchesBox')
let matches_no = document.getElementById('matches_no')
let matches_no_box = document.getElementById('matches_no_box')
let same_problems = document.getElementById('same_problems')
let same_problemsBox = document.getElementById('same_problemsBox')
let diProblems = document.getElementById('diProblems')
let diProblemsBox = document.getElementById('diProblemsBox')
let PoolTicket = document.getElementById('PoolTicket')
let PoolTicketBox = document.getElementById('PoolTicketBox')
let IU_Maintenance = document.getElementById('IU_Maintenance')
let IU_MaintenanceBox = document.getElementById('IU_MaintenanceBox')



inputBox.forEach(function(itmes){
    itmes.onclick = function(){

        checkboxTTS.style.display = checkTTS.checked  ? "block"  : "none"
        boxRadio.style.display = checkRadio_2.checked  ? "block"  : "none"
        Account_Status.style.display = checkRadio_4.checked  ? "block"  : "none"
        Active.style.display = checkRadio_5.checked  ? "block"  : "none"
        disabled_enabled.style.display = checkRadio_7.checked  ? "block"  : "none"
        enabled.style.display = checkRadio_8.checked  ? "block"  : "none"
        line_Blocked.style.display = checkRadio_10.checked  ? "block"  : "none"
        subscription.style.display = checkRadio_11.checked  ? "block"  : "none"
        Check_customer.style.display = checkRadio_13.checked  ? "block"  : "none"
        overlapping.style.display = checkRadio_14.checked  ? "block"  : "none"
        Yes_No.style.display = checkRadio_16.checked  ? "block"  : "none"
        Customerchose.style.display = CustomerInput.checked  ? "block"  : "none"
        Matrix_sutats.style.display = Internet_Not_working.checked  ? "block"  : "none"
        Router_sutats.style.display = Router.checked  ? "block"  : "none"
        DifferentBox.style.display = Different.checked  ? "block"  : "none"
        Query_IPBox.style.display = Query_IP.checked  ? "block"  : "none"
        Both_DownBox.style.display = Both_Down.checked  ? "block"  : "none"
        optained_IPBox.style.display = optained_IP.checked  ? "block"  : "none"
        matchesBox.style.display = matches.checked  ? "block"  : "none"
        matches_no_box.style.display = matches_no.checked  ? "block"  : "none"
        same_problemsBox.style.display = same_problems.checked  ? "block"  : "none"
        diProblemsBox.style.display = diProblems.checked  ? "block"  : "none"
        PoolTicketBox.style.display = PoolTicket.checked  ? "block"  : "none"
        IU_MaintenanceBox.style.display = IU_Maintenance.checked  ? "block"  : "none"
 

      

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





 