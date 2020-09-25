<?php
/**
 * Custom functions for WooCommerce compatibilty
 *
 * @package AccessPress Mag Pro
 * @since 2.2.3
 */

//Woo-commerce plugin activation
if ( ! function_exists( 'is_woocommerce_activated' ) ) {
    function is_woocommerce_activated() {
        if ( class_exists( 'woocommerce' ) ) { 
            $ap_woo_status = 'active';
            return true;
        } else {
            $ap_woo_status = 'deactive';
            return false;
        }
    }
}

if( is_woocommerce_activated() ):

// Display 12 products per page. Goes in functions.php
add_filter( 'loop_shop_per_page', 'apmag_woo_products_per_page', 20 );
if( !function_exists( 'apmag_woo_products_per_page' ) ) {
    function apmag_woo_products_per_page() {
        return 12;
    }
}

add_filter( 'loop_shop_columns', 'apmag_woo_loop_columns' );
if ( !function_exists( 'apmag_woo_loop_columns' ) ) {
    function apmag_woo_loop_columns() {
        return 3;
    }
}

add_action( 'body_class', 'apmag_woo_columns' );
if ( !function_exists( 'apmag_woo_columns' ) ) {
   function apmag_woo_columns( $class ) {
          $class[] = 'columns-3';
          return $class;
   }
}

add_filter( 'woocommerce_output_related_products_args', 'apmag_woo_related_products_args' );
  function apmag_woo_related_products_args( $args ) {
    $args['posts_per_page'] = 3; // 3 related products
    $args['columns'] = 3; // arranged in 3 columns
    return $args;
}

add_action( 'woocommerce_before_main_content', 'apmag_woocommerce_before_main_content', 9 );
function apmag_woocommerce_before_main_content() {
?>
    <div class="apmag-container">
    <header id="title_bread_wrap" class="entry-header">
        <div class="apmag-container">
            <div id="primary">
        
<?php
}

add_action( 'woocommerce_before_main_content', 'apmag_woocommerce_after_main_content', 21 );
function apmag_woocommerce_after_main_content() {
?>
            </div><!-- #primary -->
        </div><!-- .apmag-container -->
    </header>
    <div id="primary" class="content-area">
<?php
}

remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

add_action( 'woocommerce_after_main_content', 'apmag_woocommerce_after_shop_content', 11 );
function apmag_woocommerce_after_shop_content() {
?>
        </div><!-- #primary -->
        <?php get_sidebar( 'shop' ); ?>
    </div><!-- .apmag-container -->
<?php
}

remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );

endif;	