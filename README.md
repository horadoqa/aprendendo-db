# Curso de Banco de Dados

Uma trilha de estudos prática e progressiva sobre **Banco de Dados, SQL, NoSQL, MongoDB, Parquet e análise de dados**.

O projeto foi desenvolvido como um material didático em HTML, com uma página inicial que organiza as aulas e páginas individuais para cada assunto.

---

## Objetivo

O objetivo deste projeto é construir uma base sólida sobre bancos de dados, começando pelos conceitos fundamentais e avançando gradualmente para:

- Bancos de dados relacionais
- SQL
- Modelagem de dados
- NoSQL
- MongoDB
- CRUD
- Consultas e operadores
- Índices
- Aggregation Pipeline
- Grandes volumes de dados
- Parquet
- Armazenamento colunar
- DuckDB
- SQL analítico
- Window Functions

A proposta é **aprender os conceitos e colocá-los em prática**, evitando tratar banco de dados apenas como uma coleção de comandos para decorar.

---

# 🗺️ Trilha de estudos

O curso está dividido em quatro grandes etapas.

```text
Fundamentos
    │
    ├── Banco de Dados
    ├── SGBD
    ├── Aplicações
    └── Modelagem
         │
         ▼
SQL
    │
    ├── SELECT
    ├── WHERE
    ├── INSERT / UPDATE / DELETE
    ├── GROUP BY
    ├── Agregações
    └── JOIN
         │
         ▼
NoSQL
    │
    ├── MongoDB
    ├── Documentos
    ├── CRUD
    ├── Consultas
    ├── Índices
    └── Aggregation Pipeline
         │
         ▼
Dados Analíticos
    │
    ├── Parquet
    ├── Armazenamento Colunar
    ├── DuckDB
    ├── SQL Analítico
    └── Window Functions
```

---

 # Aulas

 ## Fundamentos

 ### Aula 01 — O que é um Banco de Dados?

 Introdução aos conceitos fundamentais de banco de dados.

- Banco de dados
- SGBD
- Aplicação
- SQL
- Dados e informações

---

 ### Aula 02 — Banco de Dados, SGBD e Aplicação

 Diferenciação entre os principais componentes de um sistema.

```
Aplicação
    │
    ▼
SGBD
    │
    ▼
Banco de Dados
```

---

 ### Aula 03 — Introdução aos Bancos Relacionais

 Conceitos fundamentais dos bancos relacionais.

 - Tabelas
- Linhas
- Colunas
- Registros
- Relacionamentos

---

 ### Aula 04 — Introdução à Modelagem de Dados

 Introdução à modelagem de dados e representação das informações.

 - Entidades
- Atributos
- Relacionamentos
- Estrutura dos dados

---

 ### Aula 05 — Modelagem e Relacionamentos

 Aprofundamento em relacionamentos entre entidades.

 - 1:1
- 1:N
- N:N

---

 ### Aula 06 — Chaves e Integridade

 Conceitos importantes para manter os dados consistentes.

 - Chave primária
- Chave estrangeira
- Integridade referencial
- Restrições

---

 # 🗃️ SQL

 ## Aula 07 — Introdução ao SQL

 Introdução à linguagem SQL e sua utilização para trabalhar com dados.

---

 ## Aula 08 — SELECT

 Como consultar informações utilizando `SELECT`.

```
SELECT *
FROM clientes;
```

---

 ## Aula 09 — WHERE

 Filtrando registros.

```
SELECT *
FROM clientes
WHERE cidade = 'Rio de Janeiro';
```

---

 ## Aula 10 — INSERT, UPDATE e DELETE

 Operações básicas de manipulação de dados.

 - `INSERT`
- `UPDATE`
- `DELETE`

---

 ## Aula 11 — ORDER BY e LIMIT

 Ordenação e limitação dos resultados.

```
SELECT *
FROM produtos
ORDER BY preco DESC
LIMIT 10;
```

---

 ## Aula 12 — GROUP BY

 Agrupando informações para realizar análises.

```
SELECT categoria, COUNT(*)
FROM produtos
GROUP BY categoria;
```

---

 ## Aula 13 — Funções de Agregação

 Principais funções de agregação.

 - `COUNT`
- `SUM`
- `AVG`
- `MIN`
- `MAX`

---

 ## Aula 14 — JOIN

 Combinando informações provenientes de diferentes tabelas.

```
SELECT
    clientes.nome,
    pedidos.valor
FROM clientes
JOIN pedidos
    ON pedidos.cliente_id = clientes.id;
```

---

 ## Aula 15 — Encerramento do SQL

 Revisão dos principais conceitos de SQL e preparação para o estudo de bancos NoSQL.

---

 # 🍃 NoSQL

 ## Aula 16 — Introdução ao NoSQL

 Introdução aos bancos de dados não relacionais.

 - O que é NoSQL
- Modelos NoSQL
- Características
- Quando utilizar

---

 ## Aula 17 — MongoDB

 Introdução ao MongoDB e ao modelo orientado a documentos.

---

 ## Aula 18 — Documentos e Collections

 Estrutura básica do MongoDB.

```
Database
   │
   └── Collection
          │
          ├── Document
          ├── Document
          └── Document
```

---

 ## Aula 19 — CRUD no MongoDB

 Operações básicas:

 - Create
- Read
- Update
- Delete

---

 ## Aula 20 — Consultas no MongoDB

 Consultando documentos e aplicando filtros.

---

 ## Aula 21 — Operadores

 Principais operadores de consulta e operadores lógicos.

---

 ## Aula 22 — Arrays e Objetos

 Trabalhando com estruturas aninhadas em documentos.

---

 ## Aula 23 — Índices no MongoDB

 Como índices podem melhorar o desempenho das consultas.

---

 ## Aula 24 — Aggregation

 Introdução à agregação de documentos.

---

 ## Aula 25 — Aggregation Pipeline

 Construção de pipelines para transformação e análise dos dados.

---

 ## Aula 26 — Aggregation Pipeline na prática

 Aplicação prática de pipelines utilizando diferentes etapas de processamento.

 Exemplo conceitual:

```
Documentos
    │
    ▼
$match
    │
    ▼
$group
    │
    ▼
$sort
    │
    ▼
$resultado
```

---

 ## Aula 27 — Performance no MongoDB

 Conceitos relacionados à performance e otimização de consultas.

---

 ## Aula 28 — Modelagem NoSQL

 Estratégias para modelar dados em bancos orientados a documentos.

---

 ## Aula 29 — MongoDB na prática

 Aplicação dos conceitos estudados em um cenário próximo de uma aplicação real.

---

 ## Aula 30 — Consultas Avançadas

 Consultas mais complexas e técnicas de análise de dados.

---

 ## Aula 31 — NoSQL e Grandes Volumes

 Introdução aos desafios relacionados ao processamento de grandes quantidades de documentos.

---

 # 🟦 Parquet e Dados Analíticos

 ## Aula 32 — Introdução ao Parquet

 Introdução ao formato Parquet e sua utilização em cenários de análise de grandes volumes de dados.

 > **Importante:** Parquet não é um banco de dados.\
>  É um **formato de arquivo colunar** utilizado para armazenar dados.

---

 ## Aula 33 — Armazenamento Colunar

 Entendendo como o armazenamento colunar funciona e por que ele pode ser eficiente para workloads analíticos.

 Comparação conceitual:

```
Formato orientado a linhas

Linha 1 → A B C D
Linha 2 → A B C D
Linha 3 → A B C D

Formato orientado a colunas

Coluna A → A A A
Coluna B → B B B
Coluna C → C C C
Coluna D → D D D
```

---

 ## Aula 34 — Parquet + DuckDB

 Utilização do DuckDB para consultar arquivos Parquet utilizando SQL.

 Exemplo:

```
SELECT *
FROM 'vendas.parquet';
```

 O DuckDB permite realizar consultas analíticas diretamente sobre arquivos de dados.

---

 ## Aula 35 — Window Functions e Projeto Final

 Encerramento da trilha com:

 - Window Functions
- `ROW_NUMBER`
- `RANK`
- `SUM() OVER`
- `AVG() OVER`
- `LAG`
- `LEAD`
- `PARTITION BY`
- Window Frames
- SQL analítico

 Também é proposto um projeto final utilizando:

```
Parquet
   +
DuckDB
   +
SQL
   +
Window Functions
   =
Análise de dados
```

---

 # 🧠 Conceitos importantes

 Durante o curso, algumas distinções são fundamentais.

 ### Banco de Dados

 É o conjunto organizado de dados que uma aplicação precisa armazenar e consultar.

 ### SGBD

 É o software responsável por gerenciar bancos de dados.

 Exemplos:

 - PostgreSQL
- MySQL
- MongoDB
- DuckDB

 ### SQL

 É uma linguagem utilizada para consultar e manipular dados em sistemas que suportam SQL.

 ### NoSQL

 É um termo utilizado para uma família de bancos de dados que utilizam modelos diferentes do modelo relacional tradicional.

 ### MongoDB

 É um SGBD orientado a documentos.

 ### Parquet

 É um formato de arquivo colunar voltado especialmente para armazenamento e processamento analítico.

 ### DuckDB

 É um SGBD analítico que pode consultar arquivos como Parquet utilizando SQL.

---

 # 🛠️ Tecnologias utilizadas

 O projeto utiliza principalmente:

 - HTML5
- CSS3
- JavaScript
- SQL
- MongoDB
- Parquet
- DuckDB

---

 # 🎨 Interface

 As páginas possuem:

 - 🌙 Modo escuro
- ☀️ Modo claro
- 📱 Layout responsivo
- 🃏 Cards para organização das aulas
- 📊 Tabelas
- 💻 Blocos de código
- 🔗 Navegação entre as aulas

---

 # 📁 Estrutura do projeto

 Uma possível organização:

```
curso-banco-de-dados/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── 1.html
├── 2.html
├── 3.html
├── ...
├── 35.html
│
└── assets/
    │
    └── images/
        └── logo.png
```

---

 # 🚀 Como executar

 Como o projeto é composto por páginas HTML, CSS e JavaScript, não é necessário instalar um servidor para começar.

 Basta clonar o projeto:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

 Entrar na pasta:

```
cd seu-repositorio
```

 E abrir:

```
index.html
```

 no navegador.

 Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code.

---

 # 📌 Pré-requisitos

 Para visualizar o material:

 - Navegador moderno
- Editor de código recomendado: Visual Studio Code

 Para acompanhar os exemplos práticos de SQL, NoSQL e DuckDB, algumas aulas podem exigir ferramentas adicionais.

---

 # 🎓 Objetivo de aprendizagem

 Ao finalizar a trilha, a pessoa deverá compreender os principais conceitos relacionados a:

```
Banco de Dados
      │
      ├── Relacional
      │      │
      │      └── SQL
      │
      ├── NoSQL
      │      │
      │      └── MongoDB
      │
      └── Dados Analíticos
             │
             ├── Parquet
             │
             └── DuckDB
```

 Além disso, deverá ser capaz de escrever consultas, entender diferentes modelos de dados e analisar informações utilizando SQL.

---

 # 🏆 Projeto final

 O projeto final propõe trabalhar com um conjunto de dados de vendas armazenado em Parquet.

 A ideia é utilizar DuckDB e SQL para responder perguntas como:

 - Qual o faturamento total?
- Qual o faturamento por categoria?
- Quais produtos venderam mais?
- Quais clientes gastaram mais?
- Qual cidade possui maior faturamento?
- Qual é o faturamento acumulado?
- Qual foi a evolução das vendas?
- Qual é a média móvel?
- Qual a posição de cada produto dentro de sua categoria?

 O objetivo é transformar dados brutos em informações úteis para análise.

---

 # 📈 Próximos passos

 Depois de concluir esta trilha, alguns caminhos naturais de estudo são:

 ### Engenharia de Dados

 - ETL
- ELT
- Data Lake
- Data Warehouse
- Pipelines
- Orquestração
- Apache Spark
- Cloud

 ### Data Analytics

 - Power BI
- Metabase
- Apache Superset
- Dashboards
- KPIs
- Métricas

 ### Data Science

 - Python
- Pandas
- NumPy
- Estatística
- Machine Learning

 ### Big Data

 - Apache Spark
- Processamento distribuído
- Data Lakes
- Cloud
- Arquiteturas de dados

---

 # 📚 Filosofia do projeto

 A proposta deste curso é aprender **do conceito para a prática**.

 Não basta decorar:

```
SELECT
FROM
WHERE
```

 É importante entender:

 > **Qual problema estou tentando resolver com os dados?**

 Da mesma forma, não basta conhecer MongoDB ou Parquet. É necessário compreender **quando cada tecnologia faz sentido e quais problemas ela ajuda a resolver**.

---

 # 📄 Licença

 Este projeto pode ser utilizado para fins de estudo e aprendizado.

---

 ## 🚀 Bons estudos!

 > Aprender banco de dados é aprender a organizar, consultar,\
>  transformar e interpretar dados.

 **Banco de Dados • SQL • NoSQL • MongoDB • Parquet • DuckDB**

```
:::
```