# node-posgres-violet-api
The backend API for our project Ivory that deployed a postgreSQL database and a database API to Heroku 

## Set up the database locally
Make sure you have psql installed. Open a terminal and navigate to the root directory of this repository. In the terminal, type:
```psql
psql postgres
```
Now create required tables:
```psql
postgres=# \i create.sql
```
Now import sample data:
```psql
postgres=# \i data.sql
```

## Set up the app
Create a .env file. Populate the file with the following content:
```config
DB_USER = 
DB_PASSWORD = 
DB_HOST = 
DB_PORT = 
DB_DATABSE = 
NODE_ENV = 
DATABASE_URL = # only for database that are not hosted locally
```

## Run the app
To run the app, open up a terminal and navigate to the root directory of this repository. In the terminal, type:
```
npm install
```
After npm finishes install all dependencies, type:
```
node index.js
```
Now you can access the endpoints from http://localhost:3002
## Endpoints

**Methods** | **Urls** | **Actions**
--- | --- | ---|
POST | /account | Add new account
POST | /orders | Add a new order
PUT | /orders | Close an existing order
GET | /account | Get all existing accounts
GET | /item | Get all items
GET | /orders/all | Get all existing orders
GET | /orders/open | Get all open orders

## Deploy with Heroku
Helpful Link [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql)