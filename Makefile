gt:
	git add .
	git commit -m 'commit'
	git push

publish:
	npm i && npm run build && make gt && npm publish