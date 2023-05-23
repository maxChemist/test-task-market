class Controller {
  async get(req, res) {
    try {
      res.send("Server work");
    } catch (err) {}
  }
}
module.exports = new Controller();
