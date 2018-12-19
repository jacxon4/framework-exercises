import {actionsEnums} from '../common/actionsEnums';

export const updateUserProfileName = (newName: string) =>({
    type: actionsEnums.UPDATE_USER_PROFILE_NAME,
    payload: newName,
});