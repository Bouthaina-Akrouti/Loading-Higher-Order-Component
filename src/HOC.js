import React, {Component} from 'react'
import LoadingSpinner from './LoadingSpinner'

const HOC = WrappedComponent => {
    return class extends Component {
        render(){
            return(
                this.props.isLoading ? <LoadingSpinner/> : <WrappedComponent {...this.props}/>
            )
        }
    }
}

export default HOC