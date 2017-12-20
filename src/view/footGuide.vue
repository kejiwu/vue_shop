<template>
  <footer class="foot">
       <ul class="footer-contain">
       	<li>1</li>
       	<li @click ="gotoAddress('/classify')" >2</li>
       	<li @click ="gotoAddress('/shop')">3</li>
       	<li>4</li>
       	<div class="clear"></div>
       </ul>
  </footer>
</template>
<script type="text/javascript">
export default {
  name: 'foot',
  methods:{
  	gotoAddress(path){
        		this.$router.push(path)
        	}
  }  	
}
</script>
<style type="text/css">
.foot{
	position: fixed;
	bottom: 0;
	width: 100%; 
	
	border-top:1px solid #eee;
	margin: 0 auto;
}
.footer-contain li{
	float: left;
	width: 25%;
	height: 50px;
	text-align: center;
	background: #fff;
	line-height: 50px;
	font-size: .28rem
}
</style>