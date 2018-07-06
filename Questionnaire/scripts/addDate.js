var Sel = document.getElementById("mysel");
var date = new Date();
var year = date.getFullYear();
var startYear = 1957;
var length = year - startYear;
for(var i = 0; i <= length; i++){
   Sel.options[i] = new Option(startYear + i, startYear + i);
}
var option = Sel.value;
if(option)
    document.getElementById("year").value = option;
    