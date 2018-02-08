var friendData = require("../data/friend");



module.exports = function(app) {
 app.get("/api/friend", function(req, res) {
    res.json(friendData);
  });
}



