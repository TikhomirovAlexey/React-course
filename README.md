# Фреймворк React JS (семинары)

## Урок 1. Знакомство с React и первые компоненты. Работа с JSX

Развернуть новый проект с использованием create-react-app.
Создать компонент Message, отображающий переданный ему props текст.
Стилизовать компоненты через css (при желании можно использовать less или sass).
Дополнительное задание: Установить расширение React Devtools.


## Урок 2. State, Props. Жизненный цикл react компонента. Хуки

Задание: Список комментариев с удалением.

Цель: 

        Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

Задача:

        Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

        
## Урок 3. Virtual DOM. Подключение библиотеки UI-компонентов

Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях.


Задание 2: Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.


## Урок 4. Children. Роутинг в React

Создать приложение с двумя страницами: "Главная страница" и "О нас".
На каждой странице должна быть навигационная ссылка для перехода на другую страницу.

Шаги выполнения:

        Установка react-router-dom:
        Если еще не установлен, добавьте react-router-dom в ваш проект: npm install react-router-dom.

Создание компонентов:

        — Создайте два компонента: HomePage.jsx и AboutPage.jsx.
        — В каждом компоненте добавьте простой текст.
        — Реализовать переходы.