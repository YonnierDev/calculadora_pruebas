const readline = require('readline');

class ConsoleView {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async getUserInput(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    displayResult(result) {
        console.log(`Resultado: ${result}`);
    }

    displayError(error) {
        console.error(`Error: ${error.message}`);
    }

    close() {
        this.rl.close();
    }
}

module.exports = ConsoleView; 