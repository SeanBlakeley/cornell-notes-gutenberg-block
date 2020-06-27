/* WordPress dependencies */
import { __ } from '@wordpress/i18n';
const { InnerBlocks } = wp.blockEditor;

/* Create a template from core blocks. */
const TEMPLATE = [
	[ 'core/heading', { level: 2, placeholder: __( 'Your Notes Title', 'cornell-notes' ), className: 'cornell-note-title' } ],
	[ 'cornell-notes/cornell-idea', {} ],
	[ 'core/heading', { level: 4, placeholder: __( 'Your notes summary', 'cornell-notes' ), className: 'cornell-note-summary' } ],
];

const ALLOWED_BLOCKS = [ 'cornell-notes/cornell-idea' ];

/* How the block will in the editor. */
export default function( { className } ) {
	return (
		<section className={ className }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				template_lock={ 'all' }
			/>
		</section>
	);
}
