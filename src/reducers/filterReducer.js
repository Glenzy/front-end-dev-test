import initialState from './initialState';

const filterReducer = (state = initialState.filterMenu, action) => {
    switch(action.type){
    case 'ADD_FILTER_MENU_LIST':
        return {
            ...state,
            filterButtons:[ 
              ...action.filterButtons.map((button)=>{
                return {
                  name:button,
                  active:false
                }
              })
            ]
        };
    case 'OPEN_FILTER_MENU':
      return {
        ...state,
        openFilterMenu:!state.openFilterMenu
      };
    case 'MAKE_ACTIVE':
      return {
        ...state,
        filterButtons: state.filterButtons.map((filterButton) =>{
          if(filterButton.name === action.name && !filterButton.active){
           return {
            ...filterButton,
            active:true
           }; 
          } else if(filterButton.name != action.name && filterButton.active){
            return {
              ...filterButton,
              active:false
             }; 
          } else {
            return filterButton;
          }
        })
      };
    default:
      return state;
    }
}

export default filterReducer 