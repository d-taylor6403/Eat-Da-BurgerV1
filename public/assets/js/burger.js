//Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$('.burger-form').on('submit', function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $('newBurger').val().trim(),
			devoured: 0
		};

		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(function() {
			console.log('Added New Burger');
			location.reload();
		});
	});

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

	$('.trashburger').on('click', function(event) {
		event.preventDefault();

		var id = $(this).data('id');

		$.ajax({
			type: 'DELETE',
			url: '/api/burgers/' + id
		}).then(location.reload());
	});
});
