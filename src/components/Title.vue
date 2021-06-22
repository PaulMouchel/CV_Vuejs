<template>
    <!--------------------------------- TITLE ---------------------------------------->
    <b-row class="py-5">
        <b-col class="d-none d-sm-block">
            <div class="border-bottom h-50 line"></div>
        </b-col>
        <b-col sm="auto">
            <h1>{{text}}</h1>
        </b-col>
        <b-col class="d-none d-sm-block">
            <div class="border-bottom h-50 line"></div>
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
    border-width:3px !important;
    border-color: rgb(65, 184, 131) !important;
}
</style>
