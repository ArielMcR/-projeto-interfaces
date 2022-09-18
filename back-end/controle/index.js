function init(req, res) {
	res.status(200).send({
		message: 'Hello word!',
	});
}

function test(req, res) {
	res.status(200).send({
		message: '!testando o servidor node',
	});
}

module.exports = { init, test };
