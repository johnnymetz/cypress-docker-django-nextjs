docker-cypress-open:
	docker compose -f docker-compose.yaml \
	-f docker-compose.cypress.open.yaml up --abort-on-container-exit --remove-orphans

docker-cypress-run:
	docker compose -f docker-compose.yaml \
	-f docker-compose.cypress.run.yaml up --abort-on-container-exit --remove-orphans

host-cypress-open:
	docker compose up -d --remove-orphans && \
	npm install --prefix frontend && \
	npm run --prefix frontend/ cypress:open

host-cypress-run:
	docker compose up -d --remove-orphans && \
	npm install --prefix frontend && \
	npm run --prefix frontend/ cypress:run
