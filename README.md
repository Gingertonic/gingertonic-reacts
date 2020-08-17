# Ready to React?
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)

Starting a new React project? Great!

- Not looking forward to the initial webpack setup?
- Can't make up your mind on a file structure?
- Fed up of Googling for Jest setup? 

Well, you're very welcome to start here. This is a basic boilerplate plus a bit extra, laid out the way I like it - your mileage may vary greatly!

## Setup
- Click the friendly, green 'Use this template' button to your top right
- Follow the prompts to create a new repository
- Clone down your new repo
- `cd <your-repo-name>`
- `npm install`

## Scripts
- start dev server with `npm start`
- build with `npm build`
- test with `npm test`
- check test coverage with `npm run coverage`

***NB***: `npm start` does not open the browser. Open it yourself, you lazy thing, and go to `localhost:8000`. \
If you want to add this functionality (because... you love dup tabs?), add `open: true` to the webpack.config.js devServer options

## What's included?
- basic webpack setup with HotModuleReplacement & HTMLWebpack plugins
- essential babel setup plus support for class properties
- starter React app file structure 
- basic routing setup with react-router-dom
- basic nav-main-footer layout
- some starter styling including css variables outline in index.css
- slightly adjusted normalize.css
- responsive NavBar with (vegan!) burger for screens under 768 width
- responsive 12x12 CSS grid in `main`
- custom hook to get window size and estimate if device is mobile
- basic Jest / Enzyme test setup and tests for existing code
- SEO component powered by react-helmet

## License
Go wild, I'd love to know what you've built though so keep me in the loop! \
Okay but seriously, it's the MIT license.

## Contribution
If you have an update or change that you think would be fun, do make a PR and tag me (@Gingertonic). \
Please don't be offended if I don't roll with it, this template is based on my own current personal preferences/habits and I will update it as and when my tastes change - I am, however, always up for being shown an alternative approach!

***

![Drake Approves](https://res.cloudinary.com/gingertonic/image/upload/v1597696654/GTS/drake-hotline-bling_gingertonic-reacts.png)