<template>
	<div class="ios">
		<div class="mypot">
			<input type="text" :placeholder="kit" @input="mysong()" v-model="query" />
		</div>
		<div class="mt">
			<div v-for="(mylit,index) in mylist" :key="index">
				{{mylit.name}}
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	export default {
		data() {
			return {
				query: "",
				mylist: [],
				kit: '霍元甲周杰伦'
			}
		},
		methods: {
			mysong() {
				if (this.query == "") {
					console.log(0);
				} else {
					axios({
							url: "search?keywords=" + this.query,
							method: "get",
						})
						.then((rel) => {
							this.mylist = rel.data.result.songs;
							console.log(this.mylist);
						})
						.catch(function() {
							console.log("华晨宇");
						});
				}
			},
		}
	}
</script>

<style>
	.ios {
		background: #fff;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	.mypot {
		padding: 1rem 0;
	}

	.mypot>input {
		width: 90%;
		height: 3rem;
		border-radius: .5rem;
		text-indent: 1rem;
		font-size: 1.6rem;
	}

	.mt {
		width: 100%;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}
	.mt>div{
		font-size: 1.6rem;
	}
</style>
