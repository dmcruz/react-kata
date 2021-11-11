# React Kata

- [React Kata](#react-kata)
  - [Overview](#overview)
  - [Module 1](#module-1)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Optional: VSCode extensions](#optional-vscode-extensions)
    - [Adding dependencies](#adding-dependencies)
    - [Ant Design style](#ant-design-style)
    - [Create a Layout](#create-a-layout)
    - [Create content pages](#create-content-pages)
    - [Add Routing](#add-routing)
  - [Module 2](#module-2)
    - [Adding Styles](#adding-styles)
    - [Fetching API](#fetching-api)
    - [Render State](#render-state)
  - [Module 3](#module-3)
    - [Calling multiple APIs at once using Promise.all](#calling-multiple-apis-at-once-using-promiseall)
    - [Exercise: Create PersonRow Component and Pass Props](#exercise-create-personrow-component-and-pass-props)
  - [Module 4](#module-4)
    - [Setup Redux](#setup-redux)
      - [1. Add dependencies](#1-add-dependencies)
      - [2. Create Redux objects (reducer, action, store)](#2-create-redux-objects-reducer-action-store)
      - [3. Connect the store to our application](#3-connect-the-store-to-our-application)
    - [Using the Redux State](#using-the-redux-state)
    - [Reuse the State in Another Page](#reuse-the-state-in-another-page)
    - [Exercise 1: Create a Random Person Widget](#exercise-1-create-a-random-person-widget)
    - [Exercise 2: Create Starships Page and Redux State](#exercise-2-create-starships-page-and-redux-state)
  - [Module 5](#module-5)
    - [Change Log](#change-log)
    - [useEffect](#useeffect)
  - [Module 6](#module-6)
    - [Generator Functions](#generator-functions)
    - [Common Pattern in Saga](#common-pattern-in-saga)
    - [Setup Redux Saga](#setup-redux-saga)
    - [Modify Component to Dispatch the Triggering Saga Function](#modify-component-to-dispatch-the-triggering-saga-function)
    - [Refactoring](#refactoring)
    - [Adding Loading Indicator](#adding-loading-indicator)
    - [Exercise: Create the saga for Starships](#exercise-create-the-saga-for-starships)

## Overview

Learn react by example. In this walkthrough you will be building a SW Manager portal, where you can view people and starships from the Star Wars universe. We will be utilizing the Star Wars API (SWAPI) which is publicly available without authentication. Later we will enhance this app by building your squad and adding starships in hangar. Don't expect too much, this will be a simple app.

Each branch of this repository will represent a part of this tutorial. In order to avoid spoilers to exercises, avoid running the master branch, but that is up to you.

1. `module-1`: Installation, setup, adding UI component library (Ant Design), adding router
2. `module-2`: Adding style, Fetching API, useState hook, rendering state
3. `module-3`: Promise.all, Component and Props
4. `module-4`: Redux state management, useDispatch and useSelector hooks
5. `module-5`: tackling exercises in Module 4, useEffect
6. `module-6`: generator function basics and Redux Sagas

## Module 1

### Prerequisites

1. Install nodejs
2. Install VSCode

### Setup

1. Boiler plate creation

Create a default typescript based react app using npx

`npx create-react-app my-app --template typescript`

2. Open the project using VSCode

```
cd my-app
code .
```

3. Since the project has been bootstrapped from create-react-app the dependencies have been installed. All you have to do is run `npm start` in terminal to run the app.

   Note: run `npm install` before `npm start` if you didn't start from scratch.

4. Once the app has been compiled successfully, access the URL in your browser: http://localhost:3000
5. You can open another instance of a terminal and run tests.

To run tests:

`npm run test`

To run a specific test file:

`npm run test src/App.test.tsx`

To run test with coverage:

`npm run test -- --coverage src/App.test.tsx`

### Optional: VSCode extensions

1. Install recommended VSCode extensions

- Prettier
  - Follow this guide to configure VSCode to prettify (autoformat) the codes on save: https://glebbahmutov.com/blog/configure-prettier-in-vscode/
  - Alternatively, here's the simplified instructions
    - Install prettier VSCode extension
    - Install prettier: `npm install --save-dev --save-exact prettier`
    - In this repository you can refer to prettierrc.json and .vscode/settings.json and add them in your project
    - Saving should automatically indent, or apply the rules set in prettierrc.json.

### Adding dependencies

The built-in template does not come with a UI library and routing solution.

To add Ant Design:

`npm i --save antd`

To add router:

`npm i --save react-router-dom`

Refer to the docs:

- https://ant.design/components/overview
- https://reactrouter.com/docs/en/v6/getting-started/tutorial

### Ant Design style

1. Import the ant design stylesheet manually by adding this import statement on App.tsx

`import "antd/dist/antd.css";`

### Create a Layout

In this section we will create the layout of our website. It will be a simple layout: Header which will contain the menu, Content to render the page contents, and Footer.

1. Under `src` folder create `components` folder.
2. Under `src/components` folder, create `layout` folder.
3. Under `layout` folder, create `MyLayout.tsx`.

```jsx
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const MyLayout: React.FC = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home" title="Home">
            Home
          </Menu.Item>
          <Menu.Item key="nav1" title="Nav 1">
            Nav 1
          </Menu.Item>
          <Menu.Item key="nav2" title="Nav 2">
            Nav 2
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '50px' }}>
        {children}
      </Content>
      <Footer>React Kata &copy; 2021</Footer>
    </Layout>
  );
};

export default MyLayout;
```

4. Modify `App.tsx`, remove all the code. Import MyLayout and render it.

```jsx
import MyLayout from './components/layout/MyLayout';

import 'antd/dist/antd.css';

function App() {
  return <MyLayout />;
}

export default App;
```

### Create content pages

Create pages with the aim to render content specific to each.

1. Under `components`, create `Home.tsx`

```jsx
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default Home;
```

2. Under `components`, create `People.tsx`

```jsx
const People = () => {
  return (
    <div>
      <h1>People</h1>
    </div>
  );
};
export default People;
```

### Add Routing

Add routing in menu and render content according to selected link.

1. Modify `MyLayout.tsx`, import `Link` from `react-router-dom` in order to define hyperlinks.

`import { Link } from "react-router-dom";`

2. Enclose the Menu Items with <Link> and pointing to path

Partial snippet shows the modified part of MyLayout.tsx:

```jsx

    <Menu.Item key="home" title="Home">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="people" title="People">
      <Link to="/people">People</Link>
    </Menu.Item>

```

Full snippet:

```jsx
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const MyLayout: React.FC = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home" title="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="people" title="People">
            <Link to="/people">People</Link>
          </Menu.Item>
          <Menu.Item key="nav2" title="Nav 2">
            Nav 2
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '50px' }}>
        {children}
      </Content>
      <Footer>React Kata &copy; 2021</Footer>
    </Layout>
  );
};

export default MyLayout;
```

3. Modify `App.tsx` and add import `BrowserRouter`, `Routes` (previously `Switch` in react-router-dom v5), `Route`.

`import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`

4. Import `Home` and `People` components in `App.tsx`.

```typescript
import Home from './components/Home';
import People from './components/People';
```

5. Modify App.tsx rendered component to:

```jsx
<Router>
  <MyLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
    </Routes>
  </MyLayout>
</Router>
```

What it does is render the component according the route. If URL is `/` it will render Home in the content area. If URL is `/people`, People will be rendered in the content area.

6. Open http://localhost:3000/, click the links to observe the changes.

## Module 2

Refer to branch module-2 for the source code.

### Adding Styles

1. In `src/components/layout`, create `MyLayout.css`

```css
.site-content {
  background-color: #fff;
  min-height: 280px;
  padding: 25px;
}
```

2. Modify `MyLayout.tsx` and import the css that was just created.

```js
import './MyLayout.css';
```

3. Still in `MyLayout.tsx`, enclose the {children} elements with div referring to site-content class.

```jsx
<div className="site-content">{children}</div>
```

The result should be the content area will have a white background color.

### Fetching API

In this section we will be using `fetch` which is a built in function in modern browsers. It has the ability to fetch resources across the network.

Read more here:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://reactjs.org/docs/faq-ajax.html

We will be using Star Wars API (SWAPI) for RestAPI resources.

Read more here:
https://swapi.dev/documentation

1.  Create `PeopleList.tsx` under `/src/components/people`. The goal is to create a button that when clicked will request RestAPI.

    1.1 Import Button from antd.

    ```
      import { Button } from "antd";
    ```

    1.2 Render the Button.

    ```jsx
    return <Button type="primary">Fetch Data</Button>;
    ```

    1.3 Add an onClick handler for the button. This will trigger a fetch request and print the results in the console. Inspect the results to understand the response of the API.

    ```jsx
    const handleClickFetch = (e: any) => {
      fetch('https://swapi.dev/api/people')
        .then((res: Response) => res.json())
        .then(
          (data: any) => {
            console.log(data);
          },
          (error) => {
            console.error(error);
          }
        );
    };

    return (
      <Button type="primary" onClick={handleClickFetch}>
        Fetch Data
      </Button>
    );
    ```

    Full snippet of `PeopleList.tsx`:

    ```jsx
    import { Button } from 'antd';
    const PeopleList = () => {
      const handleClickFetch = (e: any) => {
        fetch('https://swapi.dev/api/people')
          .then((res: Response) => res.json())
          .then(
            (data: any) => {
              console.log(data.results);
            },
            (error) => {
              console.error(error);
            }
          );
      };

      return (
        <div>
          <div>
            <Button type="primary" onClick={handleClickFetch}>
              Fetch Data
            </Button>
          </div>
        </div>
      );
    };
    export default PeopleList;
    ```

2.  Modify `People.tsx` and import `PeopleList` and render it.

    ```jsx
    import PeopleList from './people/PeopleList';

    const People = () => {
      return (
        <div>
          <h1>People</h1>
          <PeopleList />
        </div>
      );
    };
    export default People;
    ```

3.  Check the browser and click the button. On the browser's console you should see the response from the API.

### Render State

Now let's render the result on the screen. For that we will be utilising local state to store the data. Functional components are stateless components. In order to use state, we have to add `useState` hook from react.

Read more: https://reactjs.org/docs/hooks-state.html

1. Import useState from react

   `import { useState } from "react";`

2. `useState()` is a function that accepts initial state and returns 2 values: the current state and the function that updates it. What we need is to retrieve a list of people from SWAPI People api and return to the screen. For that we will construct a list state object and initialize it to an empty array.

   `const [list, setList] = useState([]);`

3. Call `setList` and pass the results obtained from the API. Inspecting SWAPI People result, list is returned under `results` property of the response.

   ```jsx
   fetch('https://swapi.dev/api/people')
     .then((res: Response) => res.json())
     .then(
       (data: any) => {
         setList(data.results); // updated here
       },
       (error) => {
         console.error(error);
       }
     );
   ```

4. Now we render the results on the component using the `list` state object. In react, when rendering multiple items, they have to be uniquely identified with a `key`. We will use `map` function to return a rendered item. For now we only display the name of the Star Wars person. We use the built in index parameter of map to pass to key.

   Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

   ```jsx
   const viewPerson = list.map((item: any, index: number) => (
     <li key={index}>{item.name}</li>
   ));
   ```

5. Update the rendered item in the screen, render `viewPerson`. Save the changes.

   ```jsx
   return (
     <div>
       <div>
         <Button type="primary" onClick={handleClickFetch}>
           Fetch Data
         </Button>
       </div>
       <div>
         <ul>{viewPerson}</ul>
       </div>
     </div>
   );
   ```

6. Check the browser, click on People menu. Click Fetch and you should see a list of Star Wars person in the screen.

## Module 3

In this module, we will be learning about Promise.all, and passing props to child components.

### Calling multiple APIs at once using Promise.all

In Module 2, we learned about fetching API. If you notice, the API returns only the first page. What if we want to retrieve all data at once?

For that refer to `module-3` branch of this repository and browse to [`/src/services/FetchHelper.ts`](https://github.com/dmcruz/react-kata/blob/module-3/src/services/FetchHelper.ts) which has `getAllPeople()` function.

To consume the data in this function, here's a sample code:

```jsx
(async () => {
  try {
    const people = await FetchHelper.getAllPeople();
  } catch (error: any) {
    console.error(`${error}`);
  }
})();
```

Read more:

- Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- Promise.all: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

It is also possible to call fetch multiple times, this is just to show how to use Promise.all.

### Exercise: Create PersonRow Component and Pass Props

Time for some exercise. If in doubt you can always check `module-3` branch in this repository.

The goal here is to learn about parent and child component communication through props. https://reactjs.org/docs/components-and-props.html

1. In the previous module, we displayed a list of names which is rendered by `viewPerson` embedded in `PeopleList.tsx`.
2. Extract the `viewPerson` component into a new component `PersonRow.tsx` and render the person attributes in tabular form. Use `Row` and `Col` components of Ant Design. https://ant.design/components/grid/
3. Pass the person attributes in `PersonRow` as properties.

## Module 4

In the Module 2, we learned about local state. But what if we need to share this data in another component. For that, we will be using Redux which can manage global state.

In this module, the goal is to setup Redux, and apply it.

References:

- https://redux.js.org/tutorials/fundamentals/part-1-overview

### Setup Redux

#### 1. Add dependencies

Add `redux`, `react-redux`, and `redux-logger` dependencies by running the following command:

`npm i --save redux react-redux redux-logger`

Add `@types/redux-logger` as a dev dependency:

`npm i --save-dev @types/redux-logger`

#### 2. Create Redux objects (reducer, action, store)

The goal is to create a global state for people list.

1. First, create `/src/redux` folder. Anything that has to do with redux will be placed here.
2. We will group reducers per feature folder like `/src/redux/{feature}`.

   Under feature folder we will be creating redux objects:

   - `action` - an object that represents an intention to change the state. Action must specify a type field and although optional another parameter is payload or the "new value" to be sent. All action objects for the feature are placed here.

   - `reducer` - a function that accepts a previous state and an action as inputs and returns the new state. Reducers are the one that knows how to modify the state. All reducer objects for the feature are placed here.

3. Let's start creating our People reducer. Create `/src/redux/people` folder.
4. Create people reducer file `/src/redux/people/people.reducer.ts`

   INITIAL_STATE defines the model of your state. Any data that has to be observed or changed will go here.

   ```javascript
   const INITIAL_STATE = {
     list: [],
   };

   const peopleReducer = (state = INITIAL_STATE, action: any) => {
     switch (action.type) {
       case 'SET_PEOPLE_LIST':
         return {
           ...state,
           list: action.payload,
         };
       default:
         return state;
     }
   };

   export default peopleReducer;
   ```

5. Create an action file in the same path `people.action.ts`

   ```javascript
   export const setPeople = (list: any) => ({
     type: 'SET_PEOPLE_LIST',
     payload: list,
   });
   ```

6. Create store file `/src/redux/store.ts`

   6.1 Import createStore, applyMiddleware, combineReducers from redux

   6.2 Import logger middleware from redux-logger. Logger will be used in development mode so that changes to the global state is logged in browser's console.

   6.3 Import the people reducer that we created and build the reducer object.

   6.4 Create the store object and export it.

   ```javascript
   import { createStore, applyMiddleware, combineReducers } from 'redux';
   import logger from 'redux-logger';
   import peopleReducer from './people/people.reducer';

   const middlewares = [];

   if (process.env.NODE_ENV === 'development') {
     middlewares.push(logger);
   }

   const rootReducer = combineReducers({
     people: peopleReducer,
   });

   const store = createStore(rootReducer, applyMiddleware(...middlewares));
   export default store;
   ```

#### 3. Connect the store to our application

We will be connecting the store object into all our components. We do this using `Provider` component from `react-redux`. `Provider` will wrap around the entire application in order for all the components under it to have access to the store object.

1. Modify `src/index.js`. Import Provider from react-redux.

   `import { Provider } from 'react-redux';`

2. Import store

   `import store from './redux/store';`

3. Enclose `App` with `Provider` component, passing `store` as a prop.

   ```jsx
   <Provider store={store}>
     <App />
   </Provider>
   ```

4. Refer to `/src/index.tsx` in `module-4` branch for the changes.

### Using the Redux State

Let's go back to `/src/components/people/PeopleList.tsx` and remove the local states and use global state instead.

1. Remove this import: `import { useState } from "react";`
2. Remove this line: `const [list, setList] = useState([]);`
3. Remove the usage of `setList` in `handleClickFetch`.
4. We will be needing 2 hooks from react redux in order to dispatch a change action and extract a value from the global state. We accomplish this by using `useDispatch()` and `useSelector` hooks. Read more here: https://react-redux.js.org/api/hooks

   `import { useDispatch, useSelector } from "react-redux";`

5. Create a dispatch object and create a list object to extract the people list from the global state.

   ```javascript
   const dispatch = useDispatch();
   const list: [] = useSelector((state: any) => state.people.list);
   ```

6. Import setPeople action from `/src/redux/people/people.action`

   ```javascript
   import { setPeople } from '../../redux/people/people.action';
   ```

7. In the Fetch Data click button handler, dispatch the setPeople action and pass the result of the API here.

   ```javascript
   const peopleList = await FetchHelper.getAllPeople();
   dispatch(setPeople(peopleList));
   ```

8. Save the changes and check if the fetch data still works and list is rendered.
9. Inspect the browser console, and see that redux logger is logging whenever there's a change in the state.

### Reuse the State in Another Page

What we have done in the previous section is replace local state with global state. Let's prove that the state can be reused outside the page the state was initially created.

We will be modifying `/src/components/Home.tsx` and show a random person when it's available.

1. SWAPI People API returns a maximum of 82 records. Create a random number with that maximum index.
2. Extract the people list and pass the random index.

   ```javascript
   const randomNumber = Math.floor(Math.random() * 82);
   const randomPerson = useSelector(
     (state: any) => state.people.list[randomNumber]
   );
   ```

3. Render the randomPerson value. Since `Home` is rendered first before fetching the `People` list, use the [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) so that in case there is no value in the state, it will not cause a runtime exception in rendering.

   ```javascript
   return (
     <div>
       <h1>Home</h1>
       {randomPerson?.name}
     </div>
   );
   ```

4. Save the changes and reload Home. At first it should be empty. Transfer to People and fetch data, once data is fetched, go back to Home and a random person name should appear.

### Exercise 1: Create a Random Person Widget

Create a random person widget that will display all attributes available in a presentable way. Render this in `Home`. I will create this component in the next module.

### Exercise 2: Create Starships Page and Redux State

SWAPI Starships API: https://swapi.dev/api/starships/

Create a new route to `/starships` that will render Starship list on load. Use `useEffect` hook for this. Read more here: https://reactjs.org/docs/hooks-effect.html

## Module 5

This module is more about tackling the exercises. There are a lot of changes so you can take a look at `module-5` branch.

Added dependency:

1. ts-md5 - for hashing md5 used for generating Gravatar identicon

   `npm i --save ts-md5`

### Change Log

1. Module 4 Exersise 1: RandomPerson widget to generate a featured person in Home page
2. Module 4 Exercise 2: Starship component and redux created
3. Generic getAll function is created in FetchHelper.ts
4. People List is now a grid of cards

### useEffect

`useEffect` hook is equivalent to componentDidMount, componentDidUpdate, and componentWillAmount lifecycle methods. When the component is loaded this effect is called.

There are 2 arguments in this function. First argument is the behavior or function, second argument is the array of dependencies. React will compare previous value of dependency with the new value to trigger if it needs to perform the effect function. If second argument is an empty array, it will invoke useEffect once only.

The following snippet retrieves Starships API on load. This is only done once because the second argument is an empty array.

```javascript
  useEffect(() => {
    (async () => {
      try {
        const list = await FetchHelper.getAll(SwapiUrls.STARSHIPS);
        dispatch(setStarships(list));
      } catch (error: any) {
        message.error(`${error}`);
      }
    })();
    // eslint-disable-next-line
  }, []);
```

## Module 6

Goal in this module is to apply redux sagas. Learn more about it here:

- https://redux-saga.js.org/
- https://redux-saga.js.org/docs/introduction/BeginnerTutorial/

### Generator Functions

The foundation of redux saga is generator functions. Learn more about generator function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

Example of a generator function:

```javascript
function* fetchStarshipsAsync() {
  const list = yield FetchHelper.getAll(SwapiUrls.STARSHIPS);
  yield put(setStarships(list));
}
```

In generator function, each yielded function is awaited before proceeding to the next one. In the example, result of Starships API is awaited first and set to list before the dispatching of setStarships is done. Calling this function does not execute immediately, it has to be iterated by using next(). Saga middleware takes care of handling this.

```javascript
// this will not do anything and will be paused (suspended)
fetchStarshipsAsync();

// this will execute the yielded functions
const myFunc = fetchStarshipsAsync();
myFunc.next();
myFunc.next();
```

### Common Pattern in Saga

As you have noticed API calls exists in the component such as PeopleList and StarshipList. We will be taking out these API calls out of components and delegate them to sagas. This will result in cleaner code and clear separation of concern: components are for rendering while sagas are for managing side effects.

Currently, PeopleList fetches People API on load. Our target will be for PeopleList to dispatch a request for People API on load. A saga watcher function will trigger the API when it receives a fetch request. We will be also adding a loading indicator when fetching data is in progress.

Let's imagine 3 events:

1. `requestStart` - this is where loading will be set to true as it marks that the fetch is in progress. This will trigger the request to fetch API.
2. `requestSuccess` - this event indicates that the API has returned the response data, and loading should be set to false.
3. `requestError` - this event indicates an error during API request, so we can obtain error message here, and loading should be set to false.

You will find this is a common pattern we will be applying in sagas.

### Setup Redux Saga

1.  Add dependency

    `npm install --save redux-saga`

2.  Modify `people.reducer.ts`. Add loading (set to false) in INITIAL_STATE. Create 3 action types: FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_END.

    Partial Snippet:

    ```javascript
    const INITIAL_STATE = {
      list: [],
      loading: false,
    };

    // ... code redacted

    case 'FETCH_PEOPLE_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case 'FETCH_PEOPLE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    ```

3.  Create 3 actions corresponding to previous step in `people.action.ts`.

    Snippet:

    ```javascript
    export const fetchPeopleStart = () => ({
      type: 'FETCH_PEOPLE_START',
    });

    export const fetchPeopleSuccess = (list: []) => ({
      type: 'FETCH_PEOPLE_SUCCESS',
      payload: list,
    });

    export const fetchPeopleError = (error: any) => ({
      type: 'FETCH_PEOPLE_ERROR',
      payload: error,
    });
    ```

4.  Create the People saga under `/src/redux/people/people.saga.ts`.

    ```javascript
    import { call, put, takeLatest } from 'redux-saga/effects';
    import { FetchHelper } from '../../services/FetchHelper';
    import { SwapiUrls } from '../../services/SwapiUrls';
    import { fetchPeopleError, fetchPeopleSuccess } from './people.action';

    // This is a worker function responsible for fetching API and bind data to state if success or bind error if fail
    function* fetchPeopleAsync(): Generator<any, any, any> {
      try {
        const people = yield call(FetchHelper.getAll, SwapiUrls.PEOPLE);
        yield put(fetchPeopleSuccess(people));
      } catch (e: any) {
        yield put(fetchPeopleError(e.message || e));
      }
    }

    // This is a watcher function, once FETCH_PEOPLE_START is received, it will trigger fetchPeopleAsync
    export function* watchFetchPeopleStart() {
      yield takeLatest('FETCH_PEOPLE_START', fetchPeopleAsync);
    }

    ```

5.  Create root-saga.ts under `/src/redux/root-saga.ts`. This will be the place we will aggregate multiple sagas parallely. For now we have 1 saga, but should we have more we just add here.

    ```javascript
    import { all, call } from 'redux-saga/effects';
    import { watchFetchPeopleStart } from './people/people.saga';

    export default function* rootSaga() {
      yield all([call(watchFetchPeopleStart)]);
    }
    ```

6.  Add redux saga middleware in our `store.ts`.

    6.1 Import createSagaMiddleware

        import createSagaMiddleware from 'redux-saga'

    6.2 Import rootSaga

        import rootSaga from './root-saga';

    6.3 Create sagaMiddleware and add it in middlewares.

        const sagaMiddleware = createSagaMiddleware();
        const middlewares: any = [sagaMiddleware];

    6.4 Run the saga

        sagaMiddleware.run(rootSaga);

    6.5 You may refer to [`store.ts` source code](https://github.com/dmcruz/react-kata/blob/module-6/src/redux/store.ts) in module-6 branch of this repository for the complete code.

### Modify Component to Dispatch the Triggering Saga Function

1. Modify `PeopleList.tsx`, import `fetchPeopleStart` action and replace the `useEffect` function like this:

   ```javascript
   useEffect(() => {
     dispatch(fetchPeopleStart());
   }, []);
   ```

2. Save and reload the app. If everything is setup correctly, the data will load as usual. If not, refer to `module-6` branch and check if you missed anything.

### Refactoring

1. Since `setPeople` action or `SET_PEOPLE_LIST` is no longer in use, it has been removed from `people.action.ts` and `people.reducer.ts`.

### Adding Loading Indicator

1. Modify `PeopleList.tsx`, use `useSelector` hook to get the `loading` state and show a loading indicator. To do this, you can enclose the area you want to cover with <Skeleton loading={loading} avatar active></Skeleton>.
2. Refresh People page and you should see a shimmer on load before the data is loaded.

### Exercise: Create the saga for Starships

Challenge yourself to create the saga for Starships. The solution for this exercise will be available in Module 7.
