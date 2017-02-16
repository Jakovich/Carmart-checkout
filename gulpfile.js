var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var copy = require("gulp-contrib-copy");
var clean = require('gulp-contrib-clean');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync");
var rename = require("gulp-rename");


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
  gulp.src("*.ico")
  .pipe(copy())
  .pipe(gulp.dest("build"));
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
});

gulp.task("build", ["clean", "copyHtml", "style"]);
