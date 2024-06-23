
import * as keluargaServices from '../services/keluarga.services.js'


export const keluargaPage = async(req,res)=>{
    const title = "Data Keluarga";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {

        const { data: keluargaData, total, page: currentPage, pages: totalPages } = await keluargaServices.getKeluargaPage(page,limit);

        res.render("data_keluarga",{
            title,
            currentPage,
            keluargaData,
            totalPages,
            totalItems: total,
            limit,
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


