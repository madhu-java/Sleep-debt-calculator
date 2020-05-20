const getSleepHours = day => {
  switch(day){
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 7;
      break;
    case 'Wednesday':
      return 5;
      break;
    case 'Thursday':
      return 6;
      break;
     case 'Friday':
      return 5;
      break;
     case 'Saturday':
      return 5;
      break;
    case 'Sunday':
      return 6;
      break;    
  }
};
//console.log(getSleepHours('Friday'));
const getActualSleepHours = () => {
  const totalHoursSleep = getSleepHours('Monday')+
                      getSleepHours('Tuesday')+
                      getSleepHours('Wednesday')+
                      getSleepHours('Thursday')+
                      getSleepHours('Friday')+
                      getSleepHours('Saturday')+
                      getSleepHours('Sunday');
    return(totalHoursSleep);                  
};
//console.log(getActualSleepHours());

const getIdealSleepHours = idealSleepHours =>       idealSleepHours * 7;


//console.log(getIdealSleepHours());
//calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(6);
  if(actualSleepHours === idealSleepHours) {
    console.log(`Perfect!!! you had ${idealSleepHours} hours of sleep.`);
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You had ${actualSleepHours-idealSleepHours} hours extra sleep than needed!!!`);
  } else if(actualSleepHours < idealSleepHours) {
    console.log(`you should get ${idealSleepHours-actualSleepHours} hours more rest!!`);
  }

};
calculateSleepDebt();
