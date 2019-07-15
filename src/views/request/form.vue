<template>
  <div>
    <div v-if="loading" class="loading-block">
      <div class="loader"></div>
    </div>
    <div class="clearfix">
      <div class="float-left">
        <template v-if="fields.offer.id">
          <h1>Карточка {{ fields.offer.id }}</h1>
        </template>
      </div>
      <div class="float-right">
        <button style="margin: 4px 0 0 4px;" class="btn btn-primary" title="Выберите дату когда перезвонить" @click="actions(states[0])">{{states[0].text}}</button>
        <button style="margin: 4px 0 0 4px;" class="btn btn-primary" title="Карточка уходит в очередь с отсрочкой" @click="actions(states[1])">{{states[1].text}}</button>
        <button style="margin: 4px 0 0 4px;" class="btn btn-primary" title="Карточка уходит из очереди" @click="actions(states[2])">{{states[2].text}}</button>
        <button style="margin: 4px 0 0 4px;" class="btn btn-primary" title="Карточка уходит в архив" @click="actions(states[3])">{{states[3].text}}</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3 style="text-align: center;">Информация о клиенте</h3>
        <v-text v-model="fields.av100.name" :label="labels.av100.name" :error="errors.av100.name" :disabled="true"></v-text>
        <v-text v-model="fields.av100.phone" :label="labels.av100.phone" :error="errors.av100.phone" :disabled="true"></v-text>
        <v-text v-model="fields.av100.city" :label="labels.av100.city" :error="errors.av100.city" :disabled="true"></v-text>
        <v-textarea v-model="fields.av100.descr" :label="labels.av100.descr" :error="errors.av100.descr" :disabled="true" :rows="6"></v-textarea>
      </div>
      <div class="col-md-6">
        <h3 style="text-align: center;">Информация о машине</h3>
        <v-text v-model="fields.av100.marka" :label="labels.av100.marka" :error="errors.av100.marka" :disabled="true"></v-text>
        <v-text v-model="fields.av100.model" :label="labels.av100.model" :error="errors.av100.model" :disabled="true"></v-text>
        <v-text v-model="fields.av100.year" :label="labels.av100.year" :error="errors.av100.year" :disabled="true"></v-text>
        <v-text v-model="fields.av100.price" :label="labels.av100.price" :error="errors.av100.price" :disabled="true"></v-text>
        <v-text v-model="fields.av100.delta" :label="labels.av100.delta" :error="errors.av100.delta" :disabled="true"></v-text>
        <div class="form-group row">
          <label class="col-form-label col-sm-2 text-right">Ссылка</label>
          <div class="col-sm-10">
            <a :href="fields.av100.url" target="_blank">{{fields.av100.url}}</a>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div>
      <request-list :offer_id="fields.offer.offer_id"></request-list> 
    </div>
    <div>
      <request-form :offer_id="fields.offer.id" :type="request.type" :show="request.show" @close-menu="request.show = false"></request-form>
    </div>
  </div>
</template>

<script>
import FormMixing from '@/widgets/FormMixing'
import model from '@/models/offer.js'
import api from '@/config/api.js'
import axios from 'axios'
import RequestForm from './request-from.vue'
import RequestList from './list.vue'

export default {
  components: {
    RequestForm, RequestList
  },
  mixins: [FormMixing],
  data: function() {
    return {
      model: model,
      validators: model.validators,
      labels: model.labels,
      states: model.states,
      request: {
        show: false,
        type: {}
      },
      fields: new model.Fields().fields,
      errors: new model.Fields().fields,
    }
  },
  methods: {
    actions: function(type) {
      this.request.type = type
      this.request.show = true
    },
    fetchData (id) {
      this.loading = true
      axios
      .get(api.offers, {params: {id: id} })
      .then(response => {
        this.loading = false
        this.fields = response.data.data        
        this.$root.phone_number = this.fields.av100.phone
      })
      .catch(error => { console.log(error) })
    },
  }
}
</script>
