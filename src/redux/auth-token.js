import { customAxios } from "./axios";

export const token = {
    set(token) {
        customAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        customAxios.defaults.headers.common.Authorization = '';
    },
};