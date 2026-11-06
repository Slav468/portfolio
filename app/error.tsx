'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  void error;
  return (
    <div>
      <h2>Что-то пошло не так</h2>
      <button onClick={() => reset()}>Попробовать снова</button>
    </div>
  );
}