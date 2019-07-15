export default {
  data: [
    {
      route: '/index',
      icon: 'fa-home',
      title: 'Главная страница',
      auth: [1, 50, 100]
    },
    // {
    //   route: '/req_av100',
    //   icon: 'fa-receipt',
    //   title: 'Новая заявка',
    //   auth: [1, 50, 100]
    // }, 
    {
      route: '/requests/100',
      icon: 'fas fa-calendar-check',
      title: 'Перезвонить',
      auth: [1, 50, 100]
    }, 
    {
      route: '/requests/101',
      icon: 'fas fa-calendar-times',
      title: 'Не отвечает',
      auth: [1, 50, 100]
    }, 
    {
      route: '/requests/102',
      icon: 'far fa-angry',
      title: 'Отказ',
      auth: [1, 50, 100]
    }, 
    {
      route: '/requests/103',
      icon: 'fas fa-database',
      title: 'Архив',
      auth: [1, 50, 100]
    }, 
    {
      route: '/content/0',
      icon: 'fa-file-alt',
      title: 'Контент',
      auth: [50, 100]
    }, 
    {
      route: '/users',
      icon: 'fa-users',
      title: 'Пользователи',
      auth: [100]
    },    
    {
      route: '/help',
      icon: 'fa-question-circle',
      title: 'Помощь',
      auth: [1, 50, 100]
    },
  ]
}
