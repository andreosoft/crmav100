let fields = {
  av100: {
    avid: null,
    city: null,
    comments: null,
    credate: null,
    delta: null,
    descr: null,
    email: null,
    id: null,
    isalive: null,
    marka: null,
    model: null,
    name: null,
    phone: null,
    phone2: null,
    price: null,
    source: null,
    status: null,
    url: null,
    year: null
  },
  offer: {
    createdby_id: null,
    createdon: null,
    id: null,
    info: null,
    info_email: null,
    info_phone1: null,
    info_phone2: null,
    info_skype: null,
    info_telegram: null,
    info_viber: null,
    info_whatsapp: null,
    name: null,
    offer_id: null,
    status: null,
  }
}

export default {
  Fields() {
    this.fields = fields;
    this.errors = fields
  },

  validators: {

  },

  labels: {
    av100: {
      name: 'ФИО',
      phone: 'Телефон',
      marka: 'Марка',
      model: 'Модель',
      year: 'Год',
      price: 'Цена',
      url: 'Ссылка',
      city: 'Город',
      delta: 'Средняя цена',
      descr: 'Комментарий '
    }
  },

  states: [
    { value: 100, text: 'Перезвонить' },
    { value: 101, text: 'Не отвечает' },
    { value: 102, text: 'Отказ' },
    { value: 103, text: 'В архив' }
  ]

}
