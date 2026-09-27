const multer = require("multer");

const upload = multer({ dest: "uploads/" })

app.post("/upload", upload.single("profile"), (req, res) => {
    console.log(req.file);
});