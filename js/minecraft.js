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

//matrix for sky:

var array1 = new Array(20);
var array2 = new Array(20);

var matrixBackground = array1.createMatrix(array2);

//matrix for ground:

var array3 = new Array(20);
var array4 = new Array(10);

var matrixSoil = array3.createMatrix(array4);

//array for top of ground:

var array5 = new Array(20);

var arraySoilTop = array5.createArray();

//function to create sky tiles in html according to matrix:

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

createTiles(matrixBackground);

//function to create top ground tiles in html according to array:

function createTopGroundTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div />");
        tileRow.addClass("tile");
        tileRow.addClass("groundtop");
        $(".container").append(tileRow);
    }
}

createTopGroundTiles(arraySoilTop);

//function to create ground tiles in html according to matrix:

function createGroundTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div />");
        tileRow.addClass("tile");
        tileRow.addClass("ground");
        $(".container").append(tileRow);
        for (var j = 0; j < array[i].length; j++) {
            var tileCol = $("<div />");
            tileCol.addClass("tile");
            tileCol.addClass("ground");
            $(".container").append(tileCol);
        }
    }
}

createGroundTiles(matrixSoil);

//function to change class of tile when clicked:
//only for ground digging
function shovelDig(event) {
    var tileSelected= $(event.target).attr("class");
    if ( tileSelected == "ground" || tileSelected == "groundtop"){
    $(event.target).addClass("ground")}
    // else {
    //     event.pre
        
    // }

}






$("div.tile").on("click", changeColor);


