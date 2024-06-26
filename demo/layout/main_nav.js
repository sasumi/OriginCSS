document.write(`
<ul class="main-nav">
    <li><a href="" data-mod-target="index" class="active">Index</a></li>
    <li><a href="" data-mod-target="list">List</a></li>
    <li><a href="" data-mod-target="create">Create</a></li>
    <li><a href="" data-mod-target="info">Info</a></li>
</ul>`);

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
				m.style.display = '';
			}else{
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