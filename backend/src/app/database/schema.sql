CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
  id UUID not null unique default uuid_generate_v4(),
  name varchar not null
);

CREATE TABLE IF NOT EXISTS contacts(
  id UUID not null unique default uuid_generate_v4(),
  name varchar not null,
  email varchar unique,
  phone varchar not null,
  sex varchar not null,
  age int not null,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)

);
