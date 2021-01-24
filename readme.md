# solid compiler

**/!\ Heads Up: This package is not meant to be used, at least not just yet. This
is merely an experiment for internal testing. We are looking how would babel
play when integrated in another environement than node (go, deno, etc.)**

A standalone (meant to be used in the browser) compiler for [Solid](https://github.com/amoutonbrady/solid-compiler).

This just package `@babel/standalone` as well as `babel-preset-solid` into
a single function that's attached to the `globalThis` object.

## API

### globalThis.transformSolid(code: string, options?: { solid?: BabelPresetSolidOptions, babel?: BabelTransformOption) => BabelTransformResult

## Building it

Install the dependencies with yarn (1):

```bash
$ yarn install
```

You can do any modification you wish in the [lib.js](./lib.js) file and then
build it via the following command:

```bash
$ yarn build
```

If you wish to test it, you can create a basic `index.html` at the root of the
repo. and load the generated script like so:

```html
<!doctype html>
<html>
  <head></head>
  <body>
    <scrip src="./dist/lib.js"></script>
  </body>
</html>
```

Serving via a server (eg. `npx serve .`) and playing with the function in your
browser console.
