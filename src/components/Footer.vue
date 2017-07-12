<template>
	<footer>
		<div v-for="m in menus" @click="clickItem(m.title)">
			<img v-if="m.title === currTab" :src="m.currBackImg">
			<img v-else :src="m.backImg">
			<span v-text="m.title"></span>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				currTab: '首页',
				menus: [
					{
						title: '首页',
						backImg: require('../assets/image/home.png'),
						currBackImg: require('../assets/image/home_on.png'),
					},
					{
						title: '菜单',
						backImg: require('../assets/image/menu.png'),
						currBackImg: require('../assets/image/menu_on.png'),
					},
					{
						title: '记录',
						backImg: require('../assets/image/history.png'),
						currBackImg: require('../assets/image/history_on.png'),
					}
				]
			}
		},

		methods: {
			clickItem(title) {
				this.currTab = title
				const tab = title === '首页' ? 'index' : title === '菜单' ? 'menu' : 'history'
				this.$router.push(tab)
			}
		}
	}
</script>

<style scoped>
	footer {
		height: 5rem;
		display: flex;
	}
	footer div {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	footer div img{
		width: 1.5rem;
		height: 1.5rem;
	}
</style>