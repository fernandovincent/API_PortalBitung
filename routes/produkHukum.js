module.exports = function (app) {
    var jsonku = require("../src/controller/produkHukumController");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilProdukHukum").get(jsonku.tampilSemuaProdukHukum);
  
    app.route("/tampilProdukHukum/:id").get(jsonku.tampilProdukHukumBerdasarkanID);
  
    app.route("/tambahProdukHukum").post(jsonku.tambahProdukHukum);
  
    app.route("/ubahProdukHukum").put(jsonku.ubahProdukHukum);
  
    app.route("/hapusProdukHukum").delete(jsonku.hapusProdukHukum);
  };