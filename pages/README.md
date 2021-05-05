# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

# 01. Hello World
`pages/index.vue` and `pages/about.vue` show how Nuxt server renders the page on first load or on hard refresh and renders the page on client side when navigating using the `<NuxtLink>` component.

`pages/index.vue` 와 `pages/about.vue` 는 페이지를 처음 로드하거나 강력 새로고침을 했을 때, 어떻게 Nuxt 서버가 렌더해주는지 보여준다.
그리고 `<NuxtLink>` 컴포넌트를 사용하여 이동(navigate) 할 때, Nuxt 서버가 어떻게 client 쪽에 페이지를 렌더하는지 보여준다.

# 02. Loading
## Customize Nuxt Loading
`nuxt.config.js` contains the `loading` property which modifies the default loader. 
`pages/loading.vue` programmatically starts the loader so we force the page to take 2 seconds to load

`nuxt.config.js`에는 디폴트 로딩을 수정하는 `loading` 속성이 있다. `pages/loading.vue` 는 프로그래밍적으로(?) 로더를 시작하므로, 우리가 페이지 로딩을 실행 할 때 2초가 걸린다.

## Customize Nuxt Loading Indicator
`nuxt.config.js` contains:

- `ssr` : `false` so we only have client side rendering (false, 따라서 client 쪽 렌더링만 가진다)
- `loadingIndicator` : property to modify the default spinner (디폴트 스피너를 수정하기 위한 `loadingIndicator` 속성)

### ??
- 프로젝트를 run 할 때만 커스텀 로딩화면이 보이고, 페이지가 로드된 이후 새로고침을 하면 로딩화면이 안보임
- nuxt.config.js에서 loadingIndicator를 추가하고, 기존의 loading 속성은 삭제해야 하는 것인가?

## Custom Loading Component
- `components/LoadingBar.vue` shows a custom loading spinner to use instead of the default loading bar. (`components/LoadingBar.vue`는 디폴트 로딩 바 대신 사용할 커스텀 로딩 스피너를 보여준다.)
- `nuxt.config.js` contains the `loading` property which imports the loading component (`nuxt.config.js`은 로딩 컴포넌트를 임포트하는 `loading` 속성을 가진다.)
- `pages/loading.vue` programmatically starts the loader so we force the page to take 2 seconds to load (`pages/loading.vue`는 프로그래밍적으로 로더를 시작하기 때문에, 페이지를 실행하는데 2초가 걸린다)

# 03. DATA FETCHING
## asyncData Hook
`pages/index.vue` and `pages/posts/_id` use the `asyncData` hook and the `$http` module to fetch our list of mountains from our API.

`pages/index.vue` 와 `pages/posts/_id` 는 API로 부터 mountains 리스트 fetch 하기 위해 `asyncData`(비동기 데이터) hook과 `$http` 모듈을 사용한다.

### ???
- 후킹(hooking)은 소프트웨어 공학 용어로, 운영 체제나 응용 소프트웨어 등의 각종 컴퓨터 프로그램에서 소프트웨어 구성 요소 간에 발생하는 함수 호출, 메시지, 이벤트 등을 중간에서 바꾸거나 가로채는 명령, 방법, 기술이나 행위를 말한다.
- 예제 실행 에러가 아래처럼 발생해서 알아보니, `@nuxt/http`가 없어서 그런거라 `npm install @nuxt/http` 명령어로 설치함
```
✖ Nuxt Fatal Error                                                                   │
   ╭────────────────────────────────────────────────────────────────────────────────────────╮
   │                                                                                        │
   │   ✖ Nuxt Fatal Error                                                                   │
   │                                                                                        │
   │   Error: Cannot find module '@nuxtjs/eslint-module'                                    │
   │   Require stack:                                                                       │
   │   - /Users/heeo.8986/data/project/nuxt-js-study/node_modules/@nuxt/core/dist/core.js   │
   │                                                                                        │
   ╰────────────────────────────────────────────────────────────────────────────────────────╯
```

## fetch Hook
`pages/index.vue` imports `components/Mountains.vue` which uses the `fetch` hook and the `$http` module to fetch our data at component level while `pages/mountains/_slug` fetches the data at page level and include:

- `$fetchState.pending` : to show a loading text when the data is loading. (데이터가 로딩 될 때, 로딩 텍스트를 노출)
- `$fetchState.error` : to show an error message when we can't retrieve the data. (데이터를 읽어오지 못할 때 에러메세지를 노출)
- `$fetch` : to fetch the data again when clicked. (클릭했을 때 데이터를 다시 패치)

`pages/index.vue`는 `components/Mountains.vue`를 임포트 하는데, `components/Mountains.vue`는 `pages/mountains/_slug`가 페이지 레벨에서 데이터를 패치하는 동안 컴포넌트 레벨에서 데이터를 패치하기 위해 `fetch` 훅과 `$http` 모듈을 사용한다.
