"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/pegawaiController");

  app.route("/").get(jsonku.index);

  app.route("/tampilPegawai").get(jsonku.tampilSemuaPegawai);

  app.route("/tampilPegawai/:id").get(jsonku.tampilPegawaiBerdasarkanID);

  app.route("/tambahPegawai").post(jsonku.tambahPegawai);

  app.route("/ubahPegawai").put(jsonku.ubahPegawai);

  app.route("/hapusPegawai").delete(jsonku.hapusPegawai);
};
