import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export default class DateTimeRangeField extends GenericField {
  forFilterControl(value) {
    return new FormControl(value);
  }

  forFilterCast() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValues) => {
        if (!originalValues) {
          return null;
        }

        return originalValues.map((originalValue) => {
          if (!originalValue) {
            return null;
          }

          return moment(originalValue).toISOString();
        });
      });
  }
}
