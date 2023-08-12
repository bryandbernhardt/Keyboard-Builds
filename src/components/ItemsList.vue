<template>
  <div class="container">
    <div class="row row-cols-auto">
      <div :key="item.name" v-for="item in items" class="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
        <div class="card">
          <img src="https://m.media-amazon.com/images/I/61Ykk+4-9ML.jpg" class="card-img-top" :alt="item.name">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemsList',
  data: () => {
    return {
      items: [
        {
          name: 'teste1',
          description: 'teste1 description'
        },
        {
          name: 'teste2',
          description: 'teste2 description'
        },
        {
          name: 'teste3',
          description: 'teste3 description'
        },
        {
          name: 'teste4',
          description: 'teste4 description'
        }
      ]
    }
  },
}
</script>