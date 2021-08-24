"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/fotoController");

  app.route("/").get(jsonku.index);

  app.route("/tampilFoto").get(jsonku.tampilSemuaFoto);

  app.route("/tampilFoto/:id").get(jsonku.tampilFotoBerdasarkanID);

  app.route("/tambahFoto").post(jsonku.tambahFoto);

  app.route("/ubahFoto").put(jsonku.ubahFoto);

  app.route("/hapusFoto").delete(jsonku.hapusFoto);
};
