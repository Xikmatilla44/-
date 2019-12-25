const ObjectService= {



    pushCreateService(payloads) {
        localStorage.setItem('payloads', JSON.stringify(payloads));
        const reslut = JSON.parse(localStorage.getItem('payloads'));
        return reslut;
    },

};


export default ObjectService;
