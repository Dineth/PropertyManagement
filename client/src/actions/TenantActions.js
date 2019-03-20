import * as types from './ActionTypes';
import tenatApi  from '../api/leaseapicalls';

export function getTenantDataSucess(data) {
    return {type: types.GET_TENANT_LEASE_SUCCESS, tenantData:data};
}

export function getTenantsSucess(data) {
    return {type: types.GET_TENANTS_SUCCESS, tenants:data};
}

export function getTenatData(id) {
    return function(dispatch) {
        return tenatApi.getLeaseData(id).then(response => {
            dispatch(getTenantDataSucess(response.data));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function getTenants() {
    return function(dispatch) {
        return tenatApi.getTenants().then(response => {
            dispatch(getTenantsSucess(response.data));

        }).catch(error => {
          console.log(error);
        });
    };
}
