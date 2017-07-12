<template>
	<header>
		<i></i>
		<span class="center">header</span>
		<span class="right">feedback</span>
	</header>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	header {
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		border-bottom: .5px solid rgba(0, 0, 0, .05);
	}
	header i {
		border-left: 1px solid rgb(143, 212, 7);
		border-bottom: 1px solid rgb(143, 212, 7);
		width: .8rem;
		height: .8rem;
		transform: rotate(45deg);
	}
	header .center {
		position: absolute;
		width: 100%;
		text-align: center;
		font-style: 1.5rem;
	}
	header i, header .right {
		margin: 0 1rem;
	}


</style>