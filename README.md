Projeto que implementa os padrões do SOLID

Separação em camadas: 
 * entidades (entities)
 * repositorios (repositories)
 * casos de uso (useCases)
 * serviços externos (providers)
 
 Na camada de caso de uso tem 5 arquivos:
  * O caso de uso
  * O DTO de dados que o controller passa ao caso de uso
  * O controller
  * O teste do caso de uso
  * Arquivo index que faz a injeção das dependências
  

Comandos:
   npm i
   npm start
   
Principais dependências:
 - typescript
 - nodemailer
 - express
 - uuidv4
 - ts-node-dev
