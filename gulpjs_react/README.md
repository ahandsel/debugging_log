# gulp.js & Create-React-App

## Method 1

Bundle the JavaScript files into one inside the `./build/static/js/` folder -> `bundle.js`

1. Create the following `gulpfile.js` and save in the root folder.

   ```js
   const gulp = require('gulp');
   const concat = require('gulp-concat');
   const path = './build/static/js'; // Path to the JS files

   gulp.task('default', () => {
     return gulp
       .src(`${path}/*.js`)
       .pipe(concat('bundle.js'))
       .pipe(gulp.dest(path));
   });
   ```

2. NPM Installs

   ```shell
   npm install --save-dev gulp gulp-concat
   ```

3. Run build & gulp

   ```shell
   npm run build
   gulp
   cd build/static/js
   ```

## Method 2

Bundle the JavaScript files into one inside the `./build/static/js/` folder -> `bundle.js`

<https://stackoverflow.com/questions/67358595/how-to-bundle-react-to-one-big-bundle-with-css-js>
1. Create the following `gulpfile.js` and save in the root folder.

   ```js
   const gulp = require('gulp');
   const replace = require('gulp-replace');
   const concat = require('gulp-concat');
   const css2js = require('gulp-css2js');

   const path = './build/static'; // Path to the static files

   gulp.task('unite-css', () => {
     return gulp
       .src(`${path}/css/*.css`)
       .pipe(concat('styles.css'))
       .pipe(css2js({
         splitOnNewline: false
       }))
       .pipe(gulp.dest(`${path}/js`));
   });

   gulp.task('bundle', () => {
   return gulp
     .src(`${path}/js/*.js`)
     .pipe(concat('bundle.js'))
     .pipe(replace('ReactDom', 'ReactDOM'))
     .pipe(gulp.dest('./dist/'));
   });

   gulp.task('default', gulp.series('unite-css', 'bundle'));
   ```

2. NPM Installs

   ```shell
   npm install --save-dev gulp gulp-replace gulp-concat gulp-css2js
   ```

3. Run build & gulp

   ```shell
   npm run build
   gulp
   cd ./dist
   ```
