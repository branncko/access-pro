<?php

/**  ----------------------------------------------------------------------------
*    Full width logo - the ad is separate
* 
* @package Accesspress Mag Pro
*/

$apmag_logo_alt = of_get_option( 'logo_alt' );
$apmag_logo_title = of_get_option( 'logo_title' );
$header_text_option = get_header_textcolor();
?>
<div class="logo-ad-wrapper header-style-2 clearfix">
    <div class="apmag-container">
		<div class="site-branding full-logo">
            <?php if( $header_text_option != 'blank' ) { ?>
            <div class="sitetext-wrap">  
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
    			    <h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
    			    <h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
                </a>
            </div>
            <?php } ?>
            <?php if ( get_header_image() ) { ?>
            <div class="sitelogo-wrap">
                <a itemprop="url" href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <img src="<?php header_image(); ?>" alt="<?php echo esc_attr( $apmag_logo_alt ); ?>" title="<?php echo esc_attr( $apmag_logo_title ); ?>" />
                </a>
                <meta itemprop="name" content="<?php bloginfo( 'name' )?>" />
            </div>
            <?php } ?>
        </div><!-- .site-branding -->
    </div><!-- .apmag-container -->   
</div><!-- .logo-ad-wrapper -->