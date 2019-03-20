import * as types from '../actions/ActionTypes';
import initialState from './InitialState';
import Util from '../util';

export default function tenanstLeaseReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_TENANT_LEASE_SUCCESS:
            var leaseList= Util.getLeaseList(action.tenantData);

            return Object.assign({}, state, {leaseData: leaseList}, {leaseInfo: action.tenantData});

        case types.GET_TENANTS_SUCCESS:
            return Object.assign({}, state, {tenants: action.tenants});

        default:
            return state;
    }
}
