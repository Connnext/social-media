src/
├── app/ // Глобальные настройки приложения
│ ├── сторы провайдеры стили глобальные
│
├── pages/ // Основные страницы приложения
│ ├── Главная страница Лента новостей
│
├── widgets/ // Повторяющиеся UI-блоки, используемые на нескольких страницах
│ ├── Header,Карточка товара, диалог, пост в группе
│
├── features/ // Конкретные функции приложения, каждая из которых автономна
│ ├── Поставить лайк, Закинуть товар в корзину
│
├── processes/ // Сложные бизнес-процессы, объединяющие фичи и виджеты
│ ├── UserRegistration/ // Процесс регистрации пользователя
│
├── shared/ // Общие компоненты, которые используются по всему проекту
│ ├── чекбоксы кнопки инпуты
|--- entities
│ ├── товары посты новости пользователи
