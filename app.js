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

routesAdmin(app);
routesArsipData(app);
routesBerita(app);
routesDaftarWalikota(app);
routesDemografi(app);
routesEvent(app);
routesFilePengumuman(app);
routesFoto(app);
routesGeografi(app);

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
