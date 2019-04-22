import { FormControl } from '@angular/forms';
import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';

export default class DateRangeField extends GenericField {
  forFilterControl(value) {
    return new FormControl(value);
  }

  forFilterCast() {
    return yup.mixed().label(this.label);
  }
}
