import React, { Component } from 'react'

class NavDropdown extends Component {
    constructor (props) {
        super (props)
        this.state = {
            redditFeed: ['orginal', 'popular', 'all']
        }
    }

    render () {
        return (
            <div className='dropDownChoiceDiv'>
        <button className='dropDownChoice'>
            <span className='dropDownSpan'>Popular</span>
            <svg className='popularSVG' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <g>
                    <polygon fill='none' points='0 20 20 20 20 0 0 0' />
                    <polygon fill='inherit' points='12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6' />
                </g>
            </svg>
            <svg className='menuDownSVG' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <g>
                    <path fill='inherit' d='M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535' />
                </g>
            </svg>
        </button>
        <div className='menu'>
            <input className='menuFilter' placeholder='Filter' />
            <div className='redditFeeds'>
                Reddit Feeds
            </div>
            <a id='focus-Home' role='menuitem' class='_26MVepkxZHzpNv1cuAA4JA _2MgAHlPDdKvXiG-Qbz5cbC ' tabindex='-1'
                aria-label='/' href='/'>
                <svg class='cq0sTeCPC4GI78UNPdClD _139PgjqaVJ8tq4kF4QznMX' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <g>
                        <polygon fill='none' points='0 20 20 20 20 0 0 0' />
                        <polygon fill='inherit' points='12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6' />
                    </g>
                </svg>
                <span class='_1nBP1OfpQDgTmzRFqaVult'>Popular</span>
            </a>
            <a id='focus-All' role='menuitem' class='_26MVepkxZHzpNv1cuAA4JA _2MgAHlPDdKvXiG-Qbz5cbC ' tabindex='-1'
                aria-label='/r/all' href='/r/all'>
                <svg class='cq0sTeCPC4GI78UNPdClD _139PgjqaVJ8tq4kF4QznMX' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <g fill-rule='evenodd'>
                        <polygon fill='none' points='0 20 20 20 20 .001 0 .001' />
                        <path fill='inherit' d='M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z' />
                    </g>
                </svg>
                <span class='_1nBP1OfpQDgTmzRFqaVult'>All</span>
            </a>
            <a id='focus-OC' role='menuitem' class='_26MVepkxZHzpNv1cuAA4JA _2MgAHlPDdKvXiG-Qbz5cbC ' tabindex='-1'
                aria-label='/original' href='/original'>
                <svg class='cq0sTeCPC4GI78UNPdClD _139PgjqaVJ8tq4kF4QznMX' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path fill='inherit' d='M16.9998,2.9995 C18.1028,2.9995 18.9998,3.8975 18.9998,4.9995 L18.9998,14.9995 C18.9998,16.1025 18.1028,16.9995 16.9998,16.9995 L2.9998,16.9995 C1.8978,16.9995 0.9998,16.1025 0.9998,14.9995 L0.9998,4.9995 C0.9998,3.8975 1.8978,2.9995 2.9998,2.9995 L16.9998,2.9995 Z M13.9648,13.3525 C15.2718,13.3525 16.3188,12.6745 16.8278,11.5665 L15.1818,10.9775 C14.9318,11.4765 14.4528,11.8165 13.8338,11.8165 C13.0158,11.8165 12.3478,11.0575 12.3478,9.9995 C12.3478,8.9525 13.0058,8.1735 13.8438,8.1735 C14.4528,8.1735 14.9218,8.5025 15.1308,8.9615 L16.6968,8.2435 C16.1988,7.2755 15.2108,6.6365 13.9648,6.6365 C12.0588,6.6365 10.5118,8.1335 10.5118,9.9995 C10.5118,11.8755 12.0588,13.3525 13.9648,13.3525 Z M6.6248,13.3635 C8.5408,13.3635 10.0878,11.8755 10.0878,9.9995 C10.0878,8.1335 8.5408,6.6365 6.6248,6.6365 C4.7188,6.6365 3.1718,8.1335 3.1718,9.9995 C3.1718,11.8755 4.7188,13.3635 6.6248,13.3635 Z M6.625,8.1641 C7.562,8.1641 8.262,8.9421 8.262,10.0001 C8.262,11.0481 7.562,11.8361 6.625,11.8361 C5.697,11.8361 4.998,11.0481 4.998,10.0001 C4.998,8.9421 5.697,8.1641 6.625,8.1641 Z' />
                </svg>
                <span class='_1nBP1OfpQDgTmzRFqaVult'>Original Content</span>
            </a>
        </div>
    </div>
        )
    }
}

export default NavDropdown