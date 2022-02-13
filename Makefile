docker-cypress-run:
	docker compose \
	-f docker-compose.yaml \
	-f docker-compose.cypress-run.yaml \
	up --build --abort-on-container-exit --remove-orphans

docker-cypress-open:
	open -a XQuartz && \
	xhost + 127.0.0.1 && \
	DISPLAY=host.docker.internal:0 docker compose \
	-f docker-compose.yaml \
	-f docker-compose.cypress-run.yaml \
	-f docker-compose.cypress-open.yaml \
	up --build --abort-on-container-exit --remove-orphans

host-cypress-run:
	docker compose up -d --build --remove-orphans && \
	npm install --prefix frontend && \
	CYPRESS_BASE_URL=http://localhost:3000 \
	CYPRESS_BACKEND_URL=http://localhost:8000 \
	npm run --prefix frontend/ cypress:run

host-cypress-open:
	docker compose up -d --build --remove-orphans && \
	npm install --prefix frontend && \
	CYPRESS_BASE_URL=http://localhost:3000 \
	CYPRESS_BACKEND_URL=http://localhost:8000 \
	npm run --prefix frontend/ cypress:open

run-dev:
	docker compose \
	-f docker-compose.yaml \
	-f docker-compose.frontend-dev.yaml \
	up -d --build --remove-orphans

run-prod:
	docker compose \
	-f docker-compose.yaml \
	up -d --build --remove-orphans
