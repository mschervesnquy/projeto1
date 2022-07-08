const express = require("express");
const router = express.Router();
const SerieController = require("../controller/SerieController");

const upload = require("../config/upload");

router.get("/adicionar", SerieController.abreadicionar);
router.post("/adicionar", upload.single("foto"), SerieController.adicionar);

router.get("/listar", SerieController.listar);
router.post("/listar", SerieController.filtro);

router.get("/editar/:id", SerieController.abreeditar);
router.post("/editar/:id", upload.single("foto"), SerieController.editar);

router.get("/deletar/:id", SerieController.deletar);

module.exports = router;
