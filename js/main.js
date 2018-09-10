document.getElementById("hello_text").textContent="はじめてのJavascript";

var count=0;

setInterval(function(){
    count++;
    document.getElementById("hello_text").textContent="はじめてのJavascript("+count+")";
},1000);
