<template>
  <div>


      <md-toolbar class="md-medium" md-elevation="1">
          <div class="md-toolbar-row">
              <div class="md-app-container">

              <md-button class="md-primary">Продажа</md-button>
              <md-button class="md-primary">Аренда</md-button>
              <md-button class="md-primary">Посёлки</md-button>
              <md-button class="md-primary">О компании</md-button>
                  <div class="container">
                      <h3>+7(495)432-45-45</h3>
                      <md-button class="md-raised md-primary">Обратный звонок</md-button>

                  </div>

              </div>
          </div>
      </md-toolbar>




  </div>
</template>

<script>

    import {mapActions, mapState} from "vuex";

    export default {

        computed: {

            ...mapState('ObjectModule', [
                'listStatus',
            ])
        },
        methods: {
            ...mapActions('ObjectModule', [
                'PushCreate',
            ]),

        },


        created() {

            this.PushCreate("salomar")
        }

    }
</script>
<style lang="scss" scoped>

    .container{
        margin-left: 20%;
        display: flex;
    }


    .md-button.md-raised:not([disabled]):active{
        box-shadow: none;
    }

    .md-button.md-raised:not([disabled]) {
        border-bottom: none!important;
    }


    .md-toolbar + .md-toolbar {
        margin-top: 16px;
    }

    .md-toolbar.md-large .md-toolbar-row, .md-toolbar.md-medium .md-toolbar-row {
        min-height: 64px;
        margin-left: 11% !important;
        text-transform: none !important;

    }

    .md-button-content {
        text-transform: none !important;
        position: relative;
        z-index: 2;
    }

    .md-button .md-ripple {
        text-transform: none !important;
        padding: 0 8px;
        display: flex;

    }
</style>