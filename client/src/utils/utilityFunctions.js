
import moment from 'moment';


export function groupBy(key, array) {
  return array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
}

export function sortOn(key, array) {
	// TODO
	return array;
}

export function getLastLoginMessage(activity) {
  if (activity.length === 1) {
    return "Welcome!"
  } else if (activity.length === 2) {
    return "Last sign on at " + moment(activity[1].createdAt).format('HH:mm, DD MMMM YYYY');
  } else {
    return "Error fetching last login."
  }
}

export function validatePassword(password) {
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
  return strongRegex.test(password);
}

export function toLett(num_score) { // converts numerical score to letter
  switch (true) {
    case num_score > 0 && num_score < 1.4: 
      return 'F';
    case num_score < 2.4:
      return 'D';
    case num_score < 3.4:
      return 'C';
    case (num_score < 4.4):
      return 'B';
    case num_score <= 5:
      return 'A';
    default:
      return 'N/A'; 
  }
}
