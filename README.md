# React Kata

- [React Kata](#react-kata)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Optional: VSCode extensions](#optional-vscode-extensions)
  - [Adding dependencies](#adding-dependencies)
  - [Ant Design style](#ant-design-style)
  - [Create a Layout](#create-a-layout)
  - [Create content pages](#create-content-pages)
  - [Add Routing](#add-routing)

## Overview

Learn react by example

## Prerequisites

1. Install nodejs
2. Install VSCode

## Setup

1. Boiler plate creation

Create a default typescript based react app using npx

`npx create-react-app my-app --template typescript`

2. Open the project using VSCode

```
cd my-app
code .
```

3, Since the project has been bootstrapped from create-react-app the dependencies have been installed. All you have to do is run `npm start` in terminal to run the app.

4. Once the app has been compiled successfully, access the URL in your browser: http://localhost:3000
5. You can open another instance of a terminal and run tests.

To run tests:

`npm run test`

To run a specific test file:

`npm run test src/App.test.tsx`

To run test with coverage:

`npm run test -- --coverage src/App.test.tsx`

## Optional: VSCode extensions

1. Install recommended VSCode extensions

- Prettier
  - Follow this guide to configure VSCode to prettify (autoformat) the codes on save: https://glebbahmutov.com/blog/configure-prettier-in-vscode/

## Adding dependencies

The built-in template does not come with a UI library and routing solution.

To add Ant Design:

`npm i --save antd`

To add router:

`npm i --save react-router-dom`

Refer to the docs:

https://ant.design/components/overview
https://reactrouter.com/docs/en/v6/getting-started/tutorial

## Ant Design style

1. Import the ant design stylesheet manually by adding this import statement on App.tsx

`import "antd/dist/antd.css";`

## Create a Layout

In this section we will create the layout of our website. It will be a simple layout: Header which will contain the menu, Content to render the page contents, and Footer.

1. Under `src` folder create `components` folder.
2. Under `src/components` folder, create `layout` folder.
3. Under `layout` folder, create `MyLayout.tsx`.

```typescript
import { Layout, Menu } from "antd";
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
      <Content style={{ padding: "0 50px", minHeight: "50px" }}>
        {children}
      </Content>
      <Footer>React Kata &copy; 2021</Footer>
    </Layout>
  );
};

export default MyLayout;
```

4. Modify `App.tsx`, remove all the code. Import MyLayout and render it.

```typescript
import MyLayout from "./components/layout/MyLayout";

import "antd/dist/antd.css";

function App() {
  return <MyLayout />;
}

export default App;
```

## Create content pages

Create pages with the aim to render content specific to each.

1. Under `components`, create `Home.tsx`

```typescript
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

```typescript
const People = () => {
  return (
    <div>
      <h1>People</h1>
    </div>
  );
};
export default People;
```

## Add Routing

Add routing in menu and render content according to selected link.

1. Modify `MyLayout.tsx`, import Link from `react-router-dom` in order to define hyperlinks.

import { Link } from "react-router-dom";

2. Enclose the Menu Items with `<Link>` and pointing to path

Partial snippet shows the modified part of MyLayout.tsx:

```typescript

    <Menu.Item key="home" title="Home">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="people" title="People">
      <Link to="/people">People</Link>
    </Menu.Item>

```

Full snippet:

```typescript
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
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
      <Content style={{ padding: "0 50px", minHeight: "50px" }}>
        {children}
      </Content>
      <Footer>React Kata &copy; 2021</Footer>
    </Layout>
  );
};

export default MyLayout;
```

3. Modify `App.tsx` and add import BrowserRouter, Routes (previously Switch in react-router-dom v5), Route.

`import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`

4. Import `Home` and `People` components in `App.tsx`.

```typescript
import Home from "./components/Home";
import People from "./components/People";
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

1. Open http://localhost:3000/, click the links to observe the changes.
