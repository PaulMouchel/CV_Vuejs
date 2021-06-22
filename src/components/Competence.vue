<template>
        <b-col lg="6" class="p-3" @click="visible = !visible" @mouseleave="visible = false">
            <div class="shadow p-3 bg-white rounded skill">
                <b-row>
                    <b-col col lg="3" class="d-flex align-items-center justify-content-center">
                        <img :alt="skill.name" class="img-fluid rounded" :src="skill.img" height="42" width="42">
                    </b-col>
                    <b-col col lg="9">
                        <h4 class="text-muted text-left">{{skill.name}}</h4>
                        <transition name="expend" mode="out-in">
                            <div v-if="visible" class="text-left margin-bottom-5rem">
                                {{skill.description}}
                            </div>
                        </transition>
                        <b-progress :max=10 show-value show-progress>
                            <b-progress-bar :value=skill.rating variant="info">{{skill.rating + ' / 10'}}</b-progress-bar>
                        </b-progress>
                    </b-col>
                </b-row>
            </div>
        </b-col>
</template>

<script>
export default {
  name: 'Competence',
    props: {
        skill: {
            type: Object,
            required: true
        },
    },
    data: function () {
        return {
            visible: true,
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill {
	-webkit-transition: .3s ease-in-out;
	-moz-transition: all .3s ease-in-out; /* Firefox */
    -o-transition: all .3s ease-in-out; /* IE 9 */
    -ms-transition: all .3s ease-in-out; /* Opera */
    -webkit-transform: scale(1);
	transform: scale(1);
	transition: .3s ease-in-out;
}

.skill:hover {
	-webkit-transform: scale(1.03);
	-moz-transform:scale(1.03); /* Firefox */
    -ms-transform:scale(1.03); /* IE 9 */
    -o-transform:scale(1.03); /* Opera */
	transform: scale(1.03);
}

.expend-enter-active,
.expend-leave-active{
    transition: height 1s ease-in-out;
  overflow: hidden;
}
.expend-enter,
.expend-leave-to{
     height: 0;
}



</style>