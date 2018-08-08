handleButtonClick(); {
    if (powerup == true) {
        this.setState({TimesClick: this.state.timesClick * 2})
    }
    else {
    this.setState({timesClick: this.state.timesClick + 1})
    }
  }

  toggleActivate = () => {
    if (powerup == false) {
      powerup = true;
    }
    else (powerup)
  }

  flipflop(); {
    if (this.clickOrNoClick) {
      src={ mania }
    elseif (this.clickOrNoClick); {
      src={ maniaFinger }
      }
    }
  }

export default Extrafunc;