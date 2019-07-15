export default {

  Fields() {
    this.fields = {
      login: '',
    }
  },

  validators: {
    login: ['req', 'email'],
  },

  labels: {
    login: 'email',
  }
}
