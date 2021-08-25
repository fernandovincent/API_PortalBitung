"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/videoController");

  app.route("/").get(jsonku.index);

  app.route("/tampilVideo").get(jsonku.tampilSemuaVideo);

  app.route("/tampilVideo/:id").get(jsonku.tampilVideoBerdasarkanID);

  app.route("/tambahVideo").post(jsonku.tambahVideo);

  app.route("/ubahVideo").put(jsonku.ubahVideo);

  app.route("/hapusVideo").delete(jsonku.hapusVideo);
};
