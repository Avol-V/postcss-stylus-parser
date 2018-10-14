declare module 'postcss/lib/parse'
{
	const parse: typeof import( 'postcss' ).parse;
	
	export default parse;
}
