<template>
	<div class="home">
		<div class="mydiv">
			<van-icon size="4rem" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
			<span>登录立享手机电脑多端同步</span>
			<van-button loading type="info" loading-text="立即登录" />
		</div>
		<div class="mydao">
			<div>
				<router-link to="/bend">
					<van-icon color="#fff" size="2rem" name="music-o" />
				</router-link><br>
				本地音乐
			</div>
			<div>
				<router-link to="/xiaz">
					<van-icon color="#fff" size="2rem" name="down" />
				</router-link><br>
				下载管理
			</div>
			<div>
				<router-link to="/diant">
					<van-icon color="#fff" size="2rem" name="gift-o" />
				</router-link><br>
				我的电台
			</div>
			<div>
				<router-link to="/souc">
					<van-icon color="#fff" size="2rem" name="star-o" />
				</router-link><br>
				我的收藏
			</div>
			<div>
				<router-link to="/newm">
					<van-icon color="#fff" size="2rem" name="add-o" />
				</router-link><br>
				关注新歌
			</div>
		</div>
		<div class="mypos">
			<div class="mysr">
				<div class="myfon">我的音乐</div>
				<div class="mok">
					<van-icon size="1.6rem" name="fire-o" />
					<van-icon size="1.6rem" color="#000" name="arrow" />
				</div>
			</div>
			<div class="setr">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item>
						<router-link to="/gt"><img src="../assets/1.jpg" /></router-link>
						<router-link to="/as"><img src="../assets/2.jpg" /></router-link>
						<router-link to="/aj"><img src="../assets/3.jpg" /></router-link>
					</van-swipe-item>
					<van-swipe-item>
						<router-link to="/kk"><img src="../assets/4.jpg" /></router-link>
						<router-link to="/aa"><img src="../assets/5.jpg" /></router-link>
						<router-link to="/cc"><img src="../assets/6.jpg" /></router-link>
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="mypes">
				<div class="mysr">
					<div class="myfon">最近播放</div>
					<div class="mok">
						<span>更多</span>
						<van-icon size="1.6rem" color="#000" name="arrow" />
					</div>
				</div>
				<div class="bo">
					<div class="bo1">
						<img src="../assets/7.jpg">
						<div>
							<span>全部已播歌曲</span><br>
							<span>0首</span>
						</div>
					</div>
					<div class="bo2">
						<img src="../assets/8.jpg">
						<div>
							<span>歌单：致青春：每一首歌都是一个故事</span><br>
							<span>继续播放</span>
						</div>
					</div>
				</div>
				<div class="bot">
					<div class="bost">
						<div>创建歌单</div>
						<div>收藏歌单</div>
						<div>
							<van-icon size="2rem" name="ellipsis" />
						</div>
					</div>
					<van-button plain size="large" hairline type="info">+导入外部歌单</van-button>
					<div v-if="setpak">
						<div class="tj">
							<div>推荐歌单</div>
							<div>
								<van-icon name="cross" @click="mot()"/>
							</div>
						</div>
						<div class="buy">
							<div v-for="(mylit,index) in gtryser" :key="index">
								<img :src="mylit.url" />
								<div>
									<span>{{mylit.tie1}}</span><br>
									<span class="mysp">{{mylit.tie2}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
                gtryser:[
					{
						url:require('../assets/s1.jpg'),
						tie1:'云音乐热歌榜',
						tie2:'本周最热的歌曲'
					},
					{
						url:require('../assets/s2.jpg'),
						tie1:'云音乐新歌榜',
						tie2:'本周最火的新歌'
					},
					{
						url:require('../assets/s3.jpg'),
						tie1:'网络热歌分享【持续更新】',
						tie2:'本周热门收听'
					},
					{
						url:require('../assets/s4.jpg'),
						tie1:'私人雷达|根据听歌记录...',
						tie2:'本周热门收听'
					},
					{
						url:require('../assets/s5.jpg'),
						tie1:'神仙翻唱：超好听的翻唱...',
						tie2:'本周热门收听'
					},
					{
						url:require('../assets/s6.jpg'),
						tie1:'逃是逃不过心已着了火',
						tie2:''
					}
				],
				setpak:true
			}
		},
		methods:{
			mot(){
				this.setpak=!this.setpak
			}
		}
	}
</script>
<style>
	.mydiv {
		display: flex;
		line-height: 4rem;
	}
    .buy{
		display: flex;
		flex-wrap: wrap;
	}
	.mysp{
		font-size: 1rem;
		color: #999;
		line-height: 2rem;
	}
	.buy>div{
		width: 50%;
		display: flex;
		margin: 1rem 0;
	}
	.buy>div>img{
		width: 5rem;
		height: 5rem;
	}
	.buy>div>div{
		font-size: 1.2rem;
		margin-left: .7rem;
	}
	.mydiv>i {
		display: inline-block;
		margin-left: 1.6rem;
	}

	.mydiv>span {
		display: inline-block;
		margin-left: 1.2rem;
		font-size: 1.5rem;
		color: rgb(241, 234, 234);
	}

	.mydiv>button {
		display: inline-block;
		margin-left: 1.2rem;
		font-size: 1.5rem;
		color: rgb(241, 234, 234);
		margin-top: .8rem;
	}

	.mydao {
		margin: .5rem 0;
		display: flex;
	}

	.mydao>div {
		font-size: 1rem;
		text-align: center;
		flex: 1;
		color: #fff;
	}

	.mypos {
		height: 100rem;
		width: 100%;
		background: #fff;
		border-top-left-radius: 1.9rem;
		border-top-right-radius: 1.9rem;
		margin-top: 2rem;
	}

	.myfon {
		color: #000;
		font-size: 1.5rem;
		margin-left: 1.5rem;
		float: left;
		font-weight: 600;
	}

	.mysr::after {
		clear: both;
		content: '';
		display: block;
	}

	.mysr {
		padding: 1rem 0;
	}

	.mok {
		float: right;
		margin-right: 1.2rem;
		display: flex;
	}

	.mok>span {
		font-size: 1.4rem;
		display: inline-block;
	}

	.my-swipe .van-swipe-item {
		padding-right: 1rem;
		box-sizing: border-box;
		width: 100%;
	}

	.my-swipe .van-swipe-item a img {
		width: 30%;
		margin-left: 1.2rem;
		display: inline-block;
	}

	.setr {
		width: 100%;
		margin: 1rem 0;
	}

	.bo {
		padding: 1rem 1.5rem;
		box-sizing: border-box;
		display: flex;
	}

	.bo1 {
		display: flex;
		width: 50%;
	}

	.bo2 {
		width: 50%;
		display: flex;
	}

	.bo>div>img {
		width: 5rem;
		height: 5rem;
	}

	.bo>div>div span {
		display: inline-block;
		font-size: 1.2rem;
		margin-left: .7rem;
		line-height: 1.3rem;
	}

	.bo>div>div span:first-child {
		margin-top: .4rem;
	}

	.bo>div>div span:last-child {
		line-height: 2.5rem;
		font-size: 1rem;
		color: #999;
	}

	.bot {
		padding: .5rem 1.3rem;
		box-sizing: border-box;
	}

	.bost {
		margin: .7rem 0;
	}

	.bost::after {
		clear: both;
		content: '';
		display: block;
	}

	.bost>div:first-child {
		float: left;
		line-height: 2rem;
		font-size: 1.5rem;
	}

	.bost>div:nth-child(2) {
		float: left;
		margin-left: 1rem;
		line-height: 2rem;
		font-size: 1.5rem;
	}

	.bost>div:last-child {
		float: right;
		width: 2rem;
		height: 2rem;
		transform: translateX(1rem) rotate(270deg);
	}
	.tj::after {
		clear: both;
		display: block;
		content: '';
	}

	.tj>div:first-child {
		float: left;
		font-size: 1.5rem;
		line-height: 4rem;
	}

	.tj>div:last-child {
		float: right;
		font-size: 1.5rem;
		line-height: 4rem;
	}
</style>
