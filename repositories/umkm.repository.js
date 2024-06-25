import Umkm from '../models/umkm.model.js'




export const getAllPage = async (offset,limit)=>{
    try {
        const getDataUmkm = await Umkm.find()
        .skip(offset)
        .limit(limit)
        .populate('nama_pemilik');
    return getDataUmkm;
    } catch (error) {
        console.log(error);
    }
};



export const getAll = async()=>{
    try {
        const getDataUmkm = await Umkm.find()
        return getDataUmkm;
    } catch (error) {
        console.log(error);
    }
};

export const createUmkm = async(umkmData)=>{
    try {
        const createdUmkm = await Umkm.create(umkmData);
        return createdUmkm;

    } catch (error) {
        console.log(error);
    }
};


export const getTotalUmkm = async()=>{
    try {
        const totalUmkm = await Umkm.countDocuments();
        return totalUmkm;
    } catch (error) {
        console.log(error);
    }
};


// Find Umkm data by ID
export const findUmkmById = async (id) => {
    try {
        const umkm = await Umkm.findById(id).populate('nama_pemilik').populate('keluarga_Id').populate('kbli_Id'); // Populate related fields
        return umkm;
    } catch (error) {
        console.log(error);
    }
};

// Delete Umkm data by ID
export const deleteUmkmById = async (id) => {
    try {
        const deletedUmkm = await Umkm.findByIdAndDelete(id);
        return deletedUmkm;
    } catch (error) {
        console.log(error);
    }
};


// Update Penduduk data by ID
export const updateUmkm = async (id, updatedData) => {
    try {
        const updatedUmkm = await Umkm.findByIdAndUpdate(id, updatedData, { new: true });
        return updatedUmkm;
    } catch (error) {
        throw new Error(`Error updating Umkm data: ${error.message}`);
    }
};