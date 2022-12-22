import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                React JS
                            </a>
                            <p className="text-gray-600">5 Jan 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What are the different ways to manage a state in a react
                                    application?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The Four Kinds of React State to Manage When we talk about state
                            in our applications, it is important to be clear about what types
                            of state actually matter. There are four main types of state you
                            need to properly manage in your React apps: Local state, Global
                            state, Server state, URL state <br />
                            Local (UI) state Local state is data we manage in one or another
                            component. Local state is most often managed in React using the
                            useState hook. For example, local state would be needed to show or
                            hide a modal component or to track values for a form component,
                            such as form submission, when the form is disabled and the values
                            of a form is inputs.Global (UI)
                            <br />
                            state Global state is data we manage across multiple components.
                            Global state is necessary when we want to get and update data
                            anywhere in our app, or in multiple components at least. A common
                            example of global state is authenticated user state. If a user is
                            logged into our app, it is necessary to get and change their data
                            throughout our application. How to Manage Local State in React
                            Local state is perhaps the easiest kind of state to manage in
                            React, considering there are so many tools built into the core
                            React library for managing it. useState is the first tool you
                            should reach for to manage state in your components. It can take
                            accept any valid data value, including primitive and object
                            values. Additionally, its setter function can be passed down to
                            other components as a callback function (without needing
                            optimizations like useCallback).
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                JavaSript
                            </a>
                            <p className="text-gray-600">15 Sep 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does prototypical inheritance work?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit <br /> the properties and methods of another object. Traditionally, <br /> in order to get and set the [[Prototype]] of an object, <br /> we use Object. getPrototypeOf and Object.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                Unit Test
                            </a>
                            <p className="text-gray-600">28 Dec 2020</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    What is a unit test? why should we write unit test?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, <br /> it can help detect early flaws in code which <br /> may be more difficult to find in later testing stages.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                React Angular .Vue
                            </a>
                            <p className="text-gray-600">28 Dec 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    React VS Angular VS .Vue
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            Angular, React, and Vue are the most popular frameworks for any project that has something to do with JavaScript, from creating mobile, small-scale applications to building intuitive user interfaces for business web apps. However, before going into the actual comparison, I will guide you through the essential aspects and history of each JS Framework.    Angular is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.
                            Angular is Google’s matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.
                            While comparing Vue JS vs Angular, Vue is known for its clean architecture and its elegant designs. On the other hand, Angular is considered for many organizations due to its vast functionality and high performance.    Vue is a popular progressive, open-source framework for developing complex user interfaces, while React is a JavaScript library for building web development for interactive elements on UIs. React is also used to develop SPAs and mobile apps.
                            Vue JS is more oriented to novice developers, while React requires in-depth knowledge of JavaScript. React uses a virtual DOM (copy of the actual DOM) to interact with HTML files, but every element is represented as a JavaScript object.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blog;