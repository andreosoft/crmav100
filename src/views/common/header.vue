<template>
  <div>
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <div>
        <button class="btn-blank" @click="$root.showMenu = !$root.showMenu "><i class="fas fa-bars"></i></button>
        <div class="menu-title d-none d-sm-inline-block"><router-link :to="{name: 'index'}">{{ $root.appName }}</router-link></div>
      </div>
      <div v-if="$store.getters['auth/profile'].sip_use" class="phone-block">
        <phone-form 
        :server="$store.getters['auth/profile'].sip_server" 
        :user="$store.getters['auth/profile'].sip_user"
        :password="$store.getters['auth/profile'].sip_password"
        :ws="$store.getters['auth/profile'].sip_ws"></phone-form>
      </div>
      <div class="user-info d-none d-sm-block">
        <span>{{ $store.getters['auth/profile'].name }}</span>
        <button class="btn-blank" @click="showUserModal = true" title="Профиль"><i class="far fa-user"></i></button>
        <user-modal v-if="showUserModal" @close="showUserModal = false"></user-modal>
        <button class="btn-blank" @click="$root.logout"><i class="fas fa-sign-out-alt" title="Выйти"></i></button>
      </div>
    </nav>
    <transition name="fade">
      <div class="info-message" v-if="$root.info.visible">{{$root.info.text}}</div>
    </transition>
</div>
</template>


<script>
import UserModal from '@/views/common/userModal.vue'
import axios from 'axios'
import api from '@/config/api'
import phoneForm from '@/widgets/phone/caller.vue'

export default {
  name: 'mainheader',
  data: function() {
    return {
      'showUserModal': false,
      'search': null,
    }
  },
  components: {
    UserModal,
    phoneForm
  }
}
</script>

<style lang="less">
  .navbar {
    color: #fff;
    padding: 2px;
    button {
      color: #fff;
    }
    a {
      display: inline-block;
      color: #fff;
    }
    .menu-title {
      display: inline-block;
      color: #fff;
      font-size: 20px;
      padding: 0 10px 0 10px;;
    }
    .store-bock {
      display: inline-block;
      margin-left: 20px;
      color: #fff;
    }
    .store-icon {
      font-size: 26px;
      padding: 0 10px 0 10px;
    }
    .store-select {
      width: auto;
      margin: 0 0 1px 20px;
    }
    .search-block {
        display: inline-block;
        margin: 0 20px 0 20px;
        flex-grow: 1;
        i {
          font-size: 26px;
        }
    }
    .cart-block {
      display: inline-block;
      margin: 0 20px 0 20px;
      i {
        font-size: 26px;
      }
    }
    .user-info {
      display: inline-block;
      margin: 0 20px 0 20px;
      i {
        font-size: 20px;
      }
    }
  }
</style>
