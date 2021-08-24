module.exports = function (app) {
    var jsonku = require("../src/controller/programUnggulanController");
  
    app.route("/").get(jsonku.index);
  
    app.route("/tampilProgramUnggulan").get(jsonku.tampilSemuaProgramUnggulan);
  
    app.route("/tampilProgramUnggulan/:id").get(jsonku.tampilProgramUnggulanBerdasarkanID);
  
    app.route("/tambahProgramUnggulan").post(jsonku.tambahProgramUnggulan);
  
    app.route("/ubahProgramUnggulan").put(jsonku.ubahProgramUnggulan);
  
    app.route("/hapusProgramUnggulan").delete(jsonku.hapusProgramUnggulan);
  };