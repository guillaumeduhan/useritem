gt:
	git add .
	git commit -m 'commit'
	git push

publish:
	yarn version --patch && npm i && npm run build && make gt && npm publish