$(function() {
	$.getJSON('scripts/names.json', function(data) {
		console.log('success');
		$.each(data.employees, function(i, emp) {
			$('ul').append('<li>' + emp.firstName + ' ' + emp.lastName + '</li>');
		});
	}).error(function() {
		console.log('error');
	});
});