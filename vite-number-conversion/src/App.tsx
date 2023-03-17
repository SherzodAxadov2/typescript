import { ChangeEvent, useState } from 'react'
import styles from './home.module.css'
import { Idata } from './interfaces'
import { data } from './constants'

const App = (): JSX.Element => {

  const [title, setTitle] = useState<string>('')
  const [arr, setArr] = useState<Idata[]>(data)

  const changeHandler =(e: ChangeEvent<HTMLInputElement>):void=>{
    setTitle(e.target.value)
  }

  const addTodo = ():void => {
    setTitle('');
    if(!title?.length) return;
    else{
      const newData = {
        title: title,
        id: new Date().getTime(),
        description: 'description'
      }
      setArr([...arr, newData]);
    }
  }
  const delTodo = (id:number):void =>{
    setArr(arr.filter(item=>(item.id!==id)))
  }
  return (
    <div>
      <div className={styles.todo}>
        <h1 className={styles.title}>App Todo</h1>
          <input type="text" placeholder='Enter todo' className={styles.input} value={title}
          onChange={changeHandler} />
          <button className={styles.button} onClick={addTodo}>Add Todo</button>

          <div className={styles.card}>{
            arr.map(item=>(
              <div key={item.id} className={styles.cardItem}>
                <p>{item.title}</p>
                <div className={styles.delBtn}>
                  <button onClick={()=>delTodo(item.id)}>Del</button>
                </div>
              </div>
            ))
          }</div>
      </div>
    </div>
  )
}

export default App