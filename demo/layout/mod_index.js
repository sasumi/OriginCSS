document.write(`
<div class="page-index">
	<div class="mod-wrap">
		<div class="mod">
			<div class="mod-ti">Mod Title</div>
			<div class="mod-ctn">
				content
			</div>	
		</div>
		<div class="mod">
			<div class="mod-ti">Mod Title</div>
			<div class="mod-ctn">
				content
			</div>	
		</div>
	</div>
</div>
<style>
.page-index {padding:1em 0;}
.page-index .mod-wrap {display:flex; flex-wrap:wrap; align-content:flex-start; align-items:center; gap:1em;}
.page-index .mod {width:20em; background-color:#fff; box-shadow:1px 1px 10px #ccc; border:1px solid #ccc;}
.page-index .mod-ctn {height:8em; padding:0.5em;}
.page-index .mod-ti {padding:0.5em;}
</style>
Index`);