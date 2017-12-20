import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
	menulists: ['有机蔬菜','活鸡蛋','无子瓜','有机果','有机菜','有机米','海鲜','更多'],
	message:'hello'
	
}

const store = new Vuex.Store({
      state
})

export default store