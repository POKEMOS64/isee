

let project_folder='tempdef';
let project_folder_static='tempdef';
let source_folder='src';

let path={
    build:{
        html:project_folder + '/',
        css: project_folder_static + '/css/',
        js: project_folder_static + '/js/',
        img: project_folder_static + '/img/',
        fonts: project_folder_static + '/fonts'
    },
    src:{
        html: [source_folder + '/*.html' , source_folder + '/**/_*.html'],
        css: source_folder + '/css/{style.sass,reset.sass,print.sass,grid.sass}',
        clearcss: source_folder + '/css/css/*.css',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*.ttf'
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/css/**/*.sass',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}'
    },
    clean: './' + project_folder + '/'
}

let {src,dest} = require('gulp'),
            gulp = require('gulp'),
            browsersync = require('browser-sync').create(),
            fileinclude= require('gulp-file-include'),
            sass = require('gulp-sass')(require('sass')),
            autoPrefixer = require('gulp-autoprefixer'),
            media = require('gulp-group-css-media-queries'),
            clean_css = require('gulp-clean-css'),
            rename = require('gulp-rename'),
            uglify = require('gulp-uglify'),
            imagemin = require('gulp-imagemin'),
            webp = require('gulp-webp');

function browserSync(params){
    browsersync.init({
        server:{
            baseDir: ["tempdef/"]
        },
        port: 8080,
        notify: true
    })
}



function html(){
    return src(path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css(){
    return src(path.src.css)
    .pipe(
        sass({outputStyle: 'compressed'}).on('error', sass.logError)
    )
    .pipe(autoPrefixer(
        {cascade: true}
    ))
    .pipe(media())
    .pipe(clean_css({compatibility: 'ie8'}))
    .pipe(
        rename({
            extname: '.min.css'
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js (){
    return src(path.src.js)
    
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images () {
    return src(path.src.img)
    .pipe(dest(path.build.img))
    .pipe(webp({
        quality: 65
    }))
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
        imagemin([
            imagemin.gifsicle({interlaced:true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ])
    )
}

function watchFiles(params){
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}


let build = gulp.series( gulp.parallel(css,js,html,images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build; 
exports.watch = watch;
exports.default = watch;