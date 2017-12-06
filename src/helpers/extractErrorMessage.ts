export default (error: Error) => {
    const errorMessages = [];
    if (error instanceof String) {
        return error;
    }
    for (let err in error) {
        if (error.hasOwnProperty(err)) {
            let prop = error[err];
            errorMessages.push(error[err].message);
        }
    }
    return errorMessages;
};
