import {actionsEnums} from '../common/actionsEnums';


export const filterReducer = (state: string = 'Lemoncode', action) => {
    switch (action.type) {
        case actionsEnums.FILTER_CHANGED:
            return action.payload;
    }

    return state;
};
