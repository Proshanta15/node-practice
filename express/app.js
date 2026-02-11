import express from "express";
import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>My user name is: ${req.params.username}</h1>`);

  //   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  //   res.sendFile(homePagePath);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formatedSlug = req.params.slug.replace(/-/g, " ");
  res.send(`<h1>Article ${req.params.username} by ${formatedSlug}</h1>`);

  //   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
  //   res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
