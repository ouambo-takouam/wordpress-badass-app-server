const express = require('express');
var cors = require('cors');

const app = express();

const { addElementorEmail } = require('./models/elementor/elementor.models');
const sendEmail = require('./utils/mailto');

app.use(cors());
app.use(express.json());

app.post('/001-galerie-produits', async (req, res) => {
	try {
		const { recipient, subject, message } = req.body;

		await sendEmail(recipient, subject, message, {
			filename: '001-galerie-produits.json',
			path: './src/docs/001-galerie-produits.json',
		});

		await addElementorEmail({ email: recipient });

		return res.json({ message: 'ok' });
	} catch (error) {
		return res.json({ message: error });
	}
});

module.exports = app;
