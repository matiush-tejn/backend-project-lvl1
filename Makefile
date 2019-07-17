install:
	npm install

start-even:
	npx babel-node src/bin/brain-even.js

start-calc:
	npx babel-node src/bin/brain-calc.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
