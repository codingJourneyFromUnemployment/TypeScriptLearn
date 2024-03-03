class Example {
    private secret: number = 123;
    public reveal() {
        console.log(this.secret);
    }
}

console.log(process.version)