document.write(`
<h1>OriginCSS Demo</h1>
<link rel="stylesheet" href="./../release/origincss-default.css">
<header class="layout-header">
    <nav class="main-nav">
        <a href="index.html">Index</a>
        <a href="button.html">Button</a>
        <a href="input.html">Input</a>
        <a href="menu.html">Menu</a>
        <a href="form.html">Form</a>
        <a href="table.html">Table</a>
        <a href="otp.html">OTP</a>
        <a href="progress.html">Progress</a>
        <a href="scrollbar.html">Scrollbar</a>
        <a href="layout.html">Layout</a>
        <a href="code.html">Code</a>
        <a href="misc.html">Misc</a>
    </nav>  
</header>
<style>
    body {padding:0 1em 3em 1em;;}
    h1, h2, h3, h4, h5, h6 {margin:0.5em 0;}
    h1 {font-size:2rem;}
    h2 {font-size:1.6rem;}
    h3 {font-size:1.4rem;}
    h4 {font-size:1.2rem;}
    h5 {font-size:1rem;}
    header {margin-bottom:1em; border-bottom:1px solid #ccc; padding-bottom:1em;}
    .main-nav {display:flex; gap:1em; flex-wrap:wrap}
    .main-nav a {display:block; padding:0.5em 2em; border:1px solid var(--color-link); border-radius:20px}
    .main-nav a.active {background-color:var(--color-link); color:white;}
</style>
`);
onReady(() => {
	let f = /\w+\.html$/.exec(location.pathname);
	document.querySelectorAll('.main-nav a').forEach(a => {
		if(a.href.indexOf(f[0]) >= 0){
			a.classList.add('active');
		}
	});
});