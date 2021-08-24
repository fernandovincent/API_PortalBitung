module.exports = function (app) {
    var jsonku = require("../src/controller/potensiController");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilPotensi").get(jsonku.tampilSemuaPotensi);
  
    app.route("/tampilPotensi/:id").get(jsonku.tampilPotensiBerdasarkanID);
  
    app.route("/tambahPotensi").post(jsonku.tambahPotensi);
  
    app.route("/ubahPotensi").put(jsonku.ubahPotensi);
  
    app.route("/hapusPotensi").delete(jsonku.hapusPotensi);
  };
  