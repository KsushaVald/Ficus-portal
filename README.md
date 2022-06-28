# Ficus-portal
React application

Приложение представляет собой систему учёта задач.Cтартовая страница - список задач с возможностью сортировки по имени пользователя, email и статусу. Так же есть возможность добавить новую задачу, заполнив форуму, которая появится после клика на кнопку Add task. Редактирование задачи доступно только авторизованным пользователям (кнопка Login). После авторизации у каждой записи появляется кнопка Change, после клика будет доступна форма для редактирования статуса и текста задачи. 

Структура проекта

- src/img - изображения проект.
- src/Header - содержится header с заголовком и компонент UserBlock.
- src/Header/UserBlock - блок, который рендерится при авторизации пользователя (изображение и имя пользователя).
- src/Main - содержит основной контент приложения.
- src/Main/Table - компонент, содержащий список задач, оформленный ввиде таблицы.
- src/Main/Table/TableHeader - компонент, содержащий заголовок таблицы.
- src/Main/Table/TableNote - компонент, содержащий запись таблицы.
- src/Main/Table/TablePagination -  пагинация таблицы.
- src/Modal - создаёт модальное окно.
- src/Modal/AuthForm - форма для авторизации пользователя.
- src/Modal/ChangeForm - форма для изменения статуса/текста задачи.
- src/Modal/CreateTaskForm - форма для создание новой задачи.
- src/store - содержит логику Readux.

При разрешении меньше 740px таблица преобразуется в список карточек.

Ссылка на хостинг: http://ficusportal.kvald.tw1.ru/

Сборка для production: 

npm run build:prod (результат в папке dist).

Сборка для development: 

npm run build:dev (результат в папке dist);
npm run dev (запускает webpack-dev-server).
