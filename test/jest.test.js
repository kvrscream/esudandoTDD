test("Principais métodos do JEST", () =>{
    let number = null;
    expect(number).toBeNull();

    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    //Para retornos diferentes
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

//Para trabalhar com objetos
test("Como trabalhar com objetos", () => {
    const objeto = {
        name: "Felipe",
        email: "felipe@fel.com"
    }

    //Verifica propriedades dentro do objeto
    expect(objeto).toHaveProperty('name');

    //Verifica retorno da propriedade do objeto
    expect(objeto).toHaveProperty('name', "Felipe");
    expect(objeto.name).toBe("Felipe");

    //Comparando Objetos
    expect(objeto).toBe(objeto);
    expect(objeto).toEqual({
        name: "Felipe",
        email: "felipe@fel.com"
    }
);

});