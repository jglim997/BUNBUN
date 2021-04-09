function newblackberry(){
    document.getElementById("img3").src = "images/newblackberry.png"; 
}

function blackberry(){
    document.getElementById("img3").src = "images/blackberry.png";
}

function cart1(){
    var bun = document.getElementById("item1");
    bun.remove();
    var x = document.getElementById("total");
    x.innerHTML = "6 Items Total - $17.00";
}

function cart2(){
    var bun = document.getElementById("item2");
    bun.remove();
    var x = document.getElementById("total");
    x.innerHTML = "3 Items Total - $8.50";
}

function cart3(){
    var bun = document.getElementById("item3");
    bun.remove();
    var x = document.getElementById("total");
    x.innerHTML = "No Items in Cart"
}