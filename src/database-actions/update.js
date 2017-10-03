import closeMongoConnection from './close-connection';
import openMongoConnection from './open-connection'

export default (model, filter, load) => {
    openMongoConnection.connection.once('open', function () {
        model.update(filter, load, function (err) {
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