"use strict";

const mongoose = require('mongoose');

// primero definimos un esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    index: true,
    unique: true
  },
  dateoFBirth: Date
});

// creamos un método estático
agenteSchema.statics.list = function(filter, limit, skip, fields, sort, callback) {
  const query = Agente.find(filter);
  query.limit(limit);
  query.skip(skip);
  query.select(fields); // { nombredecampo: 1, campoquenoquiero: 0 }
  query.sort(sort);
  query.exec(callback);
};

// luego creamos el modelo
var Agente = mongoose.model('Agente', agenteSchema);

// Realmente no es necesario exportarlo, ya que en otrs sitios
// podriamos recuperar el modelo usando:
// mongoose.model('Agente')
module.exports = Agente;
