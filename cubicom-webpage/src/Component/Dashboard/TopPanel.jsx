import React, { Component } from 'react'
import styles from './TopPanel.module.css'
import { Chart } from "react-google-charts";

export default class TopPanel extends Component {

    render() {
        return (
            <div className={styles.top_panel}>
                <div className={styles.panel}>
                    <div className={styles.cards}>
                        <div className={styles.cards_top}>
                            <div><h2>121</h2></div>
                            <div className={styles.icons}>
                                <img src="../../../Resources/booking.png" alt="booking" />
                            </div>
                        </div>
                        <div className={styles.cards_bottom}>
                            <h6>BOOKING</h6>
                            <small>No.of Waybills</small>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.cards_top}>
                            <div><h2>55</h2></div>
                            <div className={styles.icons}>
                                <img src="../../../Resources/ofd.png" alt="ofd" />
                            </div>
                        </div>
                        <div className={styles.cards_bottom}>
                            <h6>OFD</h6>
                            <small>Out for Delivery</small>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.cards_top}>
                            <div><h2>430</h2></div>
                            <div className={styles.icons}>
                                <img src="../../../Resources/booking.png" alt="booking" />
                            </div>
                        </div>
                        <div className={styles.cards_bottom}>
                            <h6>DEL</h6>
                            <small>Delivered</small>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.cards_top}>
                            <div><h2>23</h2></div>
                            <div className={styles.icons}>
                                <img src="../../../Resources/booking.png" alt="booking" />
                            </div>
                        </div>
                        <div className={styles.cards_bottom}>
                            <h6>UNDEL</h6>
                            <small>Undelivered</small>
                        </div>
                    </div>
                </div>
                <div className={styles.side_pie}>
                    <Chart
                        width={'150px'}
                        height={'150px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Task', 'Hours per Day'],
                            ['BOOKING', 4],
                            ['OFD', 3],
                            ['DEL', 11],
                            
                            
                        ]}
                        options={{
                            legend: 'none',
                            chartArea: { left: 5, top: 5, right: 5, bottom: 5 },
                          }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            </div>
        )
    }
}