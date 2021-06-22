<template>
    <div class="hero">
        <b-container class="text-center text-light h-100 d-flex align-items-center justify-content-center pb-5">
            <b-row>
                <b-col>		
                    <h1 id="main-title">pm.dev()</h1>
                    <p id="main-title-bis">Développeur web freelance</p>
                </b-col>
            </b-row>	
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero
{
    height: 70vh;
    height: 500px;
    background-image: url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?cs=srgb&dl=code-coding-data-574071.jpg&fm=jpg');
    background-position: center;
    background-repeat: no-repeat ;
    background-size: cover;
    margin-bottom: 0px;
}

#main-title
{
    font-size: 5em;
    text-shadow: 4px 4px 6px #000;
}

#main-title-bis
{
    font-size: 2em;
    text-shadow: 4px 4px 6px #000;
}
</style>
