/**
 * Task: Views
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp     = require('gulp');
var copy     = require('gulp-copy');
var htmlhint = require('gulp-htmlhint');

// Task
gulp.task('views', function() {

  return gulp.src('./source/views/**/*.html')

    // Lint HTML
    .pipe(htmlhint({
      htmlhintrc: './gulp_tasks/_html-lint.json'
    }))
    .pipe(htmlhint.reporter())

    // Copy HTML files
    .pipe(copy('./build/', {
      prefix: 2
    }));

});
