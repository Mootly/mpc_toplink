/* ---------------------------------------------------------------------------- */
/*! --- Implementation Examples Scripts --------------------------------------- *
 * Copyright (c) 2023 Mootly Obviate -- See /LICENSE.md
 * ---------------------------------------------------------------------------- */
                    // Top link variables                                       *
                    // All are optional if you want to use the defaults         *
const top_addtags   = 'h2';
const top_container = 'page-body';
const top_id        = '';
const top_skipfirst = true;
const top_auto      = true;
                    // All scripts in the mp namespace to avoid collisions.     *
let mp = {
  toplink: new mpc_toplink(top_addtags, top_container, top_id, top_skipfirst, top_auto),
// ...
};
                    // only invoke these manually if auto=false                 *
// window.addEventListener('load', (e) => { mp.toplink.create(); });
/* ---------------------------------------------------------------------------- */
