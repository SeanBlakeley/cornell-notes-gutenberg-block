/* Block dependencies */
import attributes from './attributes';
import edit from './edit';
import save from './save';

/* WordPress dependencies */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/* Register the block */
registerBlockType(
	'cornell-notes/cornell-idea',
	{
		title: __( 'Idea', 'cornell-notes' ),
		description: __( 'Add ideas to your Cornell Notes.', 'cornell-notes' ),
		category: 'common',
		parent: [ 'cornell-notes/cornell-note' ],
		icon: 'lightbulb',
		attributes,
		edit,
		save,
		supports: {
			align: true,
		},
	}
);
