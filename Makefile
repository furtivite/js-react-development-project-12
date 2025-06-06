.PHONY: setup build start

setup:
	npm install
	cd frontend && npm install

build:
	cd frontend && npm run build

start:
	npx start-server -p ${PORT:-5001} -s ./frontend/dist
