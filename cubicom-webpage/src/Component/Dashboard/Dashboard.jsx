import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import Sidebar from '../Sidebar/Sidebar'
import TopPanel from './TopPanel'
import data from '../../../src/data.json'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const open = this.props.open
        console.log(open)
        return (
            <div className={styles.dashboard}>
                {open?<Sidebar />:""}
                <div className={styles.content}>
                    <div className={styles.top_heading}>
                        <div className={styles.heading}><h3>Dashboard</h3></div>
                        <div className={styles.side_items}>
                            <div className={styles.search}><img src="../../../Resources/search.png" alt="search" /></div>
                            <div className={styles.cal}><img src="../../../Resources/cal.png" alt="cal" /></div>
                            <div><small>12/12/2019 - 18/12/2019</small></div>
                        </div>
                    </div>
                    <div className={styles.panel_div}>
                        <TopPanel />
                    </div>
                    <div className={styles.middle_heading}>
                        <div className={styles.heading}><h3>FE Performance</h3></div>
                    </div>
                    <div className={styles.panel_div}>
                        <table>
                            <thead>
                                <tr>
                                    <th><h5>FE NAME</h5></th>
                                    <th><h5>DEL</h5></th>
                                    <th><h5>UNDEL</h5></th>
                                    <th><h5>NA</h5></th>
                                    <th><h5>DELIVERY IN %</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => {
                                    return (
                                        <tr className={styles.row}>
                                            <td className={styles.alignment}>{item["FE NAME"]}</td>
                                            <td>{item["DEL"]}</td>
                                            <td>{item["UNDEL"]}</td>
                                            <td>{item["NA"]}</td>
                                            <td className={styles.progress}>{item["DELIVERY IN %"]}
                                                <div className={styles.progress_bar}>
                                                    <div className={styles.bar_percent} style={{ width: item["DELIVERY IN %"] }}>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        open: state.open
    }
}
export default connect(mapStateToProps)(Dashboard)
