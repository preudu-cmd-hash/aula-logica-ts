// Um Set é uma coleção que não aceita repetidos. Jogue o array num Set e volte pra array com [...].

let emails: string[] = ["a@x.com", "b@x.com", "a@x.com", "c@x.com", "b@x.com"];
let unicos = [...new Set(emails)];
alert(unicos.join("\n") + "\n(" + unicos.length + " de " + emails.length + ")");
