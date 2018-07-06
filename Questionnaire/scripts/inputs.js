function getProp(i){
    document.getElementsByClassName("label")[i].style.display = "block"; 
}
function deleteProp(i){
    if(!document.getElementsByClassName("form")[i].value)
        document.getElementsByClassName("label")[i].style.display = "none"; 
}