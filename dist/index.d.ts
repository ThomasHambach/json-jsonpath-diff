import { JsonDifferences } from "./JsonDifferences";
/**
 * Compare two JSON objects and return the difference between the left and
 * right object as a map with the path as key, and the change as value.
 *
 * Changes can be: "create", "update", "delete", or "child-update".
 * Here, "child-update" means the object itself is not changed but one
 * or more of it"s childs have.
 *
 * @param {JSON} left
 * @param {JSON} right
 * @return {{
 *   diffLeft: DiffMap,
 *   diffRight: DiffMap
 *   count: DiffCount
 * }}
 */
export declare function diff(left: any, right: any): JsonDifferences;
