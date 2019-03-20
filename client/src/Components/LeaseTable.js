import React from 'react';
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class LeaseTable extends React.Component {

    render () {
        return <BootstrapTable height='400px' data={this.props.leaseList}
            striped hover pagination exportCSV columnFilter>
              <TableHeaderColumn isKey dataField='from'>To</TableHeaderColumn>
              <TableHeaderColumn dataField='to'>From</TableHeaderColumn>
              <TableHeaderColumn dataField='days'>Days</TableHeaderColumn>
              <TableHeaderColumn dataField='amount'>Amount</TableHeaderColumn>
        </BootstrapTable>
    }
}
