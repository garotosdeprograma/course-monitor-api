import openConnection from '../database-actions/open-connection';
import searchBy from '../database-actions/search-by';

export default (model, filter, schema) => {
    const connection = openConnection();
    const Model = connection.model(model, schema);
    return searchBy(Model, filter, connection);
};