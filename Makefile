gt:
	git add .
	git commit -m "commit"
	git push

gm:
	git checkout main
	git pull

publish:
	yarn version --patch && npm i && npm run build && make gt && npm publish