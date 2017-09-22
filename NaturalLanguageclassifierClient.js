'use strict';

var NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');
var fs     = require('fs');

var natural_language_classifier = new NaturalLanguageClassifierV1({
  username: '0ada6ee5-7405-421c-8401-4e6f484180f8',
  password: '8kOfFIB7EqO1',
  version: 'v1'
});

var classifierId = '6a25a7x216-nlc-11691';
var sentenceToClassify = 'error en mi comision por tarjeta de credito';

//Get the classification of a sentence after evaluate with API
natural_language_classifier.classify({
  text: sentenceToClassify ,
  classifier_id: classifierId },
  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
