import '../Timer.css'
import { onIncrement, onDecrement, onCountdown, onReset } from '../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Timer(props) {
    const { h, m, s } = timeFormatter(props.time);

    const [timer, setTimer] = useState(0);

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

    function countDown() {
        return props.countDown(secondsToTime);
    }

    const startTimer = () => {
        if (props.seconds > 0 && timer === 0) {
            setTimer(setInterval(countDown, 1000));
        }
    };

    const stopTimer = () => {
        if (props.seconds !== 0 && timer !== 0) {
            clearInterval(timer);
            setTimer(0);
        }
    };

    const resetTimer = () => {
        if (timer !== 0) {
            clearInterval(timer);
            setTimer(0);
            props.reset();
        }
    };

    useEffect(() => {
        if (props.getIncrementFunction) {
            props.getIncrementFunction(incTimer);
        }
        if (props.getDecrementFunction) {
            props.getDecrementFunction(decTimer);
        }
        if (props.getStartFunction) {
            props.getStartFunction(startTimer);
        }
        if (props.getStopFunction) {
            props.getStopFunction(stopTimer);
        }
        if (props.getResetFunction) {
            props.getResetFunction(resetTimer);
        }
        if (props.seconds === 0 && timer !== 0) {
            clearInterval(timer);
            setTimer(0);
        }
    }, [props.seconds]);

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
        countDown: (fn) => dispatch(onCountdown(fn)),
        reset: () => dispatch(onReset()),
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
