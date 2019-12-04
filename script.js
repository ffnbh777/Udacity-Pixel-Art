async function makeGrid() {
    console.log("makeGrid")

    // Choose size input of grid

    var { canvas, gridHeight, gridWidth, rows, cell } = newFunction_1();

    newFunction_2();

    newFunction_3(canvas);

    newFunction_4(gridHeight, canvas);

    let newLocal;

    newLocal = rows = $('tr');

    for (y = 0; y < gridWidth; y++) {
        const newLocal = rows.append('<td></td>');
    }

    const newLocal_1 = cell = canvas.find('td');

    //  onclick by the user, choose color of td
    newFunction();


    function newFunction_2() {
        canvas = $('#pixel_canvas');
        gridHeight = $('#input_height').val();
        gridWidth = $('#input_width').val();
    }

    function newFunction() {
        cell.click(function () {
            // Select color input
            console.log(`changeColor`);
            let color;
            color = newFunction_1(color);
            $(this).attr('bgcolor', color);
        });
    }

    function newFunction_1(color) {
        color = $("#colorPicker").val();
        return color;
    }
}

//  size of grid is displayed when submitted, call makeGrid()
let submitQuery;

const newLocal = submitQuery = $('input[type="submit"]');

submitQuery.click(event => {
    event.preventDefault();
    makeGrid();
});

function newFunction_4(gridHeight, canvas) {
    for (x = 0; x < gridHeight; x++) {
        canvas.append('<tr></tr>');
    }
}

function newFunction_3(canvas) {
    canvas.children().remove();
}

function newFunction_1() {
    var canvas, cell, gridHeight, gridWidth, rows;
    return { canvas, gridHeight, gridWidth, rows, cell };
}
