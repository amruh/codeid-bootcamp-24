import axios from "axios";

const getAll = async () => {
    try {
        const result = await axios.get(`http://localhost:3001/regions`)
        return result.data
    } catch (error) {
        return error
    }
}

const getById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3001/regions/${id}`);
        return result.data
    } catch (error) {
        return error
    }
}

const create = async (payload) => {
    try {
        const result = await axios.post('http://localhost:3001/regions', payload);
        return result;
    } catch (error) {
        return await error.message;
    }
}

const edit = async (payload) => {
    try {
        const result = await axios.put(`http://localhost:3001/regions/${payload.id}`, payload.data);
        return result;
    } catch (error) {
        return await error.message;
    }
}

const destroy = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:3001/regions/${id}`);
        return result;
    } catch (error) {
        return await error.message;
    }
}

export default { getAll, create, edit, destroy, getById };