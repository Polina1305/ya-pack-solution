# ya-pack-solution - Проект рекомендации упаковки для товара со склада
## Краткое описание
Проект позволяет работнику склада(упаковщику) при помощи данного приложения получать от модели машинного обучения рекомендации по наиболее оптимальному использованию упаковки для товаров при сборе заказа. Рекомендация включает в себя вид упаковки и ее количество.

## Установка приложения

### Клонируйте репозиторий по ссылке
- [Ссылка на репозиторий](https://github.com/Polina1305/ya-pack-solution.git)


## Установка и запуск в Docker:
0. Добавьте в папку w_infra файл .env и поместите в него SECRET_KEY от вашего django, например:
```
SECRET_KEY='Your$ecrEtKey'
```
1. Перейдите в папку w_infra и выполните команды:
```
docker-compose up -d --build
docker-compose exec backend python manage.py collectstatic --no-input
```

2. Перейдите по адресу:
- [http://localhost](http://localhost)

3. Для остановки проекта выполните команду:
```
 docker-compose down -v
```


## Как работает проект

После того как вы запустите все составляющие и перейдете по адресу [http://localhost](http://localhost) вам будет доступна страница с интерфейсом в котором должны отображаться товары, упаковка и прочие интересные вещи. Но изначально при запуске товары и упаковка не отобразятся.   
А дело вот в чем:  
Чтобы запустить нашу модель машинного обучения, необходимо перейти по адресу:  
- [http://localhost/ds_exchange/get_orders/](http://localhost/ds_exchange/get_orders/)  
Здесь вы увидите несложную форму, которая предлагает на выбор 3 варианта запроса данных у модели машинного обучения:  
- на 1 заказ
- на 10 заказов
- на 100 заказов  

Выбирайте и нажимайте отправить, после этого увидите ответ
```
Количество N
Ответ ['id_заказа']
```

Вот теперь переходим по адресу [http://localhost](http://localhost) и смотрим на заказ который нам надо упаковать.


### А что тут можно?
- Можно скопировать номер штрихкода товара нажатием леовй кнопки мыши на синий ряд чисел в правой части карточки товара.
- Можно нажать на кнопку "Ввести с клавиатуры" и вставить туда штрихкод скопированный в предыдущем пункте и нажать "Готово". Вот так мы "вручную" сканируем товары.
- Если вам кажется что у вас есть проблема - жмите кнопку "Есть проблема", после чего выберете из предложенных вариантов наиболее подходящий вам и перейдете к упаковке другого заказа.
- А если проблем нет, то после сканирования товаров, вам нужно отсканировать упаковку. Но где же взять номер штрихкода упаковки?! Не беда - надо зайти в админку и посмотреть его вручную. Для этого перейдем по адресу [http://localhost/admin/](http://localhost/admin/)
- логин: admin
- пароль: 123  
- переходим в раздел "Виды упаковок"
- кликаем на любой вид упаковки из таблицы и нам откроется детальное описание типа упаковки, содержащее данные штрихкода.  
  
Теперь можно вернуться к нашему отсканированному товару. Вновь нажать
на кнопку "Ввести с клавиатуры" и вставить туда штрихкод скопированный в админке. Выбранный вид упаковки появится прямо под рекомендованным.
Нажимаем кнопку "Закрыть посылку". Нажимаем кнопку "Готово". Прерходим к следующему заказу.

## Сведения о команде

#### FRONTEND:
- [Алексей](https://github.com/endjoyer)
- [Полина](https://github.com/PolinaShchepochkina)
#### DATA SCIENCE:
- [Антон](https://github.com/malakanton)
- [Кирилл](https://github.com/Ufy88)
- [Полина](https://github.com/Polina1305)
#### BACKEND:
- [Александр](https://github.com/AlexandrSharganov)
- [Владислав](https://github.com/Vladislav-76)
#### DESIGN:
- [Валерия]()
- [Петр](https://github.com/apmfiit)
#### PRODUCT MANAGER:
- [Андрей]()

## Стэк технологий

#### FRONTEND:
- React
- ESLint
- Prettier
- Commitizen
- Husky
- В проекте используются шрифты YS Disp и YS Text.
- Адаптирован под разрешения от 1280px до 1920px.
#### DATA SCIENCE:
- FastAPI
- Pandas
- Numpy
- Catboost
- Sklearn
#### BACKEND:
- django
- djangorestframework
