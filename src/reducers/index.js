import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import items from "./items";
import categories from "./categories";

/**  
 * main reducers
 */
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    "item_edit": (state, action) => {
/**  
 * reset form (wipe state) when navigating away from the Item edit page  
 */
        switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  }),
  items: items,
  categories: categories
});
