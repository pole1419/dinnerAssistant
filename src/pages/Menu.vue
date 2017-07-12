<template>
	<div class="menu">
		<div class="header">
			<input placeholder="输入并添加" />
		</div>
		<div class="list">
			<p class="item">lsdjflsds</p>
			<p class="item">lsdjflsds</p>
			<p class="item">lsdjflsds</p>
			<p class="item">lsdjflsds</p>
			<p class="item">lsdjflsds</p>
		</div>
		<div class="btns">
			<button>删除已选</button>
			<button>删除所有</button>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.menu {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.header {
		padding: 1rem;
		display: flex;
		justify-content: center;
	}
	.header input {
		height: 2rem;
		width: 90%;
		padding: 0 .5rem;
		border: 1px solid rgba(0, 0, 0, .2);
		border-radius: .3rem;
	}
	.list {
		flex: 1;
		overflow: auto;
	}
	.list .item {
		padding: 1rem 0;
		text-align: center;
	}
	.btns {
		display: flex;
		flex-direction: column;
	}
	.btns button {
		background-color: rgba(0, 0, 0, .05);
		padding: .8rem 0;
		border: none;
		font-size: 1.1rem;
	}
	.btns button:first-child {
		border-bottom: 1px solid rgba(0, 0, 0, .2);
	}

</style>