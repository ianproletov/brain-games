install:
	npm install
prime:
	npx babel-node -- src/bin/brain-prime.js
calc:
	npx babel-node -- src/bin/brain-calc.js
even:
	npx babel-node -- src/bin/brain-even.js
gcd:
	npx babel-node -- src/bin/brain-gcd.js
progression:
	npx babel-node -- src/bin/brain-progression.js
publish:
	npm publish
lint:
	npx eslint .
