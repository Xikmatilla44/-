<template>
    <div >
        <b-card v-for="totalCardAbout in CardAbout" :key="totalCardAbout.id"
                overlay
                img-src="https://images.jqestate.ru/PRI2260-5be12c4f-jqestate-2048"
                img-alt="Card Image"
                text-variant="black"
                :title="totalCardAbout.location.routeName"
                :sub-title="totalCardAbout.location.localityName"
        >
            <b-card-text>
                {{totalCardAbout.location.routeName}} - {{totalCardAbout.location.localityName}}
                <hr/>
                {{totalCardAbout.location.regionName}}
                <br/>
                Price:   eur -  {{totalCardAbout.saleOffer.multiCurrencyPrice.eur}},  usd  -  {{totalCardAbout.saleOffer.multiCurrencyPrice.usd}},  rub  -  {{totalCardAbout.saleOffer.multiCurrencyPrice.rub}},{{totalCardAbout.saleOffer.currency}}

            </b-card-text>
        </b-card>



        <div class="vld-parent">
            <loading :active.sync="isLoading"></loading>
        </div>



    </div>
</template>

<script>

    import {mapActions, mapState} from "vuex";
    import Loading from 'vue-loading-overlay';
    export default {


        components: {
            Loading
        },

        data(){
            return {

                isLoading: false,
                CardAbout:[],
                id:''

            }
        },



        computed: {
            ...mapState('ObjectModule', [
                'listStatus', 'listCard','firstList'
            ]),


        },

        methods: {

            ...mapActions('ObjectModule', [
                 'getAllCardsStore', 'getPaginationStore', 'getSecondsPage'
            ]),
        },

        created() {

            this.isLoading = true;
            this.getAllCardsStore();
          debugger
            this.id = this.$route.params.id;
          console.log(this.id)
        },

        watch: {
            'listCard': {

            handler(value) {
               debugger
                if (value.items.length > 0){
                    this.isLoading = false;
                    debugger
                    this.CardAbout = this.listCard.items.filter((item) =>{
                        return item.id == this.id;
                    });
                    debugger

                    console.log(this.CardAbout)

                }

            }

            }}




    }
</script>

<style scoped>

</style>