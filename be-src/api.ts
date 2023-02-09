import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as cors from "cors";

const app = express();

//? Settings
const port = process.env.PORT || 3000;

//? Middlewares
app.use(bodyParser.json());
app.use(cors());

//? Controllers
import { createProfile, deleteProfile } from "./controllers/profileController";
import { Profile } from "./models";

//? Utils
import { sendImageToCloud } from "./cloudinary";

//* CRUD

app.get("/test", async (req, res) => {
	res.send("Test passed.");
});

app.get("/profile", async (req, res) => {
	const profilesList = await Profile.findAll();
	res.send(profilesList);
});

app.post("/profile", async (req, res) => {
	if (!req.body) {
		res.status(400).send();
	} else if (req.body) {
		const { full_name, biography, picture_url } = req.body;
		const picture_public_url = await sendImageToCloud(picture_url);

		try {
			const newProfile = await createProfile({
				full_name,
				biography,
				picture_url: picture_public_url,
			});

			res.status(201).send({
				profile: newProfile,
			});
		} catch (err) {
			res.status(401).send(err);
		}
	}
});

app.delete("/profile/:id", async (req, res) => {
	if (!req.params) {
		res.status(400).send();
	} else {
		try {
			const id = req.params.id;
			await deleteProfile(id);
			res.status(200).send({
				message: `User profile with id ${id} deleted successfully.`,
			});
		} catch (err) {
			res.status(401).send(err);
		}
	}
});

app.use(express.static("dist"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
