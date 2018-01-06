import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import logo from './logo.svg';

class Component extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            plus: '',
            minus: ''
        }
    }

    handleAddButtonClick = () => {
        import('./method.js').then(({ add }) => {
            this.setState({
                plus: add(1, 2)
            })
        });
    }

    handleMinusButtonClick = () => {
        // HTTP 请求不会重复发送, 当然也可以不重复书写 import
        import('./method.js').then(({ minus }) => {
            this.setState({
                minus: minus(2, 1)
            })
        });
    }

    render() {
        return (
            <div>
                <img className="logo" src={logo} />
                Hello Parcel

                <div className="item">
                    1 + 2
                    <span className="btn" onClick={this.handleAddButtonClick}>=</span>
                    {this.state.plus}
                </div>

                <div className="item">
                    2 - 1
                    <span className="btn" onClick={this.handleMinusButtonClick}>=</span>
                    {this.state.minus}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Component />, document.getElementById('root'));

