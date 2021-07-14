import {NameSpace} from '../reducers/index';

export const getFieldsStatus = (state) => state[NameSpace.FORM].isDisabledFields;
export const getSubmitStatus = (state) => state[NameSpace.FORM].isDisabledSubmit;
export const getRating = (state) => state[NameSpace.FORM].rating;
export const getText = (state) => state[NameSpace.FORM].text;
export const getSubmitErrorStatus = (state) => state[NameSpace.FORM].isSubmitError;
