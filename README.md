# Aplicativo de Controle de Candidatos

Este é um aplicativo para controlar o processo de contratação de candidatos. Ele consiste em um front-end Angular e um back-end Spring Boot.

![image](https://github.com/naylima/controle_rh/assets/103192779/3b1ed608-d532-466f-9265-a8b00ebad3d4)


## Configuração do Front-end

Siga estas etapas para configurar e executar o front-end:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em https://nodejs.org.

2. Clone este repositório para o seu ambiente local.

3. Navegue até o diretório do front-end:

   ```
   cd front-end
   ```

4. Instale as dependências do projeto:

   ```
   npm install
   ```

5. Configure o arquivo `src/environments/environment.ts` com a URL base da API fornecida pelo back-end. Certifique-se de que a URL esteja correta para se conectar ao back-end.

6. Inicie o servidor de desenvolvimento:

   ```
   ng serve
   ```

7. Abra o navegador e acesse `http://localhost:4200` para ver o aplicativo em execução.

## Configuração do Back-end

Siga estas etapas para configurar e executar o back-end:

1. Certifique-se de ter o Java Development Kit (JDK) instalado em sua máquina. Você pode baixá-lo em https://www.oracle.com/java/technologies/javase-jdk11-downloads.html.

2. Clone este repositório para o seu ambiente local.

3. Navegue até o diretório do back-end:

   ```
   cd back-end
   ```

4. Importe o projeto em sua IDE de desenvolvimento como um projeto Maven existente.

5. Inicie o aplicativo em sua IDE de desenvolvimento ou execute o seguinte comando na linha de comando:

   ```
   mvn spring-boot:run
   ```

6. O back-end será executado na porta 8080.

## Utilizando o Aplicativo

Após configurar e executar o front-end e o back-end, você pode utilizar o aplicativo de controle de candidatos seguindo as seguintes etapas:

1. Abra o navegador e acesse `http://localhost:4200` para abrir o aplicativo.

2. Utilize as seguintes solicitações cURL para interagir com o back-end:

   - Registrar um candidato:
   
     ```
     curl --location --request POST 'http://localhost:8080/api/v1/hiring/start' \
     --header 'Content-Type: application/json' \
     --data-raw '{
       "nome": "Fulano de tal"
     }'
     ```
     
     Resposta:
     
     ```
     201 Created
     ID do candidato: 1
     ```

   - Agendar uma entrevista para um candidato:
   
     ```
     curl --location --request POST 'http://localhost:8080/api/v1/hiring/schedule' \
     --header 'Content-Type: application/json' \
     --data-raw '{
       "codCandidato": 1
     }'
     ```
     
     Resposta:
     
     ```
     200 OK
     Candidato agendado com sucesso!
     ```

   - Desqualificar um candidato:
   
     ```
     curl --location --request POST 'http://localhost:8080/api/v1/hiring/disqualify' \
     --header 'Content-Type: application/json' \
     --data-raw '{
       "codCandidato": 1
     }'
     ```
     
     Resposta:
     
     ```
     200 OK
     Candidato desqualificado com sucesso!
     ```

   - Aprovar um candidato:
   
     ```
     curl --location --request POST 'http://localhost:8080/api/v1/hiring/approve' \
     --header 'Content-Type: application/json' \
     --data-raw '{
       "codCandidato": 1
     }'
     ```
     
     Resposta:
     
     ```
     200 OK
     Candidato aprovado com sucesso!
     ```

   - Verificar o status de um candidato:
   
     ```
     curl --location --request GET 'http://localhost:8080/api/v1/hiring/status/candidate/1'
     ```
     
     Resposta:
     
     ```
     200 OK
     Status do candidato: APROVADO
     ```

   - Obter a lista de candidatos aprovados:
   
     ```
     curl --location --request GET 'http://localhost:8080/api/v1/hiring/approved'
     ```
     
     Resposta:
     
     ```
     200 OK
     Lista de candidatos aprovados: [ "Fulano de Tal", "Ciclano de Tal" ]
     ```

Certifique-se de que o back-end esteja em execução e que as URLs fornecidas no front-end estejam corretas para se comunicar adequadamente com o back-end.
