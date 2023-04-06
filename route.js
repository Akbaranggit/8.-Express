const ruter = require('express').Router();
const data = require('./json/data.js');

ruter.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

ruter.get('/produk', (req, res) => {
    res.status(200).json({
        status: 'oke',
        isi: data()
    });
});

ruter.get('/produk/:namaProdukYangDicari', (req, res) => {
    const saringData = data().filter((saring) => saring.produk === String(req.params.namaProdukYangDicari));
    if (saringData.length === 0) {
        res.send({
            filter: req.params.namaProdukYangDicari,
            data: 'maaf, data tidak ditemukan.  Coba cari data lain'
        });
    } else {
        res.send({
            filter: req.params.namaProdukYangDicari,
            data: saringData
        })
    }
});

module.exports = ruter;