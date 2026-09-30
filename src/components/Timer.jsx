import '../Timer.css'
import { onIncrement, onDecrement, onCountdown } from '../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Timer(props) {
    const { h, m, s } = timeFormatter(props.time);

    const incTimer = () => {
        if (props.seconds >= 0) {
            props.increment(secondsToTime);
        }
    };

    const decTimer = () => {
        if (props.seconds > 0 && timer === 0) {
            props.decrement(secondsToTime);
        }
    };

    function countDown(props) {
        return props.countDown(secondsToTime);
    }

    const startTimer = () => {
        if (props.seconds > 0 && timer === 0) {
            setTimer(setInterval(countDown, 1000));
        }
    };

    useEffect(() => {
        if (props.getIncrementFunction) {
            props.getIncrementFunction(incTimer);
        }
        if (props.getDecrementFunction) {
            props.getDecrementFunction(decTimer);
        }
    }, [props.seconds]);

    const [timer, setTimer] = useState(0);

    return (
        <div className="timer-container">
            <span className="timer">{h}:{m}:{s}</span>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        time: state.time,
        seconds: state.seconds,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (fn) => dispatch(onIncrement(fn)),
        decrement: (fn) => dispatch(onDecrement(fn)),
        countdown: (fn) => dispatch(onCountdown(fn)),
    }
}

function secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let minutes = Math.floor((secs % (60 * 60)) / 60);
    let seconds = Math.floor((secs % (60 * 60)) % 60);
    return { h: hours, m: minutes, s: seconds };
}

function timeFormatter({ h, m, s }) {
    if (String(h).length < 2) {
        h = `0${h}`;
    }
    if (String(m).length < 2) {
        m = `0${m}`;
    }
    if (String(s).length < 2) {
        s = `0${s}`;
    }
    return { h, m, s };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
