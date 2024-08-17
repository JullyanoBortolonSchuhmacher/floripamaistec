-- EXERCICIO EM AULA
-- criando a tabela de vacina
create table vacinas (
	id serial primary key,
  nome varchar (30) not null,
  descricao varchar (200) not null,
  dose int not null
);

--livraria database
CREATE DATABASE livraria;


--tabela livraria 
CREATE TABLE instrumentos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  situacao VARCHAR(50)
);
