import React from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TopBar from './TopBar/TopBar'
import LeaseTable from '../LeaseTable'
import TenantsList from '../TenantsList'
import LeaseInfo from '../LeaseInfo'


class AppContainer extends React.Component {

    render() {
        return <Container id="main-content" fluid="true">
            <TopBar/>
            <Row>
                <Col lg="4">
                  <Row><Col lg="12"><h3>Tenants</h3></Col></Row>
                  <Row><Col lg="12"><TenantsList tenantsList={this.props.tenantsList}/></Col></Row>
                  <Row><Col lg="12"><LeaseInfo leaseInfo={this.props.leaseInfo} /></Col></Row>
                </Col>
                <Col lg="8"><LeaseTable leaseList={this.props.leaseList} /></Col>
            </Row>
        </Container>
    }

}

function mapStateToProps(state) {
    return {
        leaseList: state.leaseData,
        tenantsList :state.tenants,
        leaseInfo :state.leaseInfo
    };
}
export default connect(mapStateToProps)(AppContainer);
