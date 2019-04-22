import * as yup from 'yup';
import { FormControl } from '@angular/forms';

export default class GenericField {
  public name: string;
  public label: string;

  constructor(name, label) {
    this.name = name;
    this.label = label;
  }

  forPresenter(value) {
    return value;
  }

  forFilterCast() {
    return yup.mixed();
  }

  forFormCast() {
    return yup.mixed();
  }

  forFilterControl(value) {
    return new FormControl(value);
  }

  forFormControl(value) {
    return new FormControl(value);
  }

  forExport() {
    return yup.mixed();
  }

  forImport() {
    return yup.mixed();
  }
}
