"use strict";

module.exports = function(app) {
    var jsonku = require("../src/controller/urusan_wajibController");

    app.route("/").get(jsonku.index);

    app.route("/tampilUrusan_wajib").get(jsonku.tampilSemuaUrusan_wajib);

    app.route("/tampilUrusan_wajib/:id").get(jsonku.tampilUrusan_wajibBerdasarkanID);

    app.route("/tambahUrusan_wajib").post(jsonku.tambahUrusan_wajib);

    app.route("/ubahUrusan_wajib").put(jsonku.ubahUrusan_wajib);

    app.route("/hapusUrusan_wajib").delete(jsonku.hapusUrusan_wajib);
};