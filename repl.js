const repl = require("repl");
const local = repl.start("compiler started ");

local.on("exit", () => {
    console.log("REPL EXIT");
    process.exit()
})