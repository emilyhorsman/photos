/**
 * Throttle a function so that it is only allowed to execute at a specific rate,
 * even if it is being called more frequently.
 *
 * https://remysharp.com/2010/07/21/throttling-function-calls
 */
export default function throttle(fn, threshold) {
  let last, timer;

  return function(...args) {
    const now = Date.now();

    if (last && now < last + threshold) {
      window.clearTimeout(timer);
      timer = window.setTimeout(function() {
        last = now;
        fn(...args);
      }, threshold);
    } else {
      last = now;
      fn(...args);
    }
  };
}
