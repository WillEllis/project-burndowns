import * as firebase from 'firebase/app';
import 'firebase/storage';
import * as uuid from 'uuid/v4';
import filesize from 'filesize';
import { i18n } from 'src/i18n';

function extractExtensionFrom(filename) {
  if (!filename) {
    return null;
  }

  const regex = /(?:\.([^.]+))?$/;
  return regex.exec(filename)[1];
}

export class FileUploader {
  static validate(file, schema) {
    if (!schema) {
      return;
    }

    if (schema.image) {
      if (!file.type.startsWith('image')) {
        throw new Error(i18n('fileUploader.image'));
      }
    }

    if (schema.size && file.size > schema.size) {
      throw new Error(
        i18n('fileUploader.size', filesize(schema.size)),
      );
    }

    const extension = extractExtensionFrom(file.name);

    if (
      schema.formats &&
      !schema.formats.includes(extension)
    ) {
      throw new Error(
        i18n(
          'fileUploader.formats',
          schema.formats.join('/'),
        ),
      );
    }
  }

  static upload(path, file, schema) {
    try {
      this.validate(file, schema);
    } catch (error) {
      return Promise.reject(error);
      return;
    }

    const ref = firebase.storage().ref();
    const extension = extractExtensionFrom(file.name);
    const id = uuid();
    const fullPath = `${path}/${id}.${extension}`;
    const task = ref.child(fullPath).put(file);

    return new Promise((resolve, reject) => {
      task.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {},
        (error) => {
          reject(error);
        },
        () => {
          task.snapshot.ref
            .getDownloadURL()
            .then((url) => {
              resolve({
                id: id,
                name: file.name,
                sizeInBytes: task.snapshot.totalBytes,
                privateUrl: fullPath,
                publicUrl: url,
                new: true,
              });
            })
            .catch((error) => {
              reject(error);
            });
        },
      );
    });
  }
}
