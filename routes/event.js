"use strict";

module.exports = function (app) {
  var jsonku = require("../src/controller/eventController");

  app.route("/").get(jsonku.index);

  app.route("/tampilEvent").get(jsonku.tampilSemuaEvent);

  app.route("/tampilEvent/:id").get(jsonku.tampilEventBerdasarkanID);

  app.route("/tambahEvent").post(jsonku.tambahEvent);

  app.route("/ubahEvent").put(jsonku.ubahEvent);

  app.route("/hapusEvent").delete(jsonku.hapusEvent);
};
