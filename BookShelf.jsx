import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState({})
    const [newBook, setNewBook] = useState([])
    
    const handleInputChange = (event) => {

    }

    const handleSubmit = (event) => {

    }

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
            <h3>Add a Book</h3>
            {/* Form will go here */}
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )

}



export default Bookshelf

