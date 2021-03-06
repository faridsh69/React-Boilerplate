RULES: 1) use typescript, spliting, ssr, next, eslint, prettier, react query, react window, memo,
test 2) only use `import { App }`, Dont use `export default`, only use `export` 3) Destructure
everything on top: `const {children} = props` 4) use <Component>{props.children}</Component>, Dont
write <Component {...props} /> 5) folder names should be lower-case and polural 6) always write
clean up functions for fetch, event listeners... 7) key={uniqueId} in map 8) always make sure state
is not changing directly: [...state].map() or [...state].filter() 9) use <React.Fragment> instead of
extra <div> 10) avoid onClick={(e)=>this.setState()} 11) files with jsx should be .tsx and others
should be .ts 12) Only one state in each components 13) event: React.ChangeEvent<HTMLInputElement>
=> input onChange event: React.FormEvent<HTMLFormElement> => form onSubmit event:
React.MouseEvent<HTMLElement> => element onClick 14) Always make sure in reducer you added a default
section for switch case: default: { throw new Error(`Unhandled action type: ${action.type}`) } 15)
Context module function: Do not create login logout functions inside context Only create them
outside function and export them use useMemo for context value

**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\*** PACKAGES
**\*\***\*\***\*\***\*\***\*\***\*\***\*\***

++ 1) jsx ++ 2) typescript ++ 3) hooks, dependency list ++ 4) MUI ++ 5) nextjs ++ 6) useMemo,
react.memo, useCallback ++ 7) formik, react-hook-form ++ 8) yup ++ 9) helmet ++ 10) react.window
++ 11) swiper.js ++ 12) date-fns

-   13. react-query
-   14. authenticate
-   15. PWA, Service worker
-   16. test
-   17. spliting ++ 18) redux
-   19. webpack, babel, eslint, prettier, husky, tsconfig
-   20. Debouncing o throtle o proxy ++ 21) react-router-dom
    21. react-table
    22. forward ref, Symbol
    23. class component
    24. error boundry
-   27. watch performance
-   28. hoc
-   29. multi language

**\*\***\*\***\*\***\*\*\*\***\*\***\*\***\*\*** TASKS
**\*\***\*\*\*\***\*\***\*\***\*\***\*\*\*\***\*\***

React CMS:

1.  Create a gitlab repository, add kianaz and farid Init NextJs with TypeScript Add prettier rules
    Add eslint rules Add Huskey Implement multi language using i18next Add axios Add date-fns Add
    react query Add .env file Get /api/v1/blogs using react query, axios, with defining keys Add
    Error boundry to project Send all ajax errors, and error boundry errors to our server Add MUI
    Add theme: dark and light Add Context for MUI, also for TOAST Add image lazy loader from opacity
    0 to 1 in 0.3 second Add recycler Add a 404 page, 500 page, rest of common pages Add a component
    to check if internet connection is conneted or not, toast a message Add a full meta tags to all
    pages Add a sidebar Drawer with list of pages, home, about us, contact us Add a breadCrum for
    urls Add a slider for images gallery Add a global loading component Add a global Like component
    Add a global Rate component

Implement a list of blogs with recycler Implement filter and sorting Implement single blog page with
categories tags related items share button slider like comment rate Implement search in website on
blogs title, description, content Implement login and register Implement forget-password Implement
profile page Implement confirm phone number page Implement social networks logins Implement test for
login, register, like, comment, change urls

Think about structure to let all of your codes work for blog, also for product, ...

2.  Add the best CKeditor package (If its not in MUI) Add the best image crop package (If its not in
    MUI) Add the best Date/time picker package (If its not in MUI) Add google recaptcha Add
    React-table Add React-hook-form, yup

Implement admin panel with CRUD for blogs Implement validation, Toasting proper messages

Think about structure to let all of your codes work for blog, also for product, ...

3.  CI/CD sentry firebase fatal: 'branch name' is not a valid branch name build automatically create
    link for test connect clickup to gitlab (manage status of task based on gitlab build status)
    Check performance
