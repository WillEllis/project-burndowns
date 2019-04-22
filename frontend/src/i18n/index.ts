import { get } from 'lodash';
import * as moment from 'moment';
import enUS from 'src/i18n/en-US';
import enGB from 'src/i18n/en-GB';

let currentLanguageCode = null;

const languages = {
  enGB: {
    id: 'en-GB',
    label: 'en-GB',
    flag: '/assets/images/flags/24/United-Kingdom.png',
    dictionary: enGB,
    materialLocale: 'en-GB',
    owlDateTimeLocale: 'en-GB',
  },
  enUS: {
    id: 'en-US',
    label: 'en-US',
    flag: '/assets/images/flags/24/United-States.png',
    dictionary: enUS,
    materialLocale: 'en-US',
    owlDateTimeLocale: 'en-US',
  },
};

function init() {
  currentLanguageCode =
    localStorage.getItem('language') || 'enGB';
  setLanguageCode(currentLanguageCode);
}

export function getLanguage() {
  return languages[getLanguageCode()];
}

function format(message, args) {
  if (!message) {
    return null;
  }

  try {
    return message.replace(/{(\d+)}/g, function(
      match,
      number,
    ) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match;
    });
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getLanguageCode() {
  if (!currentLanguageCode) {
    init();
  }

  return currentLanguageCode;
}

export function setLanguageCode(arg) {
  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  moment.locale(arg);
  localStorage.setItem('language', arg);
}

export function i18nExists(key) {
  const message = get(getLanguage().dictionary, key);
  return !!message;
}

export function i18n(key, ...args) {
  const message = get(getLanguage().dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
}
