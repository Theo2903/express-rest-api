/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Routes d'authentification
 */

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     description: Utilisez cette route pour inscrire un nouvel utilisateur.
 *     tags: [Auth]
 *     requestBody:
 *       description: Données d'inscription de l'utilisateur
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               roleId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inscription réussie
 *         content:
 *           application/json:
 *             example:
 *               message: User account created. Thanks for registering
 *               token: "your_jwt_token_here"
 *       400:
 *         description: Échec de l'inscription
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to create new account
 *       409:
 *         description: L'utilisateur existe déjà
 *         content:
 *           application/json:
 *             example:
 *               message: User with email already exists!
 */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST register
router.post('/register', authController.signup);

module.exports = router;
