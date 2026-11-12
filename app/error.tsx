'use client';

import { useEffect } from 'react';
import { Button, StatusMessage } from '@/shared/ui';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusMessage
      role="alert"
      title="Что-то пошло не так"
      description="Произошла непредвиденная ошибка. Попробуйте ещё раз."
    >
      <Button onClick={reset}>Попробовать снова</Button>
    </StatusMessage>
  );
}
