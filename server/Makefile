docker-build:
	docker build -t hackernews-server .

docker-tests:
	docker run -v `pwd`/src:/app/src hackernews-server

docker-coverage:
	docker run \
		-v `pwd`/src:/app/src \
		-v `pwd`/coverage:/app/coverage \
		hackernews-server \
		npm run coverage
