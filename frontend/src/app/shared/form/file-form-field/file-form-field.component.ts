import {
  Component,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FileUploader } from 'src/app/shared/file-upload/file-uploader';

@Component({
  selector: 'app-file-form-field',
  templateUrl: './file-form-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileFormFieldComponent),
      multi: true,
    },
  ],
})
export class FileFormFieldComponent
  implements ControlValueAccessor {
  @Input() submitted = false;
  @Input('formControl') control;
  @Input() label;
  @Input() required = false;
  @Input('value') _value = [];
  @Input('path') path;
  @Input('schema') schema;
  @Input('max') max;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;
  loading = false;
  localError = null;

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  async add(event: any) {
    try {
      this.localError = null;

      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, this.schema);

      this.loading = true;

      file = await FileUploader.upload(
        this.path,
        file,
        this.schema,
      );

      this.value = [...this._value, file];
      this.loading = false;
      this.fileInput.nativeElement.value = '';
    } catch (error) {
      this.loading = false;
      console.error(error);
      this.localError = error.message;
      this.fileInput.nativeElement.value = '';
    }
  }

  get accept() {
    return this.schema.formats
      ? this.schema.formats
          .map((format) => `.${format}`)
          .join(',')
      : undefined;
  }

  async remove(id: string) {
    this.value = this.value.filter(
      (item) => item.id !== id,
    );
  }

  get value() {
    return this._value;
  }

  get isFull() {
    return this.max && this.value.length >= this.max;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value || [];
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = !!isDisabled;
  }
}
