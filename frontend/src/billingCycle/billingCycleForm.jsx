import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    render(){
        const { handleSubmit, readOnly } = this.props
        return <div>
						<form role="form" onSubmit={ handleSubmit }>
							<div className="box-body">
                                <Field name="name" component={labelAndInput}
                                label="Nome" cols="12 4" placeholder="Informe o nome"  readOnly={readOnly}/>
								<Field name="month" component={labelAndInput} 
                                    type="number"
                                    cols="12 4"
                                    label="Mês"
                                    placeholder="Informe o mês"
                                    readOnly={readOnly}
                                />
                                <Field name="year" component={labelAndInput}
                                    type="number"
                                    cols="12 4"
                                    label="Ano"
                                    placeholder="Informe o ano"
                                    readOnly={readOnly}
                                />
							</div>
							<div className="box-footer">
								<button type="submit" className={`btn btn-${this.props.submitClass}`}>
									{this.props.submitLabel}
								</button>
                                <button type="button" className="btn btn-default" 
                                onClick={this.props.init}>
                                    Cancelar
                                </button>
							</div>
						</form>
					</div>;
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm) 
const mapDispatchToProps = dispatch => bindActionCreators({ init },dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm) 