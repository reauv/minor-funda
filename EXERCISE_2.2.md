# Funda core functionality

### Core functionality
I had two core functionalities for my funda application: searching objects & objects around you.
I decided to go for the first one and make it possible that the user can search objects in a location
and price range, without having JavaScript!

In this case there are two layers of progressive enhancement:
the user has or the has not JavaScript.

### Background
The ideal way would be that I could keep the application for most part the way it was,
but still be able to provide the user an application that can be used without running
JavaScript on the client. The solution is in essence really simple: rendering the application
somewhere you know for sure you have JavaScript. For that we have Node, JavaScript on the server.

While this sounds really simple there are some things we have to take into account, mainly we have
to be aware of the differences between a Node application and the browser. So for example, there
is no browserhistory, no DOM and the 'application' is flat, meaning we have to work around async.

### How it works
After a lot of hard days work I worked around the differences between Node & the browser and
it's now for the most part finished. In summary here's what it does:
- There is a Node application that runs in the background, that's basically a simple HTTP server.
- When a request comes in, it's going to check the routes of the application and match one corresponding with the request.
- When it has found a valid route, it'll ask all the components that will be rendered for the matched route and check if they need any data.
- If there is data to be fetched, it'll fetch that and when it's finished it'll continue.
- Now that all the data is availble, we can continue with the rendering process.
- Instead of rendering in a DOM, which we do not have on the server, we ask React to give us a string instead.
- This string is just the DOM that's going to be used by the browser. So basically we are just rendering HTML.
- Then we dehydrate the store, this means we grab the application state from the store (which holds it), convert it to JSON and put it in the response.
- Now we have the HTML & the data and we can send that back to the user.
- The browser receives the response from the server and will build up the page with the provided HTML.
- If the user has JS, this will boot up and React will detect that there is a React application rendered by the browser.
- Now React 'kicks in', and will just continue where the server left off.
- The application state that was dehydrated will now be hydrated on the client side and we have the data we fetched on the server.
- Now, if the user does not have JavaScript, it will just be a HTML page that works on the classic way.

### Conclusion
The nice thing about this way of building applications is that we are building one application that works both
with and without JavaScript without the need of detecting if the user has JavaScript or not, or some ugly HTML fallback templates
that will cause a lot of duplication and a ton of maintenance work. It does require some thinking about "what if the user does not
have JavaScript?" and relying on native elements like links and forms, but those are
best practices anyway and should always be used if possible.

