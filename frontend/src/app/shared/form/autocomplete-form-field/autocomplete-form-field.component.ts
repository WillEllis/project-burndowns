import { Component, Input, OnInit } from '@angular/core';
import { debounce, isString } from 'lodash';

@Component({
  selector: 'app-autocomplete-form-field',
  templateUrl: './autocomplete-form-field.component.html',
})
export class AutocompleteFormFieldComponent
  implements OnInit {
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() clientSideSearch = true;
  @Input() fetchFn = null;

  currentQuery = '';
  serverSideDataSource = [];
  clientSideDataSource = [];
  loading = false;
  debouncedSearch = (value) => {};

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

  clearIfNonSelected() {
    if (this.control.value && this.control.value.id) {
      return;
    }

    this.control.setValue(null);
  }
}
