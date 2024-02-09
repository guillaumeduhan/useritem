gt:
	git add .
	git commit -m 'commit'
	git push

publish:
	npm run build && make gt && npm publish