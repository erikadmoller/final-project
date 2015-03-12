var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    userId: { type: 'integer', unique: true },
    street: { type: 'string', required: true},
    apt: { type: 'integer',  required: false },
    city: { type: 'string', required: true },
    state: { type: 'string', required: true },
    zipcode: { type: 'integer', required: true },
    phone: { type: 'integer', required: true },
    name: { type: 'string', required: true },
    ssn: { type: 'integer', required: true, unique: true },
    email: { type: 'email', required: true, unique: true }
  }
};

module.exports = User;
