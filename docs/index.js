
Astatine.setup.spinner.colorTop = '#fff';
Astatine.setup.spinner.colorBottom = '#333';

Astatine.submit({
	query: 'form',
	method: 'post',
	responseType: 'json',
	action: 'https://www.enformed.io/zpn17s0',
	prepare: function prepare(data, resolve) {
		data['*formname'] = 'arcdev.io';
		data['*cc'] = 'jonburns10@gmail.com, alex.steven.elias@gmail.com';
		return resolve(data);
	},
	complete: function complete(error, success) {
		var submit = document.querySelector('[type="submit"]');

		submit.disabled = true;

		if (error) {
			console.error(error);
			submit.value = 'Error: Please Try Again';
		} else {
			submit.value = 'Success: Message Sent';
		}
	}
});