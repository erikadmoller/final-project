/**
* Test.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id: number,
  	state: { type: 'governor', 'representative' },
  	county: { type: 'proposition1', 'tax' },
  	city: { type: 'mayor', 'councilman' },
  	year: number

  }
};

