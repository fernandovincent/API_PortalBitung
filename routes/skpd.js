"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/skpdController");

    app.route("/").get(jsonku.index);

    app.route("/tampilSkpd").get(jsonku.tampilSemuaSkpd);

    app.route("/tampilSkpd/:id").get(jsonku.tampilSkpdBerdasarkanID);

    app.route("/tambahSkpd").post(jsonku.tambahSkpd);

    app.route("/ubahSkpd").put(jsonku.ubahSkpd);

    app.route("/hapusSkpd").delete(jsonku.hapusSkpd);
};