/* WordPress dependencies */
import { __ } from '@wordpress/i18n';
const { InnerBlocks } = wp.blockEditor;

/* Create a template from core blocks. */
const TEMPLATE = [
	[ 'core/columns', {
		columns: 2,
		className: 'cornell-note-idea',
	}, [
		[ 'core/column', { width: 33, className: 'cornell-note-key-idea' }, [
			[ 'core/paragraph', { placeholder: __( 'Key idea', 'cornell-notes' ) } ],
		] ],
		[ 'core/column', { width: 66, className: 'cornell-note-long-form' }, [
			[ 'core/paragraph', { placeholder: __( 'Long-form notes', 'cornell-notes' ) } ],
		] ],
	] ],
];

/* How the block will look in the editor. */
export default function( { className } ) {
	return (
		<div className={ className }>
			<InnerBlocks
				template={ TEMPLATE }
				templateLock={ 'all' }
			/>
		</div>
	);
}
