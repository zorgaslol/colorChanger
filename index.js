var running;

function changeColor(){
    var randomColor = '#' + Math.floor(Math.random()* 16777215).toString(16);
    document.getElementById("text").style.color = randomColor;
    document.getElementById("code").innerHTML = randomColor;
}



document.getElementById("change").onclick = function(){
    running = true;
    if(running){
        changeColor();
        setTimeout(function(){
            if(running){
                document.getElementById("change").click();
            
            }
        }, 1000);
    }
};

document.getElementById("stop").onclick = function(){
    running = false;
};