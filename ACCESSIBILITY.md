# Accessibility

This file documentates the current state of the application in terms of accessibility in the broadest sense of the word.

### No JavaScript
As of now the application is not working without JavaScript, because all the data & markup will be fetched and rendered via JavaScript.
This can be fixed by rendering the HTML on the server. Right now I'm transitioning the application into a _universal_ one that supports server side rendering.
See the [branch](https://github.com/reauv/minor-funda/tree/feature/universal) for the current progress.

### No images
The application is still usable without images, altough not really useful.
There was no alt attribute on most images, so I added those to provide a little bit of context.
