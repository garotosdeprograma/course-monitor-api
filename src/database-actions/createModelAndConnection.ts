import openConnection from '../database-actions/open-connection';

export default function (model, schema): Promise<{ model, connection }> {
    return Promise.resolve()
    .then(() => {
        return openConnection();
    })
    .then(connection => {
        return {
            model: connection.model(model, schema),
            connection: connection
        }   
    })
}
