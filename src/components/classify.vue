<template>
  <section class="classify">
      <header>
       <div>
      	<i class="fa fa-angle-left" aria-hidden="true" @click="back()"></i>
          <span class="classif_title">新鲜蔬菜</span>
      	<i class="fa fa-shopping-cart fa-fw"></i>
        <div class="clear"></div>
        </div>
      </header>
      <section class="shop_contain">
         <section class="container">
          <section class="classify_left">
            <ul>
              <li>叶菜类</li>
              <li>根茎类</li>
              <li>豆类</li>
              <li>葱姜类</li>
              <li>特价</li>
              <li>茄果</li>
            </ul>
          </section>
           <section class="classify_right">
            <ul>
              <li>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section></li>
               <li>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section></li>
              <li>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section></li>
              <li>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section>
              <section><img src="../assets/baicai.jpg"><div class="classify_name">太古白菜</div><P class="pay"><em>￥5.99</em><i class="fa fa-shopping-cart fa-fw shopping"></i><div class="clear"></div></P></section></li>
            </ul>

          </section>
          <div class="clear"></div>
          </section>
      </section>
  </section>
</template>
<script>
export default {
  name: 'classify',
  data () {
    return {
     
    }
  },
  mounted:function(){
    var h=document.body.clientHeight
     var container=document.getElementsByClassName('container')[0]
     var classifyRight=document.getElementsByClassName('classify_right')[0]
    var headerh=document.getElementsByTagName('header')[0]
    var clienth=h-headerh.clientHeight
     container.style.height=clienth+'px';
     classifyRight.style.height=clienth+'px';
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
<style >
html,body{
  height: 100%;
}
#app{
  height: 100%
}
.classify{
	width: 100%;
  height: 100%;
  background:#eee;

}
header{
	  height: 1rem;
    width: 100%;
    background: rgba(82, 181, 182, 0.83);
    color: #fff;
}
.container{
  overflow: hidden;
  display: flex;
  flex: 1;

}
.fa-shopping-cart{
  
    font-size: .6rem !important;
    float: right;
    margin: 15px 5px 0 0 ;
}
.fa-angle-left{
    margin: 15px 0 0 5px;
    float: left;
    font-size: .6rem !important;
}
.classif_title{
  font-size: .36rem;
  vertical-align: middle; 
  margin-left: 10px;
}
.shop_contain{
display: flex;
flex: 1;
width: 100%;
}
.classify_left{
  float: left;
  width: 1.5rem;
  background:#eee;

}
.classify_left li{
  width: 1.5rem;
  font-size: 14px;
  padding:15px 0;
  text-align: center;
  border-bottom: 1px solid #dbd7d7;
}
.classify_right{
  display: flex;
  float: right;
  overflow-y: auto;
}
.classify_right li section{
  float: left;
  font-size: 14px;
}
.classify_right li section{ 
    width: 2.8rem;
    background: #fff;
    margin:.15rem  0 0 .2rem;
}
.classify_right li section img{ 
   width: 2.5rem;
   height: 2.5rem;
}
.classify_name{
    text-align: left;
    padding-left: .1rem;
    font-size: 12px
}
.pay {
  padding: .1rem;
   color: red;
}
.pay em{
  font-style: normal;
  float: left;
}
.shopping{
  font-size: 18px;
  float: right;
  margin-top: 0;

}
</style>