import axios from "axios";

import { BASE_URL } from "constants/constants";

axios.defaults.baseURL = BASE_URL;

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const fetchAllContacts = async () => {
    return await axios.get('/contacts').then(response => response.data);
};

export const fetchAddContact = async (contact) => {
    return await axios.post('/contacts', contact).then(response => response.data);
};