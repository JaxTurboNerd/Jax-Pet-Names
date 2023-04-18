# Pet Names Server

### Requirements
- Node.js (18.15.0 or higher)
- Postgres (14.7 or higher)

### Local Setup
1. Clone project: `git clone git@github.com:JaxTurboNerd/Jax-Pet-Names.git`
2. Navigate into folder: `cd Jax-Pet-Names/server`
3. Install dependencies: `npm install`
4. Create database: `CREATE DATABASE pet_names``;`
5. Run migrations: `knex migrate:up`
6. Run seed to populate with demo data: `knex seed:run`
7. Start the server: `node index.js`

### Current APIs
- `GET /names`
- `POST /names`
- `GET /names/:id`
- `PUT /names/:id`
- `DELETE /names/:id`