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
- Many movies do not have images. A placeholder image should be shown in their place.
- Pagination currently shows links to an unlimited number of pages. At a certain point, we should truncate the available pages to only show a few before and after the current page.
- Pagination links should have the current page highlighted and disabled