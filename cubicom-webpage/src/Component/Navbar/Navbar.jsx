import React, { Component } from 'react'
import styles from './Navbar.module.css'
import { connect } from 'react-redux'
import { openSidebar } from '../../Redux/Actions'

class Navbar extends Component {

    show =() => {
        this.props.openSidebar()
    }
    render() {
        const open = this.props.open
        console.log(open)
        return (
            <div className={styles.navbar}>
                {!open?(<div>
                    <div className={styles.menu} onClick={this.show}>
                        <b><hr/></b>
                        <b><hr/></b>
                        <b><hr/></b>
                    </div>
                </div>):""}
                <div className={styles.logo}>
                    <img  src="../../../Resources/logo.svg" alt="brand logo" />
                </div>
                <div className={styles.select}>
                    <select  name="location" id="location">
                        <option value="Location 1">Location 1</option>
                    </select>
                </div>
                <div className={styles.profile_image}>
                    <img  src="../../../Resources/STT.png" alt="user profile" />
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        open: state.open
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openSidebar: ()=>dispatch(openSidebar())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)