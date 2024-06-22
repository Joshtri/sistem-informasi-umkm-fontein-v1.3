

import * as kbliServices from '../services/kbli.services.js';

export const getKbliPageController = async (req, res) => {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const kbliData = await kbliServices.getKbliPage(offset, limit);
        res.status(200).json(kbliData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const kbliPage = async (req, res) => {
    const title = "Data KBLI";
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const kbliData = await kbliServices.getKbliPage(offset, limit);

        res.render('data_kbli', {
            title,
            kbliData,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching KBLI data.');
    }
};


export const createKbliController = async (req, res) => {
    const kbliData = req.body;

    try {
        const createdKbli = await kbliServices.createKbli(kbliData);
        res.status(201).json(createdKbli);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};