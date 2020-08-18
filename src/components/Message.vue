<template>
  <v-snackbar
    v-model="open"
    :color="color"
    :timeout="timeout"
    top
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
import { light } from '@/plugins/theme'
export default {
  name: 'Snackbar',
  data () {
    return {
      color: '',
      open: false,
      message: '',
      timeout: -1
    }
  },
  methods: {
    show (options = {}) {
      Object.keys(options).forEach(field => (this[field] = options[field]))
      this.color = light[this.color] ? light[this.color] : this.color
      this.open = true
    }
  }
}
</script>

<style lang='scss'>
.v-snack {
 .v-snack__content {
    justify-content: flex-start;
    i {
      margin-right: 10px;
    }
  }
}
</style>
