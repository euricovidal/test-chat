# Test Chat

Project developed in PluralSight course (https://app.pluralsight.com/library/courses/build-isomorphic-app-react-flux-webpack-firebase/table-of-contents)

# Setting up the environment

## Install the dependencies

    npm install

Adding new packages can be achieved with `npm install package-name --save` which will add the
dependency to package.json, which is similar to the Gemfile file for Bundler. Differently from
Bundler, `npm install` won't generate a lock file (like Gemfile.lock) but something similar may
be achieved with `npm shrinkwrap` although it won't be run automatically by `npm install`. I'd
appreciate any input from Node.js users on how to manage dependencies in Node. When
`npm install package-name --save` is used, it will specify the version in `package.json`, so
maybe this is the proper way to go for projects...

## Running the webpack-dev-server

Development environment:

    webpack-dev-server --progress

The `--progress` would show the progress of build modules and assets.

You may access on http://localhost:8080/webpack-dev-server/

Edit this file `src/main.js` and change `window.debugMode` to what you want, if `true` enable `console.log` to tell when passing by a component/action/source

## TODO

- [ ] Extract the `debugMode` to ENV var
- [ ] Extract Firebase data to ENV var or generic class with this data
- [ ] Add unit tests (with Jasmine)
- [ ] Add integration tests (with Karma)
- [ ] Update README
- [ ] Change authentication mode to use AuthToken to let reload the page
