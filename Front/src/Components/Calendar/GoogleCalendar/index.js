import React, { useEffect, useState } from 'react'
import { Badge , Button} from 'antd';
import ApiCalendar from 'react-google-calendar-api';
import Calendar from 'react-awesome-calendar';



const now = new Date()




const GoogleCalendar = () => {
    const [events, setEvents] = useState([]);
    const [items, setItems] = useState([]);
    const [color, setColor] = useState({
        'color-1': "rgba(102, 195, 131 , 1)",
        "color-2": "rgba(242, 177, 52, 1)",
        "color-3": "rgba(235, 85, 59, 1)"
    })
    function getListData(value) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    }

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }


    useEffect(() => {
        var date = new Date().toISOString()
        if (ApiCalendar.sign) {
            ApiCalendar.listEvents({
                timeMin: "2021-09-29T05:18:44.608Z",//new Date().toISOString(),
                timeMax: new Date().toISOString(),
                showDeleted: true,
                maxResults: 10,
                orderBy: 'updated'
            }).then(res => {
                if (res.result.items) {
                    
                    var itemsDos = []
                    res.result.items.map((i, k) => {
                        
                        var item = {};
                        item.id = k
                        item.color = '#fd3153'
                        item.from = i.created
                        item.to = i.end.dateTime
                        item.title = i.summary
                        itemsDos.push(item)
                    })
                    console.log("-------->", itemsDos)
                    console.log("------------------------------>",res.result.items)
                    setItems(itemsDos)

                } else {
                    console.log("sin items")
                }
            });
        } else {
            console.log("error de login")
        }

    });

    useEffect(() => {
        eventss = JSON.stringify(items)
    })

    var  eventss = [{id: 0, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Hacer ejercicio'},
    {id: 1, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Desarrollador Web Frontend.'},
    {id: 2, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'},
    {id: 3, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'},
    {id: 4, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'},
    {id: 5, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'},
    {id: 6, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'},
    {id: 7, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'},
    {id: 8, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'},
    {id: 9, color: '#fd3153', from: '2019-05-02T18:00:00+00:00', to: '2019-05-02T18:00:00+00:00', title: 'Poc Dev From Now'}];
    return (
        <> 
            <Calendar
                events={items}
            />
        </>
    );
}

export default GoogleCalendar;