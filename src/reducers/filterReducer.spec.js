import filterReducer from './filterReducer';

describe('The filter reducer', () => {

    it('should set initial state by default', () => {
        const action = { type: 'unknown',};
    expect(filterReducer(testState, action)).toEqual(testState);
    });

    it('should handle OPEN_FILTER_MENU', () => {
        const testState = {
            openFilterMenu:false
        };
        const action = { type: 'OPEN_FILTER_MENU'}; 
        const expectedState  = {
            openFilterMenu:true
        };
        expect(filterReducer(testState, action)).toEqual(expectedState);
    });

});


const testState = { 
    filterButtons: [
    {
        "name": "Show All",
        "active": false
      },
      {
        "name": "Apple",
        "active": false
      },
      {
        "name": "Samsung",
        "active": false
      },
      {
        "name": "Oppo",
        "active": false
      },
      {
        "name": "Sony",
        "active": false
      }
    ]
};