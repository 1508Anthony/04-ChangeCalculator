$(function() {
	$("button").click(function() {
		// get the values input by the users
		var cost = $("#cost").val();
		var payment = $("#payment").val();

		// get the difference - in cents
		// this is the change to be returned
		// -- using Math.abs in case we get negative values or bad input
		var diff = 100 * Math.abs(payment - cost);

		// calculate the number of dollars and the change leftover
		var dollars = Math.floor(diff / 100);
		var change = diff % 100; // use modulo to get the change

		// do the same for quarters
		var quarters = Math.floor(change / 25);
		change = change % 25;

		// and for dimes
		var dimes = Math.floor(change / 10);
		change = change % 10;

		// and for nickels
		var nickels = Math.floor(change / 5);
		change = change % 5;

		// and for pennies - it is whatever is left over
		var pennies = Math.round(change); // round for floating point inaccuracy

		// now set all the outputs
		$("#dollars").text(dollars);
		$("#quarters").text(quarters);
		$("#dimes").text(dimes);
		$("#nickels").text(nickels);
		$("#pennies").text(pennies);
	});
});