import {ProcessOptions, Root} from 'postcss';
import parse from 'postcss/lib/parse';
import stylus from 'stylus';

/**
 * Returns Stylus parse function
 * 
 * @param options Stylus render options
 */
const getParser = ( options: Partial<stylus.RendererOptions> = {} ) =>
{
	/**
	 * Parse Stylus file
	 * 
	 * @param contents Stylus file contents
	 * @param processOptions PostCSS process options
	 */
	const parseStylus = (
		contents?: string,
		processOptions?: ProcessOptions,
	): Root =>
	{
		const css = stylus.render(
			contents || '',
			{
				...options,
				filename: processOptions && processOptions.from,
			},
		);
		
		return parse( css, processOptions );
	};
	
	return parseStylus;
};

export {
	getParser as default,
	getParser,
};
