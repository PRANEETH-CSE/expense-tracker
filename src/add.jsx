import './add.css';

function Add() {
    return (
        <div className="edit-container">
            <h2>Add Expense</h2>
            <form className='form'>
                <label htmlFor="description">Category:

                <input type="text" placeholder='description...' className='input text' list = 'categories' id="description" name="description" required />
                <datalist id="categories">
                                <option value="books"></option>
                                <option value="travel"></option>
                                <option value="acessories"></option>
                                <option value="entertainment"></option>
                                <option value="food"></option>
                                <option value="healthcare"></option>
                                </datalist>
                </label>

                <label className='amount' htmlFor="amount">Amount:

                <input type="number" placeholder='enter amount..' className='input ' id="amount" name="amount" required />
                </label>

                <label className='date' htmlFor="date">Date:
                    
                <input type="date" placeholder='date' className='input ' id="date" name="date" required />
                </label>

                <button className='submit' type="submit">Add Expense</button>
            </form>
        </div>
    );
}
export default Add;