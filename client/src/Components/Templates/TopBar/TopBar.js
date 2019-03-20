
import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderBarStylrs from './TopBar.less';


export default class TopBar extends React.Component {
    render() {
        return <Row className="header-bar" noGutters="true">
            <Col  lg="8"><h1>Property Management</h1></Col>
            <Col lg="4"><h2 className="page-title">Lease Details</h2></Col>
        </Row>
    }
}
