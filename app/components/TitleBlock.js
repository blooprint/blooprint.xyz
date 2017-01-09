import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import styles from './TitleBlock.css'

class TitleBlock extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { color_set, action_pending } = this.props

        var markerColor = {
            background: color_set
        }

        return (
            <div className={styles.main}>
                Title Block <br/>
                <div className={styles.markerBox} style={markerColor} />
                <div>
                <p className={styles.actionPending}>pending <img className={styles.logo} src='../resources/trademark_master.JPG' /> action = { action_pending }</p>
                </div>
            </div>
        )
    }
}

export default TitleBlock