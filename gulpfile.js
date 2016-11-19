const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');

const config = {
  nodeDir: './node_modules',
  dest: './www',
  sassDir: './src/sass'
};

gulp.task('default', function() {
  return gulp.src(config.sassDir + '/style.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        config.sassDir,
        config.nodeDir + '/bootstrap-sass/assets/stylesheets',
        config.nodeDir + '/font-awesome/scss',
      ]
    }).on('error', sass.logError))
    .pipe(autoprefix('last 2 version'))
    .pipe(gulp.dest(config.dest + '/css'));
});
