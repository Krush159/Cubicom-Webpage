import React, { Component } from 'react'
import styles from './Sidebar.module.css'
import {closeSidebar} from '../../Redux/Actions'
import { connect } from 'react-redux'

class Sidebar extends Component {


    hide = () => {
        
        this.props.closeSidebar()
    }
    render() {
        return (
            <div>
                <div id="sidebar" className={styles.sidebar}>
                    <a href="#"><img src="../../../Resources/dshboard.png" alt="dashboard icon" /><div>Dashboard</div></a>
                    <a href="#"><img src="../../../Resources/operations.png" alt="operations icon" />Operations</a>
                    <a href="#"><img src="../../../Resources/tracking.png" alt="tracking icon" />Tracking</a>
                    <a href="#"><img src="../../../Resources/reports.png" alt="reports icon" />Reports</a>
                    <a href="#"><img src="../../../Resources/configurations.png" alt="configurations icon" />Configurations</a>
                    <div className={styles.arrow} onClick={this.hide}>
                        <div>
                            <p>&#8810;</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        closeSidebar: ()=>dispatch(closeSidebar())
    }
}
export default connect(null,mapDispatchToProps)(Sidebar)

