# Exercise 1 - Hello World!

We're going to use our muscle memory to get our initial application off the ground. You've been given some starter settings files, but not much else. Follow along to build your app.

## Step 0 - Set up npm

1. Run `npm init -y` to initialize your project
2. Open `package.json` and 
  3. update the description and the author.
  1. add two new scripts:

```json
"scripts":{
  "dev": "nodemon",
  "debug": "nodemon --inspect"
},

```

## Step 1 - Dependencies

Let's get this app off the ground! Install [express](https://www.npmjs.com/package/express):

```
npm i express 
``` 

## Step 2 - Dev Dependencies

We have some dependencies that are only for use during development. **Install** these using npm (like above), but with the `--save-dev` or `-D` flags.

1. [nodemon](https://www.npmjs.com/package/nodemon)
1. [eslint](https://www.npmjs.com/package/eslint)
2. [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
3. [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)

Check your `package.json`, you should have 2 new sections:
1. dependencies
2. devDependencies

## Step 3 - Build out the server

1. Open [server.js](../server.js) and follow the **TODO** prompts... 
2. run `npm run dev` (CTRL + C to stop)

## Step 4 - Configure the Logger

We'll be using [morgan](https://www.npmjs.com/package/morgan) as our logger.

1. Install morgan
2. require the morgan package in your server.js (Hint: all `require`s go at the top)
3. After we initialize express, tell it which logger to use: `app.use(logger('dev'));`

## Summary

You should now have a fully working server that doesn't do much, but says 'Hello World' on the home page.
