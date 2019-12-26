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
                Место расположения: {{totalCardAbout.location.regionName}}
                <br/>
                Цена:    rub  -  {{totalCardAbout.saleOffer.multiCurrencyPrice.rub}},  eur -  {{totalCardAbout.saleOffer.multiCurrencyPrice.eur}},  usd  -  {{totalCardAbout.saleOffer.multiCurrencyPrice.usd}} ,{{totalCardAbout.saleOffer.currency}}
               <br/>
                <span>Удобный</span><span v-for="item in totalCardAbout.equipment">
                    <li>{{item}}</li></span>

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
                'listStatus', 'listCard','firstList','closeAbout'
            ]),


        },

        methods: {

            ...mapActions('ObjectModule', [
                 'getAllCardsStore', 'getPaginationStore', 'getSecondsPage'
            ]),

            async testFound(){
                debugger

                setTimeout(()=>{
                    if (this.CardAbout.length < 1 ){
                        debugger
                    this.CardAbout = this.listCard.items.filter((item) =>{
                        debugger
                        return item.id == this.id;
                    });
                    debugger

                    console.log(this.CardAbout)
                    this.isLoading = false;
                    }

                },3000)

            }
        },

        created() {

            this.isLoading = true;
            this.getAllCardsStore();
          debugger
            this.id = this.$route.params.id;
          this.testFound();
          console.log(this.id)
        },

        watch: {
            'listCard': {

            handler(value) {
               debugger
                if (this.listCard.items > 0){
                    this.isLoading = false;
                    debugger
                    this.CardAbout = this.listCard.items.filter((item) =>{
                        return item.id == this.id;
                    });
                    debugger

                    console.log(this.CardAbout)

                }

            }

            },

            'closeAbout': {

                handler(value) {
                    if (value){
                        this.CardAbout =[];
                        this.id=''
                    }

                }

            }

        }




    }
</script>

<style scoped>


    li{
        font-family: Arial;
        color: indigo;
    }

</style>