import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoryList from './views/CategoryList.vue'
import CategoryEdit from './views/CategoryEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {path: '/categories/list', component: CategoryList},
        {path: '/categories/create', component: CategoryEdit},
        {path: '/categories/edit/:id', component: CategoryEdit, props: true },
      ]
    },

  ]
})
