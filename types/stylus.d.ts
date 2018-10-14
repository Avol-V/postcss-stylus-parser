declare module 'stylus'
{
	export interface RendererOptions
	{
		globals: object;
		functions: object;
		use: Function[];
		imports: string[];
		paths: string[];
		filename: string;
		Evaluator: object;
		[key: string]: any;
	}
	
	export type RenderCallback = ( error: Error | null, css: string ) => string | undefined;
	
	export function render(
		str: string,
		options?: Partial<RendererOptions>,
		callback?: RenderCallback
	): string;
	
	export interface ResolverOptions
	{
		/**
		 * Additional resolution path(s)
		 */
		paths: string[];
		/**
		 * Don’t check file existence
		 */
		nocheck: boolean;
	}
	
	export function resolver( options?: Partial<ResolverOptions> ): Function;
}
