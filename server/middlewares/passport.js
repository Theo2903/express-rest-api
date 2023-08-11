const jwt = require('jsonwebtoken'); // Import de jsonwebtoken
const User = require('../models/user');

// Fonction pour générer un JWT
const generateToken = (user) => {
  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' });
  return token;
};

// Middleware pour vérifier le JWT et ajouter l'utilisateur à la requête
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token invalid' });
    }

    User.findOne({ where: { id: decoded.id } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
      })
      .catch((err) => res.status(500).json({ message: 'Internal server error' }));
  });
};

module.exports = { generateToken, authenticateJWT };
