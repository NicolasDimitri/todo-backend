const errorMiddleware = (err, req, res) => {
	console.log(err);
	if (err.code) {
		res.status(err.code).send(err.message);
	}
	res.status(500).json({ message: 'Something went wrong' });
};

module.exports = errorMiddleware;