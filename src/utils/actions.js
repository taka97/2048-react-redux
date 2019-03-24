const _ = require('lodash');
/**
 * Generate action types in the form of:
 * 
 *    {ACTION: "ACTION"}
 * 
 */
export const generateActions = (actions) => {
  const actionMaps = {};

  _.forEach(actions, index => {
    actionMaps[index] = index;
  })

  return actionMaps;
}
