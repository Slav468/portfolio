import { ROUTES } from '@/shared/config';
import { ButtonLink, StatusMessage } from '@/shared/ui';

export default function NotFound() {
  return (
    <StatusMessage title="Страница не найдена" description="Запрошенная страница не существует.">
      <ButtonLink href={ROUTES.home}>На главную</ButtonLink>
    </StatusMessage>
  );
}
