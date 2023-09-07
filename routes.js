const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    nama: "mkhotami",
    pesan: "berhasil",
  });
});

module.exports = router;
