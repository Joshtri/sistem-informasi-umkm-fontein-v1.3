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
        const totalPenduduk = await Penduduk.countDocuments();
        return totalPenduduk;
    } catch (error) {
        console.log(error);
    }
};


// Find Penduduk data by ID
export const findPendudukById = async (id) => {
    try {
        const penduduk = await Penduduk.findById(id).populate('keluargaId'); // Populate the keluargaId field
        return penduduk;
    } catch (error) {
        console.log(error);
    }
};

// Delete Penduduk data by ID
export const deletePendudukById = async (id) => {
    try {
        const deletedPenduduk = await Penduduk.findByIdAndDelete(id);
        return deletedPenduduk;
    } catch (error) {
        console.log(error);
    }
};


// Update Penduduk data by ID
export const updatePenduduk = async (id, updatedData) => {
    try {
        const updatedPenduduk = await Penduduk.findByIdAndUpdate(id, updatedData, { new: true });
        return updatedPenduduk;
    } catch (error) {
        throw new Error(`Error updating Penduduk data: ${error.message}`);
    }
};