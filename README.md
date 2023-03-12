# Trabalho Fiap Serverless

Neste repositório você encontra os códigos de uma função lambda para demonstração.

Este código foi criado para o trabalho final da disciplina de SERVERLESS ARCHITECTURE, com o professor RAFAEL TSUJI MATSUYAMA

### Esta função retorna:
As estatísticas de uso do Lambda através da função `lambda.getAccountSettings()` e retorna o objeto:
```json
{
  "TotalCodeSize": 1007,
  "FunctionCount": 1
}

E, por fim, essa função salva essas mesmas informações em um banco de dados postgres SQL
```

### O Objetivo é demonstrar:
- Fazer uma função que rode no aws lambda e zipa-la para a mesma funcionalidade;
- Criar um banco de dados com as permissões necessarias e utilizar para salvar as infos adquiridas pela função;
- Colocar logs para satisfazer as necessidades de observability do projeto e manter o tracking de todas as ações dos usuários;

### Estrutura
- `FinalTrabalhoServerless/index.js`: Contém a função Lambda a ser executada
- `FinalTrabalhoServerless/package.json`: Arquivo de dependências do nodejs
- `FinalTrabalhoServerless/node_modules`: Todas as dependencias em formato de pasta que o node precisou importar pra dentro do projeto
- `FinalTrabalhoServerless/index.zip`: Versão zipada para upload na aws

### Empacotamento da função
Esta função utiliza pacotes como `aws-sdk` e `pg`, por isso é necessário o empacotamento e subida dos arquivos na aws, junto ao `node_modules`

Caso queira fazer alterações no código e quiser subir na aws é necessário alterar o arquivo `FinalTrabalhoServerless/index.js`, apagar o arquivo `FinalTrabalhoServerless/index.zip` e selecionar os arquivos `FinalTrabalhoServerless/index.js`, `FinalTrabalhoServerless/package.json`, `FinalTrabalhoServerless/node_modules`, `FinalTrabalhoServerless/package-lock.json`, clicar com o botao direito em cima de algum deles e clicar em compactar para arquivo zip

### Tutorial
Para seguir o passo-a-passo, acesse o [TUTORIAL](FinalTrabalhoServerless/docs/TUTORIAL.md)

