<template>
  <div>
    <div v-if="loading" class="loading-block">
      <div class="loader"></div>
    </div>
    <div v-if="data">
      <div class="tbl fixed" style=" min-width: 500px;">
        <div class="row tbl-row tbl-header">
          <div class="tbl-col col-3">Марка</div>
          <div class="tbl-col col-3">Модель</div>
          <div class="tbl-col col-2">Год</div>
          <div class="tbl-col col-2">Цена</div>
          <div class="tbl-col col-1"></div>
        </div>
        <div class="tbl-body">
          <div v-for="(item, key) in data" :key="key" class="row tbl-row">
            <div class="tbl-col col-3">{{item.marka}}</div>
            <div class="tbl-col col-3">{{item.model}}</div>
            <div class="tbl-col col-2">{{item.year}}</div>
            <div class="tbl-col col-2">{{item.price}}</div>
            <div class="tbl-col col-1">
              <button
                @click="createRequest(item.id)"
                title="Создать заявку на машину"
                class="btn btn-primary btn-round"
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";
import router from "@/config/router";
import api from "@/config/api";

export default {
  data: function() {
    return {
      loading: false,
      data: []
    };
  },
  created() {
    this.fetchData();
    let self = this;
    var timerId = setInterval(() => {
      self.fetchData();
    }, 10000);
  },
  methods: {
    createRequest: function(id) {
      router.push({ name: 'request_form', params: {id: id}})
    },
    fetchData: function() {
      // this.loading = true;
      let params = {};
      axios
        .get(api.offers_all, { params: params })
        .then(response => {
          // this.loading = false;
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