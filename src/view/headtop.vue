<template>
  <header class="head-top">
  <p>
   <img>
   </p>
   <input class="search" type="text" placeholder="搜索您喜欢的蔬菜">
   <span>搜索</span>
   <div class="clear"></div>
  </header>
</template>
<script type="text/javascript">
export default {
  name: 'head',

}
</script>
<style type="text/css">
.head-top{
	position:fixed;
	max-width: 100%;
	top: 0;
  left: 0;
    box-sizing: border-box;
	background: #f3f3f3;
	padding: 8px .1rem 8px .2rem;
}
.head-top p{
	width: .4rem;
	height: 30px;
	float: left;
}
.head-top img{
	display: block;
	border-radius: 50%;
	
	margin-right: 5px;
}
.search {
    width: 5.4rem;
    height: 30px;
    float: left;
    border: 1px solid #ffffff;
    border-radius: 2px;
    outline: none;
    box-sizing: border-box;
    padding-left: 30px;
    background: #fff url(../assets/search.png) no-repeat;
    background-size: 20px;
    background-position: 3px 4px;
}
.head-top span {
    width: 1.4rem;
    height: 30px;
    float: right;
    line-height: 30px;
    text-align: center;
    font-size: .22rem;
    color: #6e6666;
}
</style>