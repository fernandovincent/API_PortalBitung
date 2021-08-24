"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/kelurahanController");

  app.route("/").get(jsonku.index);

  app.route("/tampilKelurahan").get(jsonku.tampilSemuaKelurahan);

  app.route("/tampilKelurahan/:id").get(jsonku.tampilKelurahanBerdasarkanID);

  app.route("/tambahKelurahan").post(jsonku.tambahKelurahan);

  app.route("/ubahKelurahan").put(jsonku.ubahKelurahan);

  app.route("/hapusKelurahan").delete(jsonku.hapusKelurahan);
};
