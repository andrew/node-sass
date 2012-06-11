##node-sass

Node bindings to libsass

*work in progress*

## Install

    npm install

## Usage

    var sass = require('./sass');
    sass.render('body{background:blue; a{color:black;}}', function(err, css){
      console.log(css)
    });

## Connect/Express middleware

Recompile `.scss` files automatically for connect and express based http servers

    var server = connect.createServer(
      sass.middleware({
          src: __dirname
        , dest: __dirname + '/public'
        , debug: true
      }),
      connect.static(__dirname + '/public')
    );

Heavily inspired by <https://github.com/LearnBoost/stylus>

## TODO

* async cpp
* error handling
* build libsass using node-waf
* sass compression options
* publish npm
* use node-gyp for builds
* file context
* folder context
