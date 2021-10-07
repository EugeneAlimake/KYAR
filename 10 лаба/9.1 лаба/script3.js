let graphField = document.getElementById('graphField');

function graphics() {

    $('#graphField').html(""); //очистка окна вывода
    let changeMathFunction = document.forms[0].graph.value; //получение значение какую функцию начертить
    let colorValue = document.getElementById('selectColor').value; //получение цвета
    //переменные для обращения к setinterval
    let endSin;
    let endCos;
    let endSquaring;
    let endCubing;
    ////////////////////////////////////////


    if (changeMathFunction == '') {
        alert('Пожалуйста выберите функцию')
    } //обратока когда не выбрана функция

    let x = 0;
    let y = 0;
    let z = -10;
    let sizePixel = 3; //получение размера пикселя с окна
    let densityPixel = 0.1; //кучность пикселей

    if (changeMathFunction == 1) { //выбор вызова функции
        endSin = setInterval(moveCursorSin, 1);
    } else if (changeMathFunction == 2) {
        endCos = setInterval(moveCursorCos, 1);
    } else if (changeMathFunction == 3) {
        endSquaring = setInterval(moveCursorsquaring, 1);
    } else if (changeMathFunction == 4) {
        endCubing = setInterval(moveCursorCubing, 1);
    }


    function moveCursorSin() {
        console.log('1');
        if (x < 9.1) {
            x = x + densityPixel;

            y = Math.sin(x) * 50;

            $('#graphField').append("<img src='img/" + colorValue + ".bmp' style='top:" + (y + 517) + "px; left: " + (x * 50 - 10) + "px; height:" + sizePixel + "px; position:absolute;'>")
        } else {
            clearInterval(endSin)
        }

    }

    function moveCursorCos() {
        if (x < 9.1) {
            x = x + densityPixel;

            y = Math.cos(x) * 50;

            $('#graphField').append("<img src='img/" + colorValue + ".bmp'   style='top:" + (y + 517) + "px; left: " + (x * 50 - 10) + "px; height:" + sizePixel + "px; position:absolute;'>")
        } else {
            clearInterval(endCos)
        }

    }

    function moveCursorsquaring() {

        if (z < 10) {
            z = z + densityPixel;

            y = Math.pow(z, 2) * 2.2;

            $('#graphField').append("<img src='img/" + colorValue + ".bmp'   style='top:" + (-y + 516) + "px; left: " + (z * 20 + 227) + "px; height:" + sizePixel + "px; position:absolute;'>")
        } else {
            clearInterval(endSquaring)
        }

    }

    function moveCursorCubing() {

        if (z < 9.8) {
            z = z + densityPixel;

            y = Math.pow(z, 3) / 4.4;

            $('#graphField').append("<img src='img/" + colorValue + ".bmp'   style='top:" + (-y + 516) + "px; left: " + (z * 20 + 227) + "px; height:" + sizePixel + "px; position:absolute;'>")
        } else {
            clearInterval(endCubing)
        }

    }
}