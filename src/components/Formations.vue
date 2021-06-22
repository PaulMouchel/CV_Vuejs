<template>
    <div>
        <b-container>
            <b-row>
                <b-col md="4" class="d-flex align-items-center justify-content-center mb-5">
                    <b-img src="@/assets/avatar.png" fluid alt="Avatar" height="200" width="200"></b-img>
                </b-col>
                <b-col md="8" class="mb-5">
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
        </b-container>

        <b-row class="bg-light py-5">
            <b-container>
                <b-col v-for="(formation, i) in formations.data" :key="i" class="shadow p-3 mb-3 bg-white rounded">
                    <b-row>
                        <b-col cols="3" class="d-flex align-items-center justify-content-center">
                            <h4 class="text-muted">{{formation.date}}</h4>
                        </b-col>
                        <b-col md="7">
                            <h5 class="text-muted text-left">{{formation.text}}</h5>
                        </b-col>
                        <b-col md="2">
                            <small class="text-right d-block">{{formation.place}}</small>
                        </b-col>
                    </b-row>
                </b-col>
            </b-container>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'Formations',
    data: function () { 
        return {
        formations: {
                data: [
                    {
                        date: 2019,
                        text: 'Autoformation sur OpenClassrooms, Udemy et formations Mike Codeur',
                        place: 'Cours en ligne',
                    },
                    {
                        date: 2019,
                        text: 'The Hacking Project, session 9',
                        place: 'Bootcamp',
                    },
                    {
                        date: 2011,
                        text: 'Licence professionnelle Automatique et Informatique Industrielle, spécialité Systèmes Informatiques Embarqués',
                        place: 'Université de Caen',
                    },
                    {
                        date: 2010,
                        text: 'DUT Génie Électrique et Informatique Industrielle',
                        place: 'IUT de Rennes',
                    },
                    {
                        date: 2008,
                        text: 'Baccalauréat scientifique option SVT mention AB',
                        place: 'Lycée Charles-François Lebrun, Coutances(50)',
                    }
                ]
            },
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
