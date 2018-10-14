declare module 'stylus'
{
	interface RendererOptions
	{
		globals: object;
		functions: object;
		use: Function[];
		imports: string[];
		paths: string[];
		filename: string;
		Evaluator: object;
	}
	
	type RenderCallback = ( error: Error | null, css: string ) => string | undefined;
	
	export function render(
		str: string,
		options?: Partial<RendererOptions>,
		callback?: RenderCallback
	): string;
}
