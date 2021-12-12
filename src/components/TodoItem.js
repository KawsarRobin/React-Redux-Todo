import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      // initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      // animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      // whileHover={{
      //   scale: 0.9,
      //   transition: { type: "spring", duration: 0.1 },
      // }}
      // exit={{
      //   x: "-60vw",
      //   scale: [1, 0],
      //   transition: { duration: 0.5 },
      //   backgroundColor: "rgba(255,0,0,1)",
      // }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />

      <div className="btns">
        {item.completed === false && (
          <Button
            style={{ fontSize: '20px', color: 'green' }}
            onClick={() => completeTodo(item.id)}
          >
            Completed
          </Button>
        )}
        <Button
          style={{ color: 'red', fontSize: '20px' }}
          onClick={() => removeTodo(item.id)}
        >
          {' '}
          Remove
        </Button>{' '}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
