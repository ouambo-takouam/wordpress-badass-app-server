const Elementor = require('./elementor.mongo');

async function addElementorEmail(data) {
	return await Elementor.create(data);
}

module.exports = { addElementorEmail };
