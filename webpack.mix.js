const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/main.js', 'public/js')
    .vue()

    .sass('resources/assets/styles/app.scss', 'public/css',)
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })

    .copy('resources/assets/images', 'public/images')
    .copy('resources/assets/fonts', 'public/fonts')
    .copy('resources/assets/views', 'public')
;
