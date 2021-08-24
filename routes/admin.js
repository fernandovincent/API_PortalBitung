"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/adminController");

  app.route("/").get(jsonku.index);

  app.route("/tampilAdmin").get(jsonku.tampilSemuaAdmin);

  app.route("/tampilAdmin/:id").get(jsonku.tampilAdminBerdasarkanID);

  app.route("/tambahAdmin").post(jsonku.tambahAdmin);

  app.route("/ubahAdmin").put(jsonku.ubahAdmin);

  app.route("/hapusAdmin").delete(jsonku.hapusAdmin);
};
