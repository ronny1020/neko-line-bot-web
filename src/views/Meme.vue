<template>
  <div class="container">
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="meme of memes" :key="meme.id" class="col">
        <div class="card h-100 border-secondary bg-light">
          <a :href="meme.imageUrl" target="_blank" rel="noopener noreferrer">
            <img
              :src="meme.imageUrl"
              class="card-img-top"
              :alt="meme.keywords[0]"
            />
          </a>
          <div class="card-body">
            <h4>
              <span
                v-for="(keyword, index) of meme.keywords"
                :key="index"
                class="badge bg-secondary m-1"
              >
                {{ keyword }}
              </span>
            </h4>
          </div>
          <div class="card-footer">{{ meme.imageUrl }}</div>
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
