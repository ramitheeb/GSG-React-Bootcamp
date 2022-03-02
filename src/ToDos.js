import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from "react"
import Typography from '@mui/material/Typography';
import ToDoRow from "./ToDoRow"

const initialToDos = [
    {
        id: 1,
        title: "To Do 1",
        isDone: false,
        createdAt: new Date(),
    },
    {
        id: 2,
        title: "To Do 2",
        isDone: true,
        createdAt: new Date(),
    },
    {
        id: 3,
        title: "To Do 3",
        isDone: false,
        createdAt: new Date(),
    },
    {
        id: 4,
        title: "To Do 4",
        isDone: true,
        createdAt: new Date(),
    },
    {
        id: 5,
        title: "To Do 5",
        isDone: false,
        createdAt: new Date(),
    },
    {
        id: 6,
        title: "To Do 6",
        isDone: false,
        createdAt: new Date(),
    }
]



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div hidden={value !== index} {...other}  >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const ToDos = () => {

    const [toDos, setToDos] = React.useState(initialToDos)

    const handleItemCheckboxClick = (id, newValue) => {
        const changedItem = toDos.find(item => item.id === id)


        const modifiedToDos = toDos.map((toDo) => {
            if (toDo.id !== id) return toDo;

            return {
                ...changedItem,
                isDone: newValue
            }
        })



        setToDos(modifiedToDos)


    }

    const [value, setValue] = React.useState(0);

    const done = toDos.filter(todo => todo.isDone)
    const notDone = toDos.filter(todo => !todo.isDone)


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (<div>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="To Do" />
                    <Tab label="Done" />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div style={{
                    maxHeight: '500px',
                    overflowY: 'scroll',
                }} >

                    {notDone.map(toDo =>
                        <ToDoRow {...toDo} handleItemCheckboxClick={handleItemCheckboxClick} />)}

                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{
                    maxHeight: '500px',
                    overflowY: 'scroll',
                }} >
                    {
                        done.map(toDo => <ToDoRow {...toDo} handleItemCheckboxClick={handleItemCheckboxClick} />
                        )
                    }

                </div>
            </TabPanel>

        </Box>
    </div>)
}


export default ToDos;



