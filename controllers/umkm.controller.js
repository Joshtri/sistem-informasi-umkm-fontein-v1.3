import * as pendudukServices from '../services/penduduk.services.js';
import * as keluargaServices from '../services/keluarga.services.js';
import * as kbliServices from '../services/kbli.services.js';

export const umkmPage = async(req,res)=>{
    const title = "Data UMKM";
    res.render('data_umkm',{
        title
    });
}



export const addUmkmPage = async(req,res)=>{
    const title = "Tambah UMKM";

    const pendudukData = await pendudukServices.getAll();
    const keluargaData = await keluargaServices.getAll();
    const kbliData = await kbliServices.getAll();

    res.render('add_umkm',{
        title,
        pendudukData,
        keluargaData,
        kbliData
    })
}