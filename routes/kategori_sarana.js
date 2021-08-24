"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/kategori_saranaController");

  app.route("/").get(jsonku.index);

  app.route("/tampilKategori_Sarana").get(jsonku.tampilSemuaKategori_Sarana);

  app.route("/tampilKategori_Sarana/:id").get(jsonku.tampilKategori_SaranaBerdasarkanID);

  app.route("/tambahKategori_Sarana").post(jsonku.tambahKategori_Sarana);

  app.route("/ubahKategori_Sarana").put(jsonku.ubahKategori_Sarana);

  app.route("/hapusKategori_Sarana").delete(jsonku.hapusKategori_Sarana);
};
