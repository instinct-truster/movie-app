import { useCounterStore } from "../stores/counter-store";

export function Counter() {
  const { count, increment } = useCounterStore();

  return <button onClick={increment}>Count is {count}</button>;
}
