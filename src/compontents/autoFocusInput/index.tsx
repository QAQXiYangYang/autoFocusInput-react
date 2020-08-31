import React, { Component } from 'react';
import './style.scss'

interface State {
    focus: boolean,
    captcha: string
}
export default class AutoFocusInput extends Component<any, State> {
    state = {
        focus: false,
        captcha: ''
    }
    onChangeCaptcha = (e) => {
        let inputValue = e.detail.value.slice(0, 4)
        this.setState({
            captcha: inputValue
        }, () => {
            if (inputValue.length >= 4) {
                console.log('触发登陆');
            }
        });
    }
    encryMobile = () => {

    }
    render() {
        let { captcha, focus } = this.state;
        console.log(focus)
        return <div className='sendCaptcha-page'>
            <div className='sendCaptcha-title'>
                验证码
            </div>
            <div className='sendCaptcha-content'>
                <div className='mobile-num'>已发送至 '15900000000'</div>
                <div className='countdown'>重新发送</div>
            </div>

            <div className='sendCaptcha-input-container' onClick={() => {
                this.setState({
                    focus: true
                });
            }}
            >
                <input className='sendCaptcha-input' type='number'
                //  maxLength='4'
                //   onfocus={focus} 
                  onChange={this.onChangeCaptcha} />
                {
                    [0, 1, 2, 3].map((value, index) => {
                        return <div className={index === captcha.length ? 'sendCaptcha-input-box sendCaptcha-input-box-at' : 'sendCaptcha-input-box'} key={index}>
                            {
                                captcha[index]
                            }
                        </div>
                    })
                }
            </div>
        </div>
    }
}