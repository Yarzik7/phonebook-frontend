import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const notifyFailure = (message, timeout) => {
  Notify.init({
    className: 'error',
    position: 'center-top',
  });
  Notify.failure(message, { timeout: timeout });
};

const notifySuccsess = (message, timeout) => {
  Notify.init({
    className: 'success',
    position: 'center-top',
  });
  Notify.success(message, { timeout: timeout });
};

const notifyInfo = (message, timeout) => {
  Notify.init({
    className: 'info',
    position: 'center-top',
  });
  Notify.info(message, { timeout: timeout });
};

const notifyWarning = (message, timeout) => {
  Notify.init({
    className: 'warning',
    position: 'center-top',
  });
  Notify.warning(message, { timeout: timeout });
};

const reportSuccsess = (message, title = 'Succsess!', buttonCaption = 'Okay') => {
  Report.success(title, message, buttonCaption);
};

const reportFailur = (message, buttonCaption = 'Okay', title = 'Failure!') => {
  Report.failure(title, message, buttonCaption);
};

const reportInfo = (message, buttonCaption = 'Okay', title = 'Info!') => {
  Report.info(title, message, buttonCaption);
};

const reportWarning = (message, buttonCaption = 'Okay', title = 'Warning!') => {
  Report.init({
    warning: { buttonColor: '#000' },
  });
  Report.warning(title, message, buttonCaption);
};

/**
 * Displays the corresponding message on the screen
 * @param {string} message
 * @param {string} type
 * @param {number} timeout
 */
const showNotify = (message = 'Message!', type = 'info', timeout = 3000) => {
  switch (type) {
    case 'succsess':
      notifySuccsess(message, timeout);
      break;
    case 'failure':
      notifyFailure(message, timeout);
      break;
    case 'info':
      notifyInfo(message, timeout);
      break;
    case 'warning':
      notifyWarning(message, timeout);
      break;
    default:
      throw new Error('This type of message is not supported!');
  }
};

/**
 * Displays the corresponding report message on the screen
 * @param {string} message
 * @param {string} title
 * @param {string} buttonCaption
 */
const showNotifyReport = (message = 'Message', type = 'reportInfo', buttonCaption = 'Okay') => {
  switch (type) {
    case 'reportSuccsess':
      reportSuccsess(message, buttonCaption);
      break;
    case 'reportFailure':
      reportFailur(message, buttonCaption);
      break;
    case 'reportInfo':
      reportInfo(message, buttonCaption);
      break;
    case 'reportWarning':
      reportWarning(message, buttonCaption);
      break;
    default:
      throw new Error('This type of message is not supported!');
  }
};

export { showNotify, showNotifyReport };
