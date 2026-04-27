const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tauriainen97',
  database: 'harjoitus'
});

connection.connect((err) => {
  if (err) {
    console.error('Virhe yhdistettäessä:', err);
    return;
  }
  console.log('Yhdistetty MySQL:ään!');
});

module.exports = connection;