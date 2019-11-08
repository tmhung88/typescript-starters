describe('App', () => {
  it('Read the response file', () => {
    cy.fixture('generated/posts.json').then(content => {
      expect(content).to.deep.eq([
        {
          id: 1,
          title: 'json-server',
          author: 'typicode',
        },
      ])
    })
  })
})
