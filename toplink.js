/** --- Jump to Top Link Generator -------------------------------------------- *
 * mpc_toplink 1.0.0
 * @copyright 2017-2023 Mootly Obviate -- See /LICENSE.md
 * @license   MIT
 * @version   1.0.0
 * ---------------------------------------------------------------------------- *
 *  Automates jump link menu based on headings the current page.
 *  Invokes on: onload
 * -----
 *  Tasks:
 *  - Creates links to the top of the page at each specified element.
 *    Default : <h2>
 *  - The top link is PRE-PENDED to the target element. Style accordingly.
 *  - If no top ID specified, check body for ID, otherwise use 'top'.
 * -----
 *  User set flags - Most of these are best declared at the template level
 *  Flag            | Default           |
 *  top_container   | 'page-body'       | The element to delimit the search.
 *  top_addTags     | 'h2'              | Comma separate list of elements to
 *                  |                   | receive top links.
 *  top_topID       | 'top'             | Default top id.
 *  top_skipFirst   | true              | Skip top link on first heading.
 *  top_exclude     | 'dl, #toc-links,  | Comma separated list of parent
 *                  | .skip-toplink'    | containers to exclude.
 *  top_auto        | true              | Automatically add tags or
 *                  |                   | wait for manual execution.
 * --- Revision History ------------------------------------------------------- *
 * 2023-11-27 | New TypeScript-compliant version
 * ---------------------------------------------------------------------------- */
class mpc_toplink {
  constructor(pAddTags = 'h2', pContainer = 'page-body', pTopId = null, pSkipFirst = true, pExclude = 'dl, #toc-links, .skip-toplink', pAuto = true) {
                    // Variables to generate links back to the top of the page  *
    this.skipFirst = pSkipFirst;
    this.addTags = pAddTags;
    this.excludeParents = pExclude;
    this.topID = (pTopId) || (document.body.id || 'top');
    if (!this.topID.startsWith('#')) {
      this.topID = '#' + this.topID;
    }
    this.container = pContainer;
    this.topLinkDiv = document.createElement('div');
    this.topLinkDiv.className = 'top-link';
    this.topLinkA = document.createElement('a');
    this.topLinkA.title = 'Back to Top';
    this.topLinkA.href = this.topID;
    this.topLinkA.innerHTML = '<span>[top]</span>';
    this.topLinkDiv.appendChild(this.topLinkA);
    if (pAuto) {
      this.create();
    }
  }
                    // Link generator                                           *
  create() {
    this.topList = document.getElementById(this.container)?.querySelectorAll(this.addTags);
    this.topList.forEach((el) => {
      if (this.skipFirst) {
        this.skipFirst = false;
      }
      else if (!(el.closest(this.excludeParents)) && el.parentNode) {
        el.parentNode.insertBefore(this.topLinkDiv.cloneNode(true), el);
      }
    });
  }
}
/*! --- Copyright (c) 2023 Mootly Obviate -- See /LICENSE.md ------------------ */
