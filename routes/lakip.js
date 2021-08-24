"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/lakipController");

  app.route("/").get(jsonku.index);

  app.route("/tampilLakip").get(jsonku.tampilSemuaLakip);

  app.route("/tampilLakip/:id").get(jsonku.tampilLakipBerdasarkanID);

  app.route("/tambahLakip").post(jsonku.tambahLakip);

  app.route("/ubahLakip").put(jsonku.ubahLakip);

  app.route("/hapusLakip").delete(jsonku.hapusLakip);
};
