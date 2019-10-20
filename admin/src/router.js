import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoryList from './views/CategoryList.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import ItemList from './views/ItemList.vue'
import ItemEdit from './views/ItemEdit.vue'
import ArticleList from './views/ArticleList.vue'
import ArticleEdit from './views/ArticleEdit.vue'
import HeroList from './views/HeroList.vue'
import HeroEdit from './views/HeroEdit.vue'
import AdList from './views/AdList.vue'
import AdEdit from './views/AdEdit.vue'
import AdminUserList from './views/AdminUserList.vue'
import AdminUserEdit from './views/AdminUserEdit.vue'

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

        {path: '/heroes/list', component: HeroList},
        {path: '/heroes/create', component: HeroEdit},
        {path: '/heroes/edit/:id', component: HeroEdit, props: true},

        {path: '/ads/list', component: AdList},
        {path: '/ads/create', component: AdEdit},
        {path: '/ads/edit/:id', component: AdEdit, props: true},

        {path: '/admin_users/list', component: AdminUserList},
        {path: '/admin_users/create', component: AdminUserEdit},
        {path: '/admin_users/edit/:id', component: AdminUserEdit, props: true},

      ]
    },

  ]
})
