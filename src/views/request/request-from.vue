<template>
  <slide-x-right-transition :duration="700">
    <div v-show="show" class="r-modal-wrapper">
      <div class="r-modal">
        <div class="r-header">
          <div class="r-header-title">Создать событие {{type.text}}</div>
          <div class="r-header-close">
            <button @click="$emit('close-menu')" title="Закрыть окно">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="r-body">
          <div v-if="loading" class="loading-block">
            <div class="loader"></div>
          </div>
          <div v-if="type.value == 100">
            <div class="form-group">
              <label>Выберите дату события</label>
              <date-pick
                class="form-control"
                v-model="fields.eventon.date"
              ></date-pick>
            </div>
            <div class="form-group">
              <label>Выберите время события</label>
              <input
                class="form-control"
                v-model="fields.eventon.time"
                v-mask="'##:##'"
                @input="evt=>fields.eventon.time=evt.target.value"
                type="text"
              >
            </div>
          </div>
          <div>
            <div class="form-group">
              <label>Введите комментраий</label>
              <textarea v-model="fields.info" class="form-control"></textarea>
            </div>
          </div>
          <hr>
          <div style="text-align: right;">
            <button
              class="btn btn-secondary"
              style="margin-right: 4px;"
              @click="$emit('close-menu')"
            >Отмена</button>
            <button class="btn btn-primary" style="margin-right: 4px;" @click="submit()">Создать</button>
          </div>
        </div>
      </div>
    </div>
  </slide-x-right-transition>
</template>

<script>
import { SlideXRightTransition } from "vue2-transitions";
import api from "@/config/api";
import axios from "axios";
import router from "@/config/router";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import { VueMaskDirective } from "@/libs/v-mask";
import Vue from "vue";

Vue.directive("mask", VueMaskDirective);

export default {
  components: {
    SlideXRightTransition,
    DatePick
  },
  props: {
    offer_id: String,
    type: Object,
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      fields: {
        info: null,
        eventon: {
          date: "",
          time: ""
        }
      }
    };
  },
  methods: {
    submit: function() {
      this.loading = true;
      axios({ method: 'post', url: api.request, data: this.fields, params: {id: this.offer_id, type: this.type.value}})
        .then(response => {
          this.loading = false;
          this.$emit("close-menu");
          this.$root.$emit('show-info', {text: 'Создано событие: '+ this.type.text})
          router.go(-1)
        //   router.push({ name: "index" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss">
.vdpComponent.vdpWithInput > input {
  font-size: 13px;
  padding: 7px;
  width: 100%;
}
.vdpComponent {
  padding: 0;
  height: auto;
}
</style>
