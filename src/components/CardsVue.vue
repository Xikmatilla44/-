<template>
    <div >
        <b-col sm="12">
            <br/>
            <p>Элитная загородная недвижимость > Продажа</p>
            <h2>Элитная недвижимость в Подмосковье</h2>
            <br/>
            <hr>

        </b-col>


        <div class="bv-example-row"
                     :class="[isBack ? 'mbordeer' : '']"
        >
            <b-row>
                <b-col sm="12" md="6" lg="4" xl="4"
                       v-for="item in dataCards"
                >
                    <b-card
                            id="my-table"
                            :items="dataCards"
                            :per-page="perPage"
                            :current-page="currentPage"

                            img-src="https://images.jqestate.ru/PRI2260-5be12c4f-jqestate-2048"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                    >
                        <b-card-text>
                            <p>Дом в посёлке *{{item.location.districtName}}* {{item.specification.area}}км ID {{item.id}}</p>
                            <h4>${{item.saleOffer.multiCurrencyPrice.usd}}</h4>
                            <v-icon name="check-square"></v-icon>  {{item.specification.area}}км
                            <v-icon name="home"></v-icon>  {{item.specification.bedrooms}}м


                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>

            <div style="position: center">
                <v-pagination v-model="currentPage.page"
                              aria-controls="my-table"
                              :page-count="limit"></v-pagination>
            </div>

        </div>


        <div class="vld-parent">
            <loading :active.sync="isLoading"></loading>
        </div>





    </div>

</template>

<script>
    // Import component
    import vPagination from 'vue-plain-pagination'
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    import {mapActions, mapState} from "vuex";


    export default {


        components: {
            vPagination,
            Loading
        },

        data() {
            return {
                limit:32,
                totalCard:[],
                perPage: 10,
                currentPage: {
                    page: 1,
                    limit: 20,
                },
                isBack:false,
                isLoading: false,
                dataCards: [],
                statusMassage: ''
            }
        },


        computed: {
            ...mapState('ObjectModule', [
                'listStatus', 'listCard','firstList'
            ]),


        },

        methods: {

            ...mapActions('ObjectModule', [
                'PushCreate', 'getAllCardsStore','getPaginationStore','getSecondsPage'
            ]),



        },

        created() {
            this.isBack = true;
            this.isLoading = true;
            debugger
            this.getPaginationStore();
            this.getAllCardsStore();


        },

        watch: {

            'firstList': {
                handler(value) {
                    debugger
                    this.isLoading = false;
                    this.isBack = false;
                    if (this.firstList.length === 1) {
                        this.statusMassage = 'Error'
                    } else {
                        debugger
                        console.log(this.firstList);
                        this.dataCards = value.items.map(list => {
                            return {
                                id: list.id,
                                location: list.location,
                                images: list.images,
                                saleOffer: list.saleOffer,
                                specification: list.specification,


                            };
                        });
                        this.perPage = value.pagination.limit;


                    }
                }
            },

            'currentPage.page': {

                handler(value) {
                    debugger
                    this.getSecondsPage(value);
                    console.log(this.totalCard)
                    this.isLoading = true;

                }

            },


            'listCard': {

                handler(value) {
                    debugger
                    if (value.length > 0){
                        this.limit = value.length;
                    }

                }

            },





        }

    }
</script>

<style scoped>

    loading {
        background-color: #FF4C4E;

    }

    svg {
        height: 15px;
    }


    .mbordeer {
        display: none;
    }

</style>