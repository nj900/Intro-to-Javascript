function car (command) {
    if (command === "turnonheadlight"){
        console.log("headlight turn on")
    }
    if (command === "turnoffheadlight"){
        console.log("headlight turn off")
    }
    if (command === "startengine"){
        console.log("engine is starting")
    }
}

car ("turnonheadlight");
car ("turnoffheadlight");
car ("startengine");