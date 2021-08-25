"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/sejarahController");

    app.route("/").get(jsonku.index);

    app.route("/tampilSejarah").get(jsonku.tampilSemuaSejarah);

    app.route("/tampilSejarah/:id").get(jsonku.tampilSejarahBerdasarkanID);

    app.route("/tambahSejarah").post(jsonku.tambahSejarah);

    app.route("/ubahSejarah").put(jsonku.ubahSejarah);

    app.route("/hapusSejarah").delete(jsonku.hapusSejarah);
};