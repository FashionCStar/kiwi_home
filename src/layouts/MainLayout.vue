<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: #fff" class="relative">
        <q-btn
          flat
          dense
          round
          icon="menu"
          style="color: #5570E3"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-tabs align="left">
          <q-route-tab to="/dashboard/safehouse/bonds" label="Buy & Sell" style="color: #5570E3" />
          <q-route-tab to="/dashboard/safehouse/dashboard" label="Exchange" style="color: #5570E3" />
        </q-tabs>
        <div class="q-py-sm absolute" style="right: 10px">
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

        <div style="overflow-y: auto; height: calc(100vh - 290px);">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </div>

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
    children: []
  },
  {
    title: 'Bonds',
    icon: 'bonds_icn.svg',
    link: '/dashboard/safehouse/bonds',
    children: [
      {
        title: 'Bond Market1',
        icon: 'bonds_icn.svg',
        link: '/dashboard/safehouse/bonds-market1',
      },
      {
        title: 'Bond Market2',
        icon: 'bonds_icn.svg',
        link: '/dashboard/safehouse/bonds-market2',
      },
      {
        title: 'Bond Market3',
        icon: 'bonds_icn.svg',
        link: '/dashboard/safehouse/bonds-market3',
      },
      {
        title: 'Depth Of Market',
        icon: 'bonds_icn.svg',
        link: '/dashboard/safehouse/depth-market',
      },
    ]
  },
  {
    title: 'Payments',
    icon: 'payments_icn.svg',
    link: '/dashboard/payment',
    children: []
  },
  {
    title: 'Wallet',
    icon: 'wallet_icn.svg',
    link: '/dashboard/order-summary',
    children: []
  },
  {
    title: 'Resources',
    icon: 'resources_icn.svg',
    link: '',
    children: []
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
