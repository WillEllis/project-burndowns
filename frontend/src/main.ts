import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';
import SettingsApi from 'src/app/settings/settings-api';
import { environment } from 'src/environments/environment';
import { AppModule } from 'src/app/app.module';
import { i18n } from 'src/i18n';

if (environment.production) {
  enableProdMode();
}

(async function() {
  try {
    document.title = i18n('app.title');
    await SettingsApi.fetchAndApply();
    await platformBrowserDynamic().bootstrapModule(
      AppModule,
    );
  } catch (error) {
    console.error(error);
  }
})();
