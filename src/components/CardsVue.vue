<template>
    <div>
        <div class="container">
            <br/>
            <p>Элитная загородная недвижимость > Продажа</p>
            <h2>Элитная недвижимость в Подмосковье</h2>
            <br/>
            <hr>

        </div>


        <b-container class="bv-example-row"
                     :class="[isLoading ? 'mbordeer' : '']"
        >
            <b-row>
                <b-col sm="12" md="6" lg="4" xl="4"
                       v-for="item in dataCards"
                >
                    <b-card
                            :title="item.location.districtName"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                    >
                        <b-card-text>
                            <li>{{item.saleOffer.price}}</li>
                            <li>{{item.location.countryName}}</li>
                            <li>{{item.location.localityName}}</li>
                            <li>{{item.location.regionName}}</li>
                        </b-card-text>
                    </b-card>
                </b-col>
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
    import {mapActions, mapState} from "vuex";


    export default {


        components: {
            Loading
        },

        data() {
            return {
                isLoading: false,
                dataCards: [],
                perPage: 3,
                currentPage: 1,
                statusMassage: ''
            }
        },


        computed: {
            ...mapState('ObjectModule', [
                'listStatus', 'listCard'
            ])
        },

        methods: {

            ...mapActions('ObjectModule', [
                'PushCreate', 'getAllCardsStore'
            ]),

        },

        created() {
            this.isLoading = true;
            debugger
            this.getAllCardsStore();

        },

        watch: {

            'listCard': {
                handler(value) {
                    debugger
                    this.isLoading = false;
                    if (this.listCard.length === 1) {
                        this.statusMassage = 'Error'
                    } else {
                        this.dataCards = this.listCard.items.map(list => {
                            return {
                                id: list.id,
                                location: list.location,
                                images: list.images,
                                saleOffer: list.saleOffer,

                            };
                        });
                        console.log(this.dataCards);

                    }
                }
            }

        }


    }
</script>

<style scoped>

    loading {
        background-color: #FF4C4E;

    }

    .mbordeer {
        display: none;
    }

</style>