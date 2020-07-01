<?php
/**
 * Plugin Name: Cornell Notes Gutenberg Block
 * Plugin URI: https://github.com/SeanBlakeley/cornell-notes-gutenberg-block
 * Description: Improve your learning and retention by creating perfect <a href="https://en.wikipedia.org/wiki/Cornell_Notes" target="_blank">Cornell Notes</a> within the block editor.
 * Author: Sean Blakeley
 * Author URI: https://sean.work
 * Version: 1.0.3
 * Text Domain: cornell-notes
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CornellNotes
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
