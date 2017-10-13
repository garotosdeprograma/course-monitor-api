import closeMongoConnection from './close-connection';
import openMongoConnection from './open-connection'

const connection = openMongoConnection;

// export default (model) => {
//     openMongoConnection.connection.once('open', function () {
//         model.find(function (err, obj) {
//             if (err) {
//                 console.log(err)
//                 closeMongoConnection(openMongoConnection);            
//             }
//             else {
//                 console.log(obj);
//                 closeMongoConnection(openMongoConnection);
//             };
//         });         
//     });    
// };