import {expect} from 'chai';
import {readFileSync} from 'fs';
import 'mocha';
import {resolve} from 'path';
import postcss from 'postcss';
import stylus, {RendererOptions} from 'stylus';
import getParser from '../src/index';

describe(
	'Parse Stylus',
	() =>
	{
		it(
			'should parse stylus file',
			() => check( 'simple' ),
		);
		it(
			'should resolve url',
			() => check(
				'resolve-url',
				{
					'resolve url': true,
					'functions': {
						url: stylus.resolver( {nocheck: true} ),
					},
				},
			),
		);
	},
);

/**
 * Check PostCSS result with specific options.
 * 
 * @param options Stylus render options.
 */
function check(
	name: string,
	options: Partial<RendererOptions> = {},
): Promise<void>
{
	const sourceName = resolve( __dirname, `fixtures/${name}.styl` );
	const expectedName = resolve( __dirname, `fixtures/${name}.css` );
	
	return postcss()
		.process(
			readFileSync( sourceName, 'utf8' ),
			{
				from: sourceName,
				parser: getParser( options ),
			},
		)
		.then(
			( result ) =>
			{
				expect(
					result.css,
				).to.equal(
					readFileSync( expectedName, 'utf8' ),
				);
			},
		);
}
