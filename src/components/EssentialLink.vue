<template>
  <q-item
    clickable
    :to="link"
    active-class="router--active"
    class="text-white"
    v-if = "show"
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

    show: {
      type: Boolean,
      default: true
    }
  }
})
</script>
