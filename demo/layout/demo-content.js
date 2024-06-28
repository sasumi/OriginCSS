document.write(`
<div class="layout-page">
	<div class="layout-header">
		<header class="layout-logo">
	        <h1 class="logo"><a href="">OriginCss</a></h1>
	    </header>
	    <div class="layout-login-info">
	        <script src="mod_login_info.js"></script>
	    </div>
	    <div class="layout-main-nav">
	        <script src="main_nav.js"></script>
	    </div>
	</div>
    <div class="layout-content">
        <div data-mod="login">
            <script src="mod_login.js"></script>
        </div>
        <div data-mod="list">
            <script src="mod_breadcrumb.js"></script>
            <script src="mod_form_filter.js"></script>
            <script src="mod_list_toolbar.js"></script>
            <script src="mod_list.js"></script>
            <script src="mod_paginate.js"></script>
        </div>
        <div data-mod="info"><script src="mod_info.js"></script></div>
        <div data-mod="index"><script src="mod_index.js"></script></div>
        <div data-mod="create"><script src="mod_create.js"></script></div>
    </div>
    <footer class="layout-footer">
        <nav>
            <a href="">Copyrights</a>
            <a href="">Help</a>
            <a href="">About</a>
        </nav>
    </footer>
</div>
<style>
/** 默认样式 **/
.logo{padding:.25em 0.5em; font-size:1.5em;}
.logo a{color:var(--color);display:flex;align-items:center;}
.logo a:before{content:"☼"; font-size:2em; margin-right:0.25em; margin-top:-0.1em;}

.layout-content{padding:0 1em;}
.layout-content .breadcrumb,
.layout-content .form-filter,
.layout-content .table-data,
.layout-content .list-toolbar,
.layout-content .paginate {margin: 0.75em 0;}
.layout-content .table-data {width:100%;}

.layout-footer {color:#aaa; text-align:center;}
.layout-footer nav {display:inline-flex; gap:1em;}
.layout-footer a{color:inherit;}

</style>
`);