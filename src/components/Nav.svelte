<script>
	export let segment;
</script>

<style>
	@media (min-width: 769px) {
		nav {
			border-bottom: solid rgb(250, 56, 56) 1px;
		}
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img src="logo.jpg" alt="virus" width="40" height="25"/>
		</a>
		<span class="navbar-burger"	aria-label="menu" aria-expanded="false">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</span>
	</div>
	<div class="navbar-menu">
		<div class="navbar-start">
			<a href="/" class="navbar-item">Home</a>
			<a href="/about" class="navbar-item">About</a>
		</div>
	</div>
</nav>