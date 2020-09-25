<?php
/**
 * Search Form
 * 
 * @package Accesspress Mag Pro
 */

$trans_search = of_get_option( 'trans_search_button' );
if( empty( $trans_search ) ) {
    $trans_search = __( 'Search', 'accesspress-mag' );
}
$trans_search_placeholder = of_get_option( 'trans_search_placeholder' );
if( empty( $trans_search_placeholder ) ) {
    $trans_search_placeholder = __( 'Search content...', 'accesspress-mag' );
}
?>
<div class="search-icon">
    <i class="fa fa-search"></i>
    <div class="ak-search">
        <div class="close">&times;</div>
     <form action="<?php echo esc_url( home_url( '/' ) ); ?>" class="search-form" method="get" role="search">
        <label>
            <span class="screen-reader-text"><?php _e( 'Search for:', 'accesspress-mag' ) ?></span>
            <input type="search" title="<?php esc_attr_e( 'Search for:', 'accesspress-mag' ); ?>" name="s" value="<?php echo get_search_query(); ?>" placeholder="<?php esc_attr( $trans_search_placeholder );?>" class="search-field" />
        </label>
        <input type="submit" value="<?php echo esc_attr( $trans_search ); ?>" class="search-submit" />
     </form>
     <div class="overlay-search"> </div> 
    </div>
</div>