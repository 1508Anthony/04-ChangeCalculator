$(function() {
	$("button").click(function(){
		var cost = $('#cost').val();
		var moneyGiven =  $('#payment').val();


		cost = cost*100;
		moneyGiven = moneyGiven*100; //now all is in cents

		var change = moneyGiven-cost;
		var dollars = Math.floor(change/100);


		change = change%100;
		// change = change - 100 * dollars;

		var quarters = Math.floor(change/25);
		change = change%25;

		var dimes = Math.floor(change/10);
		change = change%10;

		var nickels = Math.floor(change/5);
		change = change%5;

		var pennies = change;

		
		$('#dollars').text(dollars);

		$('#quarters').text(quarters);

		$('#dimes').text(dimes);

		$('#nickels').text(nickels);

		$('#pennies').text(pennies);




	})
});

// var myFunction = function() {

// };

// $(myFunction())

// var myClickFunction = function() {

// };

// ...
//     $("button").click(myClickFunction());
//     $("#fortytwo").click(myClickFunction());