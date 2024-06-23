import * as pendudukRepository from '../repositories/penduduk.repository.js';


export const createPenduduk = async(pendudukData)=>{
    try {
        const createdPenduduk = await pendudukRepository.createPenduduk(pendudukData);

        return createdPenduduk;
    } catch (error) {
        console.log(error);
    }
}

export const getPendudukPage = async(page = 1, limit = 10)=>{
    try {
        const offset = (page - 1) * limit;
        const pendudukData = await pendudukRepository.getAllPage(offset, limit);

        const totalDocuments = await pendudukRepository.getTotalPenduduk();
        // return keluargaData
        
        if(pendudukData.length === 0) console.log('data is empty');

        return{
            data: pendudukData,
            page,
            total: totalDocuments,
            pages: Math.ceil(totalDocuments / limit)
        }
    } catch (error) {
        console.log(error);
    }
}

export const getTotalPenduduk = async()=>{
    try {
        const totalPenduduk = await pendudukRepository.getTotalPenduduk();
        return totalPenduduk;
    } catch (error) {
        console.log(error);
    }
};


export const getAll = async()=>{
    try {
        const pendudukData = await pendudukRepository.getAll();
        return pendudukData;
    } catch (error) {
        console.log(error);
    }
};
