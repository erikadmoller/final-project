module.exports = {

  attributes: {
  	id: { type: 'integer', unique: false },
  	type: { type: 'string', required: false},
  	choice: { type: 'string', required: false }, 
  	year: { type: 'integer', required: false },
  	userId: { type: 'integer', unique: false }
  }
};