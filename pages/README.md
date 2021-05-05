# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

# 01. Hello World
***pages/index.vue*** and ***pages/about.vue*** show how Nuxt server renders the page on first load or on hard refresh and renders the page on client side when navigating using the \<NuxtLink> component.

***pages/index.vue*** 와 ***pages/about.vue*** 는 페이지를 처음 로드하거나 강력 새로고침을 했을 때, 어떻게 Nuxt 서버가 렌더해주는지 보여준다.
그리고 \<NuxtLink> 컴포넌트를 사용하여 이동(navigate) 할 때, Nuxt 서버가 어떻게 client 쪽에 페이지를 렌더하는지 보여준다.

# 02. Loading
## Customize Nuxt Loading
***nuxt.config.js*** contains the ***loading*** property which modifies the default loader. 
***pages/loading.vue*** programmatically starts the loader so we force the page to take 2 seconds to load

***nuxt.config.js***에는 디폴트 로딩을 수정하는 ***loading*** 속성이 있다. ***pages/loading.vue*** 는 프로그래밍적으로(?) 로더를 시작하므로, 우리가 페이지 로딩을 실행 할 때 2초가 걸린다.