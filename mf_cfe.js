$(document).ready(function(){

let dir = "", refe = ""; $('#li_22').hide(); 

function escribir () {
if (dir != "") {
  $(".anaPelea2").html('<p style="font-size:14px"><strong>Información de la sede:</strong></p>');
  $(".anaPelea2").html( $(".anaPelea2").html() +  '<p style="font-size:14px">- Dirección: ' + dir + '</p>');
  $(".anaPelea2").html( $(".anaPelea2").html() +  '<p style="font-size:14px">- Si tienes alguna duda, puedes contactarte con ' + refe + '</p>');
  $('#li_22').show();  } else { $('#li_22').hide();  }
}

function reiniciar () {
  $("#element_10").val(0); $("#element_11").val(0); $("#element_13").val(0); $("#element_16").val(0);
  $("#element_17").val(0); $("#element_20").val(0); $("#element_21").val(0);
}

$('.anaPelea').on('propertychange input', function (e) {

dir = "", refe = "";

switch($(".anaPelea :selected").text()) {
  case "Artigas":
    dir = 'IFD de Artigas, Gral. Fructuoso Rivera y Juan Antonio Lavalleja - Artigas';
    refe = 'Silvana Salvador (<a href="ssalvador@ceibal.edu.uy">ssalvador@ceibal.edu.uy</a>)';
    break;
  case "Salto":
    dir = 'cuando la sede sea confirmada, te notificaremos vía email';
    refe = 'Diego Texeira (<a href="dtexeira@ceibal.edu.uy">dtexeira@ceibal.edu.uy</a>)';
    break;
  case "Paysandú":
    dir = 'Instituto de Formación Docente “Ercilia Guidali de Pisano”, Florida 1181 - Paysandú';
    refe = 'Romina Etchepare (<a href="roetchepare@ceibal.edu.uy">roetchepare@ceibal.edu.uy</a>)';
    break;
  case "Colonia":
    dir = 'CERP del Suroeste, Domingo Maddalena 160 Colonia del Sacramento - Colonia';
    refe = 'Francisco Risso (<a href="frisso@ceibal.edu.uy">frisso@ceibal.edu.uy</a>)';
    break;
  case "Florida":
    dir = 'cuando la sede sea confirmada, te notificaremos vía email';
    refe = 'Cristofer Cabrera (<a href="crcabrera@ceibal.edu.uy">crcabrera@ceibal.edu.uy</a>)';
    break;
  case "Montevideo":
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)';
    break;
  case "Maldonado":
    dir = 'cuando la sede sea confirmada, te notificaremos vía email';
    refe = 'Tatiana Gilles (<a href="tgilles@ceibal.edu.uy">tgilles@ceibal.edu.uy</a>)';
    break;
  case "Tacuarembó":
    dir = 'Instituto de Formación Docente, Agraciada 892 - Rivera';
    refe = 'Bruno Oliva Gonzalez (<a href="broliva@ceibal.edu.uy">broliva@ceibal.edu.uy</a>)';
    break;
  case "Rivera":
    dir = 'Instituto de Formación Docente, Agraciada 892 - Rivera';
    refe = 'Bruno Oliva Gonzalez (<a href="broliva@ceibal.edu.uy">broliva@ceibal.edu.uy</a>)';
    break;
  case "Cerro Largo":
    dir = 'Instituto de Formación Docente, Manuel Lavalleja 1191 - Treinta y Tres';
    refe = 'Carolina Romero (<a href="cromero@ceibal.edu.uy">cromero@ceibal.edu.uy</a>)';
    break;
  case "Treinta y Tres":
    dir = 'Instituto de Formación Docente, Manuel Lavalleja 1191 - Treinta y Tres';
    refe = 'Carolina Romero (<a href="cromero@ceibal.edu.uy">cromero@ceibal.edu.uy</a>)';
    break;
} reiniciar (); escribir (); });

$(function() {  $("#element_10").change( function() {
  if ( $("#element_10 :selected").text()  == "Colonia (CERP Suroeste) - 7/9 10 horas" ) {
    dir = 'CERP del Suroeste, Domingo Maddalena 160 Colonia del Sacramento - Colonia';
    refe = 'Francisco Risso (<a href="frisso@ceibal.edu.uy">frisso@ceibal.edu.uy</a>)'; } 
  else if ( $("#element_10 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)'; }
  escribir ();
}); });

$(function() {  $("#element_11").change( function() {
  if ( $("#element_11 :selected").text()  == "Colonia (CERP Suroeste) - 7/9 10 horas" ) {
    dir = 'CERP del Suroeste, Domingo Maddalena 160 Colonia del Sacramento - Colonia';
    refe = 'Francisco Risso (<a href="frisso@ceibal.edu.uy">frisso@ceibal.edu.uy</a>)'; } 
  else if ( $("#element_11 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)'; }
  escribir ();
}); });

$(function() {  $("#element_13").change( function() {
  if ( $("#element_13 :selected").text()  == "Florida (IFD Florida) - semana del 2/9 a definir" ) {
    dir = 'cuando la sede sea confirmada, te notificaremos vía email';
    refe = 'Cristofer Cabrera (<a href="crcabrera@ceibal.edu.uy">crcabrera@ceibal.edu.uy</a>)'; } 
  else if ( $("#element_13 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)'; }
  escribir ();
}); });

$(function() {  $("#element_16").change( function() {
  if ( $("#element_16 :selected").text()  == "Florida (IFD Florida) - semana del 2/9 a definir" ) {
    dir = 'cuando la sede sea confirmada, te notificaremos vía email';
    refe = 'Cristofer Cabrera (<a href="crcabrera@ceibal.edu.uy">crcabrera@ceibal.edu.uy</a>)'; } 
  else if ( $("#element_16 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)'; }
  escribir ();
}); });


$(function() {  $("#element_17").change( function() {
  if ( $("#element_17 :selected").text()  == "Canelones (IFD Pando) - 7/9 10 horas" ) {
    dir = 'Instituto de Formación Docente de Pando, Transfiguración Iturria 1245 - Canelones';
    refe = 'Facundo Costa (<a href="ecosta@ceibal.edu.uy">ecosta@ceibal.edu.uy</a>)'; } 
  else if ( $("#element_17 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)'; }
  escribir ();
}); });

$(function() {  $("#element_20").change( function() {
  if ( $("#element_20 :selected").text()  == "Maldonado (IFD Maldonado) - semana del 2/9 a definir" ) {
    dir = 'cuando la sede sea confirmada, te notificaremos vía email';
    refe = 'Tatiana Gilles (<a href="tgilles@ceibal.edu.uy">tgilles@ceibal.edu.uy</a>)'; } 
  else if ( $("#element_20 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)'; }
  escribir ();
}); });

$(function() {  $("#element_21").change( function() {
  if ( $("#element_21 :selected").text()  == "Maldonado (IFD Maldonado) - semana del 2/9 a definir" ) {
    dir = 'cuando la sede sea confirmada, te notificaremos vía email';
    refe = 'Tatiana Gilles (<a href="tgilles@ceibal.edu.uy">tgilles@ceibal.edu.uy</a>)'; } 
  else if ( $("#element_21 :selected").text()  == "Montevideo (IINN) - 7/9 10 horas" ) {
    dir = 'Institutos Normales de Montevideo, Soriano 1658 - Montevideo';
    refe = 'Emilia Casaravilla (<a href="ecasaravilla@ceibal.edu.uy">ecasaravilla@ceibal.edu.uy</a>)'; }
  escribir ();
}); });


});
  