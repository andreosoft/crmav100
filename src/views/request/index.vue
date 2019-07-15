<template>
  <div>
    <div v-if="loading" class="loading-block">
      <div class="loader"></div>
    </div>
    <div>Заявки со статусом: {{offer.states.find(x => x.value == id) ? offer.states.find(x => x.value == id).text : ''}}</div>
    <div v-if="data">
      <div class="tbl fixed" style="top: 60px; min-width: 500px;">
        <div class="row tbl-row tbl-header">
          <div class="tbl-col col-3">Дата</div>
          <div class="tbl-col col-3">Пользователь</div>
          <div class="tbl-col col-3">Марка</div>
          <div class="tbl-col col-3">Модель</div>
          <div class="tbl-col col-2">Год</div>
          <div class="tbl-col col-2">Цена</div>
          <div class="tbl-col col-1"></div>
        </div>
        <div class="tbl-body">
          <div v-for="(item, key) in data" :key="key" class="row tbl-row">
            <div class="tbl-col col-3">{{item.eventon}}</div>
            <div class="tbl-col col-3">{{item.user}}</div>
            <div class="tbl-col col-3">{{item.marka}}</div>
            <div class="tbl-col col-3">{{item.model}}</div>
            <div class="tbl-col col-2">{{item.year}}</div>
            <div class="tbl-col col-2">{{item.price}}</div>
            <div class="tbl-col col-1">
              <button
                @click="openRequest(item.offer_id)"
                title="Открыть заявку на машину"
                class="btn btn-primary"
              >Открыть</button>
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
  created() {
    this.updateRoute();
  },
  watch: {
    $route: "updateRoute"
  },
  methods: {
    updateRoute: function() {
      if (this.$route.params.id) {
        this.id = this.$route.params.id;
        this.fetchData(this.id);
      }
    },
    openRequest: function(id) {
      router.push({ name: "request_form", params: { id: id } });
    },
    fetchData: function(id) {
      this.loading = true;
      axios
        .get(api.request, { params: { id: id } })
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