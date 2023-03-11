console.log("Script funcionando correctamente :)");

$(document).ready(function(){

 $('#element_2').change(function(){ 
    $("#element_1").val( $("#element_2").val( ) );
 })

});
