init:
	yarn
	mkdir www
	cp manifest.json www/
	ionic platform add android

build:
	rm -rf www
	mkdir www
	cp manifest.json www/
# TODO building process but now just copy things
	cp -r src www
	ionic build android
	rm -rf _build
	mkdir _build
	for f in platforms/android/build/outputs/apk/*.apk; do mv $$f _build/; done
