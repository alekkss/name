let obj = {
    input: document.querySelector('#name'),
    text: document.querySelector('.header__h1'),
    button: document.querySelector('.form__button'),
    span: document.querySelector('.header__span'),
    name: null
};
obj.button.onclick = function () {
    let name = obj.input.value;
    obj.name = name;
    for (var i = 0; i < name.length; i++) {
        if (isNaN(name[i])) {
            obj.text.innerHTML = 'Ваше имя: ';
            obj.span.innerHTML = obj.name;

        } else {
            obj.text.innerHTML = 'Это ваше имя, вы уверены? ';
            obj.span.innerHTML = obj.name;
        }
    }
    name = '';
};
obj.input.onkeypress = handleKeyPress;
function handleKeyPress(e) {
    if (e.keyCode === 13) {
        obj.button.click();
        return false;
    }
}


// Получить value

/* <input id="elem1" type="text" placeholder="Количество">
<input id="butt" type="button" value="Кнопка"/><br><br>
<div id="str"></div>

butt.onclick = function() {
		var val = document.getElementById('elem1').value;
		document.getElementById('str').innerHTML="Вы ввели: "+val;
}; */