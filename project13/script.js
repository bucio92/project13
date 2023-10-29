let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

 
//buttons click when you click on it//
buttons.map( button => {
    button.addEventListener ('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
                //the back button is the arrow//
                case '←':
                   if(display.innerText){
                 display.innerText = display.innerText.slice(0,-1);
                 }
                    break;
                    case '=':
                        try{
                            display.innerText = eval(display.innerText);
                        } catch{
                            //error message well appear//
                            display.innerText = 'error';
                        }
                       break;
            default:
                display.innerText += e.target.innerText
        }
    });
 });





