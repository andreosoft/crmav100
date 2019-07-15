export default {
 
  Fields() {
    this.fields = {
      id: null,
      login: null,
      password: null,
      name: null,
      surname: null,
      sip_use: null,
      sip_server: null,
      sip_user: null,
      sip_password: null,
      sip_ws: null
    }
  },

  validators: {
    login: ['req', 'phone'],
    password: ['pass'],
    name: ['req'],
  },

  labels: {
    login: 'Логин',
    password: 'Пароль',
    name: 'Имя',
    surname: 'Фамилия',
    role: 'Роль',
    status: 'Статус',
    sip_use: 'Может звонить',
    sip_server: 'Sip server',
    sip_user: 'Sip user',
    sip_password: 'Sip password',
    sip_ws: 'Sip WS адрес',
    api_key: 'Api key'
  },
  
  status: [
    {value: 1, text: 'Новый'},
    {value: 2, text: 'Активный'},
    {value: 10, text: 'Не активный'},
  ],

  role: [
    {value: 1, text: 'Пользователь'},
    {value: 100, text: 'Админ'}
  ]
}
