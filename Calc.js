
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

            //for perform operation
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
            //for delete last element
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
            //for delete last element
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
