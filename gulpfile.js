var gulp = require("gulp");


gulp.task("font-awesome-less", function() {
    return gulp.src('node_modules/font-awesome/less/*')
        .pipe(gulp.dest('src/less'))
});

gulp.task("font-awesome-fonts", function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('src/fonts'))
});

