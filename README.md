## Requisitos

### Funcionais

#### 1. Ver todas as tarefas
- **Rota:** `GET /tarefas`
- **Descrição:** Retorna todas as tarefas no formato JSON.

#### 2. Adicionar uma nova tarefa
- **Rota:** `POST /tarefas`
- **Descrição:** Adiciona uma nova tarefa à lista. Cada tarefa deve conter:
  - `id`: um identificador único (número ou string).
  - `nome`: o nome da tarefa (string).
  - `status`: um booleano que indica se a tarefa está concluída (false por padrão).
- **Validação:** Verificar se já existe uma tarefa com o mesmo nome. Em caso afirmativo, retornar um erro.

#### 3. Atualizar uma tarefa existente
- **Rota:** `PUT /tarefas/:id`
- **Descrição:** Atualiza uma tarefa existente com base no `id`, permitindo modificar o `nome` e o `status`.
- **Validação:** Não permite a atualização de uma tarefa com um nome que já exista em outra tarefa.

#### 4. Excluir uma tarefa
- **Rota:** `DELETE /tarefas/:id`
- **Descrição:** Remove uma tarefa da lista com base no `id`.

#### 5. Filtrar tarefas por status
- **Rota:** `GET /tarefas?status=true` ou `GET /tarefas?status=false`
- **Descrição:** Filtra as tarefas de acordo com o status (Verdadeiro ou Falso).

#### 6. Criar uma interface Frontend
- **Descrição:** Deve ser criado uma interface simples no Frontend para integrar a API de gerenciamento de tarefas. A interface deve permitir ao usuário adicionar, visualizar, atualizar e excluir tarefas.

### Não Funcional
- **Uso Obrigatório do Express.js:** A API deve ser desenvolvida utilizando obrigatoriamente o framework Express.js.



## Como Executar a API

Para executar o projeto, siga os passos abaixo:

1. **Instalação das Dependências:**
   - Abra o terminal na pasta do projeto.
   - Execute o comando abaixo para instalar todas as dependências necessárias:
     ```bash
     npm install
     ```

2. **Execução do Servidor:**
   - Após a instalação das dependências, execute o seguinte comando para iniciar o servidor:
     ```bash
     npm run dev
     ```

3. **Acessando a API:**
   - A API estará disponível em `http://localhost:3333/tarefas` ou na porta que você especificar no seu código. Você pode usar ferramentas como Postman ou Insomnia, ou até mesmo o navegador, para testar as rotas.
