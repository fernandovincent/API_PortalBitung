module.exports = function (app) {
    var jsonku = require("../src/controller/rkpdController.js");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilRkpd").get(jsonku.tampilSemuaRkpd);
  
    app.route("/tampilRkpd/:id").get(jsonku.tampilRkpdBerdasarkanID);
  
    app.route("/tambahRkpd").post(jsonku.tambahRkpd);
  
    app.route("/ubahRkpd").put(jsonku.ubahRkpd);
  
    app.route("/hapusRkpd").delete(jsonku.hapusRkpd);
  };