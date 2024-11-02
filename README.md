Overview

Hey there! In this project, I created a personal CV designed to be simple and generic. It’s basically a template that anyone could adapt to fit their own professional profile. I built this project with Vite, using React with TypeScript, and explored a bunch of React features, experimenting with various hooks along the way.

The project consists of four pages, allowing users to navigate easily between sections. It's been a great way to showcase what I've learned while keeping everything functional and user-friendly.
Technologies Used

    Vite: For a fast and smooth development experience.
    React: The core library for building the UI.
    TypeScript: I used TypeScript to add type safety, making the code a bit cleaner and easier to manage.
    React Router: This was essential for navigating between the different pages of my CV.
    CSS Modules: I used CSS Modules for styling components, which helped keep the styles scoped and organized.
    React Hooks: I experimented with various hooks, like useState, useEffect, and more, to manage state and side effects throughout the app.

Reflection

Honestly, this project was a bit of a rollercoaster. I had a blast using React, but let’s be real, there were some moments where I felt like I was going in circles trying to figure things out. Debugging and keeping track of state changes can be tricky, especially when you're trying to make everything seamless. But that's all part of the learning experience, right?

Overall, this CV serves as a functional example of a layout, and I’m excited about what I can create next with the skills I've picked up!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
