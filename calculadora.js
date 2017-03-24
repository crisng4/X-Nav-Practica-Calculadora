    jQuery(document).ready(function(){
        var panel = $('#micalctxtResultado');
        var finished = false; 
        panel.val('');
     
        var reset = function () {
            finished = false;
            panel.val('');
        }
     
        $('.btn-primary,.btn-success').click(function(){
            var value = !finished ? panel.val() : ''; // Comprobamos si la operación ha terminado, de ser así se resetea
							// la pantalla de la calculadora al pulsar el siguiente botón.
            finished= false;
            panel.val(value + $(this).val());
        });
     
        $('.btn-warning').click(function () {
            finished = true;
            var value = panel.val();
     
            try {
                var eq = eval(value);
            } catch (e) {
                reset();
                alert('Error');
            } 
                panel.val(eq);
        });
     
        $('#eraser').click(function () {
            panel.val('');
        });
     
        $('#delete').click(function () {
            panel.val(panel.val().slice(0,-1));
        });
     
        $(window).keyup(function(e) {
            console.log(e.which, '!!!!');
            e.preventDefault();
     
            var input = '',
                value = !finished ? panel.val() : '';
                key = e.which;
     
            if (key === 8) { 
                panel.val(value.slice(0, -1));
            } else if (key === 13) { 
                finished = true;
                try {
                    panel.val(eval(panel.val()));
                } catch (e) {
                    reset();
                    alert('Error!');
                }
            } else {
                switch (key) {
                    case 48:
                        input = 0;
                        break;
                    case 49:
                        input = 1;
                        break;
                    case 50:
                        input = 2;
                        break;
                    case 51:
                        input = 3;
                        break;
                    case 52:
                        input = 4;
                        break;
                    case 53:
                        input = 5;
                        break;
                    case 54:
                        input = 6;
                        break;
                    case 55:
                        input = 7;
                        break;
                    case 56:
                        input = 8;
                        break;
                    case 57:
                        input = 9;
                        break;
                    case 40:
                        input = '(';
                        break;
                    case 41:
                        input = ')';
                        break;
                    case 42:
                        input = '*';
                        break;
                    case 43:
                        input = '+';
                        break;
                    case 44: 
                        input = '.';
                        break;
                    case 45:
                        input = '-';
                        break;
                    case 46:
                        input = '.';
                        break;
                    case 47:
                        input = '/';
                        break;
                    default:
			input = '';
                    	break;
                }
                finished = false; 
                panel.val(value + input);
            }
        });
    });
