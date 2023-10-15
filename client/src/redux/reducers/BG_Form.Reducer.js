import * as actionType from '../constants/BG_Form.Constant'

export const getBgFormReducer = (state = { BgForm: [] }, action) => {
    switch (action.type) {
        case actionType.GET_BG_FORM_SUCCESS:
            return { BgForm: action.payload }
        case actionType.GET_BG_FORM_FAIL:
            return { error: action.payload }
            default:
                return state
    }
}