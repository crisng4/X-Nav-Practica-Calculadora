jQuery(document).ready(function(){
	var panel = $("#micalctxtResultado");
	panel.html("");
	panel.val("");


		$(".btn-primary,.btn-success").click(function(){
			var value = panel.val();
	    panel.val(value + $(this).val());
		});

	  $(".btn-warning").click(function(){
	    var value = panel.val();
	    var eq = eval(value);
	    panel.val(eq);
	  });

		$("#eraser").click(function(){
			panel.val("");
		});

		$("#delete").click(function(){
			var value = panel.val().slice(0,-1);;
			panel.val(value);
		});

	$(window).keypress(function(e) {
		var key = "";
		var value = panel.val();
		if (e.which == 8){
		value = panel.val().slice(0,-1);
		panel.val(value);
		}else if (e.which == 13){
			var eq = eval(value);
			panel.val(eq);
		}else{
			if (e.which == 48 ){
				key = 0;
			}else if(e.which == 49){
				key = 1;
			}else if(e.which == 50){
				key = 2;
			}else if(e.which == 51){
				key = 3;
			}else if(e.which == 52){
				key = 4;
			}else if(e.which == 53){
				key = 5;
			}else if(e.which == 54){
				key = 6;
			}else if(e.which == 55){
				key = 7;
			}else if(e.which == 56){
				key = 8;
			}else if(e.which == 57){
				key = 9;
			}else if(e.which == 43){
				key = '+';
			}else if(e.which == 45){
				key = '-';
			}else if(e.which == 42){
				key = '*';
			}else if(e.which == 47){
				key = '/';
			}else if(e.which == 46){
				key = '.';
			}else if(e.which == 40){
				key = '(';
			}else if(e.which == 41){
				key = ')';
			}
			panel.val(value + key);
		}
	});

});
