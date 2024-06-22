import Keluarga from '../models/keluarga.model.js';

export const getAllKeluarga = async(offset,limit)=>{
    try {
        const getDataKeluarga = await Keluarga.find();

        return getDataKeluarga;
    } catch (error) {
       console.log(error) 
    }
}



export const createKeluarga = async(keluargaData)=>{
    try {
        const createDataKeluarga = await Keluarga.create(keluargaData);
        return createDataKeluarga;

    } catch (error) {
        console.log(error);
    }
};


