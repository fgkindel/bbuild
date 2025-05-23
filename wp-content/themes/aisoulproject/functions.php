<?php
// AI Soul Project Theme functions

/**
 * Register the page templates.
 *
 * @param array $templates Array of page templates. Keys are filenames, values are labels.
 * @return array Filtered array of page templates.
 */
function aisoulproject_register_page_templates( $templates ) {
    $templates['templates/landing-page.php'] = __( 'Landing Page', 'aisoulproject' );
    return $templates;
}
add_filter( 'theme_page_templates', 'aisoulproject_register_page_templates' );

/**
 * Ensure the theme supports page templates.
 * This might be necessary for some WordPress versions or configurations.
 */
function aisoulproject_add_template_support() {
    add_theme_support( 'page-templates' );
}
add_action( 'after_setup_theme', 'aisoulproject_add_template_support' );
