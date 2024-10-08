.PHONY: install
install:
	bun i

.PHONY: ci
ci:
	bun i --frozen-lockfile

.PHONY: update
update:
	bun update

.PHONY: run
run:
	bunx --bun vite --host 0.0.0.0

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

.PHONY: css
css:
	bun run tailwindcss -i ./src/styles/tailwind.css -o ./static/tailwind.css --watch
