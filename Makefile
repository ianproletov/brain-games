install:
	npm install
start:
	npx babel-node -- src/bin/brain-eval.js
publish:
	npm publish
lint:
	npx eslint .
