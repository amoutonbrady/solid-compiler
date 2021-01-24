# solid compiler

A standalone (meant to be used in the browser) compiler for [Solid](https://github.com/amoutonbrady/solid-compiler).

This just package `@babel/standalone` as well as `babel-preset-solid` into
a single function that's attached to the `globalThis` object.

## API

### globalThis.transformSolid(code: string, options?: { solid?: BabelPresetSolidOptions, babel?: BabelTransformOption) => BabelTransformResult

