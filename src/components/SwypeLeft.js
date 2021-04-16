import React, { useState, useCallback } from 'react';
import { Group, FormItem, Textarea, CellButton, Avatar, Div } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon28AddOutline } from '@vkontakte/icons';

const SwypeLeft = () => {
	const [value, setValue] = useState('');
	const [text, setText] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault();
	};
	const onAddTextarea = useCallback(() => {
		const addText = {
			id: Math.floor(Math.random() * 100),
			title: value,
			like: false,
		};
		if (!value) {
			return;
		}
		setText([...text, addText]);
		setValue('');
	},[text, value])
	const onChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<Div className="state scroll">
			<Group>
				<FormItem className="form" top="Заметки.." onSubmit={onSubmit}>
					<Div className="textarea-block">
						<Textarea
							placeholder="Введите чтоб не забыть.."
							value={value}
							onChange={onChange}
							className="textarea"
						/>
						<CellButton
							onClick={onAddTextarea}
							before={
								<Avatar shadow={false} size={48}>
									<Icon28AddOutline />
								</Avatar>
							}
						></CellButton>
					</Div>
				</FormItem>
			</Group>
			<Div className="title-text">{text && text.map((list) => <Div className="text" key={list.id}>{list.title}</Div>)}</Div>
		</Div>
	);
};

export default SwypeLeft;
