-- exercicio 01

-- criando a tabela
create table categorias (
    categoria_id serial primary key,
    nome_categoria varchar(50) not null
);

-- colocando coluna
alter table produtos
add column categoria_id int;

-- criando a chave estrangeira referindo categorias
alter table produtos
add constraint fk_categoria
foreign key (categoria_id)
references categorias(categoria_id);

-- excluindo a tabela
drop table categorias cascade;

-- exercicio 02 ____________________________________________

-- colocando novo cliente
insert into clientes (nome, cidade, idade)
values ('Lucas Lima', 'Salvador', 29);

-- mudando a cidade do cliente com o id 3 
update clientes
set cidade = 'Fortaleza'
where cliente_id = 3;

-- Deletando pedidos menor que 150
delete from pedidos
where valor < 150.00;

-- exercicio 03 ______________________________________________
-- lista os cliente de São Paulo
select *
from clientes
where cidade = 'São Paulo';

-- lista de forma decrescente 
select *
from pedidos
order by data_pedido desc

-- filtra de acordo com a idade
select *
from clientes where idade between 25 and 35

-- exercicio 04 ______________________________________________
-- busca os clientes que o nome começa com A
select *
from clientes
where nome like 'A%'

-- calcula o valor de pedidos para cada cliente
select clientes.cliente_id,  clientes.nome,  sum(pedidos.valor) as total_pedidos
from clientes
join pedidos on clientes.cliente_id = pedidos.cliente_id
group by clientes.cliente_id, clientes.nome

-- exercicio 05 ______________________________________________
--lista os pedidos e clientes
select *
from pedidos
inner join clientes on pedidos.cliente_id = clientes.cliente_id;

-- consulta todos os pedidos até quem não fez
select *
from clientes
left join pedidos on clientes.cliente_id = pedidos.cliente_id;

-- consulta os produtos e pedidos até os que não foram pedido
select *
from produtos 
right join itens_pedidos on produtos.produto_id = itens_pedidos.produto_id

-- union para combinar duas consultas
-- retorna cliente de São Paulo
(select * from clientes where cidade = 'São Paulo')
union
-- retorna cliente do Rio de Janeiro
(select * from clientes where cidade = 'Rio de Janeiro')

-- exercicio 06 ______________________________________________
--encontra o total em cada mês
select
  DATE_TRUNC('month', pedidos.data_pedido) as mes,
  SUM(itens_pedidos.quantidade) as total_itens

from pedidos
join itens_pedidos on pedidos.pedido_id = itens_pedidos.pedido_id
group by mes
order by mes;

-- lista os clientes sem pedidos
select *
from clientes
left join pedidos on clientes.cliente_id = pedidos.cliente_id
where pedidos.pedido_id is null

-- encontra o pedido mais caro
select *
from pedidos
order by valor desc
limit 1 -- limita a 1

-- busca o total de pedido por produto
select 
  produtos.produto_id,
  produtos.nome_produto,
  coalesce(sum(itens_pedidos.quantidade), 0) as total_itens_pedidos

from produtos
left join itens_pedidos on produtos.produto_id = itens_pedidos.produto_id
group by 
  produtos.produto_id,
  produtos.nome_produto
order by produtos.produto_id;

--calcula a soma do valor dos pedidos por cliente que fez mais que 1 pedido
select
  pedidos.cliente_id,
  clientes.nome,
  count(pedidos.pedido_id) as total_pedidos,
  sum(pedidos.valor) as total_valor_pedidos
from pedidos
join clientes on pedidos.cliente_id = clientes.cliente_id
group by 
  pedidos.cliente_id,
  clientes.nome

having count(pedidos.pedido_id) > 1

--encontra a media de produto por categoria
select 
  categoria_id,
  avg(preco) as preco_medio

from produtos
group by categoria_id;

-- Encontra o cliente que pediu o mais caro
select 
  clientes.cliente_id,
  clientes.nome,
  pedidos.valor as maior_valor_pedido

from clientes
join pedidos on clientes.cliente_id = pedidos.cliente_id
order by pedidos.valor desc
limit 1

-- exercicio 07 ______________________________________________

-- Função Agregada
-- Pega a média de idade por cliente que o pedido é >= (maior ou igual) a 300
select avg(idade) as media_idade
from clientes
where 
  exists (
    select 1
    from pedidos
    where pedidos.cliente_id = clientes.cliente_id
    group by cliente_id
    having sum(valor) > 300.00
  );

-- Subconsulta
-- Inserido dados pra teste
insert into itens_pedidos (pedido_id, produto_id, quantidade) values
(2, 1, 2),  -- Produto A
(3, 2, 1);  -- Produto B

--Lista os produtos que foram pedidos novamente
select *
from produtos
where
  produto_id in (
    select 
      produto_id
    from 
      itens_pedidos
    group by 
      produto_id
    having 
      count(*) > 1
  );
