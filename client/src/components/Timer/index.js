import React, { Component } from "react";

class Timer extends Component {
    state = {
        secondsRemaining: 899,
        seconds: "00",
        inOn: false
    }
    intervalHandle;

    componentDidMount() {
        var min = Math.floor((this.state.secondsRemaining + 1) / 60);

        this.setState({
            minutes: min
        })
    }

    tick = () => {
        var min = Math.floor(this.state.secondsRemaining / 60);
        var sec = this.state.secondsRemaining - (min * 60);

        this.setState({
            minutes: min,
            seconds: sec
        })

        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
            this.setState({
                value: "0" + min,
            })
        }

        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }

        this.state.secondsRemaining--
    }

    startCountDown = () => {
        console.log('here', this.state);
        this.setState({ isOn: true });
        this.intervalHandle = setInterval(this.tick, 1000);
    }

    pauseCountDown = () => {
        this.setState({ isOn: false });
        clearInterval(this.intervalHandle);
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>
                    {this.state.minutes}:{this.state.seconds}
                </h1>
                <button className="btn btn-primary" onClick={this.state.isOn ? this.pauseCountDown : this.startCountDown}>
                    {this.state.isOn ? 'Pause' : 'Start'}
                </button>
            </div>
        )
    }
}


export default Timer;