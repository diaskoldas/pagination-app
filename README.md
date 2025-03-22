# React Pagination Component

Компонент пагинации для React-приложений с поддержкой TypeScript, реализованный с использованием ООП и паттерна Observer.

## Особенности

- 🔄 Циклическая и линейная пагинация
- 🎯 Точный контроль над переходами между страницами
- 🏗 ООП-подход с использованием паттерна Observer
- 📦 Независимость от фреймворка (core логика)
- 🔧 Гибкая настройка шага пагинации
- 💪 Строгая типизация (TypeScript)
- 🎨 Стилизация с помощью CSS Modules

## Установка

```bash
npm install
npm run dev
```

## Использование

### Базовое использование

```tsx
import { Pagination } from "@/shared/ui/pagination";

function App() {
  const paginationController = usePagination({
    initialPage: 1,
    totalPages: 10,
  });
  return <Pagination controller={paginationController} />;
}
```

### Расширенное использование

```tsx
import { Pagination } from "@/shared/ui/pagination";

function App() {
  const paginationController = usePagination({
    initialPage: 1,
    totalPages: 10,
    isCyclic: true,
    nextPagesStepCount: 3,
    prevPagesStepCount: 3,
  });

  return <Pagination controller={paginationController} />;
}
```

### Использование хука на базе класса

```tsx
import { usePaginationByClass } from '@/shared/ui/pagination';

function CustomPagination() {
  const paginationController = usePaginationByClass({
    initialPage: 1,
    totalPages: 10,
    isCyclic: true,
    nextPagesStepCount: 5,
    prevPagesStepCount: 5,
  });

  return (
    // Ваша кастомная реализация UI
  );
}
```

## API

### PaginationProps

| Prop               | Тип     | По умолчанию | Описание                        |
| ------------------ | ------- | ------------ | ------------------------------- |
| initialPage        | number  | 1            | Начальная страница              |
| totalPages         | number  | -            | Общее количество страниц        |
| isCyclic           | boolean | false        | Включение циклической пагинации |
| nextPagesStepCount | number  | undefined    | Шаг перехода вперед             |
| prevPagesStepCount | number  | undefined    | Шаг перехода назад              |

### PaginationController

Класс, реализующий логику пагинации:

- Инкапсулированное состояние
- Паттерн Observer для реактивности
- Валидация входных данных
- Независимость от UI-фреймворка

### usePaginationByClass

React-хук для интеграции контроллера пагинации:

- Автоматическое обновление UI
- Управление жизненным циклом
- Мемоизация методов
- Типизированный интерфейс

## Архитектура

Проект построен с использованием следующих паттернов и принципов:

- **ООП**: Инкапсуляция логики в классе `PaginationController`
- **Observer**: Реактивное обновление состояния
- **Dependency Injection**: Гибкая конфигурация через пропсы
- **Single Responsibility**: Разделение логики и представления
- **Interface Segregation**: Четкие контракты взаимодействия

## Технологии

- React
- TypeScript
- Vite
- CSS Modules
- SCSS

## Лицензия

MIT
