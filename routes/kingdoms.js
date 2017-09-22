const express = require("express");
const jsonModule = require("../services/kingdom-store");

const router = express.Router();

router.get("/", (req, res) => {
	var kingdoms = jsonModule.getKingdoms();
	res.render("kingdoms", { kingdoms });
});

router.get("/kingdoms/:kingdom", (req, res) => {
	var kingdom = req.params.kingdom;
	var castles = jsonModule.getCastles(kingdom);
	//console.log("obj", castles);
	res.render("kingdoms/showkingdom", { kingdom, castles });
});

router.get("/kingdoms/:kingdom/castles/:castle", (req, res) => {
	var castle = req.params.castle;
	var kingdom = req.params.kingdom;
	var leiges = jsonModule.getLeiges(kingdom, castle);
	res.render("castles/showcastle", { kingdom, castle, leiges });
});

router.get("/kingdoms/:kingdom/castles/:castle/leiges/:leige", (req, res) => {
	var leige = req.params.leige;
	var kingdom = req.params.kingdom;
	var castle = req.params.castle;
	var vassals = jsonModule.getVassals(kingdom, castle, leige);
	res.render("leiges/showleige", { kingdom, castle, leige, vassals });
});

module.exports = router;
