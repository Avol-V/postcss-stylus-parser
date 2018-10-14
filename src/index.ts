import {ProcessOptions, Root} from 'postcss';
import parse from 'postcss/lib/parse';
import stylus from 'stylus';

/**
 * Parse Stylus file
 * 
 * @param contents Stylus file contents
 * @param options PostCSS process options
 */
function parseStylus( contents?: string, options?: ProcessOptions ): Root
{
	const css = stylus.render(
		contents || '',
		options && {
			filename: options.from,
		},
	);
	
	return parse( css, options );
}

export default parseStylus;
