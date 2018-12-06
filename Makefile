install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
calc:
	npx babel-node -- src/bin/brain-calc.js
even:
	npx babel-node -- src/bin/brain-even.js
publish:
	npm publish
lint:
	npx eslint .
