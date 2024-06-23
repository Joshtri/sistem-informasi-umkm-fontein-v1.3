import * as keluargaServices from '../services/keluarga.services.js';

import * as pendudukServices from '../services/penduduk.services.js'



export const pendudukPage = async (req,res)=>{
    const title = "Data Penduduk"
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {

        const keluargaData = await keluargaServices.getAll();
        const { data: pendudukData, total, page: currentPage, pages: totalPages } = await pendudukServices.getPendudukPage(page,limit);



        res.render('data_penduduk',{
            title,
            keluargaData,
            totalPages,
            totalItems: total,
            limit,
            pendudukData,
            currentPage
            
        });
    } catch (error) {
        console.log(error);
    }

};


export const createPenduduk = async(req,res)=>{
    try {
        const pendudukData = req.body;
        const createdPenduduk = await pendudukServices.createPenduduk(pendudukData);

        res.redirect('/adm/data/penduduk');
    } catch (error) {
        console.log(error);
    }

}