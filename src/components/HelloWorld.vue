<template>

    <div class="navbarmi">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand @click="pushToHome"><img src="../../public/logo.jpg"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item >Продажа</b-nav-item>
                    <b-nav-item href="#" >Аренда</b-nav-item>
                    <b-nav-item href="#" >Посёлки</b-nav-item>
                    <b-nav-item href="#" >О компании</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                     <span id="but-span"><h5>+7 (495) 132-03-90</h5>
            <button id="button-col">Обратный звонок</button>
                       </span>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>




    </div>


</template>

<script>
    import {mapActions, mapState} from "vuex";


    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },


        methods: {
            ...mapActions('ObjectModule', [
                'closeAbout'
            ]),
            pushToHome(){
                this.$router.push('/');
                this.closeAbout();

            }

        },



    }
</script>
<style scoped>

    .navbarmi{
        position: sticky;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: black;
    }

    .navbar-dark .navbar-toggler {
        color: black;
        border-color: black;
    }

    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        color: #FF4C4E;
    }

    #but-span h5{
        margin: 25px;
    }

    #but-span{
        display: flex;
        margin-top: 20px;
    }

    #button-col{
        outline: none;
        height: 53px;
        width: 167px;
        border-radius: 20px 20px 20px 20px;
        background: #00b44b;
        color: white;
        margin-left: 5%;
        margin: 10px;
    }

    @media (min-width: 992px){
        .navbar-nav {
            /*margin-left: px;*/
            display: -ms-flexbox;
        }
    .navbar-expand-lg {
        background: white;
        height: 100px;

        -webkit-box-shadow: 1px 1px 1px 1px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    1px 1px 1px 1px #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         1px 1px 1px 1px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
    }

    }



    #nav-collapse{

    }
    .navbar {
        background: white;
        -webkit-box-shadow: 1px 1px 1px 1px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    1px 1px 1px 1px #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         1px 1px 1px 1px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */


    }

    .navbar-toggler, .navbar-toggler:focus {
        text-decoration: none;
        background: black;
    }

    .navbar-toggler:hover, .navbar-toggler:focus {
        text-decoration: none;
        background: black;
    }








</style>