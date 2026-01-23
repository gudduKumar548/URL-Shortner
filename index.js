const express = require("express");
const urlRoute = require("./routes/router");
const { connectMongoDb } = require("./connection/connection");
const URL = require("./model/url");

const app = express();
const port = 8001;

connectMongoDb("mongodb://127.0.0.1:27017/URL-shortner")
    .then(() => { console.log("mongo connected") })
    .catch((err) => { console.log("mongo err", err) })

//middleware
app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).json({ msg: "Short URL not found" });
    }

    return res.redirect(entry.redirectURL);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

app.listen(port, () => {
    console.log("server started");
})