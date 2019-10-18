import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoryList from './views/CategoryList.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import ItemList from './views/ItemList.vue'
import ItemEdit from './views/ItemEdit.vue'
import ArticleList from './views/ArticleList.vue'
import ArticleEdit from './views/ArticleEdit.vue'

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

        {path: '/items/list', component: ItemList},
        {path: 'items/create', component: ItemEdit},
        {path: 'items/edit/:id', component: ItemEdit, props: true},

        {path: '/articles/list', component: ArticleList},
        {path: '/articles/create', component: ArticleEdit},
        {path: '/articles/edit/:id', component: ArticleEdit, props: true},

      ]
    },

  ]
})
