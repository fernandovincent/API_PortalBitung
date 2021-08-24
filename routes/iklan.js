"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/iklanController");

  app.route("/").get(jsonku.index);

  app.route("/tampilIklan").get(jsonku.tampilSemuaIklan);

  app.route("/tampilIklan/:id").get(jsonku.tampilIklanBerdasarkanID);

  app.route("/tambahIklan").post(jsonku.tambahIklan);

  app.route("/ubahIklan").put(jsonku.ubahIklan);

  app.route("/hapusIklan").delete(jsonku.hapusIklan);
};
