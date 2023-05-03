$('#element_2').change(function(){ 

if ($('#element_2').val().length < 2 || $('#element_2').val().substr(0,2) != "rt"  ) { $('#element_2').val(""); }

});
