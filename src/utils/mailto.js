const nodeMailer = require('nodemailer');

async function sendEmail(recipient, subject, text, files) {
	const { SMTP_HOST, SMTP_PORT, SMTP_AUTH_USER, SMTP_AUTH_PASSWORD } =
		process.env;

	try {
		const transporter = nodeMailer.createTransport({
			host: SMTP_HOST,
			port: SMTP_PORT,
			secure: true,
			auth: {
				user: SMTP_AUTH_USER,
				pass: SMTP_AUTH_PASSWORD,
			},
		});

		const info = await transporter.sendMail({
			from: 'WORDPRESSBADASS patrick@wordpressbadass.com',
			to: recipient,
			subject,
			text,
			attachments: [files],
		});

		console.log('Message sent: ', info.messageId);
	} catch (error) {
		console.log(error);
	}
}

module.exports = sendEmail;
