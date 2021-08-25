"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/strukturController");

    app.route("/").get(jsonku.index);

    app.route("/tampilStruktur").get(jsonku.tampilSemuaStruktur);

    app.route("/tampilStruktur/:id").get(jsonku.tampilStrukturBerdasarkanID);

    app.route("/tambahStruktur").post(jsonku.tambahStruktur);

    app.route("/ubahStruktur").put(jsonku.ubahStruktur);

    app.route("/hapusStruktur").delete(jsonku.hapusStruktur);
};