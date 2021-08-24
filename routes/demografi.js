"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/demografiController");

  app.route("/").get(jsonku.index);

  app.route("/tampilDemografi").get(jsonku.tampilSemuaDemografi);

  app.route("/tampilDemografi/:id").get(jsonku.tampilDemografiBerdasarkanID);

  app.route("/tambahDemografi").post(jsonku.tambahDemografi);

  app.route("/ubahDemografi").put(jsonku.ubahDemografi);

  app.route("/hapusDemografi").delete(jsonku.hapusDemografi);
};
