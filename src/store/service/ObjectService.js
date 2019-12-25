import axios from 'axios'


const ObjectService = {


    getAllCards() {

        return axios.get(`https://api.jqestate.ru/v1/properties/country`)
            .then(response => {
                debugger
                if (response.status == 200) {
                    return response.data
                }
            })
            .catch(e => {
                return e;
            });

    },


    pushCreateService(payloads) {
        localStorage.setItem('payloads', JSON.stringify(payloads));
        const reslut = JSON.parse(localStorage.getItem('payloads'));
        return reslut;
    },

};


export default ObjectService;
