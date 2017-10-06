import closeMongoConnection from './close-connection';
import openMongoConnection from './open-connection'

export default (model) => {
    openMongoConnection.connection.once('open', function () {
        model.save(function (err) {
            if (err) {
                console.log(err)
                closeMongoConnection(openMongoConnection);            
            }
            else {
                console.log('sucess!');
                closeMongoConnection(openMongoConnection);
            };
        });         
    });    
};