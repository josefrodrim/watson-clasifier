'use strict';

var NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');
var fs     = require('fs');

var natural_language_classifier = new NaturalLanguageClassifierV1({
  username: '7c62e54b-3cb4-4f31-aa4d-3dc6727b607c',
  password: 'uLzonlISWCgb',
  version: 'v1'
});

// Creating a classifier
var params = {
  language: 'en',
  name: 'MyTutorialClassifierNode',
  training_data: fs.createReadStream('../resources/weather_data_train.csv')
};

natural_language_classifier.create(params, function(err, response) {
  if (err)
    console.log(err);
  else
    // Print classifier_id from the response
    console.log(JSON.stringify(response, null, 2));
});
