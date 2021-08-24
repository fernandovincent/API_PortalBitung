"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/filePengumumanController");

  app.route("/").get(jsonku.index);

  app.route("/tampilPengumuman").get(jsonku.tampilSemuaPengumuman);

  app.route("/tampilPengumuman/:id").get(jsonku.tampilPengumumanBerdasarkanID);

  app.route("/tambahPengumuman").post(jsonku.tambahPengumuman);

  app.route("/ubahPengumuman").put(jsonku.ubahPengumuman);

  app.route("/hapusPengumuman").delete(jsonku.hapusPengumuman);
};
