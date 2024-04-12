var number1 = document.querySelector('.number1');
var number2 = document.querySelector('.number2');
var number3 = document.querySelector('.number3');
var number4 = document.querySelector('.number4');
var number5 = document.querySelector('.number5');
var number6 = document.querySelector('.number6');
var number7 = document.querySelector('.number7');
var number8 = document.querySelector('.number8');
var number9 = document.querySelector('.number9');
var number0 = document.querySelector('.number0');
/* 
=================================================
*/
var plus = document.querySelector('.plus');
var clickedPlus = false;
var minus = document.querySelector('.minus');
var clickedMinus = false;
var multy = document.querySelector('.multy');
var clickedMulty = false;
var division = document.querySelector('.division');
var clickedDivision = false;
var equal = document.querySelector('.equals'); 
var clickedequal = false;
/* 
===================================================
*/
var realequals;
var input = document.querySelector('.input');
var numberOne = localStorage.getItem('numberOne');
var realNumberOne = numberOne;

function clickPlay() {
    var clickPlay = document.getElementById("click-audio");
    clickPlay.play();
}

number1.addEventListener('click', function() {
    input.textContent += '1';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '1';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;
    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number2.addEventListener('click', function() {
    input.textContent += '2';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '2';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number3.addEventListener('click', function() {
    input.textContent += '3';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '3';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number4.addEventListener('click', function() {
    input.textContent += '4';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '4';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number5.addEventListener('click', function() {
    input.textContent += '5';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '5';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number6.addEventListener('click', function() {
    input.textContent += '6';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '6';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number7.addEventListener('click', function() {
    input.textContent += '7';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '7';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number8.addEventListener('click', function() {
    input.textContent += '8';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '8';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number9.addEventListener('click', function() {
    input.textContent += '9';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '9';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

number0.addEventListener('click', function() {
    input.textContent += '0';
    if(clickedPlus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } else if(clickedMinus === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    }
    else if(clickedMulty === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedDivision === true) 
    {
        localStorage.setItem('numbeTwo', input.textContent);        
    } 
    else if(clickedequal === true) 
    {
        input.textContent = '0';
        localStorage.setItem('numberOne', input.textContent);
        clickedequal = false;

    } else 
    {
        localStorage.setItem('numberOne', input.textContent);        
    }
});

plus.addEventListener('click', function() {
    input.textContent = ' ';
    localStorage.setItem('symbol', '+')
    if (clickedPlus) 
    {
        console.log('clicked');
    } else 
    {
    
        clickedPlus = true;
    }
});

minus.addEventListener('click', function() {
    input.textContent = ' ';
    localStorage.setItem('symbol', '-')
    if (clickedMinus) 
    {
        console.log('clicked');
    } else 
    {
        clickedMinus = true;
    }
});

multy.addEventListener('click', function() {
    input.textContent = ' ';
    localStorage.setItem('symbol', '*')
    if (clickedMulty) 
    {
        console.log('clicked');
    } else 
    {
    
        clickedMulty = true;
    }
});

division.addEventListener('click', function() {
    input.textContent = ' ';
    localStorage.setItem('symbol', '/')
    if (clickedDivision) 
    {
        console.log('clicked');
    } else 
    {
        
        clickedDivision = true;
    }
});

equal.addEventListener('click', function()
{
    var inputValueNumberOne = localStorage.getItem('numberOne');
    var inputValueNumberTwo = localStorage.getItem('numbeTwo');
    var symbol = localStorage.getItem('symbol');
    var numberOne = parseInt(inputValueNumberOne);
    var numberTwo = parseInt(inputValueNumberTwo);
    var result;
    switch (symbol) {
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
        default:
            console.log('Invalid operation');
            return;
    }

    input.textContent = result;
    console.log(inputValueNumberOne);
    localStorage.removeItem('numberOne');
    localStorage.removeItem('numbeTwo');
    localStorage.removeItem('symbol');
    clickedPlus = false;
    clickedMinus = false;
    clickedMulty = false;
    clickedDivision = false;
    clickedequal = true;
});


