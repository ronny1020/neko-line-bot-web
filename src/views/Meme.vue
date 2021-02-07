<template>
  <div class="container">
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="meme of memes" :key="meme.id" class="col">
        <div class="card">
          <a :href="meme.imageUrl" target="_blank" rel="noopener noreferrer">
            <img
              :src="meme.imageUrl"
              class="card-img-top"
              :alt="meme.imageUrl"
            />
          </a>
          <div class="card-tile">
            <h4>
              <span
                v-for="(keyword, index) of meme.keywords"
                :key="index"
                class="badge bg-secondary m-2"
              >
                {{ keyword }}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { gql } from 'apollo-boost'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { result, loading } = useQuery(gql`
      query getUsers {
        Memes {
          id
          imageUrl
          keywords
        }
      }
    `)

    const memes = useResult(result, null, (data) => data.Memes)

    return {
      loading,
      memes,
    }
  },
})
</script>
