"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/layananController");

  app.route("/").get(jsonku.index);

  app.route("/tampilLayanan").get(jsonku.tampilSemuaLayanan);

  app.route("/tampilLayanan/:id").get(jsonku.tampilLayananBerdasarkanID);

  app.route("/tambahLayanan").post(jsonku.tambahLayanan);

  app.route("/ubahLayanan").put(jsonku.ubahLayanan);

  app.route("/hapusLayanan").delete(jsonku.hapusLayanan);
};
