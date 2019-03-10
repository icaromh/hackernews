# HackerNews Challenge
Yet another Hacker News app.

### Requirements

- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the project

Using stand-alone commands you must follow this:
```sh
# First of all, install the dependencies of the project
cd client && yarn && cd ..
cd server && yarn && cd ..

# Build the client
cd client && yarn build && cd ..

# Then run docker-compose up
docker-compose up --build
```

Or you can simply use make:
```sh
make build
make run
```


After run the `run` or `docker-compose up` commands
- The Client must be running on [http://localhost:3000](http://localhost:3000)
- The API must be running on [http://localhost:3001](http://localhost:3001)

