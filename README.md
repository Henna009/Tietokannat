## Tietokannan luonti (SQL)

```sql
CREATE DATABASE harjoitus;
USE harjoitus;

CREATE TABLE book (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255)
);

INSERT INTO book (title, author)
VALUES ('Clean Code', 'Robert C. Martin');

CREATE TABLE car (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(255),
  model VARCHAR(255)
);

INSERT INTO car (brand, model)
VALUES 
  ('Toyota', 'Corolla'),
  ('Volkswagen', 'Passat');
```
