



// describe('plugin', () => {


//     cy.session(user_phrases, () => {
//         cy.intercept({
//           method: 'GET',
//           url: 'https://api.gigaaa.link/regional/organizations/7d57dd80-3bda-4474-9045-999ab4f6da44/projects/417fbbb7-5587-4db4-aa7a-90e6c37fd38d/integration/environment/intents-phrases-reply',
//           headers: {
//             'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI3IiwiYnMiOiJmOGYzZDA3ZC1lZjk1LTQwOGItODA1ZC03N2JmYTcxMTAxZjMiLCJjaWQiOiI3IiwiZXhwIjoxNzA4MTg1MzkzLCJqdGkiOiIwN2MwZmU5NS0xOWNlLTQ0YTEtYmZiMC0wMTNmY2U1NmNkZTEiLCJzdWIiOiIzOTkzMiJ9.jN-gyI1L7t8w0H_iIFcj9ZZqxE_PgNSmbBv3e_zzTSFIgXlF12EzWlFdI9zNxY-YjRPrGtALWcAvWPU0Gbh3DhWN-L2CPVwhOh9dX0EDD-QS2jeWipUkVexymGEN2yc4qkYaCaCZD0o4FKjiXRz-2JBMs5oov8KlU2S3VpfVRH6MQMBURdjgcEDZBlXI38Lw0V2CexH0Hutwmo4mM5Zv6ikh9Mf0aSGFEzulzrOZqNKiLtjgKDxYRCRAuaQNtSGM22JWKflzf6rYRMLSZHMDHQVycV80n9VBFk45E-Dg24llJAdzh_I50jWE2qKgw0KAT4qklUkGdkwmXtPO7ODhu4H5hRiNP4kS-qoeMt390XUCONs3lKkSTpw7YF0DlRlYLmNnzad9aNrh47BFbQ8buGjUIKw6gUzKvrOFUO-j3yQrCFWn4CRqoUgkfzsOePOzV0CpJIYpHHTM_qzcpp4MmxPJE3fVd79rleTJkLP_p7mBgsgwRlObBTUhpxr5ltBRV1BA5L4h0MYMKvSYmWxeNXJjEtAxLYVOpscHcrXeLCu5SEq3uVfQ-uQggLIKsFQ5cVZXiGSuF8ekp6YtUifdnP9fzxuu66_Pm5OKYFQbwQ-ZJ9N7yITmip7wSoT_FPaES7hntYB9FVIkcF2SPhpVRdeW32UX22M5gQZfG5xYACc'
//         }  
       

//         // cy.visit('https://plugins.gigaaa.com/plugin_website/index.html')
//         // cy.get('#logo_button').click()
//         // cy.get('#text_input').type('user_phrase')
        

        


//     })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })




Cypress.config('experimentalSessionSupport', true)

let sessionCallCount = 0;

Cypress.session.clearAllSavedSessions()   // to avoid caching across browser reload

beforeEach(() => {                   
  cy.session('mySession', () => {  
    let res
   
    cy.request({
                  method: 'GET',
                  
                  url: 'https://api.gigaaa.link/regional/organizations/7d57dd80-3bda-4474-9045-999ab4f6da44/projects/417fbbb7-5587-4db4-aa7a-90e6c37fd38d/integration/environment/intents-phrases-reply',
                  headers: {
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI3IiwiYnMiOiJmOGYzZDA3ZC1lZjk1LTQwOGItODA1ZC03N2JmYTcxMTAxZjMiLCJjaWQiOiI3IiwiZXhwIjoxNzA4MTg1MzkzLCJqdGkiOiIwN2MwZmU5NS0xOWNlLTQ0YTEtYmZiMC0wMTNmY2U1NmNkZTEiLCJzdWIiOiIzOTkzMiJ9.jN-gyI1L7t8w0H_iIFcj9ZZqxE_PgNSmbBv3e_zzTSFIgXlF12EzWlFdI9zNxY-YjRPrGtALWcAvWPU0Gbh3DhWN-L2CPVwhOh9dX0EDD-QS2jeWipUkVexymGEN2yc4qkYaCaCZD0o4FKjiXRz-2JBMs5oov8KlU2S3VpfVRH6MQMBURdjgcEDZBlXI38Lw0V2CexH0Hutwmo4mM5Zv6ikh9Mf0aSGFEzulzrOZqNKiLtjgKDxYRCRAuaQNtSGM22JWKflzf6rYRMLSZHMDHQVycV80n9VBFk45E-Dg24llJAdzh_I50jWE2qKgw0KAT4qklUkGdkwmXtPO7ODhu4H5hRiNP4kS-qoeMt390XUCONs3lKkSTpw7YF0DlRlYLmNnzad9aNrh47BFbQ8buGjUIKw6gUzKvrOFUO-j3yQrCFWn4CRqoUgkfzsOePOzV0CpJIYpHHTM_qzcpp4MmxPJE3fVd79rleTJkLP_p7mBgsgwRlObBTUhpxr5ltBRV1BA5L4h0MYMKvSYmWxeNXJjEtAxLYVOpscHcrXeLCu5SEq3uVfQ-uQggLIKsFQ5cVZXiGSuF8ekp6YtUifdnP9fzxuu66_Pm5OKYFQbwQ-ZJ9N7yITmip7wSoT_FPaES7hntYB9FVIkcF2SPhpVRdeW32UX22M5gQZfG5xYACc'
                  },                    
                
      onBeforeLoad: (window) => {
        window.sessionStorage.setItem('user_phrases', body.user_phrase)
        sessionCallCount++
      }
      
    }).then( ({ body }) => {
        res = body
      })
  

})

it('t1', () => {
  cy.window().then(window => {
    let data = window.sessionStorage.getItem('user_phrase')
    expect(data).to.eq("Mile's Circle - Cancel")
    expect(sessionCallCount).to.eq(1)
  })
})

it('t2', () => {
  cy.window().then(window => {
    let data = window.sessionStorage.getItem('myKey')
    expect(data).to.eq('someInfo')          
    expect(sessionCallCount).to.eq(1)        // cached code is called only once
  })
})
})

describe('Quickpanel', () => {
    it('plugin', () => {
        
        cy.visit('https://plugins.gigaaa.com/plugin_website/index.html')
         cy.get('#logo_button').click()
         cy.get('#text_input').type(data.user_phrase)

    })

})