import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTenatData} from '../actions/TenantActions';

class Tenant extends React.Component {

    constructor(props) {
        super(props);
        this.tenantClicked = this.tenantClicked.bind(this); // Bind the function
    }

    tenantClicked(){
        this.props.actions.getTenatData(this.props.tenant.id);
    }

    render () {
        return <div>
            <a href="#" onClick={this.tenantClicked}>{this.props.tenant.tenant}</a>
        </div>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getTenatData: bindActionCreators(getTenatData, dispatch)
        }
    };
}

export default connect(null, mapDispatchToProps )(Tenant);
