function init(req, res) {
	res.status(200).send({
		message: 'Hello word!',
	});
}

function test(req, res) {
	res.status(200).send({
		message: 'Testing node server! a',
	});
}

module.exports = { init, test };
