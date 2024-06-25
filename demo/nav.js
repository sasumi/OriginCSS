document.write(`
<h1>OriginCSS Demo</h1>
<link rel="stylesheet" href="./../release/default.css">
<header class="layout-header">
    <nav class="main-nav">
        <a href="index.html">Index</a>
        <a href="button.html">Button</a>
        <a href="input.html">Input</a>
        <a href="form.html">Form</a>
        <a href="table.html">Table</a>
        <a href="otp.html">OTP</a>
        <a href="layout.html">Layout</a>
        <a href="code.html">Code</a>
    </nav>  
</header>
<style>
    body {padding:1em;}
    h1, h2, h3, h4, h5, h6 {margin:0.5em 0;}
    h1 {font-size:2rem;}
    h2 {font-size:1.6rem;}
    h3 {font-size:1.4rem;}
    h4 {font-size:1.2rem;}
    h5 {font-size:1rem;}
    .main-nav {display:flex; gap:1em;}
    .main-nav a {display:block; padding:0.5em 2em; border:1px solid var(--color-link); border-radius:20px}
    .main-nav a.active {background-color:var(--color-link); color:white;}
</style>
`);
setTimeout(()=>{
	let f = /\w+\.html$/.exec(location.pathname);
	document.querySelectorAll('.main-nav a').forEach(a=>{
		if(a.href.indexOf(f[0]) >= 0){
			a.classList.add('active');
		}
	});
}, 10);