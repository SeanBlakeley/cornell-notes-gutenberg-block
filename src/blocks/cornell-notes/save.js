/* WordPress dependencies */
const { InnerBlocks } = wp.blockEditor;

/* How the block will look on the frontend. */
export default function( { className } ) {
	return (
		<section className={ className }>
			<InnerBlocks.Content />
		</section>
	);
}
