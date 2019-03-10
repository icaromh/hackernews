setup-client:
	cd client && yarn

setup-server:
	cd server && yarn

###
# - Install dependencies for the client
# - Install dependencies for the server
# - run Yarn build into the client
# - Build docker-images
###
build: setup-client setup-server
	cd client && yarn build
	docker-compose build

# Run the docker-compose
run:
	docker-compose up

