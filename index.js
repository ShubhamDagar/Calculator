var item0 = document.getElementsByClassName('grid-item');
var  exp = document.getElementById('exp');
let expDisplay = "";
let expSec = "";
let operator = "";
let flag = false;
item0[1].addEventListener('click', function(){
    expDisplay = "";
    expSec = "";
    operator = "";
    exp.innerText = "";
    flag = false;
})
item0[2].addEventListener('click', function(){
    if(flag  == false)
    {
        if(expDisplay > 0)
            expDisplay = '-' + expDisplay;
        else
            expDisplay = expDisplay.substring(1,expDisplay.length);
        exp.innerText = expDisplay;
    }
    else
    {
        if(expSec > 0)
            expSec = '-' + expSec;
        else
            expSec = expSec.substring(1,expSec.length);
        exp.innerText = expSec;
    }
})
item0[3].addEventListener('click', function(){
    if(flag == false)
    {
        exp.innerText = eval(expDisplay + '/' + '100');
    }
    expDisplay = "";
})
item0[4].addEventListener('click', function(){
    if(flag == true)
    {
        expDisplay = expSec;
        expSec = "";
    }
    operator = '/';
    flag = true;
    exp.innerText = "";
})
item0[5].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '1';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '1';
        exp.innerText = expSec;
    }
})
item0[6].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '2';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '2';
        exp.innerText = expSec;
    }
})
item0[7].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '3';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '3';
        exp.innerText = expSec;
    }
})
item0[8].addEventListener('click', function(){
    if(flag == true)
    {
        expDisplay = expSec;
        expSec = "";
    }
    flag = true;
    operator = '*';
    exp.innerText = "";
})
item0[9].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '4';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '4';
        exp.innerText = expSec;
    }
})
item0[10].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '5';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '5';
        exp.innerText = expSec;
    }
})
item0[11].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '6';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '6';
        exp.innerText = expSec;
    }
})
item0[12].addEventListener('click', function(){
    if(flag == true)
    {
        expDisplay = expSec;
        expSec = "";
    }
    flag = true;
    operator = '-';
    exp.innerText = "";
})
item0[13].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '7';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '7';
        exp.innerText = expSec;
    }
})
item0[14].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '8';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '8';
        exp.innerText = expSec;
    }
})
item0[15].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '9';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '9';
        exp.innerText = expSec;
    }
})
item0[16].addEventListener('click', function(){
    if(flag == true)
    {
        expDisplay = expSec;
        expSec = "";
    }
    flag = true;
    operator = '+';
    exp.innerText = "";
})
item0[17].addEventListener('click', function(){
    if(flag == false)
    {
        expDisplay = expDisplay.substring(0, expDisplay.length - 1);
        exp.innerText = expDisplay;
    }
    else
    {
        expSec = expSec.substring(0, expSec.length - 1)
        exp.innerText = expSec;
    }
})
item0[18].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '0';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '0';
        exp.innerText = expSec;
    }
})
item0[19].addEventListener('click', function(){
    if(flag  == false)
    {
        expDisplay += '.';
        exp.innerText = expDisplay;
    }
    else
    {
        expSec += '.';
        exp.innerText = expSec;
    }
})
item0[20].addEventListener('click', function(){
    expDisplay = eval(expDisplay + " " + operator + " " + expSec);
    expDisplay = "" + expDisplay;
    exp.innerText = expDisplay;
    operator = "";
    expSec = "";
    flag = false;
})