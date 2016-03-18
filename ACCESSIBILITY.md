# Accessibility

This file documentates the current state of the application in terms of accessibility in the broadest sense of the word.

### No JavaScript
As of now the application is not working without JavaScript, because all the data & markup will be fetched and rendered via JavaScript.
This can be fixed by rendering the HTML on the server. Right now I'm transitioning the application into a _universal_ one that supports server side rendering.
See the [branch](https://github.com/reauv/minor-funda/tree/feature/universal) for the current progress.

### No images
The application is still usable without images, altough not really useful.
There was no alt attribute on most images, so I added those to provide a little bit of context.

### No CSS
The application is usable without CSS, but some SVG's are massive and are effecting the experience.
Some SVG's are from the Material UI library I am using and those are difficult to tackle.
Best solution is to drop the library because it's causing some other accessibility issues as well.

### No mouse/trackpad
The tabindex is causing problems at the form on the homepage because of the Material UI library.
The best solution is to not use for the form elements, the button are working fine.

### Semantics
The semantics are okay. The order of the headings was a bit off, so I fixed that.
