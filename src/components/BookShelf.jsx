import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })
    
    const handleInputChange = (event) => {
        console.log(event)
        event.preventDefault()
        setNewBook({...newBook, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({title:'', author:''})
    }

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
            <h3>Add a Book</h3>
            <form action="">
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    name="title" 
                    id="title"
                    value={newBook.title}
                    onChange={handleInputChange} />
                <label htmlFor="author">Author: </label>
                <input 
                    type="text" 
                    name="author"
                    id="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )

}



export default Bookshelf

