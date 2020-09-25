<?php
/**
 * Sidebar for woo-commerce shop and it's related pages
 *
 * @package AccessPress Mag Pro
 */

if ( ! is_active_sidebar( 'shop' ) ) {
	return;
}
?>

<div id="secondary-right-sidebar" class="widget-area shop-sidebar" role="complementary">
	<div id="secondary">
		<?php dynamic_sidebar( 'shop' ); ?>
	</div>
</div><!-- #secondary -->