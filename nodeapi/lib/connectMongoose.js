"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;

// Le decimos a mongoose que libreria de promesas vamos a usar
mongoose.Promise = global.Promise;

conn.on('error', err => {
  console.log('Error de conexión', err);
  process.exit(1);
});

conn.once('open', () => {
  console.log('Conectado a MongoDB.');
});

mongoose.connect('mongodb://localhost/cursonode');

// no necesito exportar nada, ya que mongoose se
// guarda la conexión internamente