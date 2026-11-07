import styles from './hero-section.module.scss';
import { BackgroundBlobs } from './background-blobs';
import { FloatingIcons } from './floating-icons';
import { HeroContent } from './hero-content';

export function HeroSection() {
  return (
    <section className={styles.section}>
      <BackgroundBlobs blobCount={2} />
      <div className={styles.glass} />
      <FloatingIcons svgComponents={[
        // First icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path
            fill="#E53D20"
            d="M4.166 59.78L0 12.773h45.775l-4.17 46.998L22.858 65 4.166 59.78z"
          />
        </svg>,
        // Second icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path fill="#F15123" d="M22.887 61.004l15.147-4.225 3.564-40.162h-18.71v44.387z" />
        </svg>,
        // Third icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path fill="#EDEDED" d="M22.887 34.051h-7.583l-.523-5.903h8.106v-5.765H8.517l.138 1.546 1.409 15.887h12.823V34.05zm0 14.972l-.025.007-6.382-1.734-.408-4.598h-5.753l.803 9.052 11.739 3.279.026-.008v-5.998z" />
        </svg>,
        // Fourth icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path fill="#4353AD" d="M22.972 65L4.186 59.78 0 12.773h46l-4.19 46.998L22.971 65z" />
        </svg>,
        // Fifth icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path fill="#485FB5" d="M38.222 56.78l3.58-40.162H23v44.386l15.222-4.225z" />
        </svg>,
        // Sixth icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path fill="#EDEDED" d="M23 49.023l-.025.007-6.414-1.734-.41-4.597h-5.78l.806 9.052 11.797 3.278.026-.008v-5.998zM8.56 22.383l.523 5.765H23v-5.765H8.56zM9.597 34.05l.516 5.765H23V34.05H9.597z" />
        </svg>,
        // Seventh icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path fill="#100F0D" d="M27.565 0h6.975v2.54h-4.058v.508h4.058v5.84h-6.975V6.22h4.059v-.508h-4.059V0zm-8.37 0h6.975v2.54h-4.058v.508h4.058v5.84h-6.974V6.22h4.058v-.508h-4.059V0zm-8.37 0h6.976v2.92h-4.058v2.92H17.8v2.92h-6.975V0z" />
        </svg>,
        // Eighth icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 256 257"
        >
          <path fill="#41D1FF" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" />
        </svg>,
        // Ninth icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 256 257"
        >
          <path fill="#BD34FE" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.933-.426l11.192 6.359L174.85 110.57a3.268 3.268 0 0 0 0 5.53l-21.968 3.714a3.268 3.268 0 0 0-1.712 2.512l-13.219 15.871a3.268 3.268 0 0 0-1.712-2.364l-11.192-6.359L31.26 16.484a3.268 3.268 0 0 0 0-5.53l21.968-3.714a3.268 3.268 0 0 0 1.712 2.512l13.219 15.871a3.268 3.268 0 0 0 1.712-2.364l11.192-6.359L31.26 16.484a3.268 3.268 0 0 0 0-5.53l-21.968-3.714" />
        </svg>,
        // Tenth icon
        <svg
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 48 48"
        >
          <path fill="#F4511E" d="M42.2 22.1L25.9 5.8c-.5-.5-1.2-.8-1.9-.8s-1.4.3-1.9.8l-3.5 3.5 4.1 4.1c.4-.2.8-.3 1.3-.3 1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3c0-.5.1-.9.3-1.3l-4-4c-.1 0-.2.1-.3.1v10.4c1.2.4 2 1.5 2 2.8 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.3.8-2.4 2-2.8V18.8c-1.2-.4-2-1.5-2-2.8 0-.5.1-.9.3-1.3l-4.1-4.1L5.8 22.1c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9l16.3 16.3c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l16.3-16.3c.5-.5.8-1.2.8-1.9s-.3-1.4-.8-1.9z" />
        </svg>,
      ]} />
      <HeroContent
        kicker="Фронтенд-разработчик"
        title="Sergey Scoromnik"
        accent="•"
        description="Специализируюсь на создании современных веб-интерфейсов с помощью React, TypeScript и CSS (SCSS). Разрабатываю пиксель-перфектные, доступные и высокопроизводительные решения для цифровых продуктов. Имею опыт работы с Next-экосистемой, Zustand, Tailwind CSS и современными стандартами веб-разработки. Создаю интерфейсы, которые сочетают эстетику, функциональность и отличный UX."
        ctaPrimary={{ label: 'Проекты', href: '/projects' }}
        ctaSecondary={{ label: 'ГитХаб', href: 'https://github.com/Slav468' }}
        stats={[
          { number: '8', label: 'Проекты' },
          { number: '3+', label: 'Лета' },
          { number: '100%', label: 'Удовлетворенность' },
        ]}
      />
    </section>
  );
}