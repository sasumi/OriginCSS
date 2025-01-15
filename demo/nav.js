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
<link rel="stylesheet" href="demo.css">
`);
onReady(() => {
	let f = /\w+\.html$/.exec(location.pathname);
	document.querySelectorAll('.main-nav a').forEach(a => {
		if(a.href.indexOf(f[0]) >= 0){
			a.classList.add('active');
		}
	});
});