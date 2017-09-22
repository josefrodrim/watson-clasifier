'use strict';

var NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');
var fs     = require('fs');

var natural_language_classifier = new NaturalLanguageClassifierV1({
  username: '7c62e54b-3cb4-4f31-aa4d-3dc6727b607c',
  password: 'uLzonlISWCgb',
  version: 'v1'
});

var classifierId = '6a25a7x216-nlc-11691';

// Verify status of the classifier
natural_language_classifier.status({
  classifier_id: classifierId },
  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
