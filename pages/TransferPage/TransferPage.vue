<template>
	<view>
		{{initData}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				initData: ''
			}
		},
		methods: {
			
		},
		onLoad(options){
			console.log(options);
			this.initData=options
		}
	}
</script>

<style>

</style>
