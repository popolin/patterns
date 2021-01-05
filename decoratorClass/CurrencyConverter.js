import axios from 'axios';

const CurrencyConverter = (base, to) => {
    const API_KEY = '8a9b48c6e4885622e874';

    return function(target, name, descriptor){
        try {
            const fn = descriptor.value; // Funcão original

            // Agora podemos redefinir o método para incluir novas funcionalidades e herdar a original:
            descriptor.value = async(...args) => {
                // Definir o decorator
                const result = await fn.call(this, ...args);
                const url = `https://free.currconv.com/api/v7/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y&apiKey=${API_KEY}`
                const resultRate = await axios(url);
                const currencyRate = resultRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`]['val'];

                return result * currencyRate;
            }
            return descriptor;
        } catch(err){
            console.log(err);
        }
    }
}

export default CurrencyConverter;