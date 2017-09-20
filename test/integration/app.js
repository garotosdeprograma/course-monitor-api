describe('Routes cursos', () => {

    const defaultCurso = {
        id: 1,
        nome: 'SI',
        lista_disciplina:['idMath','idCalculo','idPW']

    };

    describe('Route GET /cursos', () => {
        it('should return a list of cursos', (done) => {

            request
                .get('/cursos')
                .end((err, res) => {
                    
                    expect(res.body[0].id).to.be.eql(defaultCurso.id);
                    expect(res.body[0].nome).to.be.eql(defaultCurso.nome);

                    done(err);
                })
        })
    })
})