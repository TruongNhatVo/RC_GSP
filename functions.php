<?php
	function setup_theme(){
		/* define value default */
		define('THEME_URL', get_template_directory_uri());

	    add_theme_support( 'post-thumbnails' , array( 'post' ));
	    add_post_type_support( 'post', 'excerpt' );
	}
	add_action('init', 'setup_theme');

	/* function registry css, js */
	function registry_css_js() {
		/* registry css */
		/* wp_enqueue_style( 'style', get_stylesheet_uri()); */

        wp_enqueue_style( 'reset', THEME_URL . '/common/css/reset.css' );
        wp_enqueue_style( 'layout', THEME_URL . '/common/css/layout.css' );
        // wp_enqueue_style( 'module', THEME_URL . '/common/css/module.css' );
        wp_enqueue_style( 'helper', THEME_URL . '/common/css/helper.css' );
        wp_enqueue_style( 'magnific-popup-css', THEME_URL . '/common/css/magnific-popup.min.css' );
        wp_enqueue_style( 'style', THEME_URL . '/common/css/style.css' );

	    /* registry js */
	    wp_enqueue_script( 'jquery-min', THEME_URL . '/common/js/jquery-3.2.1.min.js', false, true );
	    wp_enqueue_script( 'magnific-popup', THEME_URL . '/common/js/jquery.magnific-popup.min.js', false, true );
	    wp_enqueue_script( 'scripts', THEME_URL . '/common/js/scripts.js', false, true );

	}
	add_action( 'wp_enqueue_scripts', 'registry_css_js', 10, 0 );
?>
