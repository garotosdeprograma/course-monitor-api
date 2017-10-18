import openConnection from '../database-actions/open-connection';
import save from '../database-actions/save-collection';

export default (model, schema, body) => {
    const connection = openConnection();
    const Model = connection.model(model, schema);
    const document = new Model(body);
    return null;
    // return save(document, connection);
};
