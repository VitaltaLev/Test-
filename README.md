Тестовое задание для "Эврика Би Пи О"


Необходимо написать простое web-приложение с использованием node.js, express.js, node.js с/c addon (node-addon-api/N-API) для проверки наличия пользователя (например, Администратор) в операционной системе Windows.

Срок выполнения 7 дней.

Приложение должно работать по следующему сценарию

Необходимо написать простое web-приложение с использованием node.js node-addon-api WinAPI для проверки наличия пользователя (например, Администратор) в списке пользователей операционной системы Windows.

Приложение должно работать по следующему сценарию

1. Пользователь запускает web-сервер из корня проекта:
server.bat
2. Автоматически открывается браузер с начальной web страницей, на которой отображаются
- поле ввода имени пользователя
- кнопка "Проверить"
3. Пользователь вводит любое имя пользователя и нажимает на "проверить"
4. Если введённый пользователь присутствует в списке пользователей Windows, отображается страница с надписью "Пользователь <имя_введённого_пользователя> есть", иначе "Пользователя <имя_введённого_пользователя> нет". Под надписью есть кнопка "Назад", при нажатии на которую происходит возврат на начальную страницу.
5. Проверку наличия введённого имени пользователя в списке пользователей ОС Windows запрещено проводить путём сравнения текущего пользователя, от которого запущен процесс сервера и введённого пользователя, а также запрещено использовать названия домашних каталогов пользователей в каталоге C:\Users (С:\Пользователи).

Список пользователей для проверки можно получить через Управление компьютером->Служебные программы->Локальные пользователи и группы->Пользователи.

6. В корне проекта создать файл README.MD с текстом тестового задания в кодировке UTF-8
