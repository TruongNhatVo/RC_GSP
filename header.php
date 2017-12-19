<?php
/**
 * The Header for our theme
 *
 * @package WordPress
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title>GSPエンタープライズ</title>
    <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon" type="image/x-icon" />
</head>
<?php wp_head(); ?>

<body>
    <div <?php
            if (is_page_template('technology/index.php') || is_page_template('technology_2/index.php') ) {
                echo 'id="technology"';
            } else if (is_page_template('contact/index.php')){
                echo 'id="contact"';
            } else if (is_page_template('links/index.php')){
                echo 'id="links"';
            } else if (is_page_template('privacy/index.php')){
                echo 'id="privacy"';
            } else if (is_page_template('faq/index.php')){
                echo 'id="faq"';
            } else if (is_home()){
                echo 'id="top"';
            } else {
                return 0;
            } ?> class="wrapper">
        <header>
            <div class="container">
                <h1 class="logo">
                <a href="<?php echo home_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/common/images/logo.png" alt="株式会社GSPエンタープライズ"></a>
            </h1>
                <div class="btnSp is_sp">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="lng_menu is_pc">
                    <li><a href="<?php echo home_url(); ?>/" class="btn-lang">ENGLISH</a></li>
                    <li><a href="<?php echo home_url(); ?>/en/" class="btn-lang">日本語</a></li>
                </ul>
                <nav class="menuMain">
                    <ul class="mainNav">
                        <li><a href="<?php echo home_url(); ?>/">HOME</a></li>
                        <li><a href="<?php echo home_url(); ?>/#about">研究施設の方へ</a></li>
                        <li><a href="<?php echo home_url(); ?>/technology/">研究開発・技術情報</a></li>
                        <li><a href="<?php echo home_url(); ?>/faq/">よくある質問</a></li>
                        <li><a href="<?php echo home_url(); ?>/#company">会社案内</a></li>
                        <li><a href="<?php echo home_url(); ?>/contact/">お問い合わせ</a></li>
                        <li class="is_sp">
                            <a href="<?php echo home_url(); ?>/" class="btn-lang">日本語</a>
                            <a href="<?php echo home_url(); ?>/en/" class="btn-lang">ENGLISH</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <!-- ./header -->
