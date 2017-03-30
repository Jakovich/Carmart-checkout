var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var copy = require("gulp-contrib-copy");
var clean = require('gulp-contrib-clean');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var uglify = require("gulp-uglify");
var server = require("browser-sync");
var rename = require("gulp-rename");
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');

gulp.task('svgstore-advantages', function () {
    return gulp
        .src('img/advantages/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('svgstore-general', function () {
    return gulp
        .src('img/general/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('svgstore-confirm', function () {
    return gulp
        .src('img/popup-confirm/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('svgstore-services', function () {
    return gulp
        .src('img/services/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('svgstore-insurance', function () {
    return gulp
        .src('img/insurance/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('svgstore-payment', function () {
    return gulp
        .src('img/payment/payment/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svgsprites'));
});

gulp.task('svgmin-services', function () {
    return gulp
        .src('img/services/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))

        .pipe(gulp.dest('img/svgmin'));
});


gulp.task('svgmin-general', function () {
    return gulp
        .src('img/general/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))

        .pipe(gulp.dest('img/svgmin'));
});

gulp.task("min-js", function(){

  gulp.src("js/main.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("main.min.js"))
  .pipe(gulp.dest("build/js/"))

  gulp.src("js/step-equipment.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("step-equipment.min.js"))
  .pipe(gulp.dest("build/js/"))

  gulp.src("js/step-credit.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("step-credit.min.js"))
  .pipe(gulp.dest("build/js/"))

  gulp.src("js/step-insurance.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("step-insurance.min.js"))
  .pipe(gulp.dest("build/js/"))

  gulp.src("js/step-payment.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("step-payment.min.js"))
  .pipe(gulp.dest("build/js/"))

  gulp.src("js/step-tradein.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("step-tradein.min.js"))
  .pipe(gulp.dest("build/js/"))

  gulp.src("js/animation.js")
  .pipe(plumber())
  .pipe(gulp.dest("build/js/"))
  .pipe(uglify())
  .pipe(rename("animation.min.js"))
  .pipe(gulp.dest("build/js/"))

});

gulp.task("min-vendor-js", function(){
  gulp.src("vendor/nouislider/nouislider.js")
  .pipe(plumber())
  .pipe(gulp.dest("js/vendor/"))
  .pipe(uglify())
  .pipe(rename("nouislider.min.js"))
  .pipe(gulp.dest("js/vendor/"))
});

gulp.task("style", function(){
  gulp.src("less/style.less")
  .pipe(plumber())
  .pipe(less())
  .pipe(postcss([
    autoprefixer({browsers: [
      "last 3 version",
      "last 3 Chrome versions",
      "last 3 Firefox versions",
      "last 3 Opera versions",
      "last 2 Edge versions",
      "ie >= 9"
    ]})

  ]))

  .pipe(gulp.dest("build/css"))
  .pipe(csso())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("build/css"))
  .pipe(server.reload({stream: true}));
});



gulp.task("clean", function () {
  return gulp.src("build", {read: false})
    .pipe(clean());
});


gulp.task("copyHtml", function() {
  gulp.src("*.html")
  .pipe(copy())
  .pipe(gulp.dest("build"));
});

gulp.task("copyVendor", function() {
  gulp.src("vendor/**/*")
  .pipe(copy())
  .pipe(gulp.dest("build/vendor"));
});

gulp.task("copyImg", function() {
  gulp.src("img/**/*.{png,svg,jpg}")
  .pipe(copy())
  .pipe(gulp.dest("build/img"));
});


gulp.task("show", function(){
  server.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]).on("change", server.reload);
  gulp.watch("*.html", ["copyHtml"]).on("change", server.reload);
  gulp.watch("img/**/*.svg", ["copyImg"]).on("change", server.reload);
  gulp.watch("js/**/*.js", ["min-js"]).on("change", server.reload);
  gulp.watch("vendor/**/*.js", ["copyVendor"]).on("change", server.reload);
});

gulp.task("build", ["clean", "copyHtml", "style","copyImg", "copyVendor", "min-js"]);
