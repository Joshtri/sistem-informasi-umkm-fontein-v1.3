import * as keluargaRepository from '../repositories/keluarga.repository.js';






export const createKeluarga = async(keluargaData)=>{
    try {
        const createKeluarga = await keluargaRepository.createKeluarga(keluargaData);
        return createKeluarga;
    } catch (error) {
        console.log(error);        
    }
};