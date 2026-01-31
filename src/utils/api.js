import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

class API {
	#client;

	constructor(baseURL) {
		this.#client = axios.create({
			baseURL,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	async getAllCampers(params) {
		return await this.#client.get(`/campers`, { params });
	}

	async getCamperById(id) {
		return await this.#client.get(`/campers/${id}`);
	}
}

export const api = new API(BASE_URL);
