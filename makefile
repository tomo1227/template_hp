.PHONY: install
install:
	bun i

.PHONY: ci
ci:
	bun run --frozen-lockfile

.PHONY: update
update:
	bun update

.PHONY: run
run:
	bun run dev

.PHONY: up
up:
	docker compose up -d

.PHONY: down
down:
	docker compose down

.PHONY: prune
prune:
	docker compose down

.PHONY: delete
delete:
	docker-compose down --rmi all --volumes --remove-orphans

.PHONY: log
log:
	docker compose logs -f
