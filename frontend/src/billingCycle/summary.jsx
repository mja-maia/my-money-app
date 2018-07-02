import React, { Component } from 'react';

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'


class Summary extends Component{
    render(){
        const { credits, debts } = this.props
        
        return (
            <Grid cols="12">
                <fieldset>
                    <legend>Resumo</legend>
                    <Row> 
                        <ValueBox cols="12 4" color="green" icon="bank"
                         value={`R$ ${credits}`} text="Total de Créditos"/>
                        <ValueBox cols="12 4" color="red" icon="credit-card"
                            value={`R$ ${debts}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money"
                            value={`R$ ${credits-debts}`} text="Valor Consolidado" />
                    </Row>
                </fieldset>
            </Grid>
        )
    }
}

export default Summary