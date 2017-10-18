export default (error) => {
    const errorMessages = [];
    if(error instanceof String) {
        return error;
    }
    for(const err in error) {
        let prop = error[err];
        errorMessages.push(error[err].message)
    }
    return errorMessages;
}