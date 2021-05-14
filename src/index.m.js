(function () {

	var submit = document.querySelector('[type="submit"]');
	var form = document.querySelector('form');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		submit.value = 'Please Wait...';

		var data = {};
		var elements = [];

		elements.push.apply(elements, form.querySelectorAll('input'));
		elements.push.apply(elements, form.querySelectorAll('textarea'));

		for (var i = 0; i < elements.length; i++) {
			var input = elements[ i ];
			var name = input.name;
			var value = input.value;
			if (name) data[ name ] = value;
		}

		data[ '$to' ] = 'jonburns10@gmail.com,alex.steven.elias@gmail.com';

		fetch('/email', {
			method: 'POST',
			body: JSON.stringify(data)
		}).then(function (result) {
			if (result.status !== 200) throw new Error(result.statusText);
		}).then(function (data) {
			form.reset();
			submit.classList.add('success');
			submit.classList.remove('error');
			submit.value = 'Success: Message Sent';
		}).catch(function (error) {
			console.log(error);
			submit.classList.add('error');
			submit.classList.remove('success');
			submit.value = 'Error: Try Again';
		});

	});

}());