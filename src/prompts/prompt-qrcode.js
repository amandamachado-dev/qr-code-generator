import chalk from "chalk";
import prompt from "prompt";

const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow('Digite o link para gerar o QR CODE'),
    },
    {
        name: 'type',
        description: chalk.yellow('Escolha entre o tipo(1-NORMAL ou (2- terminal'),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha apenas entre 1 e 2'),
        required: true
    },
];

export default promptQRCode;