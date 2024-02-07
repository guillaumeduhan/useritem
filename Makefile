gt:
	git add .
	git commit -m 'commit'
	git push

publish:
	npm run build && npm publish