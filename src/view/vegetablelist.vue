<template>
  <section class="vegetablelist">
  <div>
  <h1>最新上架</h1>
       <ul class="vegetablelist-contain">
       	<li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>
        <li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>
        <li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>
       	<li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>            
       	<div class="clear"></div> 
       </ul>
    </div>
   <div>
    <h2>人气推荐</h2>
       <ul class="vegetablelist-recommend">
        <li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>
        <li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>
        <li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>
        <li><P><span>太古白菜</span><em>￥5.99</em><div class="clear"></div></P><img src="../assets/baicai.jpg"></li>            
        <div class="clear"></div> 
       </ul>
    </div>
  </section>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
  name: 'vegetable',
  computed:mapState({

  })
}
</script>
<style>
.clear{
  clear: both;
}
  .vegetablelist{
    padding: 0 .6rem;
    margin-bottom: 52px;
  } 
  .vegetablelist h1,.vegetablelist h2{
    font-size: .32rem;
    color: #ebc14d;
    text-align: left;
    
  }
  .vegetablelist-contain li,.vegetablelist-recommend li{
     font-size: 12px;
     float: left;
     width:30%;
     margin-right:5%;
     box-sizing: border-box;
     margin-bottom: 8px;
  }
  .vegetablelist-contain li:nth-child(3n),.vegetablelist-recommend li:nth-child(3n){
     margin-right:0;
  }
  .vegetablelist-contain li p,.vegetablelist-recommend li p{
     margin-bottom: 5px;
  }
  .vegetablelist-contain li span,.vegetablelist-recommend li span{
     float: left;

  }
  .vegetablelist-contain li em,.vegetablelist-recommend li em{
    font-style: normal;
    float: right;
    margin-right:5px;
    color: red;
  }
  .vegetablelist-contain li img,.vegetablelist-recommend li img{
    width: 95%;
    margin-left:5%;
  }
</style>