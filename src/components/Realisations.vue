<template>
    <b-container>
        <b-card-group deck>
            <b-card
                v-for="(realisation, i) in realisations.data" :key="i"
                :title=realisation.name
                :img-src=realisation.img
                :img-alt=realisation.name
                img-top
                class="mb-2"
                footer="Card Footer"
                footer-tag="footer"
            >
                <b-card-text>
                    <p>{{realisation.description}}</p>
                    <a :href="realisation.link" target="_blank" class="text-black-50">{{realisation.link}}</a>
                </b-card-text>

                <template v-slot:footer>
                    <b-img v-for="(technology, i) in realisation.technologies" :key="i" :src="technology" height="26" width="26" class="m-1"></b-img>
                </template>
            </b-card>
        </b-card-group>
    </b-container>
</template>

<script>
export default {
  name: 'Realisations',
  data: function () {
      return {
          realisations: {
              data: [
                  {
                      img: require('@/assets/pmdev.png'),
                      name: 'pm.dev()',
                      description: 'Réalisation de ce site vitrine afin de présenter mon activité.',
                      technologies: [
                          require('@/assets/html.png'),
                          require('@/assets/css.png'),
                          require('@/assets/vue.png'),
                          require('@/assets/js.png'),
                          require('@/assets/bootstrap.png'),
                          require('@/assets/bootstrapvue.png')
                      ]
                  },
                  {
                      img: require('@/assets/tryp.png'),
                      name: "TRY'P",
                      description: "Réalisation de la partie back-end du projet TRY'P, une plateforme de référencement des lieux de travails pour freelances, avec de nomreuses fonctionnalités.",
                      link: "http://tryp-prod.herokuapp.com",
                      technologies: [
                          require('@/assets/ruby.png'),
                          require('@/assets/rails.png'),
                          require('@/assets/html.png'),
                          require('@/assets/css.png'),
                          require('@/assets/js.png'),
                          require('@/assets/jQuery.png'),
                          require('@/assets/bootstrap.png'),
                          require('@/assets/postgreSQL.png')
                      ]
                  },
                  {
                      img: require('@/assets/kittens.png'),
                      name: 'Kittens marketplace',
                      description: "Réalisation d'une marketplace de commerce de photos de chats.",
                      link: "https://marketplace-production.herokuapp.com",
                      technologies: [
                          require('@/assets/ruby.png'),
                          require('@/assets/rails.png'),
                          require('@/assets/html.png'),
                          require('@/assets/css.png'),
                          require('@/assets/js.png'),
                          require('@/assets/jQuery.png'),
                          require('@/assets/bootstrap.png'),
                          require('@/assets/postgreSQL.png')
                      ]
                  }
                  
              ]
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
