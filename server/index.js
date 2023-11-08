//CLI: npm install express body-parser --save
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
// middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// api
app.get("/api/getFeed", (req, res) => {
  axios
    .get(
      "https://graph.facebook.com/v18.0/me?fields=id%2Cname%2Cfeed%7Bmessage%2Ccreated_time%2Cfull_picture%7D&access_token=EABjXjzhks4YBO2zqI8Xo9EeTXSKxi6KcycavzjmAAzmuaGUmDXiYAm06K3ZA96OtxscdnWcFoTKq4ofiIPgGevcjtcTgdDf7YwoVl5dZBNiXk2wtrqZC30ZC0q44Sb1LNbiODTNzQdfZBgvAfKPkAwZAYkB1dgZCKvbsnNzh9aZCap7YiAtLr18btlhEApbW6PJZBXRXYHRZCku95lIhYZD"
    )
    .then((response) => {
      const data = response.data;
      res.json(data);
    });
});
// deployment
const path = require("path");
// '/admin' serve the files at client-admin/build/* as static files
// app.use('/admin', express.static(path.resolve(__dirname, '../client-admin/build')));
// app.get('admin/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client-admin/build', 'index.html'))
// });
// '/' serve the files at client-customer/build/* as static files
app.use(
  "/",
  express.static(path.resolve(__dirname, "../client/customer/build"))
);
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../client/customer/build", "index.html")
  );
});
