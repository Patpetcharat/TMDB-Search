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

### Production Build and run production server with server-side rendering
```sh
$ npm start
```

## Features
- Uses History API, allowing using the browser's back and forward button to navigate between pages without having to reload the page.

## To do
- Show a loading animation while waiting for search results to return
- Many movies do not have images. Currently, this results in a 404. A placeholder image should be shown in their place.
- Pagination currently shows links to an unlimited number of pages, and causes the browser to slow down when there are a large number of pages. We should truncate the available pages to only show a few before and after the current page.
- Pagination links should have the current page highlighted and disabled
- Transition between pages currently seem to overlap strangely
- Use ImagesLoaded plugin to show a placeholder for the movie poster images while the image is loading, and then transition in the image.
- Show "no results" message when no results are returned.
- Should not show vote average when there are no votes
- Render initial page view on the server, for faster initial page load.

## Compatibility
- Tested on the latest versions of Chrome, Firefox, and Safari.
- Tested on Chrome browser on Android 5.1
- Not yet tested on Internet Explorer or iOS, but I would doubt any major problems.