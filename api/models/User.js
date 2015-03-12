var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: false },
    email     : { type: 'email',  unique: false },
    passports : { collection: 'Passport', via: 'user' },
    street: { type: 'string', required: true},
    apt: { type: 'string',  required: false },
    city: { type: 'string', required: true },
    state: { type: 'string', required: true },
    zipcode: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    name: { type: 'string', required: true },
    ssn: { type: 'string', required: true, unique: false }
  }
};

module.exports = User;

// Unique status was on username, email and ssn
