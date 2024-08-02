$(document).ready(function(){

let dir = "", refe = ""; 
$('#element_24').hide();
$('#element_24').css("padding", "8px");
$('#element_24').css("font-size", "14px");

function escribir () {
if (dir != "") {
  /* $(".anaPelea2").html('<p style="font-size:14px"><strong>Información de la sede:</strong></p>'); */
  $("#element_24").html("");
  $("#element_24").html( $("#element_24").html() +  '- Dirección: ' + dir + '\n\n');
  $("#element_24").html( $("#element_24").html() +  '- Si tienes alguna duda, puedes contactarte con ' + refe);
  $('#element_24').show(); } else { $('#element_24').hide(); }
}

function reiniciar () {
  $("#element_10").val(0); $("#element_11").val(0); $("#element_13").val(0); $("#element_16").val(0);
  $("#element_17").val(0); $("#element_20").val(0); $("#element_21").val(0);
}

$('.anaPelea').on('propertychange input', function (e) {

$("#element_19_1").prop('checked', false);
$("#element_19_2").prop('checked', false);

dir = "", refe = "";

switch($(".anaPelea :selected").text()) {
  case "Artigas":
    dir = 'IFD de Artigas, Gral. Fructuoso Rivera y Juan Antonio Lavalleja - departamento de Artigas';
    refe = 'Silvana Salvador (ssalvador@ceibal.edu.uy)';
    break;
  case "Salto":
    dir = 'CERP Salto, Florencio Sanchez 398 - departamento de Salto';
    refe = 'Diego Texeira (dtexeira@ceibal.edu.uy)';
    break;
  case "Paysandú":
    dir = 'Instituto de Formación Docente “Ercilia Guidali de Pisano”, Florida 1181 - departamento de Paysandú';
    refe = 'Romina Etchepare (roetchepare@ceibal.edu.uy)';
    break;
  case "Colonia":
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)';
    break;
  case "San José":
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)';
    break;
  case "Florida":
    dir = 'Instituto de Formación Docente de Florida, Pocho Fernandez 444 - departamento de Florida';
    refe = 'Cristofer Cabrera (crcabrera@ceibal.edu.uy)';
    break;
  case "Montevideo":
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)';
    break;
  case "Maldonado":
    dir = 'Instituto de Formación Docente de Maldonado, Rafael Perez del Puerto 651 - departamento de Maldonado';
    refe = 'Tatiana Gilles (tgilles@ceibal.edu.uy)';
    break;
  case "Tacuarembó":
    dir = 'Instituto de Formación Docente, Agraciada 892 - departamento de Rivera';
    refe = 'Bruno Oliva Gonzalez (broliva@ceibal.edu.uy)';
    break;
  case "Rivera":
    dir = 'Instituto de Formación Docente, Agraciada 892 - departamento de Rivera';
    refe = 'Bruno Oliva Gonzalez (broliva@ceibal.edu.uy)';
    break;
  case "Cerro Largo":
    dir = 'Instituto de Formación Docente, Manuel Lavalleja 1191 - departamento de Treinta y Tres';
    refe = 'Carolina Romero (cromero@ceibal.edu.uy)';
    break;
  case "Treinta y Tres":
    dir = 'Instituto de Formación Docente, Manuel Lavalleja 1191 - departamento de Treinta y Tres';
    refe = 'Carolina Romero (cromero@ceibal.edu.uy)';
    break;
} reiniciar (); escribir (); });


$(function() {  $("#element_13").change( function() {
  if ( $("#element_13 :selected").text()  == "Florida (IFD Florida) - semana del 2/9 a definir" ) {
    dir = 'Instituto de Formación Docente de Florida, Pocho Fernandez 444 - departamento de Florida';
    refe = 'Cristofer Cabrera (crcabrera@ceibal.edu.uy)'; } 
  else if ( $("#element_13 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)'; }
  escribir ();
}); });

$(function() {  $("#element_16").change( function() {
  if ( $("#element_16 :selected").text()  == "Florida (IFD Florida) - semana del 2/9 a definir" ) {
    dir = 'Instituto de Formación Docente de Florida, Pocho Fernandez 444 - departamento de Florida';
    refe = 'Cristofer Cabrera (crcabrera@ceibal.edu.uy)'; } 
  else if ( $("#element_16 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)'; }
  escribir ();
}); });


$(function() {  $("#element_17").change( function() {
  if ( $("#element_17 :selected").text()  == "Canelones (IFD Pando) - 7/9 10 horas" ) {
    dir = 'Instituto de Formación Docente de Pando, Transfiguración Iturria 1245 - departamento de Canelones';
    refe = 'Facundo Costa (ecosta@ceibal.edu.uy)'; } 
  else if ( $("#element_17 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)'; }
  escribir ();
}); });

$(function() {  $("#element_20").change( function() {
  if ( $("#element_20 :selected").text()  == "Maldonado (IFD Maldonado) - semana del 2/9 a definir" ) {
    dir = 'Instituto de Formación Docente de Maldonado, Rafael Perez del Puerto 651 - departamento de Maldonado';
    refe = 'Tatiana Gilles (tgilles@ceibal.edu.uy)'; } 
  else if ( $("#element_20 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)'; }
  escribir ();
}); });

$(function() {  $("#element_21").change( function() {
  if ( $("#element_21 :selected").text()  == "Maldonado (IFD Maldonado) - semana del 2/9 a definir" ) {
    dir = 'Instituto de Formación Docente de Maldonado, Rafael Perez del Puerto 651 - departamento de Maldonado';
    refe = 'Tatiana Gilles (tgilles@ceibal.edu.uy)'; } 
  else if ( $("#element_21 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - departamento de Montevideo';
    refe = 'Emilia Casaravilla (ecasaravilla@ceibal.edu.uy)'; }
  escribir ();
}); });


});
  
