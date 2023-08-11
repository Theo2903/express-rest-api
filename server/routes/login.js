/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Connectez-vous en tant qu'utilisateur
 *     description: Utilisez cette route pour vous connecter en tant qu'utilisateur.
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Données de connexion de l'utilisateur
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Échec de la connexion
 */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST login 
router.post('/login', authController.login);

module.exports = router;
