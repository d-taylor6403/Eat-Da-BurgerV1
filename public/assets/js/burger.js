//Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$('.burger-form').on('submit', function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $('#newBurger').val().trim(),
			devoured: 0
		};

		//Sending the POST request to add a new burger
		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(function() {
			console.log('Added New Burger');
			location.reload(); //reload the page to get the updated list
		});
	});

	//Sending the PUT request to update a burger from active to devoured
	$('.eatburger').on('click', function(event) {
		event.preventDefault();

		var id = $(this).data('id');
		var devouredState = {
			devoured: 1
		};

		$.ajax('api/burgers/' + id, {
			type: 'PUT',
			data: devouredState
		}).then(function() {
			console.log('Burger Devoured');
			location.reload();
		});
	});

	//Sending the DELETE request to trash a burger and
	$('.trashburger').on('click', function(event) {
		event.preventDefault();

		var id = $(this).data('id');

		$.ajax({
			type: 'DELETE',
			url: '/api/burgers/' + id
		}).then(location.reload());
	});
});
