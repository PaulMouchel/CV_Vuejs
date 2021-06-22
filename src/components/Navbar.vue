<template>
    <div id="navbar">
        <nav class="py-2 d-none d-md-block">
            <ul class="d-flex flex-row justify-content-center">
                <li class="mx-3"><a href="#accueil">Accueil</a></li>
                <li class="mx-3"><a href="#engagements">Engagements</a></li>
                <li class="mx-3"><a href="#realisations">Réalisations</a></li>
                <li class="mx-3"><a href="#formations">Formations</a></li>
                <li class="mx-3"><a href="#competences">Compétences</a></li>
                <li class="mx-3"><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <nav class="py-2 d-md-none">
            <div class="hamburger" :class="{change: hamburgerMenuVisible}" @click="toggleHamburgerMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <ul class="d-flex flex-row justify-content-between" :class="{hidden: !hamburgerMenuVisible}">
                <li class="mx-3 d-block"><a href="#accueil">Accueil</a></li>
                <li class="mx-3"><a href="#formations">Formations</a></li>
            </ul>
            <ul class="d-flex flex-row justify-content-between" :class="{hidden: !hamburgerMenuVisible}">
                <li class="mx-3"><a href="#engagements">Engagements</a></li>
                <li class="mx-3"><a href="#competences">Compétences</a></li>
            </ul>
            <ul class="d-flex flex-row justify-content-between" :class="{hidden: !hamburgerMenuVisible}">
                <li class="mx-3"><a href="#realisations">Réalisations</a></li>
                <li class="mx-3"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data: function () {
        return {
            hamburgerMenuVisible: false
        }
    },
    methods: {
        toggleHamburgerMenu: function() {
            this.hamburgerMenuVisible = !this.hamburgerMenuVisible;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar
{
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 7;
    background-color:white;
}

nav ul 
{
    list-style: none;
    margin: 0px;
    padding: 0px;
}
  
nav ul li a 
{
    padding-bottom: 5px;
    padding-top: 5px;
    display: block;
    text-decoration: none;
    color: rgba(0,0,0,.5);
    font-weight: bold;
    background: linear-gradient(to top, transparent 0px, transparent 5.9px, rgba(0,0,0,.6) 6px, rgba(0,0,0,.6) 7px, transparent 7.1px) no-repeat left bottom;
    background-size: 0 100%;
    transition: background-size 0.2s;
}

nav ul li a:hover 
{
    background-size: 100% 100%;
    color: rgba(0,0,0,.6);
}

nav ul li a.current 
{
    background-size: 100% 100%;
    color: rgba(0,0,0,.6);
}

a:link 
{
    text-decoration: none;
    color: rgba(0,0,0,.5);
}
  
a:visited 
{
    text-decoration: none;
    color: rgba(0,0,0,.5);
}
  
a:hover 
{
    text-decoration: none;
    color: rgba(0,0,0,.5);
}
  
a:active 
{
    text-decoration: none;
    color: rgba(0,0,0,.5);
}

.hamburger 
{
    display: inline-block;
    cursor: pointer;
    border: solid 1px rgba(0,0,0,.5);
    border-radius: 3px;
    padding: 5px;
    margin: 5px;
}
  
.bar1, .bar2, .bar3 
{
    width: 33px;
    height: 3px;
    background-color: rgba(0,0,0,.5);
    margin: 8px 0;
    transition: 0.4s;
    margin-left: 4px;
    margin-right: 4px;
}
  
/* Rotate first bar */
.change .bar1 
{
    -webkit-transform: rotate(-45deg) translate(-8px, 7px) ;
    transform: rotate(-45deg) translate(-8px, 7px) ;
}
  
/* Fade out the second bar */
.change .bar2 
{
    opacity: 0;
}
  
/* Rotate last bar */
.change .bar3 
{
    -webkit-transform: rotate(45deg) translate(-8px, -7px) ;
    transform: rotate(45deg) translate(-8px, -7px) ;
}

.hidden
{
    visibility: hidden;
    opacity: 0;
    height: 0px;
}
</style>
