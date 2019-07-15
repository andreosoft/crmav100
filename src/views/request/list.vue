<template>
  <div>
    <div v-if="loading" class="loading-block">
      <div class="loader"></div>
    </div>
    <div v-if="data" class="tbl-wrapper">
      <div class="tbl" style="min-width: 500px;">
        <div class="row tbl-row tbl-header">
          <div class="tbl-col col-3">Дата</div>
          <div class="tbl-col col-3">Тип</div>
          <div class="tbl-col col-3">Пользователь</div>
          <div class="tbl-col col-3">Информация</div>
        </div>
        <div class="tbl-body">
          <div v-for="(item, key) in data" :key="key" class="row tbl-row">
            <div class="tbl-col col-3">{{item.eventon}}</div>
            <div
              class="tbl-col col-3"
            >{{offer.states.find(x => x.value == item.status) ? offer.states.find(x => x.value == item.status).text : ''}}</div>
            <div class="tbl-col col-3">{{item.user}}</div>
            <div class="tbl-col col-3">{{item.info}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/config/router";
import offer from "@/models/offer";
import api from "@/config/api";

export default {
  data: function() {
    return {
      loading: false,
      data: [],
      offer: offer,
      id: 0,
      label: ""
    };
  },
  props: {
    offer_id: String
  },
  watch: {
      offer_id: function() {
          if (this.offer_id != '') {
            this.fetchData()
          }
      }
  },
  methods: {
    fetchData: function() {
      let id = this.offer_id;
      this.loading = true;
      axios
        .get(api.request_get_offer, { params: { id: id } })
        .then(response => {
          this.loading = false;
          if (response.data.status == "ok") {
            this.data = response.data.data;
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>