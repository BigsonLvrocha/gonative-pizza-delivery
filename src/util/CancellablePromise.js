function CancelableError(message) {
  this.name = 'CancellableError';
  this.message = message;
  this.stack = new Error().stack;
}
CancelableError.prototype = new Error();

class CancelablePromise {
  hasCanceled = false;

  promise = null;

  constructor(promise) {
    this.promise = new Promise((resolve, reject) => {
      promise.then(
        val => (this.hasCanceled ? reject(new CancelableError('promise cancelled')) : resolve(val)),
        error => (this.hasCanceled ? reject(new CancelableError('promise cancelled')) : reject(error)),
      );
    });
  }

  cancel() {
    this.hasCanceled = true;
  }
}

function makeCancelable(promise) {
  return new CancelablePromise(promise);
}

export { makeCancelable, CancelableError, CancelablePromise };
