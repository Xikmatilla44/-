import axios from 'axios'


const ObjectService = {


    getAllCards() {

        let arr = new Array();

        return axios.get(`https://api.jqestate.ru/v1/properties/country`)
            .then(response => {
                debugger
                if (response.status == 200) {
                 debugger
                    return response.data
                }
            })
            .catch(e => {
                arr.push(...e);

                return "Errore"
            });

    },

    getPagination() {

        let arr = new Array();

        return axios.get(`https://api.jqestate.ru/v1/properties/country?pagination[offset]=1&pagination[limit]=10`)
            .then(response => {
                debugger
                if (response.status == 206) {
                    debugger
                    return response.data;
                    console.log(response.data)

                    }

            })
            .catch(e => {
                arr.push(...e);

                return "Errore"
            });

    },



    getSecondsPage(payload) {

        let arr = new Array();
        return axios.get(`https://api.jqestate.ru/v1/properties/country?pagination[offset]=20&pagination[limit]=${payload}`)
            .then(response => {
                debugger
                if (response.status == 206) {
                    debugger
                    return response.data;
                    console.log(response.data)

                }

            })
            .catch(e => {
                arr.push(...e);

                return "Errore"
            });

    },


    pushCreateService(payloads) {
        localStorage.setItem('payloads', JSON.stringify(payloads));
        const reslut = JSON.parse(localStorage.getItem('payloads'));
        return reslut;
    },

};


export default ObjectService;
