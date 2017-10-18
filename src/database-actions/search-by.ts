import closeConnection from './close-connection';
import openConnection from './open-connection';

export default (model, filter, connection) => {
    return model.find(filter).then(result => {
        closeConnection(connection);
        return result;
    })
    .catch(err => {
        console.error(err);
        closeConnection(connection);
    })
};
