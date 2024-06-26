document.write(`
	<ul class="main-nav">
	    <li><a href="" data-mod-target="index">Index</a></li>
	    <li>
	        <a href="" data-mod-target="list" class="active">Model1</a>
	        <ul>
	            <li><a href="">Sub Page1</a></li>
	            <li><a href="">Sub Page2</a></li>
	            <li><a href="">Sub Page3</a></li>
	            <li><a href="">Sub Page4</a></li>
	            <li><a href="">Sub Page5</a></li>
			</ul>
	    </li>
	    <li>
	        <a href="" data-mod-target="create">Model2</a>
	        <ul>
	            <li><a href="">Sub Page6</a></li>
	            <li><a href="">Sub Page7</a></li>
	            <li><a href="">Sub Page8</a></li>
	            <li><a href="">Sub Page9</a></li>
			</ul>
		</li>
	    <li><a href="" data-mod-target="info">Info</a></li>
	</ul>
`);

onReady(() => {
	let mod_triggers = document.querySelectorAll('[data-mod-target]');
	let mods = document.querySelectorAll('[data-mod]');

	const showMod = (mod)=>{
		mod_triggers.forEach(trigger=>{
			trigger.classList.remove('active');
			if(trigger.getAttribute('data-mod-target') === mod){
				trigger.classList.add('active');
			}
		});
		mods.forEach(m => {
			if(m.getAttribute('data-mod') === mod){
				m.classList.add('mod-active');
				m.style.display = '';
			}else{
				m.classList.remove('mod-active');
				m.style.display = 'none';
			}
		})
	}

	mod_triggers.forEach(trigger => {
		trigger.addEventListener('click', e => {
			let target = trigger.getAttribute('data-mod-target');
			showMod(target);
			e.preventDefault();
			return false;
		});
		if(trigger.classList.contains('active')){
			let target = trigger.getAttribute('data-mod-target');
			showMod(target);
		}
	})
})