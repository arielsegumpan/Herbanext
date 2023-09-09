<?php

if ( ! function_exists( 'herbanext_theme_support' ) ) :

	/**
	 * @since herbanext v1.0.0
	 *
	 * @return void
	 */
	function herbanext_theme_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;
add_action( 'after_setup_theme', 'herbanext_theme_support' );


// Enqueue Style===========================
if ( ! function_exists( 'herbanext_styles' ) ) :
    function herbanext_styles(){
        // regsiter style
        wp_enqueue_style('herbanext-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
        wp_enqueue_style('herbanext-style-blocks', get_template_directory_uri() . '/assets/css/blocks.css');
    }
endif;

add_action( 'wp_enqueue_scripts', 'herbanext_styles' );