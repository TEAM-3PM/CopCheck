# CopCheck

Our application is tailored for citizens who may have had a run-in with law enforcement or anyone wanting to make a change, such as community activists, residents in high-police areas, and those involved in legal matters. Users can see officers at the nearest precinct based on their location, empowering them to be more informed and engaged. They can leave detailed reports or complaints about their experiences with specific officers, ensuring their voices are heard. Also, users can upload videos of interactions, providing crucial evidence of potential misconduct and injustices. The app also allows users to look up police officers by name and badge number, giving access to data on previous interactions and their community scores, fostering transparency and accountability within law enforcement.


## Team

  - __Project Manager__: Mekhi Tudor
  - __Scrum Master__: Mekhi Miller
  - __Development Team Members__: Patrick Dacius, Mekhi Tudor, Mekhi Miller

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

> Some usage instructions for getting the app up and running locally

## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

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
