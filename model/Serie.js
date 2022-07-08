const conexao = require("../config/database");

const SerieSchema = conexao.Schema({
  titulo: {
    type: "String",
  },
  episodios: {
    type: "Number",
  },
  temporadas: {
    type: "Number",
  },
  descricao: {
    type: "String",
  },
  lancamento: {
    type: "Date",
  },
  foto: {
    type: "String",
  },
});

module.exports = conexao.model("Serie", SerieSchema);
