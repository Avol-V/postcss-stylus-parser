[![NPM][npm]][npm-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][deps-dev]][deps-dev-url]
[![Tests][build]][build-url]

# postcss-stylus-parser

[PostCSS] parser plugin to compile [Stylus](https://github.com/stylus/stylus/) to CSS.

Uses original Stylus parser to parse `*.styl` files.

## Install

```
npm install --save-dev postcss-stylus-parser
```

## Usage

```js
import postcss from 'postcss';
import stylusParser from 'postcss-stylus-parser';

const stylusContent = `
my-color = red

.imported
	color my-color
`;

postcss( plugins )
	.process(
		stylusContent,
		{
			from: 'test.styl',
			parser: stylusParser(),
		}
	)
	.then(
		( result ) =>
		{
			console.log( result.css );
			/*
			.imported {
			  color: #f00;
			}
			*/
		}
	);
```

With Stylus options:

```js
postcss( plugins )
	.process(
		stylusContent,
		{
			from: 'test.styl',
			parser: stylusParser(
				{
					'resolve url': true,
					'functions': {
						url: stylus.resolver( {nocheck: true} ),
					},
				},
			),
		}
	)
	.then(
		( result ) =>
		{
			console.log( result.css );
		}
	);
```

## Change Log

[View changelog](CHANGELOG.md).

## License

[MIT](LICENSE).

[npm]: https://img.shields.io/npm/v/postcss-stylus-parser.svg
[npm-url]: https://npmjs.com/package/postcss-stylus-parser

[deps]: https://img.shields.io/david/Avol-V/postcss-stylus-parser.svg
[deps-url]: https://david-dm.org/Avol-V/postcss-stylus-parser

[deps-dev]: https://img.shields.io/david/dev/Avol-V/postcss-stylus-parser.svg
[deps-dev-url]: https://david-dm.org/Avol-V/postcss-stylus-parser?type=dev

[build]: https://img.shields.io/travis/Avol-V/postcss-stylus-parser.svg
[build-url]: https://travis-ci.org/Avol-V/postcss-stylus-parser

[PostCSS]: https://github.com/postcss/postcss
