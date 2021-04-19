<?php
$resposta = wp_remote_get('https://roraimaemfoco.com/wp-json/wp/v2/posts');

	$header = $resposta['headers'];
	$body = $resposta['body'];
	$data = json_decode( $body);

?>
/** conteudo 
		 */
		<?php 
			echo '<ul>';
		
			foreach( $data as $rest_post ) { ?>
			<li> <strong><?php echo $rest_post->title->rendered; ?> </strong>  escrito em <?php echo $rest_post->date; ?> </li>
				
			<?php }?>

			</ul>