document.getElementById("hello_text").textContent="はじめてのJavascript";

var count=0;
var cells;
var isfalling=true;

var blocks={
    i: {
        class:"i",
        pattern:[
            [1,1,1,1]
        ]
    },
    o: {
        class: "o",
        pattern: [
            [1, 1], 
            [1, 1]
        ]
    },
    t: {
        class: "t",
        pattern: [
            [0, 1, 0], 
            [1, 1, 1]
        ]
    },
    s: {
    class: "s",
        pattern: [
            [0, 1, 1], 
            [1, 1, 0]
        ]
    },
    z: {
        class: "z",
        pattern: [
            [1, 1, 0], 
            [0, 1, 1]
        ]
    },
    j: {
        class: "j",
        pattern: [
            [1, 0, 0], 
            [1, 1, 1]
        ]
    },
    l: {
        class: "l",
        pattern: [
            [0, 0, 1], 
            [1, 1, 1]
        ]
    }
};

setInterval(function(){
    count++;
    loadtable();
    document.getElementById("hello_text").textContent="はじめてのJavascript("+count+")";
    if(hasfallingblocks()){
        fallblocks();
    }
    else{
        deleteblocks();
        generateblocks();
    }
},1000);

//初期状態
function loadtable(){
    var td_array= document.getElementsByTagName("td");
    var index=0;
    cells=[];
    
    for(var row=0; row < 20; row++){
        cells[row]=[];
        for(var col=0; col < 10; col++){
            cells[row][col]=td_array[index];
            index++;
        }
    }
}

//ブロック落とす処理
function fallblocks(){
    //最下行を削除
    for(var i=0; i<10; i++){
        if(cells[19][i].className!==""){
            isfalling=false;
            return ;
        }
    }
    //最下行の一つ上の要素があれば、それを一つ下に下ろしていく的な
    for(var row=18; row>=0; row--){
        for(var col =0; col<10; col++){
            if(cells[row][col].className!==""){
                cells[row+1][col].className=cells[row][col].className;
                cells[row][col].className="";
            }
        }
    }
    isfalling=true;
}

function hasfallingblocks(){
    return isfalling;
}
    
//行を消す処理
function deleteblocks(){

}

//ブロック生成処理
function generateblocks(){
    var random = Math.floor(Math.random()*Object.keys(blocks).length);
    console.log(Object.keys(blocks).length);

    
}

