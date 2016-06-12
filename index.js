$(function() {
	console.log("START");

	$("button").click(function() {
		// TODO
		// get the values input by the users
		var cost = $("#cost").val();
		var payment = $("#payment").val();

		// get the difference - in cents
		var diff = 100 * (payment - cost);
		console.log("diff: "+diff);

		// calculate the number of dollars and the change leftover
		var dollars = Math.floor(diff / 100);
		var change = diff % 100;
		console.log("change: "+change);

		// do the same for quarters
		var quarters = Math.floor(change / 25);
		change = change % 25;
		console.log("change: "+change);

		// and for dimes
		var dimes = Math.floor(change / 10);
		change = change % 10;
		console.log("change: "+change);

		// and for nickels
		var nickels = Math.floor(change / 5);
		change = change % 5;
		console.log("change: "+change);

		// and for pennies - it is whatever is left over
		var pennies = change;

		// now set all the outputs
		$("#dollars").text(dollars);
		$("#quarters").text(quarters);
		$("#dimes").text(dimes);
		$("#nickels").text(nickels);
		$("#pennies").text(pennies);
	});
});