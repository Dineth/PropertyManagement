import React from 'react';


import Util from '../../src/util';
import renderer from 'react-test-renderer';
import LeaseTable from '../../src/Components/LeaseTable';

describe('LeaseList snap shot test', () => {
        it("it should pass the snapshot test", () => {
            var obj = {
              tenants: [],
              leaseInfo : {
                  id: 123,
                  start_date: '2018-07-12',
                  end_date: '2018-11-17',
                  rent: 545,
                  frequency: 'weekly',
                  payment_day: 'wednesday' },
              leaseData: []
            };

            let list = Util.getLeaseList(obj.leaseInfo);
            const component = renderer.create(
              <LeaseTable leaseInfo={list} />,
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

});
