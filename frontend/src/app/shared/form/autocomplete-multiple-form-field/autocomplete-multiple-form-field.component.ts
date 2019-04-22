import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, isString } from 'lodash';

@Component({
  selector: 'app-autocomplete-multiple-form-field',
  templateUrl:
    './autocomplete-multiple-form-field.component.html',
})
export class AutocompleteMultipleFormFieldComponent {
  @Input()
  control: FormControl;
  @Input()
  label: string;
  @Input()
  appAutofocus = false;
  @Input()
  required = false;
  @Input() clientSideSearch = true;
  @Input() fetchFn = null;
  @Input()
  ngForm: any;

  currentQuery = '';
  serverSideDataSource = [];
  clientSideDataSource = [];
  loading = false;
  debouncedSearch = (value) => {};

  @ViewChild('textInput') textInput: ElementRef<
    HTMLInputElement
  >;

  add(event): void {
    const selectedValue = event.option.value;

    if (selectedValue) {
      const exists = (this.control.value || []).some(
        (item) => item.id === selectedValue.id,
      );

      if (!exists) {
        this.control.setValue([
          ...(this.control.value || []),
          selectedValue,
        ]);
      }
    }

    if (this.textInput) {
      this.textInput.nativeElement.value = '';
    }
  }

  remove(id): void {
    this.control.setValue([
      ...(this.control.value || []).filter(
        (item) => !item || item.id !== id,
      ),
    ]);
  }

  get dataSource() {
    if (this.clientSideSearch) {
      return this.clientSideDataSource;
    }

    return this.serverSideDataSource;
  }

  async handleSearch(value) {
    if (!isString(value)) {
      return;
    }

    if (this.clientSideSearch) {
      return this.handleSearchClient(value);
    }

    return this.handleSearchServer(value);
  }

  async handleSearchClient(value) {
    if (
      !this.serverSideDataSource ||
      !this.serverSideDataSource.length
    ) {
      await this.handleSearchServer();
    }

    this.clientSideDataSource = this.serverSideDataSource.filter(
      (item) =>
        String(item.label || '')
          .toLowerCase()
          .includes(String(value || '').toLowerCase()),
    );

    this.loading = false;
  }

  async handleSearchServer(value?) {
    if (value === this.currentQuery) {
      return;
    }

    this.currentQuery = value;
    this.loading = true;

    try {
      const serverSideDataSource = await this.fetchFn(
        value,
        10,
      );
      if (this.currentQuery === value) {
        this.serverSideDataSource = serverSideDataSource;
        this.loading = false;
      }
    } catch (error) {
      console.error(error);

      if (this.currentQuery === value) {
        this.serverSideDataSource = [];
        this.loading = false;
      }
    }
  }

  ngOnInit() {
    this.debouncedSearch = debounce(
      this.handleSearch.bind(this),
      300,
    );
  }

  displayFn(record) {
    if (record) {
      return record.label;
    }
  }
}