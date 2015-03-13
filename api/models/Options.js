/**
* Test.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	race: { type: 'string', required: true },
  	candidate: { type: 'string', required: true },
  	year: { type: 'integer', required: true }

  }
};

