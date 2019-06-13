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

var array1 = new Array(30);
var array2 = new Array(20);

var matrixBackground = array1.createMatrix(array2);

//matrix for ground:

var array3 = new Array(10);
var array4 = new Array(20);

var matrixSoil = array3.createMatrix(array4);

//array for top of ground:

var array5 = new Array(30);

var arraySoilTop = array5.createArray();

//function to create sky tiles in html according to matrix:

function createTiles(array) {
    for (var i = 0; i < array.length; i++) {
        var tileRow = $("<div />");
        tileRow.addClass("tile");
        tileRow.addClass("tileSky");
        $(".container").append(tileRow);
        for (var j = 0; j < array[i].length; j++) {
            var tileCol = $("<div />");
            tileCol.addClass("tile");
            tileCol.addClass("tileSky");
            $(".container").append(tileCol);
        }
    }
}

createTiles(matrixBackground);

//change selected div classes (from the matrix) to create the cloud:

function createCloud() {
    for (var i = 217; i < 219; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
    }
    for (var i = 245; i < 250; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
    }
    for (var i = 252; i < 255; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
    }
    for (var i = 274; i < 285; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
    }
    for (var i = 309; i < 312; i++) {
        var cloud = $("div.tile:nth-child(" + i + ")");
        cloud.addClass("cloud");
    }
}

createCloud();

//change selected div classes (from the matrix) to create the tree and leaves:

function createTree() {
    for (var i = 410; i < 415; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
    }
    for (var i = 440; i < 445; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
    }
    for (var i = 470; i < 475; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
    }
    for (var i = 500; i < 505; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
    }
    var treeLeaves = $("div.tile:nth-child(575)");
    treeLeaves.addClass("tileLeaves");
    for (var i = 604; i < 607; i++) {
        var treeLeaves = $("div.tile:nth-child(" + i + ")");
        treeLeaves.addClass("tileLeaves");
    }
    var treeTrunk = $("div.tile:nth-child(532)");
    treeTrunk.addClass("tileWood");
    var treeTrunk2 = $("div.tile:nth-child(562)");
    treeTrunk2.addClass("tileWood");
    var treeTrunk3 = $("div.tile:nth-child(592)");
    treeTrunk3.addClass("tileWood");
    var treeTrunk4 = $("div.tile:nth-child(622)");
    treeTrunk4.addClass("tileWood");
}

createTree();

//change selected div classes (from the matrix) to create the rocks:

function createRocks() {
    for (var i = 619; i < 621; i++) {
        var rocks = $("div.tile:nth-child(" + i + ")");
        rocks.addClass("tileRock");
    }
    var stones = $("div.tile:nth-child(630)");
    stones.addClass("tileRock");
}

createRocks();

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

function changeGroundTile() {
    if ($(event.target).hasClass("ground") || $(event.target).hasClass("groundtop") ) {
        invetoryItemUpdate();
        $(event.target).removeClass("ground");
        $(event.target).removeClass("groundtop");
        $(event.target).addClass("tileSky");
    }
}

$("div.tile").on("click", changeGroundTile);

// Tool selection
$("#shovel").on("click",removePointerNone)

function removePointerNone (){
$(".container").css("pointer-events","all")

}

//update inventory item:

function invetoryItemUpdate (){
    var tileClicked=$(event.target).attr("class");
    //console.log(tileClicked);
    $("#inventory-item").removeClass();
    $("#inventory-item").addClass(tileClicked);

}

// TO DO

//Tool selection for axes and pickaxe (duplicate funtion removePointerNone)

// duplicate the tile in the inventory

// selects the tile from the inventory and place anywhere

// highlight unuseable tool when relevant

// use modal dialog for the landing page (this or something similar)