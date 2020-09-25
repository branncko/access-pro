<?php 
/**
 * Define top heder menu
 * 
 * @package Accesspress Mag Pro
 */
?>
<div class="top-menu-wrapper clearfix">
    <div class="apmag-container">
        <?php 
            $apmag_date_option = of_get_option( 'header_current_date_option', '' );
            if( empty( $apmag_date_option ) && $apmag_date_option != '1' ) {
        ?>
        <div class="current_date"><?php echo date('l, F j, Y'); ?></div>
        <?php } ?>
        <div class="top-menu-left">
            <nav id="top-navigation" class="top-main-navigation" role="navigation">
                <button class="menu-toggle hide" aria-controls="menu" aria-expanded="false"><?php _e( 'Top Menu', 'accesspress-mag' ); ?></button>
                <?php wp_nav_menu( array( 'theme_location' => 'top_menu', 'container_class' => 'menu', 'container_id' =>'apmag-top-header-menu', 'fallback_cb' => false ) ); ?>
            </nav><!-- #site-navigation -->
        </div><!--. top-menu-left -->
        
        <div class="top-menu-right">
            <nav id="top-right-navigation" class="top-right-main-navigation" role="navigation">
                <button class="menu-toggle hide" aria-controls="menu" aria-expanded="false"><?php _e( 'Top Menu Right', 'accesspress-mag' ); ?></button>
                <?php wp_nav_menu( array( 'theme_location' => 'top_menu_right', 'container_class' => 'menu', 'container_id' =>'apmag-top-right-header-menu', 'fallback_cb' => false ) ); ?>
            </nav><!-- #site-navigation -->
        </div><!-- .top-menu-right -->
    </div><!-- .apmag-container -->
</div><!-- .top-menu-wrapper -->