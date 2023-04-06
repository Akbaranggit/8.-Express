const express = require('express');
const app = express();
const ruter = require('./route');

app.use(ruter);
app.use((req, res) => {
    res.send({
        status: 'data tidak ditemuka',
        pesan: 'url ' + req.originalUrl + ' tidak ada data',
        route_yang_tersedia: '/ ,/produk, produk/:namaproduk'
    })
});
app.listen(3000, () => {
    console.log(`http://localhost:3000/`);
});