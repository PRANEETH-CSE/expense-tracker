import './edit.css';

function Edit() {
    return (
        <div className="edit-container">
            <h2>Edit Expense</h2>
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

                <label className='date' htmlFor="date">Date:
                <input type="date" className='input ' id="date" name="date" required />
                </label>

                <button className='button' type="submit">Search</button>
            </form>
            <form className='form'>
                <label htmlFor="description">Category:

                <input type="text" className='input text' id="description" name="description"  />
                </label>

                <label className='amount' htmlFor="amount">Amount:

                <input type="number" className='input ' id="amount" name="amount" />
                </label>

                <label className='date' htmlFor="date">Date:
                    
                <input type="date" className='input ' id="date" name="date"  />
                </label>

                <button className='button' type="search">Save Changes</button>
            </form>
        </div>
    );
}
export default Edit;