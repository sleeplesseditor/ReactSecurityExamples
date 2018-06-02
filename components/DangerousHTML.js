import React, { Component } from 'react';

const foo = "<input placeholder='Mixed in input...' />";
const bar = "<script>alert('XSS')</script>";
const goo = `<a href='javascript:alert("XSS");'>Click Me</a>`;

//Demonstration of dangerously set InnerHTML issues
class DangerousHTML extends Component {
    render() {
        return (
            <div id="danger-div">
                <h3>Dangerous HTML</h3>
                <div dangerouslySetInnerHTML={{ __html: goo}} />
            </div>
        )
    }
}

export default DangerousHTML;