console.log("Script funcionando correctamente :)");

$(document).ready(function(){

// Al 'volver atrás', dejar vacíos los cuadros de textos.
$("#submit_secondary" ).click(function() {
  $('input[type="text"]').val('');
  $('textarea').val('');
} );



$('.anaPelea').on('propertychange input', function (e) {


if ($("#element_8_1").val() != '' && 
$("#element_8_2").val() != '' && 
$("#element_8_3").val() != '' &&
$("#element_7_1").val() != '' && 
$("#element_7_2").val() != '' &&
$("#element_9_1").val() != '' && 
$("#element_9_2").val() != '' && 
$("#element_9_3").val() != '' && 
$("#element_10_1").val() != '' &&
$("#element_10_2").val() != '') {

  let fecha_partidaTexto = $("#element_8_3").val() + "-" + 
  $("#element_8_2").val() + "-" + 
  $("#element_8_1").val() + " " + 
  $("#element_7_1").val() + ":" + 
  $("#element_7_2").val() + ":00 GMT-0300";

  let fecha_llegadaTexto = $("#element_9_3").val() + "-" + 
  $("#element_9_2").val() + "-" + 
  $("#element_9_1").val() + " " + 
  $("#element_10_1").val() + ":" + 
  $("#element_10_2").val() + ":00 GMT-0300";

  let ms = Date.parse(fecha_partidaTexto);
  let ms2 = Date.parse(fecha_llegadaTexto);
  let fechaPartida = new Date(ms);
  let fechaLlegada = new Date(ms2);
  let dif_Minutos = (fechaLlegada.getTime() - fechaPartida.getTime() ) /  1000 / 60;
  let mensaje = "";
  
  if (dif_Minutos > 0) {
  	
  	if ( $("#element_37_1").is(":checked") == false) { cantidadDeCiclos24 = 0; }
  	else { cantidadDeCiclos24 = 1; }
  
    cantidadDias = Math.trunc(dif_Minutos  / 1440);
    
    if (cantidadDias == 0) { cantidadMinutosSinHorasTrabajadas = dif_Minutos - 480; }
    else { cantidadMinutosSinHorasTrabajadas = dif_Minutos - (480 * cantidadDias); }

    let temp = Math.trunc( cantidadMinutosSinHorasTrabajadas / 1440);

    if (temp > 0) { cantidadDeCiclos24 = temp; }
  
    if (cantidadDeCiclos24 == 0) { mensaje = "No corresponde ciclo de 24 horas\n"; }
    else { mensaje = "Corresponde " + cantidadDeCiclos24 + " ciclo/s de 24 horas.\n"; }

    cantidadDeHorasSinCiclo24 = Math.trunc( (cantidadMinutosSinHorasTrabajadas - (cantidadDeCiclos24 * 1440) ) / 60 );
    if (cantidadDeHorasSinCiclo24 > 6) { mensaje += "Corresponde también: 'Viaje: +6 hs'"; }
    else if (cantidadDeHorasSinCiclo24 > 2 && cantidadDeHorasSinCiclo24 <= 6 ) { mensaje += "Corresponde también: 'Viaje: 2-6 hs'"; }
    else if (cantidadDeHorasSinCiclo24 > 1 && cantidadDeHorasSinCiclo24 <= 2 ) { mensaje += "Corresponde también: 'Viaje: 1-2 hs'"; }
    else if (cantidadDeHorasSinCiclo24 > 0 ) { mensaje += "Corresponde también: 'Viaje: 1 h'"; }
  } else { mensaje = "Error de ingreso, no corresponde el cálculo."; }

  $("#element_34").val(mensaje);

}

} );

} );