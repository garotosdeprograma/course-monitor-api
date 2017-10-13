import closeConnection from './close-connection';
import openConnection from './open-connection';

export default (model, connection) => {

    return model.save().then(result => {
        closeConnection(connection);
        return result;
    })
    .catch(err => {
        console.error(err);
        closeConnection(connection);        
    })
}
