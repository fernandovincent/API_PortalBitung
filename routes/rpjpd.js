module.exports = function (app) {
    var jsonku = require("../src/controller/rpjpdController.js");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilRpjpd").get(jsonku.tampilSemuaRpjpd);
  
    app.route("/tampilRpjpd/:id").get(jsonku.tampilRpjpdBerdasarkanID);
  
    app.route("/tambahRpjpd").post(jsonku.tambahRpjpd);
  
    app.route("/ubahRpjpd").put(jsonku.ubahRpjpd);
  
    app.route("/hapusRpjpd").delete(jsonku.hapusRpjpd);
  };