function greet(name) {
    if(Array.isArray(name)){
        var greetings = "Hello";
        for(var i = 0; i < name.length; i++){
            greetings += ", " + name[i];
        }
        return greetings;
    }
    if (name==""){
        return "Hello there!";
    }
    if(name.toUpperCase()==name)
    {
        return "HELLO " + name + "!";
    }
    return "Hello, " + name;
}