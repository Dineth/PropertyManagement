import React from 'react';
import Tenant from './Tenant'


export default class TenantsList extends React.Component {

    render () {

        const list= this.props.tenantsList.map((tenant, index) =>
            // The key attribute is not needed for this app but without key it will generate a warning
            <li key={index}><Tenant tenant={tenant} /></li>
        );

        return (
            <ul>{list}</ul>
        );
    }

}
