import Penduduk from "../models/penduduk.model.js";
import Keluarga from "../models/keluarga.model.js";


// export const getAllPage = async(offset,limit)=>{
//     try {
//         const getDataPenduduk = await Penduduk.find().skip(offset).limit(limit);
//         return getDataPenduduk;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const getAllPage = async (offset, limit) => {
    try {
        const getDataPenduduk = await Penduduk.find()
            .skip(offset)
            .limit(limit)
            .populate('keluargaId'); // Populate the keluargaId field with data from the Keluarga collection
        return getDataPenduduk;
    } catch (error) {
        console.log(error);
    }
};


export const getAll = async()=>{
    try {
        const getDataPenduduk = await Penduduk.find();
        return getDataPenduduk;
    } catch (error) {
        console.log(error);
    }
};


export const createPenduduk = async(pendudukData)=>{
    try {
        const createdPenduduk = await Penduduk.create(pendudukData);
        return createdPenduduk;

    } catch (error) {
        console.log(error);
    }
};


export const getTotalPenduduk = async()=>{
    try {
        const totalKbli = await Penduduk.countDocuments();
        return totalKbli;
    } catch (error) {
        console.log(error);
    }
};