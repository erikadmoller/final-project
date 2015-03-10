var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    userId: { type: number, unique: true },
    street: { type: 'string', required: true},
    apt: { type: number,  required: true },
    city: { type: 'string', required: true }
    state: { type: 'string', required: true }
    zipcode: { type: number, required: true }
    phone: { type: number, required: true }
    name: { type: 'string', required: true }
    ssn: { type: number, required: true, unique: true }
    email: { type: 'email', required: true, unique: true }
  }
};

module.exports = User;
