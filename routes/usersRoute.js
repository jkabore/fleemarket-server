const router = require("express").Router();
const {
  registerUser,
  login,
  getCurrentUser,
  updateUserStatus,
  getAllUsers,
} = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", registerUser);
router.post("/login", login);
router.get("/get-current-user", authMiddleware, getCurrentUser);
router.get("/get-users", authMiddleware, getAllUsers);
router.put("/update-user-status/:id", authMiddleware, updateUserStatus);

module.exports = router;
