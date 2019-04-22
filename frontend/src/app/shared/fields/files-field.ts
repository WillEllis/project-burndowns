import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class FilesField extends GenericField {
  public path;
  public required;
  public min;
  public max;
  public size;
  public formats;

  constructor(
    name,
    label,
    path,
    {
      required = false,
      min = undefined,
      max = undefined,
      size = undefined,
      formats = undefined,
    } = {},
  ) {
    super(name, label);

    this.path = path;
    this.required = required;
    this.min = min;
    this.max = max;
    this.size = size;
    this.formats = formats;
  }

  forPresenter(value) {
    return value || [];
  }

  forFormControl(value) {
    const validators = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.min || this.min === 0) {
      validators.push(
        CustomValidators.minArrayLength(this.min),
      );
    }

    if (this.max || this.max === 0) {
      validators.push(
        CustomValidators.maxArrayLength(this.max),
      );
    }

    return new FormControl(value || [], validators);
  }

  forFormCast() {
    let yupChain = yup
      .array()
      .nullable(true)
      .label(this.label);

    return yupChain;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return null;
        }

        return originalValue
          .map((value) => value.publicUrl)
          .join(' ');
      });
  }

  forImport() {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .label(this.label)
      .nullable(true)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return originalValue
          .trim()
          .split(' ')
          .map((value) => {
            return {
              name: value.trim(),
              publicUrl: value.trim(),
              new: true,
            };
          });
      });

    if (this.required || this.min) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }

  get fileSchema() {
    return {
      size: this.size,
      formats: this.formats,
    };
  }
}
