<template>
    <b-container>
        <b-row>
            <b-col>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, 
                    ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, 
                    orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, 
                    consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent 
                    egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus 
                    orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non 
                    diam sodales hendrerit.
                </p>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <div v-for="(skillGroup, i) in skills" :key="i">
                    <h2>{{skillGroup.name}}</h2>
                    <b-row class="rounded-lg border mb-4">
                        <Competence v-for="(skill, i) in skillGroup.data" :key="i" :skill=skill></Competence>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Competence from './Competence.vue'
export default {
  name: 'Competences',
  components: {
    Competence
  },    
    data: function () { return {
        skills: [
            {
                name: "Front end",
                data: [
                    {
                        name: 'HTML5',
                        img: require('@/assets/html.png'),
                        rating: 8,
                        description: "test djfhzgdjvzhgdjhbzdkbckzdjbckzjd zidjch zkdj cakj ckdz ckzdj kjdzb ckezb vkdzbv kdzbc kdbckzdjbc zkdbc kzdjbc kzdb kdjb kzdb vkzdb"
                    },
                    {
                        name: 'CSS3',
                        img: require('@/assets/css.png'),
                        rating: 7,
                    },
                    {
                        name: 'JS',
                        img: require('@/assets/js.png'),
                        rating: 7,
                    },
                    {
                        name: 'jQuery',
                        img: require('@/assets/jQuery.png'),
                        rating: 5,
                    },
                    {
                        name: 'Vue.js',
                        img: require('@/assets/vue.png'),
                        rating: 7,
                    },
                    {
                        name: 'Bootstrap4',
                        img: require('@/assets/bootstrap.png'),
                        rating: 8,
                    },
                    {
                        name: 'BootstrapVue',
                        img: require('@/assets/bootstrapvue.png'),
                        rating: 7,
                    }
                ]
            },
            {
                name: "Back end",
                data: [
                    {
                        name: 'Ruby',
                        img: require('@/assets/ruby.png'),
                        rating: 8,
                    },
                    {
                        name: 'Rails',
                        img: require('@/assets/rails.png'),
                        rating: 7,
                    },
                    {
                        name: 'Node.js',
                        img: require('@/assets/node.png'),
                        rating: 3,
                    },
                    {
                        name: 'Express.js',
                        img: require('@/assets/express.png'),
                        rating: 3,
                    },
                    {
                        name: 'PostgreSQL',
                        img: require('@/assets/postgreSQL.png'),
                        rating: 6,
                    },
                    {
                        name: 'RSpec',
                        img: require('@/assets/rspec.png'),
                        rating: 5,
                    }
                ]
            }
        ],
        projectManagments: {
            currentIndex: 0,
            data: [
                {
                    name: 'Git',
                    img: '@/assets/git.png',
                    text: "Git",
                },
                {
                    name: 'GitHub',
                    img: 'images/gitHub.png',
                    text: "GitHub",
                },
                {
                    name: 'Trello',
                    img: 'images/trello.png',
                    text: "Trello",
                },
                {
                    name: 'Methode Agile',
                    img: 'images/agile.png',
                    text: "J'ulise la methode Agile pour la réalisation de mes projets, elle permet de donner continuellement satisfaction au client en l'impliquant continuellement",
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