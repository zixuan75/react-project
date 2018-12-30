# :rainbow: The React:laughing: Project:star: :stars: : :fire:

[![Coverage Status](https://coveralls.io/repos/github/zixuan75/react-project/badge.svg)](https://coveralls.io/github/zixuan75/react-project?branch=master)

Welcome to The React Project!:2nd_place_medal:

## Run code

### Run without learning JSX

First of all, install NPM. Make sure you have NodeJS 6.0.0 or higher, and NPM 5.2.0 or higher.

Then run:

```
$ npx create-react-app my-app
```

Next, extract the file you downloaded from my repository.

So then delete all of the files and folders in the my-app directory be sure not to delete the npm files and folders in the directory.

Then replace the files and folder that you've deleted with all of the files in this project.

Last, delete unnecessary files and folders on the directory by running these commands:

```
$ rm -rf source\*
$ rm -rf .deal .github
$ rm -rf PULL_REQUEST_TEMPLATE.md
$ rm -rf LICENSE 0a.png
$ rm -rf \_config.yml
$ rm -rf contributing.md
$ rm -rf src/README.md
```

Then, you can start npm using:

> npm start

And then go to https://localhost:8000 and the app should start.

### JSX learning

**This is completely not required for this tutorial.**

If you're interested in learning JSX, you might check out our wiki (which is actually not complete yet) [here](https://github.com/zixuan75/react-project/wiki). Now, this tutorial might not work for you, but I recommend it so much that you should take it if you do not already know JSX and React. Also, the tutorial is not yet complete, so this tutorial is only a half of complete and advanced React which I will add later.

You just don't need to clone this repository to learn JSX.

(You can also learn at [the official React.js website](https://reactjs.org).)

#### Versions needed

You need NPM >= 5.2.0 and Node.js >= 6.0.0 to learn JSX.

If you don't have those versions installed yet, you can just upgrade your old NPM and/or Node.js to learn JSX here at this repository.

## Remember

Remember, we're using React, so it's going to render those components with the id="component name" unless if you have React Devtools where you can look at the JSX components and how it renders them.

With no React Devtools:

```html
<div id="App">
  <div id="Text"><p>...</p></div>
</div>
```

With React Devtools:

```jsx
<div>
  <App>
    <Text>
      <p>...</p>
    </Text>
  </App>
</div>
```

## NPM notice

Please note that NPM has not been working well and is getting a error part of the time when alax99's trying to look on localhost:8000 and nothing is happening right now.

It's just getting many errors on alax99's Windows device. NPM can install create-react-app but can't run the app using React Scripts. I don't know why, but it's just breaking on the CommandTerminal for Windows.

From zixuan75's view, zixuan75's on CodeSandbox and is on testing rarely and does seem to work on Ubuntu but now on Windows. It seems that npm has some little compo on Windows.
