"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/lppdController");

  app.route("/").get(jsonku.index);

  app.route("/tampilLppd").get(jsonku.tampilSemuaLppd);

  app.route("/tampilLppd/:id").get(jsonku.tampilLppdBerdasarkanID);

  app.route("/tambahLppd").post(jsonku.tambahLppd);

  app.route("/ubahLppd").put(jsonku.ubahLppd);

  app.route("/hapusLppd").delete(jsonku.hapusLppd);
};
