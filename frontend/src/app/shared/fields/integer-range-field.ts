import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class IntegerRangeField extends GenericField {
  forFilterCast() {
    return yup.mixed().label(this.label);
  }

  forFilterControl(value) {
    return new FormControl(
      value,
      CustomValidators.integerRange(),
    );
  }
}
