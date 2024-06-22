import Keluarga from '../models/keluarga.model.js';

export const getAllKeluarga = async(offset,limit)=>{
    try {
        const getDataKeluarga = await Keluarga.find();

        return getDataKeluarga;
    } catch (error) {
       console.log(error) 
    }
}