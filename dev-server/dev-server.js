"use strict";

//import react and reactDom for browser rendering
import React from "react";
import ReactDom from "react-dom";

//import the react-fsm component locally
import ReactFSM from './../src/js/index';

//render 2 different examples of the react-fsm component
ReactDom.render(
    <div>
        <ReactFSM
            name='conversation'
            config={{
                states: [
                    {
                        name: 'engage',
                        on_enter: () => {console.log('engage')}
                    },
                    {
                        name: 'get_contact_info',
                        on_enter: () => {console.log('get_contact_info')}
                    },
                    {
                        name: 'send_resources',
                        on_enter: () => {console.log('send_resources')}
                    },
                    {
                        name: 'follow_up',
                        on_enter: () => {console.log('follow_up')}
                    }
                ],
                transitions: [
                    {
                        trigger: '',
                        source: '',
                        dest: ''
                    }
                ],
                initial: 'engage'
            }}
        />
    </div>,
    document.getElementById('app-container')
);

