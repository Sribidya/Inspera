 describe('Login', function(){
    it('successfully Logins User',function(){
    cy.visit('https://demo.inspera.no/ ')
    cy.get('#loginWithLocalUserTrigger').click()
    cy.get('[data-reactid=".1.1.1.3.e.0.0.0"] > .input').type('76260265')
    cy.get('[data-reactid=".1.1.1.3.e.0.0.1"] > .input').type('ygtp')
    cy.get('#languageIdSelect').select('en_us')
    cy.get('.btn > span').click()
    cy.url()
    cy.location().should((loc)=> {
        expect(loc.href).to.eq('https://demo.inspera.no/#list/76259879')
    }) 
    //start test
     cy.get('[data-reactid=".4.0.f.1.4.0"]').click()
     cy.wait(2000)
    // Go to iframe
     cy.get(':nth-child(13) > .footer__questionNo___3WNct').click()
     cy.get('.qti-image').should('be.visible')
     cy.wait(1000)

      cy.get('#\\34 8838718_content_item_1383824_47202183').screenshot()
      cy.matchImageSnapshot()
    })

    
 })

