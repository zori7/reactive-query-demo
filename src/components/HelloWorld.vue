<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >

      <v-flex xs12 class="mb-6">
        <v-carousel class="mb-12" cycle>
          <v-carousel-item
            v-for="image in images"
          >
            <v-img
              :src="image"
              class="my-3"
              contain/>
          </v-carousel-item>
        </v-carousel>

        <v-btn large color="primary" class="mx-2" @click="foo--">Decrement</v-btn>
        <span class="mx-4">{{ foo }}</span>
        <v-btn large color="primary" class="mx-2" @click="foo++">Increment</v-btn>
      </v-flex>

      <v-flex>
        <v-btn large color="primary" class="mx-2" @click="bar--">Decrement</v-btn>
        <span class="mx-4">{{ bar }}</span>
        <v-btn large color="primary" class="mx-2" @click="bar++">Increment</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import createWatchQuery from 'vue-reactive-route-query'

  export default {
    name: 'HelloWorld',
    mixins: [
      createWatchQuery('foo'),
      createWatchQuery('bar'),
    ],
    data () {
      return {
        images: [
          'https://picsum.photos/id/388/1280/720',
          'https://picsum.photos/id/455/1280/720',
          'https://picsum.photos/id/665/1280/720',
        ],
        foo: 5,
        bar: null,
      }
    }
  };
</script>
