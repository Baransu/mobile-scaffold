init:
	yarn
	ionic platform android

build:
	rm -rf www
# TODO building process
	cp -r src www
	ionic build android
	rm -rf _build
	mkdir _build
	for f in platforms/android/build/outputs/apk/*.apk; do mv $$f _build/; done
