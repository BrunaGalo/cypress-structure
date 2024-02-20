// <reference types="cypress" />
import { ELEMENTS as webElements } from "../components/elements.web.js";
import { ELEMENTS as mobileElements } from "../components/elements.mobile.js";
import { ASSERTIONS as webAssertions } from "../utils/assertions.web.js";
import { ASSERTIONS as mobileAssertions } from "../utils/assertions.mobile.js";

beforeEach(() => {
    cy.fixture(`${Cypress.env('platform')}/${Cypress.env('app')}/data/${Cypress.env('env').toLowerCase()}.json`).as('data')
})

export const assertions = () => {
    const platform = Cypress.env('platform')
    const application = Cypress.env('app')

    let assertion;
    let plat;

    if (platform === 'web') {
        plat = webAssertions
    }

    if (platform === 'mobile') {
        plat = mobileAssertions
    }

    switch (application) {
        case 'batata':
            assertion = plat.batata
            return assertion
        case 'cenoura':
            assertion = plat.cenoura
            return assertion
    }
}

export const elements = () => {
    const platform = Cypress.env('platform')
    const application = Cypress.env('app')

    let element;
    let plat;

    if (platform === 'web') {
        plat = webElements
    }

    if (platform === 'mobile') {
        plat = mobileElements
    }

    switch (application) {
        case 'batata':
            element = plat.batata
            return element
        case 'cenoura':
            element = plat.cenoura
            return element
    }
}