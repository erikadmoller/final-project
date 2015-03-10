module.exports = {

  attributes: {
  	id: number,
  	type: { type: 'governor', 'representative', 'proposition', 'tax', 'mayor', 'councilman' },
  	choice: 'string', 
  	year: number,
  	userId: number
  }
};