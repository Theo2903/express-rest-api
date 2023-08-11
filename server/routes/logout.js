/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Routes d'authentification
 */

/**
 * @swagger
 * /api/v1/logout:
 *   post:
 *     summary: Déconnexion de l'utilisateur
 *     description: Utilisez cette route pour déconnecter l'utilisateur actuellement authentifié.
 *     tags: [Auth]
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Déconnexion réussie
 *       401:
 *         description: Non authentifié
 */
const express = require('express');
const { authenticateJWT } = require('../middlewares/authenticateJWT');
const authController = require('../controllers/authController');
const router = express.Router();

// Logout
router.post('/logout', authenticateJWT, authController.logout);

module.exports = router;
