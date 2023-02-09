const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_KEY,
	api_secret: process.env.CLOUD_SECRET,
});

// Upload
async function sendImageToCloud(imagePath: string) {
	const options = {
		use_filename: true,
		unique_filename: false,
		overwrite: true,
	};
	try {
		const res = await cloudinary.uploader.upload(imagePath, options);
		return res.url;
	} catch (err) {
		console.log(err);
	}
}

// The output url
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
export { sendImageToCloud };
