import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leaseInfo from './LeaseInfo.less';


export default class LeaseInfo extends React.Component {

    render () {
        return <div id="leaseInfo">
            <legend>Lease Info</legend>
            <Row><Col>ID</Col><Col>{this.props.leaseInfo.id}</Col></Row>
            <Row><Col>Sart date</Col><Col>{this.props.leaseInfo.start_date}</Col></Row>
            <Row><Col>End date</Col><Col>{this.props.leaseInfo.end_date}</Col></Row>
            <Row><Col>Rent</Col><Col>{this.props.leaseInfo.rent}</Col></Row>
            <Row><Col>Freequency</Col><Col>{this.props.leaseInfo.frequency}</Col></Row>
            <Row><Col>Payment day</Col><Col>{this.props.leaseInfo.payment_day}</Col></Row>
        </div>
    }

}
