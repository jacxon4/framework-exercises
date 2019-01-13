import {actionsEnums} from '../common/actionsEnums';

export const filterCompanyChanged = (company : string) => ({
    type: actionsEnums.FILTER_CHANGED,
    payload: company
});