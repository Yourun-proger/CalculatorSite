var a = "0";
var b = "";
var op = "";
var a_or_b = "a";
var empty = true;
var doble_click = false;

// @NOTE Чтобы не обращаться к DOM дереву каждый раз, можно просто запомнить
// в переменной ссылку на DOM элемент единожды, и везде использовать только его. Короче и быстрее.
var num;

// @NOTE это означает, что анонимная функция (начинается с function() {}) выполнится тогда,
// когда прогрузится весь DOM контент страницы.
// Для чего это надо? Когда мы хотим единожды связать глобальной переменной num ноду из DOM дерева,
// то надо дождаться отрисовки всех html элементов.
// Первые строки кода выполняться начинают раньше, чем появится на экране первые html элементы.
// Поэтому выше мы объявляем лишь переменную num, а значение ей присвоим тогда, когда отработает событие DOMContentLoaded.
document.addEventListener("DOMContentLoaded", function () {
  num = document.getElementById("num");
});

// @NOTE Над NUM происходит разного рода операции, но она все группируются по нескольким основным.
// appendNum означает - добавить в конец новый символ.
// Вообще результат document.getElementById('num').innerHTML += 0; может быть непредсказуем,
// так как происходит конкатенация числа к строке. Поэтому лучше всего явно представить 0 как "0"
// это будет лучше намного.
function appendNum(value) {
  num.innerHTML += "" + value; // ""+value делается для приведения value к строке явно.
}

function setNum(value) {
  num.innerHTML = "" + value;
}

function form_number_0() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "0";
    } else {
      b += "0";
    }
    if (num.innerHTML != "0") {
      appendNum(0);
    } else {
      setNum(0);
    }
  } else {
    a = "0";
    a_or_b = "a";
    b = "";
    setNum(0);
    empty = true;
  }
}

function form_number_1() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "1";
    } else {
      b += "1";
    }
    appendNum(1);
  } else {
    a = "1";
    b = "";
    a_or_b = "a";
    setNum(1);
    empty = false;
  }
}

function form_number_2() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "2";
    } else {
      b += "2";
    }
    appendNum(2);
  } else {
    a = "2";
    b = "";
    a_or_b = "a";
    setNum(2);
    empty = false;
  }
}

function form_number_3() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "3";
    } else {
      b += "3";
    }
    appendNum(3);
  } else {
    a = "3";
    b = "";
    a_or_b = "a";
    setNum(3);
    empty = false;
  }
}

function form_number_4() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "4";
    } else {
      b += "4";
    }
    appendNum(4);
  } else {
    a = "4";
    b = "";
    a_or_b = "a";
    setNum(4);
    empty = false;
  }
}

function form_number_5() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "5";
    } else {
      b += "5";
    }
    appendNum(5);
  } else {
    a = "5";
    b = "";
    a_or_b = "a";
    setNum(5);
    empty = false;
  }
}

function form_number_6() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "6";
    } else {
      b += "6";
    }
    appendNum(6);
  } else {
    a = "6";
    b = "";
    a_or_b = "a";
    setNum(6);
    empty = false;
  }
}

function form_number_7() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "7";
    } else {
      b += "7";
    }
    appendNum(7);
  } else {
    a = "7";
    b = "";
    a_or_b = "a";
    setNum(7);
    empty = false;
  }
}

function form_number_8() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "8";
    } else {
      b += "8";
    }
    appendNum(8);
  } else {
    a = "8";
    b = "";
    a_or_b = "a";
    setNum(8);
    empty = false;
  }
}

function form_number_9() {
  if (empty != true) {
    if (a_or_b == "a") {
      a += "9";
    } else {
      b += "9";
    }
    appendNum(9);
  } else {
    if (a_or_b == "a") {
      a = "9";
      b = "";
      a_or_b = "a";
    } else {
      b = "9";
      a_or_b = "b";
    }
    setNum(9);
    empty = false;
  }
}

function add() {
  setNum(""); // Если действие выполняется при любом из условий, достаточно его выполнить раз до входа в условие.
  if (doble_click) {
    b = "";
    a_or_b = "b";
    op = "+";
    empty = false;
    // document.getElementById("num").innerHTML = ""; // нужно выполнить один раз выше
  } else {
    // document.getElementById("num").innerHTML = ""; // нужно выполнить один раз выше
    op = "+";
    a_or_b = "b";
  }
}

function minus() {
  setNum(""); // я хочу так.

  if (doble_click) {
    b = "";
    a_or_b = "b";
    op = "-";
    empty = false;
    // document.getElementById("num").innerHTML = "";
  } else {
    // document.getElementById("num").innerHTML = "";
    op = "-";
    a_or_b = "b";
  }
}

function umng() {
  setNum("");
  if (doble_click) {
    b = "";
    a_or_b = "b";
    op = "*";
    empty = false;
    // document.getElementById("num").innerHTML = "";
  } else {
    // document.getElementById("num").innerHTML = "";
    op = "*";
    a_or_b = "b";
  }
}

function devide() {
  setNum("");
  if (doble_click) {
    b = "";
    a_or_b = "b";
    op = "/";
    empty = false;
    // document.getElementById("num").innerHTML = "";
  } else {
    // document.getElementById("num").innerHTML = "";
    op = "/";
    a_or_b = "b";
  }
}

function add_minus() {
  if (a_or_b == "a") {
    a = -Number(a);
  } else {
    b = -Number(b);
  }
  num.innerHTML = -Number(num.innerHTML);
}

function add_virgule() {
  if (a_or_b == "a") {
    a += ".";
  } else {
    b += ".";
  }
  appendNum(".");
  empty = false;
}

function dlsx() {
  if (a_or_b == "a") {
    a = Math.trunc(Number(a) / 10);
  } else {
    b = Math.trunc(Number(b) / 10);
  }
  num.innerHTML = Math.trunc(Number(num.innerHTML) / 10);
}

function procent_of_x() {
  if (op == "+" || op == "-") {
    b = Number(a) * (Number(b) / 100);
  } else {
    b = Number(b) / 100;
  }
  setNum(b);
}

function clear_all() {
  a = "";
  b = "";
  op = "";
  a_or_b = "a";
  doble_click = false;
  empty = true;
  setNum("0");
}

function CE() {
  b = "";
  a_or_b = "b";
  setNum("");
}

function sqrt() {
  num.innerHTML = Math.sqrt(Number(num.innerHTML));
  if (a_or_b == "a") {
    a = num.innerHTML;
  } else {
    b = num.innerHTML;
  }
}

function square() {
  num.innerHTML = Number(num.innerHTML) * Number(num.innerHTML);
  if (a_or_b == "a") {
    a = num.innerHTML;
  } else {
    b = num.innerHTML;
  }
}

function one_devide_x() {
  num.innerHTML = 1 / Number(num.innerHTML);
  if (a_or_b == "a") {
    a = num.innerHTML;
  } else {
    b = num.innerHTML;
  }
}

function result() {
  if (op == "+") {
    setNum(Number(a) + Number(b));
    a = num.innerHTML;
    empty = true;
    doble_click = true;
  } else if (op == "-") {
    setNum(Number(a) - Number(b));
    a = num.innerHTML;
    empty = true;
    doble_click = true;
  } else if (op == "*") {
    setNum(Number(a) * Number(b));
    a = num.innerHTML;
    empty = true;
    doble_click = true;
  } else if (op == "/") {
    setNum(Number(a) / Number(b));
    a = num.innerHTML;
    empty = true;
    doble_click = true;
  }
}
