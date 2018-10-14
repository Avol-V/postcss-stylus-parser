import {expect} from 'chai';
import {readFileSync} from 'fs';
import 'mocha';
import {resolve} from 'path';
import postcss from 'postcss';
import stylusParser from '../src/index';

describe(
	'Parse Stylus',
	() =>
	{
		it(
			'should parse stylus file',
			() => check( 'simple' ),
		);
	},
);

/**
 * Check PostCSS result with specific options.
 * 
 * @param options Plugin options.
 * @param input Input CSS.
 * @param output Expected output CSS.
 */
function check( name: string ): Promise<void>
{
	const sourceName = resolve( __dirname, `fixtures/${name}.styl` );
	const expectedName = resolve( __dirname, `fixtures/${name}.css` );
	
	return postcss()
		.process(
			readFileSync( sourceName, 'utf8' ),
			{
				from: sourceName,
				parser: stylusParser,
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
