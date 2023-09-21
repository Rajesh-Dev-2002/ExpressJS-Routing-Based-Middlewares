function apiKey(req, res, next) {
  const api_key = "1234567";
  
const userApikey = req.query.api_key; 
  if (userApikey && (userApikey === api_key)) {
    next();
  } else {
    res.json({ message: "Not Allowed Here" });
  }
}

module.exports = apiKey;
