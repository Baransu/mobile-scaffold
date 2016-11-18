init:
	yarn
	mkdir www
	cp manifest.json www/
	ionic platform add android

build-front:
	webpack
	cp src/index.html www/
# TODO node-sass build

build:
	rm -rf www
	mkdir www
	cp manifest.json www/
	make build-front
	ionic build android
	rm -rf _build
	mkdir _build
	for f in platforms/android/build/outputs/apk/*.apk; do mv $$f _build/; done
