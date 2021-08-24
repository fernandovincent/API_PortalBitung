"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/arsipDataController");

  app.route("/").get(jsonku.index);

  app.route("/tampilArsip").get(jsonku.tampilSemuaArsip);

  app.route("/tampilArsip/:id").get(jsonku.tampilArsipBerdasarkanID);

  app.route("/tambahArsip").post(jsonku.tambahArsip);

  app.route("/ubahArsip").put(jsonku.ubahArsip);

  app.route("/hapusArsip").delete(jsonku.hapusArsip);
};
