/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Routes d'utilisateur
 */

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Récupérer la liste des utilisateurs
 *     description: Utilisez cette route pour obtenir la liste de tous les utilisateurs.
 *     tags: [Users]
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérée avec succès
 *       401:
 *         description: Non authentifié ou rôle non autorisé
 */

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     description: Utilisez cette route pour créer un nouvel utilisateur (réservé aux administrateurs).
 *     tags: [Users]
 *     security:
 *       - jwt: []
 *     requestBody:
 *       description: Données de l'utilisateur à créer
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               roleId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Utilisateur créé avec succès
 *       401:
 *         description: Non authentifié ou rôle non autorisé
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *   get:
 *     summary: Récupérer un utilisateur par ID
 *     description: Utilisez cette route pour obtenir les détails d'un utilisateur par son ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de l'utilisateur récupérés avec succès
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur par ID
 *     description: Utilisez cette route pour mettre à jour les détails d'un utilisateur par son ID.
 *     tags: [Users]
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Nouvelles données de l'utilisateur
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               roleId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *       401:
 *         description: Non authentifié ou rôle non autorisé
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur par ID
 *     description: Utilisez cette route pour supprimer un utilisateur par son ID (réservé aux administrateurs).
 *     tags: [Users]
 *     security:
 *       - jwt: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       401:
 *         description: Non authentifié ou rôle non autorisé
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateJWT } = require('../middlewares/authenticateJWT');
const { checkRole } = require('../middlewares/checkRole');

// GET all users (protected route)
router.get('/user', authenticateJWT, checkRole(['user', 'admin']), userController.getAll);

// POST create user (protected route)
// authorization (admin)
router.post('/user', authenticateJWT, checkRole('admin'), userController.create);

// GET user by ID (unprotected route)
router.get('/user/:id', userController.getOne);

// PUT update user by ID (protected route)
router.put('/user/:id', authenticateJWT, checkRole(['user', 'admin']), userController.updateOne);

// DELETE  user by ID (protected route)
router.delete('/user/:id', authenticateJWT, checkRole('admin'), userController.deleteOne);

module.exports = router;
