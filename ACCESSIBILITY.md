# Accessibility

This file documentates the current state of the application in terms of accessibility in the broadest sense of the word.

## 12 features

### Images
The application is still usable without images, altough not really useful.
There was no alt attribute on most images, so I added those to provide a little bit of context.
Performancewise, there is not much I can do as the images are provided by Funda, they do provide
different sizes so we can pick one that fits in our layout.

### CSS
The application is usable without CSS, the only problem was a big logo so I've
set a fixed size on that in the HTML. Other than that, the user should be fine
using the application if there is no CSS available or it's disabled.

### Mouse/trackpad
The tabindex is causing problems at the form on the homepage because of the Material UI library.
The best solution is to not use for the form elements, the button are working fine. So I've swapped
out the library and replaced the form elements with native one's.

### Semantics
The semantics are okay. The order of the headings was a bit off, so I fixed that.

### Custom fonts
I'm using two custom fonts from Google: Open Sans & Oswald. That's pure visual, and
the application works fine without them. I am not using any icon fonts to that's not
giving any problems.

### Colors
The colors I am using have a big contrast, so that will not give much problems
for users that have problem with colors. The only low contrast parts I had on the
application was a orange button with white text, so I replaced that with black text.
And a light grey subtext, so I replaced that with a darker grey.

### Internet (performance)
JavaScript applications can be big, as I am writing this now, in local development
the JS file of my application is a stunning 3.1 MB, but that's with inline sourcemaps.
I've created a webpack production configuration that optimizes the bundle to be
much smaller. This brings it down to 909KB. With more time on my hand I could
further optimize this by for example breaking out the Material UI library because
it's pretty big for what it gives you. There are also other methods like
[tree shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html) that can
be used to shrink the size further down.

As said, there's not much we can do about the images to increase performance, they
are provided by Funda and are already quite optimized, most of them are about 50k
with a size of around 600x400, which is pretty decent.

As I am using CSS modules the CSS is pretty smart in regard that only the CSS that
is used by the application will be included in the exported CSS file. Because the CSS
is coupled with my JS application, all the styling that is not applied to a element will
not be exported.

### JavaScript
The application works for a big part without JavaScript. The application runs on a node
server that is able to render the app on the server, fetch all the data that is required
and send it down to the client. If the client has JS enabled, it will pick the application up
in the state that the server left it and continue. If the user has not JS enabled, it will just
be static HTML & CSS and the user will be able to use the application in a way that's possible
without JavaScript. That means that everything must be build up via Progressive Enhancement, meaning
we can't rely on onClick and other JS stuff, but have to use native elements like forms & links to
allow the user to use the application without JS and use JS to enhance that experience if it's available.

### Ad tracking/content blocker
They both have no influence on the application as far as I could have tested.

## Screenreader

Using the screenreader was a useful experience, and with it I found some things
I missed like connecting the label with the input. I did find the experience rather
difficult, but I am not sure that's because of my application, the quality of the
OS X screenreader or just my lack of experience with it. I had a difficult time
letting the screenreader tell me when something has changed with JavaScript, like
showing/hiding content. Unfortunately it's hard to find good resources about this,
I did found some topics on StackOverflow but the general answer is, it should just work,
screen readers can detect when something is visible and when something is hidden.
You can provide some extra context with for example the `aria-live` attribute but that
did not do much for me. So the conclusion for me was that it's useful to use a screenreader
but if you really want to improve the experience for someone that is actually using one you
really need someone that's using one to help you out.



