import {useState, type FC} from 'react';
import {Button, Card, message, Popconfirm, Typography} from 'antd';
import {CreateTodo} from './CreateTodo';
import type {Todo} from '../models';
import {useTodoContext, ActionType} from "../context";

interface TodoItemProps extends Todo {
}

export const TodoItem: FC<TodoItemProps> = ({
    id,
    title,
    completed,
    description,
}) => {
    const [isEditMode, setEditMode] = useState(false);
    const {dispatch} = useTodoContext();

    return (
        <Card type='inner'>
            {isEditMode ? (
                <CreateTodo
                    onEdit={() => {
                        setEditMode(false);
                    }}
                    editId={id}
                    defaultValues={{title, completed, description}}
                />
            ) : (
                <>
                    <Typography.Title level={3} style={{display: 'inline'}}>
                        {title ?? '-'}
                    </Typography.Title>
                    <Typography.Paragraph style={{display: 'inline'}}>
                        {description ?? '-'}
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{display: 'inline'}}>
                        is {!completed && 'not'} completed
                    </Typography.Paragraph>
                </>
            )}

            <Button
                onClick={() => {
                    setEditMode((prev) => !prev);
                }}
                type='text'
                danger
            >
                {isEditMode ? 'cancel editing' : 'edit'}
            </Button>
            <Popconfirm
                title="Delete the task"
                disabled={isEditMode}
                description="Are you sure to delete this task?"
                onConfirm={() => {
                    dispatch({type: ActionType.DELETE, payload: id});
                    void message.success('Deleted');
                }}
                onCancel={() => {
                    void message.error('Canceled');
                }}
                okText="Yes"
                cancelText="No"
            >
                <Button danger disabled={isEditMode}>Delete</Button>
            </Popconfirm>
        </Card>
    );
};
