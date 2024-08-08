# Overview
This is a tiny scroll animation library that works nicely with tailwindcss.
This framework toggles classes on and off based on the element's scroll position.

## Prerequisites
A working tailwindcss setup.

## Installation
Embed the script.js file into your project. In the easiest case you can load the script directly
from within html.
```html
<script src='script.js'></script>
```

Then update your `tailwind.config.js` to include the `content` object as in the `tailwind.config.js`
of this repo.

## Usage
To enable a scrolling effect on a component, give it the class `onscroll`. Then,
any classes that you want to ADD when the element is scrolled into view need to be prefixed with
`scroll:`. Any classes that you want to be add by default and REMOVE once the element is scrolled
into view should be prefixed with `-scroll:`.

## Example
```html
<div class="onscroll scroll:opacity-100 -scroll:opacity-0 duration-300 scroll:top-0 -scroll:top-[80px] relative">
```

By default, the div is
- not visible due to `-scroll:opacity-0`.
- is shifted down due `-scroll:top-[80px]`.

Once the element is scrolling into view, within 300ms (`duration-300`), the div changes to
- being fully visible (`scroll:opacity-100`).
- being in its regular, unshifted position since `-scroll:top-[80px]` is no longer applied.
