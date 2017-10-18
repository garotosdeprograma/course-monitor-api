class customErro extends Error {
    message: string;
    constructor(message) {
        super();
        this.message = message;
    }
}

export default customErro;