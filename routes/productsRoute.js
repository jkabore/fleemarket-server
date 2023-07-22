const router = require("express").Router();
const Product = require("../models/productModel");
const User = require("../models/userModel");
const cloudinary = require("../config/cloudinaryConfig");
const multer = require("multer");

const {
  addProduct,
  editProduct,
  deleteProduct,
  getProducts,
  updateProductStatus,
  getProductInfo,
} = require("../controllers/productsControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/get-product-by-id/:id", authMiddleware, getProductInfo);
router.post("/add-product", authMiddleware, addProduct);
router.post("/get-products", authMiddleware, getProducts);
router.put("/edit-product/:id", authMiddleware, editProduct);
router.delete("/delete-product/:id", authMiddleware, deleteProduct);
router.put("/update-product-status/:id", authMiddleware, updateProductStatus);

//====================================================================================//

// get image from pc

const multerStorage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

router.post(
  "/upload-image-to-product",
  authMiddleware,
  multer({ storage: multerStorage }).single("file"),
  async (req, res) => {
    try {
      // upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "nakia",
      });

      const productId = req.body.productId;
      await Product.findByIdAndUpdate(productId, {
        $push: { images: result.secure_url },
      });
      res.send({
        success: true,
        message: "Image uploaded successfully",
        data: result.secure_url,
      });
    } catch (error) {
      console.log("error", error);
      res.send({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = router;
