cypress-open-docker:
	docker compose -f docker-compose.yaml \
	-f docker-compose.cypress.open.yaml up --abort-on-container-exit --remove-orphans

cypress-run-docker:
	docker compose -f docker-compose.yaml \
	-f docker-compose.cypress.run.yaml up --abort-on-container-exit --remove-orphans

cypress-open-host:
	docker compose up -d --remove-orphans && \
	npm install --prefix frontend && \
	npm run --prefix frontend/ cypress:open

cypress-run-host:
	docker compose up -d --remove-orphans && \
	npm install --prefix frontend && \
	npm run --prefix frontend/ cypress:run
