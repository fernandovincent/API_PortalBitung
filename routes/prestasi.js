module.exports = function (app) {
    var jsonku = require("../src/controller/prestasiController");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilPrestasi").get(jsonku.tampilSemuaPrestasi);
  
    app.route("/tampilPrestasi/:id").get(jsonku.tampilPrestasiBerdasarkanID);
  
    app.route("/tambahPrestasi").post(jsonku.tambahPrestasi);
  
    app.route("/ubahPrestasi").put(jsonku.ubahPrestasi);
  
    app.route("/hapusPrestasi").delete(jsonku.hapusPrestasi);
  };