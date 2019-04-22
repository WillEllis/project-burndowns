import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class DecimalRangeField extends GenericField {
  forFilterCast() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (originalValue) {
          return originalValue.map((partialValue) =>
            partialValue && partialValue !== 0
              ? Number(partialValue)
              : null,
          );
        }
      });
  }

  forFilterControl(value) {
    return new FormControl(
      value,
      CustomValidators.numberRange(),
    );
  }
}
