var a = "0";
var b = "";
var op = "";
var a_or_b = "a";
var empty = true;
var doble_click = false;


function form_number_0(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "0";
        }
        else{
            b += "0";
        }
        if(document.getElementById('num').innerHTML != "0"){
            document.getElementById('num').innerHTML += 0;
        }
        else{
            document.getElementById('num').innerHTML = 0;
        }
    }
    else{
        a = "0";
        a_or_b = "a";
        b = "";
        document.getElementById('num').innerHTML = 0;
        empty = true;
    }
}

function form_number_1(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "1";
        }
        else{
            b += "1";
        }
        document.getElementById('num').innerHTML += 1;
    }
    else{
        a = "1";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 1;
        empty = false;
    }
}

function form_number_2(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "2";
        }
        else{
            b += "2";
        }
        document.getElementById('num').innerHTML += 2;
    }
    else{
        a = "2";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 2;
        empty = false;
    }
}

function form_number_3(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "3";
        }
        else{
            b += "3";
        }
        document.getElementById('num').innerHTML += 3;
    }
    else{
        a = "3";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 3;
        empty = false;
    }
}

function form_number_4(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "4";
        }
        else{
            b += "4";
        }
        document.getElementById('num').innerHTML += 4;
    }
    else{
        a = "4";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 4;
        empty = false;
    }
}

function form_number_5(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "5";
        }
        else{
            b += "5";
        }
        document.getElementById('num').innerHTML += 5;
    }
    else{
        a = "5";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 5;
        empty = false;
    }
}

function form_number_6(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "6";
        }
        else{
            b += "6";
        }
        document.getElementById('num').innerHTML += 6;
    }
    else{
        a = "6";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 6;
        empty = false;
    }
}

function form_number_7(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "7";
        }
        else{
            b += "7";
        }
        document.getElementById('num').innerHTML += 7;
    }
    else{
        a = "7";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 7;
        empty = false;
    }
}

function form_number_8(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "8";
        }
        else{
            b += "8";
        }
        document.getElementById('num').innerHTML += 8;
    }
    else{
        a = "8";
        b = "";
        a_or_b = "a";
        document.getElementById('num').innerHTML = 8;
        empty = false;
    }
}

function form_number_9(){
    if(empty != true){
        if(a_or_b == "a"){
            a += "9";
        }
        else{
            b += "9";
        }
        document.getElementById('num').innerHTML += 9;
    }
    else{
        if(a_or_b == "a"){
            a = "9";
            b = "";
            a_or_b = "a";
        }
        else{
            b = "9";
            a_or_b = "b";
        }
        document.getElementById('num').innerHTML = 9;
        empty = false;
    }
}

function add(){
        if(doble_click){
            b = "";
            a_or_b = "b";
            op = "+";
            empty = false;
            document.getElementById('num').innerHTML = "";
        }
        else{
            document.getElementById('num').innerHTML = "";
            op = "+";
            a_or_b = "b";
        }
}

function minus(){
    if(doble_click){
        b = "";
	    a_or_b = "b";
	    op = "-";
	    empty = false;
	    document.getElementById('num').innerHTML = "";
    }
    else{
	    document.getElementById('num').innerHTML = "";
        op = "-";
    	a_or_b = "b";
    }
}

function umng(){
    if(doble_click){
        b = "";
	    a_or_b = "b";
	    op = "*";
	    empty = false;
	    document.getElementById('num').innerHTML = "";
    }
    else{
	    document.getElementById('num').innerHTML = "";
        op = "*";
    	a_or_b = "b";
    }
}

function devide(){
    if(doble_click){
        b = "";
	    a_or_b = "b";
	    op = "/";
	    empty = false;
	    document.getElementById('num').innerHTML = "";
    }
    else{
	    document.getElementById('num').innerHTML = "";
        op = "/";
    	a_or_b = "b";
    }
}

function add_minus(){
    if(a_or_b == "a"){
	    a = -Number(a);
    }
    else{
	    b = -Number(b);
    }
    document.getElementById('num').innerHTML = -Number(document.getElementById('num').innerHTML);
}

function add_virgule(){
    if(a_or_b == "a"){
        a += ".";
    }
    else{
        b += "."
    }
    document.getElementById('num').innerHTML += ".";
	empty = false;
}

function dlsx(){
    if(a_or_b == "a"){
	    a = Math.trunc(Number(a) / 10);
    }
    else{
	    b = Math.trunc(Number(b) / 10);
    }
    document.getElementById('num').innerHTML = Math.trunc(Number(document.getElementById('num').innerHTML) / 10);
}

function procent_of_x(){
    if(op == "+" || op == "-"){
        b = Number(a) * (Number(b) / 100);
    }
    else{
	    b = Number(b) / 100;
    }
    document.getElementById('num').innerHTML = b;
}

function clear_all(){
    a = "";
    b = "";
    op = "";
    a_or_b = "a";
    doble_click = false;
    empty = true;
    document.getElementById('num').innerHTML = "0";
}

function CE(){
    b = "";
    a_or_b = "b";
    document.getElementById('num').innerHTML = "";
}

function sqrt(){
    document.getElementById('num').innerHTML = Math.sqrt(Number(document.getElementById('num').innerHTML));
    if(a_or_b == "a"){
        a = document.getElementById('num').innerHTML;
    }
    else{
        b = document.getElementById('num').innerHTML;
    }
}

function square(){
    document.getElementById('num').innerHTML = Number(document.getElementById('num').innerHTML) * Number(document.getElementById('num').innerHTML);
    if(a_or_b == "a"){
        a = document.getElementById('num').innerHTML;
    }
    else{
        b = document.getElementById('num').innerHTML;
    }
}

function one_devide_x(){
    document.getElementById('num').innerHTML = 1 / Number(document.getElementById('num').innerHTML);
    if(a_or_b == "a"){
        a = document.getElementById('num').innerHTML;
    }
    else{
        b = document.getElementById('num').innerHTML;
    }
}

function result(){
    if(op == "+"){
        document.getElementById('num').innerHTML = Number(a) + Number(b);
	    a = document.getElementById('num').innerHTML;
	    empty = true;
	    doble_click = true;
    }
    else if(op == "-"){
        document.getElementById('num').innerHTML = Number(a) - Number(b);
	    a = document.getElementById('num').innerHTML;
	    empty = true;
	    doble_click = true;
    }
    else if(op == "*"){
        document.getElementById('num').innerHTML = Number(a) * Number(b);
	    a = document.getElementById('num').innerHTML;
	     empty = true;
	     doble_click = true;
    }
    else if(op == "/"){
        document.getElementById('num').innerHTML = Number(a) / Number(b)
	    a = document.getElementById('num').innerHTML;
	    empty = true;
	    doble_click = true;
    }
}
