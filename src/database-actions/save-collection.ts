import closeMongoConnection from './close-connection';
import openMongoConnection from './open-connection'

export default (model) => {
    console.log(model);
    return model.save()
    // openMongoConnection.once('open', function () {
    //     console.log("SAVE");
    //     return model.save(function (err) {
    //         if (err) {
    //             console.log(err)
    //             closeMongoConnection(openMongoConnection);            
    //         }
    //         else {
    //             console.log('sucess!');
    //             closeMongoConnection(openMongoConnection);
    //         };
    //     });         
    // });    
};