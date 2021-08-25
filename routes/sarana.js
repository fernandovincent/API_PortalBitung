"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/saranaController");

    app.route("/").get(jsonku.index);

    app.route("/tampilSarana").get(jsonku.tampilSemuaSarana);

    app.route("/tampilSarana/:id").get(jsonku.tampilSaranaBerdasarkanID);

    app.route("/tambahSarana").post(jsonku.tambahSarana);

    app.route("/ubahSarana").put(jsonku.ubahSarana);

    app.route("/hapusSarana").delete(jsonku.hapusSarana);
};