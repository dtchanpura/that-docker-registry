
build:
	docker build -t that-docker-registry.local/that-docker-registry:latest .

clean:
	docker rmi $(shell docker images --filter "label=intermediate=true" -q)

all: build
