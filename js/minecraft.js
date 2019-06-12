//class to create matrix:

class Array {
    constructor(length) {
        this.length = length;
    }
    createArray() {
        var array1 = [];
        for (var i = 0; i < this.length; i++) {
            array1.push(i);
        }
        return array1;
    }
    createMatrix(array) {
        var outerArray = this.createArray();
        var innerArray = array.createArray();
        for (var i = 0; i < this.length; i++) {
            outerArray.splice(i, 1, innerArray);
        }
        return outerArray;
    }
}

var array1 = new Array(20);
var array2 = new Array(20);
var matrix = array1.createMatrix(array2);

//function to create tiles in html according to matrix:

function createTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div />");
        tileRow.addClass("tile");
        $(".container").append(tileRow);
        for (var j = 0; j < array[i].length; j++) {
            var tileCol = $("<div />");
            tileCol.addClass("tile");
            $(".container").append(tileCol);
        }
    }
}

createTiles(matrix);

//function to change class of tile when clicked:

function changeColor() {
    $(event.target).addClass("ground");
}

$("div.tile").on("click", changeColor);


