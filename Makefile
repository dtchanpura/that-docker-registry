
build:
	docker build -t that-docker-registry.local/that-docker-registry:latest .

clean:
	docker rmi $(shell docker images --filter "label=intermediate=true" -q)

compose:
	docker-compose up -d
	@echo "Server should be up at that-docker-registry.local."
	@echo "Add '127.0.0.1 that-docker-registry.local' to /etc/hosts if not added already"

all: build
