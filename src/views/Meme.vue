<template>
  <div>Welcome to Meme</div>
  <div>{{ resultJson }}</div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'apollo-boost'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const resultJson = ref('')

    onMounted(async () => {
      const { result } = useQuery(gql`
        query getUsers {
          Memes {
            id
            imageUrl
            keywords
          }
        }
      `)

      resultJson.value = JSON.stringify(result)
    })

    return {
      resultJson,
    }
  },
})
</script>
