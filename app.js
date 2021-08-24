const express = require("express");
const bodyParser = require("body-parser");

var morgan = require("morgan");
const app = express();

// Parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Panggil routes
var routesAdmin = require("./routes/admin");
var routesArsipData = require("./routes/arsipData");
var routesBerita = require("./routes/berita");
var routesDaftarWalikota = require("./routes/daftarWalikota");
var routesDemografi = require("./routes/demografi");
var routesEvent = require("./routes/event");
var routesFilePengumuman = require("./routes/filePengumuman");
var routesFoto = require("./routes/foto");
var routesGeografi = require("./routes/geografi");
var routesIklan = require("./routes/iklan");
var routesKategori_Sarana = require("./routes/kategori_sarana");
var routesKecamatan = require("./routes/kecamatan");
var routesKelurahan = require("./routes/Kelurahan");
var routesLakip = require("./routes/Lakip");
var routesLambang = require("./routes/Lambang");
var routesLayanan = require("./routes/Layanan");
var routesLppd = require("./routes/Lppd");
var routesPegawai = require("./routes/Pegawai");
var routesPengumuman = require("./routes/pengumuman");
var routesPotensi = require("./routes/potensi");
var routesPrestasi = require("./routes/prestasi");
var routesProdukHukum = require("./routes/produkHukum");
var routesProgramUnggulan = require("./routes/programUnggulan");
var routesRenstra = require("./routes/renstra");
var routesRkpd = require("./routes/rkpd");
var routesRpjmd = require("./routes/rpjmd");
var routesRpjpd = require("./routes/rpjpd");

routesAdmin(app);
routesArsipData(app);
routesBerita(app);
routesDaftarWalikota(app);
routesDemografi(app);
routesEvent(app);
routesFilePengumuman(app);
routesFoto(app);
routesGeografi(app);
routesIklan(app);
routesKategori_Sarana(app);
routesKecamatan(app);
routesKelurahan(app);
routesLakip(app);
routesLambang(app);
routesLayanan(app);
routesLppd(app);
routesPegawai(app);
routesPengumuman(app);
routesPotensi(app);
routesPrestasi(app);
routesProdukHukum(app);
routesProgramUnggulan(app);
routesRenstra(app);
routesRkpd(app);
routesRpjmd(app);
routesRpjpd(app);

app.listen(3000, () => {
  console.log(`Server started on port`);
});

module.exports = routesAdmin;
module.exports = routesArsipData;
module.exports = routesBerita;
module.exports = routesDaftarWalikota;
module.exports = routesDemografi;
module.exports = routesEvent;
module.exports = routesFilePengumuman;
module.exports = routesFoto;
module.exports = routesGeografi;
module.exports = routesIklan;
module.exports = routesKategori_Sarana;
module.exports = routesKecamatan;
module.exports = routesKelurahan;
module.exports = routesLakip;
module.exports = routesLambang;
module.exports = routesLayanan;
module.exports = routesLppd;
module.exports = routesPegawai;
module.exports = routesPengumuman;
module.exports = routesPotensi;
module.exports = routesPrestasi;
module.exports = routesProdukHukum;
module.exports = routesProgramUnggulan;
module.exports = routesRenstra;
module.exports = routesRkpd;
module.exports = routesRpjmd;
module.exports = routesRpjpd;
