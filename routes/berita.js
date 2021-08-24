"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/beritaController");

  app.route("/").get(jsonku.index);

  app.route("/tampilBerita").get(jsonku.tampilSemuaBerita);

  app.route("/tampilBerita/:id").get(jsonku.tampilBeritaBerdasarkanID);

  app.route("/tambahBerita").post(jsonku.tambahBerita);

  app.route("/ubahBerita").put(jsonku.ubahBerita);

  app.route("/hapusBerita").delete(jsonku.hapusBerita);
};
