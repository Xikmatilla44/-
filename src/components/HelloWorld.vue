<template>

    <div class="navbarmi">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Продажа</b-nav-item>
                    <b-nav-item href="#" >Аренда</b-nav-item>
                    <b-nav-item href="#" >Посёлки</b-nav-item>
                    <b-nav-item href="#" >О компании</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                     <span id="but-span"><h4>+7 (495) 132-03-90</h4>
            <button id="button-col">Обратный звонок</button>
                       </span>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>




    </div>


</template>

<script>


    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },

        methods: {


        },



    }
</script>
<style scoped>

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

    #but-span h4{
        margin: 25px;
    }

    #but-span{
        display: flex;
        margin: 20px;
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
            margin-left: 50px;
            display: -ms-flexbox;
        }
    .navbar-expand-lg {
        background: white;
        height: 150px;
        -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
    }

    }



    #nav-collapse{

    }
    .navbar {
        background: white;
        -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
        box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */


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