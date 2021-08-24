"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/lambangController");

  app.route("/").get(jsonku.index);

  app.route("/tampilLambang").get(jsonku.tampilSemuaLambang);

  app.route("/tampilLambang/:id").get(jsonku.tampilLambangBerdasarkanID);

  app.route("/tambahLambang").post(jsonku.tambahLambang);

  app.route("/ubahLambang").put(jsonku.ubahLambang);

  app.route("/hapusLambang").delete(jsonku.hapusLambang);
};
