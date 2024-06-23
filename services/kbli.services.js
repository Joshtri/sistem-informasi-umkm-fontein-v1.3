import * as kbliRepository from '../repositories/kbli.repository.js';


export const getKbliPage = async (page = 1, limit = 10) => {
    try {
        const offset = (page - 1) * limit;
        const kbliData = await kbliRepository.getAllPage(offset, limit);

        const totalDocuments = await kbliRepository.getTotalKbli();
        // return kbliData
        
        if(kbliData.length === 0) console.log('data is empty');
        
        return{
            data: kbliData,
            page,
            total: totalDocuments,
            pages: Math.ceil(totalDocuments / limit)

        }
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


export const getAll = async()=>{
    try {
        const getAllKbli = await kbliRepository.getAll();
        return getAllKbli;
    } catch (error) {
        console.log(error);
    }

};