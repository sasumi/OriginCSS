document.write(`
<form>
	<div class="form-caption">Login Form</div>
	<table class="form-portrait">
		<tbody>
			<tr>
				<th>Account:</th>
				<td>
					<input type="text" name="" id="">   
				</td>
			</tr>
			<tr>
				<th>Password:</th>
				<td>
					<input type="password" name="" id="">
				</td>
			</tr>
			<tr class="form-submit-row">
				<td>
					<input type="submit" value="Login" data-mod-target="index">
					<a href="" class="button button-outline">Register</a>
				</td>
			</tr>
		</tbody>
	</table>
</form>
<style>
[data-mod="login"] {
	display:flex;
	width:100%;
	height:calc(100vh - 5em);
	justify-content: center;
    align-items: center;
}
[data-mod="login"] form {
	background-color:#fff;
	width:20em;
	padding:2em;
	box-shadow:1px 1px 30px #ccc;
	border-radius: 10px;
    border: 1px solid #ddd;
}

html:has([data-mod="login"].mod-active) {
	background-color:#eee;
}

html:has([data-mod="login"].mod-active) .layout-page {
	display:block;
}
html:has([data-mod="login"].mod-active) .layout-header{
	display:none;
}
</style>
`)