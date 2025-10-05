var version = '/v8/'

module.exports = function (router) {

// Exceptional Case Funding (ECF) question
router.post(version + 'ecf-answer', function (req, res) {
  if (req.session.data['ecf'] == "Yes"){
      res.redirect(version + 'ineligible')
  } else {
      res.redirect(version + 'legal-aid-before')
  }
})


}
