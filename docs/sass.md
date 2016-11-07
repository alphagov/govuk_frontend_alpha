# Sass

## Overview

The files in assets/scss have been ordered to follow ITCSS principles:

## ITCSS
- Write CSS in specificity order
- All rulesets should only ever add to and inherit from other styles
- DO NOT UNDO CSS later in the stylesheet
- Overrides and helpers need to come last
  (this prevents a spike in the specificity graph)
- Add extra layers as you need
- Media queries sit with the rules that they affect

### Settings

High level settings, global variables.

Colour values, spacing units, globally available variables.

### Tools

Global mixins and functions (these affect the entire project)

Globally available font sizes

### Generic

Ground zero styles, normalize, resets, box sizing

### Elements

Unclassed HTML elements (type selectors)

h1 - h6, basic links, lists

### Objects

Site wrapper and grid

### Components

Fully designed chunks of UI

Private mixins sit in relevant file

Use BEM

    .component-name {}
    .component-name__element {}

### Utilities

These affect one piece of the dom at a time
Very high specificity, usually carry !important

    .one-half {
      width: 50% !important;
    }

This is the most specific layer.

We are progressively adding and never undoing.

## Namespaces / Prefixes

All components use the govuk namespace:

                      govuk-

Components, objects and utilites use a prefix:

    Component          c-               c-message-bar

    Object (layout)    o-               o-site-width-container

    Utility            u-               u-one-half

    States             is-              is-visible
                       has-             has-loaded

    JS hooks           js-              js-enabled

    States             is-              is-visible
                       has-             has-loaded


### JS-hooks:

We currently use:

    .js-enabled .js-hidden  { display: none; }

Propose using is- to follow common states (-is, -has):

    .js-enabled .is-hidden { display: none; }

### States:

    States             is-              is-visible
                       has-             has-loaded

    <!-- standalone state hook -->
    <div class="c-card is-active">
        […]
    </div>

    <!-- or BEM modifier -->
    <div class="c-card c-card--is-active">
        […]
    </div>

Use standalone classes to apply states to components.

Examples of standalone classes:

    .is-active
    .is-visible
    .is-hidden
    .is-disabled
    .is-expanded
    .is-collapsed

    .has-loaded

### BEM

- We are using BEM as a naming convention
- BEM stands for `Block__Element--Modifier`, not `Block__Element__Element--Modifier`. So, avoid multiple element level naming.

## How to use these files

Import a single file for each ITCSS layer.
This file will import all the partials within the folder with the same name as the layer.

These files should be imported in the ITCSS order.

In your main stylesheet:

    @import "settings"
    @import "tools"
    @import "generic"
    @import "elements"
    @import "components/_component-name.scss"
    @import "utilities"

You can add your own partials between each of these layers.

Choose the component partials you need to import from:

    /app/assets/scss/components/

For example,

    @import "components/_component-name.scss"

If you want to import all components, use

    @import "components"

This will import all the components listed in

    /app/assets/scss/_components.scss

[Linting Sass](sass-linting.md)
