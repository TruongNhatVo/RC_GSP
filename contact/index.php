<?php
/**
 ** Template Name: contact
 **/
 get_header(); ?>
        <div class="breadcumb">
            <div class="container">
                <h2 class="title-h2-breadcumb">お問い合わせフォーム</h2>
            </div>
        </div>
        <!-- ./breadcumb -->
        <div class="contact">
            <div class="container">
                <div class="content">
                    <p class="txt">
                        GSPエンタープライズにご興味いただき
                        <br> 誠にありがとうございます。
                        <br> 右記フォームに必要事項をご入力の上
                        <br> 「入力内容を確認」ボタンを押してご送信ください。
                    </p>
                </div>
                <form class="form">
                    <div class="input-group">
                        <div class="label-group">
                            <label for="select" class="txt-label">お問い合わせ内容</label>
                            <span class="require">Require</span>
                        </div>
                        <div class="input">
                            <select id="select" required>
                                <option value="option1">（お選びください）</option>
                                <option value="option2">（お選びください）</option>
                                <option value="option3">（お選びください）</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="label-group">
                            <label for="name" class="txt-label">氏名</label>
                            <span class="require">Require</span>
                        </div>
                        <div class="input input-name">
                            <input id="name" type="text" placeholder="姓" required>
                            <input type="text" placeholder="名" required>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="label-group">
                            <label for="for" class="txt-label">所属</label>
                            <span class="require">Require</span>
                        </div>
                        <div class="input">
                            <input id="for" type="text" required>
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="location" class="txt-label">役職（任意）</label>
                        <div class="input">
                            <input id="location" type="text">
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="label-group">
                            <label for="email" class="txt-label">メールアドレス</label>
                            <span class="require">Require</span>
                        </div>
                        <div class="input">
                            <input id="email" type="text" required>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="label-group">
                            <label for="email-comfirm" class="txt-label">メールアドレス（確認用）</label>
                            <span class="require">Require</span>
                        </div>
                        <div class="input">
                            <input id="email-comfirm" type="text" required>
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="field" class="txt-label">記入欄</label>
                        <div class="input">
                            <textarea id="field" rows="15"></textarea>
                        </div>
                    </div>
                    <div class="checkbox-group">
                        <label for="field" class="txt-label">今後、弊社からの情報提供をご希望されますか？</label>
                        <div class="input">
                            <span>どちらかチェックください</span>
                            <input type="checkbox">
                            <span>希望する</span>
                            <input type="checkbox">
                            <span class="last">希望しない</span>
                        </div>
                    </div>
                    <button type="submit" class="btn">入力内容を確認</button>
                </form>
            </div>
        </div>
        <!-- ./contact -->
        <?php get_footer(); ?>
