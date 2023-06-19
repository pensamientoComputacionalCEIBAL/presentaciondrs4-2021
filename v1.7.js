console.log("Script funcionando correctamente :)");

$(document).ready(function(){

$('#element_2').change(function(){ 
  switch($("#element_2 :selected").text()) {
    case "Fernando Sabaño": $("#element_3").val('saba.fernando.daniel@gmail.com'); break;
    case "Agustin Romano": $("#element_3").val('aromano@ceibal.edu.uy'); break;  
    case "Bruno Oliva": $("#element_3").val('broliva@ceibal.edu.uy'); break;  
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
    case "Luciana Prudente": $("#element_3").val('lprudente@ceibal.edu.uy'); break;  
    case "Lourdes Vidal": $("#element_3").val('lvidal@ceibal.edu.uy'); break;
    case "Magela Araujo": $("#element_3").val('magaraujo@ceibal.edu.uy'); break;
    case "Mónica González": $("#element_3").val('mogonzalez@ceibal.edu.uy'); break;
    case "Noelia De Cuadro Pereira": $("#element_3").val('ndecuadro@ceibal.edu.uy'); break;  
    case "Romina Etchepare": $("#element_3").val('roetchepare@ceibal.edu.uy'); break;
    case "Santiago Olivera": $("#element_3").val('solivera@ceibal.edu.uy'); break;
    case "Silvana Salvador": $("#element_3").val('ssalvador@ceibal.edu.uy'); break;
    case "Tatiana Gilles": $("#element_3").val('tgilles@ceibal.edu.uy'); break;
    case "Veda Contreras": $("#element_3").val('vcontreras@ceibal.edu.uy'); break;
    case "Yenniffer de los Santos": $("#element_3").val('ydelossantos@ceibal.edu.uy'); break; }
});

$("#submit_secondary" ).click(function() {
  $('input[type="text"]').val('');
  $('textarea').val('');
});

$('.anaPelea').on('propertychange input', function (e) {


if ($("#element_8_3").val() != '' && $("#element_8_2").val() != '' && $("#element_8_1").val() != '' && $("#element_7_1").val() != '' && $("#element_7_2").val() != '' && $("#element_9_3").val() != '' && $("#element_9_2").val() != '' && $("#element_9_1").val() != '' && $("#element_10_1").val() != '' && $("#element_10_2").val() != '') {

fecha_partidaTexto = $("#element_8_3").val() + "-" + $("#element_8_2").val() + "-" + $("#element_8_1").val() + " " + $("#element_7_1").val() + ":" + $("#element_7_2").val() + ":00 GMT-0300";

fecha_llegadaTexto = $("#element_9_3").val() + "-" + $("#element_9_2").val() + "-" + $("#element_9_1").val() + " " + $("#element_10_1").val() + ":" + $("#element_10_2").val() + ":00 GMT-0300";

ms = Date.parse(fecha_partidaTexto);
ms2 = Date.parse(fecha_llegadaTexto);
fechaPartida = new Date(ms);
fechaLlegada = new Date(ms2);
dif_Minutos = (fechaLlegada.getTime() - fechaPartida.getTime() ) /  1000 / 60;
if (dif_Minutos > 0) {
cantidadDias = Math.trunc(dif_Minutos  / 1440);
mensaje = "";
if (cantidadDias == 0) { 
  cantidadMinutosSinHorasTrabajadas = dif_Minutos - 480;
  cantidadDeCiclos24 = 0;
  mensaje = "NO corresponde ciclo de 24 horas\n";
 }
else {
  cantidadMinutosSinHorasTrabajadas = dif_Minutos - (480 * cantidadDias);
  cantidadDeCiclos24 =  Math.trunc( cantidadMinutosSinHorasTrabajadas / 1440);
  if (cantidadDeCiclos24 == 0) { mensaje = "No corresponde ciclo de 24 horas\n"; }
  else { mensaje = "Corresponde " + cantidadDeCiclos24 + " ciclo/s de 24 horas.\n"; }
}
cantidadDeHorasSinCiclo24 =Math.trunc( (cantidadMinutosSinHorasTrabajadas - (cantidadDeCiclos24 * 1440) ) / 60 );
if (cantidadDeHorasSinCiclo24 > 6) { mensaje += "Corresponde también: 'Viaje: +6 hs'"; }
else if (cantidadDeHorasSinCiclo24 > 2 && cantidadDeHorasSinCiclo24 <= 6 ) { mensaje += "Corresponde también: 'Viaje: 2-6 hs'"; }
else if (cantidadDeHorasSinCiclo24 > 1 && cantidadDeHorasSinCiclo24 <= 2 ) { mensaje += "Corresponde también: 'Viaje: 1-2 hs'"; }
else if (cantidadDeHorasSinCiclo24 > 0 ) { mensaje += "Corresponde también: 'Viaje: 1 h'"; }
}

else { mensaje = "Error de ingreso, no corresponde el cálculo."; }

$("#element_34").val(mensaje);

}

});
   
  
});
