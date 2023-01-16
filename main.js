const arr = [];

while (true) {
    const input = prompt("Введите команду:\n");

    if (input === "stop") {
        break;
    }

    const [command, word] = input.split(", ");

    if (command === "add") {
        arr.push(word);
    } else if (command === "del") {
        const wordIndex = arr.findIndex((item) => item === word);
        arr.splice(wordIndex, 1);
    } else {
        console.log("Poshel naxuy! takoy komandi net, ti cho, chort???");
    }

    console.log(arr);
}