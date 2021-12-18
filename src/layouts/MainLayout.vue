<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-tabs align="left">
          <q-route-tab to="/dashboard/buy-sell" label="Buy & Sell" />
          <q-route-tab to="/dashboard/safehouse/dashboard" label="Exchange" />
        </q-tabs>
        <div class="q-py-sm">
          <q-btn
            class="q-px-xs"
            text-color="white"
            style="box-shadow: none;"
          >
            <q-avatar size="24px">
              <img :src="require('../assets/images/icons/002-user.svg')">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated :width="250" class="relative">
      <q-list>
        <q-item-label
          header
          class="text-white"
        >
          <q-avatar size="48px">
            <img :src="require('../assets/images/icons/002-user.svg')">
          </q-avatar>
          Kiwi Home Assist
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-item class="sidebar-help column" >
          <p class="text-center text-white q-pt-sm q-mb-none">
            <span class="text-bold">Help Centre</span> <br/>
            Visit our Help Centre
          </p>
          <q-item-section>
            <img :src="require('../assets/images/help_bg.svg')" style="width: 100%;">
          </q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    icon: 'dashboard_icn.svg',
    link: '/dashboard/safehouse/dashboard',
    show: true
  },
  {
    title: 'Dashboard',
    icon: 'dashboard_icn.svg',
    link: '/dashboard/buy-sell',
    show: false
  },
  {
    title: 'Bonds',
    icon: 'bonds_icn.svg',
    link: '/dashboard/safehouse/bonds'
  },
  {
    title: 'Payments',
    icon: 'payments_icn.svg',
    link: ''
  },
  {
    title: 'Wallet',
    icon: 'wallet_icn.svg',
    link: ''
  },
  {
    title: 'Resources',
    icon: 'resources_icn.svg',
    link: ''
  }
];

import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const router = useRouter()
    // onBeforeRouteUpdate(async (to, from) => {
    //   // only fetch the user if the id changed as maybe only the query or the hash changed
    //   if (to.name === 'buy-sell') {
    //     linksList[0].show = false
    //     linksList[1].show = true
    //     console.log('routeeeeee11ee', linksList[1])
    //     this.essentialLinks = linksList
    //   } else {
    //     linksList[0].show = true
    //     linksList[1].show = false
    //     console.log('routeeeeee11ee', linksList[1])
    //   }
    // })
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
