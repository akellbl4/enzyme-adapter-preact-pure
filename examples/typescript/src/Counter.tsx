import * as preact from 'preact';
import { useState } from 'preact/hooks';

export default function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const handleChange = (e: Event) => {
    const { value } = e.target as HTMLInputElement;

    setCount(Number(value));
  };

  return (
    <div>
      Current value: <input type="text" value={count} onInput={handleChange} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}
