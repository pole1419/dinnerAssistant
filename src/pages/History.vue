<template>
	<div class="history">
		<section>
			<p>
				<span>2017-7-7</span>
				<span>酸菜鱼</span>
			</p>
			<p>
				<span>2017-7-7</span>
				<span>酸菜鱼</span>
			</p>
			<p>
				<span>2017-7-7</span>
				<span>酸菜鱼</span>
			</p>
		</section>
		<button>清除记录</button>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.history {
		height: 100%;
		padding-top: 1rem;
		display: flex;
		flex-direction: column;
	}
	section {
		flex: 1;
		overflow: auto;
	}
	section p {
		margin: 1rem 0;
		text-align: center;

	}
	section p span:first-child {
		margin-right: .5rem;
	}
	button {
		background-color: rgba(0, 0, 0, .05);
		padding: .8rem 0;
		border: none;
		font-size: 1.1rem;
	}
</style>