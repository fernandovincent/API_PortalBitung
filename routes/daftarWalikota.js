"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/daftarWalikotaController");

  app.route("/").get(jsonku.index);

  app.route("/tampilDaftar").get(jsonku.tampilSemuaDaftar);

  app.route("/tampilDaftar/:id").get(jsonku.tampilDaftarBerdasarkanID);

  app.route("/tambahDaftar").post(jsonku.tambahDaftar);

  app.route("/ubahDaftar").put(jsonku.ubahDaftar);

  app.route("/hapusDaftar").delete(jsonku.hapusDaftar);
};
