import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useHistory } from "react-router";
import ApiCalendar from 'react-google-calendar-api';
import { Modal, Button } from 'antd';
import GoogleCalendar from './GoogleCalendar';
import GoogleCalendarPlus from './GoogleCalendarPlus';

const Calendario = () => {
    const [visible, setVisible] = useState(false)
    const [permission, setPermission] = useState(false)
    const handleItemClick = (event, name) => {
        if(!ApiCalendar.sign){
            if (name === 'sign-in') {
                ApiCalendar.handleAuthClick();
                ApiCalendar.sign = true;
                if(ApiCalendar.sign){
                    setVisible(true)
                } else{
                    alert("Faall")
                }
            } else if (name === 'sign-out') {
                ApiCalendar.handleSignoutClick();
                window.location.reload(false);
            }
        }else{
            setVisible(true)
        }
    }

    const eventFromNow = {
        summary: 'Poc Dev From Now',
        time: 480,
    };


    const getCalendar = () => {
        if (ApiCalendar.sign) {
            ApiCalendar.createEventFromNow(eventFromNow)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log(ApiCalendar.sign)
        }
    }

    const getList = () => {
        var date = new Date().toISOString()
        if (ApiCalendar.sign)
            ApiCalendar.listEvents({
                timeMin: "2021-09-29T05:18:44.608Z",//new Date().toISOString(),
                timeMax: new Date().toISOString(),
                showDeleted: true,
                maxResults: 10,
                orderBy: 'updated'
            }).then(res => {
                if (res.result.items) {
                    console.log(res.result.items)
                } else {
                    console.log("sin items")
                }
            });
        console.log(date)
    }

    const onPanelChange = (value, mode) => {
        console.log(value, mode);
    }

    useEffect(() => {
        setPermission(ApiCalendar.sign);
        console.log(ApiCalendar.sign)
    })


    return (
        <>
            <Button
                onClick={(e) => handleItemClick(e, 'sign-in')}

            >
                Calendario
            </Button>
            {/* <button onClick={getCalendar}>Crear evento</button> */}
            {/* <button
                onClick={(e) => handleItemClick(e, 'sign-out')}
            >
                sign-out
            </button> */}
            {/* <button
                onClick={getList}
            >
                getEvents
            </button> */}

            {/* <Button type="primary"  onClick={(e) => handleItemClick(e, 'sign-in')} >
                Ver calendario
            </Button> */}
            <Modal
                title="Google calendar"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
                footer={false}
            >
                <GoogleCalendarPlus />
                <GoogleCalendar />
            </Modal>

        </>);

}

export default Calendario;