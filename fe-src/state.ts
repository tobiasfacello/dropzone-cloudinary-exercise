const API_BASE_URL = "http://localhost:3000";

type ProfileData = {
	full_name: string;
	biography: string;
	picture_url: string;
};

const state = {
	data: {
		imageDataURL: [],
	},
	listeners: [],

	getState() {
		return this.data;
	},

	setState(newState: any) {
		this.data = newState; //? Sobreescribe la data.
		for (const callback of this.listeners) {
			callback(); //? Ejecuta los listeners suscritos a los cambios en el state.
		}
		//? Almacena en localStorage una copia de los datos actualizados.
		localStorage.setItem("state-cache", JSON.stringify(newState));
	},

	//? Recibe la función callback que luego va a ser ejecutada cuando el state sea actualizado.
	subscribe(callback: (any) => any) {
		this.listeners.push(callback);
	},

	cleanDataURL() {
		const currentState = this.getState();
		currentState.imageDataURL = [];
		this.setState(currentState);
	},

	getDataURL() {
		const currentState = this.getState();
		const imagesURLArray = currentState.imageDataURL;
		return imagesURLArray[0];
	},

	async saveDataURL(dataURL: string) {
		const currentState = this.getState();
		const imagesURLArray = currentState.imageDataURL;
		imagesURLArray.push(dataURL);
		this.setState(currentState);
	},

	async postProfileData(data: ProfileData) {
		const res = await fetch(`${API_BASE_URL}/profile`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		});
		return { response: res.json(), status: res.status };
	},
};

export { state };
