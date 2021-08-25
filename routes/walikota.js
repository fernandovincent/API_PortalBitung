"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/walikotaCotroller");

  app.route("/").get(jsonku.index);

  app.route("/tampilWalikota").get(jsonku.tampilSemuaWalikota);

  app.route("/tampilWalikota/:id").get(jsonku.tampilWalikotaBerdasarkanID);

  app.route("/tambahWalikota").post(jsonku.tambahWalikota);

  app.route("/ubahWalikota").put(jsonku.ubahWalikota);

  app.route("/hapusWalikota").delete(jsonku.hapusWalikota);
};
