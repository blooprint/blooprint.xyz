#Please FORK this project and submit your PULL REQUESTS!!!

##Are you a newcomer? Visit our descriptive [WIKI](https://github.com/blooprint/blooprint.xyz/wiki)

##Please become familiar with our core [Blooprint-API](https://github.com/blooprint/blooprint-api), which we're using as the core engine to this project. Blooprint software is an **[extension to the blooprint-api](https://github.com/blooprint/blooprint-api/blob/master/LICENSE)** software. The API returns images for rendering the DOM. It's kept here: **[./api/blooprint.jar](https://github.com/blooprint/blooprint/tree/master/api)**, from **[here](https://github.com/blooprint/blooprint-api/releases)**.

####In the project directory, you can run:

### `npm install`

### `npm run dev`

####Wait for desktop application to open.

_________________________________________________

#Development Direction

PLEASE REFER TO THE [DEVELOPER PROGRESS WIKI](https://github.com/blooprint/blooprint.xyz/wiki/Developer-Progress) FOR DETAILS

Apart from critical pieces that need to be developed in this application (ie - login/user authentication, further [API](https://github.com/blooprint/blooprint-api) development, etc...) the main functionality that needs development focus is the **Design component**.

###`Design.js` component - interacts with the [blooprint-api](https://github.com/blooprint/blooprint-api)

This is the part of the application the whiteboard user interacts with.  **The DOM is to consist of**:
- The **Blooprint Image**
 - Short-term goal:	a **single full-screen image** generated by the [API](https://github.com/blooprint/blooprint-api)
 - Long-term goal:	unlimited images generated by the API pieced together in an infinitely scrollable XY plane (limited to latest `BLOOP` coordinates)
  - the Blooprint-API `WRITE` or `ERASE` bloop action will have to act upon the multiple images that appear instantaneously in the display range of the full-screen browser - will require further [API](https://github.com/blooprint/blooprint-api) development in order to act upon specific slivers of images that appear in the browser at the time of the `BLOOP`/`ERASE` action
- **BLIP objects** - for search engine optimization. play around with the application - you'll see what they are

####Runtime requirements
```
"node": ">=6.x",
"npm": ">=3.x"
```
```
"jdk": ">=1.8"
```

####License: **GPL-3.0** - see [**original**](https://github.com/blooprint/blooprint-api/blob/master/LICENSE)
