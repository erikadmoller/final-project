module.exports = {

  attributes: {
  	id: { type: 'integer', unique: true },
  	type: { type: 'string', required: true},
  	choice: { type: 'string', required: true }, 
  	year: { type: 'integer', required: true },
  	userId: { type: 'integer', unique: true }
  }
};