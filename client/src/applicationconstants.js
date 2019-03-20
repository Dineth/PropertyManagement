var ApplicationConstants = ApplicationConstants || {};

ApplicationConstants.frequencyMap = new Map();
ApplicationConstants.frequencyMap.set('weekly', 7);
ApplicationConstants.frequencyMap.set('fortnightly', 14);
ApplicationConstants.frequencyMap.set('monthly', 28);

ApplicationConstants.daysOfWeekMap = new Map();
ApplicationConstants.daysOfWeekMap.set('monday', 1);
ApplicationConstants.daysOfWeekMap.set('tuesday', 2);
ApplicationConstants.daysOfWeekMap.set('wednesday', 3);
ApplicationConstants.daysOfWeekMap.set('thurseday', 4);
ApplicationConstants.daysOfWeekMap.set('friday', 5);
ApplicationConstants.daysOfWeekMap.set('saturday', 6);
ApplicationConstants.daysOfWeekMap.set('sunday', 7);

ApplicationConstants.DATEFORMAT_LEASEDATA = 'MMMM, Do YYYY';

export default ApplicationConstants;
