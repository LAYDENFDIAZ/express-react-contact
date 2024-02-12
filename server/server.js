const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.static(
    path.join(__dirname, "..", "client/express-react-contact", "dist")
  )
);
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  res.sendStatus(200);
});

// Serve index.html for all routes
app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "client/express-react-contact",
      "dist",
      "index.html"
    )
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
