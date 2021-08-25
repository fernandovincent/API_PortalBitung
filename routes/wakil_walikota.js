"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/wakil_walikotaController");

  app.route("/").get(jsonku.index);

  app.route("/tampilWakil_walikota").get(jsonku.tampilSemuaWakil_walikota);

  app.route("/tampilWakil_walikota/:id").get(jsonku.tampilWakil_walikotaBerdasarkanID);

  app.route("/tambahWakil_walikota").post(jsonku.tambahWakil_walikota);

  app.route("/ubahWakil_walikota").put(jsonku.ubahWakil_walikota);

  app.route("/hapusWakil_walikota").delete(jsonku.hapusWakil_walikota);
};
