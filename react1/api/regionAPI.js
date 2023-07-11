import axios from "axios";
import config from '../config/config';
const getAll = async () => {
    try {
        const result = await axios.get(`${config.url}/regions`);
        return result.data;
    } catch (error) {
        return await error.message;
    }
}

const create = async (payload) => {
    try {
        const result = await axios.post(`${config.url}/regions`, payload);
        return result;
    } catch (error) {
        return await error.message;
    }
}

const edit = async (id, payload) => {
    try {
        const result = await axios.put(`${config.url}/regions/${id}`, payload);
        return result;
    } catch (error) {
        return await error.message;
    }
}

const destroy = async (id) => {
    try {
        const result = await axios.delete(`${config.url}/regions/${id}`);
        return result;
    } catch (error) {
        return await error.message;
    }
}

export default {getAll, create, edit, destroy}