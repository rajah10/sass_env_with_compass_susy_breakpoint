# Are you like to work with Sass? then, this package will helps you. This package is platform indipendences.

## Your working environment needs ruby, gulp, nodejs, npm, Susy, Compass and Breakpoint installed

## Get clone this repository and direct to the folder `cd folder`



## Check the folder structure
```
+-- bulids
| +-- development
|   +--css
|   +--images
|   +--js
|   +--index.html

| +-- production

+-- components
| +--sass
| +--scripts

+-- gulpfile.js
+-- package.json
```

`Development folder` designed to keep the images and html files, and gulp will convert `sass` and `script` file into `css, js` folders.

You are nothing doing in `Production folder` but when you ready to do deploy to production change the `env` value to `production` in `gulpfile.js` and get the deploying file from `production folder`

## Open terminal and run `npm install` and then run `gulp`
Now, open the sass and js files in `components` folder, and begin your code. Gulp will convert and watch the sass and js files.





