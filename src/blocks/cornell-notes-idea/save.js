/* WordPress dependencies */
const { InnerBlocks } = wp.blockEditor;

/* How the block will look on the frontend. */
export default function( { className } ) {
	return (
		<div className={ className }>
			<InnerBlocks.Content />
		</div>
	);
}
