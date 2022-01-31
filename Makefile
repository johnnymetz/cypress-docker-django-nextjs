docker-cypress-run:
	docker compose \
	-f docker-compose.yaml \
	-f docker-compose.cypress-run.yaml \
	up --abort-on-container-exit --remove-orphans

docker-cypress-open:
	docker compose \
	-f docker-compose.yaml \
	-f docker-compose.cypress-run.yaml \
	-f docker-compose.cypress-open.yaml \
	up --abort-on-container-exit --remove-orphans

host-cypress-run:
	docker compose up -d --remove-orphans && \
	npm install --prefix frontend && \
	CYPRESS_BASE_URL=http://localhost:3000 \
	CYPRESS_BACKEND_URL=http://localhost:8000 \
	npm run --prefix frontend/ cypress:run

host-cypress-open:
	docker compose up -d --remove-orphans && \
	npm install --prefix frontend && \
	CYPRESS_BASE_URL=http://localhost:3000 \
	CYPRESS_BACKEND_URL=http://localhost:8000 \
	npm run --prefix frontend/ cypress:open
