const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const clean = require("gulp-clean");

const project = ts.createProject("tsconfig.json");

gulp.task("typescript", () =>
  project
    .src()
    .pipe(sourcemaps.init())
    .pipe(project())
    .pipe(sourcemaps.write(".", { sourceRoot: "./", includeContent: false }))
    .pipe(gulp.dest("lib"))
);

gulp.task("clean", () => gulp.src("./lib").pipe(clean()));

gulp.task("watch-typescript", () => {
  gulp.watch("src/**/*", gulp.series("typescript"));
});

gulp.task("default", gulp.series("clean", "typescript"));
gulp.task("watch", gulp.series("default", "watch-typescript"));
