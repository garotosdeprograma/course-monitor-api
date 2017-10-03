import closeMongoConnection from './close-connection';
import openMongoConnection from './open-connection'

export default (model, filter) => {
    openMongoConnection.connection.once('open', function () {
        model.find(filter, function (err, obj) {
            if (err) {
                console.log(err)
                closeMongoConnection(openMongoConnection);
            }
            else {
                console.log(obj);
                closeMongoConnection(openMongoConnection);
            };
        });
    });
};