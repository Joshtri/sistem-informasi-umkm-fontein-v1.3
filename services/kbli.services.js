import * as kbliRepository from '../repositories/kbli.repository.js';


export const getKbliPage = async (offset, limit) => {
    try {
        const kbliData = await kbliRepository.getAllPage(offset, limit);
        return kbliData;
    } catch (error) {
        throw new Error(`Service error: ${error.message}`);
    }
};


export const createKbli = async (kbliData) => {
    try {
        const createdKbli = await kbliRepository.createKbli(kbliData);
        return createdKbli;
    } catch (error) {
        throw new Error(`Service error: ${error.message}`);
    }
};