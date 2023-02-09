import { Profile } from "../models";

class UserProfile {
	full_name: string;
	biography: string;
	picture_url: string;
}

async function createProfile(profileData: UserProfile) {
	if (!profileData) {
		throw "Error: Datos insuficientes para crear el perfil.";
	} else if (profileData) {
		const user = await Profile.create({
			...profileData,
		});
		return user;
	} else {
		throw "Error: Falló la creación del perfil.";
	}
}

async function deleteProfile(id: string) {
	if (!id) {
		throw "Error: Datos insuficientes. Se necesita un ID de usuario.";
	} else if (id) {
		await Profile.destroy({
			where: { id },
		});
	} else {
		throw "Error: Falló la eliminación del perfil.";
	}
}

export { createProfile, deleteProfile };
