import openConnection from '../database-actions/open-connection';
import update from '../database-actions/update';

export default (model, filter, load, schema) => {
    const connection = openConnection();
    const Model = connection.model(model, schema);
    return update(Model, filter, load, connection);
};
