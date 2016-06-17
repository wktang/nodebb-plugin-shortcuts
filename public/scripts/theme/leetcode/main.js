/*
 * Latest functionality approval:
 *   2015/11/16
 *   NodeBB 0.9.0
 *   nodebb-theme-leetcode 4.0.39
 */

define("@{type.name}/@{id}/themes/leetcode/main", [
  "@{type.name}/@{id}/themes/leetcode/selection"
], function (selection) {
  "use strict";

  return function (shortcuts, theme) { selection(shortcuts, theme); };
});
