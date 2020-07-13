function calcul(){ // Функция, которая всё считает
    var x = Number(document.getElementById('num1').value); // Метод Number(text)- превращает текст в число
    var y = Number(document.getElementById('num2').value);
    var op = document.getElementById('op').value;
    if(op == '+'){
        document.getElementById('result').innerHTML = x + y;
    }
    else if(op == '-'){
        document.getElementById('result').innerHTML = x - y;
    }
    else if(op == '*'){
        document.getElementById('result').innerHTML = x * y;
    }
    else if(op == '/'){
        document.getElementById('result').innerHTML = x / y;
    }
    else{
        document.getElementById('result').innerHTML = "i don't know this operator!"; // Это не обязательно
    }
}
