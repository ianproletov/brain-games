install:
	npm install
start:
	npx babel-node -- src/games/brain-calc.js
publish:
	npm publish
lint:
	npx eslint .
