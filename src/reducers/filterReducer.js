import initialState from './initialState';

const filterReducer = (state = initialState.filterMenu, action) => {
    switch(action.type){
    case 'ADD_FILTER_MENU_LIST':
        return {
            ...state,
            filterButtons: action.filterButtons
        };
    case 'FILTER_MENU_INTERACTION':
      return {
        ...state,
        showFilterMenu:!state.showFilterMenu
      };
    case 'MAKE_ACTIVE':
      return state;
    default:
      return state;
    }
}

export default filterReducer 
