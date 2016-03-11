# TMDB search
A web app to search The Movie Database

## Getting Started
### Install
```sh
$ npm install
```
If you don't have gulp installed, you also have to install it using
```sh
$ npm install gulp -g
```

### Development server - using BrowserSync for CSS Injection and React Transform HMR for React Hot Module Replacement
```sh
$ gulp
```

### Production Build and run production server on port 8080
```sh
$ npm start
```

## Features
- History API allows using the browser's hitory navigation
- React Router allows URL sharing of search pages


## To do
- Fix IE9 and IE10 javascript error that prevents the search results from showing.
- Show a loading animation while waiting for search results to return.
- Many movies do not have images. Currently, this results in a 404. A placeholder image should be shown in their place.
- Pagination currently shows links to an unlimited number of pages, and causes the browser to slow down when there are a large number of pages. We should truncate the available pages to only show a few before and after the current page.
- Pagination links should have the current page highlighted and disabled.
- Transition between pages currently seem to overlap strangely.
- Use ImagesLoaded plugin to show a placeholder for the movie poster images while the image is loading, and then transition in the image.
- Show "no results" message when no results are returned.
- Should not show vote average of 0 when there are no votes.
- Render initial page view on the server, for faster initial page load.
- Reduce bundle.js file size by removing jQuery dependency, and replacing it with a smaller AJAX library
- Reduce bundle.js file size by using TweenLite instead of TweenMax, and write a custom "StaggerTo" function.

## Compatibility
- Compatible with the latest versions of Chrome, Firefox, and Safari.
- Compatible with Chrome browser for Android 5.1
- Compatible with IE11
- Although this app should be compatible with IE9+, IE9 and IE10 are currently throwing a javascript error that prevents the 
- Currently untested on iOS
