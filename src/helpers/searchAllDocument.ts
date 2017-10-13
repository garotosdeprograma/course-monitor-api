import openConnection from '../database-actions/open-connection';
import searchAll from '../database-actions/search-all';

export default (model, filter, schema) => {
    const connection = openConnection();
    const Model = connection.model(model, schema);
    return searchAll(Model, connection);
};
