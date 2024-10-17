var elm = document.getElementById("imgTag")
var links = ["1.jpg","2.jpg","3.jpg"]
var count = 0
function fun(){
    if (count >1){
        count = 0
    }
    picTag.setAttribute("src", links[count]);
    count++
}
setInterval(fun, 2000)