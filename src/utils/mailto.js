const nodeMailer = require('nodemailer');

async function sendEmail(recipient, subject, text, files) {
	try {
		const transporter = nodeMailer.createTransport({
			host: 'smtp.hostinger.com',
			port: 465,
			secure: true,
			auth: {
				user: 'patrick@wordpressbadass.com',
				pass: 'Secret90,;:!',
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
