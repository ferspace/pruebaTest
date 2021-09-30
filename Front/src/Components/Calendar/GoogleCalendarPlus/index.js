import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useHistory } from "react-router";
import ApiCalendar from 'react-google-calendar-api';
import { Modal, Button,Input } from 'antd';

const GoogleCalendarPlus = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [item, setItem] = useState("");
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        const eventFromNow = {
            summary: item,
            time: 480,
            end:{
                dateTime: "2021-09-31T17:57:57-05:00",
                timeZone: "Europe/Paris"
            }
        };
        getCalendar(eventFromNow)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    


    const getCalendar = (event) => {
        if (ApiCalendar.sign) {
            ApiCalendar.createEventFromNow(event)
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

    return (

        <>
            <Button type="primary" onClick={showModal}>
                Añadir
            </Button>
            <Modal title="Añadir evento" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Nombre del evento" onChange={(e)=>{setItem(e.target.value)}} value={item}/>
            </Modal>
        </>
    )

}

export default GoogleCalendarPlus;