export default (mongoose) => {
    mongoose.connection.close(() => {
        console.log('Connection closed')
    });
};
