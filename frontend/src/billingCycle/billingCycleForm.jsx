import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    render(){
        const { handleSubmit } = this.props
        return <div>
						<form role="form" onSubmit={ handleSubmit }>
							<div className="box-body">
                                <Field name="name" component={labelAndInput}
                                label="Nome" cols="12 4" placeholder="Informe o nome" />
								<Field name="month" component={labelAndInput} 
                                    type="number"
                                    cols="12 4"
                                    label="Mês"
                                    placeholder="Informe o mês"
                                />
                                <Field name="year" component={labelAndInput}
                                    type="number"
                                    cols="12 4"
                                    label="Ano"
                                    placeholder="Informe o ano"
                                />
							</div>
							<div className="box-footer">
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</form>
					</div>;
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)