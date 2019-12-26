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
                            id="my-table"
                            :items="dataCards"
                            :per-page="perPage"
                            :current-page="currentPage"


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



        <div>
            <p>Current page: {{ currentPage }}</p>
            <v-pagination v-model="currentPage"
                          aria-controls="my-table"
                          :page-count="limit"></v-pagination>
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
                currentPage: 1,
                bootstrapPaginationClasses: {
                    ul: 'pagination',
                    li: 'page-item',
                    liActive: 'active',
                    liDisable: 'disabled',
                    button: 'page-link'
                },
                paginationAnchorTexts: {
                    first: 'First',
                    prev: 'Previous',
                    next: 'Next',
                    last: 'Last'
                },  isLoading: false,
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

                            };
                        });
                        this.perPage = value.pagination.limit;


                    }
                }
            },

            'currentPage': {

                handler(value) {
                    debugger
                    this.getSecondsPage(value);
                    console.log(this.totalCard)

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

    .mbordeer {
        display: none;
    }

</style>