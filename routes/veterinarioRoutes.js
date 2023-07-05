import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  actualizaPerfil,
  actualizarPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

//*Area publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

//*Area privada
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizaPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;
