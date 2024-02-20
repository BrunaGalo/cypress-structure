// <reference types="cypress" />
import { elements, assertions } from "../../../data/generator/load";

// Global variables
const element = elements()
const assertion = assertions()

describe('Estrutura de cenário', () => {
    it('Cenário de teste', () => {
        cy.log(element.foo)
        cy.log(assertion.foo)

        cy.get('@data').then(fixture => {
            cy.log(fixture.name)
        })
    });
});