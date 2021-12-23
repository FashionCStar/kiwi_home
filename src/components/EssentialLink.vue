<template>
  <q-expansion-item 
    v-if="children.length"
    header-class="text-white"
    :to="link"
    active-class="router--active"
  >
    <template v-slot:header>
      <q-item-section
        v-if="icon"
        avatar
        class="text-center items-center"
      >
        <q-icon>
          <img width="22" :src="require('../assets/images/icons/'+icon)">
        </q-icon>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </template>
    <q-item
      clickable
      v-for="(child, index) in children"
      :key="index"
      :to="child.link"
      active-class="router--active"
      class="text-white"
    >
      <q-item-section
        v-if="child.icon"
        avatar
        class="text-center items-end"
      >
        <q-icon>
          <img width="22" :src="require('../assets/images/icons/'+child.icon)">
        </q-icon>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ child.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
  <q-item
    clickable
    :to="link"
    active-class="router--active"
    class="text-white"
    v-if = "!children.length"
  >
    <q-item-section
      v-if="icon"
      avatar
      class="text-center items-center"
    >
      <q-icon>
        <img width="22" :src="require('../assets/images/icons/'+icon)">
      </q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
    children: {
      type: Array,
      default: () => [{
        title: 'Bond Market1',
        icon: 'bonds_icn.svg',
        link: '/dashboard/safehouse/bonds-market1',
      }]
    }
  }
})
</script>
