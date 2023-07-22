const router = require("express").Router();
const { getNotifications,readAllNotifs,postNotification,deleteNotification} = require("../controllers/notificationsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.delete("/delete-notification/:id", authMiddleware, deleteNotification);
router.put("/read-all-notifications", authMiddleware, readAllNotifs);
router.post("/notify", authMiddleware, postNotification);
router.get("/get-all-notifications", authMiddleware, getNotifications);

module.exports = router;
