/* Block dependencies */
import attributes from './attributes';
import edit from './edit';
import save from './save';

/* Import Styles */
import './style.scss';

/* WordPress dependencies */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/* Register block */
registerBlockType(
	'cornell-notes/cornell-note',
	{
		title: __( 'Cornell Note' ),
		description: __( 'A template for your Cornell Notes.', 'cornell-notes' ),
		category: 'common',
		keywords: [ __( 'Cornell', 'cornell-notes' ), __( 'notes', 'cornell-notes' ), __( 'ideas', 'cornell-notes' ) ],
		icon: 'welcome-write-blog',
		attributes,
		edit,
		save,
		supports: {
			align: true,
		},
		anchor: true,
		example: {},
	}
);
