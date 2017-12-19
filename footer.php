        <footer>
            <div class="container">

                <?php
                    if (is_page_template('technology/index.php')) {
                        get_template_part('include/box_technology');
                    } else if (is_page_template('links/index.php')){
                        get_template_part('include/box_links');
                    } else if (is_page_template('privacy/index.php')){
                        get_template_part('include/box_privacy');
                    } else if (is_page_template('faq/index.php')){
                        get_template_part('include/box_faq');
                    } else if (is_home()){
                        get_template_part('include/box_index');
                    } else {
                        echo "";
                    }
                ?>
                <div class="group">
                    <img src="<?php echo get_template_directory_uri(); ?>/common/images/logo_footer.png" alt="株式会社 GSP 〒567-0085 大阪府茨木市彩都あさぎ7-7-15 彩都バイオインキュベータ106号室">
                    <div class="groupBtn">
                        <a href="<?php echo home_url(); ?>/privacy/" class="btn-small">個人情報の取扱について</a>
                        <a href="<?php echo home_url(); ?>/links/" class="btn-small">リンク</a>
                    </div>
                </div>
            </div>
        </footer>
        <div class="copyright">
            <p class="tac">&copy;GSP Enterprise, Inc.</p>
        </div>
    </div>
    <!-- ./footer -->
    <?php wp_footer(); ?>
</body>

</html>
