$(document).ready(function(data){

    var msg = [];
    msg[0] = "Oi";
    msg[1] = "Eu preciso de uma tela parecida com os commits do git";
    msg[2] = "Para cada vídeo meu no Youtube quero que mostre naqueles 'azulejinhos'";
    msg[3] = "Tá bom, vou mandar um print da minha ideia";
    msg[4] = "Obrigada :)";

	function addZero(i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
	}

	var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var time = h+':'+m

	var divmsg = '<div class="message">';
	var avatar1 = '<div class="avatar"><img src="images/james.jpg"></div>';
	var avatar2 = '<div class="avatar"><img src="images/usuario.png"></div>';
	var text1 = '<div class="text text1"><span class="name">James</span><span class="date"> // '+time+'</span><p>';
	var text2 = '<div class="text text2"><span class="name">Vanessa</span><span class="date"> // '+time+'</span><p>';
	var textend = '</p></div>';
	var divmsgend = '</div>';

	var n = 0

	$('body').on('click','button', function(event){

		var inputarea = $('input[type="text"]').val();
		event.preventDefault();
		$('.chat-container').prepend(divmsg+avatar1+text1+inputarea+textend+divmsgend);
		n++;
		$('input[type="text"]').val('');
		switch(n) {
	    case 1:
	        setTimeout(function(){$('.chat-container').prepend(divmsg+text2+msg[1]+textend+avatar2+divmsgend)},3000);
	        break;
	    case 2:
	        setTimeout(function(){$('.chat-container').prepend(divmsg+text2+msg[2]+textend+avatar2+divmsgend)},3000);
	        break;
	    case 3:
	        setTimeout(function(){$('.chat-container').prepend(divmsg+text2+msg[3]+textend+avatar2+divmsgend)},3000);
	        break;
	    case 4:
	        setTimeout(function(){$('.chat-container').prepend(divmsg+text2+msg[4]+textend+avatar2+divmsgend)},3000);
	        break;
		}
	});

	$("body").on("click", ".entra-animacao", function() {
		$(".wrapper").addClass("right");
		$(".case").addClass("animated");
	});

});