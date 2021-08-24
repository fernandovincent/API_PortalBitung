module.exports = function (app) {
    var jsonku = require("../src/controller/renstraController.js");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilRenstra").get(jsonku.tampilSemuaRenstra);
  
    app.route("/tampilRenstra/:id").get(jsonku.tampilRenstraBerdasarkanID);
  
    app.route("/tambahRenstra").post(jsonku.tambahRenstra);
  
    app.route("/ubahRenstra").put(jsonku.ubahRenstra);
  
    app.route("/hapusRenstra").delete(jsonku.hapusRenstra);
  };