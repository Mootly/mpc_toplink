# MoosePlum Top Link Generator

This is just generates top links next to headings in the page.

## Dependencies

This was written in TypeScript and exported to ES2020.

## Assets

The files in this set are as follows:

| path                   | description                                        |
| ---------------------- | -------------------------------------------------- |
| LICENSE.md             | License notice ( [MIT](https://mit-license.org) ). |
| README.md              | This document.                                     |
| mpc_toplink.ts         | The class definition in TypeScript.                |
| mpc_toplink.js         | The class definition in ES6.                       |
| mpc_toplink.min.js     | Minified version.                                  |
| mpc_toplink.min.js.map | Map file.                                          |
| tsconfig.json          | Example TS > ES2020 config setting.                |
| _invoke.js             | Example implementation code.                       |

## Installation

Download this repo, or just the script, and add it to the script library for your site.

This script has no external dependencies.

### Compiling from the TypeScript

To save to ES2020 in the current folder, assuming you have the correct libraries installed, run the following in this folder:

`tsc -p tsconfig.json`

## Configuration

The script inserts a link to the top of the page before each heading specified by `pAddTags` in the section of the document specified by `pContainer`.

The referenced top of the page is an ID that should be defined and passed in to the call. The fallthrough is as follows:

  1. Use the specified ID passed in on instantiation.
  2. If no ID was passed, check the body tag for an ID.
  3. If the body tag has no ID, use "#top".

Browsers currently redirect to the top of the page for IDs not found. Should they stop doing this, the third option will need to be avoided (and removed from the code).

The containing element ID should always be provided on instantiation.

The code prepends the following before each designated element:

```html
<div class="top-link">
  <a href="#{topid}" title="Back to top"><span>[top]</span></a>
</div>
```

### Assumptions

This script assumes a document structure where it makes sense to have top links at each significant section break. The script uses `querySelectorAll`, so there is room for creativity in terms of what gets top links prepended.

### Parameters

| name        | type      | default     | description
| ----------  | --------- | ----------  | ----------
| pAddTags    | string    | 'h2'        | Selector query string of elements.
| pContainer  | string    | 'page-body' | Container element to search.
| pTopId      | string    | null        | Target ID to link to in the page.
| pSkipFirst  | boolean   | true        | Whether to skip the first found element.
| pExclude    | string    | see desc    | Containters to exlude from search for places to add top links. Defaults are: 'dl, #toc-links, .skip-toplink'.
| pAuto       | boolean   | true        | Whether to automatically generate top links.

### Coding Example

Use the `mp` namespace to help avoid collisions.

Arguments may be omitted if using defaults.

```js
const top_addtags   = 'h2';
const top_container = 'page-body';
const top_id        = '';
const top_skipfirst = true;
const top_exclude   = 'dl, #toc-links, .skip-toplink';
const top_auto      = true;

let mp = {
  toplink: new mpc_toplink(top_addtags, top_container, top_id, top_skipfirst, top_exclude, top_auto),
  ⋮
};
```

If auto is set to false, manually invoke the top link generator on load.

```js
window.addEventListener('load', (e) => { mp.toplink.create(); });
```
