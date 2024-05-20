const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { options } = require("../../api/routes/user");

dotenv.config();

(async () => {
	try {
		console.log(process.env.DB_URL);
		await mongoose.connect(process.env.DB_URL, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		console.error("Error", error);
	}
})();
