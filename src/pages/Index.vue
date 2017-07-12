<template>
	<div class="index">
		<div class="banner">
			<img src="../assets/image/banner.jpg">
		</div>
		<section>
			<p class="date">
				<span>2015-4-5</span>
				<span>星期三</span>
			</p>
			<p class="recommend">
				<span>近日推荐:</span>
				<span>红烧肉</span>
			</p>
			<div class="btns">
				<button>更换</button>
				<button>保存</button>
			</div>
		</section>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.index {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.banner img {
		width: 100%;
	}
	section {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	section p, section div {
		font-size: 1.2rem;
		margin: .8rem;
	}
	.recommend span:first-child {
		margin-right: .5rem;
	}
	.btns button{
		font-size: 1.2rem;
		margin: 0 1rem;
		padding: .5rem 2rem;
		border: none;
		border-radius: .2rem;
	}
	.btns button:first-child {
		background-color: rgba(0, 0, 0, .1);
	}
	.btns button:last-child {
		background-color: #62b900;
		color: rgba(255, 255, 255, .9)
	}
	
</style>