const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const { id, email, role } = jwt.verify(
      token,
      "asdjpoiacvnjianouqweru3094uqbpoaf34124"
    ); //should be in .env
    req.user = { id, email, role };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const authorizePermission = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

module.exports = { authenticateUser, authorizePermission };
