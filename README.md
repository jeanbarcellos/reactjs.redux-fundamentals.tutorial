Repositório somente para estudos!

## Tutorial: Fundamentals


Links:
* https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

### Iniciando o aplicativo de exemplo Todo

**Definição de requisitos**

Vamos começar descobrindo os requisitos de negócios iniciais para este aplicativo:

- A IU deve consistir em três seções principais:
    - Uma caixa de entrada para permitir que o usuário digite o texto de um novo item de tarefa
    - Uma lista de todos os itens de tarefas existentes
    - Uma seção de rodapé que mostra o número de tarefas não concluídas e mostra opções de filtragem
- Os itens da lista de tarefas devem ter uma caixa de seleção que alterna seu status de "concluído". Devemos também ser capazes de adicionar uma tag de categoria codificada por cores para uma lista predefinida de cores e excluir itens de tarefas.
- O contador deve pluralizar o número de todos ativos: "0 itens", "1 item", "3 itens", etc.
- Deve haver botões para marcar todas as tarefas como concluídas e para limpar todas as tarefas concluídas removendo-as
- Deve haver duas maneiras de filtrar as pendências exibidas na lista:
    - Filtragem baseada na exibição de "Todos", "Ativos" e "Concluídos" todos
    - Filtrar com base na seleção de uma ou mais cores e mostrar todos os cujas marcas correspondem a essas cores