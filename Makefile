install:
	npm install && npm link
lint:
	npx eslint .
prod:
	npm run build:prod
dev:
	npm run build:dev
