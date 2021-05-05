# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

# 01. Hello World
`pages/index.vue` and `pages/about.vue` show how Nuxt server renders the page on first load or on hard refresh and renders the page on client side when navigating using the `<NuxtLink>` component.

`pages/index.vue` 와 `pages/about.vue` 는 페이지를 처음 로드하거나 강력 새로고침을 했을 때, 어떻게 Nuxt 서버가 렌더해주는지 보여준다.
그리고 `<NuxtLink>` 컴포넌트를 사용하여 이동(navigate) 할 때, Nuxt 서버가 어떻게 client 쪽에 페이지를 렌더하는지 보여준다.

# 02. Loading
## 2-1) Customize Nuxt Loading
`nuxt.config.js` contains the `loading` property which modifies the default loader. 
`pages/loading.vue` programmatically starts the loader so we force the page to take 2 seconds to load

`nuxt.config.js`에는 디폴트 로딩을 수정하는 `loading` 속성이 있다. `pages/loading.vue` 는 프로그래밍적으로(?) 로더를 시작하므로, 우리가 페이지 로딩을 실행 할 때 2초가 걸린다.

## 2-2) Customize Nuxt Loading Indicator
`nuxt.config.js` contains:

- `ssr` : `false` so we only have client side rendering (false, 따라서 client 쪽 렌더링만 가진다)
- `loadingIndicator` : property to modify the default spinner (디폴트 스피너를 수정하기 위한 `loadingIndicator` 속성)

### ??
- 프로젝트를 run 할 때만 커스텀 로딩화면이 보이고, 페이지가 로드된 이후 새로고침을 하면 로딩화면이 안보임
- nuxt.config.js에서 loadingIndicator를 추가하고, 기존의 loading 속성은 삭제해야 하는 것인가?

## 2-3) Custom Loading Component
- `components/LoadingBar.vue` shows a custom loading spinner to use instead of the default loading bar. (`components/LoadingBar.vue`는 디폴트 로딩 바 대신 사용할 커스텀 로딩 스피너를 보여준다.)
- `nuxt.config.js` contains the `loading` property which imports the loading component (`nuxt.config.js`은 로딩 컴포넌트를 임포트하는 `loading` 속성을 가진다.)
- `pages/loading.vue` programmatically starts the loader so we force the page to take 2 seconds to load (`pages/loading.vue`는 프로그래밍적으로 로더를 시작하기 때문에, 페이지를 실행하는데 2초가 걸린다)

# 03. DATA FETCHING
## 3-1) asyncData Hook
`pages/index.vue` and `pages/posts/_id` use the `asyncData` hook and the `$http` module to fetch our list of mountains from our API.

`pages/index.vue` 와 `pages/posts/_id` 는 API로 부터 mountains 리스트 fetch 하기 위해 `asyncData`(비동기 데이터) hook과 `$http` 모듈을 사용한다.

### ???
- 후킹(hooking)은 소프트웨어 공학 용어로, 운영 체제나 응용 소프트웨어 등의 각종 컴퓨터 프로그램에서 소프트웨어 구성 요소 간에 발생하는 함수 호출, 메시지, 이벤트 등을 중간에서 바꾸거나 가로채는 명령, 방법, 기술이나 행위를 말한다.
- 예제 실행 에러가 아래처럼 발생해서 알아보니, `@nuxt/http`가 없어서 그런거라 `npm install @nuxt/http` 명령어로 설치함
```
✖ Nuxt Fatal Error
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

## 3-2) fetch Hook
`pages/index.vue` imports `components/Mountains.vue` which uses the `fetch` hook and the `$http` module to fetch our data at component level while `pages/mountains/_slug` fetches the data at page level and include:

- `$fetchState.pending` : to show a loading text when the data is loading. (데이터가 로딩 될 때, 로딩 텍스트를 노출)
- `$fetchState.error` : to show an error message when we can't retrieve the data. (데이터를 읽어오지 못할 때 에러메세지를 노출)
- `$fetch` : to fetch the data again when clicked. (클릭했을 때 데이터를 다시 패치)

`pages/index.vue`는 `components/Mountains.vue`를 임포트 하는데, `components/Mountains.vue`는 `pages/mountains/_slug`가 페이지 레벨에서 데이터를 패치하는 동안 컴포넌트 레벨에서 데이터를 패치하기 위해 `fetch` 훅과 `$http` 모듈을 사용한다.


# 04. ASSET MANAGEMENT
## 4-1) webpack Assets 
`pages/index.vue` shows:

- how to add an image from the assets folder.
- how to add a background image from the assets folder using CSS.
- how to add dynamic images from the assets folder using the data property.

`nuxt.config.js` contains the css property for globally adding a css file.

`assets/main.css` shows how to reference the DMSans fonts from the assets folder using the `@font-face` rule.
## 4-2) Pre-processors
`pages/index.vue` uses `pug` as a template language and `sass` for styling.

`nuxt.config.js`:
- registers the style resources module.
- contains a `styleResources` property to add `assets/variables.scss`.
- contains a `css property` to add `assets/main.scss`.
- `package.json` shows the dependencies needed. (`package.json`는 필요한 종속성을 보여준다.)

### ???
- 에러가 나서 아레의 플러그인들을 설치함
```
npm install @nuxtjs/style-resources
npm install scss
npm install scss-loader
npm install pug
npm install pug-plain-loader
```
그래도 안돼서 예제 페이지의 package.json과 에러메세지를 보고 아래의 플러그인들을 더 설치해봄
```
npm install fibers
npm install css
npm install css-loader
```
순간 페이지가 잘 나와서 에러메세지에는 있지만, 예제의 package.json엔 없었던 css와 css-loader를 삭제해보았는데, 그 뒤로 다시 안됨
플러그인을 다시 깔아도 안됨

```
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
TypeError: this.getOptions is not a function
    at Object.loader (/Users/heeo.8986/data/project/nuxt-js-study/node_modules/sass-loader/dist/index.js:25:24)
```
요 에러 메세지의 `TypeError: this.getOptions is not a function`를 검색해서 sass-loader의 버전을 `^10`으로도 낮춰보고(`npm add sass-loader@^10.1.1`), `npm i`도 해보고, 노드버전도 바꾸고, `npm rebuild node-sass`도 해보고, 서버도 다시 켜봤는데 안됨 ㅠㅠ

```
npm uninstall sass-loader
npm install sass-loader@10
npm run dev
```
다시 지우고, 10버전으로 깔고, 서버를 다시켜니 됐다.(위에서 sass-loader버전 을 add로 바꿔서 안됐던건가;)
그리고 css 관련 플러그인들은 일단 냅둬보는걸로..

그리고 이전 예제에서 사용했던 `nuxt.config.js`의 css에서 `'~/assets/main.css'`도 지우지 않으면 에러남

# 04. SEO
## SEO Twitter and Open Graph
`components/SocialHead` uses the `head` property to show `meta` for both Twitter and Open Graph social sharing using props.

`pages/mountains/slug.vue` uses the `pages/mountains/slug.vue` component passing the mountain's title, description and image as the values for props. It also uses the `head` tag to set the canonical link.

`nuxtconfig.js` shows the `head` tag with default `meta` for social sharing for when the the `SocialHead` component is not used as well as the canonical link.

`components/SocialHead`는 `head` 속성을 사용하여 `props`를 사용하는 Twitter와 Open Graph 소셜 쉐어링에 대해 `meta`를 표시한다.

`pages/mountains/slug.vue`는 mountain들의 타이틀, 설명과 이미지를 전달하는 `pages/mountains/slug.vue` 컴포넌트를 사용한다.
`pages/mountains/slug.vue`는 또한 `head` 태그를 사용하여 표준 링크를 설정한다

`nuxtconfig.js`는 `SocialHead` 컴포넌트가 표준링크와 함께 사용되지 않을 때, 소셜쉐어링을 위한 디폴트 `meta`가 있는 `head`태그를 표시한다.

### ???
트위터랑 오픈 그래프가 뭔가 했는데, 트위터나 카톡 같은데서 링크 공유 할때 뜨는 이미지,타이틀,설명 이었다; 카톡 말풍선타입 생각하면 될듯.
요 페이지에 매우 잘 나와있다 (https://velog.io/@sso/open-graph-tag-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)

메타 태그도 위의 링크에 잘 나와있는데, 검색 결과에서 보여지기 바라는 제목, 설명, 이미지등을 제공하기 위한 HTML, XHTML의 `<meta ...>`형태의 태그를 의미한다.
쉽게 말해 메타데이터는 데이터에 대한 데이터(정보)를 말한다.

SEO(Search Engine Optimization)는 한국어로는 '검색엔진 최적화'라는 의미이며, 사이트를 검색자(검색 사용자)에게 최적화시키는 것을 의미한다.
간단히 말하면 검색 결과를 최상단에 노출하게 만드는 기법이다;
(참고: https://m.blog.naver.com/isanghangot/221299718444)

# MISCELLANEOUS (라고 쓰고 etc라고 읽는다)
## 5-1) Lazy Loading Components
`components/MountainsList.vue` uses `fetch` to fetch data from an API and uses:

- `$fetchState.pending` : to show a loading message when waiting for the data to load.
- `$fetchState.error` : to show an error message if the component does not load.
- `pages/index.vue` shows how to lazy load a component by prefixing it with the word "Lazy". (`pages/index.vue`는 `Lazy`라는 프리픽스를 사용하여 컴포넌트를 레이지 로딩하는 것을 보여준다.)

`nuxt.config.js` shows `components: true` for auto importing components.

## 5-2) Nuxt Helpers
`pages/index.vue` shows:

- `$nuxt.isOnline` and `$nuxt.isOffline` - tells the user if they are online or offline.
- `renderedOn` - prints a message telling us if the page is rendered on the server or client.
- `$nuxt.refresh()` - refreshes data without refreshing the page.
- `plugins/nuxt-ready.client.js` shows:

`window.onNuxtReady` - logs a message to the console when Nuxt is ready.

# 06. ROUTING
## 6-1) Active Link Classes
`layouts/default.vue` shows the styles for `nuxt-link-active` and `nuxt-link-exact-active`.

별거 없음; `layouts/defualt.vue` 의 `<style>`안에 보면 link 텍스트 스타일 커스텀한 게 다임;

## 6-2) Dynamic Pages
- `pages/_slug.vue` shows data coming from the route params.
- `pages/index.vue` fetches our mountains from our API.
- `pages/_continent/_mountain.vue` shows the detail page for each mountain in each continent.

## 6-3) Nested Pages
`pages/parent.vue` contains the `<NuxtChild>` component. Everything on this page will be seen on both the parent and child pages.

`pages/parent/index.vue` contains text that will be replaced when the child links are clicked.

`pages/parent/child.vue` and `pages/parent/child2.vue` will be rendered as parent/child and parent/child2.

# 07. TRANSITIONS
## Nuxt transitions
- `pages/index.vue` and `pages/fade.vue` use the default page transiton.
- `pages/bounce.vue` uses the `transition` property with a bounce transition
- `pages/slide.vue` uses the `transition` property with a slide-bottom transition.
- `layout/default.vue` contains the classes for all transitions.

### ???
css에서 사용했던 trainsiton 속성이랑 같은 역할한다고 생각하면 될듯..
한 가지 헷갈렸던건 왜 `pages/fade.vue`에는 `transition` 속성을 따로 사용하지 않았는데 클릭했을때 페이드 처리가 되는가..?
요건 `index.vue`가 `fade.vue`를 기본 페이지로 하는데 `default.vue`의 `<style>`에 opacity 관련 스타일 선언이 있어서 그런거 같긴함..
한 가지 더 궁금한건 왜 Bounce를 누르고 Fade를 누르면 페이드 처리가 아니라 바운스가 되는가?
Bounce를 누르고 Home을 누르면 바운스가 되고, Slide를 누르고 Home을 누르면 슬라이드가 되는거도 모르겠다;


