"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/filePengumumanController");

  app.route("/").get(jsonku.index);

  app.route("/tampilFilePengumuman").get(jsonku.tampilSemuaFilePengumuman);

  app.route("/tampilFilePengumuman/:id").get(jsonku.tampilFilePengumumanBerdasarkanID);

  app.route("/tambahFilePengumuman").post(jsonku.tambahFilePengumuman);

  app.route("/ubahFilePengumuman").put(jsonku.ubahFilePengumuman);

  app.route("/hapusFilePengumuman").delete(jsonku.hapusFilePengumuman);
};
