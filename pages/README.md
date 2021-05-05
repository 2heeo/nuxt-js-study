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

## Customize Nuxt Loading Indicator
***nuxt.config.js*** contains:

- ***ssr***: ***false*** so we only have client side rendering (false, 따라서 client 쪽 렌더링만 가진다)
- ***loadingIndicator*** property to modify the default spinner (디폴트 스피너를 수정하기 위한 ***loadingIndicator*** 속성)

### ??
- 프로젝트를 run 할 때만 커스텀 로딩화면이 보이고, 페이지가 로드된 이후 새로고침을 하면 로딩화면이 안보임
- nuxt.config.js에서 loadingIndicator를 추가하고, 기존의 loading 속성은 삭제해야 하는 것인가?

## Custom Loading Component
- ***components/LoadingBar.vue*** shows a custom loading spinner to use instead of the default loading bar. (***components/LoadingBar.vue***는 디폴트 로딩 바 대신 사용할 커스텀 로딩 스피너를 보여준다.)
- ***nuxt.config.js*** contains the ***loading*** property which imports the loading component (***nuxt.config.js***은 로딩 컴포넌트를 임포트하는 ***loading*** 속성을 가진다.)
- ***pages/loading.vue*** programmatically starts the loader so we force the page to take 2 seconds to load (***pages/loading.vue***는 프로그래밍적으로 로더를 시작하기 때문에, 페이지를 실행하는데 2초가 걸린다)


