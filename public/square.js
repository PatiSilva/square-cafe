
drink_number = 0;
total_cost = 0;
$(document).ready(function(){

	$('form').on('change','select', function(){

		//alert("my my, how you've changed");
		menu = $('select').first().html();

		$('form').append('<select>' + 
			menu + '<select>');
		//	drink_number=find("select").length;
		drink_number +=1;
		$('dd#drinks').text(drink_number);
		total_cost = total_cost + Number($(this).find(':selected').attr('data-price'));
 		$('#cost').text("$"+(total_cost/100).toFixed(2);

	});

});

