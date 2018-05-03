const {Songs} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Songs.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        // email exists
        error: 'Error occurred trying to fetch the songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const songs = await Songs.create(req.body)
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        // email exists
        error: 'Error occurred trying to create the song.'
      })
    }
  }
}
