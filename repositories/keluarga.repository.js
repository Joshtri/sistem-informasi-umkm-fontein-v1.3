import Keluarga from '../models/keluarga.model.js';

export const getAllPage = async(offset,limit)=>{
    try {
        const getDataKeluarga = await Keluarga.find().skip(offset).limit(limit);

        return getDataKeluarga;
    } catch (error) {
       console.log(error) 
    }
}


export const getAll = async()=>{
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


export const getTotalKeluarga = async()=>{
    try {
        const totalKbli = await Keluarga.countDocuments();
        return totalKbli;
    } catch (error) {
        console.log(error);
    }
};