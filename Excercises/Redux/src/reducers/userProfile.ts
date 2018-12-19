import {actionsEnums} from '../common/actionsEnums';

export interface UserProfileState {
  firstName: string;
}

const defaultUserProfile = (): UserProfileState => ({
  firstName: "Amparo"
});

export const userProfileReducer = (state = defaultUserProfile(), action) => {
    switch(action.type){
        case actionsEnums.UPDATE_USER_PROFILE_NAME:
        return handleUserProfileAction(state,action.payload);
    }
  return state;
};

const handleUserProfileAction = (state: UserProfileState, firstName:string): UserProfileState =>({
    ...state,
    firstName,
})
