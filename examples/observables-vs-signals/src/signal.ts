type Listener = () => void;

let listener: null | Listener;

export function createSignal<T>(value: T) {
  const liseners = new Set<Listener>();
  return {
    get value() {
      if (listener !== null) liseners.add(listener);
      return value;
    },
    set value(newValue) {
      value = newValue;
      liseners.forEach((fn) => fn());
    },
  };
}

export function createEffect(callback: Listener) {
  listener = callback;
  callback();
  listener = null;
}
