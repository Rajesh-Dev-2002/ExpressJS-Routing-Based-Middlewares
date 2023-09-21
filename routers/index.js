const router = require("express").Router();

const apiKeyMiddleware = require("../middlewares/apikeys");
router.get("/", (req, res) => {
  res.render("index", {
    title: "My  home page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My about page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

router.get("/api/products", apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: "1234",
      name: "Tony Stark",
    },
    {
      id: "12345",
      name: "Black Panther",  
    },
  ]);
});

module.exports = router;
