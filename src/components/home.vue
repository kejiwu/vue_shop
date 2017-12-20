<template>
  <div style="width:100%;">
  <head-top></head-top>
  <section>
    <ul class="menulist" >
      <li v-for="item in list"><a><img src="../assets/3.png"></a><span>{{item}}</span></li>
      <div class="clear"></div>
    </ul>
  </section>
  <div class="home">
    <vegetable-list></vegetable-list>
   </div>
   <foot-guide></foot-guide>
   </div>
</template>
<script>
import footGuide from '../view/footGuide'
import headTop from '../view/headtop'
import vegetableList from '../view/vegetablelist'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
    
    }
  },
   computed: mapState({
    list: state => state.menulists
  }),
  components: {
    footGuide,
    headTop,
    vegetableList
  },
  created:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  padding:0;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li{
  display: inline-block;
  margin: 0 ;
}

a {
  color: #42b983;
}
.menulist{
  padding: 50px .3rem 8px .3rem;
  width: 100%;
  box-sizing: border-box;
}
.menulist li{
    float: left;
    width: 25%;
    text-align: center;
    display: block;
    font-size: 12px;
    margin-bottom: 6px;
    color: #645b5b;
}
.menulist li a{
    display: block;
    margin: 0 auto;
    width: .8rem;
    height: .8rem;
    margin-bottom: 2px;
}
.menulist li img{
    width: 100%;
    display: block;
}
</style>
