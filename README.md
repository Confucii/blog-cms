# Blog CMS

This project is a comprehensive blogging system consisting of three main parts: a RESTful API, a client-side application, and a content management system (CMS) for administrators. It allows admins to create, read, update, and delete blog posts, submit comments, and manage blog content efficiently.

### [Live Demo](https://confucii-blog-cms.netlify.app/login) You will need secret credentials :/

### [Client](https://github.com/Confucii/blog-client)

### [API](https://github.com/Confucii/blog-api)

## Description

The Blog CMS is specifically designed for administrators to efficiently manage the blog's content. It's also built using React.js and offers the following functionalities:

#### User Authentication:

To access the CMS, administrators must provide the correct credentials via a login form. Authentication data is received with cookies, granting access to admin privileges.

#### Context Management:

The CMS employs React's Context API to make authentication data accessible throughout the component tree, ensuring access to administrative functions.

#### Custom Hooks:

To prevent code repetition and streamline codebase maintenance, custom hooks are implemented. One such hook is used to access and update authentication data.

#### Axios Integration:

Axios is used to interact with the API. A custom hook exposes Axios with response and request interceptors, removing code repetition for every call.

#### Content Management:

Administrators can perform various content management actions, including hiding and showing posts, deleting posts, creating new posts, editing existing posts, and deleting comments. A form is provided for creating and editing posts.

## Technologies used

<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-plain.svg" alt="typescript" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="30" height="30"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="30" height="30"/> <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" alt="react" width="30" height="30"/>

> AI generated humor: <br>
> Q: Tell me a joke about getting data through axios <br>
> A: Why did the developer use Axios to fetch data? <br>
> Because they heard it was great at making GET-aways!
