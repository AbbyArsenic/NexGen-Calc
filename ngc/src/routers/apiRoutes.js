const axios = require("axios");
const router = require("express").Router();

router.get("/airport", (req, res) => {
  axios
    .get("http://avwx.rest/api/metar/KIWA?options=info")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
