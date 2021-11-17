const add = (a, b) => a+b;
const generateGreeting = (name='Anonymous') => `Hello ${name}`

test('Shoud add two number', ()=>{
    const result = add(5,6);
    expect(result).toBe(11)
})

test('Shoud generate greting from name', ()=>{
    const result = generateGreeting('Khairul');

    expect(result).toBe("Hello Khairul");
})

test("shoue generate for no name", ()=>{
    const resut = generateGreeting();

   expect(resut).toBe("Hello Anonymous")
})
