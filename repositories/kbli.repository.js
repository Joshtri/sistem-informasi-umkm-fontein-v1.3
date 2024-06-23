import kbli from '../models/kbli.model.js';

export const getAllPage = async(offset, limit)=>{

    try {
        const kbliData = await kbli.find().skip(offset).limit(limit);
        return kbliData;
    } catch (error) {
        throw new Error(`Error fetching KBLI data: ${error.message}`);
    }

};


export const getAll = async ()=>{
    try {
        const kbliData = await kbli.find();
        return kbliData;
    } catch (error) {
        console.log(error);
    }
};


export const createKbli = async (kbliData)=>{
    try {
        const createKbliData = await kbli.create(kbliData);
        return createKbliData;
    } catch (error) {
        console.log(error);
    }
};


export const getTotalKbli = async()=>{
    try {
        const totalKbli = await kbli.countDocuments();
        return totalKbli;
    } catch (error) {
        console.log(error);
    }
};