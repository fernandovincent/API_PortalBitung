module.exports = function (app) {
    var jsonku = require("../src/controller/rpjmdController.js");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilRpjmd").get(jsonku.tampilSemuaRpjmd);
  
    app.route("/tampilRpjmd/:id").get(jsonku.tampilRpjmdBerdasarkanID);
  
    app.route("/tambahRpjmd").post(jsonku.tambahRpjmd);
  
    app.route("/ubahRpjmd").put(jsonku.ubahRpjmd);
  
    app.route("/hapusRpjmd").delete(jsonku.hapusRpjmd);
  };