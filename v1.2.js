console.log("Script funcionando correctamente :)");

$(document).ready(function(){

$('#element_2').change(function(){ 
  switch($("#element_2 :selected").text()) {
    case "Fernando Sabaño": $("#element_3").val('saba.fernando.daniel@gmail.com'); break;  
    case "Carolina Larronda": $("#element_3").val('clarronda@ceibal.edu.uy'); break;
    case "Carolina Romero": $("#element_3").val('cromero@ceibal.edu.uy'); break;
    case "Cinthia Núñez": $("#element_3").val('cinunez@ceibal.edu.uy'); break;
    case "Cristofer Cabrera": $("#element_3").val('crcabrera@ceibal.edu.uy'); break;
    case "Diego Texeira": $("#element_3").val('dtexeira@ceibal.edu.uy'); break;
    case "Emilia Casaravilla": $("#element_3").val('ecasaravilla@ceibal.edu.uy'); break;
    case "Facundo Costa": $("#element_3").val('ecosta@ceibal.edu.uy'); break;
    case "Federico Touya": $("#element_3").val('ftouya@ceibal.edu.uy'); break;
    case "Francisco Risso": $("#element_3").val('frisso@ceibal.edu.uy'); break;
    case "Irina Rodriguez": $("#element_3").val('irrodriguez@ceibal.edu.uy'); break;
    case "Lourdes Vidal": $("#element_3").val('lvidal@ceibal.edu.uy'); break;
    case "Magela Araujo": $("#element_3").val('magaraujo@ceibal.edu.uy'); break;
    case "Martin Mederos": $("#element_3").val('mamederos@ceibal.edu.uy'); break;
    case "Mónica González": $("#element_3").val('mogonzalez@ceibal.edu.uy'); break;
    case "Romina Etchepare": $("#element_3").val('roetchepare@ceibal.edu.uy'); break;
    case "Santiago Olivera": $("#element_3").val('solivera@ceibal.edu.uy'); break;
    case "Silvana Salvador": $("#element_3").val('ssalvador@ceibal.edu.uy'); break;
    case "Tatiana Gilles": $("#element_3").val('tgilles@ceibal.edu.uy'); break;
    case "Veda Contreras": $("#element_3").val('vcontreras@ceibal.edu.uy'); break;
    case "Yenniffer de los Santos": $("#element_3").val('ydelossantos@ceibal.edu.uy'); break; }

})

});
