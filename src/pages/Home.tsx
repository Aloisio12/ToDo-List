import { CheckButton } from '../components/CheckButton';
import { Strikethrough } from '../components/Strikethrough';
import { TrashButton } from '../components/TrashButton';
import { LinkedinLogo } from '@phosphor-icons/react';
import { GithubLogo } from '@phosphor-icons/react';
import { LinkSimpleHorizontal } from '@phosphor-icons/react';
import './Home.scss'
import { FormEvent, useState } from "react";

 export function Home() {
    
  type Props = {
    id: number
    title: string
    done: boolean
  }
  const [tasks, setTasks] = useState<Props[]>([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = (event: FormEvent) => {
    event.preventDefault()
    if (currentTask.trim()) {
      const newTask = {
        id: tasks.length + 1,
        title: currentTask,
        done: false,
      };
      setTasks([...tasks, newTask]);
      setCurrentTask("");

      const about = document.getElementById('about');
      about!.style.display = 'none'
      
    } else {
      alert("Adicione tarefa na área!");
    }
  };

  const removeTask = (id = 1) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);

    const about = document.getElementById('about');
    const display = document.getElementById('about')!.style.display;
    if(display == 'none' && updatedTasks.length == 0) { // se o display da tag about estiver none e o comprimento das tasks atualizadas estiverem zeradas, ele mostra os créditos
      about!.style.display = 'flex'
    }
  };

  const toggleCompleted = (id = 2) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div id="container">
      <h1>ToDo List</h1>

      <div id='search'>
        <form>
          <input
            type="text"
            placeholder='Digite a tarefa'
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
          />
          <CheckButton type='submit' onClick={addTask} />
        </form>
      </div>
    
      <ul id="task">
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.done ? "line-through #FF0000" : "none",
              }}
            >
              {task.title}
            </span>
            <div id="buttonsTask">
              <Strikethrough id="done" onClick={() => toggleCompleted(task.id)} />
              <TrashButton id="remove" onClick={() => removeTask(task.id)} />
            </div>
          </li>
        ))}
      </ul>

      <span id='about'>
        Criado por Aloísio Vitório
        <div id='logos-about'>
          <a href="https://www.linkedin.com/in/aloisiovitorio/">
            <LinkedinLogo id='LinkedinLogo' size={28} />
          </a>

          <a href="https://link-tree-aloisio.netlify.app/">
            <LinkSimpleHorizontal id='LinkSimpleHorizontal' size={28} />
          </a>

          <a href="http://github.com/Aloisio12">
            <GithubLogo id='GithubLogo' size={28} />
          </a>
        </div>
      </span>
    </div>
  );
}