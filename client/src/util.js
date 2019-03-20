import moment from 'moment';
import ApplicationConstants from './applicationconstants';

let Util = Util || {};

Util.getLeaseList = (leaseObj) => {
   let leaseList = [];
   let start_date = new Date(leaseObj.start_date);
   let from_date = moment(start_date);
   let end_date = new Date(leaseObj.end_date);
   // Get the remaining days to pay
   let daysTofirstPayDay = Util.getDaysToFirstPay(start_date, leaseObj.payment_day);
   let frequencyMap = ApplicationConstants.frequencyMap;

   // IF pay day equal to start day payment should be started with next frequency pay day
   daysTofirstPayDay = (daysTofirstPayDay === 7) ? 0 : daysTofirstPayDay;
   let nextPayDate ;

   do {

       if (daysTofirstPayDay !== 0) {
           nextPayDate = moment(from_date).startOf('day').add(daysTofirstPayDay-1, 'd');
           leaseList.push({
               from:from_date.format(ApplicationConstants.DATEFORMAT_LEASEDATA),
               to:nextPayDate.format(ApplicationConstants.DATEFORMAT_LEASEDATA),
               days:daysTofirstPayDay,
               amount: '$' + ((leaseObj.rent/frequencyMap.get(leaseObj.frequency)) * (daysTofirstPayDay)).toFixed(1)})

           daysTofirstPayDay = 0;
       } else {
           nextPayDate = moment(nextPayDate).startOf('day').add('days', (frequencyMap.get(leaseObj.frequency) -1));
           let daysleft =  frequencyMap.get(leaseObj.frequency);
           let amount = leaseObj.rent;

           // When we have remaining days less than agreed payment duration
           if (nextPayDate.isAfter(end_date)) {
               nextPayDate = moment(end_date).startOf('day');
               daysleft = moment(end_date).startOf('day').diff(from_date, 'days') + 1;
               amount = ((amount/frequencyMap.get(leaseObj.frequency)) * daysleft).toFixed(1);
           }

           leaseList.push({from:from_date.format(ApplicationConstants.DATEFORMAT_LEASEDATA),
               to: nextPayDate.format(ApplicationConstants.DATEFORMAT_LEASEDATA),
               days: daysleft,
               amount: '$' + amount});
       }

       // Adding one day hence day is included for next from date
       from_date =  nextPayDate.add('days' ,1);
   } while (nextPayDate.isBefore(end_date));

   return leaseList;
}

Util.getDaysToFirstPay= (startDate, paymentDay) => {
    let daysForFirstPayday=0;
    let startDay = startDate.getDay();
    let pday = ApplicationConstants.daysOfWeekMap.get(paymentDay);
    /* IF the pay day is less than start day then calculate remaining days for sunday and add
    number val of pay day else get the number dates for payday from start day */
    daysForFirstPayday = (pday > startDay) ? (pday-startDay) : (7 - startDay + pday);
    return daysForFirstPayday;
}

export default Util;
