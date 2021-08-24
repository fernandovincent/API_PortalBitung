"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/kecamatanController");

  app.route("/").get(jsonku.index);

  app.route("/tampilKecamatan").get(jsonku.tampilSemuaKecamatan);

  app.route("/tampilKecamatan/:id").get(jsonku.tampilKecamatanBerdasarkanID);

  app.route("/tambahKecamatan").post(jsonku.tambahKecamatan);

  app.route("/ubahKecamatan").put(jsonku.ubahKecamatan);

  app.route("/hapusKecamatan").delete(jsonku.hapusKecamatan);
};
