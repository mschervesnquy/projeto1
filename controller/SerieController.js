const Serie = require("../model/Serie");

function abreadicionar(req, res) {
  res.render("serie/adicionar.ejs");
}
function adicionar(req, res) {
  var serie = new Serie();
  serie.titulo = req.body.titulo;
  serie.episodios = req.body.episodios;
  serie.temporadas = req.body.temporadas;
  serie.descricao = req.body.descricao;
  serie.lancamento = req.body.lancamento;
  serie.foto = req.file.filename;
  serie.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/serie/listar");
    }
  });
}
function listar(req, res) {
  Serie.find({}).then(function (series) {
    res.render("serie/listar.ejs", { Series: series });
  });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Serie.find({ titulo: new RegExp(pesquisa, "i") }).then(function (series) {
    res.render("serie/listar.ejs", { Series: series });
  });
}
function abreeditar(req, res) {
  Serie.findById(req.params.id).then(function (serie) {
    res.render("serie/editar.ejs", { Serie: serie });
  });
}
function editar(req, res) {
  Serie.findByIdAndUpdate(
    req.params.id,
    {
      titulo: req.body.titulo,
      episodios: req.body.episodios,
      temporadas: req.body.temporadas,
      descricao: req.body.descricao,
      lancamento: req.body.lancamento,
      foto: req.file.filename,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte erro: " + err);
      } else {
        res.redirect("/serie/listar");
      }
    }
  );
}
function deletar(req, res) {
  Serie.findByIdAndDelete(req.params.id).then(function (valor) {
    res.redirect("/serie/listar");
  });
}

module.exports = {
  abreadicionar,
  adicionar,
  listar,
  filtro,
  abreeditar,
  editar,
  deletar,
};
