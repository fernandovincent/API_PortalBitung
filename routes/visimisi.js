"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/visimisiController");

  app.route("/").get(jsonku.index);

  app.route("/tampilVisimisi").get(jsonku.tampilSemuaVisimisi);

  app.route("/tampilVisimisi/:id").get(jsonku.tampilVisimisiBerdasarkanID);

  app.route("/tambahVisimisi").post(jsonku.tambahVisimisi);

  app.route("/ubahVisimisi").put(jsonku.ubahVisimisi);

  app.route("/hapusVisimisi").delete(jsonku.hapusVisimisi);
};
