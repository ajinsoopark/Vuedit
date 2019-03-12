import React, { Component } from 'react'
import { withRouter } from 'react-router'

class NavDropdown extends Component {

    render () {
        const subChoices = this.props.subvueditList ? 
            this.props.subvueditList.map(sub => {
                return (
                    <option className='subChoice' value={sub.id}>
                        { sub.sub_name }
                    </option>
                )   
            }) : '';

        console.log(this.props)
        return (
            <div className='dropDownChoiceDiv'>
                
            </div>
        )
    }
}

export default withRouter(NavDropdown);