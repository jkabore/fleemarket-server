const router = require("express").Router();
const { getAllBids, placeNewBid } = require("../controllers/bidsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/get-all-bids", authMiddleware, getAllBids);
router.post("/place-new-bid", authMiddleware, placeNewBid);

module.exports = router;
