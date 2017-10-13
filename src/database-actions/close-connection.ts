export default (mongoose) => {
    mongoose.close(() => {
        console.log('Connection closed')
    });
};
