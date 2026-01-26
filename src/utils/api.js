import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

class API {
  #client;

  constructor(baseURL){
    this.#client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getAllContacts(){
    return await this.#client.get(`/contacts`);
  }

  async addContact(payload){
    return await this.#client.post('/contacts', payload);
  }

  async deleteContact(id){
    return await this.#client.delete(`/contacts/${id}`);
  }
}

export const api = new API(BASE_URL);