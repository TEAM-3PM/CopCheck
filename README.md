<!-- @format -->

# CopCheck

Our application is tailored for citizens who may have had a run-in with law enforcement or anyone wanting to make a change, such as community activists, residents in high-police areas, and those involved in legal matters. Users can see officers at the nearest precinct based on their location, empowering them to be more informed and engaged. They can leave detailed reports or complaints about their experiences with specific officers, ensuring their voices are heard. Also, users can upload videos of interactions, providing crucial evidence of potential misconduct and injustices. The app also allows users to look up police officers by name and badge number, giving access to data on previous interactions and their community scores, fostering transparency and accountability within law enforcement.

## Team

- **Project Manager**: Mekhi Tudor
- **Scrum Master**: Mekhi Miller
- **Development Team Members**: Patrick Dacius, Mekhi Tudor, Mekhi Miller

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
   1. [Installing Dependencies](#installing-dependencies)
   1. [Running Server Locally](#running-server-locally)
   1. [Running Frontend Locally](#running-frontend-locally)
   1. [Migratrion File Generation](#migratrion-file-generation)
   1. [Running Migration Files](#running-migration-files)
   1. [Running Seed Files](#running-seed-files)
   1. [Roadmap](#roadmap)
1. [Contributing](#contributing)
1. [Style Guide](#style-guide)

## Usage

1. Fork this repo and clone it to your PC locally.

2. Create a new Postgres database called `copcheck` locally on your computer.

3. In the `server/` folder, copy the `.env.template` and name it `.env`.

   - Update the `.env` variables to match your Postgres database information (username, password, database name)
   - Replace the `SESSION_SECRET` value with your own random string. This is used to encrypt the cookie's `userId` value.

- Your `.env` file should look something like this:

```sh
# Replace these variables with your Postgres server information
# These values are used by knexfile.js to connect to your postgres server
PG_HOST='127.0.0.1'
PG_PORT=5432
PG_USER='itsamemario'
PG_PASS='12345'
PG_DB='copcheck'

# Replace session secret with your own random string!
# This is used by handleCookieSessions to encrypt your
SESSION_SECRET='db8c3cffebb2159b46ee38ded600f437ee080f8605510ee360758f6976866e00d603d9b3399341b0cd37dfb8e599fff3'
PG_CONNECTION_STRING=''
```

4. See the ["Development"](#development) section of this repo for instructions on what commands to run locally.

## Requirements

- [Node](https://nodejs.org/en) (v14+)
- [PostgreSQL](https://www.postgresql.org/) (v12+)
- [Express](https://expressjs.com/) (v4.17.1+)
- [Knex](https://knexjs.org/) (v0.95+)
- [Vite React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

## Development

### Installing Dependencies

From within the root directory:

```sh
cd frontend && npm i && npm run build && cd ../server && npm i && npm run migrate && npm run seed
```

OR

```sh
npm run kickstart
```

### Running Server Locally

From within the root directory:

```sh
cd server && npm run dev
```

OR

```sh
npm run dev
```

### Running Frontend Locally

From within the root directory:

```sh
cd frontend && npm run dev
```

OR

```sh
npm run dev:frontend
```

### Migratrion File Generation

From within the root directory:

```sh
cd server && npx knex migrate:make <your_file_name>
```

OR

```sh
npm run migrate:make <your_file_name>
```

### Running Migration Files

From within the root directory:

```sh
cd server && npm run migrate
```

OR

```sh
npm run migrate
```

### Running Seed Files

From within the root directory:

```sh
cd server && npm run seed
```

OR

```sh
npm run seed
```

### Roadmap

View the project roadmap [here](https://github.com/orgs/TEAM-3PM/projects/1).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Style Guide

This project adheres to the [Airbnb Style Guide](https://github.com/airbnb/javascript).
