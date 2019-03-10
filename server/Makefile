docker-build:
	docker build -t hackernews-server .

docker-tests:
	docker run -v `pwd`/src:/app/src hackernews-server
