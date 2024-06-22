
import * as keluargaServices from '../services/keluarga.services.js'


export const keluargaPage = async(req,res)=>{

    try {
        const title = "Data Keluarga";

        res.render("data_keluarga",{
            title
        });
    } catch (error) {
        console.log(error);   
    }


}



export const createKeluarga = async(req,res)=>{
    const keluargaData = req.body;

    try {
        const createdKeluarga = await keluargaServices.createKeluarga(keluargaData);
        res.redirect('/adm/data/keluarga');
    } catch (error) {
        console.log(error);
    }
};
