"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/geografiController");

  app.route("/").get(jsonku.index);

  app.route("/tampilGeografi").get(jsonku.tampilSemuaGeografi);

  app.route("/tampilGeografi/:id").get(jsonku.tampilGeografiBerdasarkanID);

  app.route("/tambahGeografi").post(jsonku.tambahGeografi);

  app.route("/ubahGeografi").put(jsonku.ubahGeografi);

  app.route("/hapusGeografi").delete(jsonku.hapusGeografi);
};
