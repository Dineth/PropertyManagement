import React from 'react';
import renderer from 'react-test-renderer';
import LeaseInfo from '../../src/Components/LeaseInfo.js';

describe('LeaseInfo snap shot test', () => {
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

            const component = renderer.create(
              <LeaseInfo leaseInfo={obj.leaseInfo} />,
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

});
