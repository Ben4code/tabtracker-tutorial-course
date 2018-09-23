import Api from './Api';

export default {
    register(credentials){
        return Api(credentials).post('register', credentials);
    }
}
 