const jwt = require('jsonwebtoken');
const User = require('../models/user');

const jwtOptions = {
  jwtFromRequest: (req) => {
    const token = req.header('Authorization');
    if (token && token.startsWith('Bearer ')) {
      return token.substring(7); // Supprimer "Bearer " du début
    }
    return null;
  },
  secretOrKey: process.env.JWT_SECRET
};

const authenticateJWT = (req, res, next) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    User.findByPk(decoded.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
      })
      .catch(err => {
        return res.status(500).json({ success: false, message: 'Internal server error' });
      });
  });
};

module.exports = {
  authenticateJWT
};
