import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [textInput, setTextInput] = useState('');

    const changeText = (event) => {
        setTextInput(event.target.value);
    }

    const changeList = () => {
        if (textInput != '') {
            setTodoList([...todoList, { id: todoList.length, text: textInput }]);
            setTextInput('');
        }
    }

    const removeComment = (event) => {
        setTodoList(todoList.filter(el => el.id !== Number(event.target.closest('button').id)));
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }} gap="18">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        TodoList
                    </Typography>
                    <Button variant="contained" onClick={changeList}>Add</Button>
                </Stack>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={textInput} onChange={changeText} />
            </Box>
            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todoList.map(element => (
                    <ListItem
                        key={element.id}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="delete" id={element.id} onClick={removeComment}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={element.text} />
                    </ListItem>
                ))}
            </List>
        </Card>
    );
}

export default TodoList;