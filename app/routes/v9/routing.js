var version = '/v9/'

module.exports = function (router) {


// Which type of case question
router.post(version + 'case-type-answer', function (req, res) {
  if (req.session.data['case-type'] == "Civil certificated or licensed legal work")
    {
      res.redirect(version + 'which-type-of-case')
    } else {
      res.redirect(version + 'start-page')
    }
})

// Exceptional Case Funding (ECF) question
router.post(version + 'ecf-answer', function (req, res) {
  if (req.session.data['ecf'] == "Yes")
    {
      res.redirect(version + 'ineligible')
    } else {
      res.redirect(version + 'legal-aid-before')
    }
})

// Legal aid before question
router.post(version + 'legal-aid-before-answer', function (req, res) {
  if (req.session.data['legal-aid-before'] == "Yes, about the same matter")
    {
      res.redirect(version + 'legal-aid-before-2')
    } 
    else if (req.session.data['legal-aid-before'] == "Yes, about a different matter")
    {
      res.redirect(version + 'legal-aid-id')
    }
    else
    {
      res.redirect(version + 'client-details')
    }
})

// Means assessment required question
router.post(version + 'means-required-answer', function (req, res) {
  if (req.session.data['means-required'] == "No")
    {
      res.redirect(version + 'non-means')
    } else {
      res.redirect(version + 'check-answers-client-details')
    }
})

}
