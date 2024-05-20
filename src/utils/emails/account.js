const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();


let config = {
	service: "gmail", // your email domain
	auth: {
		user: process.env.SMTP_USERNAME, // your email address
		pass: process.env.SMTP_PASSWORD, // your password
	},
};

let transporter = nodemailer.createTransport(config);

const sendWelcomeEmailMessage = async (email, name) => {
	try {
		const info = await transporter.sendMail({
			to: email,
			from: "zakariyyarajigmail.com",
			subject: "Thank you for NiyoTasks!",
			text: `Welcome ${name}. Let me know how you get along with the App.`,
		});
		console.log("Message sent: %s", info.messageId);
	} catch (error) {
		console.error(error);
	}
};

const sendCancelationEmailMessage = async (email, name) => {
	try {
		const info = await transporter.sendMail({
			to: email,
			from: "zakariyyarajigmail.com",
			subject: `Sorry to see you go!`,
			text: `Goodbye, ${name}. I'd hope to see you back soon.`,
		});
		console.log("Message sent: %s", info.messageId);
	} catch (error) {
		console.error(error);
	}
};

module.exports = { sendWelcomeEmailMessage, sendCancelationEmailMessage };
