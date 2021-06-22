<template>
    <main class = "container-fluid text-center">
		<section id="accueil"></section>
		<!--------------------------------- MES SERVICES ---------------------------------------->

		<!--------------------------------- MES ENGAGEMENTS ---------------------------------------->
        <section id="engagements">
            <Title text="Mes engagements"/>
            <Engagements/>
        </section>
        <!--------------------------------- MES REALISATIONS ---------------------------------------->
        <section id="realisations">
            <Title text="Mes Réalisations"/>
            <Realisations/>
        </section>
        <!--------------------------------- FORMATIONS ---------------------------------------->
        <section id="formations">
            <Title text="Formations"/>
            <Formations/>	
        </section>
        <!--------------------------------- COMPETENCES ---------------------------------------->
        <section id="competences">
            <Title text="Compétences"/>
            <Competences/>
        </section>
        <!--------------------------------- CONTACT ---------------------------------------->
        <Title text="Contact"/>
        <Contact/>	
    </main>
</template>

<script>
import Engagements from './Engagements.vue'
import Realisations from './Realisations.vue'
import Formations from './Formations.vue'
import Competences from './Competences.vue'
import Contact from './Contact.vue'
import Title from './Title.vue'

export default {
  name: 'Main',
  components: {
    Engagements, Realisations, Formations, Competences, Contact, Title
  },    
}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
