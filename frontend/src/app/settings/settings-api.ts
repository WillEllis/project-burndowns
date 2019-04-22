import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export default class SettingsApi {
  static async fetchAndApply() {
    const settings = await this.find();
    this.applyTheme(settings.theme);
  }

  static async find() {
    const response = await graphqlClient.query({
      query: gql`
        query settingsFind {
          settingsFind {
            theme
          }
        }
      `,
    });

    return response.data['settingsFind'];
  }

  static async save(settings) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SETTINGS_SAVE($settings: SettingsInput!) {
          settingsSave(settings: $settings)
        }
      `,

      variables: {
        settings,
      },
    });

    return response.data.settingsSave;
  }

  static applyTheme(color) {
    const oldLink = document.getElementById('theme-link');

    const link = document.createElement('link');
    link.setAttribute('id', 'theme-link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', `/assets/theme/${color}.css`);

    if (oldLink) {
      document
        .getElementsByTagName('head')
        .item(0)
        .replaceChild(oldLink, link);
    } else {
      document
        .getElementsByTagName('head')
        .item(0)
        .appendChild(link);
    }
  }
}
