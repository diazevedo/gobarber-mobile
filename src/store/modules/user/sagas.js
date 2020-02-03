import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

// import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Success', 'Profile has been updated.');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Error', 'Sorry, something went wrong.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
