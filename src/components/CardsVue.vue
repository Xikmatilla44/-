<template>
 <div>
     <br/>
     <br/>



     <b-container class="bv-example-row"
                  :class="[isLoading ? 'mbordeer' : '']"
     >
         <b-row>
             <b-col sm="12" md="6" lg="4" xl="4">

                 <b-card
                         title="Card Title"
                         img-src="https://picsum.photos/600/300/?image=25"
                         img-alt="Image"
                         img-top
                         tag="article"
                         class="mb-2"
                 >
                     <b-card-text>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </b-card-text>
                 </b-card>
             </b-col>
             <b-col sm="12" md="6" lg="4" xl="4">
                 <b-card
                         title="Card Title"
                         img-src="https://picsum.photos/600/300/?image=25"
                         img-alt="Image"
                         img-top
                         tag="article"
                         style="max-width: 20rem;"
                         class="mb-2"
                 >
                     <b-card-text>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </b-card-text>
                 </b-card></b-col>
             <b-col sm="12" md="6" lg="4" xl="4">
                 <b-card
                         title="Card Title"
                         img-src="https://picsum.photos/600/300/?image=25"
                         img-alt="Image"
                         img-top
                         tag="article"
                         style="max-width: 20rem;"
                         class="mb-2"
                 >
                     <b-card-text>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </b-card-text>
                 </b-card></b-col>
         </b-row>
     </b-container>


     <div class="vld-parent">
         <loading :active.sync="isLoading"></loading>
     </div>



 </div>

</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';


    export default {
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
        },

        created() {
            this.isLoading = true;
            setTimeout(()=>{
                this.isLoading = false;
            },5000)
        }
    }
</script>

<style scoped>

    loading{
        background-color: #FF4C4E;

    }

    .mbordeer{
        display: none;
    }

</style>